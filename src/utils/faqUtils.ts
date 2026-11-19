import type { FaqCategory, FaqItem } from '../i18n/types';

export function filterFaqItems(items: FaqItem[], category: FaqCategory): FaqItem[] {
  if (category === 'all') {
    return items;
  }
  return items.filter((item) => item.category === category);
}
