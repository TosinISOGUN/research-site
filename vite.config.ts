import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

// Each page is a real HTML file, so every page has its own URL
// (e.g. /publications.html) that you can paste into an email.
const pages = ['index', 'research', 'publications', 'teaching', 'cv', 'contact', '404'];
const root = fileURLToPath(new URL('.', import.meta.url));

// "Last updated" in the footer: the month of the latest commit that touched the site's content
// (text, images or files). It needs full git history, so the deploy workflow checks out with
// fetch-depth 0. Outside a git checkout it falls back to the build date.
function lastUpdated(): string {
  let date = new Date();
  try {
    const iso = execSync('git log -1 --format=%cI -- src/data public/files public/images', {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    if (iso) date = new Date(iso);
  } catch {
    // Not a git checkout.
  }
  return date.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
}

export default defineConfig(({ isSsrBuild }) => ({
  // './' makes the built site work from any sub-path (GitHub Pages, a university folder, Netlify...).
  base: './',
  plugins: [react()],
  // The server build used for pre-rendering would otherwise report BASE_URL as '/', so the
  // pre-rendered HTML would not match what the browser renders. Keep it './' in both.
  define: {
    __BUILD_YEAR__: JSON.stringify(new Date().getFullYear()),
    __LAST_UPDATED__: JSON.stringify(lastUpdated()),
    ...(isSsrBuild ? { 'import.meta.env.BASE_URL': JSON.stringify('./') } : {}),
  },
  build: {
    rollupOptions: {
      input: isSsrBuild
        ? undefined
        : Object.fromEntries(pages.map((page) => [page, `${root}${page}.html`])),
    },
  },
}));
