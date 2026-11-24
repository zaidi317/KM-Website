import 'dotenv/config';
import express from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { generateChatReply } from './src/server/chatService.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createServer() {
  const app = express();
  const port = Number(process.env.PORT) || 3000;
  const isProd = process.env.NODE_ENV === 'production';

  app.use(express.json({ limit: '1mb' }));

  app.get('/api/health', (_req, res) => {
    res.json({ ok: true });
  });

  app.post('/api/chat', async (req, res) => {
    try {
      const result = await generateChatReply(req.body, process.env.GEMINI_API_KEY);
      res.json(result);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Unable to process chat request right now.';
      const status =
        message.includes('GEMINI_API_KEY')
          ? 503
          : message.includes('must') || message.includes('required')
            ? 400
            : 502;
      res.status(status).json({ error: message });
    }
  });

  const standaloneHtmlPath = path.resolve(__dirname, 'exports', 'khanmarketings.html');

  app.get('/khanmarketings.html', (_req, res) => {
    if (fs.existsSync(standaloneHtmlPath)) {
      res.type('text/html; charset=utf-8').sendFile(standaloneHtmlPath);
    } else {
      res.status(404).send('Standalone HTML not generated yet. Run npm run build:html.');
    }
  });

  app.get('/download-html', (_req, res) => {
    if (fs.existsSync(standaloneHtmlPath)) {
      res.download(standaloneHtmlPath, 'khanmarketings.html');
    } else {
      res.status(404).send('Standalone HTML not generated yet. Run npm run build:html.');
    }
  });

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(__dirname, 'dist');
    app.get('/services/website-development', (_req, res) => res.redirect(301, '/website-development'));
    app.get('/services/seo', (_req, res) => res.redirect(301, '/seo'));
    app.get('/services/social-media-marketing', (_req, res) => res.redirect(301, '/social-media-marketing'));
    app.use(express.static(distDir));
    app.get('*', (_req, res) => {
      const indexHtml = path.join(distDir, 'index.html');
      if (fs.existsSync(indexHtml)) {
        res.sendFile(indexHtml);
      } else {
        res.status(404).send('Build output not found. Run npm run build first.');
      }
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Khan Marketings server running on http://localhost:${port}`);
  });
}

createServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
