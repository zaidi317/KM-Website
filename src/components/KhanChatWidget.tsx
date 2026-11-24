import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, MessageSquare, Phone, RotateCcw, Send, X } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import type { Language, TranslationDictionary } from '../i18n/types';

type ChatRoleId = 'strategist' | 'quick-guide';

interface ChatMessageItem {
  id: string;
  role: 'user' | 'model';
  text: string;
}

interface KhanChatWidgetProps {
  language: Language;
  t: TranslationDictionary;
}

export const KhanChatWidget: React.FC<KhanChatWidgetProps> = ({ language, t }) => {
  const c = t.chatWidget;
  const [open, setOpen] = useState(false);
  const [roleId, setRoleId] = useState<ChatRoleId>('strategist');
  const [messages, setMessages] = useState<ChatMessageItem[]>([]);
  const [draft, setDraft] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const scrollHostRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && scrollHostRef.current) {
      scrollHostRef.current.scrollTop = scrollHostRef.current.scrollHeight;
    }
  }, [messages, open, isSending, errorMsg]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 60);
    }
  }, [open]);

  const sendMessage = async (textToSend: string) => {
    const trimmed = textToSend.trim();
    if (!trimmed || isSending) return;

    const userMsg: ChatMessageItem = {
      id: `u-${Date.now()}`,
      role: 'user',
      text: trimmed,
    };

    const nextHistory = [...messages, userMsg];
    setMessages(nextHistory);
    setDraft('');
    setErrorMsg(null);
    setIsSending(true);

    try {
      if (window.location.protocol === 'file:') {
        setErrorMsg(c.errorFallback);
        setIsSending(false);
        return;
      }

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          roleId,
          language,
          messages: nextHistory.map((m) => ({ role: m.role, text: m.text })),
        }),
      });

      const contentType = response.headers.get('content-type') || '';
      const payload = contentType.includes('application/json')
        ? ((await response.json().catch(() => ({}))) as {
            reply?: string;
            error?: string;
          })
        : {};

      if (!response.ok || !payload.reply) {
        setErrorMsg(payload.error || c.errorFallback);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: `m-${Date.now()}`,
            role: 'model',
            text: payload.reply as string,
          },
        ]);
      }
    } catch {
      setErrorMsg(c.errorFallback);
    } finally {
      setIsSending(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    void sendMessage(draft);
  };

  const handleReset = () => {
    setMessages([]);
    setErrorMsg(null);
    setDraft('');
  };

  return (
    <div className="fixed bottom-5 end-5 z-45">
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={c.launcherLabel}
          className="inline-flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#164237] text-[#F7F4EE] border border-[#253A32] shadow-xl hover:bg-[#1D5547] transition-colors text-sm font-semibold whitespace-nowrap shrink-0 cursor-pointer"
        >
          <MessageSquare className="w-4 h-4 text-[#C58F38] shrink-0" aria-hidden="true" />
          <span>{c.launcherLabel}</span>
        </button>
      )}

      {open && (
        <section
          aria-label={c.title}
          className="w-[min(390px,calc(100vw-2rem))] h-[min(560px,calc(100vh-3rem))] rounded-2xl border border-[#253A32] bg-[#FAF8F5] shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Deep Obsidian Header */}
          <div className="bg-[#111C18] text-[#F7F4EE] px-4 py-3.5 border-b border-[#253A32] space-y-3 shrink-0">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <h2 className="text-sm font-semibold text-[#F7F4EE] truncate">{c.title}</h2>
                <p className="text-xs text-[#A6B5AF] truncate">{c.subtitle}</p>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                {messages.length > 0 && (
                  <button
                    type="button"
                    onClick={handleReset}
                    aria-label={c.clearLabel}
                    title={c.clearLabel}
                    className="inline-flex items-center justify-center w-8 h-8 rounded-md border border-[#253A32] text-[#A6B5AF] hover:text-[#F7F4EE] hover:border-[#C58F38] transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={c.closeLabel}
                  className="inline-flex items-center justify-center w-8 h-8 rounded-md border border-[#253A32] text-[#A6B5AF] hover:text-[#F7F4EE] hover:border-[#C58F38] transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Role / Model Switcher */}
            <div
              className="grid grid-cols-2 gap-1 p-0.5 rounded-lg bg-[#16241F] border border-[#253A32]"
              role="group"
              aria-label={c.roleLabel}
            >
              <button
                type="button"
                aria-pressed={roleId === 'strategist'}
                onClick={() => setRoleId('strategist')}
                className={`px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap truncate cursor-pointer ${
                  roleId === 'strategist'
                    ? 'bg-[#C58F38] text-[#111C18]'
                    : 'text-[#A6B5AF] hover:text-[#F7F4EE]'
                }`}
              >
                {c.roles.strategist}
              </button>
              <button
                type="button"
                aria-pressed={roleId === 'quick-guide'}
                onClick={() => setRoleId('quick-guide')}
                className={`px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap truncate cursor-pointer ${
                  roleId === 'quick-guide'
                    ? 'bg-[#C58F38] text-[#111C18]'
                    : 'text-[#A6B5AF] hover:text-[#F7F4EE]'
                }`}
              >
                {c.roles.quickGuide}
              </button>
            </div>
          </div>

          {/* Scrollable Message Thread */}
          <div
            ref={scrollHostRef}
            role="log"
            aria-live="polite"
            className="flex-1 overflow-y-auto p-4 space-y-3"
          >
            {/* Initial Advisor Greeting */}
            <div
              dir="auto"
              className="rounded-xl border border-[#E2DDD3] bg-white px-3.5 py-3 text-xs sm:text-sm text-[#111C18] leading-relaxed max-w-[92%]"
            >
              {c.welcomeMessage}
            </div>

            {/* Starter Prompts before first message */}
            {messages.length === 0 && (
              <div className="space-y-1.5 pt-1">
                {c.starterPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    dir="auto"
                    onClick={() => void sendMessage(prompt)}
                    className="block w-full text-start rounded-lg border border-[#E2DDD3] bg-[#F1EDE6]/70 hover:bg-white hover:border-[#C58F38] px-3 py-2 text-xs text-[#111C18] transition-colors cursor-pointer"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {/* Multi-Turn History */}
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  dir="auto"
                  className={`rounded-xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed max-w-[88%] whitespace-pre-wrap ${
                    msg.role === 'user'
                      ? 'bg-[#164237] text-[#F7F4EE]'
                      : 'border border-[#E2DDD3] bg-white text-[#111C18]'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isSending && (
              <div className="flex justify-start">
                <div className="rounded-xl border border-[#E2DDD3] bg-white px-3.5 py-2 text-xs text-[#4B5954]">
                  {c.thinkingLabel}
                </div>
              </div>
            )}

            {errorMsg && (
              <div
                role="alert"
                className="rounded-xl border border-[#E2B4B4] bg-[#FDF2F2] px-3.5 py-2.5 text-xs text-[#8C1D1D] space-y-1.5"
              >
                <p>{errorMsg}</p>
                <div className="flex flex-wrap items-center gap-3 pt-0.5">
                  <a
                    href={SITE_CONFIG.phoneHref}
                    dir="ltr"
                    className="inline-flex items-center gap-1.5 font-semibold text-[#164237] underline"
                  >
                    <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{c.callShortcutLabel}</span>
                  </a>
                  <a
                    href={SITE_CONFIG.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold text-[#8A5E1B] underline"
                  >
                    <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{c.whatsappShortcutLabel}</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Input Composer */}
          <form
            onSubmit={handleSubmit}
            className="p-3 bg-white border-t border-[#E2DDD3] flex items-center gap-2 shrink-0"
          >
            <input
              ref={inputRef}
              type="text"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder={c.inputPlaceholder}
              aria-label={c.inputPlaceholder}
              disabled={isSending}
              className="flex-1 min-w-0 px-3 py-2 rounded-lg border border-[#E2DDD3] bg-[#FAF8F5] text-sm text-[#111C18] placeholder-[#6B7973] focus:outline-none focus:border-[#C58F38]"
            />
            <button
              type="submit"
              disabled={isSending || !draft.trim()}
              aria-label={c.sendLabel}
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#164237] text-[#F7F4EE] hover:bg-[#1D5547] disabled:opacity-50 transition-colors shrink-0 cursor-pointer"
            >
              <Send className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
            </button>
          </form>
        </section>
      )}
    </div>
  );
};
