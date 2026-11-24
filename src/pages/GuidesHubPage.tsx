import React, { useState } from 'react';
import { ArrowRight, BookOpen, MessageCircle, PhoneCall } from 'lucide-react';
import { motion } from 'motion/react';
import { SITE_CONFIG } from '../config/siteConfig';
import type { GuideArticle, GuideTopicId, Language, TranslationDictionary } from '../i18n/types';
import { buildLocalizedPath, GUIDE_ROUTES, type PageRoute } from '../utils/routing';

interface GuidesHubPageProps {
  language: Language;
  t: TranslationDictionary;
  onNavigate: (route: PageRoute) => void;
  onBookCall: () => void;
}

const TOPIC_KEYS: Array<'all' | GuideTopicId> = [
  'all',
  'google-seo',
  'websites-stores',
  'social-strategy',
];

export const GuidesHubPage: React.FC<GuidesHubPageProps> = ({
  language,
  t,
  onNavigate,
  onBookCall,
}) => {
  const g = t.guidesHubPage;
  const [activeTopic, setActiveTopic] = useState<'all' | GuideTopicId>('all');

  const allArticles: GuideArticle[] = GUIDE_ROUTES.map((route) => t.guideArticles[route]);
  const visibleArticles =
    activeTopic === 'all'
      ? allArticles
      : allArticles.filter((article) => article.topic === activeTopic);

  return (
    <div>
      {/* Dark Editorial Hero */}
      <section className="bg-[#111C18] text-[#F7F4EE] border-b border-[#253A32] py-16 sm:py-22">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#C58F38]">
              <BookOpen className="w-4 h-4" aria-hidden="true" />
              <span>{g.eyebrow}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-semibold leading-[1.14] text-[#F7F4EE]">
              {g.headline}
            </h1>

            <p className="text-base sm:text-lg text-[#C7D2CE] leading-relaxed">{g.subheadline}</p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#C58F38] text-[#111C18] text-sm font-semibold hover:bg-[#D4A14E] transition-colors cursor-pointer"
              >
                <span>{g.primaryCta}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={onBookCall}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-[#344E44] text-[#F7F4EE] text-sm font-medium hover:border-[#C58F38] hover:text-[#C58F38] transition-colors cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#C58F38]" aria-hidden="true" />
                <span>{g.secondaryCta}</span>
              </button>
            </div>

            <p className="text-xs text-[#A6B5AF] pt-1">{g.lastUpdatedText}</p>
          </div>
        </div>
      </section>

      {/* Topic Filters + 8 Answer-First Guides Grid */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="bg-[#FAF8F5] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[#E3DFD6] pb-6">
            <h2 className="text-sm font-semibold text-[#111C18]">{g.filterHeading}</h2>
            <div className="flex flex-wrap gap-2" role="group" aria-label={g.filterHeading}>
              {TOPIC_KEYS.map((topicKey) => {
                const isSelected = activeTopic === topicKey;
                return (
                  <button
                    key={topicKey}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setActiveTopic(topicKey)}
                    className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#111C18] text-[#F7F4EE]'
                        : 'bg-[#F3EFE7] text-[#46544E] border border-[#E3DFD6] hover:border-[#C58F38]'
                    }`}
                  >
                    {g.categories[topicKey]}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleArticles.map((article) => (
              <article
                key={article.route}
                className="flex flex-col justify-between rounded-xl border border-[#E3DFD6] bg-white p-6 sm:p-7 hover:border-[#C58F38]/70 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3 text-xs">
                    <span className="inline-flex items-center gap-2 font-semibold text-[#8A5E1B]">
                      <span className="font-mono-num">{article.number}</span>
                      <span>·</span>
                      <span>{article.categoryLabel}</span>
                    </span>
                    <span className="text-[#5C6A64]">{article.readTimeLabel}</span>
                  </div>

                  <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#111C18] leading-snug">
                    <a
                      href={buildLocalizedPath(article.route, language)}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(article.route);
                      }}
                      className="hover:text-[#164237] transition-colors"
                    >
                      {article.title}
                    </a>
                  </h2>

                  <p className="text-sm text-[#46544E] leading-relaxed">{article.excerpt}</p>

                  <div className="rounded-lg bg-[#FAF8F5] border border-[#EAE5DA] p-3.5">
                    <p className="text-[11px] font-semibold text-[#164237] mb-1">
                      {article.answerFirstTitle}
                    </p>
                    <p className="text-xs text-[#46544E] leading-relaxed line-clamp-3">
                      {article.answerFirstSummary}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-[#EAE5DA] flex items-center justify-between">
                  <a
                    href={buildLocalizedPath(article.route, language)}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(article.route);
                    }}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#164237] hover:text-[#C58F38] transition-colors"
                  >
                    <span>{g.readGuideLabel}</span>
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
                  </a>
                  <span className="text-[11px] text-[#5C6A64]">{article.lastUpdatedText}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Bottom CTA Band */}
      <section className="bg-[#111C18] text-[#F7F4EE] py-14 sm:py-18 border-t border-[#253A32]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F7F4EE]">
              {g.ctaBand.heading}
            </h2>
            <p className="text-sm sm:text-base text-[#A6B5AF] leading-relaxed">
              {g.ctaBand.description}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#C58F38] text-[#111C18] text-sm font-semibold hover:bg-[#D4A14E] transition-colors cursor-pointer"
            >
              <span>{g.ctaBand.primaryCta}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
            </button>
            <a
              href={SITE_CONFIG.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-[#344E44] text-[#F7F4EE] text-sm font-medium hover:border-[#C58F38] hover:text-[#C58F38] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#C58F38]" aria-hidden="true" />
              <span>{g.ctaBand.secondaryCta}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
