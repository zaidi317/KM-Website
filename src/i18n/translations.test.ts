import test from 'node:test';
import assert from 'node:assert/strict';
import {
  CANONICAL_ENTITY_DEFINITION,
  HONESTY_DISCLOSURE_EN,
  HONESTY_DISCLOSURE_UR,
} from '../config/siteConfig';
import { PAKISTANI_NICHE_CATALOG } from '../data/portfolioCatalog';
import { en } from './en';
import { ur } from './ur';

function collectLeafStrings(obj: unknown, prefix = ''): Array<{ path: string; value: string }> {
  if (typeof obj === 'string') {
    return [{ path: prefix, value: obj }];
  }
  if (Array.isArray(obj)) {
    return obj.flatMap((item, idx) => collectLeafStrings(item, `${prefix}[${idx}]`));
  }
  if (obj && typeof obj === 'object') {
    return Object.entries(obj).flatMap(([key, val]) =>
      collectLeafStrings(val, prefix ? `${prefix}.${key}` : key)
    );
  }
  return [];
}

test('English and Urdu dictionaries have identical key/array structures and non-empty strings', () => {
  const enLeaves = collectLeafStrings(en);
  const urLeaves = collectLeafStrings(ur);

  assert.equal(enLeaves.length, urLeaves.length, 'EN and UR translation leaf counts must match');

  const urMap = new Map(urLeaves.map((entry) => [entry.path, entry.value]));
  for (const { path, value } of enLeaves) {
    assert.ok(value.trim().length > 0, `EN key ${path} must be non-empty`);
    const urValue = urMap.get(path);
    assert.ok(
      typeof urValue === 'string' && urValue.trim().length > 0,
      `UR key ${path} must exist and be non-empty`
    );
  }
});

test('Urdu dictionary contains genuine Urdu script in primary headings and navigation', () => {
  const urduScriptRegex = /[\u0600-\u06FF]/;
  assert.match(ur.nav.home, urduScriptRegex);
  assert.match(ur.nav.services, urduScriptRegex);
  assert.match(ur.nav.guides, urduScriptRegex);
  assert.match(ur.nav.bookCall, urduScriptRegex);
  assert.match(ur.home.hero.headlinePart1, urduScriptRegex);
  assert.match(ur.servicesHubPage.headline, urduScriptRegex);
  assert.match(ur.webDevPage.headline, urduScriptRegex);
  assert.match(ur.seoPage.headline, urduScriptRegex);
  assert.match(ur.socialPage.headline, urduScriptRegex);
  assert.match(ur.forTeachersPage.headline, urduScriptRegex);
  assert.match(ur.forSmallBusinessPage.headline, urduScriptRegex);
  assert.match(ur.forLargeBusinessPage.headline, urduScriptRegex);
  assert.match(ur.guidesHubPage.headline, urduScriptRegex);
  assert.match(ur.aboutPage.headline, urduScriptRegex);
  assert.match(ur.contactPage.headline, urduScriptRegex);
});

test('Canonical entity definition and required honesty disclosures appear verbatim', () => {
  assert.equal(en.home.positioning.canonicalEntity, CANONICAL_ENTITY_DEFINITION);
  assert.equal(en.aboutPage.canonicalEntity, CANONICAL_ENTITY_DEFINITION);

  assert.equal(en.footer.honestyDisclosure, HONESTY_DISCLOSURE_EN);
  assert.equal(en.servicesHubPage.ownership.honestyDisclosure, HONESTY_DISCLOSURE_EN);
  assert.equal(en.webDevPage.ownership.honestyDisclosure, HONESTY_DISCLOSURE_EN);
  assert.equal(en.seoPage.ownership.honestyDisclosure, HONESTY_DISCLOSURE_EN);
  assert.equal(en.socialPage.ownership.honestyDisclosure, HONESTY_DISCLOSURE_EN);
  assert.equal(en.forTeachersPage.ownership.honestyDisclosure, HONESTY_DISCLOSURE_EN);
  assert.equal(en.forSmallBusinessPage.ownership.honestyDisclosure, HONESTY_DISCLOSURE_EN);
  assert.equal(en.forLargeBusinessPage.ownership.honestyDisclosure, HONESTY_DISCLOSURE_EN);
  assert.ok(en.home.faq.items.some((item) => item.answer.includes(HONESTY_DISCLOSURE_EN)));

  assert.equal(ur.footer.honestyDisclosure, HONESTY_DISCLOSURE_UR);
  assert.equal(ur.servicesHubPage.ownership.honestyDisclosure, HONESTY_DISCLOSURE_UR);
  assert.equal(ur.webDevPage.ownership.honestyDisclosure, HONESTY_DISCLOSURE_UR);
  assert.equal(ur.seoPage.ownership.honestyDisclosure, HONESTY_DISCLOSURE_UR);
  assert.equal(ur.socialPage.ownership.honestyDisclosure, HONESTY_DISCLOSURE_UR);
  assert.equal(ur.forTeachersPage.ownership.honestyDisclosure, HONESTY_DISCLOSURE_UR);
  assert.equal(ur.forSmallBusinessPage.ownership.honestyDisclosure, HONESTY_DISCLOSURE_UR);
  assert.equal(ur.forLargeBusinessPage.ownership.honestyDisclosure, HONESTY_DISCLOSURE_UR);
  assert.ok(ur.home.faq.items.some((item) => item.answer.includes(HONESTY_DISCLOSURE_UR)));
});

