import React, { useState } from 'react';
import { ArrowUpRight, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';
import { Reveal, RevealStagger, RevealItem } from '../components/MotionPrimitives';
import {
  PAKISTANI_NICHE_CATALOG,
  filterAndPickRandomSites,
  type PakistaniNicheSite,
  type PortfolioCategory,
} from '../data/portfolioCatalog';
import type { Language, TranslationDictionary } from '../i18n/types';
import type { PageRoute } from '../utils/routing';

interface PortfolioPageProps {
  language: Language;
  t: TranslationDictionary;
  onNavigate: (route: PageRoute) => void;
  onBookCall: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  language,
  t,
  onNavigate,
  onBookCall,
}) => {
  const p = t.portfolioPage;
  const [category, setCategory] = useState<PortfolioCategory>('all');
  const [items, setItems] = useState<PakistaniNicheSite[]>(() =>
    filterAndPickRandomSites(PAKISTANI_NICHE_CATALOG, 'all', 6, [])
  );
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleCategoryChange = (nextCategory: PortfolioCategory) => {
    setCategory(nextCategory);
    setItems(filterAndPickRandomSites(PAKISTANI_NICHE_CATALOG, nextCategory, 6, []));
  };

  const handleFetchRandom = () => {
    setIsRefreshing(true);
    const prevIds = items.map((i) => i.id);
    setTimeout(() => {
      setItems(filterAndPickRandomSites(PAKISTANI_NICHE_CATALOG, category, 6, prevIds));
      setIsRefreshing(false);
    }, 220);
  };

  return (
    <div>
      {/* Editorial Header */}
      <section className="bg-[#111C18] text-[#F7F4EE] border-b border-[#253A32] py-12 sm:py-14">
        <Reveal className="mx-auto max-w-[1200px] px-4 sm:px-6 space-y-5">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold text-[#C58F38]">{p.eyebrow}</p>
            <h1 className="font-display text-3xl sm:text-[2.75rem] font-medium tracking-tight leading-[1.1]">
              {p.headline}
            </h1>
            <p className="text-base text-[#A6B5AF] leading-relaxed">
              {p.subheadline}
            </p>
          </div>

          <div className="rounded-xl border border-[#253A32] bg-[#16241F] px-5 py-3 text-xs sm:text-sm text-[#A6B5AF] max-w-3xl">
            {p.honestyBanner}
          </div>
        </Reveal>
      </section>

      {/* Filter & Random Fetch Controls + Portfolio Grid */}
      <section className="bg-[#FAF8F5] py-10 sm:py-14">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E2DDD3] pb-5">
            <div
              className="inline-flex flex-wrap items-center gap-1 p-1 rounded-lg bg-[#F1EDE6] border border-[#E2DDD3]"
              role="group"
              aria-label={p.filters.all}
            >
              {(
                [
                  { id: 'all', label: p.filters.all },
                  { id: 'education', label: p.filters.education },
                  { id: 'local-services', label: p.filters.localServices },
                ] as const
              ).map((tab) => {
                const active = category === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => handleCategoryChange(tab.id)}
                    className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                      active
                        ? 'bg-[#111C18] text-[#F7F4EE]'
                        : 'text-[#4B5954] hover:text-[#111C18]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={handleFetchRandom}
              disabled={isRefreshing}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#164237] text-[#F7F4EE] text-sm font-semibold hover:bg-[#1D5547] disabled:opacity-65 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <RefreshCw
                className={`w-4 h-4 shrink-0 ${isRefreshing ? 'animate-spin' : ''}`}
                aria-hidden="true"
              />
              <span>{isRefreshing ? p.fetchingBtn : p.fetchRandomBtn}</span>
            </button>
          </div>

          <RevealStagger
            key={`${category}-${items.map((i) => i.id).join(',')}`}
            immediate
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {items.map((site) => {
              const copy = language === 'ur' ? site.ur : site.en;
              return (
                <RevealItem key={site.id}>
                  <motion.article
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-2xl border border-[#E2DDD3] bg-white overflow-hidden flex flex-col justify-between"
                  >
                    {/* Crisp Miniature Browser Frame Preview */}
                    <div>
                      <div className="border-b border-[#E2DDD3] bg-[#F1EDE6] px-4 py-3 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5" aria-hidden="true">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: site.accentColor }}
                          />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#D6CFC2]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#D6CFC2]" />
                        </div>
                        <span
                          dir="ltr"
                          className="font-mono-num text-[11px] font-medium text-[#4B5954] truncate"
                        >
                          {site.domain}
                        </span>
                      </div>

                      <div className="p-6 space-y-4">
                        <div className="flex items-center gap-2 text-xs text-[#8A5E1B] font-medium">
                          <span>{copy.niche}</span>
                          <span aria-hidden="true">·</span>
                          <span className="text-[#4B5954]">{site.city}</span>
                        </div>

                        <h2 className="font-display text-xl sm:text-2xl font-medium text-[#111C18]">
                          {copy.name}
                        </h2>

                        <p className="text-sm text-[#4B5954] leading-relaxed">
                          {copy.summary}
                        </p>

                        <ul className="space-y-1.5 pt-2 border-t border-[#F1EDE6] text-xs sm:text-sm text-[#111C18]">
                          {copy.highlights.map((hl) => (
                            <li key={hl} className="flex items-start gap-2">
                              <span
                                className="mt-2 w-2 h-px bg-[#C58F38] shrink-0"
                                aria-hidden="true"
                              />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="px-6 py-4 bg-[#FAF8F5] border-t border-[#E2DDD3] flex items-center justify-between gap-3">
                      <a
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#164237] hover:text-[#8A5E1B] transition-colors whitespace-nowrap"
                      >
                        <span>{p.visitSiteLabel}</span>
                        <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                      </a>

                      <button
                        type="button"
                        onClick={() => onNavigate('contact')}
                        className="text-xs font-medium text-[#4B5954] hover:text-[#111C18] underline underline-offset-4 whitespace-nowrap cursor-pointer"
                      >
                        {p.buildSimilarLabel}
                      </button>
                    </div>
                  </motion.article>
                </RevealItem>
              );
            })}
          </RevealStagger>

          {/* Bottom Conversion CTA */}
          <Reveal>
            <div className="rounded-2xl border border-[#253A32] bg-[#111C18] text-[#F7F4EE] p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="max-w-2xl space-y-2">
                <h2 className="font-display text-2xl sm:text-3xl font-medium">
                  {p.ctaBand.heading}
                </h2>
                <p className="text-sm sm:text-base text-[#A6B5AF]">{p.ctaBand.description}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3 rounded-md bg-[#C58F38] text-[#111C18] text-sm font-semibold hover:bg-[#D4A14E] transition-colors whitespace-nowrap cursor-pointer"
                >
                  {p.ctaBand.primaryCta}
                </button>
                <button
                  type="button"
                  onClick={onBookCall}
                  className="px-5 py-3 rounded-md border border-[#2B4239] text-[#F7F4EE] text-sm font-medium hover:border-[#C58F38] transition-colors whitespace-nowrap cursor-pointer"
                >
                  {p.ctaBand.secondaryCta}
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
