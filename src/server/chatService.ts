import { GoogleGenAI, ThinkingLevel, type Content } from '@google/genai';
import {
  CANONICAL_ENTITY_DEFINITION,
  HONESTY_DISCLOSURE_EN,
  SITE_CONFIG,
} from '../config/siteConfig';

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
      ? 'Role: Quick Digital Growth Guide at Khan Marketings, helping Pakistani teachers, small business owners, and companies take their next practical step. Keep answers crisp (2-4 short sentences), warm, clear, and focused.'
      : 'Role: Friendly Senior Digital Growth Advisor at Khan Marketings (khanmarketings.com), serving businesses across Pakistan — including teachers, tutors, schools, local shops, clinics, startups, creators, and large companies or exporters. Keep answers warm, ambitious, clear, and concise (2-5 sentences).';

  const langRule =
    language === 'ur'
      ? 'Language Rules: Reply in the language the user writes in. Support English, simple everyday spoken Pakistani Urdu (آسان عام فہم اردو، مختصر جملے، ویب سائٹ/گوگل/واٹس ایپ جیسے عام الفاظ اردو رسم الخط میں، بغیر مشکل فارسی/عربی الفاظ کے), and Roman Urdu (if the user writes Roman Urdu, reply helpfully in clear Roman Urdu or match their preference). When writing Urdu script, never use stiff words like مستحکم، مربوط، حکمتِ عملی، بامقصد، ترسیل، استفادہ، تشکیل، مبنی بر، بعد ازاں، مذکورہ، بصیرت.'
      : 'Language Rules: Reply in the user’s language. Support English, simple spoken Pakistani Urdu, and Roman Urdu naturally if the user uses Roman Urdu or Urdu. Keep replies concise (2-5 sentences), practical, and free of corporate buzzwords.';

  const fullServiceCatalogSummary = [
    'Full 40-Service Capabilities (Khan Marketings):',
    'A. Websites & Stores: (1) Business website design & development (custom, mobile-first, English + Urdu RTL), (2) Landing pages for ads & campaigns, (3) School, academy & teacher websites, (4) Shopify & WooCommerce e-commerce stores (COD-ready + JazzCash/Easypaisa/local payments where supported), (5) Daraz & marketplace setup/management, (6) Domain, hosting, SSL, business email & maintenance, (7) Website redesign, speed & security upgrade, (8) Website content writing & integration (EN + UR).',
    'B. Search & Reputation: (9) Technical SEO, (10) On-page SEO & content optimization, (11) Local SEO, Google Business Profile & Google Maps, (12) Keyword research, search intent & competitor analysis, (13) White-hat link building & digital PR, (14) Online reputation & review management, (15) SEO reporting & analytics (GA4, Search Console).',
    'C. Ads & Performance: (16) Facebook & Instagram ads, (17) Google Search & Display ads, (18) YouTube ads, (19) TikTok ads, (20) Tracking setup (Meta Pixel, Conversions API, GA4, GTM), (21) Lead-generation funnels, retargeting & conversion optimization.',
    'D. Social & Brand: (22) Social media strategy & management, (23) Content calendars & creatives, (24) Reels, TikTok & Shorts scripting and editing, (25) Influencer marketing & creator collaborations, (26) Brand identity (logo, colors, guidelines), (27) Community management & engagement, (28) WhatsApp Business setup, catalog, quick replies & broadcasts.',
    'E. Video & Creators: (29) YouTube channel setup, strategy & SEO, (30) YouTube channel automation & management (strictly as a repeatable production workflow for research, scripting, voice-over, editing, thumbnails & publishing — never promising views, monetization approval, or income), (31) Video production & editing, (32) Product & business photography.',
    'F. Automation, AI & Growth: (33) AI chatbots for WhatsApp & websites, (34) CRM & lead follow-up automation, (35) Email & SMS marketing, (36) Marketing automation workflows, (37) LinkedIn & B2B lead generation for companies and exporters, (38) Mobile apps & custom software on request, (39) Digital marketing consulting for owners, (40) Workshops & training for teachers, shop owners & teams.',
  ].join('\n');

  const honestyAndPricing = [
    `Strict Honesty Rules: ${HONESTY_DISCLOSURE_EN}`,
    '- NEVER invent client testimonials, client counts, years of experience, office city addresses ("serving businesses across Pakistan"), awards, badges, or review ratings.',
    '- NEVER promise guaranteed Google rankings, first-page placements, follower counts, viral videos, YouTube monetization approval, or specific sales/income numbers.',
    '- For price or timeline questions: explain that cost and timeline depend on project scope (pages, features, markets) and invite them to get a free quote or free growth plan. Do NOT quote invented PKR or USD prices.',
    '- Clients always own their domain, website files, and ad/social accounts.',
    '- Refuse unrelated, unsafe, or illegal requests politely and steer back to digital growth.',
  ].join('\n');

  const leadCaptureRule =
    `Lead Capture Flow: After giving a helpful direct answer first, ask ONE clear follow-up question at a time to learn their business type, city, goal, or preferred service — and invite them to call or message WhatsApp on ${SITE_CONFIG.phoneDisplay} (${SITE_CONFIG.whatsappHref}) or submit the Contact page enquiry form for a free growth plan.`;

  return [
    roleContext,
    langRule,
    `Canonical Entity Fact Sheet:\n${CANONICAL_ENTITY_DEFINITION}`,
    `Contact Details: Phone & WhatsApp ${SITE_CONFIG.phoneDisplay} (${SITE_CONFIG.phoneRaw}) | Email ${SITE_CONFIG.recipientEmail} | ${SITE_CONFIG.servingArea}.`,
    fullServiceCatalogSummary,
    honestyAndPricing,
    leadCaptureRule,
  ].join('\n\n');
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
