import React from 'react';
import { Reveal, RevealItem, RevealStagger } from '../components/MotionPrimitives';
import type { TranslationDictionary } from '../i18n/types';
import type { PageRoute } from '../utils/routing';

interface AboutPageProps {
  t: TranslationDictionary;
  onNavigate: (route: PageRoute) => void;
  onBookCall: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ t, onNavigate, onBookCall }) => {
  const p = t.aboutPage;

  return (
    <div>
      {/* Header */}
      <section className="bg-[#111C18] text-[#F7F4EE] border-b border-[#253A32] py-16 sm:py-24">
        <Reveal className="mx-auto max-w-[1200px] px-4 sm:px-6 max-w-3xl space-y-5">
          <p className="text-xs font-semibold text-[#C58F38]">{p.eyebrow}</p>
          <h1 className="font-display text-3xl sm:text-5xl font-medium tracking-tight leading-[1.1]">
            {p.headline}
          </h1>
          <p className="text-base sm:text-lg text-[#A6B5AF] leading-relaxed">
            {p.subheadline}
          </p>
          <p className="text-xs font-mono-num text-[#80928B]">{p.lastUpdatedText}</p>
        </Reveal>
      </section>

      {/* Philosophy Editorial Essay */}
      <section className="bg-white border-b border-[#E2DDD3] py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-2.5">
              <p className="text-xs font-semibold text-[#8A5E1B]">{p.philosophy.eyebrow}</p>
              <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-[#111C18]">
                {p.philosophy.heading}
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-5 text-base sm:text-[1.0625rem] text-[#4B5954] leading-relaxed">
              <div className="rounded-xl border border-[#E2DDD3] bg-[#FAF8F5] p-5 text-sm sm:text-base text-[#111C18] leading-relaxed">
                {p.canonicalEntity}
              </div>
              {p.philosophy.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* How We Work Pillars */}
      <section className="bg-[#FAF8F5] py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 space-y-12">
          <Reveal>
            <div className="max-w-2xl space-y-2">
              <p className="text-xs font-semibold text-[#8A5E1B]">{p.pillars.eyebrow}</p>
              <h2 className="font-display text-2xl sm:text-4xl font-medium tracking-tight text-[#111C18]">
                {p.pillars.heading}
              </h2>
            </div>
          </Reveal>

          <RevealStagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {p.pillars.items.map((item) => (
              <RevealItem
                key={item.number}
                className="rounded-2xl border border-[#E2DDD3] bg-white p-6 sm:p-8 space-y-3"
              >
                <span className="font-mono-num text-xs font-semibold text-[#8A5E1B]">
                  {item.number}
                </span>
                <h3 className="text-xl font-semibold text-[#111C18]">{item.title}</h3>
                <p className="text-sm sm:text-base text-[#4B5954] leading-relaxed">
                  {item.body}
                </p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-white border-t border-[#E2DDD3] py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <Reveal>
            <div className="rounded-2xl border border-[#E2DDD3] bg-[#FAF8F5] p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="max-w-2xl space-y-2">
                <p className="text-xs font-semibold text-[#8A5E1B]">
                  {p.integrationNote.eyebrow}
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#111C18]">
                  {p.integrationNote.heading}
                </h2>
                <p className="text-sm sm:text-base text-[#4B5954]">{p.integrationNote.body}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3 rounded-md bg-[#164237] text-[#F7F4EE] text-sm font-semibold hover:bg-[#1D5547] transition-colors whitespace-nowrap cursor-pointer"
                >
                  {p.integrationNote.ctaLabel}
                </button>
                <button
                  type="button"
                  onClick={onBookCall}
                  className="px-5 py-3 rounded-md border border-[#E2DDD3] bg-white text-[#111C18] text-sm font-medium hover:border-[#111C18] transition-colors whitespace-nowrap cursor-pointer"
                >
                  {t.nav.bookCall}
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
