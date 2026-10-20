// Draws the 1200x630 link-preview image for each inner page into public/images/share/.
// The home page keeps its own card, public/images/og-card.png.
//
// Not part of `npm run build`: the images are committed, so re-run this only when the wording below
// or the portrait changes. It needs puppeteer-core and a local Chrome or Edge:
//
//   npm install --no-save puppeteer-core
//   CHROME="C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" node scripts/share-cards.mjs
//
// Then keep the og:image alt text in each HTML file in step with the `alt` fields here.
import { mkdirSync, mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { pathToFileURL } from 'node:url';
import { join, resolve } from 'node:path';
import puppeteer from 'puppeteer-core';

const chrome = process.env.CHROME;
if (!chrome) throw new Error('Set CHROME to the path of a Chrome or Edge executable');

const file = (p) => pathToFileURL(resolve(p)).href;
const fonts = {
  serif: file('node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2'),
  sans: file('node_modules/@fontsource-variable/geist/files/geist-latin-wght-normal.woff2'),
};
const portrait = file('src/files/Photograph - Oluwatomisin Isogun.jpg');

// `visual` is either 'portrait' or a figure from public/images/figures.
const cards = [
  {
    name: 'research',
    title: 'Research',
    lines: 'Research',
    text: 'From computer-vision speed estimation to TinyML deployment fidelity.',
    visual: 'tinyml-architecture.jpg',
  },
  {
    name: 'publications',
    title: 'Publications',
    lines: 'Publications',
    text: 'Peer-reviewed work on value-aware TinyML for environmental monitoring, with open code.',
    visual: 'tinyml-communication.jpg',
  },
  {
    name: 'teaching',
    title: 'Teaching and service',
    lines: 'Teaching and<br>service',
    text: 'Tutoring, mentoring and student leadership.',
    visual: 'portrait',
  },
  {
    name: 'cv',
    title: 'CV',
    lines: 'CV',
    text: 'Education, honours, certifications and skills.',
    visual: 'portrait',
  },
  {
    name: 'contact',
    title: 'Contact',
    lines: 'Contact',
    text: 'Applying for 2027 entry to MSc programmes and to PhD programmes that admit from a bachelor’s degree.',
    visual: 'portrait',
  },
];

function html(card) {
  const visual =
    card.visual === 'portrait'
      ? `<div class="portrait"><img src="${portrait}"></div>`
      : `<div class="figure"><img src="${file(`public/images/figures/${card.visual}`)}"></div>`;
  return `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:'Instrument Serif';src:url('${fonts.serif}') format('woff2');}
@font-face{font-family:'Geist';src:url('${fonts.sans}') format('woff2');font-weight:100 900;}
*{box-sizing:border-box}
html,body{margin:0;width:1200px;height:630px;overflow:hidden}
body{background:#f6f7f3;color:#121a16;font-family:'Geist',sans-serif;position:relative}
.accent{position:absolute;left:0;top:0;bottom:0;width:14px;background:#1d5c4a}
.text{position:absolute;left:92px;top:0;bottom:0;width:600px;display:flex;flex-direction:column;justify-content:center}
.kicker{font-size:22px;letter-spacing:.14em;text-transform:uppercase;color:#1d5c4a;font-weight:600;margin-bottom:26px}
.title{font-family:'Instrument Serif',serif;font-weight:400;font-size:112px;line-height:.98;letter-spacing:-.02em;margin:0 0 34px}
.tag{font-size:30px;line-height:1.4;color:#5a665f;margin:0;max-width:560px}
.url{position:absolute;left:92px;bottom:46px;font-size:22px;color:#5a665f}
.portrait{position:absolute;right:92px;top:115px;width:400px;height:400px;border-radius:50%;overflow:hidden;background:#eaefe9;box-shadow:0 0 0 10px #f6f7f3,0 0 0 14px #1d5c4a}
.portrait img{width:100%;height:100%;object-fit:cover;object-position:center 8%}
.figure{position:absolute;right:70px;top:50%;width:440px;transform:translateY(-50%);padding:14px;border:1px solid #dde3dc;border-radius:14px;background:#fff;box-shadow:0 18px 40px rgba(18,26,22,.12)}
.figure img{display:block;width:100%;height:auto}
</style></head><body>
<div class="accent"></div>
<div class="text">
  <div class="kicker">Oluwatomisin Isogun</div>
  <h1 class="title">${card.lines}</h1>
  <p class="tag">${card.text}</p>
</div>
<div class="url">academic-portfolio.isogunlabs.com</div>
${visual}
</body></html>`;
}

mkdirSync('public/images/share', { recursive: true });
// The card is opened from a real file: a page made with setContent may not load local images.
const temp = mkdtempSync(join(tmpdir(), 'share-cards-'));
const browser = await puppeteer.launch({ executablePath: chrome, headless: 'new', args: ['--allow-file-access-from-files'] });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });

for (const card of cards) {
  const source = join(temp, `${card.name}.html`);
  writeFileSync(source, html(card));
  await page.goto(pathToFileURL(source).href, { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.fonts.ready);
  const out = `public/images/share/${card.name}.png`;
  await page.screenshot({ path: out, type: 'png', clip: { x: 0, y: 0, width: 1200, height: 630 } });
  console.log('wrote', out);
}
await browser.close();
