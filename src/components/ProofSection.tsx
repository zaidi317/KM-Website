import React from 'react';
import {
  caseStudies,
  clientLogos,
  reviewsSummary,
  testimonials,
} from '../data/proof';
import type { Language } from '../i18n/types';
import { Reveal } from './MotionPrimitives';

interface ProofSectionProps {
  language: Language;
}

/**
 * Conditionally renders client proof or clearly labelled sample feedback when populated in src/data/proof.ts.
 * Returns null cleanly when all proof collections are empty so no fabricated claims or empty boxes appear.
 */
export const ProofSection: React.FC<ProofSectionProps> = ({ language }) => {
  const hasTestimonials = testimonials.length > 0;
  const hasCaseStudies = caseStudies.length > 0;
  const hasLogos = clientLogos.length > 0;
  const hasSummary = reviewsSummary !== null;

  if (!hasTestimonials && !hasCaseStudies && !hasLogos && !hasSummary) {
    return null;
  }

  const isUr = language === 'ur';
  const isSample = hasTestimonials && testimonials.every((item) => item.isSample);

  const eyebrowText = isSample
    ? isUr
      ? 'نمونہ تاثرات'
      : 'Sample feedback'
    : isUr
      ? 'حقیقی کلائنٹ کام'
      : 'Permissioned Client Proof';

  const headingText = isSample
    ? isUr
      ? 'آپ جیسے کاروباروں کی بات'
      : 'What business owners like you care about.'
    : isUr
      ? 'جن کاروباروں کے ساتھ ہم نے کام کیا'
      : 'Real businesses building their digital footprint with Khan Marketings.';

  return (
    <section
      aria-label={isUr ? 'کلائنٹس کے تاثرات اور کام کی مثالیں' : 'Client Stories and Verified Work'}
      className="bg-white border-t border-[#E2DDD3] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 space-y-12">
        <Reveal>
          <div className="max-w-2xl space-y-2.5">
            <p className="text-xs font-semibold text-[#8A5E1B]">{eyebrowText}</p>
            <h2 className="font-display text-2xl sm:text-4xl font-medium tracking-tight text-[#111C18]">
              {headingText}
            </h2>
            {isSample && (
              <p className="inline-block rounded-lg border border-[#E2DDD3] bg-[#FAF8F5] px-3 py-1.5 text-xs text-[#4B5954]">
                {isUr
                  ? 'یہ نمونہ تاثرات ہیں، حقیقی کلائنٹس کے نہیں۔ ڈیمو کے لیے دکھائے گئے ہیں۔'
                  : 'Illustrative sample testimonials for this demo. Not real clients.'}
              </p>
            )}
          </div>
        </Reveal>

        {hasSummary && reviewsSummary && (
          <div className="rounded-xl border border-[#E2DDD3] bg-[#FAF8F5] px-5 py-4 inline-flex flex-wrap items-center gap-3 text-sm text-[#111C18]">
            <span className="font-mono-num font-semibold text-[#8A5E1B]">
              {reviewsSummary.averageRating.toFixed(1)} / 5
            </span>
            <span>
              ({reviewsSummary.reviewCount}{' '}
              {isUr ? 'ریویوز' : 'verified reviews'} · {reviewsSummary.sourceName})
            </span>
          </div>
        )}

        {hasLogos && (
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 items-center">
            {clientLogos.map((logo) => (
              <div
                key={logo.id}
                className="rounded-lg border border-[#E2DDD3] bg-[#FAF8F5] p-4 flex items-center justify-center"
              >
                <img
                  src={logo.logoUrl}
                  alt={isUr ? logo.altUr : logo.altEn}
                  className="max-h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        )}

        {hasCaseStudies && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((study) => (
              <article
                key={study.id}
                className="rounded-2xl border border-[#E2DDD3] bg-[#FAF8F5] p-6 space-y-3"
              >
                <div className="text-xs font-semibold text-[#8A5E1B]">
                  {study.industry} · {study.city}
                </div>
                <h3 className="text-lg font-semibold text-[#111C18]">{study.clientName}</h3>
                <p className="text-sm text-[#4B5954]">
                  {isUr ? study.challengeUr : study.challengeEn}
                </p>
                <p className="text-sm text-[#111C18]">
                  {isUr ? study.workDoneUr : study.workDoneEn}
                </p>
                <p className="text-sm font-medium text-[#164237]">
                  {isUr ? study.verifiedOutcomeUr : study.verifiedOutcomeEn}
                </p>
              </article>
            ))}
          </div>
        )}

        {hasTestimonials && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <blockquote
                key={item.id}
                className="rounded-2xl border border-[#E2DDD3] bg-[#FAF8F5] p-6 flex flex-col justify-between gap-4"
              >
                <p className="text-sm sm:text-base text-[#111C18] leading-relaxed">
                  “{isUr ? item.quoteUr : item.quoteEn}”
                </p>
                <footer className="text-xs text-[#4B5954]">
                  <span className="font-semibold text-[#111C18]">{item.authorName}</span> ·{' '}
                  {item.businessName}, {item.city}
                  {item.isSample ? (isUr ? ' · نمونہ' : ' · Sample') : ''}
                </footer>
              </blockquote>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
