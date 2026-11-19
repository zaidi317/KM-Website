import React from 'react';
import { Reveal, RevealItem, RevealStagger } from '../components/MotionPrimitives';
import type { TranslationDictionary } from '../i18n/types';
import type { PageRoute } from '../utils/routing';

interface SocialMediaPageProps {
  t: TranslationDictionary;
  onNavigate: (route: PageRoute) => void;
  onBookCall: () => void;
}

export const SocialMediaPage: React.FC<SocialMediaPageProps> = ({
  t,
  onNavigate,
  onBookCall,
}) => {
  const p = t.socialPage;

  return (
    <div>
      {/* Visually Distinct Warm Editorial Light Hero */}
      <section className="bg-[#FAF8F5] border-b border-[#E2DDD3] py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 space-y-12">
          <Reveal>
            <div className="max-w-3xl space-y-5">
              <p className="text-xs font-semibold text-[#8A5E1B]">{p.eyebrow}</p>
              <h1 className="font-display text-3xl sm:text-5xl font-medium tracking-tight leading-[1.1] text-[#111C18]">
                {p.headline}
              </h1>
              <p className="text-base sm:text-lg text-[#4B5954] leading-relaxed max-w-2xl">
                {p.subheadline}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3 rounded-md bg-[#164237] text-[#F7F4EE] text-sm font-semibold hover:bg-[#1D5547] transition-colors whitespace-nowrap cursor-pointer"
                >
                  {p.primaryCta}
                </button>
                <button
                  type="button"
                  onClick={onBookCall}
                  className="px-5 py-3 rounded-md border border-[#E2DDD3] bg-white text-[#111C18] text-sm font-medium hover:border-[#111C18] transition-colors whitespace-nowrap cursor-pointer"
                >
                  {p.secondaryCta}
                </button>
              </div>
            </div>
          </Reveal>

          {/* Structured Editorial Content Cadence Matrix */}
          <Reveal>
            <div className="rounded-2xl border border-[#E2DDD3] bg-white p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#F1EDE6] pb-4">
                <h2 className="font-display text-xl font-medium text-[#111C18]">
                  {p.cadenceVisual.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#4B5954]">{p.cadenceVisual.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {p.cadenceVisual.columns.map((col, idx) => (
                  <div
                    key={col}
                    className="rounded-xl border border-[#F1EDE6] bg-[#FAF8F5] p-5 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono-num text-xs font-semibold text-[#8A5E1B]">
                        0{idx + 1}
                      </span>
                      <span className="w-6 h-px bg-[#C58F38]" aria-hidden="true" />
                    </div>
                    <div className="text-base font-semibold text-[#111C18]">{col}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Editorial Strategy Intro */}
      <section className="bg-white border-b border-[#E2DDD3] py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-2">
              <p className="text-xs font-semibold text-[#8A5E1B]">{p.strategyIntro.eyebrow}</p>
              <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-[#111C18]">
                {p.strategyIntro.heading}
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-base sm:text-lg text-[#4B5954] leading-relaxed">
                {p.strategyIntro.body}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Capabilities 2-Column Editorial List */}
      <section className="bg-[#FAF8F5] py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 space-y-12">
          <Reveal>
            <div className="max-w-2xl space-y-2">
              <p className="text-xs font-semibold text-[#8A5E1B]">{p.capabilities.eyebrow}</p>
              <h2 className="font-display text-2xl sm:text-4xl font-medium tracking-tight text-[#111C18]">
                {p.capabilities.heading}
              </h2>
            </div>
          </Reveal>

          <RevealStagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {p.capabilities.items.map((item) => (
              <RevealItem
                key={item.number}
                className="rounded-2xl border border-[#E2DDD3] bg-white p-6 sm:p-7 flex gap-5 items-start"
              >
                <span className="font-mono-num text-sm font-semibold text-[#8A5E1B] pt-0.5 shrink-0">
                  {item.number}
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#111C18]">{item.title}</h3>
                  <p className="text-sm text-[#4B5954] leading-relaxed">{item.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Bridge to Website + CTA */}
      <section className="bg-[#111C18] text-[#F7F4EE] py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 space-y-12">
          <Reveal>
            <div className="max-w-2xl space-y-2">
              <p className="text-xs font-semibold text-[#C58F38]">{p.bridgeSection.eyebrow}</p>
              <h2 className="font-display text-2xl sm:text-4xl font-medium tracking-tight">
                {p.bridgeSection.heading}
              </h2>
            </div>
          </Reveal>

          <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {p.bridgeSection.points.map((point) => (
              <RevealItem
                key={point.title}
                className="rounded-2xl border border-[#253A32] bg-[#16241F] p-6 space-y-2.5"
              >
                <h3 className="text-lg font-semibold text-[#F7F4EE]">{point.title}</h3>
                <p className="text-sm text-[#A6B5AF] leading-relaxed">{point.body}</p>
              </RevealItem>
            ))}
          </RevealStagger>

          <Reveal>
            <div className="border-t border-[#253A32] pt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-1.5 max-w-xl">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#F7F4EE]">
                  {p.ctaBand.heading}
                </h3>
                <p className="text-sm text-[#A6B5AF]">{p.ctaBand.description}</p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 rounded-md bg-[#C58F38] text-[#111C18] text-sm font-semibold hover:bg-[#D4A14E] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                {p.ctaBand.buttonLabel}
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
