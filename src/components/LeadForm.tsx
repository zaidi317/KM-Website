import React, { useEffect, useState } from 'react';
import { AlertCircle, CheckCircle2, Mail, RotateCcw } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import type { TranslationDictionary } from '../i18n/types';
import {
  INITIAL_LEAD_FORM_VALUES,
  buildMailtoHref,
  validateLeadForm,
  type BudgetOption,
  type LeadFormErrors,
  type LeadFormValues,
  type ServiceOption,
} from '../utils/formValidation';

import type { ToastInput } from '../utils/toastQueue';

interface LeadFormProps {
  t: TranslationDictionary;
  defaultService?: ServiceOption;
  onNotify?: (toast: ToastInput) => void;
}

type SubmissionState =
  | { status: 'idle' }
  | { status: 'submitting' }
  | { status: 'dev_validated'; submittedValues: LeadFormValues }
  | { status: 'live_success'; submittedValues: LeadFormValues }
  | { status: 'live_error'; submittedValues: LeadFormValues };

export const LeadForm: React.FC<LeadFormProps> = ({
  t,
  defaultService = 'website',
  onNotify,
}) => {
  const [values, setValues] = useState<LeadFormValues>({
    ...INITIAL_LEAD_FORM_VALUES,
    serviceRequired: defaultService,
  });
  const [errors, setErrors] = useState<LeadFormErrors>({});
  const [submission, setSubmission] = useState<SubmissionState>({ status: 'idle' });

  useEffect(() => {
    setValues((prev) => ({ ...prev, serviceRequired: defaultService }));
  }, [defaultService]);

  const formText = t.contactPage.form;

  const updateField = <K extends keyof LeadFormValues>(field: K, value: LeadFormValues[K]) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = validateLeadForm(values);

    if (!result.valid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    setSubmission({ status: 'submitting' });

    if (!SITE_CONFIG.formEndpointUrl) {
      await new Promise((resolve) => setTimeout(resolve, 250));
      setSubmission({ status: 'dev_validated', submittedValues: { ...values } });
      onNotify?.({
        title: t.toast.enquiryValidatedTitle,
        message: t.toast.enquiryValidatedMessage,
        variant: 'success',
      });
      return;
    }

    try {
      const response = await fetch(SITE_CONFIG.formEndpointUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          recipientEmail: SITE_CONFIG.recipientEmail,
          fullName: values.fullName.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          company: values.company.trim(),
          websiteUrl: values.websiteUrl.trim(),
          serviceRequired: values.serviceRequired,
          budget: values.budget,
          projectDetails: values.projectDetails.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      setSubmission({ status: 'live_success', submittedValues: { ...values } });
      onNotify?.({
        title: t.toast.enquirySuccessTitle,
        message: t.toast.enquirySuccessMessage,
        variant: 'success',
      });
    } catch {
      setSubmission({ status: 'live_error', submittedValues: { ...values } });
    }
  };

  const handleReset = () => {
    setSubmission({ status: 'idle' });
    setErrors({});
  };

  if (submission.status === 'dev_validated') {
    const sv = submission.submittedValues;
    const serviceLabel = formText.serviceOptions[sv.serviceRequired];
    const budgetLabel = formText.budgetOptions[sv.budget];
    const mailtoHref = buildMailtoHref(
      SITE_CONFIG.recipientEmail,
      sv,
      serviceLabel,
      budgetLabel
    );

    return (
      <div
        className="rounded-2xl border border-[#E2DDD3] bg-white p-6 sm:p-8 space-y-5"
        role="status"
        aria-live="polite"
      >
        <div className="text-xs font-semibold text-[#8A5E1B]">
          {formText.devConfirmation.badge}
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold text-[#111C18]">
          {formText.devConfirmation.title}
        </h3>
        <p className="text-sm sm:text-base text-[#4B5954] leading-relaxed">
          {formText.devConfirmation.body}
        </p>

        <div className="rounded-lg border border-[#E2DDD3] bg-[#FAF8F5] p-4 text-xs sm:text-sm space-y-1">
          <div className="text-[#4B5954]">{formText.devConfirmation.configHint}</div>
          <div className="font-mono-num font-medium text-[#111C18]">
            {SITE_CONFIG.recipientEmail}
          </div>
        </div>

        <div className="border-t border-[#E2DDD3] pt-4 space-y-2 text-sm">
          <div className="font-semibold text-[#111C18]">
            {formText.devConfirmation.summaryTitle}
          </div>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs sm:text-sm">
            <div>
              <dt className="text-[#4B5954]">
                {formText.fields.fullName.label.replace(/\s*\*$/, '')}
              </dt>
              <dd className="font-medium text-[#111C18]">{sv.fullName}</dd>
            </div>
            <div>
              <dt className="text-[#4B5954]">
                {formText.fields.company.label.replace(/\s*\*$/, '')}
              </dt>
              <dd className="font-medium text-[#111C18]">{sv.company}</dd>
            </div>
            <div>
              <dt className="text-[#4B5954]">
                {formText.fields.email.label.replace(/\s*\*$/, '')}
              </dt>
              <dd className="font-medium text-[#111C18]">{sv.email}</dd>
            </div>
            <div>
              <dt className="text-[#4B5954]">
                {formText.fields.serviceRequired.label.replace(/\s*\*$/, '')}
              </dt>
              <dd className="font-medium text-[#111C18]">{serviceLabel}</dd>
            </div>
          </dl>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={mailtoHref}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#164237] text-[#F7F4EE] text-sm font-semibold hover:bg-[#1D5547] transition-colors"
          >
            <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{formText.devConfirmation.mailtoButton}</span>
          </a>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-[#E2DDD3] text-sm font-medium text-[#4B5954] hover:text-[#111C18] transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{formText.devConfirmation.resetButton}</span>
          </button>
        </div>
      </div>
    );
  }

  if (submission.status === 'live_success') {
    return (
      <div
        className="rounded-2xl border border-[#E2DDD3] bg-white p-6 sm:p-8 space-y-4"
        role="status"
        aria-live="polite"
      >
        <div className="inline-flex items-center gap-2 text-[#164237] font-semibold text-sm">
          <CheckCircle2 className="w-5 h-5 shrink-0" aria-hidden="true" />
          <span>{formText.liveSuccess.title}</span>
        </div>
        <p className="text-sm sm:text-base text-[#4B5954] leading-relaxed">
          {formText.liveSuccess.body}
        </p>
        <button
          type="button"
          onClick={() => {
            setValues({ ...INITIAL_LEAD_FORM_VALUES, serviceRequired: defaultService });
            handleReset();
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-[#E2DDD3] text-sm font-medium text-[#111C18] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
        >
          {formText.liveSuccess.resetButton}
        </button>
      </div>
    );
  }

  const inputBase =
    'w-full rounded-md border bg-white px-3.5 py-2.5 text-sm sm:text-base text-[#111C18] placeholder:text-[#80928B] focus:outline-none focus:ring-2 focus:ring-[#C58F38] transition-colors';

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-[#E2DDD3] bg-white p-6 sm:p-8 space-y-5"
    >
      <div className="space-y-1.5 border-b border-[#F1EDE6] pb-4">
        <h2 className="font-display text-2xl font-medium text-[#111C18]">
          {formText.title}
        </h2>
        <p className="text-xs sm:text-sm text-[#4B5954]">{formText.subtitle}</p>
      </div>

      {submission.status === 'live_error' && (
        <div
          className="rounded-lg border border-[#B91C1C]/30 bg-[#FEF2F2] p-4 space-y-2 text-sm text-[#991B1B]"
          role="alert"
        >
          <div className="font-semibold flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{formText.liveFailure.title}</span>
          </div>
          <p>{formText.liveFailure.body}</p>
          <a
            href={buildMailtoHref(
              SITE_CONFIG.recipientEmail,
              submission.submittedValues,
              formText.serviceOptions[submission.submittedValues.serviceRequired],
              formText.budgetOptions[submission.submittedValues.budget]
            )}
            className="inline-flex items-center gap-1.5 font-semibold underline"
          >
            {formText.liveFailure.mailtoButton}
          </a>
        </div>
      )}

      {errors._form && (
        <div
          className="rounded-lg border border-[#B91C1C]/30 bg-[#FEF2F2] p-3 text-sm text-[#991B1B]"
          role="alert"
        >
          {formText.errors[errors._form]}
        </div>
      )}

      {/* Anti-spam honeypot field */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="km-company-fax">Leave this field blank</label>
        <input
          id="km-company-fax"
          name="companyFaxTrap"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.companyFaxTrap}
          onChange={(e) => updateField('companyFaxTrap', e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="km-full-name"
            className="block text-sm font-medium text-[#111C18] mb-1.5"
          >
            {formText.fields.fullName.label}
          </label>
          <input
            id="km-full-name"
            name="fullName"
            type="text"
            required
            value={values.fullName}
            onChange={(e) => updateField('fullName', e.target.value)}
            placeholder={formText.fields.fullName.placeholder}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? 'km-full-name-error' : undefined}
            className={`${inputBase} ${
              errors.fullName ? 'border-[#B91C1C]' : 'border-[#E2DDD3]'
            }`}
          />
          {errors.fullName && (
            <p id="km-full-name-error" className="mt-1.5 text-xs text-[#B91C1C]" role="alert">
              {formText.errors[errors.fullName]}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="km-email"
            className="block text-sm font-medium text-[#111C18] mb-1.5"
          >
            {formText.fields.email.label}
          </label>
          <input
            id="km-email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={(e) => updateField('email', e.target.value)}
            placeholder={formText.fields.email.placeholder}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'km-email-error' : undefined}
            className={`${inputBase} ${errors.email ? 'border-[#B91C1C]' : 'border-[#E2DDD3]'}`}
          />
          {errors.email && (
            <p id="km-email-error" className="mt-1.5 text-xs text-[#B91C1C]" role="alert">
              {formText.errors[errors.email]}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="km-phone"
            className="block text-sm font-medium text-[#111C18] mb-1.5"
          >
            {formText.fields.phone.label}
          </label>
          <input
            id="km-phone"
            name="phone"
            type="tel"
            required
            dir="ltr"
            value={values.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            placeholder={formText.fields.phone.placeholder}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'km-phone-error' : undefined}
            className={`${inputBase} ${errors.phone ? 'border-[#B91C1C]' : 'border-[#E2DDD3]'}`}
          />
          {errors.phone && (
            <p id="km-phone-error" className="mt-1.5 text-xs text-[#B91C1C]" role="alert">
              {formText.errors[errors.phone]}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="km-company"
            className="block text-sm font-medium text-[#111C18] mb-1.5"
          >
            {formText.fields.company.label}
          </label>
          <input
            id="km-company"
            name="company"
            type="text"
            required
            value={values.company}
            onChange={(e) => updateField('company', e.target.value)}
            placeholder={formText.fields.company.placeholder}
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? 'km-company-error' : undefined}
            className={`${inputBase} ${errors.company ? 'border-[#B91C1C]' : 'border-[#E2DDD3]'}`}
          />
          {errors.company && (
            <p id="km-company-error" className="mt-1.5 text-xs text-[#B91C1C]" role="alert">
              {formText.errors[errors.company]}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="km-website-url"
            className="flex items-baseline justify-between gap-2 text-sm font-medium text-[#111C18] mb-1.5"
          >
            <span>{formText.fields.websiteUrl.label}</span>
            <span className="text-xs font-normal text-[#4B5954]">
              {formText.fields.websiteUrl.optional}
            </span>
          </label>
          <input
            id="km-website-url"
            name="websiteUrl"
            type="url"
            dir="ltr"
            value={values.websiteUrl}
            onChange={(e) => updateField('websiteUrl', e.target.value)}
            placeholder={formText.fields.websiteUrl.placeholder}
            aria-invalid={Boolean(errors.websiteUrl)}
            aria-describedby={errors.websiteUrl ? 'km-website-url-error' : undefined}
            className={`${inputBase} ${
              errors.websiteUrl ? 'border-[#B91C1C]' : 'border-[#E2DDD3]'
            }`}
          />
          {errors.websiteUrl && (
            <p id="km-website-url-error" className="mt-1.5 text-xs text-[#B91C1C]" role="alert">
              {formText.errors[errors.websiteUrl]}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="km-service"
            className="block text-sm font-medium text-[#111C18] mb-1.5"
          >
            {formText.fields.serviceRequired.label}
          </label>
          <select
            id="km-service"
            name="serviceRequired"
            required
            value={values.serviceRequired}
            onChange={(e) => updateField('serviceRequired', e.target.value as ServiceOption)}
            className={`${inputBase} border-[#E2DDD3]`}
          >
            {(Object.keys(formText.serviceOptions) as ServiceOption[]).map((optionKey) => (
              <option key={optionKey} value={optionKey}>
                {formText.serviceOptions[optionKey]}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="km-budget"
          className="flex items-baseline justify-between gap-2 text-sm font-medium text-[#111C18] mb-1.5"
        >
          <span>{formText.fields.budget.label}</span>
          <span className="text-xs font-normal text-[#4B5954]">
            {formText.fields.budget.optional}
          </span>
        </label>
        <select
          id="km-budget"
          name="budget"
          value={values.budget}
          onChange={(e) => updateField('budget', e.target.value as BudgetOption)}
          className={`${inputBase} border-[#E2DDD3]`}
        >
          {(Object.keys(formText.budgetOptions) as BudgetOption[]).map((optionKey) => (
            <option key={optionKey || 'none'} value={optionKey}>
              {formText.budgetOptions[optionKey]}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="km-details"
          className="block text-sm font-medium text-[#111C18] mb-1.5"
        >
          {formText.fields.projectDetails.label}
        </label>
        <textarea
          id="km-details"
          name="projectDetails"
          rows={4}
          required
          value={values.projectDetails}
          onChange={(e) => updateField('projectDetails', e.target.value)}
          placeholder={formText.fields.projectDetails.placeholder}
          aria-invalid={Boolean(errors.projectDetails)}
          aria-describedby={errors.projectDetails ? 'km-details-error' : undefined}
          className={`${inputBase} resize-y ${
            errors.projectDetails ? 'border-[#B91C1C]' : 'border-[#E2DDD3]'
          }`}
        />
        {errors.projectDetails && (
          <p id="km-details-error" className="mt-1.5 text-xs text-[#B91C1C]" role="alert">
            {formText.errors[errors.projectDetails]}
          </p>
        )}
      </div>

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <button
          type="submit"
          disabled={submission.status === 'submitting'}
          className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#164237] text-[#F7F4EE] text-sm font-semibold hover:bg-[#1D5547] disabled:opacity-60 transition-colors whitespace-nowrap cursor-pointer"
        >
          {submission.status === 'submitting'
            ? formText.submittingLabel
            : formText.submitLabel}
        </button>
        <p className="text-xs text-[#4B5954]">{formText.privacyNote}</p>
      </div>
    </form>
  );
};
