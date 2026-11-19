import React, { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import type { FaqCategory, FaqItem } from '../i18n/types';
import { filterFaqItems } from '../utils/faqUtils';

interface FaqAccordionProps {
  items: FaqItem[];
  categories?: {
    all: string;
    web: string;
    seo: string;
    social: string;
  };
  filterAriaLabel?: string;
}

const ACCORDION_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  items,
  categories,
  filterAriaLabel = 'Filter frequently asked questions by service',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<FaqCategory>('all');
  const [openId, setOpenId] = useState<string | null>(() => items[0]?.id ?? null);
  const instanceId = useId();

  const visibleItems = filterFaqItems(items, selectedCategory);

  const handleCategoryChange = (category: FaqCategory) => {
    setSelectedCategory(category);
    const nextVisible = filterFaqItems(items, category);
    setOpenId(nextVisible[0]?.id ?? null);
  };

  const categoryTabs: Array<{ id: FaqCategory; label: string }> = categories
    ? [
        { id: 'all', label: categories.all },
        { id: 'web', label: categories.web },
        { id: 'seo', label: categories.seo },
        { id: 'social', label: categories.social },
      ]
    : [];

  return (
    <div className="space-y-6">
      {categoryTabs.length > 0 && (
        <div
          role="group"
          aria-label={filterAriaLabel}
          className="inline-flex flex-wrap items-center gap-1 p-1 rounded-lg bg-[#F1EDE6] border border-[#E2DDD3]"
        >
          {categoryTabs.map((tab) => {
            const active = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                aria-pressed={active}
                onClick={() => handleCategoryChange(tab.id)}
                className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
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
      )}

      <div className="rounded-2xl border border-[#E2DDD3] bg-white divide-y divide-[#E2DDD3] overflow-hidden">
        {visibleItems.map((item, idx) => {
          const isOpen = openId === item.id;
          const buttonId = `${instanceId}-faq-btn-${item.id}`;
          const panelId = `${instanceId}-faq-panel-${item.id}`;
          const indexLabel = String(idx + 1).padStart(2, '0');

          return (
            <div key={item.id} className={isOpen ? 'bg-[#FAF8F5]/65 transition-colors' : ''}>
              <h3 className="m-0">
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full px-5 sm:px-7 py-5 flex items-start justify-between gap-5 text-start cursor-pointer group focus-visible:outline-2 focus-visible:outline-[#C58F38] focus-visible:-outline-offset-2"
                >
                  <div className="space-y-1.5 min-w-0">
                    <div className="flex flex-wrap items-center gap-2.5 text-xs">
                      <span className="font-mono-num font-semibold text-[#8A5E1B]">
                        {indexLabel}
                      </span>
                      <span className="text-[#E2DDD3]" aria-hidden="true">
                        /
                      </span>
                      <span className="font-semibold text-[#164237]">{item.categoryLabel}</span>
                    </div>
                    <span className="block text-base sm:text-lg font-semibold text-[#111C18] group-hover:text-[#8A5E1B] transition-colors leading-snug">
                      {item.question}
                    </span>
                  </div>

                  <span
                    className={`mt-1 inline-flex items-center justify-center w-8 h-8 rounded-md border transition-colors shrink-0 ${
                      isOpen
                        ? 'border-[#111C18] bg-[#111C18] text-[#F7F4EE]'
                        : 'border-[#E2DDD3] bg-[#FAF8F5] text-[#4B5954] group-hover:border-[#C58F38] group-hover:text-[#111C18]'
                    }`}
                    aria-hidden="true"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </span>
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.24, ease: ACCORDION_EASE }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-7 pb-6 pt-0 pe-12 text-sm sm:text-base text-[#4B5954] leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};
