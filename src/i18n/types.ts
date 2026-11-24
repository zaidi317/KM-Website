import type { BudgetOption, ServiceOption, ValidationErrorCode } from '../utils/formValidation';
import type { GuideRoute, PageRoute } from '../utils/routing';
import type { AgencyServiceItem, ServiceDisciplineId } from '../utils/serviceCatalogUtils';

export type Language = 'en' | 'ur';

export type GuideTopicId = 'google-seo' | 'websites-stores' | 'social-strategy';

export interface GuideSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface GuideArticle {
  route: GuideRoute;
  number: string;
  topic: GuideTopicId;
  categoryLabel: string;
  title: string;
  excerpt: string;
  readTimeLabel: string;
  lastUpdatedText: string;
  answerFirstTitle: string;
  answerFirstSummary: string;
  sections: GuideSection[];
  keyTakeawaysTitle: string;
  keyTakeaways: string[];
  nextStepCta: {
    eyebrow: string;
    heading: string;
    description: string;
    serviceOption: ServiceOption;
    primaryButtonLabel: string;
    whatsappLabel: string;
    relatedRoute: PageRoute;
    relatedLabel: string;
  };
}

export interface GuidesHubContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  lastUpdatedText: string;
  primaryCta: string;
  secondaryCta: string;
  filterHeading: string;
  categories: Record<'all' | GuideTopicId, string>;
  readGuideLabel: string;
  articleLabels: {
    homeBreadcrumb: string;
    guidesBreadcrumb: string;
    backToHubLabel: string;
    relatedHeading: string;
  };
  ctaBand: {
    heading: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
}

export interface ServiceDetailItem {
  number: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export type FaqTopicId =
  | 'general'
  | 'pricing'
  | 'web'
  | 'seo'
  | 'social'
  | 'ads'
  | 'ecommerce'
  | 'creators';

export type FaqCategory = 'all' | FaqTopicId;

export interface FaqItem {
  id: string;
  category: FaqTopicId;
  categoryLabel: string;
  question: string;
  answer: string;
}

export type TrustBadgeId =
  | 'fast-loading'
  | 'search-standards'
  | 'semantic-code'
  | 'mobile-rtl'
  | 'transparent-reporting';

export interface TrustStandardBadge {
  id: TrustBadgeId;
  code: string;
  title: string;
  subtitle: string;
}

export interface ServicePageOwnership {
  eyebrow: string;
  heading: string;
  items: string[];
  honestyDisclosure: string;
}

export interface RelatedServiceLink {
  title: string;
  description: string;
  route: PageRoute;
  ctaLabel: string;
}

export interface AudienceLandingContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta: string;
  lastUpdatedText: string;
  defaultServiceOption: ServiceOption;
  challengesSection: {
    eyebrow: string;
    heading: string;
    body: string;
    challengesTitle: string;
    challenges: string[];
    solutionsTitle: string;
    solutions: string[];
  };
  packagesSection: {
    eyebrow: string;
    heading: string;
    items: ServiceDetailItem[];
  };
  processSection: {
    eyebrow: string;
    heading: string;
    steps: ProcessStep[];
  };
  ownership: ServicePageOwnership;
  faqHeading: string;
  faqs: FaqItem[];
  relatedHeading: string;
  relatedLinks: [RelatedServiceLink, RelatedServiceLink];
  ctaBand: {
    heading: string;
    description: string;
    buttonLabel: string;
  };
}

