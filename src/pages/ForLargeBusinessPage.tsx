import React from 'react';
import type { Language, TranslationDictionary } from '../i18n/types';
import type { ServiceOption } from '../utils/formValidation';
import type { PageRoute } from '../utils/routing';
import { AudienceLandingPage } from './AudienceLandingPage';

interface ForLargeBusinessPageProps {
  language?: Language;
  t: TranslationDictionary;
  onNavigate: (route: PageRoute) => void;
  onRequestServiceScope: (service: ServiceOption) => void;
  onBookCall: () => void;
}

export const ForLargeBusinessPage: React.FC<ForLargeBusinessPageProps> = ({
  language = 'en',
  t,
  onNavigate,
  onRequestServiceScope,
  onBookCall,
}) => (
  <AudienceLandingPage
    language={language}
    t={t}
    content={t.forLargeBusinessPage}
    onNavigate={onNavigate}
    onRequestServiceScope={onRequestServiceScope}
    onBookCall={onBookCall}
  />
);
