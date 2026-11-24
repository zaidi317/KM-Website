import test from 'node:test';
import assert from 'node:assert/strict';
import {
  ALL_ROUTES,
  buildCanonicalUrl,
  buildLocalizedPath,
  GUIDE_ROUTES,
  isGuideRoute,
  parseLocalizedLocation,
  resolveRouteFromLocation,
  resolveRouteFromPath,
  stripLanguagePrefix,
} from './routing';

test('resolveRouteFromPath maps canonical paths, Phase D guides, legacy /services aliases, and /ur prefixes', () => {
  assert.equal(resolveRouteFromPath('/'), 'home');
  assert.equal(resolveRouteFromPath('/website-development'), 'website-development');
  assert.equal(resolveRouteFromPath('/seo/'), 'seo');
  assert.equal(resolveRouteFromPath('/social-media-marketing'), 'social-media-marketing');
  assert.equal(resolveRouteFromPath('/portfolio'), 'portfolio');
  assert.equal(resolveRouteFromPath('/about'), 'about');
  assert.equal(resolveRouteFromPath('/contact'), 'contact');

  // Phase C dedicated service & audience routes
  assert.equal(resolveRouteFromPath('/services'), 'services');
  assert.equal(resolveRouteFromPath('/for-teachers'), 'for-teachers');
  assert.equal(resolveRouteFromPath('/for-small-business'), 'for-small-business');
  assert.equal(resolveRouteFromPath('/for-large-business'), 'for-large-business');
  assert.equal(resolveRouteFromPath('/ur/for-teachers'), 'for-teachers');

  // Phase D /guides hub & 8 bilingual guide routes
  assert.equal(resolveRouteFromPath('/guides'), 'guides');
  assert.equal(resolveRouteFromPath('/ur/guides'), 'guides');
  assert.equal(resolveRouteFromPath('/guides/google-maps-pakistan'), 'guide-google-maps');
  assert.equal(resolveRouteFromPath('/ur/guides/google-maps-pakistan'), 'guide-google-maps');
  assert.equal(
    resolveRouteFromPath('/guides/do-teachers-need-a-website'),
    'guide-teachers-website'
  );
  assert.equal(
    resolveRouteFromPath('/guides/facebook-page-vs-website'),
    'guide-facebook-vs-website'
  );
  assert.equal(
    resolveRouteFromPath('/guides/online-marketing-budget-pakistan'),
    'guide-marketing-budget'
  );
  assert.equal(resolveRouteFromPath('/guides/what-is-seo-pakistan'), 'guide-what-is-seo');
  assert.equal(
    resolveRouteFromPath('/guides/how-to-choose-digital-agency-pakistan'),
    'guide-choose-agency'
  );
  assert.equal(
    resolveRouteFromPath('/guides/daraz-vs-own-online-store'),
    'guide-daraz-vs-store'
  );
  assert.equal(
    resolveRouteFromPath('/guides/social-media-content-plan-local-business'),
    'guide-social-content-plan'
  );

  // Legacy /services/* aliases resolve cleanly without breaking existing bookmarks
  assert.equal(resolveRouteFromPath('/services/website-development'), 'website-development');
  assert.equal(resolveRouteFromPath('/services/seo/'), 'seo');
  assert.equal(resolveRouteFromPath('/services/social-media-marketing'), 'social-media-marketing');

  // Urdu URL prefixes & standalone export path
  assert.equal(resolveRouteFromPath('/ur'), 'home');
  assert.equal(resolveRouteFromPath('/ur/'), 'home');
  assert.equal(resolveRouteFromPath('/ur/website-development'), 'website-development');
  assert.equal(resolveRouteFromPath('/ur/seo'), 'seo');
  assert.equal(resolveRouteFromPath('/khanmarketings.html'), 'home');
});

test('stripLanguagePrefix, buildLocalizedPath, and buildCanonicalUrl produce clean EN and UR URLs', () => {
  assert.deepEqual(stripLanguagePrefix('/ur'), { pathWithoutLang: '/', languageFromPath: 'ur' });
  assert.deepEqual(stripLanguagePrefix('/ur/seo/'), {
    pathWithoutLang: '/seo',
    languageFromPath: 'ur',
  });
  assert.deepEqual(stripLanguagePrefix('/about'), {
    pathWithoutLang: '/about',
    languageFromPath: null,
  });

  assert.equal(buildLocalizedPath('home', 'en'), '/');
  assert.equal(buildLocalizedPath('home', 'ur'), '/ur');
  assert.equal(buildLocalizedPath('seo', 'en'), '/seo');
  assert.equal(buildLocalizedPath('seo', 'ur'), '/ur/seo');
  assert.equal(buildLocalizedPath('services', 'en'), '/services');
  assert.equal(buildLocalizedPath('for-small-business', 'ur'), '/ur/for-small-business');
  assert.equal(buildLocalizedPath('guides', 'en'), '/guides');
  assert.equal(buildLocalizedPath('guide-daraz-vs-store', 'ur'), '/ur/guides/daraz-vs-own-online-store');

  assert.equal(buildCanonicalUrl('home', 'en'), 'https://khanmarketings.com/');
  assert.equal(buildCanonicalUrl('home', 'ur'), 'https://khanmarketings.com/ur');
  assert.equal(buildCanonicalUrl('contact', 'ur'), 'https://khanmarketings.com/ur/contact');
  assert.equal(
    buildCanonicalUrl('guide-google-maps', 'en'),
    'https://khanmarketings.com/guides/google-maps-pakistan'
  );
  assert.equal(GUIDE_ROUTES.length, 8);
  assert.equal(ALL_ROUTES.length, 20);
  assert.equal(isGuideRoute('guide-google-maps'), true);
  assert.equal(isGuideRoute('guides'), false);
});

test('resolveRouteFromLocation and parseLocalizedLocation prefer hash routes for standalone HTML mode', () => {
  assert.equal(resolveRouteFromLocation('/khanmarketings.html', '#/portfolio'), 'portfolio');
  assert.equal(
    resolveRouteFromLocation('/khanmarketings.html', '#/guides/google-maps-pakistan'),
    'guide-google-maps'
  );
  assert.equal(resolveRouteFromLocation('/C:/Users/site/index.html', '#/seo'), 'seo');
  assert.equal(resolveRouteFromLocation('/about', ''), 'about');

  assert.deepEqual(parseLocalizedLocation('/khanmarketings.html', '#/ur/website-development'), {
    route: 'website-development',
    language: 'ur',
  });
  assert.deepEqual(parseLocalizedLocation('/ur/contact', ''), {
    route: 'contact',
    language: 'ur',
  });
});
