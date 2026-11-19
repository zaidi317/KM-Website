import React, { useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './MotionPrimitives';
import type { TranslationDictionary } from '../i18n/types';
import type { ServiceOption } from '../utils/formValidation';
import {
  countServicesByDiscipline,
  filterAgencyServices,
  type ServiceDisciplineFilter,
} from '../utils/serviceCatalogUtils';

interface ServiceCatalogSectionProps {
  directory: TranslationDictionary['home']['fullServiceDirectory'];
  onSelectService: (service: ServiceOption) => void;
}

const DISCIPLINE_ORDER: ServiceDisciplineFilter[] = [
  'all',
  'web-commerce',
  'search-reputation',
  'performance-ads',
  'social-brand',
];

export const ServiceCatalogSection: React.FC<ServiceCatalogSectionProps> = ({
  directory,
  onSelectService,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceDisciplineFilter>('all');

  const counts = useMemo(
    () => countServicesByDiscipline(directory.items),
    [directory.items]
  );

  const visibleServices = useMemo(
    () => filterAgencyServices(directory.items, selectedCategory),
    [directory.items, selectedCategory]
  );

  return (
    <section
      id="service-directory"
      className="bg-[#F1EDE6] border-t border-[#E2DDD3] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-semibold text-[#8A5E1B]">{directory.eyebrow}</p>
              <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-[#111C18]">
                {directory.heading}
              </h2>
              <p className="text-sm sm:text-base text-[#4B5954] leading-relaxed">
                {directory.subheading}
              </p>
            </div>
          </div>

          {/* Interactive Discipline Filter Tabs */}
          <div
            role="group"
            aria-label={directory.heading}
            className="inline-flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-white border border-[#E2DDD3] mb-10"
          >
            {DISCIPLINE_ORDER.map((catId) => {
              const active = selectedCategory === catId;
              return (
                <button
                  key={catId}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelectedCategory(catId)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-[#111C18] text-[#F7F4EE]'
                      : 'text-[#4B5954] hover:text-[#111C18] hover:bg-[#FAF8F5]'
                  }`}
                >
                  <span>{directory.categories[catId]}</span>
                  <span
                    className={`font-mono-num text-[11px] ${
                      active ? 'text-[#C58F38]' : 'text-[#80928B]'
                    }`}
                  >
                    {counts[catId]}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div
          data-testid="service-directory-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {visibleServices.map((item) => (
            <article
              key={item.id}
              className="h-full rounded-2xl border border-[#E2DDD3] bg-white p-6 sm:p-7 flex flex-col justify-between gap-6 transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#C58F38]/70"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-mono-num font-semibold text-[#8A5E1B]">
                    {item.number}
                  </span>
                  <span className="text-[#E2DDD3]" aria-hidden="true">
                    /
                  </span>
                  <span className="font-semibold text-[#164237]">{item.categoryLabel}</span>
                </div>

                <h3 className="font-display text-xl sm:text-[1.35rem] font-medium text-[#111C18] leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-[#4B5954] leading-relaxed">{item.summary}</p>
              </div>

              <div className="pt-4 border-t border-[#F1EDE6] flex flex-col justify-between gap-5">
                <ul className="space-y-2 text-xs sm:text-sm text-[#111C18]">
                  {item.deliverables.map((deliv) => (
                    <li key={deliv} className="flex items-start gap-2.5">
                      <span
                        className="mt-2 w-2 h-px bg-[#C58F38] shrink-0"
                        aria-hidden="true"
                      />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>

                <div>
                  <button
                    type="button"
                    onClick={() => onSelectService(item.leadServiceOption)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#164237] hover:text-[#8A5E1B] transition-colors cursor-pointer"
                  >
                    <span>{directory.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
