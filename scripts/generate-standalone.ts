import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import * as esbuild from 'esbuild';
import { SITE_CONFIG } from '../src/config/siteConfig';
import { en } from '../src/i18n/en';

const rootDir = path.resolve(process.cwd());
const distAssetsDir = path.resolve(rootDir, 'dist', 'assets');
const outDir = path.resolve(rootDir, 'exports');
const outFile = path.join(outDir, 'khansmarketing.html');

const skipVite = process.argv.includes('--skip-vite');

function findCompiledCss(): string {
  if (!fs.existsSync(distAssetsDir)) {
    return '';
  }
  const cssFiles = fs
    .readdirSync(distAssetsDir)
    .filter((name) => name.endsWith('.css'))
    .sort();
  return cssFiles.map((file) => fs.readFileSync(path.join(distAssetsDir, file), 'utf8')).join('\n');
}

async function main() {
  if (!skipVite || !findCompiledCss()) {
    execSync('npx vite build', { cwd: rootDir, stdio: 'inherit' });
  }

  const compiledCss = findCompiledCss();
  if (!compiledCss) {
    throw new Error('Compiled CSS could not be found in dist/assets.');
  }

  const bundleResult = await esbuild.build({
    entryPoints: [path.resolve(rootDir, 'src', 'main.tsx')],
    bundle: true,
    minify: true,
    format: 'iife',
    platform: 'browser',
    target: ['es2020'],
    jsx: 'automatic',
    write: false,
    define: {
      'process.env.NODE_ENV': '"production"',
    },
    loader: {
      '.css': 'empty',
    },
    alias: {
      '@': rootDir,
    },
  });

  const bundledJs = bundleResult.outputFiles?.[0]?.text;
  if (!bundledJs) {
    throw new Error('esbuild produced an empty JavaScript bundle.');
  }

  const faviconPath = path.resolve(rootDir, 'public', 'assets', 'favicon.svg');
  const faviconSvg = fs.existsSync(faviconPath)
    ? fs.readFileSync(faviconPath, 'utf8').trim()
    : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="12" fill="#111C18"/><path d="M16 44V20M27 20L17.5 31.5L28 44" stroke="#F7F4EE" stroke-width="3.2" stroke-linecap="square"/><path d="M32 44V22L40.5 35L49 22V44" stroke="#C58F38" stroke-width="3.2" stroke-linecap="square"/></svg>`;
  const faviconDataUri = `data:image/svg+xml,${encodeURIComponent(faviconSvg)}`;

  const safeCss = compiledCss.replace(/<\/style>/gi, '<\\/style>');
  const safeJs = bundledJs.replace(/<\/script>/gi, '<\\/script>');

  const escapeAttr = (value: string) =>
    value
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

  const html = `<!doctype html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <title>${escapeAttr(en.meta.home.title)}</title>
    <meta name="description" content="${escapeAttr(en.meta.home.description)}" />
    <meta property="og:title" content="${escapeAttr(en.meta.home.title)}" />
    <meta property="og:description" content="${escapeAttr(en.meta.home.description)}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://${SITE_CONFIG.domain}" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="icon" type="image/svg+xml" href="${faviconDataUri}" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=JetBrains+Mono:wght@400;500&family=Noto+Naskh+Arabic:wght@400;500;600;700&family=Noto+Nastaliq+Urdu:wght@400;600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <style>${safeCss}</style>
  </head>
  <body>
    <div id="root"></div>
    <script>window.__KM_STANDALONE__=true;</script>
    <script>${safeJs}</script>
  </body>
</html>
`;

  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outFile, html, 'utf8');
  const sizeKb = (Buffer.byteLength(html, 'utf8') / 1024).toFixed(1);
  console.log(`Generated complete standalone HTML: exports/khansmarketing.html (${sizeKb} KB)`);
}

main().catch((err) => {
  console.error('Failed to generate standalone HTML:', err);
  process.exit(1);
});
