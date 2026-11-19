import React from 'react';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { LeadForm } from '../components/LeadForm';
import { Reveal } from '../components/MotionPrimitives';
import { SITE_CONFIG } from '../config/siteConfig';
import type { TranslationDictionary } from '../i18n/types';
import type { ServiceOption } from '../utils/formValidation';
import type { ToastInput } from '../utils/toastQueue';

interface ContactPageProps {
  t: TranslationDictionary;
  defaultService?: ServiceOption;
  onBookCall: () => void;
  onNotify?: (toast: ToastInput) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  t,
  defaultService,
  onBookCall,
  onNotify,
}) => {
  const p = t.contactPage;

  return (
    <div>
      {/* Header */}
      <section className="bg-[#111C18] text-[#F7F4EE] border-b border-[#253A32] py-14 sm:py-18">
        <Reveal className="mx-auto max-w-[1200px] px-4 sm:px-6 max-w-3xl space-y-4">
          <p className="text-xs font-semibold text-[#C58F38]">{p.eyebrow}</p>
          <h1 className="font-display text-3xl sm:text-5xl font-medium tracking-tight leading-[1.1]">
            {p.headline}
          </h1>
          <p className="text-base sm:text-lg text-[#A6B5AF] leading-relaxed">
            {p.subheadline}
          </p>
        </Reveal>
      </section>

      {/* Main Split */}
      <section className="bg-[#FAF8F5] py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column */}
          <Reveal className="lg:col-span-5 space-y-8">
            <div className="rounded-2xl border border-[#E2DDD3] bg-white p-6 sm:p-7 space-y-6">
              <h2 className="font-display text-xl font-medium text-[#111C18]">
                {p.directInfo.title}
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 mt-1 text-[#164237] shrink-0" aria-hidden="true" />
                  <div className="space-y-1">
                    <div className="text-xs font-medium text-[#4B5954]">
                      {p.directInfo.phoneLabel}
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={SITE_CONFIG.phoneHref}
                        dir="ltr"
                        className="font-mono-num text-lg font-semibold text-[#111C18] hover:text-[#164237] transition-colors"
                      >
                        {SITE_CONFIG.phoneRaw}
                      </a>
                      <a
                        href={SITE_CONFIG.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#164237] hover:text-[#8A5E1B]"
                      >
                        <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                    <p className="text-xs text-[#6B7973]">{p.directInfo.phoneHint}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-4 border-t border-[#F1EDE6]">
                  <Mail className="w-4 h-4 mt-1 text-[#8A5E1B] shrink-0" aria-hidden="true" />
                  <div className="space-y-0.5 min-w-0">
                    <div className="text-xs font-medium text-[#4B5954]">
                      {p.directInfo.emailLabel}
                    </div>
                    <a
                      href={`mailto:${SITE_CONFIG.recipientEmail}`}
                      className="font-mono-num font-medium text-[#111C18] hover:text-[#8A5E1B] break-all"
                    >
                      {SITE_CONFIG.recipientEmail}
                    </a>
                    <p className="text-xs text-[#6B7973]">{p.directInfo.emailHint}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[#E2DDD3] bg-[#FAF8F5] p-5 space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#111C18]">
                  <Phone className="w-4 h-4 text-[#8A5E1B] shrink-0" aria-hidden="true" />
                  <span>{p.directInfo.bookingTitle}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#4B5954] leading-relaxed">
                  {p.directInfo.bookingBody}
                </p>
                <button
                  type="button"
                  onClick={onBookCall}
                  className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#C58F38] text-[#111C18] text-xs sm:text-sm font-semibold hover:bg-[#D4A14E] transition-colors whitespace-nowrap cursor-pointer"
                >
                  {p.directInfo.bookingCta}
                </button>
              </div>
            </div>

            {/* What Happens After Submitting */}
            <div className="rounded-2xl border border-[#E2DDD3] bg-white p-6 sm:p-7 space-y-5">
              <h2 className="font-display text-xl font-medium text-[#111C18]">
                {p.afterSubmit.title}
              </h2>
              <div className="space-y-4">
                {p.afterSubmit.steps.map((step) => (
                  <div
                    key={step.step}
                    className="flex gap-4 items-start border-t border-[#F1EDE6] pt-4 first:border-t-0 first:pt-0"
                  >
                    <span className="font-mono-num text-xs font-semibold text-[#8A5E1B] pt-0.5 shrink-0">
                      {step.step}
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold text-[#111C18]">{step.title}</h3>
                      <p className="text-xs sm:text-sm text-[#4B5954] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right Column: Lead Generation Form */}
          <Reveal delay={0.08} className="lg:col-span-7">
            <LeadForm t={t} defaultService={defaultService} onNotify={onNotify} />
          </Reveal>
        </div>
      </section>
    </div>
  );
};
