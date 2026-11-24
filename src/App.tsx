import { useCallback, useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { BookCallModal } from './components/BookCallModal';
import { Footer } from './components/Footer';
import { KhanChatWidget } from './components/KhanChatWidget';
import { Navbar } from './components/Navbar';
import { ToastViewport } from './components/ToastViewport';
import { en } from './i18n/en';
import type { Language } from './i18n/types';
import { ur } from './i18n/ur';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ForLargeBusinessPage } from './pages/ForLargeBusinessPage';
import { ForSmallBusinessPage } from './pages/ForSmallBusinessPage';
import { ForTeachersPage } from './pages/ForTeachersPage';
import { GuideArticlePage } from './pages/GuideArticlePage';
import { GuidesHubPage } from './pages/GuidesHubPage';
import { HomePage } from './pages/HomePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { SeoPage } from './pages/SeoPage';
import { ServicesHubPage } from './pages/ServicesHubPage';
import { SocialMediaPage } from './pages/SocialMediaPage';
import { WebDevPage } from './pages/WebDevPage';
import type { ServiceOption } from './utils/formValidation';
import { buildStructuredData } from './seo/structuredData';
import {
  buildCanonicalUrl,
  buildLocalizedPath,
  isGuideRoute,
  isServiceRoute,
  isStandaloneEnvironment,
  parseLocalizedLocation,
  type PageRoute,
} from './utils/routing';
import {
  dismissToast,
  enqueueToast,
  type ToastInput,
  type ToastItem,
} from './utils/toastQueue';

const LANGUAGE_STORAGE_KEY = 'km_preferred_language';

const ROUTE_TO_SERVICE: Partial<Record<PageRoute, ServiceOption>> = {
  services: 'multiple',
  'website-development': 'website',
  seo: 'seo',
  'social-media-marketing': 'social',
  'for-teachers': 'website',
  'for-small-business': 'local-seo',
  'for-large-business': 'multiple',
};

function upsertHeadMeta(
  selector: string,
  tagName: 'meta' | 'link',
  attrs: Record<string, string>
) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(tagName);
    document.head.appendChild(el);
  }
  for (const [k, v] of Object.entries(attrs)) {
    el.setAttribute(k, v);
  }
}

function resolveInitialState(
  initialRoute?: PageRoute,
  initialLanguage?: Language
): { route: PageRoute; language: Language } {
  if (initialRoute && initialLanguage) {
    return { route: initialRoute, language: initialLanguage };
  }
  if (typeof window === 'undefined') {
    return {
      route: initialRoute ?? 'home',
      language: initialLanguage ?? 'en',
    };
  }

  const parsed = parseLocalizedLocation(window.location.pathname, window.location.hash);
  let lang: Language = initialLanguage ?? parsed.language ?? 'en';

  if (!initialLanguage && !parsed.language && isStandaloneEnvironment()) {
    try {
      const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (saved === 'ur' || saved === 'en') {
        lang = saved;
      }
    } catch {
      // Ignore storage restrictions
    }
  }

  return {
    route: initialRoute ?? parsed.route,
    language: lang,
  };
}

export interface AppProps {
  initialRoute?: PageRoute;
  initialLanguage?: Language;
}

