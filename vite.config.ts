import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';

// Each page is a real HTML file, so every page has its own URL
// (e.g. /publications.html) that you can paste into an email.
const pages = ['index', 'research', 'publications', 'teaching', 'cv', 'contact'];
const root = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig(({ isSsrBuild }) => ({
  // './' makes the built site work from any sub-path (GitHub Pages, a university folder, Netlify...).
  base: './',
  plugins: [react()],
  // The server build used for pre-rendering would otherwise report BASE_URL as '/', so the
  // pre-rendered HTML would not match what the browser renders. Keep it './' in both.
  define: isSsrBuild ? { 'import.meta.env.BASE_URL': JSON.stringify('./') } : {},
  build: {
    rollupOptions: {
      input: isSsrBuild
        ? undefined
        : Object.fromEntries(pages.map((page) => [page, `${root}${page}.html`])),
    },
  },
}));
