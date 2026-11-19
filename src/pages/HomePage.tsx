import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { HeroArchitectureVisual } from '../components/EditorialVisuals';
import { FaqAccordion } from '../components/FaqAccordion';
import { Reveal, RevealItem, RevealStagger } from '../components/MotionPrimitives';
import { ServiceCatalogSection } from '../components/ServiceCatalogSection';
import { TrustStandards } from '../components/TrustStandards';
import type { Language, TranslationDictionary } from '../i18n/types';
import type { ServiceOption } from '../utils/formValidation';
import type { PageRoute } from '../utils/routing';

interface HomePageProps {
  language?: Language;
  t: TranslationDictionary;
  onNavigate: (route: PageRoute) => void;
  onRequestServiceScope: (service: ServiceOption) => void;
  onBookCall: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  language = 'en',
  t,
  onNavigate,
  onRequestServiceScope,
  onBookCall,
}) => {
  const [activeTabId, setActiveTabId] = useState<'web' | 'seo' | 'social'>('web');
  const h = t.home;
  const activeTab =
    h.systemShowcase.tabs.find((tab) => tab.id === activeTabId) ?? h.systemShowcase.tabs[0];

  return (
    <div>
      {/* 1. Asymmetric Editorial Hero — Immediately visible on first paint */}
      <section className="bg-[#111C18] text-[#F7F4EE] border-b border-[#253A32]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 'some' }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <p className="text-xs sm:text-sm font-medium text-[#C58F38] mb-4">
                {h.hero.eyebrow}
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.65rem] font-medium tracking-tight leading-[1.08] text-[#F7F4EE] max-w-2xl">
                {h.hero.headlinePart1}
                <em className="italic text-[#C58F38] font-normal">
                  {h.hero.headlineHighlight1}
                </em>
                {h.hero.headlinePart2}
                <em className="italic text-[#C58F38] font-normal">
                  {h.hero.headlineHighlight2}
                </em>
                .
              </h1>
              <p className="mt-6 text-base sm:text-lg text-[#A6B5AF] leading-relaxed max-w-xl">
                {h.hero.subheadline}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onBookCall}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-md bg-[#C58F38] text-[#111C18] font-semibold text-sm hover:bg-[#D4A14E] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {h.hero.primaryCta}
                </button>
                <a
                  href="#services-overview"
                  className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-[#F7F4EE] hover:text-[#C58F38] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>{h.hero.secondaryCta}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
                </a>
                <a
                  href="/portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('portfolio');
                  }}
                  className="inline-flex items-center gap-1.5 px-2 py-3 text-sm font-medium text-[#A6B5AF] hover:text-[#F7F4EE] underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
                >
                  {t.nav.portfolio}
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 'some' }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <HeroArchitectureVisual
                label={h.hero.blueprintLabel}
                nodes={h.hero.blueprintNodes}
                language={language}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Positioning & Integrated Value Strip */}
      <section className="bg-white border-b border-[#E2DDD3]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-16 sm:py-22">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5">
                <p className="text-xs font-semibold text-[#8A5E1B] mb-3">
                  {h.positioning.label}
                </p>
                <h2 className="font-display text-2xl sm:text-[2rem] font-medium tracking-tight text-[#111C18] leading-snug">
                  {h.positioning.statement}
                </h2>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:pt-2">
                {h.positioning.pillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="border-t border-[#E2DDD3] pt-4 space-y-2"
                  >
                    <h3 className="text-base font-semibold text-[#111C18]">{pillar.title}</h3>
                    <p className="text-sm text-[#4B5954] leading-relaxed">{pillar.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Trust & Industry Engineering Standards */}
      <TrustStandards
        eyebrow={h.trustStandards.eyebrow}
        heading={h.trustStandards.heading}
        note={h.trustStandards.note}
        badges={h.trustStandards.badges}
      />

      {/* 4. Core Services Asymmetric Bento Showcase */}
      <section id="services-overview" className="bg-[#FAF8F5] py-20 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <Reveal>
            <div className="max-w-2xl mb-12 sm:mb-14 space-y-3">
              <p className="text-xs font-semibold text-[#8A5E1B]">
                {h.servicesOverview.eyebrow}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-[#111C18]">
                {h.servicesOverview.heading}
              </h2>
              <p className="text-base sm:text-lg text-[#4B5954]">
                {h.servicesOverview.subheading}
              </p>
            </div>
          </Reveal>

          <RevealStagger className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {h.servicesOverview.cards.map((card, index) => {
              const isFeatured = index === 0;
              return (
                <RevealItem
                  key={card.number}
                  className={isFeatured ? 'lg:col-span-12' : 'lg:col-span-6'}
                >
                  <article className="h-full rounded-2xl border border-[#E2DDD3] bg-white p-6 sm:p-8 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5">
                    <div
                      className={`grid grid-cols-1 ${
                        isFeatured ? 'lg:grid-cols-12 lg:gap-10' : 'gap-6'
                      }`}
                    >
                      <div className={isFeatured ? 'lg:col-span-6 space-y-3' : 'space-y-3'}>
                        <span className="font-mono-num text-xs font-semibold text-[#8A5E1B]">
                          {card.number}
                        </span>
                        <h3 className="font-display text-2xl sm:text-[1.75rem] font-medium text-[#111C18]">
                          {card.title}
                        </h3>
                        <p className="text-sm sm:text-base text-[#4B5954] leading-relaxed">
                          {card.summary}
                        </p>
                      </div>

                      <div
                        className={`${
                          isFeatured
                            ? 'lg:col-span-6 lg:border-s lg:border-[#F1EDE6] lg:ps-8 pt-6 lg:pt-0 border-t lg:border-t-0 border-[#F1EDE6]'
                            : 'pt-4 border-t border-[#F1EDE6]'
                        } flex flex-col justify-between gap-6`}
                      >
                        <ul className="space-y-2.5 text-sm text-[#111C18]">
                          {card.deliverables.map((item) => (
                            <li key={item} className="flex items-start gap-2.5">
                              <span
                                className="mt-2 w-2 h-px bg-[#C58F38] shrink-0"
                                aria-hidden="true"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div>
                          <a
                            href={`/services/${card.route}`}
                            onClick={(e) => {
                              e.preventDefault();
                              onNavigate(card.route);
                            }}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-[#164237] hover:text-[#8A5E1B] transition-colors"
                          >
                            <span>{h.servicesOverview.exploreLink}</span>
                            <ArrowRight className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </section>

      {/* 4B. Full 16-Service Pakistani Digital Marketing Directory */}
      <ServiceCatalogSection
        directory={h.fullServiceDirectory}
        onSelectService={onRequestServiceScope}
      />

      {/* 5. Interactive Discipline Inspector */}
      <section className="bg-white border-y border-[#E2DDD3] py-20 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
              <div className="max-w-2xl space-y-3">
                <p className="text-xs font-semibold text-[#8A5E1B]">
                  {h.systemShowcase.eyebrow}
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-[#111C18]">
                  {h.systemShowcase.heading}
                </h2>
                <p className="text-sm sm:text-base text-[#4B5954]">
                  {h.systemShowcase.subheading}
                </p>
              </div>

              <div
                className="inline-flex flex-wrap items-center gap-1 p-1 rounded-lg bg-[#F1EDE6] border border-[#E2DDD3] shrink-0"
                role="tablist"
                aria-label={h.systemShowcase.heading}
              >
                {h.systemShowcase.tabs.map((tab) => {
                  const selected = tab.id === activeTab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setActiveTabId(tab.id)}
                      className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
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
              className="rounded-2xl border border-[#E2DDD3] bg-[#FAF8F5] p-6 sm:p-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-2.5">
                  <h3 className="text-xs font-semibold text-[#8A5E1B]">
                    {activeTab.problemTitle}
                  </h3>
                  <p className="text-sm sm:text-base text-[#111C18] leading-relaxed">
                    {activeTab.problem}
                  </p>
                </div>
                <div className="space-y-2.5 md:border-s md:border-[#E2DDD3] md:ps-8">
                  <h3 className="text-xs font-semibold text-[#8A5E1B]">
                    {activeTab.solutionTitle}
                  </h3>
                  <p className="text-sm sm:text-base text-[#111C18] leading-relaxed">
                    {activeTab.solution}
                  </p>
                </div>
                <div className="space-y-2.5 md:border-s md:border-[#E2DDD3] md:ps-8">
                  <h3 className="text-xs font-semibold text-[#8A5E1B]">
                    {activeTab.outcomeTitle}
                  </h3>
                  <p className="text-sm sm:text-base text-[#111C18] leading-relaxed">
                    {activeTab.outcome}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E2DDD3] flex justify-end">
                <button
                  type="button"
                  onClick={() => onNavigate(activeTab.route)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#164237] text-[#F7F4EE] text-sm font-semibold hover:bg-[#1D5547] transition-colors whitespace-nowrap cursor-pointer"
                >
                  <span>{activeTab.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Working Process on Deep Obsidian Forest Surface */}
      <section className="bg-[#111C18] text-[#F7F4EE] py-20 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <Reveal>
            <div className="max-w-2xl mb-14 space-y-3">
              <p className="text-xs font-semibold text-[#C58F38]">{h.process.eyebrow}</p>
              <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-[#F7F4EE]">
                {h.process.heading}
              </h2>
              <p className="text-sm sm:text-base text-[#A6B5AF]">{h.process.subheading}</p>
            </div>
          </Reveal>

          <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {h.process.steps.map((step) => (
              <RevealItem
                key={step.step}
                className="border-t border-[#253A32] pt-6 space-y-3"
              >
                <span className="font-mono-num text-sm font-medium text-[#C58F38]">
                  {step.step}
                </span>
                <h3 className="text-xl font-semibold text-[#F7F4EE]">{step.title}</h3>
                <p className="text-sm sm:text-base text-[#A6B5AF] leading-relaxed">
                  {step.description}
                </p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* 6. Why Choose Khans Marketing + FAQ */}
      <section className="bg-[#FAF8F5] py-20 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 space-y-20">
          <div>
            <Reveal>
              <div className="max-w-xl mb-10 space-y-2">
                <p className="text-xs font-semibold text-[#8A5E1B]">{h.whyKm.eyebrow}</p>
                <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-[#111C18]">
                  {h.whyKm.heading}
                </h2>
              </div>
            </Reveal>

            <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {h.whyKm.items.map((item) => (
                <RevealItem
                  key={item.title}
                  className="rounded-2xl border border-[#E2DDD3] bg-white p-6 sm:p-7 space-y-2.5"
                >
                  <h3 className="text-lg font-semibold text-[#111C18]">{item.title}</h3>
                  <p className="text-sm text-[#4B5954] leading-relaxed">{item.description}</p>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>

          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-4 space-y-3">
                <p className="text-xs font-semibold text-[#8A5E1B]">{h.faq.eyebrow}</p>
                <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-[#111C18]">
                  {h.faq.heading}
                </h2>
                <p className="text-sm sm:text-base text-[#4B5954] leading-relaxed">
                  {h.faq.subheading}
                </p>
              </div>
              <div className="lg:col-span-8">
                <FaqAccordion
                  items={h.faq.items}
                  categories={h.faq.categories}
                  filterAriaLabel={h.faq.heading}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. Conversion Closing CTA */}
      <section className="bg-white border-t border-[#E2DDD3] py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <Reveal>
            <div className="rounded-2xl border border-[#253A32] bg-[#111C18] text-[#F7F4EE] p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="max-w-2xl space-y-3">
                <p className="text-xs font-semibold text-[#C58F38]">{h.closingCta.eyebrow}</p>
                <h2 className="font-display text-2xl sm:text-4xl font-medium tracking-tight text-[#F7F4EE]">
                  {h.closingCta.heading}
                </h2>
                <p className="text-sm sm:text-base text-[#A6B5AF]">
                  {h.closingCta.description}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3 rounded-md bg-[#C58F38] text-[#111C18] text-sm font-semibold hover:bg-[#D4A14E] transition-colors whitespace-nowrap cursor-pointer"
                >
                  {h.closingCta.primaryCta}
                </button>
                <button
                  type="button"
                  onClick={onBookCall}
                  className="px-5 py-3 rounded-md border border-[#2B4239] text-[#F7F4EE] text-sm font-medium hover:border-[#C58F38] transition-colors whitespace-nowrap cursor-pointer"
                >
                  {h.closingCta.secondaryCta}
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
