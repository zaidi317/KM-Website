import {
  CANONICAL_ENTITY_DEFINITION,
  HONESTY_DISCLOSURE_EN,
  LAST_UPDATED_LABEL,
} from '../config/siteConfig';
import { guideArticlesEn, guidesHubPageEn } from '../data/guidesEn';
import type { TranslationDictionary } from './types';

export const en: TranslationDictionary = {
  meta: {
    home: {
      title: 'Digital Marketing Agency in Pakistan | Khan Marketings',
      description:
        'Khan Marketings helps Pakistani small businesses build websites, get found on Google and win customers on social media. Get a free growth plan.',
    },
    services: {
      title: 'All 40 Digital Marketing Services | Khan Marketings',
      description:
        'Browse 40 digital growth services across websites, COD e-commerce, SEO, Google Maps, Meta and TikTok ads, YouTube growth, and WhatsApp selling.',
    },
    'website-development': {
      title: 'Website Development in Pakistan | Khan Marketings',
      description:
        'Custom, mobile-friendly business websites, school sites, and Urdu RTL builds with written copy. Owned by you, built to win more enquiries.',
    },
    seo: {
      title: 'SEO & Local Maps Services in Pakistan | Khan Marketings',
      description:
        'Technical SEO, on-page structure, and Google Business Profile optimization across Pakistan so customers find your shop, clinic, or academy.',
    },
    'social-media-marketing': {
      title: 'Social Media Marketing in Pakistan | Khan Marketings',
      description:
        'Facebook, Instagram, TikTok, and WhatsApp Business marketing for Pakistani brands, shops, and schools. Turn social attention into real enquiries.',
    },
    'for-teachers': {
      title: 'Websites & Marketing for Teachers | Khan Marketings',
      description:
        'Fill classrooms and grow online tuition across Pakistan with school websites, Google Maps, YouTube lessons, and admissions enquiries on WhatsApp.',
    },
    'for-small-business': {
      title: 'Digital Growth for Pakistani Shops | Khan Marketings',
      description:
        'Help your Pakistani shop, clinic, or home brand get found on Google Maps, sell on WhatsApp, run COD stores, and win local customers online.',
    },
    'for-large-business': {
      title: 'Corporate Digital Growth in Pakistan | Khan Marketings',
      description:
        'Bilingual corporate websites, scalable technical SEO, B2B lead pipelines, and analytics for Pakistani companies, manufacturers, and exporters.',
    },
    portfolio: {
      title: 'Pakistani Website Examples | Khan Marketings',
      description:
        'Browse Pakistani teacher, school, clinic, and local shop websites we studied to benchmark clear, honest design for everyday businesses.',
    },
    guides: {
      title: 'Digital Marketing Guides Pakistan | Khan Marketings',
      description:
        'Read 8 plain-language guides on Google Maps, websites, SEO, marketing budgets, Daraz vs COD stores, and social media for Pakistani businesses.',
    },
    'guide-google-maps': {
      title: 'Get Your Shop on Google Maps Pakistan | Khan Marketings',
      description:
        'Step-by-step guide to verify your Google Business Profile, upload real photos, avoid suspensions, and win local shop calls across Pakistan.',
    },
    'guide-teachers-website': {
      title: 'Do Teachers Need a Website? Pakistan | Khan Marketings',
      description:
        'Learn how Pakistani tutors, academies, and schools use simple websites to show subject schedules, win parent trust, and grow admissions.',
    },
    'guide-facebook-vs-website': {
      title: 'Facebook Page vs Website in Pakistan | Khan Marketings',
      description:
        'Why social pages are rented ground and how combining Facebook or Instagram discovery with your own website protects long-term customer trust.',
    },
    'guide-marketing-budget': {
      title: 'Small Business Marketing Budget Guide | Khan Marketings',
      description:
        'A practical Pakistani budgeting framework separating one-time website assets, ongoing execution, and direct ad spend paid to Meta or Google.',
    },
    'guide-what-is-seo': {
      title: 'What Is SEO? Plain Business Guide | Khan Marketings',
      description:
        'Understand technical health, written service pages, and Google Maps visibility without technical jargon or fake ranking claims in Pakistan.',
    },
    'guide-choose-agency': {
      title: 'Choose a Marketing Agency in Pakistan | Khan Marketings',
      description:
        'A 7-point checklist to verify domain ownership, spot fake metrics, separate ad spend receipts, and pick an accountable Pakistani digital agency.',
    },
    'guide-daraz-vs-store': {
      title: 'Daraz vs Your Own Online Store PK | Khan Marketings',
      description:
        'Compare Daraz commissions and price wars against your own Shopify or WooCommerce COD store for margins, buyer ownership, and return control.',
    },
    'guide-social-content-plan': {
      title: 'Social Media Content Plan Local Shops | Khan Marketings',
      description:
        'Build a simple 3-post weekly routine using smartphone clips, buyer FAQs, real shop proof, and WhatsApp calls to action without burnout.',
    },
    about: {
      title: 'About Us — Digital Growth Agency | Khan Marketings',
      description:
        'Meet Khan Marketings — a digital growth agency for Pakistani businesses combining websites, Google visibility, social media, and WhatsApp selling.',
    },
    contact: {
      title: 'Get a Free Quote & Growth Plan | Khan Marketings',
      description:
        'Message Khan Marketings on WhatsApp or call 0321-2995766 for a free digital growth plan. Serving businesses, schools, and brands across Pakistan.',
    },
  },
  utilityBar: {
    domainNote: 'khanmarketings.com — Serving businesses across Pakistan · 0321-2995766',
    langEnglish: 'EN',
    langUrdu: 'اردو',
    languageLabel: 'Select language',
  },
  nav: {
    home: 'Home',
    services: 'Services',
    allServices: 'All 40 Services',
    websiteDev: 'Website Development',
    seo: 'SEO & Google Maps',
    socialMedia: 'Social Media Marketing',
    audiencesHeading: 'Who We Help',
    forTeachers: 'For Teachers & Schools',
    forSmallBusiness: 'For Shops & Local Business',
    forLargeBusiness: 'For Companies & Exporters',
    portfolio: 'Website Examples',
    guides: 'Guides',
    about: 'About',
    contact: 'Contact',
    bookCall: 'Book a Call',
    openMenu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
  },
  bookModal: {
    title: 'Talk Directly With Khan Marketings',
    description:
      'Call or message us on WhatsApp about your website, Google visibility, or social media plan. No payment is needed for your first conversation.',
    phonePromptLabel: 'Direct Phone & WhatsApp',
    callNowAction: 'Call Now',
    copyNumberAction: 'Copy Number',
    copiedLabel: 'Copied',
    whatsappAction: 'Message Us on WhatsApp',
    primaryAction: 'Open Free Quote Form',
    secondaryAction: 'Close',
    closeLabel: 'Close call dialog',
    externalAction: 'Continue to Booking Calendar',
  },
  home: {
    hero: {
      eyebrow: 'Digital growth agency for Pakistan’s small business empires',
      headlinePart1: 'Take your business to the ',
      headlineHighlight1: 'moon',
      headlinePart2: '. Build a brand every city ',
      headlineHighlight2: 'trusts',
      subheadline:
        'Website, Google, social media, ads and WhatsApp selling, built as one growth system by one team. Imagine opening your phone to new customer enquiries every morning.',
      primaryCta: 'Get Your Free Growth Plan',
      secondaryCta: 'Explore All 40 Services',
      whatsappCta: 'Message Us on WhatsApp',
      blueprintLabel: 'Your Owned Digital Launchpad',
      blueprintNodes: [
        'Website & Online Store',
        'Google Search & Maps',
        'Social, Ads & WhatsApp',
      ],
    },
    positioning: {
      label: 'What is Khan Marketings?',
      heading: 'Every big brand started small. Your online presence is the launchpad.',
      canonicalEntity: CANONICAL_ENTITY_DEFINITION,
      statement:
        'A Facebook page or WhatsApp number alone is rented land — algorithms change and reach drops overnight. A real website, Google Business Profile, and customer list belong to you.',
      pillars: [
        {
          title: 'Built Complete With Real Words',
          text: 'Your shop, open 24 hours, in every city. We write plain English and Urdu copy inside fast, mobile-ready pages so buyers understand and trust your business.',
        },
        {
          title: 'Found When Buyers Search Google',
          text: 'Your customers are searching on Google and Google Maps right now. Clean site structure and Local SEO put your business in front of buyers ready to call.',
        },
        {
          title: 'One Team for Every Channel',
          text: 'Stop juggling five different freelancers who blame each other. One accountable team handles your website, SEO, ads, social media, and WhatsApp sales flow.',
        },
      ],
    },
    whoWeHelp: {
      eyebrow: 'Who We Help Across Pakistan',
      heading: 'Built for everyday Pakistani builders, teachers, and serious brands.',
      subheading:
        'Whether you teach twenty students in a home academy or ship products nationwide, every empire starts with a clear first page.',
      explorePageLabel: 'See dedicated guide',
      cards: [
        {
          id: 'teachers',
          audience: 'Teachers, Tutors & Schools',
          hook: 'Your knowledge deserves more than one neighbourhood.',
          description:
            'Stop waiting for word-of-mouth referrals before admissions close. Attract students and parents from across the city and online.',
          offers: [
            'School, academy & teacher websites with admission forms',
            'Google Maps visibility & YouTube lesson channel setup',
            'Admissions-season Meta ads & clean WhatsApp enquiries',
          ],
          ctaLabel: 'Fill My Classes',
          serviceOption: 'website',
          route: 'for-teachers',
        },
        {
          id: 'small-business',
          audience: 'Shops, Clinics & Local Businesses',
          hook: 'Your customers are searching on Google right now. Are you there?',
          description:
            'Turn walk-in shops, boutiques, bakeries, clinics, salons, and home businesses into recognized names customers trust enough to buy from.',
          offers: [
            'Custom websites & COD-ready Shopify / WooCommerce stores',
            'Google Business Profile, Local Maps & review workflows',
            'WhatsApp Business catalog + tracked Facebook & TikTok ads',
          ],
          ctaLabel: 'Start Selling Online',
          serviceOption: 'ecommerce',
          route: 'for-small-business',
        },
        {
          id: 'large-business',
          audience: 'Large Companies & Exporters',
          hook: 'Big business deserves a big digital presence.',
          description:
            'Give manufacturers, multi-branch institutions, corporate firms, and exporters an online home buyers and overseas clients trust at first glance.',
          offers: [
            'Corporate bilingual websites & technical SEO at scale',
            'LinkedIn & B2B lead generation pipelines for sales teams',
            'GA4 & Conversions API tracking + reputation management',
          ],
          ctaLabel: 'Request a Consultation',
          serviceOption: 'multiple',
          route: 'for-large-business',
        },
      ],
    },
    trustStandards: {
      eyebrow: 'How We Build — Process Commitments',
      heading: 'Promises we control, written down before work begins.',
      note: 'No inflated awards or fake agency badges. These five practical commitments govern every project we take on.',
      badges: [
        {
          id: 'fast-loading',
          code: '01',
          title: 'Fast-Loading Pages',
          subtitle: 'Built lean so pages open smoothly even on mobile 4G networks across Pakistan.',
        },
        {
          id: 'mobile-rtl',
          code: '02',
          title: 'Mobile & Urdu RTL Ready',
          subtitle: 'Tested on phone screens in both crisp English LTR and clean Urdu RTL.',
        },
        {
          id: 'search-standards',
          code: '03',
          title: 'Search-Friendly Structure',
          subtitle: 'Clean headings, alt text, sitemaps, and clear answers that Google can read.',
        },
        {
          id: 'semantic-code',
          code: '04',
          title: 'You Own Everything',
          subtitle: 'Your domain, website code, ad accounts, and customer data stay in your name.',
        },
        {
          id: 'transparent-reporting',
          code: '05',
          title: 'Honest, Clear Reporting',
          subtitle: 'Written scope before starting, milestone check-ins, and plain reports you understand.',
        },
      ],
    },
    servicesOverview: {
      eyebrow: 'Core Systems',
      heading: 'Three pillars that turn online attention into customer calls.',
      subheading:
        'Start with one focused piece or combine all three with paid ads, video, and WhatsApp automation.',
      exploreLink: 'Read full breakdown',
      cards: [
        {
          number: '01',
          route: 'website-development',
          title: 'Websites & Online Stores (Built Complete)',
          summary:
            'Custom business websites, school portals, ad landing pages, and COD-ready stores — delivered with written English and Urdu copy.',
          deliverables: [
            'Mobile-first design tailored to your business — zero blank templates',
            'English & Urdu RTL websites plus written service pages',
            'Shopify & WooCommerce stores with Cash on Delivery support',
            'Full ownership of domain, hosting, and website files',
          ],
        },
        {
          number: '02',
          route: 'seo',
          title: 'Google Search & Local Maps SEO',
          summary:
            'Clean technical structure, search-intent copy, and Google Business Profile optimization so local buyers find you when they search.',
          deliverables: [
            'Technical cleanup, speed fixes, and clean page structure',
            'Google Business Profile setup & Google Maps local optimization',
            'Keyword research focused on real buyer enquiries',
            'Monthly reports showing impressions, clicks, and next tasks',
          ],
        },
        {
          number: '03',
          route: 'social-media-marketing',
          title: 'Social Media, Paid Ads & WhatsApp Selling',
          summary:
            'Consistent content calendars, Reels scripting, targeted Meta/Google/TikTok ads, and organized WhatsApp Business catalogs.',
          deliverables: [
            'Monthly post calendars, carousels, and Reels scripting',
            'Facebook, Instagram, Google & TikTok ads with Pixel & CAPI tracking',
            'WhatsApp Business catalogs, quick replies & lead routing',
            'Every campaign connected cleanly back to your website',
          ],
        },
      ],
    },
    fullServiceDirectory: {
      eyebrow: 'Complete Digital Growth Menu',
      heading: 'All 40 specialized services under six clear disciplines.',
      subheading:
        'Filter by category and pick any service to request a tailored, scope-based quote. Start small and grow in clear stages.',
      ctaLabel: 'Get a Free Quote',
      whoItIsForLabel: 'Built for:',
      categories: {
        all: 'All Services',
        'web-commerce': 'Websites & Stores',
        'search-reputation': 'Search & Reputation',
        'performance-ads': 'Ads & Performance',
        'social-brand': 'Social & Brand',
        'video-creators': 'Video & Creators',
        'automation-growth': 'Automation, AI & Growth',
      },
      items: [
        {
          id: 'business-website-dev',
          number: '01',
          category: 'web-commerce',
          categoryLabel: 'Websites & Stores',
          title: 'Business Website Design & Development',
          summary:
            'A fast, custom website in English or bilingual English + Urdu RTL that explains your work clearly and drives direct phone and WhatsApp enquiries.',
          whoItIsFor: 'Small businesses, clinics, contractors, law firms, and companies.',
          deliverables: [
            'Custom mobile-first responsive pages',
            'Clear service structure & enquiry forms',
            'English LTR and Urdu RTL typography support',
            'Direct WhatsApp & phone click buttons',
          ],
          leadServiceOption: 'website',
        },
        {
          id: 'ad-landing-pages',
          number: '02',
          category: 'web-commerce',
          categoryLabel: 'Websites & Stores',
          title: 'Landing Pages for Ads & Campaigns',
          summary:
            'Focused single-offer pages engineered so people clicking your Facebook, Instagram, or Google ads book a call or send a message instead of leaving.',
          whoItIsFor: 'Businesses running paid campaigns or seasonal admissions drives.',
          deliverables: [
            'Clear headline & buyer objection answers',
            'Distraction-free enquiry or WhatsApp CTA',
            'Fast 4G mobile load optimization',
          ],
          leadServiceOption: 'website',
        },
        {
          id: 'school-teacher-websites',
          number: '03',
          category: 'web-commerce',
          categoryLabel: 'Websites & Stores',
          title: 'School, Academy & Teacher Websites',
          summary:
            'Give parents and students one clear place to inspect subjects, timings, fee details, and send admission enquiries in minutes.',
          whoItIsFor: 'Private tutors, coaching academies, schools, and colleges.',
          deliverables: [
            'Courses, classes & batch schedules',
            'Teacher profile & parent trust section',
            'Admission enquiry form & WhatsApp button',
          ],
          leadServiceOption: 'website',
        },
        {
          id: 'ecommerce-cod-stores',
          number: '04',
          category: 'web-commerce',
          categoryLabel: 'Websites & Stores',
          title: 'E-Commerce Stores (Shopify & WooCommerce)',
          summary:
            'Complete online stores configured for Cash on Delivery, clean product filtering, courier order confirmation, and local payment options where supported.',
          whoItIsFor: 'Clothing brands, home sellers, bakeries, pharmacies, and retailers.',
          deliverables: [
            'Shopify or WooCommerce store & checkout setup',
            'Cash on Delivery & JazzCash/Easypaisa readiness where supported',
            'Clean product gallery, sizing & order forms',
          ],
          leadServiceOption: 'ecommerce',
        },
        {
          id: 'daraz-marketplace',
          number: '05',
          category: 'web-commerce',
          categoryLabel: 'Websites & Stores',
          title: 'Marketplace Setup & Management (Daraz & Others)',
          summary:
            'Get your product listings, pricing structure, search titles, and store presentation organized cleanly on Daraz and regional marketplaces.',
          whoItIsFor: 'Product sellers, wholesalers, and retail brands expanding nationwide.',
          deliverables: [
            'Seller center store setup & category mapping',
            'Keyword-clear product titles & photo guidelines',
            'Catalog organization & promotional campaign prep',
          ],
          leadServiceOption: 'ecommerce',
        },
        {
          id: 'domain-hosting-maintenance',
          number: '06',
          category: 'web-commerce',
          categoryLabel: 'Websites & Stores',
          title: 'Domain, Hosting, SSL & Maintenance',
          summary:
            'Keep your domain name, HTTPS security lock, official business emails, backups, and ongoing website updates running cleanly without technical headaches.',
          whoItIsFor: 'Business owners who want dependable ongoing site care.',
          deliverables: [
            '.pk or .com domain & business email setup',
            'SSL security, scheduled backups & uptime monitoring',
            'Monthly updates & broken-link sweeps',
          ],
          leadServiceOption: 'website',
        },
        {
          id: 'website-redesign-upgrade',
          number: '07',
          category: 'web-commerce',
          categoryLabel: 'Websites & Stores',
          title: 'Website Redesign, Speed & Security Upgrade',
          summary:
            'Turn a slow, outdated, or broken old site into a modern, fast-loading, mobile-ready business website without losing your hard-earned search links.',
          whoItIsFor: 'Established businesses whose current site looks old or loads slowly.',
          deliverables: [
            'Full speed & mobile usability rebuild',
            'Clean URL redirects to preserve search history',
            'Modernized visual hierarchy & clear CTAs',
          ],
          leadServiceOption: 'website',
        },
        {
          id: 'website-content-writing',
          number: '08',
          category: 'web-commerce',
          categoryLabel: 'Websites & Stores',
          title: 'Website Content Writing & Integration (EN + UR)',
          summary:
            'Never launch with empty placeholder text. We interview you, write persuasive English and spoken Urdu page copy, and format every word directly on your pages.',
          whoItIsFor: 'Owners who know their business well but do not have time to write copy.',
          deliverables: [
            'Structured phone interview to capture your offer',
            'Complete English and/or natural Urdu page copy',
            'Headline, FAQ & call-to-action placement',
          ],
          leadServiceOption: 'branding',
        },
        {
          id: 'technical-seo',
          number: '09',
          category: 'search-reputation',
          categoryLabel: 'Search & Reputation',
          title: 'Technical SEO',
          summary:
            'Fix the hidden site issues — crawl errors, slow mobile loading, broken links, missing sitemaps, and schema — that keep Google from indexing your site cleanly.',
          whoItIsFor: 'Websites with low search impressions despite having good services.',
          deliverables: [
            'Indexing, canonicals & XML sitemap fixes',
            'Core Web Vitals mobile performance checks',
            'Schema markup for search & AI engines',
          ],
          leadServiceOption: 'seo',
        },
        {
          id: 'onpage-seo',
          number: '10',
          category: 'search-reputation',
          categoryLabel: 'Search & Reputation',
          title: 'On-Page SEO & Content Optimization',
          summary:
            'Align every page title, description, H1–H3 heading, internal link, and paragraph with the real phrases Pakistani buyers type into Google.',
          whoItIsFor: 'Service websites and online stores wanting clearer Google visibility.',
          deliverables: [
            'Unique SEO titles & meta descriptions',
            'Clean heading structure & answer-first copy',
            'Descriptive internal links & image alt text',
          ],
          leadServiceOption: 'seo',
        },
        {
          id: 'local-seo-maps',
          number: '11',
          category: 'search-reputation',
          categoryLabel: 'Search & Reputation',
          title: 'Local SEO, Google Business Profile & Maps',
          summary:
            'Help nearby customers find your shop, clinic, salon, restaurant, or academy first when they search on Google Search and Google Maps.',
          whoItIsFor: 'City-based physical businesses serving Lahore, Karachi, Islamabad & across Pakistan.',
          deliverables: [
            'Google Business Profile setup & category tuning',
            'Address, phone & hours consistency cleanup',
            'Local city landing page optimization',
          ],
          leadServiceOption: 'local-seo',
        },
        {
          id: 'keyword-competitor-research',
          number: '12',
          category: 'search-reputation',
          categoryLabel: 'Search & Reputation',
          title: 'Keyword Research, Intent & Competitor Analysis',
          summary:
            'Discover the exact words buying customers search for — separating ready-to-buy queries from casual searches so your budget focuses on real demand.',
          whoItIsFor: 'Businesses planning a new website, store, or content roadmap.',
          deliverables: [
            'Commercial & local buyer keyword map',
            'Comparison against competing sites in your niche',
            'Priority page recommendations',
          ],
          leadServiceOption: 'seo',
        },
        {
          id: 'whitehat-links-pr',
          number: '13',
          category: 'search-reputation',
          categoryLabel: 'Search & Reputation',
          title: 'White-Hat Link Building & Digital PR',
          summary:
            'Build genuine domain authority through helpful guest articles, reputable business directories, and clean brand mentions — zero spammy link farms.',
          whoItIsFor: 'Growing brands and B2B companies in competitive search markets.',
          deliverables: [
            'Clean Pakistani & industry directory profiles',
            'Outreach for editorial articles & citations',
            'Link health audit & toxic-link review',
          ],
          leadServiceOption: 'seo',
        },
        {
          id: 'online-reputation-reviews',
          number: '14',
          category: 'search-reputation',
          categoryLabel: 'Search & Reputation',
          title: 'Online Reputation & Review Management',
          summary:
            'Make it effortless for happy customers to leave honest Google and Facebook reviews while giving your team calm, composed ways to handle tough feedback.',
          whoItIsFor: 'Clinics, schools, restaurants, salons, and trusted consumer brands.',
          deliverables: [
            'WhatsApp & QR post-visit review request system',
            'Professional response templates for reviews',
            'Brand-search accuracy monitoring',
          ],
          leadServiceOption: 'local-seo',
        },
        {
          id: 'seo-reporting-analytics',
          number: '15',
          category: 'search-reputation',
          categoryLabel: 'Search & Reputation',
          title: 'SEO Reporting & Analytics (GA4, Search Console)',
          summary:
            'See clearly which Google searches bring clicks, calls, and form enquiries with monthly reports written in plain language instead of confusing jargon.',
          whoItIsFor: 'Owners who want proof of work done and clear monthly direction.',
          deliverables: [
            'Google Search Console & GA4 setup',
            'Phone, WhatsApp & enquiry event tracking',
            'Plain-language monthly progress brief',
          ],
          leadServiceOption: 'seo',
        },
        {
          id: 'facebook-instagram-ads',
          number: '16',
          category: 'performance-ads',
          categoryLabel: 'Ads & Performance',
          title: 'Facebook & Instagram Ads',
          summary:
            'Put your offer in front of buyers across your city or all of Pakistan with structured campaigns built for WhatsApp messages, leads, or store orders.',
          whoItIsFor: 'Shops, boutiques, academies, clinics, real estate, and online brands.',
          deliverables: [
            'Audience & city-level targeting setup',
            'Click-to-WhatsApp, lead form & catalog campaigns',
            'Creative testing & weekly budget pacing',
          ],
          leadServiceOption: 'ads',
        },
        {
          id: 'google-search-display-ads',
          number: '17',
          category: 'performance-ads',
          categoryLabel: 'Ads & Performance',
          title: 'Google Search & Display Ads',
          summary:
            'Show up right when someone types what you sell into Google Search — with negative keywords that block wasted clicks on irrelevant searches.',
          whoItIsFor: 'Urgent services, B2B suppliers, clinics, academies, and exporters.',
          deliverables: [
            'High-intent Search campaigns & ad extensions',
            'Negative-keyword lists to protect ad budget',
            'Dedicated landing page alignment',
          ],
          leadServiceOption: 'ads',
        },
        {
          id: 'youtube-ads',
          number: '18',
          category: 'performance-ads',
          categoryLabel: 'Ads & Performance',
          title: 'YouTube Ads',
          summary:
            'Reach Pakistani audiences watching mobile video every day with short, clear video ads that build brand recall and send interested viewers to your offer.',
          whoItIsFor: 'Admissions drives, consumer brands, apps, and product launches.',
          deliverables: [
            'In-stream & Shorts video campaign setup',
            'Interest, topic & channel audience targeting',
            'Retargeting sequences for website visitors',
          ],
          leadServiceOption: 'ads',
        },
        {
          id: 'tiktok-ads',
          number: '19',
          category: 'performance-ads',
          categoryLabel: 'Ads & Performance',
          title: 'TikTok Ads',
          summary:
            'Pair natural-feeling short video ads with TikTok targeting so products, fashion brands, courses, and local services gain rapid nationwide attention.',
          whoItIsFor: 'Consumer brands, apparel, food, beauty, and online stores.',
          deliverables: [
            'Spark Ads & conversion campaign management',
            'Mobile-first short video hooks & ad copy',
            'TikTok Pixel tracking for site & COD orders',
          ],
          leadServiceOption: 'ads',
        },
        {
          id: 'tracking-pixel-capi-ga4',
          number: '20',
          category: 'performance-ads',
          categoryLabel: 'Ads & Performance',
          title: 'Tracking Setup (Pixel, CAPI, GA4, Tag Manager)',
          summary:
            'Stop flying blind with ad spend. We install Meta Pixel, Conversions API, GA4, and Google Tag Manager accurately so real enquiries and sales get recorded.',
          whoItIsFor: 'Businesses running ads without knowing which campaigns bring buyers.',
          deliverables: [
            'Google Tag Manager container & GA4 events',
            'Meta Pixel & server-side Conversions API setup',
            'Button click, form & checkout tracking checks',
          ],
          leadServiceOption: 'ads',
        },
        {
          id: 'lead-funnels-retargeting',
          number: '21',
          category: 'performance-ads',
          categoryLabel: 'Ads & Performance',
          title: 'Lead Funnels, Retargeting & Conversion Tuning',
          summary:
            'Follow up automatically with people who visited your website or watched your video, and tune landing pages so more clicks turn into actual enquiries.',
          whoItIsFor: 'Brands paying for traffic that visits once and forgets to message.',
          deliverables: [
            'Warm retargeting audiences & follow-up ads',
            'Landing page form & headline optimization',
            'Clear drop-off review from click to call',
          ],
          leadServiceOption: 'ads',
        },
        {
          id: 'social-media-management',
          number: '22',
          category: 'social-brand',
          categoryLabel: 'Social & Brand',
          title: 'Social Media Strategy & Management',
          summary:
            'Turn inconsistent, silent pages into trustworthy brand channels with planned weekly posting across Facebook, Instagram, LinkedIn, and TikTok.',
          whoItIsFor: 'Busy owners who do not have hours every week to post.',
          deliverables: [
            'Channel strategy & consistent brand tone',
            'Scheduled monthly publishing across key apps',
            'Monthly performance summary',
          ],
          leadServiceOption: 'social',
        },
        {
          id: 'content-calendars-creatives',
          number: '23',
          category: 'social-brand',
          categoryLabel: 'Social & Brand',
          title: 'Content Calendars & Creatives',
          summary:
            'Never stare at a blank screen wondering what to post. Receive organized monthly content plans with clean static posts, carousels, and story visuals.',
          whoItIsFor: 'Shops, clinics, academies, and brands wanting clean visual order.',
          deliverables: [
            '30-day structured topic & campaign calendar',
            'Custom-designed feed posts, carousels & stories',
            'Urdu and English caption copywriting',
          ],
          leadServiceOption: 'social',
        },
        {
          id: 'reels-tiktok-shorts-editing',
          number: '24',
          category: 'social-brand',
          categoryLabel: 'Social & Brand',
          title: 'Reels, TikTok & Shorts Scripting & Editing',
          summary:
            'Short vertical videos tailored to Pakistani scrolling habits — with strong 3-second hooks, crisp subtitles, and clear next steps.',
          whoItIsFor: 'Teachers, founders, salons, boutiques, restaurants, and creators.',
          deliverables: [
            'Topic ideas & spoken script outlines',
            'Vertical pacing, cutdowns & readable captions',
            'Clear call-to-action at the end of every clip',
          ],
          leadServiceOption: 'social',
        },
        {
          id: 'influencer-marketing',
          number: '25',
          category: 'social-brand',
          categoryLabel: 'Social & Brand',
          title: 'Influencer Marketing & Creator Collaborations',
          summary:
            'Connect your product or service with genuine Pakistani creators whose audience actually matches your buyers — managed with clear briefs and deliverables.',
          whoItIsFor: 'Consumer products, restaurants, apparel, apps, and local launches.',
          deliverables: [
            'Creator shortlist & audience fit screening',
            'Clear content briefs & posting deliverables',
            'Trackable promo links or WhatsApp codes',
          ],
          leadServiceOption: 'social',
        },
        {
          id: 'brand-identity-logo',
          number: '26',
          category: 'social-brand',
          categoryLabel: 'Social & Brand',
          title: 'Brand Identity (Logo, Colors & Guidelines)',
          summary:
            'Look established and trustworthy from day one with an original vector logo, refined colors, typography rules, and digital stationery that work in print and online.',
          whoItIsFor: 'New businesses, growing shops, schools, and companies rebranding.',
          deliverables: [
            'Original custom logo mark & wordmark',
            'Light, dark & compact icon versions',
            'Color, font & social template guide',
          ],
          leadServiceOption: 'branding',
        },
        {
          id: 'community-management',
          number: '27',
          category: 'social-brand',
          categoryLabel: 'Social & Brand',
          title: 'Community Management & Customer Engagement',
          summary:
            'Keep comment sections active and respectful with timely replies and clear routing so curious commenters become real WhatsApp or phone enquiries.',
          whoItIsFor: 'Growing pages receiving daily questions in comments and DMs.',
          deliverables: [
            'Consistent comment & inbox reply templates',
            'FAQ response library in English & Urdu',
            'Spam moderation & lead escalation',
          ],
          leadServiceOption: 'social',
        },
        {
          id: 'whatsapp-business-setup',
          number: '28',
          category: 'social-brand',
          categoryLabel: 'Social & Brand',
          title: 'WhatsApp Business Setup, Catalog & Broadcasts',
          summary:
            'Turn a messy WhatsApp chat list into a clean selling desk with an organized product/service catalog, instant greeting replies, and customer labels.',
          whoItIsFor: 'Pakistani shops, home businesses, clinics, and academies.',
          deliverables: [
            'Verified profile & full product/service catalog',
            'Greeting, away & quick-reply message scripts',
            'Customer label system & clean broadcast setup',
          ],
          leadServiceOption: 'social',
        },
        {
          id: 'youtube-channel-setup-seo',
          number: '29',
          category: 'video-creators',
          categoryLabel: 'Video & Creators',
          title: 'YouTube Channel Setup, Strategy & SEO',
          summary:
            'Start or organize your YouTube channel cleanly with branded banners, structured playlists, searchable titles, descriptions, and click-worthy thumbnails.',
          whoItIsFor: 'Teachers, educators, business founders, and new creators.',
          deliverables: [
            'Channel branding, About text & playlist structure',
            'Search-researched video titles & descriptions',
            'Consistent thumbnail design system',
          ],
          leadServiceOption: 'video-youtube',
        },
        {
          id: 'youtube-channel-automation',
          number: '30',
          category: 'video-creators',
          categoryLabel: 'Video & Creators',
          title: 'YouTube Channel Automation & Management',
          summary:
            'A repeatable video production workflow covering topic research, scripting, voice-over, editing, thumbnails, and scheduled publishing without missing upload days.',
          whoItIsFor: 'Busy channel owners and educators wanting consistent production.',
          deliverables: [
            'Structured topic research & script production',
            'Voice-over, video editing & custom thumbnails',
            'Consistent upload scheduling & channel SEO hygiene',
          ],
          leadServiceOption: 'video-youtube',
        },
        {
          id: 'video-production-editing',
          number: '31',
          category: 'video-creators',
          categoryLabel: 'Video & Creators',
          title: 'Video Production & Editing (Promos & Explainers)',
          summary:
            'Clear promotional, product demo, and company explainer videos cut cleanly so buyers quickly understand what you make and why it is worth buying.',
          whoItIsFor: 'Brands, manufacturers, schools, clinics, and product sellers.',
          deliverables: [
            'Promo, product & service explainer edits',
            'Bilingual motion text, titles & clean sound mix',
            'Horizontal and vertical aspect cuts',
          ],
          leadServiceOption: 'video-youtube',
        },
        {
          id: 'product-business-photography',
          number: '32',
          category: 'video-creators',
          categoryLabel: 'Video & Creators',
          title: 'Product & Business Photography',
          summary:
            'Replace blurry phone snapshots with crisp, honest product, campus, clinic, or storefront photography that makes your website and online store look dependable.',
          whoItIsFor: 'E-commerce sellers, bakeries, clinics, schools, and local shops.',
          deliverables: [
            'Clean shot list mapped to website & catalog needs',
            'Color-accurate product & workspace images',
            'Web-sized compressed files for fast loading',
          ],
          leadServiceOption: 'branding',
        },
        {
          id: 'ai-chatbots-whatsapp-web',
          number: '33',
          category: 'automation-growth',
          categoryLabel: 'Automation, AI & Growth',
          title: 'AI Chatbots for WhatsApp & Websites',
          summary:
            'Answer common customer questions around the clock — timings, services, locations, and enquiry collection — and hand warm leads directly to your team.',
          whoItIsFor: 'Academies, clinics, e-commerce stores, and busy service offices.',
          deliverables: [
            'Custom business knowledge & honesty boundaries',
            'English & spoken Urdu question handling',
            'Clean lead capture & phone/WhatsApp handoff',
          ],
          leadServiceOption: 'automation-ai',
        },
        {
          id: 'crm-lead-follow-up',
          number: '34',
          category: 'automation-growth',
          categoryLabel: 'Automation, AI & Growth',
          title: 'CRM & Lead Follow-Up Automation',
          summary:
            'Stop losing enquiries buried inside notebooks or old chats. Route website, ad, and WhatsApp leads into one clean sheet or CRM with follow-up reminders.',
          whoItIsFor: 'Real estate teams, schools, clinics, B2B sales, and agencies.',
          deliverables: [
            'Unified lead pipeline setup',
            'Instant enquiry alerts via email or sheet/CRM',
            'Structured follow-up stage tracking',
          ],
          leadServiceOption: 'automation-ai',
        },
        {
          id: 'email-sms-marketing',
          number: '35',
          category: 'automation-growth',
          categoryLabel: 'Automation, AI & Growth',
          title: 'Email & SMS Marketing',
          summary:
            'Reach existing customers and parents directly with respectful announcements, seasonal offers, and order updates they actually read.',
          whoItIsFor: 'Online stores, schools, clinics, and B2B companies.',
          deliverables: [
            'Clean subscriber list organization',
            'Newsletter, launch & announcement templates',
            'Branded transactional & follow-up messages',
          ],
          leadServiceOption: 'automation-ai',
        },
        {
          id: 'marketing-automation-workflows',
          number: '36',
          category: 'automation-growth',
          categoryLabel: 'Automation, AI & Growth',
          title: 'Marketing Automation Workflows',
          summary:
            'Connect your website forms, booking requests, online store orders, and messaging tools so routine confirmations and notifications happen reliably.',
          whoItIsFor: 'Growing businesses scaling past manual copy-pasting.',
          deliverables: [
            'Form-to-notification & CRM sync workflows',
            'Abandoned-cart & inquiry reminder logic',
            'Tested error alerts & documentation',
          ],
          leadServiceOption: 'automation-ai',
        },
        {
          id: 'linkedin-b2b-lead-gen',
          number: '37',
          category: 'automation-growth',
          categoryLabel: 'Automation, AI & Growth',
          title: 'LinkedIn & B2B Lead Generation',
          summary:
            'Position company executives and sales teams credibly on LinkedIn so corporate buyers, institutions, and overseas importers trust your capabilities.',
          whoItIsFor: 'Manufacturers, exporters, IT firms, and corporate B2B suppliers.',
          deliverables: [
            'Executive profile & company page overhaul',
            'Decision-maker content & outreach framework',
            'B2B landing page & enquiry pipeline connection',
          ],
          leadServiceOption: 'social',
        },
        {
          id: 'mobile-apps-custom-software',
          number: '38',
          category: 'automation-growth',
          categoryLabel: 'Automation, AI & Growth',
          title: 'Mobile Apps & Custom Software (On Request)',
          summary:
            'Custom student portals, internal dashboards, booking apps, or lightweight business tools scoped and built cleanly when off-the-shelf websites are not enough.',
          whoItIsFor: 'Institutions, multi-branch operations, and specialized startups.',
          deliverables: [
            'Clear technical specification & scope review',
            'Clean responsive web or mobile app build',
            'Source code ownership & handover guide',
          ],
          leadServiceOption: 'website',
        },
        {
          id: 'digital-marketing-consulting',
          number: '39',
          category: 'automation-growth',
          categoryLabel: 'Automation, AI & Growth',
          title: 'Digital Marketing Consulting for Owners',
          summary:
            'Sit down with a clear strategist to audit what you are spending, catch what is leaking enquiries, and build a prioritized 90-day roadmap before spending more.',
          whoItIsFor: 'Founders and managers needing clarity before hiring or scaling.',
          deliverables: [
            'Website, SEO, social & ad account review',
            'Clear gap report in plain language',
            'Prioritized next-step growth plan',
          ],
          leadServiceOption: 'training-consulting',
        },
        {
          id: 'workshops-team-training',
          number: '40',
          category: 'automation-growth',
          categoryLabel: 'Automation, AI & Growth',
          title: 'Workshops & Training for Owners, Teachers & Teams',
          summary:
            'Practical, jargon-free training sessions teaching business staff, academy teachers, or shop owners how to post consistently, manage WhatsApp, and track leads.',
          whoItIsFor: 'Schools, internal marketing staff, and family-run businesses.',
          deliverables: [
            'Tailored hands-on Urdu or English sessions',
            'Practical daily checklists & SOP templates',
            'Follow-up Q&A review',
          ],
          leadServiceOption: 'training-consulting',
        },
      ],
    },
    systemShowcase: {
      eyebrow: 'How Each Piece Works Together',
      heading: 'See what goes into your growth system.',
      subheading:
        'Pick an area below to see the problem Pakistani businesses face, what Khan Marketings builds, and what changes for your customers.',
      tabs: [
        {
          id: 'web',
          label: '01. Website & Content',
          problemTitle: 'What Gets in the Way',
          problem:
            'Most websites stay stuck half-built waiting for text, or go live with empty filler lines that fail to answer what the business actually sells.',
          solutionTitle: 'What We Build Together',
          solution:
            'We interview you about your customers, write clear English and Urdu copy alongside the design, and launch a mobile-ready site built around enquiries.',
          outcomeTitle: 'What Changes for You',
          outcome:
            'A dependable website in your own name that introduces your brand cleanly 24 hours a day and sends calls and WhatsApp messages directly to your phone.',
          ctaLabel: 'Get Your Website Built',
          route: 'website-development',
        },
        {
          id: 'seo',
          label: '02. Google Search & Maps',
          problemTitle: 'What Gets in the Way',
          problem:
            'Even a good-looking website stays invisible on Google if page titles, headings, mobile loading speed, and Google Maps details are missing or broken.',
          solutionTitle: 'What We Build Together',
          solution:
            'We clean up site structure, set up Google Business Profile properly, research what your buyers actually type, and write helpful pages around those searches.',
          outcomeTitle: 'What Changes for You',
          outcome:
            'Your shop, school, clinic, or firm becomes much easier to find on Google Search and Maps — tracked through plain-language monthly reports.',
          ctaLabel: 'Make Your Business Discoverable',
          route: 'seo',
        },
        {
          id: 'social',
          label: '03. Social, Ads & WhatsApp',
          problemTitle: 'What Gets in the Way',
          problem:
            'Boosting random posts without a plan, clear creatives, or proper tracking burns cash quickly and leaves owners frustrated with weak enquiries.',
          solutionTitle: 'What We Build Together',
          solution:
            'We pair steady monthly content and Reels scripts with targeted Facebook, Instagram, or TikTok ads connected directly to tracking and WhatsApp catalogs.',
          outcomeTitle: 'What Changes for You',
          outcome:
            'Consistent visibility on the apps your customers open daily — backed by real landing pages and organized WhatsApp conversations.',
          ctaLabel: 'Grow Your Brand Online',
          route: 'social-media-marketing',
        },
      ],
    },
    process: {
      eyebrow: 'Our Simple 3-Step Process',
      heading: 'How we take you from local name to clear online presence.',
      subheading:
        'You always know what we are building, what comes next, and when milestones arrive.',
      steps: [
        {
          step: '01',
          title: 'Listen & Plan (Free Review)',
          description:
            'You tell us about your business, students, or customers on WhatsApp or a short call. We review what is missing and share a clear, honest plan with zero obligation.',
        },
        {
          step: '02',
          title: 'Write, Design & Build',
          description:
            'Our team writes your copy, builds your website or store, sets up Google Maps, and configures your social, tracking, and WhatsApp flows step by step.',
        },
        {
          step: '03',
          title: 'Launch, Track & Grow',
          description:
            'We test everything on mobile screens, hand full ownership to you, and help you grow steadily through SEO, content, and transparent monthly reports.',
        },
      ],
    },
    whyKm: {
      eyebrow: 'Why Trust Khan Marketings',
      heading: 'Built for Pakistani business owners tired of empty promises.',
      items: [
        {
          title: 'Our Goal & Promise',
          description:
            'Our goal is to be the digital partner every small business empire in Pakistan trusts — built not on hype, but on websites that load fast, speak plainly, and belong to you.',
        },
        {
          title: 'WhatsApp-First & Bilingual',
          description:
            'We understand Pakistani customers — mobile screens, Cash on Delivery trust barriers, Urdu and English buyers, and how real enquiries close over WhatsApp.',
        },
        {
          title: 'Plain Honesty, Full Ownership',
          description:
            'We never invent fake numbers or lock your domain under our account. You receive direct access at 0321-2995766, clear scope before starting, and honest monthly reports.',
        },
      ],
    },
    faq: {
      eyebrow: 'Common Questions — Answered Clearly',
      heading: 'Honest answers before you spend a single rupee.',
      subheading:
        'Plain-spoken explanations covering websites, costs, Google SEO, Maps, ads, online stores, schools, and YouTube workflows.',
      lastUpdatedText: `Last updated: ${LAST_UPDATED_LABEL}`,
      categories: {
        all: 'All Topics',
        general: 'General & Trust',
        pricing: 'Pricing & Timelines',
        web: 'Websites & Urdu',
        seo: 'SEO & Google Maps',
        social: 'Social & WhatsApp',
        ads: 'Facebook & Paid Ads',
        ecommerce: 'Online Stores & Daraz',
        creators: 'Teachers, B2B & YouTube',
      },
      items: [
        {
          id: 'faq-what-agency-does',
          category: 'general',
          categoryLabel: 'General & Trust',
          question: 'What does a digital marketing agency like Khan Marketings actually do?',
          answer:
            'Khan Marketings helps Pakistani businesses, teachers, schools, and growing brands look trustworthy online and get found by more buyers. Instead of leaving you to manage separate freelancers, one team builds your website, improves your Google Search and Maps visibility, runs social media and paid ads, and organizes WhatsApp selling.',
        },
        {
          id: 'faq-website-cost',
          category: 'pricing',
          categoryLabel: 'Pricing & Timelines',
          question: 'How much does a website cost in Pakistan?',
          answer:
            'Website cost depends directly on your scope — how many pages you need, whether you want bilingual English and Urdu RTL support, or whether you are setting up a Cash-on-Delivery online store. Rather than quoting rigid package guesswork, we discuss what you need first and send a clear, free scope-based quote.',
        },
        {
          id: 'faq-website-timeline',
          category: 'pricing',
          categoryLabel: 'Pricing & Timelines',
          question: 'How long does it take to build a website?',
          answer:
            'A focused single-page landing site or tutor profile moves faster than a multi-page company website or full online store with dozens of products. Before any work starts, we agree on clear milestones so you see page structure, copy drafts, and live previews at every step.',
        },
        {
          id: 'faq-already-facebook',
          category: 'web',
          categoryLabel: 'Websites & Urdu',
          question: 'Do I need a website if I already have a Facebook page or sell on WhatsApp?',
          answer:
            'Yes, because a social page or messaging number is rented land where platform rules and organic reach can drop anytime. A website in your own domain gives buyers confidence, shows up in Google Searches 24 hours a day, explains your prices or courses neatly, and protects your business identity long term.',
        },
        {
          id: 'faq-bilingual-urdu',
          category: 'web',
          categoryLabel: 'Websites & Urdu',
          question: 'Can you build an Urdu or bilingual English and Urdu website?',
          answer:
            'Yes. We build clean bilingual websites where visitors can switch easily between English left-to-right and natural Pakistani Urdu right-to-left typography. Phone numbers and links stay formatted cleanly while headlines and descriptions remain comfortable to read on every mobile phone.',
        },
        {
          id: 'faq-what-is-seo',
          category: 'seo',
          categoryLabel: 'SEO & Google Maps',
          question: 'What is SEO and how does it help my shop, clinic, or academy?',
          answer:
            'SEO means structuring your website and written content so Google understands clearly what you sell and shows your business when local customers search. When parents search for an academy or patients look up a nearby clinic, clear SEO connects buyers who already want your service straight to your call or WhatsApp.',
        },
        {
          id: 'faq-seo-guarantee',
          category: 'seo',
          categoryLabel: 'SEO & Google Maps',
          question: 'How long does SEO take, and do you guarantee first-page rankings?',
          answer:
            'SEO is steady compound work that typically takes several months depending on your city, competition, and current site health. Results depend on your market, budget and consistency. We do not guarantee rankings or income. We promise honest work, clear reports and steady effort.',
        },
        {
          id: 'faq-local-seo-maps',
          category: 'seo',
          categoryLabel: 'SEO & Google Maps',
          question: 'What is local SEO and Google Business Profile? (Google Maps pe business kaise aaye)',
          answer:
            'Local SEO focuses on getting your business discovered by nearby buyers searching on Google Search and Google Maps — for example, searches in Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, or Peshawar. We organize your Google Business Profile, categories, service details, and review workflows so customers can call or tap directions easily.',
        },
        {
          id: 'faq-ad-budget',
          category: 'ads',
          categoryLabel: 'Facebook & Paid Ads',
          question: 'How much should I spend on Facebook, Instagram, or TikTok ads?',
          answer:
            'There is no single fixed ad budget for every Pakistani business. Your daily spend depends on your city, profit margin per sale or admission, and how fast you want to test creatives. We help you start conservatively on a sensible test budget, install proper tracking, and adjust based on real enquiries.',
        },
        {
          id: 'faq-manage-social',
          category: 'social',
          categoryLabel: 'Social & WhatsApp',
          question: 'Can you manage my social media pages every month?',
          answer:
            'Yes. We plan monthly content calendars, design posts and carousels, write captions in simple Urdu or English, script Reels, and manage consistent publishing. We also help organize your WhatsApp Business catalog and quick replies so enquiries coming from social posts get answered smoothly.',
        },
        {
          id: 'faq-cod-stores',
          category: 'ecommerce',
          categoryLabel: 'Online Stores & Daraz',
          question: 'Do you build online stores with Cash on Delivery (COD)?',
          answer:
            'Yes. Most Pakistani online shoppers still prefer Cash on Delivery before trusting a new store. We configure clean Shopify or WooCommerce stores designed around COD checkout clarity, mobile speed, courier readiness, and local payment options such as JazzCash, Easypaisa, or bank transfer where supported.',
        },
        {
          id: 'faq-daraz-management',
          category: 'ecommerce',
          categoryLabel: 'Online Stores & Daraz',
          question: 'Do you set up and manage Daraz or other marketplace stores?',
          answer:
            'Yes. We organize marketplace seller profiles, clean product categories, searchable titles, clear item images, and promotional setup on Daraz and similar platforms — and we help connect those shoppers back to your own brand website over time.',
        },
        {
          id: 'faq-teachers-schools',
          category: 'creators',
          categoryLabel: 'Teachers, B2B & YouTube',
          question: 'Do you help teachers, tutors, and schools get more student admissions?',
          answer:
            'Yes. We build clean websites for teachers, academies, and schools featuring class timings, subjects, admissions landing pages, Google Maps setup, YouTube lesson channels, and seasonal Meta ad campaigns aimed directly at parents and students across Pakistan.',
        },
        {
          id: 'faq-large-companies',
          category: 'creators',
          categoryLabel: 'Teachers, B2B & YouTube',
          question: 'Do you work with large companies, manufacturers, and exporters?',
          answer:
            'Yes. For established companies and exporters, we build corporate-grade websites, scalable technical SEO, LinkedIn and B2B lead generation funnels, GA4 and Conversions API tracking, and brand reputation workflows built for overseas buyers and procurement teams.',
        },
        {
          id: 'faq-youtube-automation',
          category: 'creators',
          categoryLabel: 'Teachers, B2B & YouTube',
          question: 'What is YouTube channel automation and does it promise passive income?',
          answer:
            'YouTube channel automation is simply an organized production workflow covering topic research, scriptwriting, voice-over, editing, thumbnails, and scheduled uploads so your channel stays consistent. We manage it strictly as a creative production service and never promise views, monetization approval, or channel earnings.',
        },
        {
          id: 'faq-influencer-marketing',
          category: 'social',
          categoryLabel: 'Social & WhatsApp',
          question: 'Do you manage influencer marketing collaborations in Pakistan?',
          answer:
            'Yes. We help select genuine local creators whose audience matches your product or city, prepare clear creative briefs and deliverables, and track campaign links or coupon enquiries so your collaboration budget stays focused.',
        },
        {
          id: 'faq-ownership',
          category: 'general',
          categoryLabel: 'General & Trust',
          question: 'Who owns my website, domain name, and social/ad accounts?',
          answer:
            'You own 100% of everything we build for you. Your domain name, hosting, website files, Google Analytics, Google Business Profile, and Meta or TikTok ad accounts stay registered under your control so you are never locked in by an agency.',
        },
        {
          id: 'faq-after-launch',
          category: 'web',
          categoryLabel: 'Websites & Urdu',
          question: 'What happens after my website goes live?',
          answer:
            'After launch, you can run things yourself with our handover guide or keep us on board for monthly maintenance, backups, technical updates, SEO growth, and social or ad campaigns. We stay reachable on phone and WhatsApp whenever your business grows.',
        },
        {
          id: 'faq-get-started',
          category: 'pricing',
          categoryLabel: 'Pricing & Timelines',
          question: 'How do I get started and do I have to pay just to talk?',
          answer:
            'No payment is needed for your first conversation or free growth plan. Simply call or message us on WhatsApp at 0321-2995766, or fill out our quick Contact form with your business details. We review everything and share a clear next-step plan first.',
        },
        {
          id: 'faq-roman-urdu-discovery',
          category: 'general',
          categoryLabel: 'General & Trust',
          question: 'Business online kaise karein aur website banwane ke liye kya chahiye?',
          answer:
            'To take your business online clearly, you only need a short conversation about what you sell, who your customers are, and which cities you serve. You do not need technical skills or pre-written website pages — we guide you step by step on domain registration, page copy in English or Urdu, Google Maps setup, and WhatsApp integration.',
        },
      ],
    },
    closingCta: {
      eyebrow: 'Your Next Customer Is Searching Right Now',
      heading: 'Ready to take your business to the moon?',
      description:
        'Message us on WhatsApp or request your free growth plan. No pressure, no payment required for the first call — just honest advice built for your business.',
      primaryCta: 'Get Your Free Growth Plan',
      secondaryCta: 'Call 0321-2995766',
      whatsappCta: 'Message Us on WhatsApp',
    },
  },
  webDevPage: {
    eyebrow: 'Service 01 · Website Design, Copy & E-Commerce Stores',
    headline: 'Every empire starts with a clear first page.',
    subheadline:
      'Stop losing buyers to empty templates or slow sites. We design, write, and build mobile-first business websites, school portals, and COD-ready stores — delivered complete in English and Urdu.',
    primaryCta: 'Get Your Website Built',
    secondaryCta: 'Call 0321-2995766',
    lastUpdatedText: `Last updated: ${LAST_UPDATED_LABEL}`,
    problemSection: {
      eyebrow: 'The Real Problem With Cheap Templates',
      heading: 'Why half-finished websites quietly cost you customers.',
      body: 'Many Pakistani business owners pay for a website and end up with a slow template full of missing pages, broken mobile spacing, and no one taking responsibility for writing clear copy. When a website is built together with written words, clean Urdu/English support, and direct WhatsApp links, visitors immediately trust you enough to call.',
      comparisonLeftTitle: 'Typical Cheap Template Build',
      comparisonLeftItems: [
        'Generic text left unfinished for months after delivery',
        'Slow image clutter that stalls on 4G mobile data',
        'No clean Urdu RTL typography or broken mobile menus',
        'Domain and hosting locked under someone else’s account',
      ],
      comparisonRightTitle: 'Built With Khan Marketings',
      comparisonRightItems: [
        'Clear pages mapped around real Pakistani buyer questions',
        'English and/or spoken Urdu copy written before launch',
        'Fast mobile browsing with Cash on Delivery or enquiry flows',
        '100% ownership of domain, files, and accounts in your name',
      ],
    },
    capabilities: {
      eyebrow: 'What We Deliver',
      heading: 'Websites and online stores built ready to win enquiries.',
      items: [
        {
          number: '01',
          title: 'Business Websites & Company Profiles',
          description:
            'Custom websites for clinics, contractors, law practices, manufacturers, and service brands engineered for credibility from the first click.',
        },
        {
          number: '02',
          title: 'School, Academy & Teacher Websites',
          description:
            'Present subjects, class batches, teacher profiles, and admission enquiry forms so parents trust you beyond your local neighbourhood.',
        },
        {
          number: '03',
          title: 'Shopify & WooCommerce COD Stores',
          description:
            'Online stores built around Cash on Delivery workflows, local courier clarity, and JazzCash/Easypaisa/card options where supported.',
        },
        {
          number: '04',
          title: 'Written English & Urdu RTL Copy',
          description:
            'We interview you and write plain, persuasive headings, FAQs, and service descriptions in English or Urdu directly into the layout.',
        },
        {
          number: '05',
          title: 'Campaign & Ad Landing Pages',
          description:
            'Focused pages built specifically for Facebook, Instagram, TikTok, and Google ad traffic so clicks convert into WhatsApp leads or calls.',
        },
        {
          number: '06',
          title: 'Domain, Hosting, SSL & Maintenance',
          description:
            'Clean DNS, HTTPS lock, official domain email, backups, and ongoing technical care so your digital shopfront stays dependable.',
        },
      ],
    },
    launchProcess: {
      eyebrow: 'Step-by-Step Build Path',
      heading: 'How we take your website from a short call to live launch.',
      steps: [
        {
          step: '01',
          title: 'Listen & Page Plan',
          description:
            'We discuss your buyers, products, and goals first, then map out every page clearly.',
        },
        {
          step: '02',
          title: 'Copy & Clean Design',
          description:
            'We write your headlines and page content alongside mobile-first layout design.',
        },
        {
          step: '03',
          title: 'Build, Urdu RTL & Speed',
          description:
            'We build the live site, check Urdu RTL if needed, connect WhatsApp/forms, and optimize speed.',
        },
        {
          step: '04',
          title: 'Review & Handover',
          description:
            'You test every button with us before launch, and receive full ownership of your site and domain.',
        },
      ],
    },
    ownership: {
      eyebrow: 'What You Own at the End',
      heading: 'Zero lock-in. Your business owns every digital asset.',
      items: [
        'Your domain name (.com or .pk) registered in your name',
        'Your hosting access, SSL certificate, and official domain email',
        'Complete website source code and store product catalog',
        'Full access to Google Analytics, Tag Manager, and Search Console',
      ],
      honestyDisclosure: HONESTY_DISCLOSURE_EN,
    },
    faqHeading: 'Website Development Questions',
    faqs: [
      {
        id: 'wd-faq-1',
        category: 'web',
        categoryLabel: 'Website Development',
        question: 'Do I have to write all the website text myself?',
        answer:
          'No. We interview you by phone or WhatsApp about your business and services, organize each page, write clear English or Urdu copy, and build it directly into the finished site so nothing launches blank.',
      },
      {
        id: 'wd-faq-2',
        category: 'ecommerce',
        categoryLabel: 'Online Stores',
        question: 'Can my online store accept Cash on Delivery and local payments?',
        answer:
          'Yes. We build Shopify and WooCommerce stores configured for Cash on Delivery, clean courier order confirmation, and JazzCash, Easypaisa, or bank payment options where supported by your gateway.',
      },
      {
        id: 'wd-faq-3',
        category: 'web',
        categoryLabel: 'Website Development',
        question: 'Will my website work cleanly in Urdu as well as English?',
        answer:
          'Yes. We design bilingual websites with dedicated right-to-left Urdu layouts, readable Nastaliq and Naskh fonts, and properly aligned phone numbers so Urdu readers have a comfortable experience.',
      },
      {
        id: 'wd-faq-4',
        category: 'pricing',
        categoryLabel: 'Pricing & Ownership',
        question: 'How much does a website cost and who owns it once paid?',
        answer:
          'Cost depends strictly on project scope, number of pages, bilingual setup, or online store features. You receive a clear free quote before starting, and once completed, you own 100% of your domain, hosting, and website files.',
      },
    ],
    relatedHeading: 'Connect Your Website to More Customers',
    relatedLinks: [
      {
        title: 'SEO & Google Maps Visibility',
        description:
          'Make sure buyers searching in your city find your new website and Google Business Profile.',
        route: 'seo',
        ctaLabel: 'Explore SEO & Maps',
      },
      {
        title: 'Social Media, Ads & WhatsApp',
        description:
          'Send targeted Facebook, Instagram, and TikTok traffic straight to your new landing pages.',
        route: 'social-media-marketing',
        ctaLabel: 'Explore Social & Ads',
      },
    ],
    ctaBand: {
      heading: 'Ready for a website your customers trust from the first click?',
      description:
        'Message us on WhatsApp or share your details below for a free, scope-based quote.',
      buttonLabel: 'Get a Free Quote',
    },
  },
  seoPage: {
    eyebrow: 'Service 02 · Search Engine Optimization & Local Maps',
    headline: 'Your customers are searching on Google right now.',
    subheadline:
      'SEO is how your shop, clinic, school, or company shows up when buyers actively search what you offer — built through clean technical structure, Google Business Profile setup, and helpful pages.',
    primaryCta: 'Make Your Business Discoverable',
    secondaryCta: 'Call 0321-2995766',
    lastUpdatedText: `Last updated: ${LAST_UPDATED_LABEL}`,
    businessValue: {
      eyebrow: 'How a Customer Finds You on Google',
      heading: 'SEO turns active Google searches into incoming calls.',
      lead: 'Unlike social feeds where people scroll for entertainment, a buyer typing "dental clinic near me" or "O Level academy in Lahore" already wants help today. Technical SEO, clean page copy, and Google Maps optimization help Google understand and show your business honestly.',
      honestyNoteTitle: 'Our Honest SEO Standard',
      honestyNoteBody: HONESTY_DISCLOSURE_EN,
    },
    pillars: {
      eyebrow: 'Complete Search & Maps Scope',
      heading: 'Everything required for dependable organic visibility.',
      items: [
        {
          number: '01',
          title: 'Technical SEO Foundations',
          description:
            'Resolving crawl blocks, duplicate URLs, sitemaps, mobile usability, schema markup, and slow loading bottlenecks.',
        },
        {
          number: '02',
          title: 'Local SEO & Google Business Profile',
          description:
            'Setting up your Google Maps listing, accurate categories, local service areas, photos, and review workflows for city searches.',
        },
        {
          number: '03',
          title: 'On-Page SEO & Headings',
          description:
            'Writing clear titles, meta descriptions, single H1 structure, internal links, and image alt text across every page.',
        },
        {
          number: '04',
          title: 'Keyword Research & Search Intent',
          description:
            'Identifying the actual English and Urdu-intent buyer searches in Pakistan so pages target real enquiries instead of empty clicks.',
        },
        {
          number: '05',
          title: 'White-Hat Link Building & Citations',
          description:
            'Clean business directory consistency and reputable digital PR mentions — zero risky link schemes.',
        },
        {
          number: '06',
          title: 'Online Reputation & Reviews',
          description:
            'Simple QR and WhatsApp customer review systems that strengthen buyer trust on Google Maps and brand search.',
        },
      ],
    },
    intentExplorer: {
      eyebrow: 'What We Inspect & Fix',
      heading: 'Check the work behind steady search growth.',
      description: 'Switch tabs below to inspect our technical, on-page, and local search checklists.',
      tabs: [
        {
          id: 'technical',
          label: 'Technical & Speed',
          focus: 'Making sure Googlebot and AI search crawlers read every page cleanly.',
          checks: [
            'Clean HTML landmarks & single H1 hierarchy per URL',
            'Fast mobile Core Web Vitals on 4G Pakistani networks',
            'XML sitemaps, robots.txt, and canonical link setup',
            'Structured JSON-LD schema matching visible page facts',
          ],
        },
        {
          id: 'onpage',
          label: 'Local Maps & On-Page',
          focus: 'Connecting city-level buyers directly to your phone and WhatsApp.',
          checks: [
            'Google Business Profile categories, hours & services setup',
            'Name, address, and phone consistency across listings',
            'Answer-first service paragraphs & buyer FAQ sections',
            'Clear internal anchors linking service pages to contact',
          ],
        },
        {
          id: 'research',
          label: 'Intent & Analytics',
          focus: 'Focusing on commercial searches that bring real enquiries.',
          checks: [
            'Mapping service keywords without robotic repetition',
            'Evaluating competing sites in your Pakistani city or niche',
            'GA4 + Search Console setup & phone/form tracking',
            'Plain-language monthly summaries showing what shipped',
          ],
        },
      ],
    },
    reporting: {
      eyebrow: 'Plain-Language Reporting',
      heading: 'Reports made for business owners — never confusing spreadsheets.',
      body: 'Every month, we send a short, readable summary covering exactly what improvements went live, how Google impressions and clicks changed, and what we work on next.',
      metricsList: [
        'List of technical, page, and Google Profile tasks completed',
        'Google Search impressions, clicks, and Maps direction/call trends',
        'Enquiry form and WhatsApp button activity observations',
        'Clear priorities for the next month',
      ],
    },
    ownership: {
      eyebrow: 'What You Own at the End',
      heading: 'Every profile, report, and search property belongs to you.',
      items: [
        'Full owner control of your Google Business Profile listing',
        'Direct admin ownership of Google Search Console and GA4',
        'Every optimized article, service page, and FAQ stays on your domain',
        'Clean backlinks and directory profiles with zero hidden lock-in',
      ],
      honestyDisclosure: HONESTY_DISCLOSURE_EN,
    },
    faqHeading: 'SEO & Google Maps Questions',
    faqs: [
      {
        id: 'seo-page-faq-1',
        category: 'seo',
        categoryLabel: 'SEO & Maps',
        question: 'Can you get my shop or office on Google Maps quickly?',
        answer:
          'We set up and optimize your Google Business Profile with accurate categories, service descriptions, photos, and clean contact details. Verification depends on Google’s standard approval steps, and ongoing visibility grows steadily through accurate info and honest customer reviews.',
      },
      {
        id: 'seo-page-faq-2',
        category: 'seo',
        categoryLabel: 'SEO & Maps',
        question: 'Can anyone promise first-page Google rankings?',
        answer:
          'No honest agency can make that promise because Google controls search results and competition changes daily. Results depend on your market, budget and consistency. We do not guarantee rankings or income. We promise honest work, clear reports and steady effort.',
      },
      {
        id: 'seo-page-faq-3',
        category: 'seo',
        categoryLabel: 'SEO & Maps',
        question: 'Can you fix SEO on an existing website without building a new one?',
        answer:
          'Yes, in most cases we begin with an audit of your current website to fix headings, titles, metadata, indexing issues, and mobile speed. If structural template limitations hold speed or clarity back, we will explain why transparently before recommending changes.',
      },
      {
        id: 'seo-page-faq-4',
        category: 'seo',
        categoryLabel: 'SEO & Maps',
        question: 'Does SEO also help my business show up in AI search like ChatGPT or Gemini?',
        answer:
          'Yes. Clear answer-first writing, consistent business facts, clean HTML, and accurate schema markup help both traditional search engines and AI assistants quote your business accurately when people ask for services in Pakistan.',
      },
    ],
    relatedHeading: 'Pair Search Visibility With Conversion',
    relatedLinks: [
      {
        title: 'Websites & Online Stores',
        description:
          'Turn Google clicks into calls and COD orders with fast, mobile-ready landing pages.',
        route: 'website-development',
        ctaLabel: 'Explore Websites & Stores',
      },
      {
        title: 'Social Media, Ads & WhatsApp',
        description:
          'Reach buyers immediately with Facebook, Instagram, and TikTok campaigns while SEO compounds.',
        route: 'social-media-marketing',
        ctaLabel: 'Explore Social & Ads',
      },
    ],
    ctaBand: {
      heading: 'Want a free look at why customers are missing you on Google?',
      description:
        'Send your website link or business name and we will share honest first observations.',
      buttonLabel: 'Get Your Free Growth Plan',
    },
  },
  socialPage: {
    eyebrow: 'Service 03 · Social Media, Paid Ads & WhatsApp Selling',
    headline: 'Be recognized every day — and turn views into WhatsApp leads.',
    subheadline:
      'In Pakistan, attention lives on Facebook, Instagram, TikTok, YouTube, and WhatsApp. We replace chaotic last-minute posting with a calm content calendar, clear ads, and real website links.',
    primaryCta: 'Grow Your Brand Online',
    secondaryCta: 'Call 0321-2995766',
    lastUpdatedText: `Last updated: ${LAST_UPDATED_LABEL}`,
    strategyIntro: {
      eyebrow: 'Build Familiarity That Drives Sales',
      heading: 'Consistency + paid reach + owned landing pages.',
      body: 'Posting randomly once every few weeks rarely builds trust. And boosting posts blindly without tracking wastes hard-earned money. We plan clear weekly content, script short Reels in natural Pakistani tone, run tracked Meta/TikTok/Google campaigns, and organize your WhatsApp Business catalog.',
    },
    cadenceVisual: {
      title: 'A Calm Weekly Content Rhythm',
      subtitle: 'Balanced themes keep your pages active, useful, and ready to convert.',
      columns: [
        'Helpful Customer Answers',
        'Product or Course Clarity',
        'Short Reels & Video Hooks',
        'Tracked Ad & WhatsApp Offers',
      ],
    },
    capabilities: {
      eyebrow: 'Social, Ads & Video Capabilities',
      heading: 'Everything needed to capture attention and convert enquiries.',
      items: [
        {
          number: '01',
          title: 'Monthly Content Calendars & Design',
          description:
            'Planned static posts, carousels, and stories written in clear Urdu or English matching your brand identity.',
        },
        {
          number: '02',
          title: 'Reels, TikTok & Shorts Scripting',
          description:
            'Practical short-video scripts and crisp editing built around customer questions and natural hooks.',
        },
        {
          number: '03',
          title: 'Facebook, Instagram & TikTok Ads',
          description:
            'Targeted lead, store-order, and click-to-WhatsApp campaigns managed with proper Pixel & Conversions API tracking.',
        },
        {
          number: '04',
          title: 'WhatsApp Business Catalog & Flows',
          description:
            'Turn your inbox into an organized sales desk with product catalogs, quick replies, and customer labels.',
        },
        {
          number: '05',
          title: 'YouTube Setup & Production Workflows',
          description:
            'Channel SEO, thumbnails, and structured production workflows for educators and creators — with zero false income promises.',
        },
        {
          number: '06',
          title: 'Influencer Collaborations & Branding',
          description:
            'Original logo guidelines and vetted local creator campaigns with trackable campaign links.',
        },
      ],
    },
    bridgeSection: {
      eyebrow: 'Never Build Only on Rented Land',
      heading: 'Your social channels should grow your website and customer list too.',
      points: [
        {
          title: 'From Scroll to Website',
          body: 'Interested viewers tap directly from Reels or ads into clean pages where fees, sizes, or services are crystal clear.',
        },
        {
          title: 'Proper Tracking Setup',
          body: 'Meta Pixel, Conversions API, and GA4 record real form submissions and orders so ad budgets stay accountable.',
        },
        {
          title: 'Organized WhatsApp Closing',
          body: 'Catalogs, greeting messages, and quick-reply templates help you handle daily enquiries calmly without missing leads.',
        },
      ],
    },
    ownership: {
      eyebrow: 'What You Own at the End',
      heading: 'Full admin access over every page, pixel, and creative asset.',
      items: [
        'Your Facebook, Instagram, TikTok, YouTube, and LinkedIn accounts stay yours',
        'Your Meta Business Manager, Pixels, and Google Ads accounts remain in your name',
        'Every designed post, video edit, and caption calendar belongs to your business',
        'You control ad card billing directly — zero hidden markups',
      ],
      honestyDisclosure: HONESTY_DISCLOSURE_EN,
    },
    faqHeading: 'Social Media, Ads & WhatsApp Questions',
    faqs: [
      {
        id: 'sm-faq-1',
        category: 'ads',
        categoryLabel: 'Paid Ads',
        question: 'How is our Facebook or TikTok ad budget paid?',
        answer:
          'Your ad budget is billed directly inside your own ad account so you always see exact spend. We manage strategy, creatives, targeting, tracking, and weekly optimization separately with full transparency.',
      },
      {
        id: 'sm-faq-2',
        category: 'social',
        categoryLabel: 'Social Media',
        question: 'Can you write posts and Reels ideas in Pakistani Urdu as well as English?',
        answer:
          'Yes. We write natural spoken Pakistani Urdu, clean English, or both depending on who buys from you — whether parents looking at an academy or shoppers ordering from a boutique.',
      },
      {
        id: 'sm-faq-3',
        category: 'social',
        categoryLabel: 'WhatsApp',
        question: 'How does WhatsApp Business setup help small shops?',
        answer:
          'We organize your products or services inside a clean WhatsApp catalog with clear titles, set greeting and away messages for busy hours, and prepare quick replies for recurring price or delivery questions.',
      },
      {
        id: 'sm-faq-4',
        category: 'creators',
        categoryLabel: 'YouTube & Creators',
        question: 'Do your YouTube or ad services guarantee specific sales or views?',
        answer:
          'No. Results depend on your market, budget and consistency. We do not guarantee rankings or income. We promise honest work, clear reports and steady effort.',
      },
    ],
    relatedHeading: 'Strengthen Your Owned Foundation',
    relatedLinks: [
      {
        title: 'Websites & Online Stores',
        description:
          'Give your ad clicks and social bio visitors a fast website or COD-ready store you own.',
        route: 'website-development',
        ctaLabel: 'Explore Websites & Stores',
      },
      {
        title: 'SEO & Google Maps Visibility',
        description:
          'Capture buyers actively searching on Google alongside your daily social media presence.',
        route: 'seo',
        ctaLabel: 'Explore SEO & Maps',
      },
    ],
    ctaBand: {
      heading: 'Ready to turn social attention into steady customer enquiries?',
      description:
        'Tell us which platforms your buyers use and we will map a clear content and ads plan.',
      buttonLabel: 'Get Your Free Growth Plan',
    },
  },
  servicesHubPage: {
    eyebrow: 'Complete Growth Directory · 40 Services in 6 Disciplines',
    headline: 'Every digital growth service a serious Pakistani business needs.',
    subheadline:
      'Start with one high-priority foundation or combine website development, Google visibility, paid ads, YouTube growth, and WhatsApp automation under one accountable team.',
    primaryCta: 'Get Your Free Growth Plan',
    secondaryCta: 'Call or WhatsApp 0321-2995766',
    lastUpdatedText: `Last updated: ${LAST_UPDATED_LABEL}`,
    corePillarsHeading: 'Explore Dedicated Discipline Pages',
    corePillars: [
      {
        title: 'Websites & COD Online Stores',
        description:
          'Custom responsive sites, school pages, bilingual Urdu builds, and Cash-on-Delivery e-commerce stores built with complete written copy.',
        route: 'website-development',
        ctaLabel: 'Explore Website Development',
      },
      {
        title: 'SEO & Google Maps Visibility',
        description:
          'Technical fixes, clean search headings, schema markup, and Google Business Profile optimization across Pakistani cities.',
        route: 'seo',
        ctaLabel: 'Explore SEO & Maps',
      },
      {
        title: 'Social Media, Paid Ads & WhatsApp',
        description:
          'Facebook, Instagram, TikTok, LinkedIn, Meta Ads, and WhatsApp Business selling systems that convert attention into enquiries.',
        route: 'social-media-marketing',
        ctaLabel: 'Explore Social & Ads',
      },
    ],
    audienceTracksHeading: 'Not Sure Where to Start? Pick Your Business Type',
    audienceTracks: [
      {
        audience: 'Education',
        title: 'Teachers, Tutors & Schools',
        description:
          'Reach parents and students beyond word-of-mouth with admission sites, Google Maps, and YouTube lessons.',
        route: 'for-teachers',
        ctaLabel: 'See Plans for Teachers',
      },
      {
        audience: 'Local Commerce',
        title: 'Shops, Clinics & Local Businesses',
        description:
          'Get found in nearby searches, sell through WhatsApp Business, and launch COD online stores cleanly.',
        route: 'for-small-business',
        ctaLabel: 'See Plans for Shops',
      },
      {
        audience: 'Enterprise & Export',
        title: 'Companies, Factories & Exporters',
        description:
          'Bilingual corporate sites, technical SEO, B2B lead generation, and tracked CRM systems built for scale.',
        route: 'for-large-business',
        ctaLabel: 'See Plans for Companies',
      },
    ],
    ownership: {
      eyebrow: 'Transparency Before Anything Starts',
      heading: 'What you own at the end',
      items: [
        'Full domain registration, hosting login, and clean code ownership in your business name',
        'Direct admin ownership of every ad account, pixel, Search Console, and GA4 property',
        'Plain-English or Urdu monthly progress reports showing clear work and enquiries',
        'Modular scope so you can start with one service and expand cleanly when ready',
      ],
      honestyDisclosure: HONESTY_DISCLOSURE_EN,
    },
    faqHeading: 'Questions About Combining Services',
    faqs: [
      {
        id: 'hub-faq-1',
        category: 'general',
        categoryLabel: 'Getting Started',
        question: 'Can we start with just one or two services instead of buying a huge package?',
        answer:
          'Yes. Most Pakistani businesses start with one clear bottleneck — such as a clean website + Google Business Profile or a COD store + WhatsApp catalog — and add paid ads or SEO once the base is solid.',
      },
      {
        id: 'hub-faq-2',
        category: 'pricing',
        categoryLabel: 'Pricing & Scope',
        question: 'How do you decide a fair price for my business?',
        answer:
          'We scope pricing around the exact deliverables, number of pages, channels, and languages required. You receive a clear written quote after a free 15-minute call or WhatsApp chat — never hidden lock-in fees.',
      },
      {
        id: 'hub-faq-3',
        category: 'seo',
        categoryLabel: 'Growth Timeline',
        question: 'Do you promise first-page rankings or fixed monthly income from these 40 services?',
        answer: `No. ${HONESTY_DISCLOSURE_EN}`,
      },
    ],
    ctaBand: {
      heading: 'Tell us where your business stands today.',
      description:
        'We will recommend only the exact services that fit your budget and stage — zero bloat.',
      buttonLabel: 'Request Free Recommendation',
    },
  },
  forTeachersPage: {
    eyebrow: 'For Teachers, Tutors, Academies & Schools Across Pakistan',
    headline: 'Your teaching deserves more than one street. Reach students across Pakistan.',
    subheadline:
      'Parents search Google and YouTube months before exams and admissions close. We build teacher websites, school portals, YouTube channels, and clear WhatsApp enquiry systems so students find you directly.',
    primaryCta: 'Get Your Free School / Teacher Plan',
    secondaryCta: 'Call or WhatsApp 0321-2995766',
    lastUpdatedText: `Last updated: ${LAST_UPDATED_LABEL}`,
    defaultServiceOption: 'website',
    challengesSection: {
      eyebrow: 'The Word-of-Mouth Ceiling',
      heading: 'Great teachers stay invisible when parents search online.',
      body: 'Many hardworking Matric, FSc, O/A Level tutors and coaching academies only rely on neighborhood flyers or referrals. When families move or search online for subject specialists, they find academies with clear websites and Google Maps listings instead.',
      challengesTitle: 'Common challenges teachers face',
      challenges: [
        'Parents repeatedly asking for syllabus, fee schedule, and timings on random chats',
        'Relying only on one local street for admissions every March and August',
        'Recording lessons on a phone without structured playlists or thumbnails parents trust',
        'No Google Business Profile pin or reviews showing real campus credibility',
      ],
      solutionsTitle: 'What Khan Marketings builds for education',
      solutions: [
        'Clean teacher, academy, or school website with subject pages, timings, and admission forms',
        'Google Maps profile optimization for neighborhood and city-wide student searches',
        'YouTube channel branding, structured lesson playlists, and recorded lecture workflows',
        'Tracked admission-season Meta ads driving parents straight to WhatsApp with pre-filled details',
      ],
    },
    packagesSection: {
      eyebrow: 'Services Tailored for Education',
      heading: 'Practical building blocks for solo tutors, academies, and multi-campus schools.',
      items: [
        {
          number: '01',
          title: 'Teacher & Academy Websites',
          description:
            'Present subjects taught (Matric, FSc, O/A Levels, MDCAT, ECAT, IELTS, Quran), bio, batch schedules, and online admission enquiry forms cleanly.',
        },
        {
          number: '02',
          title: 'Campus Google Maps & Local SEO',
          description:
            'Help parents searching for nearby tuition centers or Montessori schools find your verified address, hours, directions, and campus photos.',
        },
        {
          number: '03',
          title: 'YouTube Lesson Channels & Thumbnails',
          description:
            'Professional channel art, organized subject playlists, Urdu/English titles, and thumbnail templates that establish teaching authority nationwide.',
        },
        {
          number: '04',
          title: 'Course Landing Pages & LMS Funnels',
          description:
            'Focused registration pages for recorded video batches, crash revision courses, and weekend workshops with clear EasyPaisa/JazzCash instructions.',
        },
        {
          number: '05',
          title: 'Admission-Season Facebook & Instagram Ads',
          description:
            'Geo-targeted campaigns around your campus or nationwide online cohorts connecting parents cleanly to your WhatsApp desk.',
        },
        {
          number: '06',
          title: 'Urdu + English Bilingual Copy',
          description:
            'Respectful, clear communication written for both English-medium parents and Urdu-reading families.',
        },
      ],
    },
    processSection: {
      eyebrow: 'How We Launch Your Presence',
      heading: 'Zero technical stress — even if you have never owned a website.',
      steps: [
        {
          step: '01',
          title: 'Share Your Subjects & Timings',
          description:
            'Tell us your grades, subjects, city or online batches on a short WhatsApp message or phone call.',
        },
        {
          step: '02',
          title: 'We Write & Structure Everything',
          description:
            'We prepare crisp page copy, admission forms, Maps listing updates, and visual layouts for your approval.',
        },
        {
          step: '03',
          title: 'Go Live & Connect WhatsApp',
          description:
            'We test every mobile form and WhatsApp link so parents can enquire smoothly in seconds.',
        },
      ],
    },
    ownership: {
      eyebrow: 'Clear Ownership & Honesty',
      heading: 'What you own at the end',
      items: [
        'Full ownership of your domain, school/teacher website, and admission enquiry forms',
        'Full ownership of your YouTube channel, Google Maps listing, and parent contacts',
        'Simple instructions so your staff can update timetables or admission dates anytime',
        'Honest expectations before running any admission ads or content work',
      ],
      honestyDisclosure: HONESTY_DISCLOSURE_EN,
    },
    faqHeading: 'Questions From Teachers & School Owners',
    faqs: [
      {
        id: 'teacher-faq-1',
        category: 'web',
        categoryLabel: 'Schools & Tutors',
        question: 'I am an individual teacher, not a large school — can I still have a website?',
        answer:
          'Yes. Solo home tutors, online IELTS/O-Level instructors, and specialist science teachers get strong value from a focused 3-page personal website paired with YouTube playlists and a WhatsApp booking flow.',
      },
      {
        id: 'teacher-faq-2',
        category: 'pricing',
        categoryLabel: 'Scope & Fees',
        question: 'Do I have to run paid ads, or can parents find my academy on Google first?',
        answer:
          'You do not have to run paid ads. A clean website combined with an accurate Google Business Profile helps nearby parents find you organically year-round, and ads can be added selectively during admissions.',
      },
      {
        id: 'teacher-faq-3',
        category: 'creators',
        categoryLabel: 'YouTube & Courses',
        question: 'Do you guarantee student admissions or course sales from YouTube or ads?',
        answer: `No. ${HONESTY_DISCLOSURE_EN}`,
      },
    ],
    relatedHeading: 'Helpful Next Pages',
    relatedLinks: [
      {
        title: 'Browse Studied School & Tutor Websites',
        description:
          'View real Pakistani teacher directories and coaching academy examples we benchmarked.',
        route: 'portfolio',
        ctaLabel: 'Open Website Examples',
      },
      {
        title: 'Explore SEO & Google Maps',
        description:
          'See how neighborhood search visibility helps academies stand out in every city.',
        route: 'seo',
        ctaLabel: 'Explore SEO & Maps',
      },
    ],
    ctaBand: {
      heading: 'Ready to give your teaching a home across Pakistan?',
      description:
        'Message 0321-2995766 or tell us what subjects you teach for a clear, honest starting plan.',
      buttonLabel: 'Get Teacher / School Plan',
    },
  },
  forSmallBusinessPage: {
    eyebrow: 'For Pakistani Shops, Clinics, Boutiques, Restaurants & Home Brands',
    headline: 'Your customers are searching right now. Be the shop they find and trust.',
    subheadline:
      'Whether you run a clinic in Lahore, a bakery in Rawalpindi, a tailoring brand in Karachi, or a local service shop anywhere in Pakistan, we turn foot-traffic credibility into steady online orders and phone calls.',
    primaryCta: 'Get Your Free Shop Growth Plan',
    secondaryCta: 'Call or WhatsApp 0321-2995766',
    lastUpdatedText: `Last updated: ${LAST_UPDATED_LABEL}`,
    defaultServiceOption: 'local-seo',
    challengesSection: {
      eyebrow: 'From Rented Feeds to Steady Local Buyers',
      heading: 'Stop losing nearby buyers because your business looks incomplete online.',
      body: 'Many profitable Pakistani shops only share products on WhatsApp status or a messy Facebook page. Customers hesitate to order or visit when they cannot check prices, menus, reviews, or your exact Google Maps location.',
      challengesTitle: 'What slows down local businesses online',
      challenges: [
        'Missing or unverified Google Maps pins causing lost walk-ins and wrong turns',
        'Sending the same product photos manually in WhatsApp chats 50 times a day',
        'Boosting posts without pixel tracking and wondering why cash orders stay low',
        'Slow or broken mobile links that buyers abandon on 4G connections',
      ],
      solutionsTitle: 'What Khan Marketings builds for local commerce',
      solutions: [
        'Fast business website or COD-ready Shopify / WooCommerce store with clean checkout',
        'Google Business Profile optimization and QR code workflows for real customer reviews',
        'Structured WhatsApp Business product catalog with quick-reply labels and order confirmation',
        'Tracked Facebook, Instagram, and TikTok ads targeting buyers ready to order today',
      ],
    },
    packagesSection: {
      eyebrow: 'Practical Growth Systems for Small Businesses',
      heading: 'Choose what solves your immediate bottleneck first.',
      items: [
        {
          number: '01',
          title: 'Google Business Profile & Maps Dominance',
          description:
            'Show accurate timings, phone number, service areas, photos, and real customer reviews when nearby buyers search Google Maps.',
        },
        {
          number: '02',
          title: 'COD-Ready Online Stores',
          description:
            'Shopify or WooCommerce stores configured for Pakistani Cash-on-Delivery confirmation, courier workflows (TCS/Leopards/Trax), and WhatsApp order alerts.',
        },
        {
          number: '03',
          title: 'WhatsApp Business Catalog & Broadcasts',
          description:
            'Organize your catalog inside WhatsApp so customers browse cleanly and order in 3 taps without waiting for manual replies.',
        },
        {
          number: '04',
          title: 'High-Converting Local Websites',
          description:
            'Menu, clinic appointment, or service websites built in crisp English and spoken Urdu so visitors call or message immediately.',
        },
        {
          number: '05',
          title: 'Meta & TikTok Lead Campaigns',
          description:
            'Clear visual ads tested across Pakistani cities with proper Meta Pixel / CAPI tracking — not blind boost-post buttons.',
        },
        {
          number: '06',
          title: 'Consistent Branding & Product Posts',
          description:
            'Clean logo marks, menu cards, festival promos, and tidy social grids buyers feel safe ordering from.',
        },
      ],
    },
    processSection: {
      eyebrow: 'Three Practical Steps',
      heading: 'Built around busy shop owners and small teams.',
      steps: [
        {
          step: '01',
          title: 'Quick Shop & Product Chat',
          description:
            'Send voice notes or photos on WhatsApp showing what you sell, your city, and delivery radius.',
        },
        {
          step: '02',
          title: 'We Build Your Pages & Maps Setup',
          description:
            'We write clear descriptions, organize products or services, verify your Maps details, and connect WhatsApp.',
        },
        {
          step: '03',
          title: 'Launch & Measure Real Orders',
          description:
            'Every call click, WhatsApp tap, and COD checkout is tracked cleanly in simple monthly reports.',
        },
      ],
    },
    ownership: {
      eyebrow: 'Clear Ownership & Honesty',
      heading: 'What you own at the end',
      items: [
        '100% ownership of your shop website, Shopify/WooCommerce store, and domain name',
        'Direct ownership of your Google Business Profile, reviews, and ad accounts',
        'Complete customer list and order data under your control — never locked inside an agency account',
        'Simple video walkthroughs or WhatsApp training so your team can update prices or stock',
      ],
      honestyDisclosure: HONESTY_DISCLOSURE_EN,
    },
    faqHeading: 'Questions From Shop & Clinic Owners',
    faqs: [
      {
        id: 'smb-faq-1',
        category: 'ecommerce',
        categoryLabel: 'COD & Stores',
        question: 'Can you connect Cash on Delivery and Pakistani couriers on an online store?',
        answer:
          'Yes. We configure Cash-on-Delivery verification workflows (via WhatsApp or confirmation forms), city shipping zones, and courier-ready order sheets for WooCommerce or Shopify.',
      },
      {
        id: 'smb-faq-2',
        category: 'seo',
        categoryLabel: 'Google Maps',
        question: 'My shop already gets walk-in buyers — why do I need Google Maps SEO?',
        answer:
          'When new residents or mobile searchers type your service plus city name on Google, Maps results sit above regular links. Clean category setup and real reviews convert those nearby searches into calls.',
      },
      {
        id: 'smb-faq-3',
        category: 'ads',
        categoryLabel: 'Results & Budget',
        question: 'Do you guarantee daily orders or fixed return on Meta or TikTok ads?',
        answer: `No. ${HONESTY_DISCLOSURE_EN}`,
      },
    ],
    relatedHeading: 'Explore Core Services',
    relatedLinks: [
      {
        title: 'Websites & Online Stores',
        description:
          'See how we build custom mobile-friendly websites and COD online stores for Pakistan.',
        route: 'website-development',
        ctaLabel: 'Explore Web & Stores',
      },
      {
        title: 'Social Media, Ads & WhatsApp',
        description:
          'Turn Facebook, Instagram, and TikTok discovery into organized WhatsApp enquiries.',
        route: 'social-media-marketing',
        ctaLabel: 'Explore Social & Ads',
      },
    ],
    ctaBand: {
      heading: 'Ready to bring your shop or clinic online properly?',
      description:
        'Message 0321-2995766 or request a free growth plan tailored to your city and products.',
      buttonLabel: 'Get Shop Growth Plan',
    },
  },
  forLargeBusinessPage: {
    eyebrow: 'For Companies, Manufacturers, Multi-Branch Brands & Exporters',
    headline: 'Big business deserves a digital presence buyers trust around the world.',
    subheadline:
      'Overseas buyers, corporate procurement teams, and enterprise customers inspect your digital footprint before replying to an RFQ. We align bilingual corporate websites, scalable technical SEO, B2B lead pipelines, and clean analytics under one team.',
    primaryCta: 'Request a Corporate Consultation',
    secondaryCta: 'Call or WhatsApp 0321-2995766',
    lastUpdatedText: `Last updated: ${LAST_UPDATED_LABEL}`,
    defaultServiceOption: 'multiple',
    challengesSection: {
      eyebrow: 'Closing the Credibility Gap',
      heading: 'Stop letting an outdated website undermine world-grade manufacturing or B2B quality.',
      body: 'Many strong Pakistani exporters, textile mills, surgical/sports manufacturers, software houses, and multi-city groups rely on 8-year-old brochure sites that break on mobile, lack technical SEO, and fail to capture RFQs into a CRM.',
      challengesTitle: 'Common enterprise bottlenecks',
      challenges: [
        'Outdated brochure websites that erode confidence with overseas B2B importers',
        'Fragmented vendors for website development, SEO, LinkedIn, and Google Analytics',
        'Unmeasured ad spend without GA4, Conversions API, or CRM enquiry attribution',
        'Slow technical architecture preventing multi-category product catalogs from indexing cleanly',
      ],
      solutionsTitle: 'What Khan Marketings builds for companies & exporters',
      solutions: [
        'Fast, structured corporate and export product showcase sites with clear RFQ capture',
        'Comprehensive technical SEO, bilingual architecture, and structured Schema.org data',
        'LinkedIn company positioning, B2B lead funnels, and Google Search demand capture',
        'GA4, GTM, Meta Conversions API tracking + CRM & automated WhatsApp routing',
      ],
    },
    packagesSection: {
      eyebrow: 'Integrated Growth Capabilities',
      heading: 'Six unified layers executed by one accountable digital team.',
      items: [
        {
          number: '01',
          title: 'Corporate & Export Websites',
          description:
            'Clear capability decks, compliance/quality documentation pages, downloadable spec sheets, and fast RFQ routing to export managers.',
        },
        {
          number: '02',
          title: 'Technical & Multi-Page SEO',
          description:
            'Crawl optimization, Core Web Vitals speed tuning, clean URL architecture, hreflang bilingual setup, and schema markup.',
        },
        {
          number: '03',
          title: 'LinkedIn & B2B Lead Generation',
          description:
            'Executive and company page positioning alongside targeted B2B campaigns built to generate qualified distributor or corporate calls.',
        },
        {
          number: '04',
          title: 'Google Search & Performance Ads',
          description:
            'High-intent domestic and international Google Search campaigns with tight negative-keyword hygiene and conversion tracking.',
        },
        {
          number: '05',
          title: 'Analytics, Attribution & CRM Sync',
          description:
            'Server-side CAPI events, GA4 funnel reporting, and automated routing of web and WhatsApp leads into HubSpot, Zoho, or Google Sheets.',
        },
        {
          number: '06',
          title: 'Corporate Video & PR Assets',
          description:
            'Factory walkthrough scripts, leadership interview briefs, pitch decks, and multilingual visual assets.',
        },
      ],
    },
    processSection: {
      eyebrow: 'Structured Execution Model',
      heading: 'Clear milestones, single point of contact, zero finger-pointing.',
      steps: [
        {
          step: '01',
          title: 'Technical & Brand Discovery',
          description:
            'Audit your current site speed, search indexation, buyer personas, and internal sales handoff workflow.',
        },
        {
          step: '02',
          title: 'Architecture & Copy Blueprint',
          description:
            'Lock sitemap, conversion funnels, tracking plan, and corporate messaging before design and build begin.',
        },
        {
          step: '03',
          title: 'Build, Track & Continuous Growth',
          description:
            'Launch verified production infrastructure followed by monthly SEO, campaign optimization, and transparent reporting.',
        },
      ],
    },
    ownership: {
      eyebrow: 'Enterprise Governance & Transparency',
      heading: 'What you own at the end',
      items: [
        'Complete source code, Git repository access, and hosting independence in company accounts',
        'Direct company ownership of GA4, Search Console, Google Ads, Business Manager, and CRM records',
        'Clean documentation covering site architecture, tracking tags, and handover procedures',
        'Direct executive reporting focused on verified pipeline quality — never vanity metrics',
      ],
      honestyDisclosure: HONESTY_DISCLOSURE_EN,
    },
    faqHeading: 'Questions From Directors & Marketing Teams',
    faqs: [
      {
        id: 'corp-faq-1',
        category: 'general',
        categoryLabel: 'B2B & Exporters',
        question: 'Can you rebuild an outdated export or corporate site without losing existing Google rankings?',
        answer:
          'Yes. Before replacing any legacy pages, we map all existing URLs, set up clean 301 redirects, preserve working metadata, and improve page speed and semantic HTML so equity transfers cleanly.',
      },
      {
        id: 'corp-faq-2',
        category: 'ads',
        categoryLabel: 'Analytics & CRM',
        question: 'Do you set up GA4, GTM, and CRM lead capture alongside website or ad builds?',
        answer:
          'Yes. Every corporate build or multi-channel campaign can include full Google Tag Manager, GA4 conversion tracking, and automated lead routing directly into your sales team CRM or WhatsApp workflow.',
      },
      {
        id: 'corp-faq-3',
        category: 'seo',
        categoryLabel: 'Expectations',
        question: 'Do you guarantee export contracts or specific B2B revenue growth?',
        answer: `No. ${HONESTY_DISCLOSURE_EN}`,
      },
    ],
    relatedHeading: 'Explore Technical Foundations',
    relatedLinks: [
      {
        title: 'Technical & On-Page SEO',
        description:
          'See how semantic HTML, schema markup, and bilingual structure support scalable organic visibility.',
        route: 'seo',
        ctaLabel: 'Explore SEO & Maps',
      },
      {
        title: 'All 40 Agency Services',
        description:
          'Inspect every website, automation, analytics, and performance ads capability in one catalog.',
        route: 'services',
        ctaLabel: 'Browse Full Catalog',
      },
    ],
    ctaBand: {
      heading: 'Ready to align your corporate digital presence under one accountable team?',
      description:
        'Book a direct consultation on 0321-2995766 or send your company brief for a calm architectural review.',
      buttonLabel: 'Request Corporate Consultation',
    },
  },
  portfolioPage: {
    eyebrow: 'Pakistani Niche Websites We Studied',
    headline: 'What good looks like for teachers, schools, and local businesses.',
    subheadline:
      'Good websites do not need flashy fluff to win customer trust. Browse third-party Pakistani school, tutoring, clinic, and neighborhood shop examples we studied to benchmark simple, practical usability.',
    honestyBanner:
      'Honesty note: The live websites listed here are third-party Pakistani examples we studied — not Khan Marketings client work. We share them so business owners and teachers can see how clear structure builds trust online.',
    filters: {
      all: 'All Examples',
      education: 'Teachers & Schools',
      localServices: 'Clinics & Local Shops',
    },
    fetchRandomBtn: 'Show Different Examples',
    fetchingBtn: 'Loading Examples…',
    visitSiteLabel: 'Open Live Example',
    buildSimilarLabel: 'Plan One Like This',
    ctaBand: {
      heading: 'Want a clean website like these built cleanly for your own business?',
      description:
        'Message us on WhatsApp or call 0321-2995766 for a free discussion and scope-based quote.',
      primaryCta: 'Get a Free Quote',
      secondaryCta: 'Message Us on WhatsApp',
    },
  },
  guidesHubPage: guidesHubPageEn,
  guideArticles: guideArticlesEn,
  aboutPage: {
    eyebrow: 'About Khan Marketings (KM)',
    headline: 'A digital growth partner, not five separate freelancers.',
    subheadline:
      'Khan Marketings — the digital growth agency for Pakistan’s small business empires, serving businesses across Pakistan.',
    lastUpdatedText: `Last updated: ${LAST_UPDATED_LABEL}`,
    canonicalEntity: CANONICAL_ENTITY_DEFINITION,
    philosophy: {
      eyebrow: 'Why We Work as One System',
      heading: 'Everything connects better when one accountable team builds the launchpad.',
      paragraphs: [
        'Too many Pakistani business owners burn money hiring five different people who never talk to each other: one person builds an empty site, another boosts random posts, and an SEO vendor blames the developer when enquiries never arrive.',
        'At Khan Marketings, we combine website development, clear English and Urdu copywriting, Google Search and Maps SEO, social media management, paid ads, video workflows, and WhatsApp selling into one joined plan. Every channel feeds the next.',
        'Our goal is to be the digital partner every small business empire in Pakistan trusts — built through fast delivery, clear ownership in your name, straight answers, and respect for your budget.',
      ],
    },
    pillars: {
      eyebrow: 'How We Work With Every Client',
      heading: 'Four straightforward commitments — no hype, no hidden terms.',
      items: [
        {
          number: '01',
          title: 'Real Words Before Pretty Shapes',
          body: 'A website only helps your business if buyers immediately understand what you sell and how to reach you. We plan clear structure and written copy first.',
        },
        {
          number: '02',
          title: 'Show Up Where Buyers Look',
          body: 'From Google Maps for local shops and clinics to Facebook, TikTok, YouTube, and WhatsApp catalogs, we connect your website to real customer habits.',
        },
        {
          number: '03',
          title: 'Full Client Ownership',
          body: 'You always keep full control of your domain, website files, ad accounts, and customer data. We build your asset — never a trap.',
        },
        {
          number: '04',
          title: 'Calm, Honest Expectations',
          body: HONESTY_DISCLOSURE_EN,
        },
      ],
    },
    integrationNote: {
      eyebrow: 'Serving Businesses Across Pakistan',
      heading: 'Ready to talk about your business, school, or growing brand?',
      body: 'No payment is needed for the first conversation. Call or WhatsApp 0321-2995766 or send your brief online to get your free growth plan.',
      ctaLabel: 'Get Your Free Growth Plan',
    },
  },
  contactPage: {
    eyebrow: 'Contact Khan Marketings · Serving Across Pakistan',
    headline: 'Let’s plan your next stage of growth.',
    subheadline:
      'No payment is needed for our first conversation. Message us directly on WhatsApp or fill out the short form below and we will reply with practical next steps.',
    directInfo: {
      title: 'WhatsApp & Direct Call',
      emailLabel: 'Official Email',
      emailHint: 'We reply to detailed briefs and document requests via email.',
      phoneLabel: 'Phone & WhatsApp (Fastest Reply)',
      phoneHint: 'Call or send a voice/text message on WhatsApp any day.',
      whatsappCta: 'Message on WhatsApp Now',
      noPaymentNote: 'No payment is needed for your first call or growth review.',
      bookingTitle: 'Prefer to speak right away?',
      bookingBody:
        'Tap below to copy 0321-2995766, place a direct phone call, or open WhatsApp.',
      bookingCta: 'Call or WhatsApp 0321-2995766',
    },
    afterSubmit: {
      title: 'What happens after you reach out',
      steps: [
        {
          step: '01',
          title: 'We Read Your Brief Carefully',
          description:
            'We review your business type, city, current website or social links, and what goals matter most right now.',
        },
        {
          step: '02',
          title: 'Quick Reply on WhatsApp or Phone',
          description:
            'We message or call you to ask a few helpful questions so we understand your customers properly.',
        },
        {
          step: '03',
          title: 'Simple Plan & Scope Quote',
          description:
            'We share a clear, stage-by-stage recommendation and free quote — and you decide calmly with zero pressure.',
        },
      ],
    },
    form: {
      title: 'Get Your Free Growth Plan / Quote',
      subtitle: 'Fields marked with * are required. Pakistani businesses, teachers, and brands welcome.',
      fields: {
        fullName: { label: 'Your Full Name *', placeholder: 'e.g. Usman Tariq or Ayesha Siddiqui' },
        email: { label: 'Email Address *', placeholder: 'e.g. usman@yourbusiness.pk' },
        phone: { label: 'WhatsApp / Phone Number *', placeholder: '0300-1234567 or +92 321 0000000' },
        company: {
          label: 'Business, Shop, or Academy Name *',
          placeholder: 'e.g. Al-Noor Academy, Lahore Traders, or Zainab Clinic',
        },
        websiteUrl: {
          label: 'Current Website or Facebook Page Link',
          placeholder: 'https://yourbusiness.pk',
          optional: 'Optional',
        },
        serviceRequired: { label: 'What Do You Need Most? *' },
        budget: { label: 'How Would You Like to Start?', optional: 'Optional' },
        projectDetails: {
          label: 'Tell Us About Your Business & Goal *',
          placeholder:
            'e.g. I run an academy in Rawalpindi and need a website + admissions ads, or I sell clothing on WhatsApp and want a COD online store.',
        },
      },
      serviceOptions: {
        website: 'Website Design, School Site & Copywriting',
        ecommerce: 'Online Store (Shopify / WooCommerce COD / Daraz)',
        seo: 'SEO & Google Search Visibility',
        'local-seo': 'Local SEO, Google Maps & Reviews',
        social: 'Social Media Management & WhatsApp Catalog',
        ads: 'Facebook, Instagram, Google & TikTok Paid Ads',
        'video-youtube': 'YouTube Channel Setup, Workflows & Video Editing',
        branding: 'Brand Identity, Logo & Bilingual Content',
        'automation-ai': 'AI Chatbots, CRM & Marketing Automation',
        'training-consulting': 'Owner Consulting & Team Workshops',
        multiple: 'Full Growth System (Website + Google + Social + Ads)',
        other: 'Not Sure Yet — Help Me Decide',
      },
      budgetOptions: {
        '': 'Recommend a starting scope for me',
        'under-1000': 'Start small (Single website / Local Maps / WhatsApp setup)',
        '1000-2500': 'Steady growth (Website or COD store + SEO or Ads)',
        '2500-5000': 'Multi-channel growth system',
        '5000-plus': 'Full corporate / B2B & multi-campaign execution',
        discuss: 'Let’s discuss scope first on WhatsApp',
      },
      submitLabel: 'Request Free Growth Plan',
      submittingLabel: 'Checking Your Details…',
      privacyNote:
        'We only use your contact details to reply with your free growth plan.',
      errors: {
        required_name: 'Please write your name (at least 2 letters).',
        required_email: 'Please enter an email address where we can send your plan.',
        invalid_email: 'That email looks incomplete — please try like name@business.pk.',
        required_phone: 'Please enter your WhatsApp or phone number.',
        invalid_phone: 'Please enter a valid number like 0321-2995766 (7 to 16 digits).',
        required_company: 'Please enter your business, school, or brand name.',
        invalid_url: 'Please enter a valid website link (e.g. https://example.pk) or leave blank.',
        required_service: 'Please select which service fits your needs.',
        required_details: 'Please write a short note about your business and what you want to achieve.',
        short_details: 'Please add a little more detail (at least 15 characters) so we can advise clearly.',
        spam_detected: 'Submission blocked by spam protection.',
      },
      devConfirmation: {
        badge: 'Details Checked · Ready to Send Directly',
        title: 'Your enquiry summary is prepared.',
        body: 'Direct online form delivery is not connected yet in this preview, so please tap below to send this prepared summary via your email app or send us a quick WhatsApp message on 0321-2995766.',
        configHint: 'Official email:',
        summaryTitle: 'Your Prepared Brief',
        mailtoButton: 'Open Prepared Brief in Email',
        resetButton: 'Edit Details',
      },
      liveSuccess: {
        title: 'Received — thank you for reaching out.',
        body: 'We have your business details and will follow up shortly via WhatsApp or email with practical next steps.',
        resetButton: 'Send Another Enquiry',
      },
      liveFailure: {
        title: 'Could not submit automatically right now.',
        body: 'No problem — tap below to send your pre-filled details by email, or message 0321-2995766 on WhatsApp directly.',
        mailtoButton: 'Open in Email App',
      },
    },
  },
  footer: {
    tagline:
      'Khan Marketings — the digital growth agency for Pakistan’s small business empires.',
    servingNote: 'Serving businesses across Pakistan · Available in English & اردو',
    honestyDisclosure: HONESTY_DISCLOSURE_EN,
    navigationHeading: 'Company',
    servicesHeading: 'Services',
    contactHeading: 'WhatsApp & Enquiries',
    emailConfigNote: 'Direct WhatsApp & phone consultations across Pakistan.',
    copyright: '© 2026 Khan Marketings (KM). All rights reserved.',
    domainText: 'khanmarketings.com',
    downloadHtmlLabel: 'Download Website (.html)',
  },
  chatWidget: {
    launcherLabel: 'Ask KM Growth Advisor',
    closeLabel: 'Close chat',
    clearLabel: 'Start new chat',
    title: 'KM Digital Growth Advisor',
    subtitle: 'English · اردو · Roman Urdu Guidance',
    roleLabel: 'Reply Style',
    roles: {
      strategist: 'Growth Advisor',
      quickGuide: 'Quick Answer',
    },
    welcomeMessage:
      'Assalam-o-Alaikum! Ask anything in English, اردو, or Roman Urdu about building a website, showing up on Google Maps, running ads, or growing a school or shop online.',
    starterPrompts: [
      'Website banwane ke liye kya chahiye?',
      'How can my academy or shop show up on Google Maps?',
      'Should I start with a website or a Facebook/WhatsApp store?',
    ],
    inputPlaceholder: 'Ask in English, اردو, or Roman Urdu…',
    sendLabel: 'Send',
    thinkingLabel: 'Preparing a clear next step…',
    callShortcutLabel: 'Call 0321-2995766',
    whatsappShortcutLabel: 'WhatsApp 0321-2995766',
    errorFallback:
      'Unable to connect to the live advisor right now. Call or WhatsApp 0321-2995766 directly for a free growth chat.',
  },
  toast: {
    dismissLabel: 'Dismiss notification',
    enquirySuccessTitle: 'Enquiry Sent Successfully',
    enquirySuccessMessage: 'Thank you — Khan Marketings received your brief and will reply soon.',
    enquiryValidatedTitle: 'Brief Prepared Successfully',
    enquiryValidatedMessage:
      'Your summary is ready. Open your email app or message 0321-2995766 on WhatsApp.',
    callBookedTitle: 'Direct Line Ready',
    callBookedMessage: 'Call or WhatsApp 0321-2995766 — no payment needed for your first chat.',
    numberCopiedTitle: 'Number Copied',
    numberCopiedMessage: '0321-2995766 copied cleanly to your clipboard.',
  },
};
