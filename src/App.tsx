import { useCallback, useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { BookCallModal } from './components/BookCallModal';
import { Footer } from './components/Footer';
import { KhansChatWidget } from './components/KhansChatWidget';
import { Navbar } from './components/Navbar';
import { ToastViewport } from './components/ToastViewport';
import { en } from './i18n/en';
import type { Language } from './i18n/types';
import { ur } from './i18n/ur';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { SeoPage } from './pages/SeoPage';
import { SocialMediaPage } from './pages/SocialMediaPage';
import { WebDevPage } from './pages/WebDevPage';
import type { ServiceOption } from './utils/formValidation';
import {
  ROUTE_PATHS,
  isServiceRoute,
  isStandaloneEnvironment,
  resolveRouteFromLocation,
  type PageRoute,
} from './utils/routing';
import {
  dismissToast,
  enqueueToast,
  type ToastInput,
  type ToastItem,
} from './utils/toastQueue';

const LANGUAGE_STORAGE_KEY = 'km_preferred_language';

function getInitialLanguage(): Language {
  try {
    const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (saved === 'ur' || saved === 'en') {
      return saved;
    }
  } catch {
    // Ignore storage access restrictions
  }
  return 'en';
}

export default function App() {
  const [route, setRoute] = useState<PageRoute>(() =>
    resolveRouteFromLocation(window.location.pathname, window.location.hash)
  );
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const [bookModalOpen, setBookModalOpen] = useState(false);
  const [lastServiceContext, setLastServiceContext] = useState<ServiceOption>(
    'website-development'
  );
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
    document.title = pageMeta.title;
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) {
      descTag.setAttribute('content', pageMeta.description);
    }

    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      // Ignore storage access restrictions
    }
  }, [language, route, t]);

  useEffect(() => {
    const onRouteSync = () => {
      setRoute(resolveRouteFromLocation(window.location.pathname, window.location.hash));
    };
    window.addEventListener('popstate', onRouteSync);
    window.addEventListener('hashchange', onRouteSync);
    return () => {
      window.removeEventListener('popstate', onRouteSync);
      window.removeEventListener('hashchange', onRouteSync);
    };
  }, []);

  const handleNavigate = useCallback((nextRoute: PageRoute) => {
    if (isServiceRoute(nextRoute)) {
      setLastServiceContext(nextRoute as ServiceOption);
    }
    setRoute(nextRoute);
    const targetPath = ROUTE_PATHS[nextRoute];
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
          onLanguageChange={setLanguage}
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
          {route === 'portfolio' && (
            <PortfolioPage
              language={language}
              t={t}
              onNavigate={handleNavigate}
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

        <KhansChatWidget language={language} t={t} />
      </div>
    </MotionConfig>
  );
}