export default function App({ initialRoute, initialLanguage }: AppProps = {}) {
  const initialState = resolveInitialState(initialRoute, initialLanguage);
  const [route, setRoute] = useState<PageRoute>(initialState.route);
  const [language, setLanguage] = useState<Language>(initialState.language);
  const [bookModalOpen, setBookModalOpen] = useState(false);
  const [lastServiceContext, setLastServiceContext] = useState<ServiceOption>('website');
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const handleNotify = useCallback((toast: ToastInput) => {
    setToasts((prev) => enqueueToast(prev, toast));
  }, []);

  const handleDismissToast = useCallback((id: string) => {
    setToasts((prev) => dismissToast(prev, id));
  }, []);

  const t = language === 'ur' ? ur : en;

  useEffect(() => {
    const html = document.documentElement;
    html.lang = language;
    html.dir = language === 'ur' ? 'rtl' : 'ltr';

    const pageMeta = t.meta[route];
    const canonicalUrl = buildCanonicalUrl(route, language);
    const enUrl = buildCanonicalUrl(route, 'en');
    const urUrl = buildCanonicalUrl(route, 'ur');

    document.title = pageMeta.title;
    upsertHeadMeta('meta[name="description"]', 'meta', {
      name: 'description',
      content: pageMeta.description,
    });
    upsertHeadMeta('meta[property="og:title"]', 'meta', {
      property: 'og:title',
      content: pageMeta.title,
    });
    upsertHeadMeta('meta[property="og:description"]', 'meta', {
      property: 'og:description',
      content: pageMeta.description,
    });
    upsertHeadMeta('meta[property="og:url"]', 'meta', {
      property: 'og:url',
      content: canonicalUrl,
    });
    upsertHeadMeta('meta[property="og:locale"]', 'meta', {
      property: 'og:locale',
      content: language === 'ur' ? 'ur_PK' : 'en_PK',
    });
    upsertHeadMeta('meta[name="twitter:title"]', 'meta', {
      name: 'twitter:title',
      content: pageMeta.title,
    });
    upsertHeadMeta('meta[name="twitter:description"]', 'meta', {
      name: 'twitter:description',
      content: pageMeta.description,
    });

    upsertHeadMeta('link[rel="canonical"]', 'link', {
      rel: 'canonical',
      href: canonicalUrl,
    });
    upsertHeadMeta('link[rel="alternate"][hreflang="en"]', 'link', {
      rel: 'alternate',
      hreflang: 'en',
      href: enUrl,
    });
    upsertHeadMeta('link[rel="alternate"][hreflang="ur"]', 'link', {
      rel: 'alternate',
      hreflang: 'ur',
      href: urUrl,
    });
    upsertHeadMeta('link[rel="alternate"][hreflang="x-default"]', 'link', {
      rel: 'alternate',
      hreflang: 'x-default',
      href: enUrl,
    });

    let ldScript = document.head.querySelector('#km-jsonld') as HTMLScriptElement | null;
    if (!ldScript) {
      ldScript = document.createElement('script');
      ldScript.id = 'km-jsonld';
      ldScript.type = 'application/ld+json';
      document.head.appendChild(ldScript);
    }
    ldScript.textContent = JSON.stringify(buildStructuredData(route, language));

    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      // Ignore storage access restrictions
    }
  }, [language, route, t]);

  useEffect(() => {
    const onRouteSync = () => {
      const parsed = parseLocalizedLocation(window.location.pathname, window.location.hash);
      setRoute(parsed.route);
      if (parsed.language) {
        setLanguage(parsed.language);
      } else if (!isStandaloneEnvironment()) {
        setLanguage('en');
      }
    };
    window.addEventListener('popstate', onRouteSync);
    window.addEventListener('hashchange', onRouteSync);
    return () => {
      window.removeEventListener('popstate', onRouteSync);
      window.removeEventListener('hashchange', onRouteSync);
    };
  }, []);

  const syncBrowserUrl = useCallback((nextRoute: PageRoute, nextLang: Language) => {
    const targetPath = buildLocalizedPath(nextRoute, nextLang);
    if (isStandaloneEnvironment()) {
      const nextHash = targetPath === '/' ? '' : `#${targetPath}`;
      if (window.location.hash !== nextHash) {
        window.location.hash = nextHash;
      }
    } else if (window.location.pathname !== targetPath) {
      try {
        window.history.pushState({}, '', targetPath);
      } catch {
        window.location.hash = targetPath === '/' ? '' : `#${targetPath}`;
      }
    }
  }, []);

  const handleNavigate = useCallback(
    (nextRoute: PageRoute) => {
      if (isServiceRoute(nextRoute) && ROUTE_TO_SERVICE[nextRoute]) {
        setLastServiceContext(ROUTE_TO_SERVICE[nextRoute] as ServiceOption);
      }
      setRoute(nextRoute);
      syncBrowserUrl(nextRoute, language);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [language, syncBrowserUrl]
  );

  const handleLanguageChange = useCallback(
    (nextLang: Language) => {
      if (nextLang === language) return;
      setLanguage(nextLang);
      syncBrowserUrl(route, nextLang);
    },
    [language, route, syncBrowserUrl]
  );

  const handleRequestServiceScope = useCallback(
    (service: ServiceOption) => {
      setLastServiceContext(service);
      handleNavigate('contact');
    },
    [handleNavigate]
  );

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#111C18]">
        <Navbar
          currentRoute={route}
          language={language}
          t={t}
          onNavigate={handleNavigate}
          onLanguageChange={handleLanguageChange}
          onBookCall={() => setBookModalOpen(true)}
        />

        <main className="flex-1">
          {route === 'home' && (
            <HomePage
              language={language}
              t={t}
              onNavigate={handleNavigate}
              onRequestServiceScope={handleRequestServiceScope}
              onBookCall={() => setBookModalOpen(true)}
            />
          )}
          {route === 'services' && (
            <ServicesHubPage
              language={language}
              t={t}
              onNavigate={handleNavigate}
              onRequestServiceScope={handleRequestServiceScope}
              onBookCall={() => setBookModalOpen(true)}
            />
          )}
          {route === 'website-development' && (
            <WebDevPage
              t={t}
              onNavigate={handleNavigate}
              onBookCall={() => setBookModalOpen(true)}
            />
          )}
          {route === 'seo' && (
            <SeoPage
              t={t}
              onNavigate={handleNavigate}
              onBookCall={() => setBookModalOpen(true)}
            />
          )}
          {route === 'social-media-marketing' && (
            <SocialMediaPage
              t={t}
              onNavigate={handleNavigate}
              onBookCall={() => setBookModalOpen(true)}
            />
          )}
          {route === 'for-teachers' && (
            <ForTeachersPage
              language={language}
              t={t}
              onNavigate={handleNavigate}
              onRequestServiceScope={handleRequestServiceScope}
              onBookCall={() => setBookModalOpen(true)}
            />
          )}
          {route === 'for-small-business' && (
            <ForSmallBusinessPage
              language={language}
              t={t}
              onNavigate={handleNavigate}
              onRequestServiceScope={handleRequestServiceScope}
              onBookCall={() => setBookModalOpen(true)}
            />
          )}
          {route === 'for-large-business' && (
            <ForLargeBusinessPage
              language={language}
              t={t}
              onNavigate={handleNavigate}
              onRequestServiceScope={handleRequestServiceScope}
              onBookCall={() => setBookModalOpen(true)}
            />
          )}
          {route === 'portfolio' && (
            <PortfolioPage
              language={language}
              t={t}
              onNavigate={handleNavigate}
              onBookCall={() => setBookModalOpen(true)}
            />
          )}
          {route === 'guides' && (
            <GuidesHubPage
              language={language}
              t={t}
              onNavigate={handleNavigate}
              onBookCall={() => setBookModalOpen(true)}
            />
          )}
          {isGuideRoute(route) && (
            <GuideArticlePage
              route={route}
              language={language}
              t={t}
              onNavigate={handleNavigate}
              onRequestServiceScope={handleRequestServiceScope}
              onBookCall={() => setBookModalOpen(true)}
            />
          )}
          {route === 'about' && (
            <AboutPage
              t={t}
              onNavigate={handleNavigate}
              onBookCall={() => setBookModalOpen(true)}
            />
          )}
          {route === 'contact' && (
            <ContactPage
              t={t}
              defaultService={lastServiceContext}
              onBookCall={() => setBookModalOpen(true)}
              onNotify={handleNotify}
            />
          )}
        </main>

        <Footer language={language} t={t} onNavigate={handleNavigate} />

        <BookCallModal
          open={bookModalOpen}
          t={t}
          onClose={() => setBookModalOpen(false)}
          onNavigate={handleNavigate}
          onNotify={handleNotify}
        />

        <ToastViewport
          toasts={toasts}
          dismissLabel={t.toast.dismissLabel}
          onDismiss={handleDismissToast}
        />

        <KhanChatWidget language={language} t={t} />
      </div>
    </MotionConfig>
  );
}
