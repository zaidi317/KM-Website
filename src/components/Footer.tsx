import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import type { Language, TranslationDictionary } from '../i18n/types';
import { isStandaloneEnvironment, type PageRoute } from '../utils/routing';
import { BrandMark } from './BrandMark';

interface FooterProps {
  language: Language;
  t: TranslationDictionary;
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ language, t, onNavigate }) => {
  const showDownloadLink = !isStandaloneEnvironment();

  return (
    <footer className="bg-[#111C18] text-[#A6B5AF] border-t border-[#253A32]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#253A32]">
          <div className="md:col-span-4 space-y-4">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="inline-block"
            >
              <BrandMark
                variant="on-dark"
                wordmark={language === 'ur' ? 'خانز مارکیٹنگ' : 'Khans Marketing'}
              />
            </a>
            <p className="text-sm leading-relaxed max-w-sm text-[#A6B5AF]">{t.footer.tagline}</p>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold text-[#F7F4EE] tracking-wide">
              {t.footer.navigationHeading}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('home');
                  }}
                  className="hover:text-[#F7F4EE] transition-colors"
                >
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('portfolio');
                  }}
                  className="hover:text-[#F7F4EE] transition-colors"
                >
                  {t.nav.portfolio}
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('about');
                  }}
                  className="hover:text-[#F7F4EE] transition-colors"
                >
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('contact');
                  }}
                  className="hover:text-[#F7F4EE] transition-colors"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold text-[#F7F4EE] tracking-wide">
              {t.footer.servicesHeading}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/services/website-development"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('website-development');
                  }}
                  className="hover:text-[#F7F4EE] transition-colors"
                >
                  {t.nav.websiteDev}
                </a>
              </li>
              <li>
                <a
                  href="/services/seo"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('seo');
                  }}
                  className="hover:text-[#F7F4EE] transition-colors"
                >
                  {t.nav.seo}
                </a>
              </li>
              <li>
                <a
                  href="/services/social-media-marketing"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('social-media-marketing');
                  }}
                  className="hover:text-[#F7F4EE] transition-colors"
                >
                  {t.nav.socialMedia}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold text-[#F7F4EE] tracking-wide">
              {t.footer.contactHeading}
            </h3>
            <div className="space-y-2 text-sm">
              <a
                href={SITE_CONFIG.phoneHref}
                dir="ltr"
                className="inline-block font-mono-num font-semibold text-[#F7F4EE] hover:text-[#C58F38] transition-colors whitespace-nowrap"
              >
                {SITE_CONFIG.phoneDisplay}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.recipientEmail}`}
                className="block text-[#C58F38] hover:text-[#D4A14E] transition-colors whitespace-nowrap"
              >
                {SITE_CONFIG.recipientEmail}
              </a>
              <p className="text-xs text-[#80928B]">{t.footer.emailConfigNote}</p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#80928B]">
          <span>{t.footer.copyright}</span>
          <div className="flex flex-wrap items-center gap-4">
            {showDownloadLink && (
              <a
                href="/download-html"
                download="khansmarketing.html"
                className="text-[#C58F38] hover:text-[#D4A14E] underline underline-offset-2 transition-colors whitespace-nowrap"
              >
                {t.footer.downloadHtmlLabel}
              </a>
            )}
            <span className="font-mono-num">{t.footer.domainText}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
