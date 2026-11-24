import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { SITE_CONFIG } from '../src/config/siteConfig';
import { en } from '../src/i18n/en';
import type { Language } from '../src/i18n/types';
import { ur } from '../src/i18n/ur';
import {
  generateHtaccess,
  generateLlmsFullTxt,
  generateLlmsTxt,
  generateNetlifyRedirects,
  generateRobotsTxt,
  generateSitemapXml,
} from '../src/seo/siteAssets';
import { buildStructuredData } from '../src/seo/structuredData';
import {
  ALL_ROUTES,
  buildCanonicalUrl,
  buildLocalizedPath,
  isGuideRoute,
  type PageRoute,
} from '../src/utils/routing';

const rootDir = path.resolve(process.cwd());
const distDir = path.resolve(rootDir, 'dist');
const publicDir = path.resolve(rootDir, 'public');
const ssrEntryPath = path.resolve(rootDir, 'dist-ssr', 'entry-server.js');

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function stripInjectedSeoTags(headHtml: string): string {
  return headHtml
    .replace(/<title>[\s\S]*?<\/title>\s*/gi, '')
    .replace(/<meta\s+name="description"[^>]*>\s*/gi, '')
    .replace(/<meta\s+property="og:[^"]*"[^>]*>\s*/gi, '')
    .replace(/<meta\s+name="twitter:[^"]*"[^>]*>\s*/gi, '')
    .replace(/<link\s+rel="canonical"[^>]*>\s*/gi, '')
    .replace(/<link\s+rel="alternate"[^>]*>\s*/gi, '')
    .replace(/<script\s+type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>\s*/gi, '');
}

function buildHeadTags(route: PageRoute, language: Language): string {
  const dict = language === 'ur' ? ur : en;
  const meta = dict.meta[route];
  const canonicalUrl = buildCanonicalUrl(route, language);
  const enUrl = buildCanonicalUrl(route, 'en');
  const urUrl = buildCanonicalUrl(route, 'ur');
  const locale = language === 'ur' ? 'ur_PK' : 'en_PK';
  const jsonLd = JSON.stringify(buildStructuredData(route, language)).replace(
    /<\/script>/gi,
    '<\\/script>'
  );

  return [
    `<title>${escapeHtml(meta.title)}</title>`,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
    `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`,
    `<link rel="alternate" hreflang="en" href="${escapeHtml(enUrl)}" />`,
    `<link rel="alternate" hreflang="ur" href="${escapeHtml(urUrl)}" />`,
    `<link rel="alternate" hreflang="x-default" href="${escapeHtml(enUrl)}" />`,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
    `<meta property="og:type" content="${isGuideRoute(route) ? 'article' : 'website'}" />`,
    `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`,
    `<meta property="og:site_name" content="${escapeHtml(SITE_CONFIG.brandName)}" />`,
    `<meta property="og:locale" content="${locale}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`,
    `<script type="application/ld+json" id="km-jsonld">${jsonLd}</script>`,
  ].join('\n    ');
}

function getOutputFilePath(route: PageRoute, language: Language): string {
  const localizedPath = buildLocalizedPath(route, language);
  if (localizedPath === '/') {
    return path.join(distDir, 'index.html');
  }
  const cleanRel = localizedPath.replace(/^\/+/, '');
  return path.join(distDir, cleanRel, 'index.html');
}

