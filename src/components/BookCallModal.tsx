import React, { useEffect, useState } from 'react';
import { Check, Copy, MessageCircle, Phone, X } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import type { TranslationDictionary } from '../i18n/types';
import type { PageRoute } from '../utils/routing';
import type { ToastInput } from '../utils/toastQueue';

interface BookCallModalProps {
  open: boolean;
  t: TranslationDictionary;
  onClose: () => void;
  onNavigate: (route: PageRoute) => void;
  onNotify?: (toast: ToastInput) => void;
}

export const BookCallModal: React.FC<BookCallModalProps> = ({
  open,
  t,
  onClose,
  onNavigate,
  onNotify,
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) return;
    setCopied(false);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SITE_CONFIG.phoneRaw);
      setCopied(true);
      onNotify?.({
        title: t.toast.numberCopiedTitle,
        message: t.toast.numberCopiedMessage,
        variant: 'success',
      });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1310]/80 backdrop-blur-xs p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="book-call-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl border border-[#E2DDD3] bg-white p-6 sm:p-8 text-[#111C18] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="inline-flex items-center gap-2 text-[#8A5E1B]">
            <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-wide">khansmarketing.com</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.bookModal.closeLabel}
            className="inline-flex items-center justify-center w-8 h-8 rounded-md border border-[#E2DDD3] text-[#4B5954] hover:text-[#111C18] hover:border-[#111C18] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <h2
          id="book-call-modal-title"
          className="font-display mt-4 text-2xl sm:text-3xl font-medium tracking-tight text-[#111C18]"
        >
          {t.bookModal.title}
        </h2>
        <p className="mt-2.5 text-sm sm:text-base text-[#4B5954] leading-relaxed">
          {t.bookModal.description}
        </p>

        {/* Direct Phone Number Prompt Card */}
        <div className="mt-6 rounded-xl border border-[#E2DDD3] bg-[#FAF8F5] p-5 space-y-4">
          <div className="space-y-1">
            <div className="text-xs font-semibold text-[#8A5E1B]">
              {t.bookModal.phonePromptLabel}
            </div>
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <a
                href={SITE_CONFIG.phoneHref}
                dir="ltr"
                className="font-mono-num text-2xl sm:text-3xl font-semibold text-[#111C18] hover:text-[#164237] transition-colors"
              >
                {SITE_CONFIG.phoneRaw}
              </a>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#E2DDD3] bg-white text-xs font-medium text-[#111C18] hover:border-[#111C18] transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#164237]" aria-hidden="true" />
                    <span>{t.bookModal.copiedLabel}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#4B5954]" aria-hidden="true" />
                    <span>{t.bookModal.copyNumberAction}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <a
              href={SITE_CONFIG.phoneHref}
              onClick={() =>
                onNotify?.({
                  title: t.toast.callBookedTitle,
                  message: t.toast.callBookedMessage,
                  variant: 'success',
                })
              }
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#164237] text-[#F7F4EE] text-sm font-semibold hover:bg-[#1D5547] transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{t.bookModal.callNowAction}</span>
            </a>
            <a
              href={SITE_CONFIG.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                onNotify?.({
                  title: t.toast.callBookedTitle,
                  message: t.toast.callBookedMessage,
                  variant: 'success',
                })
              }
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#C58F38] text-[#111C18] text-sm font-semibold hover:bg-[#D4A14E] transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{t.bookModal.whatsappAction}</span>
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#F1EDE6]">
          <button
            type="button"
            onClick={() => {
              onClose();
              onNavigate('contact');
            }}
            className="text-sm font-semibold text-[#164237] hover:text-[#8A5E1B] underline underline-offset-4 cursor-pointer"
          >
            {t.bookModal.primaryAction}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-md border border-[#E2DDD3] text-sm font-medium text-[#4B5954] hover:text-[#111C18] transition-colors cursor-pointer"
          >
            {t.bookModal.secondaryAction}
          </button>
        </div>
      </div>
    </div>
  );
};
