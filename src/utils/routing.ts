import { SITE_URL } from '../config/siteConfig';
import type { Language } from '../i18n/types';

export type GuideRoute =
  | 'guide-google-maps'
  | 'guide-teachers-website'
  | 'guide-facebook-vs-website'
  | 'guide-marketing-budget'
  | 'guide-what-is-seo'
  | 'guide-choose-agency'
  | 'guide-daraz-vs-store'
  | 'guide-social-content-plan';

export type PageRoute =
  | 'home'
  | 'services'
  | 'website-development'
  | 'seo'
  | 'social-media-marketing'
  | 'for-teachers'
  | 'for-small-business'
  | 'for-large-business'
  | 'portfolio'
  | 'guides'
  | GuideRoute
  | 'about'
  | 'contact';

export const GUIDE_ROUTES: GuideRoute[] = [
  'guide-google-maps',
  'guide-teachers-website',
  'guide-facebook-vs-website',
  'guide-marketing-budget',
  'guide-what-is-seo',
  'guide-choose-agency',
  'guide-daraz-vs-store',
  'guide-social-content-plan',
];

export const ALL_ROUTES: PageRoute[] = [
  'home',
  'services',
  'website-development',
  'seo',
  'social-media-marketing',
  'for-teachers',
  'for-small-business',
  'for-large-business',
  'portfolio',
  'guides',
  ...GUIDE_ROUTES,
  'about',
  'contact',
];

export const ROUTE_PATHS: Record<PageRoute, string> = {
  home: '/',
  services: '/services',
  'website-development': '/website-development',
  seo: '/seo',
  'social-media-marketing': '/social-media-marketing',
  'for-teachers': '/for-teachers',
  'for-small-business': '/for-small-business',
  'for-large-business': '/for-large-business',
  portfolio: '/portfolio',
  guides: '/guides',
  'guide-google-maps': '/guides/google-maps-pakistan',
  'guide-teachers-website': '/guides/do-teachers-need-a-website',
  'guide-facebook-vs-website': '/guides/facebook-page-vs-website',
  'guide-marketing-budget': '/guides/online-marketing-budget-pakistan',
  'guide-what-is-seo': '/guides/what-is-seo-pakistan',
  'guide-choose-agency': '/guides/how-to-choose-digital-agency-pakistan',
  'guide-daraz-vs-store': '/guides/daraz-vs-own-online-store',
  'guide-social-content-plan': '/guides/social-media-content-plan-local-business',
  about: '/about',
  contact: '/contact',
};

const PATH_ALIASES: Record<string, PageRoute> = {
  '/services/website-development': 'website-development',
  '/services/seo': 'seo',
  '/services/social-media-marketing': 'social-media-marketing',
};

export function normalizePathname(pathname: string): string {
  const withoutQuery = pathname.split('?')[0]?.split('#')[0] ?? '/';
  const collapsed = withoutQuery.replace(/\/{2,}/g, '/');
  const trimmed = collapsed.replace(/\/+$/, '') || '/';
  return trimmed;
}

export function stripLanguagePrefix(pathname: string): {
  pathWithoutLang: string;
  languageFromPath: Language | null;
} {
  const normalized = normalizePathname(pathname);
  if (normalized === '/ur') {
    return { pathWithoutLang: '/', languageFromPath: 'ur' };
  }
  if (normalized.startsWith('/ur/')) {
    const rest = normalized.slice(3) || '/';
    return { pathWithoutLang: rest, languageFromPath: 'ur' };
  }
  return { pathWithoutLang: normalized, languageFromPath: null };
}

export function resolveRouteFromPath(pathname: string): PageRoute {
  const { pathWithoutLang } = stripLanguagePrefix(pathname);

  if (pathWithoutLang in PATH_ALIASES) {
    return PATH_ALIASES[pathWithoutLang];
  }

  for (const [route, routePath] of Object.entries(ROUTE_PATHS) as Array<[PageRoute, string]>) {
    if (routePath === pathWithoutLang) {
      return route;
    }
  }

  return 'home';
}

export function buildLocalizedPath(route: PageRoute, language: Language): string {
  const basePath = ROUTE_PATHS[route];
  if (language === 'ur') {
    return basePath === '/' ? '/ur' : `/ur${basePath}`;
  }
  return basePath;
}

export function buildCanonicalUrl(
  route: PageRoute,
  language: Language,
  siteUrl: string = SITE_URL
): string {
  const cleanSiteUrl = siteUrl.replace(/\/+$/, '');
  const path = buildLocalizedPath(route, language);
  return path === '/' ? `${cleanSiteUrl}/` : `${cleanSiteUrl}${path}`;
}

export function parseLocalizedLocation(
  pathname: string,
  hash: string
): { route: PageRoute; language: Language | null } {
  const cleanedHash = hash.replace(/^#/, '').trim();
  if (cleanedHash.startsWith('/')) {
    const { languageFromPath } = stripLanguagePrefix(cleanedHash);
    return {
      route: resolveRouteFromPath(cleanedHash),
      language: languageFromPath,
    };
  }
  const { languageFromPath } = stripLanguagePrefix(pathname);
  return {
    route: resolveRouteFromPath(pathname),
    language: languageFromPath,
  };
}

export function resolveRouteFromLocation(pathname: string, hash: string): PageRoute {
  return parseLocalizedLocation(pathname, hash).route;
}

export function isStandaloneEnvironment(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  const win = window as unknown as { __KM_STANDALONE__?: boolean };
  return (
    Boolean(win.__KM_STANDALONE__) ||
    window.location.protocol === 'file:' ||
    window.location.pathname.endsWith('.html')
  );
}

export function isServiceRoute(route: PageRoute): boolean {
  return (
    route === 'services' ||
    route === 'website-development' ||
    route === 'seo' ||
    route === 'social-media-marketing' ||
    route === 'for-teachers' ||
    route === 'for-small-business' ||
    route === 'for-large-business'
  );
}

export function isGuideRoute(route: PageRoute): route is GuideRoute {
  return GUIDE_ROUTES.includes(route as GuideRoute);
}
