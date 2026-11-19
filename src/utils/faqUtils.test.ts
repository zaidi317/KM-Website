import test from 'node:test';
import assert from 'node:assert/strict';
import { en } from '../i18n/en';
import { ur } from '../i18n/ur';
import { filterFaqItems } from './faqUtils';

test('filterFaqItems returns all FAQ items for all and filters cleanly by service topic', () => {
  const allEn = filterFaqItems(en.home.faq.items, 'all');
  const webEn = filterFaqItems(en.home.faq.items, 'web');
  const seoEn = filterFaqItems(en.home.faq.items, 'seo');
  const socialEn = filterFaqItems(en.home.faq.items, 'social');

  assert.equal(allEn.length, 6);
  assert.equal(webEn.length, 2);
  assert.equal(seoEn.length, 2);
  assert.equal(socialEn.length, 2);
  assert.ok(webEn.every((item) => item.category === 'web'));
  assert.ok(seoEn.every((item) => item.category === 'seo'));
  assert.ok(socialEn.every((item) => item.category === 'social'));

  assert.equal(filterFaqItems(ur.home.faq.items, 'all').length, 6);
  assert.equal(filterFaqItems(ur.home.faq.items, 'social').length, 2);
});
