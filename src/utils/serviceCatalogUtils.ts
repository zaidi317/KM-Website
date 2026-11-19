import type { ServiceOption } from './formValidation';

export type ServiceDisciplineId =
  | 'web-commerce'
  | 'search-reputation'
  | 'performance-ads'
  | 'social-brand';

export type ServiceDisciplineFilter = 'all' | ServiceDisciplineId;

export interface AgencyServiceItem {
  id: string;
  number: string;
  category: ServiceDisciplineId;
  categoryLabel: string;
  title: string;
  summary: string;
  deliverables: string[];
  leadServiceOption: ServiceOption;
}

export function filterAgencyServices(
  items: readonly AgencyServiceItem[],
  filter: ServiceDisciplineFilter
): AgencyServiceItem[] {
  if (filter === 'all') {
    return [...items];
  }
  return items.filter((item) => item.category === filter);
}

export function countServicesByDiscipline(
  items: readonly AgencyServiceItem[]
): Record<ServiceDisciplineFilter, number> {
  const counts: Record<ServiceDisciplineFilter, number> = {
    all: items.length,
    'web-commerce': 0,
    'search-reputation': 0,
    'performance-ads': 0,
    'social-brand': 0,
  };

  for (const item of items) {
    counts[item.category] += 1;
  }

  return counts;
}
