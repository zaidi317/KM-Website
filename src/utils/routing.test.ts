import test from 'node:test';
import assert from 'node:assert/strict';
import { resolveRouteFromLocation, resolveRouteFromPath } from './routing';

test('resolveRouteFromPath maps all known routes and falls back to home', () => {
  assert.equal(resolveRouteFromPath('/'), 'home');
  assert.equal(resolveRouteFromPath('/services/website-development'), 'website-development');
  assert.equal(resolveRouteFromPath('/services/seo/'), 'seo');
  assert.equal(resolveRouteFromPath('/services/social-media-marketing'), 'social-media-marketing');
  assert.equal(resolveRouteFromPath('/portfolio'), 'portfolio');
  assert.equal(resolveRouteFromPath('/about'), 'about');
  assert.equal(resolveRouteFromPath('/contact'), 'contact');
  assert.equal(resolveRouteFromPath('/khansmarketing.html'), 'home');
});

test('resolveRouteFromLocation prefers hash routes for standalone HTML mode', () => {
  assert.equal(resolveRouteFromLocation('/khansmarketing.html', '#/portfolio'), 'portfolio');
  assert.equal(resolveRouteFromLocation('/C:/Users/site/index.html', '#/services/seo'), 'seo');
  assert.equal(resolveRouteFromLocation('/about', ''), 'about');
});
