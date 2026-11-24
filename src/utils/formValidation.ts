export type ServiceOption =
  | 'website'
  | 'ecommerce'
  | 'seo'
  | 'local-seo'
  | 'social'
  | 'ads'
  | 'video-youtube'
  | 'branding'
  | 'automation-ai'
  | 'training-consulting'
  | 'multiple'
  | 'other';

export type BudgetOption =
  | ''
  | 'under-1000'
  | '1000-2500'
  | '2500-5000'
  | '5000-plus'
  | 'discuss';

export interface LeadFormValues {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  websiteUrl: string;
  serviceRequired: ServiceOption;
  budget: BudgetOption;
  projectDetails: string;
  /** Anti-spam honeypot field — must remain empty for genuine submissions. */
  companyFaxTrap: string;
}

export type LeadFormField = keyof LeadFormValues;

export type ValidationErrorCode =
  | 'required_name'
  | 'required_email'
  | 'invalid_email'
  | 'required_phone'
  | 'invalid_phone'
  | 'required_company'
  | 'invalid_url'
  | 'required_service'
  | 'required_details'
  | 'short_details'
  | 'spam_detected';

export type LeadFormErrors = Partial<Record<LeadFormField | '_form', ValidationErrorCode>>;

export interface ValidationResult {
  valid: boolean;
  errors: LeadFormErrors;
}

export const INITIAL_LEAD_FORM_VALUES: LeadFormValues = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  websiteUrl: '',
  serviceRequired: 'website',
  budget: '',
  projectDetails: '',
  companyFaxTrap: '',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isValidEmail(value: string): boolean {
  return EMAIL_PATTERN.test(value.trim());
}

export function isValidPhone(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;
  if (!/^[+\d\s().-]+$/.test(trimmed)) return false;
  const digits = trimmed.replace(/\D/g, '');
  return digits.length >= 7 && digits.length <= 16;
}

export function isValidOptionalUrl(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return true;
  const candidate = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  try {
    const parsed = new URL(candidate);
    return parsed.hostname.includes('.');
  } catch {
    return false;
  }
}

export function validateLeadForm(values: LeadFormValues): ValidationResult {
  const errors: LeadFormErrors = {};

  if (values.companyFaxTrap.trim().length > 0) {
    errors._form = 'spam_detected';
    return { valid: false, errors };
  }

  if (values.fullName.trim().length < 2) {
    errors.fullName = 'required_name';
  }

  const emailTrimmed = values.email.trim();
  if (!emailTrimmed) {
    errors.email = 'required_email';
  } else if (!isValidEmail(emailTrimmed)) {
    errors.email = 'invalid_email';
  }

  const phoneTrimmed = values.phone.trim();
  if (!phoneTrimmed) {
    errors.phone = 'required_phone';
  } else if (!isValidPhone(phoneTrimmed)) {
    errors.phone = 'invalid_phone';
  }

  if (values.company.trim().length < 2) {
    errors.company = 'required_company';
  }

  if (!isValidOptionalUrl(values.websiteUrl)) {
    errors.websiteUrl = 'invalid_url';
  }

  if (!values.serviceRequired) {
    errors.serviceRequired = 'required_service';
  }

  const detailsTrimmed = values.projectDetails.trim();
  if (!detailsTrimmed) {
    errors.projectDetails = 'required_details';
  } else if (detailsTrimmed.length < 15) {
    errors.projectDetails = 'short_details';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function buildMailtoHref(
  recipientEmail: string,
  values: LeadFormValues,
  serviceLabel: string,
  budgetLabel: string
): string {
  const subject = encodeURIComponent(
    `Project Enquiry: ${serviceLabel} — ${values.company.trim() || values.fullName.trim()}`
  );
  const lines = [
    `Full Name: ${values.fullName.trim()}`,
    `Business Email: ${values.email.trim()}`,
    `Phone / WhatsApp: ${values.phone.trim()}`,
    `Company / Business: ${values.company.trim()}`,
    `Website URL: ${values.websiteUrl.trim() || 'Not provided'}`,
    `Service Required: ${serviceLabel}`,
    `Approximate Scope: ${budgetLabel || 'Not specified'}`,
    '',
    'Project Details:',
    values.projectDetails.trim(),
  ];
  const body = encodeURIComponent(lines.join('\n'));
  return `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
}
