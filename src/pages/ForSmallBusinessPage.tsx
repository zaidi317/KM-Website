import React from 'react';
import type { Language, TranslationDictionary } from '../i18n/types';
import type { ServiceOption } from '../utils/formValidation';
import type { PageRoute } from '../utils/routing';
import { AudienceLandingPage } from './AudienceLandingPage';

interface ForSmallBusinessPageProps {
  language?: Language;
  t: TranslationDictionary;
  onNavigate: (route: PageRoute) => void;
  onRequestServiceScope: (service: ServiceOption) => void;
  onBookCall: () => void;
}

export const ForSmallBusinessPage: React.FC<ForSmallBusinessPageProps> = ({
  language = 'en',
  t,
  onNavigate,
  onRequestServiceScope,
  onBookCall,
}) => (
  <AudienceLandingPage
    language={language}
    t={t}
    content={t.forSmallBusinessPage}
    onNavigate={onNavigate}
    onRequestServiceScope={onRequestServiceScope}
    onBookCall={onBookCall}
  />
);
