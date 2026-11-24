import React, { useState } from 'react';
import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import { SeoHierarchyVisual } from '../components/EditorialVisuals';
import { FaqAccordion } from '../components/FaqAccordion';
import { Reveal } from '../components/MotionPrimitives';
import { SITE_CONFIG } from '../config/siteConfig';
import type { TranslationDictionary } from '../i18n/types';
import type { PageRoute } from '../utils/routing';

interface SeoPageProps {
  t: TranslationDictionary;
  onNavigate: (route: PageRoute) => void;
  onBookCall: () => void;
}

export const SeoPage: React.FC<SeoPageProps> = ({ t, onNavigate, onBookCall }) => {
  const p = t.seoPage;
  const [activeTabId, setActiveTabId] = useState<'technical' | 'onpage' | 'research'>('technical');
  const activeTab =
    p.intentExplorer.tabs.find((tab) => tab.id === activeTabId) ?? p.intentExplorer.tabs[0];

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
              <a
                href={SITE_CONFIG.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-[#C58F38] hover:text-[#F7F4EE] transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{t.bookModal.whatsappAction}</span>
              </a>
            </div>
            <p className="text-xs font-mono-num text-[#80928B]">{p.lastUpdatedText}</p>
          </div>
          <div className="lg:col-span-5">
            <SeoHierarchyVisual />
          </div>
        </Reveal>
      </section>

      {/* Plain-Language Value & Honest Positioning */}
      <section className="bg-white border-b border-[#E2DDD3] py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-3">
              <p className="text-xs font-semibold text-[#8A5E1B]">{p.businessValue.eyebrow}</p>
              <h2 className="font-display text-2xl sm:text-4xl font-medium tracking-tight text-[#111C18]">
                {p.businessValue.heading}
              </h2>
              <p className="text-base text-[#4B5954] leading-relaxed">{p.businessValue.lead}</p>
            </div>
            <div className="lg:col-span-5 rounded-2xl border border-[#E2DDD3] bg-[#FAF8F5] p-6 sm:p-7 space-y-2.5">
              <h3 className="text-base font-semibold text-[#111C18]">
                {p.businessValue.honestyNoteTitle}
              </h3>
              <p className="text-sm text-[#4B5954] leading-relaxed">
                {p.businessValue.honestyNoteBody}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Interactive SEO Inspection Tabs */}
      <section className="bg-[#FAF8F5] py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <Reveal className="space-y-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="max-w-2xl space-y-2">
                <p className="text-xs font-semibold text-[#8A5E1B]">{p.intentExplorer.eyebrow}</p>
                <h2 className="font-display text-2xl sm:text-4xl font-medium tracking-tight text-[#111C18]">
                  {p.intentExplorer.heading}
                </h2>
                <p className="text-sm sm:text-base text-[#4B5954]">
                  {p.intentExplorer.description}
                </p>
              </div>

              <div
                className="inline-flex flex-wrap gap-1 p-1 rounded-lg bg-[#F1EDE6] border border-[#E2DDD3]"
                role="tablist"
              >
                {p.intentExplorer.tabs.map((tab) => {
                  const selected = tab.id === activeTab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setActiveTabId(tab.id)}
                      className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                        selected
                          ? 'bg-[#111C18] text-[#F7F4EE]'
                          : 'text-[#4B5954] hover:text-[#111C18]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              role="tabpanel"
              className="rounded-2xl border border-[#E2DDD3] bg-white p-6 sm:p-8 space-y-5"
            >
              <p className="text-lg font-medium text-[#111C18]">{activeTab.focus}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#F1EDE6]">
                {activeTab.checks.map((check) => (
                  <div key={check} className="flex items-start gap-2.5 text-sm text-[#111C18]">
                    <Check className="w-4 h-4 mt-0.5 text-[#164237] shrink-0" aria-hidden="true" />
                    <span>{check}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Full SEO Scope List */}
      <section className="bg-white border-t border-[#E2DDD3] py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 space-y-12">
          <Reveal>
            <div className="max-w-2xl space-y-2">
              <p className="text-xs font-semibold text-[#8A5E1B]">{p.pillars.eyebrow}</p>
              <h2 className="font-display text-2xl sm:text-4xl font-medium tracking-tight text-[#111C18]">
                {p.pillars.heading}
              </h2>
            </div>
          </Reveal>

          <Reveal className="border-t border-[#E2DDD3]">
            {p.pillars.items.map((item) => (
              <div
                key={item.number}
                className="py-6 border-b border-[#E2DDD3] grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline"
              >
                <span className="md:col-span-1 font-mono-num text-xs font-semibold text-[#8A5E1B]">
                  {item.number}
                </span>
                <h3 className="md:col-span-4 text-lg font-semibold text-[#111C18]">
                  {item.title}
                </h3>
                <p className="md:col-span-7 text-sm sm:text-base text-[#4B5954] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Reporting + CTA */}
      <section className="bg-[#111C18] text-[#F7F4EE] py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 space-y-12">
          <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-3">
              <p className="text-xs font-semibold text-[#C58F38]">{p.reporting.eyebrow}</p>
              <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight">
                {p.reporting.heading}
              </h2>
              <p className="text-sm sm:text-base text-[#A6B5AF] leading-relaxed">
                {p.reporting.body}
              </p>
            </div>
            <div className="lg:col-span-6 rounded-2xl border border-[#253A32] bg-[#16241F] p-6 sm:p-8">
              <ul className="space-y-3 text-sm text-[#F7F4EE]">
                {p.reporting.metricsList.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 mt-0.5 text-[#C58F38] shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-[#253A32] bg-[#16241F] p-6 sm:p-8 space-y-5">
              <div className="space-y-1.5">
                <p className="text-xs font-semibold text-[#C58F38]">{p.ownership.eyebrow}</p>
                <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#F7F4EE]">
                  {p.ownership.heading}
                </h2>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#F7F4EE]">
                {p.ownership.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 mt-0.5 text-[#C58F38] shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#A6B5AF] pt-4 border-t border-[#253A32]">
                {p.ownership.honestyDisclosure}
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="border-t border-[#253A32] pt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-1.5 max-w-xl">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#F7F4EE]">
                  {p.ctaBand.heading}
                </h3>
                <p className="text-sm text-[#A6B5AF]">{p.ctaBand.description}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3 rounded-md bg-[#C58F38] text-[#111C18] text-sm font-semibold hover:bg-[#D4A14E] transition-colors whitespace-nowrap cursor-pointer"
                >
                  {p.ctaBand.buttonLabel}
                </button>
                <a
                  href={SITE_CONFIG.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#164237] text-[#F7F4EE] text-sm font-semibold hover:bg-[#1D5547] transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 text-[#C58F38] shrink-0" aria-hidden="true" />
                  <span>{t.bookModal.whatsappAction}</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SEO FAQs & Related Services */}
      <section className="bg-[#FAF8F5] border-t border-[#E2DDD3] py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 space-y-14">
          <Reveal>
            <div className="space-y-6">
              <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#111C18]">
                {p.faqHeading}
              </h2>
              <FaqAccordion items={p.faqs} />
            </div>
          </Reveal>

          <Reveal>
            <div className="space-y-5">
              <h2 className="font-display text-xl sm:text-2xl font-medium text-[#111C18]">
                {p.relatedHeading}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {p.relatedLinks.map((link) => (
                  <div
                    key={link.route}
                    className="rounded-2xl border border-[#E2DDD3] bg-white p-6 flex flex-col justify-between gap-4"
                  >
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-semibold text-[#111C18]">{link.title}</h3>
                      <p className="text-sm text-[#4B5954]">{link.description}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onNavigate(link.route)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#164237] hover:text-[#8A5E1B] w-fit cursor-pointer"
                    >
                      <span>{link.ctaLabel}</span>
                      <ArrowRight className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
