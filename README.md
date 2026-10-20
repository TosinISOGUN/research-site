# Research website: Oluwatomisin Isogun

An academic site in the style of a university faculty page, covering TinyML, computer vision and
time-series modelling. Built with Vite, React 19 and TypeScript, with no UI library or CSS framework.
Fonts (Instrument Serif and Geist) are bundled, so there are no third-party font requests.

## Pages

| URL | Component | Content |
| --- | --- | --- |
| `index.html` | `src/pages/Home.tsx` | Hero, at-a-glance figures, about, latest publication, research in brief, recent work |
| `research.html` | `src/pages/Research.tsx` | Research direction and the research-path timeline |
| `publications.html` | `src/pages/Publications.tsx` | Published work and manuscripts |
| `teaching.html` | `src/pages/Teaching.tsx` | Teaching, mentoring and service |
| `cv.html` | `src/pages/CV.tsx` | Education, honours, certifications, skills, CV |
| `contact.html` | `src/pages/Contact.tsx` | Email (with a copy button), profiles, availability |
| `404.html` | `src/pages/NotFound.tsx` | Page-not-found screen |

Each page is its own HTML file, so each has its own link. To add one: copy an HTML file and change
`data-page`, add it to `pages` in `vite.config.ts`, create the component in `src/pages/`, register it
in `src/main.tsx`, and add a link in `src/site.ts`.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-checks, builds the site, pre-renders every page into dist/
npm run preview    # serve the built site locally
npm run todos      # list placeholders still in the code
```

## Where to edit

All the text lives in `src/data/`; components rarely need touching.

| File | Controls |
| --- | --- |
| `profile.ts` | Name, tagline, photo, CV link, profiles, introduction, at-a-glance figures, availability |
| `research.ts` | Research direction (focus, questions, threads, keywords) and the research-interests list |
| `software.ts` | Open-source software, shown on the home and Publications pages |
| `results.ts` | Selected figures and tables on the Research page; images in `public/images/figures/` |
| `timeline.ts` | Research path, oldest first, ending with "Next" |
| `publications.ts` | Published papers and manuscripts (a section hides itself when empty) |
| `background.ts` | Education, teaching, honours, certifications, skills |
| `../site.ts` | Navigation links |
| `../styles.css` | All styling; colours and fonts are variables at the top |

Links with no URL are hidden in the built site. Under `npm run dev` they show as a dashed "add URL"
reminder. In `npm run todos`, a `TODO` comment is a note to the author and never appears on the site,
while `[add: ...]` is visible text that must be replaced before publishing.

## Files

Anything in `public/` is served as-is. Refer to it **without a leading slash**, for example
`photo: 'images/profile.jpg'` or `href: 'files/cv.pdf'`. Links to local files open in a new tab. For an
image inside a page, use `<img src={asset('images/figure.png')} alt="..." />` with `asset` from `src/lib.ts`.

## Deploy

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push to `main`. In the
repository, set Settings, Pages, Source to **GitHub Actions**. For a custom subdomain, add a `CNAME`
DNS record pointing to `<username>.github.io`, enter the domain under Custom domain in the same
settings, then enable Enforce HTTPS. The site uses relative paths, so it works from any sub-path or
domain, and `dist/` can also be served by any static host.

## Search and sharing

- The site address is set once, in `.env` (`VITE_SITE_URL`). It feeds the canonical links, social
  preview tags and structured data in the HTML files, and the sitemap and robots file. Change it
  there if the domain changes.
- `npm run build` pre-renders each page (`src/entry-server.tsx`, `scripts/prerender.mjs`), so the
  HTML already contains the content for search engines and the browser then hydrates it. The same
  step writes `dist/sitemap.xml` and `dist/robots.txt`.
- Each HTML file has its own title, description and canonical link. The home page carries `Person`
  data and the publications page carries `ScholarlyArticle` data. Update the latter in
  `publications.html` when a paper is added.
- Link previews: the home page uses `public/images/og-card.png`; every other page has its own card in
  `public/images/share/`. They are committed images, redrawn with `scripts/share-cards.mjs` (the
  header of that file says how to run it). Change the card wording there, then update the matching
  `og:image:alt` text in the page's HTML file.
- Google shows a favicon beside the site in search results only if it is a square whose side is a
  multiple of 48px, is linked from the home page, and keeps the same address. `public/favicon.png` and
  `public/apple-touch-icon.png` are 192px, `public/favicon.ico` holds 48, 96 and 192px copies, and
  `robots.txt` does not block them. Keep those sizes if you replace the portrait, and do not rename the files.
- `404.html` is the page GitHub Pages shows for an address that does not exist. It sets a `<base>` from
  `VITE_SITE_URL` so its links and assets work from any depth of path, and it is left out of the sitemap.

## Installable app

The site is a progressive web app: `public/manifest.webmanifest` describes it, `public/sw.js` caches
pages for offline use, and `src/main.tsx` registers the worker in production builds only. Pages load
network-first, so a deploy shows on the next visit. Bump `VERSION` in `public/sw.js` to clear old
caches. The icons in `public/icons/` and `public/apple-touch-icon.png` are cut from the portrait.

## Footer dates

The copyright year is the visitor's current year. "Last updated" is the month of the latest git
commit that touched `src/data/`, `public/files/` or `public/images/`, read at build time in
`vite.config.ts`. The deploy workflow checks out full history (`fetch-depth: 0`) so this works in CI.

## Notes

- The wave under the introduction is decorative. It places a dot only where the signal has moved
  enough, echoing the value-aware sensing in the paper. It is hidden from screen readers, hidden on
  small screens, and static for visitors who prefer reduced motion.
- Colours follow the visitor's light or dark system setting. There is also a print layout.
