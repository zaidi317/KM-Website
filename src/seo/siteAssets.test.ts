import test from 'node:test';
import assert from 'node:assert/strict';
import { CANONICAL_ENTITY_DEFINITION, SITE_URL } from '../config/siteConfig';
import { ALL_ROUTES, buildCanonicalUrl } from '../utils/routing';
import {
  generateHtaccess,
  generateLlmsFullTxt,
  generateLlmsTxt,
  generateNetlifyRedirects,
  generateRobotsTxt,
  generateSitemapXml,
} from './siteAssets';

test('generateSitemapXml outputs EN and UR URLs with bidirectional hreflang for all routes', () => {
  const xml = generateSitemapXml(ALL_ROUTES);
  for (const route of ALL_ROUTES) {
    const enUrl = buildCanonicalUrl(route, 'en', SITE_URL);
    const urUrl = buildCanonicalUrl(route, 'ur', SITE_URL);
    assert.ok(xml.includes(`<loc>${enUrl}</loc>`), `Missing EN loc ${enUrl}`);
    assert.ok(xml.includes(`<loc>${urUrl}</loc>`), `Missing UR loc ${urUrl}`);
    assert.ok(xml.includes(`hreflang="en" href="${enUrl}"`));
    assert.ok(xml.includes(`hreflang="ur" href="${urUrl}"`));
    assert.ok(xml.includes(`hreflang="x-default" href="${enUrl}"`));
  }
});

test('generateRobotsTxt explicitly allows search and AI crawlers', () => {
  const robots = generateRobotsTxt();
  for (const bot of [
    'Googlebot',
    'Bingbot',
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'ClaudeBot',
    'PerplexityBot',
    'Google-Extended',
  ]) {
    assert.ok(robots.includes(`User-agent: ${bot}`), `Missing crawler rule for ${bot}`);
  }
  assert.ok(robots.includes(`Sitemap: ${SITE_URL}/sitemap.xml`));
});

test('llms.txt and llms-full.txt include canonical definition, routes, and 40 services', () => {
  const llms = generateLlmsTxt(ALL_ROUTES);
  const full = generateLlmsFullTxt(ALL_ROUTES);

  assert.ok(llms.includes(CANONICAL_ENTITY_DEFINITION));
  assert.ok(full.includes('01'));
  assert.ok(full.includes('40'));
  assert.ok(generateHtaccess().includes('ErrorDocument 404 /404.html'));
  assert.ok(generateNetlifyRedirects(ALL_ROUTES).includes('/ur/seo/index.html 200'));
});
