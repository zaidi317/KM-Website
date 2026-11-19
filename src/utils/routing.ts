export type PageRoute =
  | 'home'
  | 'website-development'
  | 'seo'
  | 'social-media-marketing'
  | 'portfolio'
  | 'about'
  | 'contact';

export const ROUTE_PATHS: Record<PageRoute, string> = {
  home: '/',
  'website-development': '/services/website-development',
  seo: '/services/seo',
  'social-media-marketing': '/services/social-media-marketing',
  portfolio: '/portfolio',
  about: '/about',
  contact: '/contact',
};

export function resolveRouteFromPath(pathname: string): PageRoute {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  switch (normalized) {
    case '/':
      return 'home';
    case '/services/website-development':
      return 'website-development';
    case '/services/seo':
      return 'seo';
    case '/services/social-media-marketing':
      return 'social-media-marketing';
    case '/portfolio':
      return 'portfolio';
    case '/about':
      return 'about';
    case '/contact':
      return 'contact';
    default:
      return 'home';
  }
}

export function resolveRouteFromLocation(pathname: string, hash: string): PageRoute {
  const cleanedHash = hash.replace(/^#/, '').trim();
  if (cleanedHash.startsWith('/')) {
    return resolveRouteFromPath(cleanedHash);
  }
  return resolveRouteFromPath(pathname);
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
    route === 'website-development' ||
    route === 'seo' ||
    route === 'social-media-marketing'
  );
}
