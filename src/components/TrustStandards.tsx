import React from 'react';
import type { TrustBadgeId, TrustStandardBadge } from '../i18n/types';
import { Reveal, RevealItem, RevealStagger } from './MotionPrimitives';

interface TrustStandardsProps {
  eyebrow: string;
  heading: string;
  note: string;
  badges: TrustStandardBadge[];
}

const TrustEmblem: React.FC<{ id: TrustBadgeId }> = ({ id }) => {
  switch (id) {
    case 'fast-loading':
      return (
        <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9" aria-hidden="true">
          <rect width="40" height="40" rx="8" fill="#111C18" />
          <path
            d="M10.5 25.5A10.5 10.5 0 1 1 29.5 25.5"
            stroke="#F7F4EE"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M20 22L25.5 15.5"
            stroke="#C58F38"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="20" cy="22" r="2.2" fill="#C58F38" />
          <path d="M13 28.5H27" stroke="#253A32" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'search-standards':
      return (
        <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9" aria-hidden="true">
          <rect width="40" height="40" rx="8" fill="#111C18" />
          <circle cx="18.5" cy="18.5" r="6.5" stroke="#F7F4EE" strokeWidth="1.8" />
          <path
            d="M23.5 23.5L28.5 28.5"
            stroke="#C58F38"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M15.5 18.5L17.5 20.5L21.5 16.5"
            stroke="#C58F38"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'semantic-code':
      return (
        <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9" aria-hidden="true">
          <rect width="40" height="40" rx="8" fill="#111C18" />
          <path
            d="M15.5 14L10 20L15.5 26"
            stroke="#F7F4EE"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.5 14L30 20L24.5 26"
            stroke="#F7F4EE"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.5 12.5L18.5 27.5"
            stroke="#C58F38"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'mobile-rtl':
      return (
        <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9" aria-hidden="true">
          <rect width="40" height="40" rx="8" fill="#111C18" />
          <rect
            x="13"
            y="9.5"
            width="14"
            height="21"
            rx="2.5"
            stroke="#F7F4EE"
            strokeWidth="1.75"
          />
          <path d="M17.5 14.5H23.5" stroke="#C58F38" strokeWidth="1.75" strokeLinecap="round" />
          <path d="M16.5 19H23.5" stroke="#A6B5AF" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="20" cy="26.5" r="1.2" fill="#C58F38" />
        </svg>
      );
    case 'transparent-reporting':
      return (
        <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9" aria-hidden="true">
          <rect width="40" height="40" rx="8" fill="#111C18" />
          <path
            d="M11.5 27.5V21.5M17 27.5V16.5M22.5 27.5V19.5M28 27.5V13.5"
            stroke="#F7F4EE"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="28" cy="13.5" r="2.2" fill="#C58F38" />
        </svg>
      );
  }
};

export const TrustStandards: React.FC<TrustStandardsProps> = ({
  eyebrow,
  heading,
  note,
  badges,
}) => {
  return (
    <section
      aria-label={heading}
      className="bg-[#F1EDE6] border-b border-[#E2DDD3] py-14 sm:py-16"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <div className="space-y-1.5 max-w-2xl">
              <p className="text-xs font-semibold text-[#8A5E1B]">{eyebrow}</p>
              <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-[#111C18]">
                {heading}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#4B5954] max-w-md lg:text-end leading-relaxed">
              {note}
            </p>
          </div>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {badges.map((badge) => (
            <RevealItem key={badge.id}>
              <div className="h-full rounded-xl border border-[#E2DDD3] bg-white p-5 flex flex-col justify-between gap-4 transition-colors hover:border-[#C58F38]">
                <div className="flex items-start justify-between gap-3">
                  <TrustEmblem id={badge.id} />
                  <span className="font-mono-num text-[11px] font-semibold text-[#8A5E1B]">
                    {badge.code}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-[#111C18] leading-snug">
                    {badge.title}
                  </h3>
                  <p className="text-xs text-[#4B5954] leading-relaxed">{badge.subtitle}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
};
