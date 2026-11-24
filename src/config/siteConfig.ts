/**
 * Khan Marketings — Central Site & Integration Configuration
 */
export interface SocialProfiles {
  facebook: string;
  instagram: string;
  tiktok: string;
  youtube: string;
  linkedin: string;
}

export interface SiteConfig {
  brandName: string;
  brandShort: string;
  domain: string;
  siteUrl: string;
  servingArea: string;
  servingAreaUr: string;
  /** Official company email address — update once finalized. */
  recipientEmail: string;
  /** Direct business phone / WhatsApp number */
  phoneRaw: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsappHref: string;
  /** Build-time content freshness label displayed on About, FAQ, and service pages */
  lastUpdated: string;
  lastUpdatedUr: string;
  /** Verified social profile URLs — output in JSON-LD sameAs only when populated. */
  socialProfiles: SocialProfiles;
  /**
   * Optional backend or form-service endpoint (e.g. Formspree, custom API).
   * When null, the enquiry form runs client-side validation and presents a
   * development-state confirmation with a pre-filled mailto fallback.
   */
  formEndpointUrl: string | null;
  /**
   * Optional external calendar booking URL.
   * When null, "Book a Call" opens the direct phone call prompt (0321-2995766) & WhatsApp modal.
   */
  bookingUrl: string | null;
}

export const SITE_URL = 'https://khanmarketings.com';
export const LAST_UPDATED_LABEL = 'November 2026';
export const LAST_UPDATED_LABEL_UR = 'نومبر 2026';

export const CANONICAL_ENTITY_DEFINITION =
  'Khan Marketings is a Pakistan-focused digital growth agency that helps small and medium businesses, teachers, schools and growing brands build professional websites, get found on Google, grow on social media and win more customers online. Services include website development, SEO, social media marketing, paid ads, e-commerce stores, YouTube channel growth, WhatsApp selling and marketing automation. The website is available in English and Urdu.';

export const HONESTY_DISCLOSURE_EN =
  'Results depend on your market, budget and consistency. We do not guarantee rankings or income. We promise honest work, clear reports and steady effort.';

export const HONESTY_DISCLOSURE_UR =
  'نتائج آپ کے شعبے، بجٹ اور مستقل مزاجی پر منحصر ہیں۔ ہم رینکنگ یا آمدنی کی ضمانت نہیں دیتے۔ ہم ایماندار کام، سادہ رپورٹس اور مسلسل محنت کا وعدہ کرتے ہیں۔';

export const SITE_CONFIG: SiteConfig = {
  brandName: 'Khan Marketings',
  brandShort: 'KM',
  domain: 'khanmarketings.com',
  siteUrl: SITE_URL,
  servingArea: 'Serving businesses across Pakistan',
  servingAreaUr: 'پاکستان بھر کے کاروباروں کے لیے خدمات',
  recipientEmail: 'hello@khanmarketings.com',
  phoneRaw: '03212995766',
  phoneDisplay: '0321-2995766',
  phoneHref: 'tel:03212995766',
  whatsappHref: 'https://wa.me/923212995766',
  lastUpdated: LAST_UPDATED_LABEL,
  lastUpdatedUr: LAST_UPDATED_LABEL_UR,
  socialProfiles: {
    facebook: '',
    instagram: '',
    tiktok: '',
    youtube: '',
    linkedin: '',
  },
  formEndpointUrl: null,
  bookingUrl: null,
};

export function getPopulatedSocialProfiles(): string[] {
  return Object.values(SITE_CONFIG.socialProfiles)
    .map((url) => url.trim())
    .filter((url) => url.length > 0);
}
