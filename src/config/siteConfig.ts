/**
 * Khans Marketing — Central Site & Integration Configuration
 */
export interface SiteConfig {
  brandName: string;
  brandShort: string;
  domain: string;
  /** Official company email address — update once finalized. */
  recipientEmail: string;
  /** Direct business phone / WhatsApp number */
  phoneRaw: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsappHref: string;
  /**
   * Optional backend or form-service endpoint (e.g. Formspree, custom API).
   * When null, the enquiry form runs client-side validation and presents a
   * development-state confirmation with a pre-filled mailto fallback.
   */
  formEndpointUrl: string | null;
  /**
   * Optional external calendar booking URL.
   * When null, "Book a Call" opens the direct phone call prompt (03212995766) & enquiry modal.
   */
  bookingUrl: string | null;
}

export const SITE_CONFIG: SiteConfig = {
  brandName: 'Khans Marketing',
  brandShort: 'KM',
  domain: 'khansmarketing.com',
  recipientEmail: 'hello@khansmarketing.com',
  phoneRaw: '03212995766',
  phoneDisplay: '0321-2995766',
  phoneHref: 'tel:03212995766',
  whatsappHref: 'https://wa.me/923212995766',
  formEndpointUrl: null,
  bookingUrl: null,
};
