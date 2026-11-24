import test from 'node:test';
import assert from 'node:assert/strict';
import { en } from '../i18n/en';
import { ur } from '../i18n/ur';
import { filterFaqItems } from './faqUtils';

test('filterFaqItems returns all FAQ items for "all" and filters across all 8 FAQ topics', () => {
  const allEn = filterFaqItems(en.home.faq.items, 'all');
  const allUr = filterFaqItems(ur.home.faq.items, 'all');

  assert.equal(allEn.length, 20);
  assert.equal(allUr.length, 20);

  const topics = [
    'general',
    'pricing',
    'web',
    'seo',
    'social',
    'ads',
    'ecommerce',
    'creators',
  ] as const;

  for (const topic of topics) {
    const filteredEn = filterFaqItems(en.home.faq.items, topic);
    const filteredUr = filterFaqItems(ur.home.faq.items, topic);
    assert.ok(filteredEn.length >= 1, `Expected EN FAQs for category ${topic}`);
    assert.equal(filteredEn.length, filteredUr.length, `Mismatch on FAQ count for ${topic}`);
    assert.ok(filteredEn.every((item) => item.category === topic));
    assert.ok(filteredUr.every((item) => item.category === topic));
  }
});
