import React from 'react';
import { Check, Minus } from 'lucide-react';
import { WebBlueprintVisual } from '../components/EditorialVisuals';
import { Reveal, RevealItem, RevealStagger } from '../components/MotionPrimitives';
import type { TranslationDictionary } from '../i18n/types';
import type { PageRoute } from '../utils/routing';

interface WebDevPageProps {
  t: TranslationDictionary;
  onNavigate: (route: PageRoute) => void;
  onBookCall: () => void;
}

export const WebDevPage: React.FC<WebDevPageProps> = ({ t, onNavigate, onBookCall }) => {
  const p = t.webDevPage;

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#111C18] text-[#F7F4EE] border-b border-[#253A32] py-16 sm:py-20">
        <Reveal className="mx-auto max-w-[1200px] px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <p className="text-xs font-semibold text-[#C58F38]">{p.eyebrow}</p>
            <h1 className="font-display text-3xl sm:text-5xl font-medium tracking-tight leading-[1.1]">
              {p.headline}
            </h1>
            <p className="text-base sm:text-lg text-[#A6B5AF] leading-relaxed max-w-2xl">
              {p.subheadline}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 rounded-md bg-[#C58F38] text-[#111C18] text-sm font-semibold hover:bg-[#D4A14E] transition-colors whitespace-nowrap cursor-pointer"
              >
                {p.primaryCta}
              </button>
              <button
                type="button"
                onClick={onBookCall}
                className="px-5 py-3 rounded-md border border-[#2B4239] text-[#F7F4EE] text-sm font-medium hover:border-[#C58F38] transition-colors whitespace-nowrap cursor-pointer"
              >
                {p.secondaryCta}
              </button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <WebBlueprintVisual />
          </div>
        </Reveal>
      </section>

      {/* Problem & Comparison */}
      <section className="bg-white border-b border-[#E2DDD3] py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 space-y-10">
          <Reveal>
            <div className="max-w-3xl space-y-3">
              <p className="text-xs font-semibold text-[#8A5E1B]">{p.problemSection.eyebrow}</p>
              <h2 className="font-display text-2xl sm:text-4xl font-medium tracking-tight text-[#111C18]">
                {p.problemSection.heading}
              </h2>
              <p className="text-base text-[#4B5954] leading-relaxed">{p.problemSection.body}</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-[#E2DDD3] bg-[#FAF8F5] p-6 sm:p-8 space-y-4">
                <h3 className="text-lg font-semibold text-[#4B5954]">
                  {p.problemSection.comparisonLeftTitle}
                </h3>
                <ul className="space-y-3 text-sm text-[#4B5954]">
                  {p.problemSection.comparisonLeftItems.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Minus className="w-4 h-4 mt-0.5 text-[#80928B] shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-[#253A32] bg-[#111C18] text-[#F7F4EE] p-6 sm:p-8 space-y-4">
                <h3 className="text-lg font-semibold text-[#C58F38]">
                  {p.problemSection.comparisonRightTitle}
                </h3>
                <ul className="space-y-3 text-sm text-[#F7F4EE]">
                  {p.problemSection.comparisonRightItems.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 mt-0.5 text-[#C58F38] shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Capabilities Grid */}
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

          <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {p.capabilities.items.map((item) => (
              <RevealItem
                key={item.number}
                className="rounded-2xl border border-[#E2DDD3] bg-white p-6 space-y-3"
              >
                <span className="font-mono-num text-xs font-semibold text-[#8A5E1B]">
                  {item.number}
                </span>
                <h3 className="text-lg font-semibold text-[#111C18]">{item.title}</h3>
                <p className="text-sm text-[#4B5954] leading-relaxed">{item.description}</p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Launch Process */}
      <section className="bg-white border-t border-[#E2DDD3] py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 space-y-12">
          <Reveal>
            <div className="max-w-2xl space-y-2">
              <p className="text-xs font-semibold text-[#8A5E1B]">{p.launchProcess.eyebrow}</p>
              <h2 className="font-display text-2xl sm:text-4xl font-medium tracking-tight text-[#111C18]">
                {p.launchProcess.heading}
              </h2>
            </div>
          </Reveal>

          <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {p.launchProcess.steps.map((step) => (
              <RevealItem key={step.step} className="border-t border-[#E2DDD3] pt-5 space-y-2">
                <span className="font-mono-num text-xs font-semibold text-[#8A5E1B]">
                  {step.step}
                </span>
                <h3 className="text-lg font-semibold text-[#111C18]">{step.title}</h3>
                <p className="text-sm text-[#4B5954] leading-relaxed">{step.description}</p>
              </RevealItem>
            ))}
          </RevealStagger>

          <Reveal>
            <div className="rounded-2xl border border-[#E2DDD3] bg-[#FAF8F5] p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-1.5 max-w-xl">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#111C18]">
                  {p.ctaBand.heading}
                </h3>
                <p className="text-sm text-[#4B5954]">{p.ctaBand.description}</p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 rounded-md bg-[#164237] text-[#F7F4EE] text-sm font-semibold hover:bg-[#1D5547] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
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
