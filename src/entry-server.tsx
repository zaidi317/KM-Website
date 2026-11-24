import { renderToString } from 'react-dom/server';
import App from './App';
import type { Language } from './i18n/types';
import type { PageRoute } from './utils/routing';

export function renderAppHtml(route: PageRoute, language: Language): string {
  return renderToString(<App initialRoute={route} initialLanguage={language} />);
}
