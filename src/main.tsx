import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import '@fontsource/instrument-serif/400.css';
import '@fontsource/instrument-serif/400-italic.css';
import '@fontsource-variable/geist';
import './styles.css';
import type { PageKey } from './site';
import { Layout } from './components/Layout';
import { PAGES } from './pages';

const key = (document.body.dataset.page ?? 'home') as PageKey;
const Page = PAGES[key] ?? PAGES.home;
const root = document.getElementById('root')!;

const app = (
  <StrictMode>
    <Layout current={key}>
      <Page />
    </Layout>
  </StrictMode>
);

// Installable app and offline copy of visited pages (see public/sw.js). Not used in `npm run dev`.
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {
      // Registration can fail in private windows or unsupported contexts; the site works without it.
    });
  });
}

// The built site is pre-rendered (see scripts/prerender.mjs), so the HTML already holds the
// content for search engines. Hydrate it when present; in `npm run dev` the root is empty.
if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
