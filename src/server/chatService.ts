import { GoogleGenAI, ThinkingLevel, type Content } from '@google/genai';

export type ChatRoleId = 'strategist' | 'quick-guide';
export type ChatLanguage = 'en' | 'ur';

export interface ChatTurn {
  role: 'user' | 'model';
  text: string;
}

export interface ChatRequestInput {
  messages: ChatTurn[];
  roleId?: ChatRoleId;
  language?: ChatLanguage;
}

export const ROLE_MODEL_MAP: Record<ChatRoleId, string> = {
  strategist: 'gemini-4-hydrogen',
  'quick-guide': 'gemini-3.1-flash-lite',
};

export function resolveChatModel(roleId?: string): string {
  if (roleId === 'quick-guide') {
    return ROLE_MODEL_MAP['quick-guide'];
  }
  return ROLE_MODEL_MAP.strategist;
}

export function buildSystemInstruction(
  roleId: ChatRoleId = 'strategist',
  language: ChatLanguage = 'en'
): string {
  const roleContext =
    roleId === 'quick-guide'
      ? 'Role: Quick Digital Growth Guide at Khans Marketing. Provide concise, practical 2–4 sentence answers focused on immediate next steps.'
      : 'Role: Senior Digital Strategy Advisor at Khans Marketing (khansmarketing.com). Help business owners, schools, teachers, clinics, and local shops understand how website structure with written copy, technical/on-page SEO, and social media marketing work together.';

  const langRule =
    language === 'ur'
      ? 'Respond primarily in clear, natural Urdu (اردو) unless the user writes in English.'
      : 'Respond in clear, professional English unless the user writes in Urdu.';

  return [
    roleContext,
    langRule,
    'Agency Services: (1) Corporate Websites, Ad Landing Pages & English/Urdu RTL Builds, (2) Shopify & WooCommerce E-Commerce Stores (COD & Local Payment Ready), (3) Domain, Hosting, SSL & Maintenance, (4) Technical & On-Page SEO + Google Business Profile & Local Maps SEO, (5) Commercial Copywriting & Online Reputation Management, (6) Meta, Google Search/YouTube & TikTok Paid Ads + Pixel/CAPI/GA4 Tracking, (7) Social Media Management, Reels Scripting, WhatsApp Business Catalogs/Routing & Brand Identity.',
    'Strict Honesty Rules: Never invent client testimonials, fake statistics, years of experience, awards, or guaranteed Google rankings. Keep pricing/timelines realistic and dependent on project scope.',
    'Direct Contact: When the user is ready to discuss a project or wants a quote, invite them to call or WhatsApp 03212995766 directly or submit the Contact page enquiry form.',
  ].join('\n');
}

export interface PreparedChatTurn {
  model: string;
  systemInstruction: string;
  history: Content[];
  latestMessage: string;
}

export function prepareChatRequest(input: unknown): PreparedChatTurn {
  if (!input || typeof input !== 'object') {
    throw new Error('Request body must be a JSON object.');
  }

  const record = input as Record<string, unknown>;
  const rawMessages = record.messages;
  if (!Array.isArray(rawMessages) || rawMessages.length === 0) {
    throw new Error('At least one chat message is required.');
  }

  const sanitized: ChatTurn[] = rawMessages
    .slice(-24)
    .map((item) => {
      if (!item || typeof item !== 'object') {
        return null;
      }
      const m = item as Record<string, unknown>;
      const role = m.role === 'model' ? 'model' : m.role === 'user' ? 'user' : null;
      const text = typeof m.text === 'string' ? m.text.trim() : '';
      if (!role || !text) {
        return null;
      }
      return { role, text: text.slice(0, 4000) } as ChatTurn;
    })
    .filter((item): item is ChatTurn => item !== null);

  if (sanitized.length === 0) {
    throw new Error('Chat messages must include non-empty text.');
  }

  const last = sanitized[sanitized.length - 1];
  if (last.role !== 'user') {
    throw new Error('The latest chat turn must come from the user.');
  }

  const roleId: ChatRoleId = record.roleId === 'quick-guide' ? 'quick-guide' : 'strategist';
  const language: ChatLanguage = record.language === 'ur' ? 'ur' : 'en';

  const history: Content[] = sanitized.slice(0, -1).map((turn) => ({
    role: turn.role,
    parts: [{ text: turn.text }],
  }));

  return {
    model: resolveChatModel(roleId),
    systemInstruction: buildSystemInstruction(roleId, language),
    history,
    latestMessage: last.text,
  };
}

export async function generateChatReply(
  input: unknown,
  apiKey: string | undefined
): Promise<{ reply: string; model: string }> {
  const trimmedKey = typeof apiKey === 'string' ? apiKey.trim() : '';
  if (!trimmedKey) {
    throw new Error('GEMINI_API_KEY is not configured in environment secrets.');
  }

  const prepared = prepareChatRequest(input);
  const ai = new GoogleGenAI({
    apiKey: trimmedKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });

  const config =
    prepared.model === 'gemini-4-hydrogen'
      ? {
          systemInstruction: prepared.systemInstruction,
          thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
        }
      : {
          systemInstruction: prepared.systemInstruction,
        };

  let lastError: unknown;
  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      const chat = ai.chats.create({
        model: prepared.model,
        config,
        history: prepared.history,
      });

      const response = await chat.sendMessage({
        message: prepared.latestMessage,
      });

      const reply = (response.text ?? '').trim();
      if (!reply) {
        throw new Error('Gemini returned an empty response.');
      }

      return {
        reply,
        model: prepared.model,
      };
    } catch (error) {
      lastError = error;
      if (attempt === 0) {
        await new Promise((resolve) => setTimeout(resolve, 450));
      }
    }
  }

  throw lastError instanceof Error ? lastError : new Error('Unable to reach Gemini API.');
}
