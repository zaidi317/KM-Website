import test from 'node:test';
import assert from 'node:assert/strict';
import { en } from '../i18n/en';
import { ur } from '../i18n/ur';
import { ALL_ROUTES, GUIDE_ROUTES } from '../utils/routing';
import { buildStructuredData, getVisibleFaqItems } from './structuredData';

test('JSON-LD includes Organization/ProfessionalService without fabricated fields', () => {
  for (const route of ALL_ROUTES) {
    for (const lang of ['en', 'ur'] as const) {
      const schema = buildStructuredData(route, lang);
      const serialized = JSON.stringify(schema);

      assert.equal(schema['@context'], 'https://schema.org');
      assert.equal(serialized.includes('"Review"'), false);
      assert.equal(serialized.includes('"AggregateRating"'), false);
      assert.equal(serialized.includes('"AggregateOffer"'), false);
      assert.equal(serialized.includes('"priceRange"'), false);
      assert.equal(serialized.includes('"foundingDate"'), false);
      assert.equal(serialized.includes('"streetAddress"'), false);
      assert.equal(serialized.includes('"sameAs"'), false);

      const org = schema['@graph'].find((n) => Array.isArray(n['@type']));
      assert.ok(org, `Missing Organization node on ${route} (${lang})`);
      assert.equal(org.telephone, '+923212995766');
    }
  }
});

test('FAQPage schema matches visible page FAQs verbatim on home, hub, service, and audience pages', () => {
  for (const route of [
    'home',
    'services',
    'website-development',
    'seo',
    'social-media-marketing',
    'for-teachers',
    'for-small-business',
    'for-large-business',
  ] as const) {
    for (const lang of ['en', 'ur'] as const) {
      const dict = lang === 'ur' ? ur : en;
      const visibleFaqs = getVisibleFaqItems(route, dict);
      const schema = buildStructuredData(route, lang);
      const faqNode = schema['@graph'].find((n) => n['@type'] === 'FAQPage');

      assert.ok(faqNode, `FAQPage node missing on ${route} (${lang})`);
      const entities = faqNode.mainEntity as Array<{
        name: string;
        acceptedAnswer: { text: string };
      }>;
      assert.equal(entities.length, visibleFaqs.length);
      visibleFaqs.forEach((item, idx) => {
        assert.equal(entities[idx].name, item.question);
        assert.equal(entities[idx].acceptedAnswer.text, item.answer);
      });
    }
  }
});

test('Inner pages emit BreadcrumbList and service/audience pages emit Service schema', () => {
  const homeSchema = buildStructuredData('home', 'en');
  assert.equal(
    homeSchema['@graph'].some((n) => n['@type'] === 'BreadcrumbList'),
    false
  );

  for (const route of [
    'services',
    'website-development',
    'seo',
    'social-media-marketing',
    'for-teachers',
    'for-small-business',
    'for-large-business',
  ] as const) {
    const schema = buildStructuredData(route, 'en');
    assert.ok(schema['@graph'].some((n) => n['@type'] === 'BreadcrumbList'));
    assert.ok(schema['@graph'].some((n) => n['@type'] === 'Service'));
  }
});

test('Guides hub emits CollectionPage and all 8 guide articles emit Article + 3-level BreadcrumbList', () => {
  for (const lang of ['en', 'ur'] as const) {
    const hubSchema = buildStructuredData('guides', lang);
    const collectionPage = hubSchema['@graph'].find((n) => n['@type'] === 'CollectionPage');
    assert.ok(collectionPage, `Missing CollectionPage on guides (${lang})`);
    const breadcrumbHub = hubSchema['@graph'].find((n) => n['@type'] === 'BreadcrumbList');
    assert.ok(breadcrumbHub, `Missing BreadcrumbList on guides (${lang})`);
    assert.equal((breadcrumbHub.itemListElement as unknown[]).length, 2);

    for (const guideRoute of GUIDE_ROUTES) {
      const articleSchema = buildStructuredData(guideRoute, lang);
      const articleNode = articleSchema['@graph'].find((n) => n['@type'] === 'Article');
      assert.ok(articleNode, `Missing Article schema on ${guideRoute} (${lang})`);
      const breadcrumbArticle = articleSchema['@graph'].find(
        (n) => n['@type'] === 'BreadcrumbList'
      );
      assert.ok(breadcrumbArticle, `Missing BreadcrumbList on ${guideRoute} (${lang})`);
      assert.equal(
        (breadcrumbArticle.itemListElement as unknown[]).length,
        3,
        `Guide ${guideRoute} breadcrumb must have 3 levels (Home -> Guides -> Article)`
      );
    }
  }
});
