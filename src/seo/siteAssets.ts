import {
  CANONICAL_ENTITY_DEFINITION,
  LAST_UPDATED_LABEL,
  SITE_CONFIG,
  SITE_URL,
} from '../config/siteConfig';
import { en } from '../i18n/en';
import { ALL_ROUTES, buildCanonicalUrl, GUIDE_ROUTES, type PageRoute } from '../utils/routing';

const LAST_MODIFIED_ISO = '2026-11-23';

export function generateSitemapXml(routes: readonly PageRoute[] = ALL_ROUTES): string {
  const entries = routes.flatMap((route) => {
    const enUrl = buildCanonicalUrl(route, 'en', SITE_URL);
    const urUrl = buildCanonicalUrl(route, 'ur', SITE_URL);

    return (['en', 'ur'] as const).map((lang) => {
      const loc = lang === 'en' ? enUrl : urUrl;
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${LAST_MODIFIED_ISO}</lastmod>
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />
    <xhtml:link rel="alternate" hreflang="ur" href="${urUrl}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}" />
  </url>`;
    });
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`;
}

export function generateRobotsTxt(): string {
  return `# robots.txt for Khan Marketings (${SITE_URL})
# Owner note: After domain setup, verify this file is accessible at ${SITE_URL}/robots.txt

User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
}

export function generateLlmsTxt(routes: readonly PageRoute[] = ALL_ROUTES): string {
  const routeLines = routes
    .map((route) => {
      const url = buildCanonicalUrl(route, 'en', SITE_URL);
      const urUrl = buildCanonicalUrl(route, 'ur', SITE_URL);
      const meta = en.meta[route];
      return `- [${meta.title}](${url}) ([Urdu](${urUrl})): ${meta.description}`;
    })
    .join('\n');

  return `# Khan Marketings (${SITE_CONFIG.brandShort})

> ${CANONICAL_ENTITY_DEFINITION}

- Website: ${SITE_URL}/
- WhatsApp & Phone: ${SITE_CONFIG.phoneDisplay} (${SITE_CONFIG.whatsappHref})
- Email: ${SITE_CONFIG.recipientEmail}
- Service Area: ${SITE_CONFIG.servingArea}
- Languages: English (\`/\`) and Urdu RTL (\`/ur\`)
- Last Updated: ${LAST_UPDATED_LABEL}

## Key Pages

${routeLines}

## Full Catalog & FAQs

For the complete 40-service directory, Pakistani audience tracks, and honest agency disclosures, see [${SITE_URL}/llms-full.txt](${SITE_URL}/llms-full.txt).
`;
}

export function generateLlmsFullTxt(routes: readonly PageRoute[] = ALL_ROUTES): string {
  const header = generateLlmsTxt(routes);

  const audienceSection = en.home.whoWeHelp.cards
    .map(
      (card) =>
        `### ${card.audience} — ${card.hook}\n${card.description}\n- Services: ${card.offers.join('; ')}`
    )
    .join('\n\n');

  const servicesSection = en.home.fullServiceDirectory.items
    .map(
      (item) =>
        `- **${item.number} ${item.title}** (${item.categoryLabel}): ${item.summary} Built for: ${item.whoItIsFor}. Includes: ${item.deliverables.join('; ')}.`
    )
    .join('\n');

  const faqSection = en.home.faq.items
    .map((faq) => `### ${faq.question}\n${faq.answer}`)
    .join('\n\n');

  const guidesSection = GUIDE_ROUTES.map((route) => {
    const article = en.guideArticles[route];
    const url = buildCanonicalUrl(route, 'en', SITE_URL);
    return `### ${article.number}. [${article.title}](${url})\n${article.answerFirstSummary}`;
  }).join('\n\n');

  return `${header}

## Who Khan Marketings Helps

${audienceSection}

## Complete 40-Service Directory

${servicesSection}

## Practical Digital Growth Guides

${guidesSection}

## Frequently Asked Questions

${faqSection}

## Honesty Policy

${en.footer.honestyDisclosure}
`;
}

export function generateHtaccess(): string {
  return `# Khan Marketings — Apache / Hostinger / cPanel Static Hosting Rules
Options -MultiViews
RewriteEngine On

# Force HTTPS when hosted over SSL
RewriteCond %{HTTPS} !=on
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Legacy /services/* redirects to canonical top-level SEO paths
RewriteRule ^services/website-development/?$ /website-development [R=301,L]
RewriteRule ^services/seo/?$ /seo [R=301,L]
RewriteRule ^services/social-media-marketing/?$ /social-media-marketing [R=301,L]

# Custom static 404 page
ErrorDocument 404 /404.html

# Serve prerendered clean-URL directory index files before falling back
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Gzip / Deflate Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json image/svg+xml
</IfModule>

# Browser Caching for Static Assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/html "access plus 0 seconds"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 month"
  ExpiresByType font/woff2 "access plus 1 year"
</IfModule>
`;
}

export function generateNetlifyRedirects(routes: readonly PageRoute[] = ALL_ROUTES): string {
  const staticLines = routes
    .filter((r) => r !== 'home')
    .flatMap((route) => {
      const enPath = buildCanonicalUrl(route, 'en', '').replace(/\/+$/, '');
      const urPath = buildCanonicalUrl(route, 'ur', '').replace(/\/+$/, '');
      return [`${enPath} ${enPath}/index.html 200`, `${urPath} ${urPath}/index.html 200`];
    });

  return `# Khan Marketings — Netlify / Cloudflare Pages Redirects
/services/website-development /website-development 301!
/services/seo /seo 301!
/services/social-media-marketing /social-media-marketing 301!
/ur /ur/index.html 200
${staticLines.join('\n')}
/* /index.html 200
`;
}
