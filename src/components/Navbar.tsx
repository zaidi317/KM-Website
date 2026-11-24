import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { BrandMark } from './BrandMark';
import type { Language, TranslationDictionary } from '../i18n/types';
import { buildLocalizedPath, isGuideRoute, isServiceRoute, type PageRoute } from '../utils/routing';

interface NavbarProps {
  currentRoute: PageRoute;
  language: Language;
  t: TranslationDictionary;
  onNavigate: (route: PageRoute) => void;
  onLanguageChange: (lang: Language) => void;
  onBookCall: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  language,
  t,
  onNavigate,
  onLanguageChange,
  onBookCall,
}) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const serviceActive = isServiceRoute(currentRoute);
  const guidesActive = currentRoute === 'guides' || isGuideRoute(currentRoute);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleLinkClick = (route: PageRoute) => {
    setServicesOpen(false);
    setMobileOpen(false);
    onNavigate(route);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#111C18]/95 backdrop-blur-sm border-b border-[#253A32]">
      {/* Slim Top Utility Bar with EN | اردو Language Toggle */}
      <div className="border-b border-[#1D2E27] bg-[#0B1310]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 h-8 flex items-center justify-between gap-4 text-xs">
          <span className="text-[#A6B5AF] truncate hidden sm:inline">
            {t.utilityBar.domainNote}
          </span>
          <span className="text-[#A6B5AF] truncate sm:hidden font-mono-num">
            khanmarketings.com
          </span>

          <div
            className="inline-flex items-center rounded border border-[#253A32] bg-[#16241F] p-0.5 shrink-0"
            role="group"
            aria-label={t.utilityBar.languageLabel}
          >
            <button
              type="button"
              onClick={() => onLanguageChange('en')}
              aria-pressed={language === 'en'}
              className={`px-2.5 py-0.5 text-[11px] font-medium rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                language === 'en'
                  ? 'bg-[#C58F38] text-[#111C18]'
                  : 'text-[#A6B5AF] hover:text-[#F7F4EE]'
              }`}
            >
              {t.utilityBar.langEnglish}
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange('ur')}
              aria-pressed={language === 'ur'}
              className={`px-2.5 py-0.5 text-[11px] font-medium rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                language === 'ur'
                  ? 'bg-[#C58F38] text-[#111C18]'
                  : 'text-[#A6B5AF] hover:text-[#F7F4EE]'
              }`}
            >
              {t.utilityBar.langUrdu}
            </button>
          </div>
        </div>
      </div>

      {/* Main 3-Zone Navigation Bar */}
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href={buildLocalizedPath('home', language)}
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
          className="inline-flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C58F38] rounded"
        >
          <BrandMark
            variant="on-dark"
            wordmark={language === 'ur' ? 'خان مارکیٹنگز' : 'Khan Marketings'}
          />
        </a>

        {/* Zone 2: Desktop Navigation Links */}
        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-5 lg:gap-6 text-sm font-medium"
        >
          <a
            href={buildLocalizedPath('home', language)}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home');
            }}
            aria-current={currentRoute === 'home' ? 'page' : undefined}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors ${
              currentRoute === 'home'
                ? 'text-[#F7F4EE] border-b border-[#C58F38]'
                : 'text-[#A6B5AF] hover:text-[#F7F4EE]'
            }`}
          >
            {t.nav.home}
          </a>

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setServicesOpen((prev) => !prev)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              className={`inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 py-1 transition-colors cursor-pointer ${
                serviceActive
                  ? 'text-[#F7F4EE] border-b border-[#C58F38]'
                  : 'text-[#A6B5AF] hover:text-[#F7F4EE]'
              }`}
            >
              <span>{t.nav.services}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-150 ${
                  servicesOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            {servicesOpen && (
              <div
                className="absolute top-full mt-3 start-0 w-72 rounded-lg border border-[#253A32] bg-[#16241F] py-2 shadow-xl"
                role="menu"
              >
                <a
                  href={buildLocalizedPath('services', language)}
                  role="menuitem"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('services');
                  }}
                  className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                    currentRoute === 'services'
                      ? 'bg-[#1D3029] text-[#C58F38]'
                      : 'text-[#F7F4EE] hover:bg-[#1A2B24]'
                  }`}
                >
                  {t.nav.allServices}
                </a>
                <a
                  href={buildLocalizedPath('website-development', language)}
                  role="menuitem"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('website-development');
                  }}
                  className={`block px-4 py-2 text-sm transition-colors ${
                    currentRoute === 'website-development'
                      ? 'bg-[#1D3029] text-[#C58F38]'
                      : 'text-[#E3DFD6] hover:bg-[#1A2B24] hover:text-[#F7F4EE]'
                  }`}
                >
                  {t.nav.websiteDev}
                </a>
                <a
                  href={buildLocalizedPath('seo', language)}
                  role="menuitem"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('seo');
                  }}
                  className={`block px-4 py-2 text-sm transition-colors ${
                    currentRoute === 'seo'
                      ? 'bg-[#1D3029] text-[#C58F38]'
                      : 'text-[#E3DFD6] hover:bg-[#1A2B24] hover:text-[#F7F4EE]'
                  }`}
                >
                  {t.nav.seo}
                </a>
                <a
                  href={buildLocalizedPath('social-media-marketing', language)}
                  role="menuitem"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('social-media-marketing');
                  }}
                  className={`block px-4 py-2 text-sm transition-colors ${
                    currentRoute === 'social-media-marketing'
                      ? 'bg-[#1D3029] text-[#C58F38]'
                      : 'text-[#E3DFD6] hover:bg-[#1A2B24] hover:text-[#F7F4EE]'
                  }`}
                >
                  {t.nav.socialMedia}
                </a>

                <div className="my-2 border-t border-[#253A32]" />
                <div className="px-4 py-1 text-[11px] font-semibold text-[#A6B5AF]">
                  {t.nav.audiencesHeading}
                </div>

                <a
                  href={buildLocalizedPath('for-teachers', language)}
                  role="menuitem"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('for-teachers');
                  }}
                  className={`block px-4 py-2 text-sm transition-colors ${
                    currentRoute === 'for-teachers'
                      ? 'bg-[#1D3029] text-[#C58F38]'
                      : 'text-[#E3DFD6] hover:bg-[#1A2B24] hover:text-[#F7F4EE]'
                  }`}
                >
                  {t.nav.forTeachers}
                </a>
                <a
                  href={buildLocalizedPath('for-small-business', language)}
                  role="menuitem"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('for-small-business');
                  }}
                  className={`block px-4 py-2 text-sm transition-colors ${
                    currentRoute === 'for-small-business'
                      ? 'bg-[#1D3029] text-[#C58F38]'
                      : 'text-[#E3DFD6] hover:bg-[#1A2B24] hover:text-[#F7F4EE]'
                  }`}
                >
                  {t.nav.forSmallBusiness}
                </a>
                <a
                  href={buildLocalizedPath('for-large-business', language)}
                  role="menuitem"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('for-large-business');
                  }}
                  className={`block px-4 py-2 text-sm transition-colors ${
                    currentRoute === 'for-large-business'
                      ? 'bg-[#1D3029] text-[#C58F38]'
                      : 'text-[#E3DFD6] hover:bg-[#1A2B24] hover:text-[#F7F4EE]'
                  }`}
                >
                  {t.nav.forLargeBusiness}
                </a>
              </div>
            )}
          </div>

          <a
            href={buildLocalizedPath('portfolio', language)}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('portfolio');
            }}
            aria-current={currentRoute === 'portfolio' ? 'page' : undefined}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors ${
              currentRoute === 'portfolio'
                ? 'text-[#F7F4EE] border-b border-[#C58F38]'
                : 'text-[#A6B5AF] hover:text-[#F7F4EE]'
            }`}
          >
            {t.nav.portfolio}
          </a>

          <a
            href={buildLocalizedPath('guides', language)}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('guides');
            }}
            aria-current={guidesActive ? 'page' : undefined}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors ${
              guidesActive
                ? 'text-[#F7F4EE] border-b border-[#C58F38]'
                : 'text-[#A6B5AF] hover:text-[#F7F4EE]'
            }`}
          >
            {t.nav.guides}
          </a>

          <a
            href={buildLocalizedPath('about', language)}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('about');
            }}
            aria-current={currentRoute === 'about' ? 'page' : undefined}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors ${
              currentRoute === 'about'
                ? 'text-[#F7F4EE] border-b border-[#C58F38]'
                : 'text-[#A6B5AF] hover:text-[#F7F4EE]'
            }`}
          >
            {t.nav.about}
          </a>

          <a
            href={buildLocalizedPath('contact', language)}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('contact');
            }}
            aria-current={currentRoute === 'contact' ? 'page' : undefined}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors ${
              currentRoute === 'contact'
                ? 'text-[#F7F4EE] border-b border-[#C58F38]'
                : 'text-[#A6B5AF] hover:text-[#F7F4EE]'
            }`}
          >
            {t.nav.contact}
          </a>
        </nav>

        {/* Zone 3: Primary CTA + Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onBookCall}
            className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-md bg-[#C58F38] text-[#111C18] hover:bg-[#D4A14E] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            {t.nav.bookCall}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-[#253A32] text-[#F7F4EE] hover:border-[#C58F38] transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-navigation-drawer"
          aria-label="Mobile navigation"
          className="md:hidden border-t border-[#253A32] bg-[#111C18] px-4 py-5 space-y-1"
        >
          <a
            href={buildLocalizedPath('home', language)}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home');
            }}
            className={`block px-3 py-2.5 rounded text-base font-medium ${
              currentRoute === 'home' ? 'bg-[#172620] text-[#C58F38]' : 'text-[#F7F4EE]'
            }`}
          >
            {t.nav.home}
          </a>

          <div className="pt-2 pb-1 px-3 text-xs font-medium text-[#A6B5AF]">
            {t.nav.services}
          </div>
          <a
            href={buildLocalizedPath('services', language)}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('services');
            }}
            className={`block ps-6 pe-3 py-2.5 rounded text-sm font-medium ${
              currentRoute === 'services' ? 'bg-[#172620] text-[#C58F38]' : 'text-[#F7F4EE]'
            }`}
          >
            {t.nav.allServices}
          </a>
          <a
            href={buildLocalizedPath('website-development', language)}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('website-development');
            }}
            className={`block ps-6 pe-3 py-2.5 rounded text-sm ${
              currentRoute === 'website-development'
                ? 'bg-[#172620] text-[#C58F38]'
                : 'text-[#E3DFD6]'
            }`}
          >
            {t.nav.websiteDev}
          </a>
          <a
            href={buildLocalizedPath('seo', language)}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('seo');
            }}
            className={`block ps-6 pe-3 py-2.5 rounded text-sm ${
              currentRoute === 'seo' ? 'bg-[#172620] text-[#C58F38]' : 'text-[#E3DFD6]'
            }`}
          >
            {t.nav.seo}
          </a>
          <a
            href={buildLocalizedPath('social-media-marketing', language)}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('social-media-marketing');
            }}
            className={`block ps-6 pe-3 py-2.5 rounded text-sm ${
              currentRoute === 'social-media-marketing'
                ? 'bg-[#172620] text-[#C58F38]'
                : 'text-[#E3DFD6]'
            }`}
          >
            {t.nav.socialMedia}
          </a>

          <div className="pt-2 pb-1 px-3 text-xs font-medium text-[#A6B5AF]">
            {t.nav.audiencesHeading}
          </div>
          <a
            href={buildLocalizedPath('for-teachers', language)}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('for-teachers');
            }}
            className={`block ps-6 pe-3 py-2.5 rounded text-sm ${
              currentRoute === 'for-teachers' ? 'bg-[#172620] text-[#C58F38]' : 'text-[#E3DFD6]'
            }`}
          >
            {t.nav.forTeachers}
          </a>
          <a
            href={buildLocalizedPath('for-small-business', language)}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('for-small-business');
            }}
            className={`block ps-6 pe-3 py-2.5 rounded text-sm ${
              currentRoute === 'for-small-business'
                ? 'bg-[#172620] text-[#C58F38]'
                : 'text-[#E3DFD6]'
            }`}
          >
            {t.nav.forSmallBusiness}
          </a>
          <a
            href={buildLocalizedPath('for-large-business', language)}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('for-large-business');
            }}
            className={`block ps-6 pe-3 py-2.5 rounded text-sm ${
              currentRoute === 'for-large-business'
                ? 'bg-[#172620] text-[#C58F38]'
                : 'text-[#E3DFD6]'
            }`}
          >
            {t.nav.forLargeBusiness}
          </a>

          <a
            href={buildLocalizedPath('portfolio', language)}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('portfolio');
            }}
            className={`block px-3 py-2.5 rounded text-base font-medium ${
              currentRoute === 'portfolio' ? 'bg-[#172620] text-[#C58F38]' : 'text-[#F7F4EE]'
            }`}
          >
            {t.nav.portfolio}
          </a>

          <a
            href={buildLocalizedPath('guides', language)}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('guides');
            }}
            className={`block px-3 py-2.5 rounded text-base font-medium ${
              guidesActive ? 'bg-[#172620] text-[#C58F38]' : 'text-[#F7F4EE]'
            }`}
          >
            {t.nav.guides}
          </a>

          <a
            href={buildLocalizedPath('about', language)}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('about');
            }}
            className={`block px-3 py-2.5 rounded text-base font-medium ${
              currentRoute === 'about' ? 'bg-[#172620] text-[#C58F38]' : 'text-[#F7F4EE]'
            }`}
          >
            {t.nav.about}
          </a>

          <a
            href={buildLocalizedPath('contact', language)}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('contact');
            }}
            className={`block px-3 py-2.5 rounded text-base font-medium ${
              currentRoute === 'contact' ? 'bg-[#172620] text-[#C58F38]' : 'text-[#F7F4EE]'
            }`}
          >
            {t.nav.contact}
          </a>

          <div className="pt-4">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onBookCall();
              }}
              className="w-full py-3 px-4 rounded-md bg-[#C58F38] text-[#111C18] font-semibold text-sm hover:bg-[#D4A14E] transition-colors cursor-pointer"
            >
              {t.nav.bookCall}
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};
