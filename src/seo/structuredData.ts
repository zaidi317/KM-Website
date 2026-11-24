import {
  CANONICAL_ENTITY_DEFINITION,
  SITE_CONFIG,
  SITE_URL,
  getPopulatedSocialProfiles,
} from '../config/siteConfig';
import { en } from '../i18n/en';
import type { FaqItem, Language, TranslationDictionary } from '../i18n/types';
import { ur } from '../i18n/ur';
import {
  buildCanonicalUrl,
  GUIDE_ROUTES,
  isGuideRoute,
  type PageRoute,
} from '../utils/routing';

export interface StructuredDataGraph {
  '@context': 'https://schema.org';
  '@graph': Array<Record<string, unknown>>;
}

export function getVisibleFaqItems(
  route: PageRoute,
  dict: TranslationDictionary
): FaqItem[] {
  switch (route) {
    case 'home':
      return dict.home.faq.items;
    case 'services':
      return dict.servicesHubPage.faqs;
    case 'website-development':
      return dict.webDevPage.faqs;
    case 'seo':
      return dict.seoPage.faqs;
    case 'social-media-marketing':
      return dict.socialPage.faqs;
    case 'for-teachers':
      return dict.forTeachersPage.faqs;
    case 'for-small-business':
      return dict.forSmallBusinessPage.faqs;
    case 'for-large-business':
      return dict.forLargeBusinessPage.faqs;
    default:
      return [];
  }
}

export function buildStructuredData(
  route: PageRoute,
  language: Language
): StructuredDataGraph {
  const dict = language === 'ur' ? ur : en;
  const pageMeta = dict.meta[route];
  const canonicalUrl = buildCanonicalUrl(route, language);
  const homeUrl = buildCanonicalUrl('home', language);
  const guidesHubUrl = buildCanonicalUrl('guides', language);
  const socialProfiles = getPopulatedSocialProfiles();

  const orgNode: Record<string, unknown> = {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': `${SITE_URL}/#organization`,
    name: SITE_CONFIG.brandName,
    alternateName: SITE_CONFIG.brandShort,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/assets/favicon.svg`,
    description: CANONICAL_ENTITY_DEFINITION,
    areaServed: {
      '@type': 'Country',
      name: 'Pakistan',
    },
    availableLanguage: ['en', 'ur'],
    telephone: `+92${SITE_CONFIG.phoneRaw.replace(/^0/, '')}`,
    email: SITE_CONFIG.recipientEmail,
  };

  if (socialProfiles.length > 0) {
    orgNode.sameAs = socialProfiles;
  }

  const websiteNode: Record<string, unknown> = {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: SITE_CONFIG.brandName,
    inLanguage: language,
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
  };

  const webPageType = route === 'guides' ? 'CollectionPage' : 'WebPage';
  const webPageNode: Record<string, unknown> = {
    '@type': webPageType,
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: pageMeta.title,
    description: pageMeta.description,
    inLanguage: language,
    dateModified: '2026-11-23',
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
    },
    about: {
      '@id': `${SITE_URL}/#organization`,
    },
  };

  if (route === 'guides') {
    webPageNode.mainEntity = {
      '@type': 'ItemList',
      itemListElement: GUIDE_ROUTES.map((guideRoute, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: dict.guideArticles[guideRoute].title,
        url: buildCanonicalUrl(guideRoute, language),
      })),
    };
  }

  const graph: Array<Record<string, unknown>> = [orgNode, websiteNode, webPageNode];

  if (isGuideRoute(route)) {
    const article = dict.guideArticles[route];
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: dict.nav.home,
          item: homeUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: dict.nav.guides,
          item: guidesHubUrl,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: article.title,
          item: canonicalUrl,
        },
      ],
    });

    graph.push({
      '@type': 'Article',
      '@id': `${canonicalUrl}#article`,
      headline: article.title,
      description: pageMeta.description,
      inLanguage: language,
      datePublished: '2026-11-23',
      dateModified: '2026-11-23',
      author: {
        '@id': `${SITE_URL}/#organization`,
      },
      publisher: {
        '@id': `${SITE_URL}/#organization`,
      },
      mainEntityOfPage: {
        '@id': `${canonicalUrl}#webpage`,
      },
      isPartOf: {
        '@id': `${guidesHubUrl}#webpage`,
      },
      articleSection: article.categoryLabel,
    });
  } else if (route !== 'home') {
    const breadcrumbLabels: Record<Exclude<PageRoute, typeof GUIDE_ROUTES[number]>, string> = {
      home: dict.nav.home,
      services: dict.nav.allServices,
      'website-development': dict.nav.websiteDev,
      seo: dict.nav.seo,
      'social-media-marketing': dict.nav.socialMedia,
      'for-teachers': dict.nav.forTeachers,
      'for-small-business': dict.nav.forSmallBusiness,
      'for-large-business': dict.nav.forLargeBusiness,
      portfolio: dict.nav.portfolio,
      guides: dict.nav.guides,
      about: dict.nav.about,
      contact: dict.nav.contact,
    };

    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: dict.nav.home,
          item: homeUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: breadcrumbLabels[route],
          item: canonicalUrl,
        },
      ],
    });
  }

  const serviceMetaByRoute: Partial<
    Record<PageRoute, { name: string; serviceType: string; description: string }>
  > = {
    services: {
      name: dict.servicesHubPage.headline,
      serviceType: dict.nav.allServices,
      description: dict.servicesHubPage.subheadline,
    },
    'website-development': {
      name: dict.webDevPage.headline,
      serviceType: dict.nav.websiteDev,
      description: dict.webDevPage.subheadline,
    },
    seo: {
      name: dict.seoPage.headline,
      serviceType: dict.nav.seo,
      description: dict.seoPage.subheadline,
    },
    'social-media-marketing': {
      name: dict.socialPage.headline,
      serviceType: dict.nav.socialMedia,
      description: dict.socialPage.subheadline,
    },
    'for-teachers': {
      name: dict.forTeachersPage.headline,
      serviceType: dict.nav.forTeachers,
      description: dict.forTeachersPage.subheadline,
    },
    'for-small-business': {
      name: dict.forSmallBusinessPage.headline,
      serviceType: dict.nav.forSmallBusiness,
      description: dict.forSmallBusinessPage.subheadline,
    },
    'for-large-business': {
      name: dict.forLargeBusinessPage.headline,
      serviceType: dict.nav.forLargeBusiness,
      description: dict.forLargeBusinessPage.subheadline,
    },
  };

  const serviceInfo = serviceMetaByRoute[route];
  if (serviceInfo) {
    graph.push({
      '@type': 'Service',
      '@id': `${canonicalUrl}#service`,
      name: serviceInfo.name,
      serviceType: serviceInfo.serviceType,
      description: serviceInfo.description,
      provider: {
        '@id': `${SITE_URL}/#organization`,
      },
      areaServed: {
        '@type': 'Country',
        name: 'Pakistan',
      },
      url: canonicalUrl,
    });
  }

  const faqs = getVisibleFaqItems(route, dict);
  if (faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faq`,
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
