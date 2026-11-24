/**
 * Khan Marketings — Client Proof Data Registry
 *
 * TODO (Owner): Add only real, client-permissioned proof items below as projects launch.
 * Never add invented testimonials, unverified metrics, ratings, or unauthorized client logos.
 * Proof components on the site automatically stay hidden until these arrays contain real entries.
 */

export interface ClientTestimonial {
  id: string;
  /** true = illustrative demo text, shown with a visible "Sample" label. Remove the flag only for real, permissioned quotes. */
  isSample?: boolean;
  quoteEn: string;
  quoteUr: string;
  authorName: string;
  businessName: string;
  city: string;
  serviceCategory: string;
}

export interface ClientCaseStudy {
  id: string;
  clientName: string;
  industry: string;
  city: string;
  challengeEn: string;
  challengeUr: string;
  workDoneEn: string;
  workDoneUr: string;
  verifiedOutcomeEn: string;
  verifiedOutcomeUr: string;
}

export interface ClientLogoItem {
  id: string;
  name: string;
  logoUrl: string;
  altEn: string;
  altUr: string;
}

export interface ReviewsSummary {
  averageRating: number;
  reviewCount: number;
  sourceName: string;
  sourceUrl: string;
}

export const testimonials: ClientTestimonial[] = [
  { id: 'ayesha', isSample: true, authorName: 'Ayesha R.', businessName: 'Home Tutor', city: 'Lahore', serviceCategory: 'Website',
    quoteEn: 'I used to depend on word of mouth. Now parents find my profile, read what I teach and message me on WhatsApp.',
    quoteUr: 'پہلے میں صرف سفارش پر چلتی تھی۔ اب والدین میرا پروفائل دیکھتے ہیں، پڑھانے کا طریقہ سمجھتے ہیں اور واٹس ایپ پر رابطہ کرتے ہیں۔' },
  { id: 'hamza', isSample: true, authorName: 'Hamza Q.', businessName: 'Clothing Boutique', city: 'Karachi', serviceCategory: 'Social Media',
    quoteEn: 'They explained everything in simple language and showed me what would be done each week. No confusion, no hidden surprises.',
    quoteUr: 'انہوں نے ہر بات آسان زبان میں سمجھائی اور بتایا کہ ہر ہفتے کیا کام ہوگا۔ نہ الجھن، نہ کوئی چھپی بات۔' },
  { id: 'sana', isSample: true, authorName: 'Dr. Sana M.', businessName: 'Dental Clinic', city: 'Islamabad', serviceCategory: 'Local SEO',
    quoteEn: 'Our clinic finally looks professional online, and patients can find our location and timings on Google easily.',
    quoteUr: 'ہمارا کلینک آخرکار آن لائن بھی پروفیشنل نظر آتا ہے، اور مریض گوگل پر لوکیشن اور اوقات آسانی سے دیکھ لیتے ہیں۔' },
  { id: 'imran', isSample: true, authorName: 'Imran S.', businessName: 'Textile Exporter', city: 'Faisalabad', serviceCategory: 'Website + SEO',
    quoteEn: 'We needed a serious company website for buyers. The team kept the structure clean and the reporting clear.',
    quoteUr: 'ہمیں خریداروں کے لیے ایک سنجیدہ کمپنی ویب سائٹ چاہیے تھی۔ ٹیم نے ڈھانچہ صاف رکھا اور رپورٹنگ بھی واضح تھی۔' },
  { id: 'bilal', isSample: true, authorName: 'Bilal A.', businessName: 'Academy Owner', city: 'Rawalpindi', serviceCategory: 'Ads + Website',
    quoteEn: 'Admissions season used to be stressful. A simple page and a clear WhatsApp flow made enquiries much easier to manage.',
    quoteUr: 'داخلوں کا سیزن پہلے پریشان کن ہوتا تھا۔ ایک سادہ پیج اور واضح واٹس ایپ نظام سے انکوائریاں سنبھالنا بہت آسان ہو گیا۔' },
  { id: 'nadia', isSample: true, authorName: 'Nadia K.', businessName: 'Home Bakery', city: 'Multan', serviceCategory: 'Social Media',
    quoteEn: 'They answer on WhatsApp quickly and our posts finally look like one brand. That alone made a difference.',
    quoteUr: 'وہ واٹس ایپ پر جلدی جواب دیتے ہیں اور ہماری پوسٹس اب ایک ہی برانڈ کی لگتی ہیں۔ یہی بات بہت فرق ڈالتی ہے۔' },
];

export const caseStudies: ClientCaseStudy[] = [];

export const clientLogos: ClientLogoItem[] = [];

export const reviewsSummary: ReviewsSummary | null = null;
