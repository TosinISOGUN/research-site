// Runs after `vite build` and the server build. It puts each page's rendered HTML into dist/
// so search engines and link previews see the content without running JavaScript, then writes
// sitemap.xml and robots.txt using the site address from .env (VITE_SITE_URL).
import { readFileSync, writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { loadEnv } from 'vite';

const PAGES = [
  { file: 'index.html', key: 'home', path: '' },
  { file: 'research.html', key: 'research', path: 'research.html' },
  { file: 'publications.html', key: 'publications', path: 'publications.html' },
  { file: 'teaching.html', key: 'teaching', path: 'teaching.html' },
  { file: 'cv.html', key: 'cv', path: 'cv.html' },
  { file: 'contact.html', key: 'contact', path: 'contact.html' },
  { file: '404.html', key: 'notfound', path: null }, // rendered, but kept out of the sitemap
];

const siteUrl = loadEnv('production', process.cwd(), 'VITE_').VITE_SITE_URL;
if (!siteUrl) throw new Error('Set VITE_SITE_URL in .env');

const { render } = await import(pathToFileURL(resolve('dist-server/entry-server.js')).href);

for (const page of PAGES) {
  const file = resolve('dist', page.file);
  const html = readFileSync(file, 'utf8');
  const marker = '<div id="root"></div>';
  if (!html.includes(marker)) throw new Error(`${page.file}: root element not found`);
  writeFileSync(file, html.replace(marker, `<div id="root">${render(page.key)}</div>`));
}

const today = new Date().toISOString().slice(0, 10);
const urls = PAGES.filter((p) => p.path !== null).map((p) => `  <url><loc>${siteUrl}${p.path}</loc><lastmod>${today}</lastmod></url>`).join('\n');
writeFileSync(
  resolve('dist/sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
writeFileSync(resolve('dist/robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}sitemap.xml\n`);

console.log(`Pre-rendered ${PAGES.length} pages, wrote sitemap.xml and robots.txt for ${siteUrl}`);
