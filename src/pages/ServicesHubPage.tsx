import React from 'react';
import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import { FaqAccordion } from '../components/FaqAccordion';
import { Reveal, RevealItem, RevealStagger } from '../components/MotionPrimitives';
import { ServiceCatalogSection } from '../components/ServiceCatalogSection';
import { SITE_CONFIG } from '../config/siteConfig';
import type { Language, TranslationDictionary } from '../i18n/types';
import type { ServiceOption } from '../utils/formValidation';
import { buildLocalizedPath, type PageRoute } from '../utils/routing';

interface ServicesHubPageProps {
  language?: Language;
  t: TranslationDictionary;
  onNavigate: (route: PageRoute) => void;
  onRequestServiceScope: (service: ServiceOption) => void;
  onBookCall: () => void;
}

export const ServicesHubPage: React.FC<ServicesHubPageProps> = ({
  language = 'en',
  t,
  onNavigate,
  onRequestServiceScope,
  onBookCall,
}) => {
  const p = t.servicesHubPage;

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#111C18] text-[#F7F4EE] border-b border-[#253A32] py-16 sm:py-20">
        <Reveal className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-semibold text-[#C58F38]">{p.eyebrow}</p>
            <h1 className="font-display text-3xl sm:text-5xl font-medium tracking-tight leading-[1.1]">
              {p.headline}
            </h1>
            <p className="text-base sm:text-lg text-[#A6B5AF] leading-relaxed">{p.subheadline}</p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={buildLocalizedPath('contact', language)}
                onClick={(e) => {
                  e.preventDefault();
                  onRequestServiceScope('multiple');
                }}
                className="px-6 py-3 rounded-md bg-[#C58F38] text-[#111C18] text-sm font-semibold hover:bg-[#D4A14E] transition-colors whitespace-nowrap"
              >
                {p.primaryCta}
              </a>
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
        </Reveal>
      </section>

      {/* 3 Core Discipline Pillars */}
      <section className="bg-white border-b border-[#E2DDD3] py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 space-y-10">
          <Reveal>
            <h2 className="font-display text-2xl sm:text-4xl font-medium tracking-tight text-[#111C18]">
              {p.corePillarsHeading}
            </h2>
          </Reveal>

          <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {p.corePillars.map((pillar, idx) => (
              <RevealItem key={pillar.route}>
                <article className="h-full rounded-2xl border border-[#E2DDD3] bg-[#FAF8F5] p-6 sm:p-7 flex flex-col justify-between gap-6">
                  <div className="space-y-3">
                    <span className="font-mono-num text-xs font-semibold text-[#8A5E1B]">
                      0{idx + 1}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-medium text-[#111C18]">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#4B5954] leading-relaxed">{pillar.description}</p>
                  </div>
                  <div>
                    <a
                      href={buildLocalizedPath(pillar.route, language)}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(pillar.route);
                      }}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#164237] hover:text-[#8A5E1B] transition-colors"
                    >
                      <span>{pillar.ctaLabel}</span>
                      <ArrowRight className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Full 40-Service Directory */}
      <ServiceCatalogSection
        directory={t.home.fullServiceDirectory}
        onSelectService={onRequestServiceScope}
      />

      {/* 3 Dedicated Audience Tracks */}
      <section className="bg-white border-t border-[#E2DDD3] py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 space-y-10">
          <Reveal>
            <h2 className="font-display text-2xl sm:text-4xl font-medium tracking-tight text-[#111C18]">
              {p.audienceTracksHeading}
            </h2>
          </Reveal>

          <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {p.audienceTracks.map((track) => (
              <RevealItem key={track.route}>
                <article className="h-full rounded-2xl border border-[#E2DDD3] bg-[#FAF8F5] p-6 sm:p-7 flex flex-col justify-between gap-6">
                  <div className="space-y-3">
                    <span className="text-xs font-semibold text-[#8A5E1B]">{track.audience}</span>
                    <h3 className="font-display text-xl font-medium text-[#111C18] leading-snug">
                      {track.title}
                    </h3>
                    <p className="text-sm text-[#4B5954] leading-relaxed">{track.description}</p>
                  </div>
                  <div>
                    <a
                      href={buildLocalizedPath(track.route, language)}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(track.route);
                      }}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#164237] hover:text-[#8A5E1B] transition-colors"
                    >
                      <span>{track.ctaLabel}</span>
                      <ArrowRight className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Ownership + FAQs + Closing CTA */}
      <section className="bg-[#FAF8F5] border-t border-[#E2DDD3] py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 space-y-14">
          <Reveal>
            <div className="rounded-2xl border border-[#253A32] bg-[#111C18] text-[#F7F4EE] p-6 sm:p-8 space-y-5">
              <div className="space-y-1.5">
                <p className="text-xs font-semibold text-[#C58F38]">{p.ownership.eyebrow}</p>
                <h2 className="font-display text-2xl sm:text-3xl font-medium">
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
            <div className="space-y-6">
              <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#111C18]">
                {p.faqHeading}
              </h2>
              <FaqAccordion items={p.faqs} />
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-[#E2DDD3] bg-white p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-1.5 max-w-xl">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#111C18]">
                  {p.ctaBand.heading}
                </h3>
                <p className="text-sm text-[#4B5954]">{p.ctaBand.description}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href={buildLocalizedPath('contact', language)}
                  onClick={(e) => {
                    e.preventDefault();
                    onRequestServiceScope('multiple');
                  }}
                  className="px-6 py-3 rounded-md bg-[#164237] text-[#F7F4EE] text-sm font-semibold hover:bg-[#1D5547] transition-colors whitespace-nowrap"
                >
                  {p.ctaBand.buttonLabel}
                </a>
                <a
                  href={SITE_CONFIG.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#C58F38] text-[#111C18] text-sm font-semibold hover:bg-[#D4A14E] transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{t.bookModal.whatsappAction}</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
