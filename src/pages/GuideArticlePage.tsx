import React from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle, PhoneCall } from 'lucide-react';
import { motion } from 'motion/react';
import { SITE_CONFIG } from '../config/siteConfig';
import type { GuideArticle, Language, TranslationDictionary } from '../i18n/types';
import type { ServiceOption } from '../utils/formValidation';
import {
  buildLocalizedPath,
  GUIDE_ROUTES,
  type GuideRoute,
  type PageRoute,
} from '../utils/routing';

interface GuideArticlePageProps {
  route: GuideRoute;
  language: Language;
  t: TranslationDictionary;
  onNavigate: (route: PageRoute) => void;
  onRequestServiceScope: (service: ServiceOption) => void;
  onBookCall: () => void;
}

export const GuideArticlePage: React.FC<GuideArticlePageProps> = ({
  route,
  language,
  t,
  onNavigate,
  onRequestServiceScope,
  onBookCall,
}) => {
  const article: GuideArticle = t.guideArticles[route];
  const labels = t.guidesHubPage.articleLabels;

  const currentIdx = GUIDE_ROUTES.indexOf(route);
  const relatedGuides: GuideArticle[] = [
    t.guideArticles[GUIDE_ROUTES[(currentIdx + 1) % GUIDE_ROUTES.length]],
    t.guideArticles[GUIDE_ROUTES[(currentIdx + 2) % GUIDE_ROUTES.length]],
  ];

  return (
    <div>
      {/* Dark Editorial Article Header with Breadcrumb + Answer-First Summary */}
      <section className="bg-[#111C18] text-[#F7F4EE] border-b border-[#253A32] py-14 sm:py-20">
        <div className="mx-auto max-w-[920px] px-4 sm:px-6 space-y-6">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs text-[#A6B5AF]"
          >
            <a
              href={buildLocalizedPath('home', language)}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="hover:text-[#F7F4EE] transition-colors"
            >
              {labels.homeBreadcrumb}
            </a>
            <span aria-hidden="true">/</span>
            <a
              href={buildLocalizedPath('guides', language)}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('guides');
              }}
              className="hover:text-[#F7F4EE] transition-colors"
            >
              {labels.guidesBreadcrumb}
            </a>
            <span aria-hidden="true">/</span>
            <span className="text-[#C58F38] font-medium truncate">{article.categoryLabel}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-[#C58F38]">
            <span className="font-mono-num">{article.number}</span>
            <span>·</span>
            <span>{article.categoryLabel}</span>
            <span>·</span>
            <span className="text-[#A6B5AF] font-normal">{article.readTimeLabel}</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-semibold leading-[1.15] text-[#F7F4EE]">
            {article.title}
          </h1>

          <p className="text-xs text-[#A6B5AF]">{article.lastUpdatedText}</p>

          {/* Answer-First Summary Box (AEO) */}
          <div className="rounded-xl border border-[#2A4239] border-s-4 border-s-[#C58F38] bg-[#16241F] p-5 sm:p-6 space-y-2">
            <p className="text-xs font-semibold text-[#C58F38] tracking-wide">
              {article.answerFirstTitle}
            </p>
            <p className="text-sm sm:text-base text-[#E9E4DA] leading-relaxed">
              {article.answerFirstSummary}
            </p>
          </div>
        </div>
      </section>

      {/* Main Long-Form Editorial Body */}
      <article className="bg-[#FAF8F5] py-14 sm:py-18">
        <div className="mx-auto max-w-[920px] px-4 sm:px-6 space-y-12">
          <div className="max-w-[780px] space-y-10">
            {article.sections.map((section, idx) => (
              <motion.section
                key={section.heading}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="space-y-4"
              >
                <h2 className="font-display text-2xl sm:text-[28px] font-semibold text-[#111C18] leading-snug">
                  <span className="font-mono-num text-sm text-[#8A5E1B] me-2.5">
                    0{idx + 1}.
                  </span>
                  {section.heading}
                </h2>

                <div className="space-y-4">
                  {section.paragraphs.map((paragraph, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-[15px] sm:text-base text-[#2D3934] leading-[1.8]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {section.bullets && section.bullets.length > 0 && (
                  <ul className="rounded-xl border border-[#E3DFD6] bg-[#F3EFE7] p-5 sm:p-6 space-y-3 mt-4">
                    {section.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-3 text-sm sm:text-[15px] text-[#111C18] leading-relaxed"
                      >
                        <CheckCircle2
                          className="w-4 h-4 text-[#1E6B52] shrink-0 mt-1"
                          aria-hidden="true"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.section>
            ))}

            {/* Key Takeaways Box */}
            <section className="rounded-xl border border-[#D8D1C5] bg-[#F3EFE7] p-6 sm:p-8 space-y-4">
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#111C18]">
                {article.keyTakeawaysTitle}
              </h2>
              <ul className="space-y-2.5">
                {article.keyTakeaways.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm sm:text-[15px] text-[#2D3934] leading-relaxed"
                  >
                    <span className="font-mono-num text-xs font-semibold text-[#8A5E1B] mt-1">
                      0{idx + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Honest Next-Step CTA Card */}
          <section className="rounded-2xl bg-[#111C18] text-[#F7F4EE] border border-[#253A32] p-7 sm:p-10 space-y-6">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-semibold text-[#C58F38]">{article.nextStepCta.eyebrow}</p>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F7F4EE] leading-snug">
                {article.nextStepCta.heading}
              </h2>
              <p className="text-sm sm:text-base text-[#C7D2CE] leading-relaxed">
                {article.nextStepCta.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={() => onRequestServiceScope(article.nextStepCta.serviceOption)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#C58F38] text-[#111C18] text-sm font-semibold hover:bg-[#D4A14E] transition-colors cursor-pointer"
              >
                <span>{article.nextStepCta.primaryButtonLabel}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
              </button>

              <a
                href={SITE_CONFIG.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-[#344E44] text-[#F7F4EE] text-sm font-medium hover:border-[#C58F38] hover:text-[#C58F38] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#C58F38]" aria-hidden="true" />
                <span>{article.nextStepCta.whatsappLabel}</span>
              </a>

              <button
                type="button"
                onClick={onBookCall}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-md text-[#C58F38] text-sm font-medium hover:underline cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" aria-hidden="true" />
                <span>{t.nav.bookCall}</span>
              </button>
            </div>

            <div className="pt-4 border-t border-[#253A32]">
              <a
                href={buildLocalizedPath(article.nextStepCta.relatedRoute, language)}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(article.nextStepCta.relatedRoute);
                }}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#A6B5AF] hover:text-[#F7F4EE] transition-colors"
              >
                <span>{article.nextStepCta.relatedLabel}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
              </a>
            </div>
          </section>

          {/* Related Guides */}
          <section className="pt-4 space-y-6 border-t border-[#E3DFD6]">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#111C18]">
                {labels.relatedHeading}
              </h2>
              <a
                href={buildLocalizedPath('guides', language)}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('guides');
                }}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#164237] hover:text-[#C58F38] transition-colors"
              >
                <ArrowLeft className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
                <span>{labels.backToHubLabel}</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedGuides.map((rel) => (
                <a
                  key={rel.route}
                  href={buildLocalizedPath(rel.route, language)}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(rel.route);
                  }}
                  className="block rounded-xl border border-[#E3DFD6] bg-white p-6 space-y-2.5 hover:border-[#C58F38] transition-colors"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#8A5E1B]">
                      {rel.number} · {rel.categoryLabel}
                    </span>
                    <span className="text-[#5C6A64]">{rel.readTimeLabel}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[#111C18] leading-snug">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-[#46544E] leading-relaxed line-clamp-2">
                    {rel.excerpt}
                  </p>
                </a>
              ))}
            </div>
          </section>
        </div>
      </article>
    </div>
  );
};