test('English copy contains zero banned filler phrases or fabricated hype claims', () => {
  const enLeaves = collectLeafStrings(en);
  const bannedFillerRegex =
    /\b(unlock|elevate|leverage|synergy|cutting-edge|seamless|holistic|world-class)\b|take it to the next level|fast-paced digital world|digital transformation journey|^in today'?s/i;
  const strictForbiddenRegex =
    /\b(page 1|10x|lakhs|crores|millions|years of experience|clients served|certified|leading|best|top|earn)\b|#1/i;

  for (const { path, value } of enLeaves) {
    assert.equal(
      bannedFillerRegex.test(value),
      false,
      `Banned filler found at ${path}: "${value}"`
    );
    assert.equal(
      strictForbiddenRegex.test(value),
      false,
      `Forbidden claim word found at ${path}: "${value}"`
    );
  }
});

test('English copy only uses "guarantee" or "partner" inside allowed honesty or aspirational contexts', () => {
  const enLeaves = collectLeafStrings(en);
  for (const { path, value } of enLeaves) {
    if (path.endsWith('.id')) {
      continue;
    }
    if (/\bguarantee/i.test(value)) {
      const allowedNegation =
        /do not guarantee|never.*guarantee|cannot guarantee|no guarantee/i.test(value) ||
        (path.endsWith('.question') && /\bdo .*guarantee.*\?$/i.test(value));
      assert.ok(allowedNegation, `Un-negated "guarantee" found at ${path}: "${value}"`);
    }
    if (/\bpartner\b/i.test(value)) {
      const allowedPartner =
        /goal is to be the digital partner|digital growth partner, not five/i.test(value);
      assert.ok(allowedPartner, `Unauthorized "partner" claim found at ${path}: "${value}"`);
    }
  }
});

test('Urdu copy and niche examples avoid stiff formal Persian/Arabic vocabulary', () => {
  const avoidList = [
    'مستحکم',
    'مربوط',
    'حکمتِ عملی',
    'حکمت عملی',
    'بامقصد',
    'ترسیل',
    'استفادہ',
    'تشکیل',
    'مبنی',
    'بعد ازاں',
    'مذکورہ',
    'بصیرت',
  ];

  const urLeaves = [
    ...collectLeafStrings(ur),
    ...collectLeafStrings(PAKISTANI_NICHE_CATALOG.map((item) => item.ur)),
  ];

  for (const { path, value } of urLeaves) {
    for (const forbidden of avoidList) {
      assert.equal(
        value.includes(forbidden),
        false,
        `Urdu avoid-list term "${forbidden}" found at ${path}: "${value}"`
      );
    }
  }
});

test('Meta titles stay concise (<= 60 chars) and EN descriptions <= 155 chars', () => {
  for (const [route, meta] of Object.entries(en.meta)) {
    assert.ok(
      meta.title.length <= 60,
      `EN meta.title for "${route}" is ${meta.title.length} chars (max 60)`
    );
    assert.ok(
      meta.description.length <= 155,
      `EN meta.description for "${route}" is ${meta.description.length} chars (max 155)`
    );
  }
  for (const [route, meta] of Object.entries(ur.meta)) {
    assert.ok(
      meta.title.length <= 60,
      `UR meta.title for "${route}" is ${meta.title.length} chars (max 60)`
    );
  }
});

test('All 8 Phase D English guide articles stay within 800-1200 word depth range', () => {
  for (const [route, article] of Object.entries(en.guideArticles)) {
    const wordCount = [
      article.title,
      article.excerpt,
      article.answerFirstSummary,
      ...article.sections.flatMap((s) => [s.heading, ...s.paragraphs, ...(s.bullets ?? [])]),
      ...article.keyTakeaways,
      article.nextStepCta.heading,
      article.nextStepCta.description,
    ]
      .join(' ')
      .trim()
      .split(/\s+/).length;

    assert.ok(
      wordCount >= 800 && wordCount <= 1200,
      `Guide "${route}" word count is ${wordCount} (expected 800-1200)`
    );
  }
});