export interface TranslationDictionary {
  meta: Record<PageRoute, { title: string; description: string }>;
  utilityBar: {
    domainNote: string;
    langEnglish: string;
    langUrdu: string;
    languageLabel: string;
  };
  nav: {
    home: string;
    services: string;
    allServices: string;
    websiteDev: string;
    seo: string;
    socialMedia: string;
    audiencesHeading: string;
    forTeachers: string;
    forSmallBusiness: string;
    forLargeBusiness: string;
    portfolio: string;
    guides: string;
    about: string;
    contact: string;
    bookCall: string;
    openMenu: string;
    closeMenu: string;
  };
  bookModal: {
    title: string;
    description: string;
    phonePromptLabel: string;
    callNowAction: string;
    copyNumberAction: string;
    copiedLabel: string;
    whatsappAction: string;
    primaryAction: string;
    secondaryAction: string;
    closeLabel: string;
    externalAction: string;
  };
  home: {
    hero: {
      eyebrow: string;
      headlinePart1: string;
      headlineHighlight1: string;
      headlinePart2: string;
      headlineHighlight2: string;
      subheadline: string;
      primaryCta: string;
      secondaryCta: string;
      whatsappCta: string;
      blueprintLabel: string;
      blueprintNodes: [string, string, string];
    };
    positioning: {
      label: string;
      heading: string;
      canonicalEntity: string;
      statement: string;
      pillars: [
        { title: string; text: string },
        { title: string; text: string },
        { title: string; text: string }
      ];
    };
    whoWeHelp: {
      eyebrow: string;
      heading: string;
      subheading: string;
      explorePageLabel: string;
      cards: [
        {
          id: string;
          audience: string;
          hook: string;
          description: string;
          offers: string[];
          ctaLabel: string;
          serviceOption: ServiceOption;
          route: PageRoute;
        },
        {
          id: string;
          audience: string;
          hook: string;
          description: string;
          offers: string[];
          ctaLabel: string;
          serviceOption: ServiceOption;
          route: PageRoute;
        },
        {
          id: string;
          audience: string;
          hook: string;
          description: string;
          offers: string[];
          ctaLabel: string;
          serviceOption: ServiceOption;
          route: PageRoute;
        }
      ];
    };
    trustStandards: {
      eyebrow: string;
      heading: string;
      note: string;
      badges: TrustStandardBadge[];
    };
    servicesOverview: {
      eyebrow: string;
      heading: string;
      subheading: string;
      exploreLink: string;
      cards: [
        {
          number: string;
          route: PageRoute;
          title: string;
          summary: string;
          deliverables: string[];
        },
        {
          number: string;
          route: PageRoute;
          title: string;
          summary: string;
          deliverables: string[];
        },
        {
          number: string;
          route: PageRoute;
          title: string;
          summary: string;
          deliverables: string[];
        }
      ];
    };
    fullServiceDirectory: {
      eyebrow: string;
      heading: string;
      subheading: string;
      ctaLabel: string;
      whoItIsForLabel: string;
      categories: Record<'all' | ServiceDisciplineId, string>;
      items: AgencyServiceItem[];
    };
    systemShowcase: {
      eyebrow: string;
      heading: string;
      subheading: string;
      tabs: [
        {
          id: 'web';
          label: string;
          problemTitle: string;
          problem: string;
          solutionTitle: string;
          solution: string;
          outcomeTitle: string;
          outcome: string;
          ctaLabel: string;
          route: PageRoute;
        },
        {
          id: 'seo';
          label: string;
          problemTitle: string;
          problem: string;
          solutionTitle: string;
          solution: string;
          outcomeTitle: string;
          outcome: string;
          ctaLabel: string;
          route: PageRoute;
        },
        {
          id: 'social';
          label: string;
          problemTitle: string;
          problem: string;
          solutionTitle: string;
          solution: string;
          outcomeTitle: string;
          outcome: string;
          ctaLabel: string;
          route: PageRoute;
        }
      ];
    };
    process: {
      eyebrow: string;
      heading: string;
      subheading: string;
      steps: ProcessStep[];
    };
    whyKm: {
      eyebrow: string;
      heading: string;
      items: [
        { title: string; description: string },
        { title: string; description: string },
        { title: string; description: string }
      ];
    };
    faq: {
      eyebrow: string;
      heading: string;
      subheading: string;
      lastUpdatedText: string;
      categories: Record<FaqCategory, string>;
      items: FaqItem[];
    };
    closingCta: {
      eyebrow: string;
      heading: string;
      description: string;
      primaryCta: string;
      secondaryCta: string;
      whatsappCta: string;
    };
  };
  webDevPage: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    lastUpdatedText: string;
    problemSection: {
      eyebrow: string;
      heading: string;
      body: string;
      comparisonLeftTitle: string;
      comparisonLeftItems: string[];
      comparisonRightTitle: string;
      comparisonRightItems: string[];
    };
    capabilities: {
      eyebrow: string;
      heading: string;
      items: ServiceDetailItem[];
    };
    launchProcess: {
      eyebrow: string;
      heading: string;
      steps: ProcessStep[];
    };
    ownership: ServicePageOwnership;
    faqHeading: string;
    faqs: FaqItem[];
    relatedHeading: string;
    relatedLinks: [RelatedServiceLink, RelatedServiceLink];
    ctaBand: {
      heading: string;
      description: string;
      buttonLabel: string;
    };
  };
  seoPage: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    lastUpdatedText: string;
    businessValue: {
      eyebrow: string;
      heading: string;
      lead: string;
      honestyNoteTitle: string;
      honestyNoteBody: string;
    };
    pillars: {
      eyebrow: string;
      heading: string;
      items: ServiceDetailItem[];
    };
    intentExplorer: {
      eyebrow: string;
      heading: string;
      description: string;
      tabs: [
        {
          id: 'technical';
          label: string;
          focus: string;
          checks: string[];
        },
        {
          id: 'onpage';
          label: string;
          focus: string;
          checks: string[];
        },
        {
          id: 'research';
          label: string;
          focus: string;
          checks: string[];
        }
      ];
    };
    reporting: {
      eyebrow: string;
      heading: string;
      body: string;
      metricsList: string[];
    };
    ownership: ServicePageOwnership;
    faqHeading: string;
    faqs: FaqItem[];
    relatedHeading: string;
    relatedLinks: [RelatedServiceLink, RelatedServiceLink];
    ctaBand: {
      heading: string;
      description: string;
      buttonLabel: string;
    };
  };
  socialPage: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    lastUpdatedText: string;
    strategyIntro: {
      eyebrow: string;
      heading: string;
      body: string;
    };
    cadenceVisual: {
      title: string;
      subtitle: string;
      columns: string[];
    };
    capabilities: {
      eyebrow: string;
      heading: string;
      items: ServiceDetailItem[];
    };
    bridgeSection: {
      eyebrow: string;
      heading: string;
      points: [
        { title: string; body: string },
        { title: string; body: string },
        { title: string; body: string }
      ];
    };
    ownership: ServicePageOwnership;
    faqHeading: string;
    faqs: FaqItem[];
    relatedHeading: string;
    relatedLinks: [RelatedServiceLink, RelatedServiceLink];
    ctaBand: {
      heading: string;
      description: string;
      buttonLabel: string;
    };
  };
  servicesHubPage: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    lastUpdatedText: string;
    corePillarsHeading: string;
    corePillars: Array<{
      title: string;
      description: string;
      route: PageRoute;
      ctaLabel: string;
    }>;
    audienceTracksHeading: string;
    audienceTracks: Array<{
      audience: string;
      title: string;
      description: string;
      route: PageRoute;
      ctaLabel: string;
    }>;
    ownership: ServicePageOwnership;
    faqHeading: string;
    faqs: FaqItem[];
    ctaBand: {
      heading: string;
      description: string;
      buttonLabel: string;
    };
  };
  forTeachersPage: AudienceLandingContent;
  forSmallBusinessPage: AudienceLandingContent;
  forLargeBusinessPage: AudienceLandingContent;
  portfolioPage: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    honestyBanner: string;
    filters: {
      all: string;
      education: string;
      localServices: string;
    };
    fetchRandomBtn: string;
    fetchingBtn: string;
    visitSiteLabel: string;
    buildSimilarLabel: string;
    ctaBand: {
      heading: string;
      description: string;
      primaryCta: string;
      secondaryCta: string;
    };
  };
  guidesHubPage: GuidesHubContent;
  guideArticles: Record<GuideRoute, GuideArticle>;
  aboutPage: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    lastUpdatedText: string;
    canonicalEntity: string;
    philosophy: {
      eyebrow: string;
      heading: string;
      paragraphs: string[];
    };
    pillars: {
      eyebrow: string;
      heading: string;
      items: [
        { number: string; title: string; body: string },
        { number: string; title: string; body: string },
        { number: string; title: string; body: string },
        { number: string; title: string; body: string }
      ];
    };
    integrationNote: {
      eyebrow: string;
      heading: string;
      body: string;
      ctaLabel: string;
    };
  };
  contactPage: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    directInfo: {
      title: string;
      emailLabel: string;
      emailHint: string;
      phoneLabel: string;
      phoneHint: string;
      whatsappCta: string;
      noPaymentNote: string;
      bookingTitle: string;
      bookingBody: string;
      bookingCta: string;
    };
    afterSubmit: {
      title: string;
      steps: ProcessStep[];
    };
    form: {
      title: string;
      subtitle: string;
      fields: {
        fullName: { label: string; placeholder: string };
        email: { label: string; placeholder: string };
        phone: { label: string; placeholder: string };
        company: { label: string; placeholder: string };
        websiteUrl: { label: string; placeholder: string; optional: string };
        serviceRequired: { label: string };
        budget: { label: string; optional: string };
        projectDetails: { label: string; placeholder: string };
      };
      serviceOptions: Record<ServiceOption, string>;
      budgetOptions: Record<BudgetOption, string>;
      submitLabel: string;
      submittingLabel: string;
      privacyNote: string;
      errors: Record<ValidationErrorCode, string>;
      devConfirmation: {
        badge: string;
        title: string;
        body: string;
        configHint: string;
        summaryTitle: string;
        mailtoButton: string;
        resetButton: string;
      };
      liveSuccess: {
        title: string;
        body: string;
        resetButton: string;
      };
      liveFailure: {
        title: string;
        body: string;
        mailtoButton: string;
      };
    };
  };
  footer: {
    tagline: string;
    servingNote: string;
    honestyDisclosure: string;
    navigationHeading: string;
    servicesHeading: string;
    contactHeading: string;
    emailConfigNote: string;
    copyright: string;
    domainText: string;
    downloadHtmlLabel: string;
  };
  chatWidget: {
    launcherLabel: string;
    closeLabel: string;
    clearLabel: string;
    title: string;
    subtitle: string;
    roleLabel: string;
    roles: {
      strategist: string;
      quickGuide: string;
    };
    welcomeMessage: string;
    starterPrompts: [string, string, string];
    inputPlaceholder: string;
    sendLabel: string;
    thinkingLabel: string;
    callShortcutLabel: string;
    whatsappShortcutLabel: string;
    errorFallback: string;
  };
  toast: {
    dismissLabel: string;
    enquirySuccessTitle: string;
    enquirySuccessMessage: string;
    enquiryValidatedTitle: string;
    enquiryValidatedMessage: string;
    callBookedTitle: string;
    callBookedMessage: string;
    numberCopiedTitle: string;
    numberCopiedMessage: string;
  };
}
