import test from 'node:test';
import assert from 'node:assert/strict';
import { en } from './en';
import { ur } from './ur';

function collectLeafStrings(obj: unknown, prefix = ''): Array<{ path: string; value: unknown }> {
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
  return [{ path: prefix, value: obj }];
}

test('English and Urdu dictionaries have identical key/array structures and non-empty strings', () => {
  const enLeaves = collectLeafStrings(en);
  const urLeaves = collectLeafStrings(ur);

  assert.equal(enLeaves.length, urLeaves.length, 'EN and UR translation leaf counts must match');

  const urMap = new Map(urLeaves.map((entry) => [entry.path, entry.value]));
  for (const { path, value } of enLeaves) {
    assert.ok(typeof value === 'string' && value.trim().length > 0, `EN key ${path} must be non-empty`);
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
  assert.match(ur.nav.bookCall, urduScriptRegex);
  assert.match(ur.home.hero.headlinePart1, urduScriptRegex);
  assert.match(ur.webDevPage.headline, urduScriptRegex);
  assert.match(ur.seoPage.headline, urduScriptRegex);
  assert.match(ur.socialPage.headline, urduScriptRegex);
  assert.match(ur.aboutPage.headline, urduScriptRegex);
  assert.match(ur.contactPage.headline, urduScriptRegex);
});