function build404Html(templateHtml: string): string {
  const cleanHtml = templateHtml
    .replace(/<html[^>]*>/i, '<html lang="en" dir="ltr">')
    .replace(/<head>([\s\S]*?)<\/head>/i, (_match, headInner: string) => {
      const stripped = stripInjectedSeoTags(headInner).trim();
      return `<head>\n    ${stripped}\n    <title>Page Not Found | Khan Marketings</title>\n    <meta name="robots" content="noindex" />\n  </head>`;
    });

  const bodyContent = `<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;padding:2rem;background:#FAF8F5;color:#111C18;font-family:'Plus Jakarta Sans',system-ui,sans-serif;">
  <main style="max-width:560px;width:100%;background:#FFFFFF;border:1px solid #E2DDD3;border-radius:16px;padding:2.5rem;">
    <p style="font-size:12px;font-weight:600;color:#8A5E1B;margin:0 0 0.75rem;">404 · KHAN MARKETINGS</p>
    <h1 style="font-size:2rem;margin:0 0 0.75rem;line-height:1.2;">This page is not here.</h1>
    <p style="color:#4B5954;font-size:1rem;line-height:1.6;margin:0 0 1.5rem;">The link may have moved or been typed incorrectly. Visit the main English or Urdu page below, or message us directly on WhatsApp at <span dir="ltr">0321-2995766</span>.</p>
    <div style="display:flex;flex-wrap:wrap;gap:0.75rem;">
      <a href="/" style="display:inline-block;padding:0.75rem 1.25rem;background:#164237;color:#F7F4EE;border-radius:6px;text-decoration:none;font-weight:600;font-size:14px;">Go to Homepage (EN)</a>
      <a href="/ur" style="display:inline-block;padding:0.75rem 1.25rem;background:#C58F38;color:#111C18;border-radius:6px;text-decoration:none;font-weight:600;font-size:14px;">اردو صفحہ کھولیں</a>
    </div>
  </main>
</div>`;

  return cleanHtml.replace('<div id="root"></div>', `<div id="root">${bodyContent}</div>`);
}

async function main() {
  const templatePath = path.join(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error('dist/index.html not found. Run vite build first.');
  }
  if (!fs.existsSync(ssrEntryPath)) {
    throw new Error('dist-ssr/entry-server.js not found. Run vite build --ssr first.');
  }

  const templateHtml = fs.readFileSync(templatePath, 'utf8');
  const { renderAppHtml } = (await import(pathToFileURL(ssrEntryPath).href)) as {
    renderAppHtml: (route: PageRoute, language: Language) => string;
  };

  // Write generated SEO & hosting config files to public/ and dist/
  const generatedPublicFiles: Array<[string, string]> = [
    ['sitemap.xml', generateSitemapXml(ALL_ROUTES)],
    ['robots.txt', generateRobotsTxt()],
    ['llms.txt', generateLlmsTxt(ALL_ROUTES)],
    ['llms-full.txt', generateLlmsFullTxt(ALL_ROUTES)],
    ['.htaccess', generateHtaccess()],
    ['_redirects', generateNetlifyRedirects(ALL_ROUTES)],
  ];

  fs.mkdirSync(publicDir, { recursive: true });
  for (const [filename, content] of generatedPublicFiles) {
    fs.writeFileSync(path.join(publicDir, filename), content, 'utf8');
    fs.writeFileSync(path.join(distDir, filename), content, 'utf8');
  }

  let renderedCount = 0;
  for (const route of ALL_ROUTES) {
    for (const language of ['en', 'ur'] as const) {
      const appHtml = renderAppHtml(route, language);
      const dirAttr = language === 'ur' ? 'rtl' : 'ltr';
      const headTags = buildHeadTags(route, language);

      const pageHtml = templateHtml
        .replace(/<html[^>]*>/i, `<html lang="${language}" dir="${dirAttr}">`)
        .replace(/<head>([\s\S]*?)<\/head>/i, (_match, headInner: string) => {
          const stripped = stripInjectedSeoTags(headInner).trim();
          return `<head>\n    ${stripped}\n    ${headTags}\n  </head>`;
        })
        .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

      const outPath = getOutputFilePath(route, language);
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, pageHtml, 'utf8');
      renderedCount += 1;
    }
  }

  fs.writeFileSync(path.join(distDir, '404.html'), build404Html(templateHtml), 'utf8');
  console.log(
    `Prerendered ${renderedCount} bilingual static HTML pages + 404.html + sitemap/robots/llms/.htaccess/_redirects.`
  );
}

main().catch((error) => {
  console.error('Prerender failed:', error);
  process.exit(1);
});
