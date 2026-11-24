import test from 'node:test';
import assert from 'node:assert/strict';
import {
  countServicesByDiscipline,
  filterAgencyServices,
  type AgencyServiceItem,
} from './serviceCatalogUtils';
import { en } from '../i18n/en';
import { ur } from '../i18n/ur';

const SAMPLE_ITEMS: AgencyServiceItem[] = [
  {
    id: 'biz-web',
    number: '01',
    category: 'web-commerce',
    categoryLabel: 'Websites & Stores',
    title: 'Business Website Design & Development',
    summary: 'Custom, mobile-first websites with English and Urdu RTL readiness.',
    whoItIsFor: 'Small businesses, clinics, academies, and growing companies.',
    deliverables: ['Responsive design', 'Written copy', 'Fast mobile pages'],
    leadServiceOption: 'website',
  },
  {
    id: 'local-maps',
    number: '11',
    category: 'search-reputation',
    categoryLabel: 'Search & Reputation',
    title: 'Local SEO & Google Business Profile',
    summary: 'Show up when local customers search nearby on Google Search and Maps.',
    whoItIsFor: 'Shops, schools, clinics, restaurants, and city service offices.',
    deliverables: ['Category setup', 'Map pins', 'Consistent info'],
    leadServiceOption: 'local-seo',
  },
  {
    id: 'meta-ads',
    number: '16',
    category: 'performance-ads',
    categoryLabel: 'Ads & Performance',
    title: 'Facebook & Instagram Ads',
    summary: 'Targeted campaigns sending enquiries directly to your WhatsApp or form.',
    whoItIsFor: 'Retailers, salons, academies, and service businesses.',
    deliverables: ['Audience setup', 'Ad creatives', 'Weekly review'],
    leadServiceOption: 'ads',
  },
  {
    id: 'wa-setup',
    number: '28',
    category: 'social-brand',
    categoryLabel: 'Social & Brand',
    title: 'WhatsApp Business Setup',
    summary: 'Organized catalogs, quick replies, and clean customer message flows.',
    whoItIsFor: 'Shops and service owners handling daily WhatsApp orders.',
    deliverables: ['Catalog setup', 'Quick replies', 'Broadcast structure'],
    leadServiceOption: 'social',
  },
  {
    id: 'yt-setup',
    number: '29',
    category: 'video-creators',
    categoryLabel: 'Video & Creators',
    title: 'YouTube Channel Setup & SEO',
    summary: 'Structured channel setup, titles, and playlists so viewers find your videos.',
    whoItIsFor: 'Teachers, educators, creators, and business explainers.',
    deliverables: ['Channel layout', 'Search titles', 'Thumbnail system'],
    leadServiceOption: 'video-youtube',
  },
  {
    id: 'ai-chat',
    number: '33',
    category: 'automation-growth',
    categoryLabel: 'Automation, AI & Growth',
    title: 'AI Chatbots for WhatsApp & Websites',
    summary: 'Answer common questions automatically and capture customer details.',
    whoItIsFor: 'Schools, stores, and offices handling frequent questions.',
    deliverables: ['FAQ flow', 'Lead capture', 'Human handoff'],
    leadServiceOption: 'automation-ai',
  },
];

test('filterAgencyServices returns all items for "all" and narrows cleanly by 6 disciplines', () => {
  assert.equal(filterAgencyServices(SAMPLE_ITEMS, 'all').length, 6);
  assert.equal(filterAgencyServices(SAMPLE_ITEMS, 'web-commerce')[0].id, 'biz-web');
  assert.equal(filterAgencyServices(SAMPLE_ITEMS, 'video-creators')[0].leadServiceOption, 'video-youtube');
  assert.equal(filterAgencyServices(SAMPLE_ITEMS, 'automation-growth')[0].leadServiceOption, 'automation-ai');
});

test('countServicesByDiscipline aggregates counts across all 6 disciplines', () => {
  const counts = countServicesByDiscipline(SAMPLE_ITEMS);
  assert.deepEqual(counts, {
    all: 6,
    'web-commerce': 1,
    'search-reputation': 1,
    'performance-ads': 1,
    'social-brand': 1,
    'video-creators': 1,
    'automation-growth': 1,
  });
});

test('Full English and Urdu directories contain all 40 services across 6 categories', () => {
  const enCounts = countServicesByDiscipline(en.home.fullServiceDirectory.items);
  const urCounts = countServicesByDiscipline(ur.home.fullServiceDirectory.items);

  assert.equal(enCounts.all, 40);
  assert.equal(urCounts.all, 40);
  assert.deepEqual(enCounts, {
    all: 40,
    'web-commerce': 8,
    'search-reputation': 7,
    'performance-ads': 6,
    'social-brand': 7,
    'video-creators': 4,
    'automation-growth': 8,
  });
  assert.deepEqual(urCounts, enCounts);
});
