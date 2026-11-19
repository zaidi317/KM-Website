import test from 'node:test';
import assert from 'node:assert/strict';
import { PAKISTANI_NICHE_CATALOG, filterAndPickRandomSites } from './portfolioCatalog';

test('portfolio catalog contains modest Pakistani education and local business sites with valid URLs', () => {
  assert.ok(PAKISTANI_NICHE_CATALOG.length >= 10);
  const educationCount = PAKISTANI_NICHE_CATALOG.filter((s) => s.category === 'education').length;
  const localCount = PAKISTANI_NICHE_CATALOG.filter((s) => s.category === 'local-services').length;
  assert.ok(educationCount >= 5, 'Should include at least 5 school/teacher websites');
  assert.ok(localCount >= 4, 'Should include at least 4 local Pakistani business websites');

  for (const site of PAKISTANI_NICHE_CATALOG) {
    assert.ok(site.url.startsWith('https://'), `${site.id} URL must use https`);
    assert.ok(site.en.name && site.en.summary && site.en.highlights.length > 0);
    assert.ok(site.ur.name && site.ur.summary && site.ur.highlights.length > 0);
  }
});

test('filterAndPickRandomSites respects category filters and prioritizes fresh items', () => {
  const eduBatch = filterAndPickRandomSites(PAKISTANI_NICHE_CATALOG, 'education', 4, []);
  assert.equal(eduBatch.length, 4);
  assert.ok(eduBatch.every((s) => s.category === 'education'));

  const firstAll = filterAndPickRandomSites(PAKISTANI_NICHE_CATALOG, 'all', 6, []);
  assert.equal(firstAll.length, 6);
  const firstIds = firstAll.map((s) => s.id);

  const secondAll = filterAndPickRandomSites(PAKISTANI_NICHE_CATALOG, 'all', 6, firstIds);
  assert.equal(secondAll.length, 6);
  const secondIds = secondAll.map((s) => s.id);
  // Since catalog has 12 items and we excluded first 6, second batch should contain the remaining 6 fresh items
  const overlap = secondIds.filter((id) => firstIds.includes(id));
  assert.equal(overlap.length, 0);
});
