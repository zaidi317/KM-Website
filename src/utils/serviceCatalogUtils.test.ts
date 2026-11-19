import test from 'node:test';
import assert from 'node:assert/strict';
import {
  countServicesByDiscipline,
  filterAgencyServices,
  type AgencyServiceItem,
} from './serviceCatalogUtils';

const SAMPLE_ITEMS: AgencyServiceItem[] = [
  {
    id: 'corp-web',
    number: '01',
    category: 'web-commerce',
    categoryLabel: 'Web & E-Commerce',
    title: 'Corporate Websites',
    summary: 'Custom sites engineered for institutional credibility.',
    deliverables: ['Responsive UI', 'Integrated copy', 'Speed optimization'],
    leadServiceOption: 'website-development',
  },
  {
    id: 'local-maps',
    number: '02',
    category: 'search-reputation',
    categoryLabel: 'Search & Local',
    title: 'Google Business Profile SEO',
    summary: 'Capture high-intent city searches across Pakistan.',
    deliverables: ['Category setup', 'Local citations', 'Call tracking'],
    leadServiceOption: 'local-seo-maps',
  },
  {
    id: 'meta-ads',
    number: '03',
    category: 'performance-ads',
    categoryLabel: 'Performance Ads',
    title: 'Meta Lead Campaigns',
    summary: 'Structured Facebook & Instagram customer acquisition.',
    deliverables: ['Funnel creative', 'Retargeting', 'CAPI setup'],
    leadServiceOption: 'performance-ads',
  },
  {
    id: 'wa-routing',
    number: '04',
    category: 'social-brand',
    categoryLabel: 'Social & Brand',
    title: 'WhatsApp Business Systems',
    summary: 'Catalogs, greeting flows, and lead qualification.',
    deliverables: ['Catalog setup', 'Quick replies', 'Lead routing'],
    leadServiceOption: 'whatsapp-automation',
  },
];

test('filterAgencyServices returns all items for "all" and narrows cleanly by discipline', () => {
  const all = filterAgencyServices(SAMPLE_ITEMS, 'all');
  assert.equal(all.length, 4);

  const web = filterAgencyServices(SAMPLE_ITEMS, 'web-commerce');
  assert.equal(web.length, 1);
  assert.equal(web[0].id, 'corp-web');

  const ads = filterAgencyServices(SAMPLE_ITEMS, 'performance-ads');
  assert.equal(ads.length, 1);
  assert.equal(ads[0].leadServiceOption, 'performance-ads');
});

test('countServicesByDiscipline aggregates counts across every discipline', () => {
  const counts = countServicesByDiscipline(SAMPLE_ITEMS);
  assert.deepEqual(counts, {
    all: 4,
    'web-commerce': 1,
    'search-reputation': 1,
    'performance-ads': 1,
    'social-brand': 1,
  });
});
