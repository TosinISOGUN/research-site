# Research website: Oluwatomisin Isogun

A multi-page academic site in the style of a university faculty page.
Built with Vite, React 19 and TypeScript. No UI library, no CSS framework.
Fonts: Instrument Serif for headings, Geist for text (both bundled, no Google Fonts call).

## Pages

| URL | Component | Content |
| --- | --- | --- |
| `index.html` | `src/pages/Home.tsx` | Hero, about, latest publication, direction, recent work |
| `research.html` | `src/pages/Research.tsx` | Research direction and the research-path timeline |
| `publications.html` | `src/pages/Publications.tsx` | Published work and manuscripts |
| `teaching.html` | `src/pages/Teaching.tsx` | Teaching, mentoring and service |
| `cv.html` | `src/pages/CV.tsx` | Education, honours, certifications, skills, CV download |
| `contact.html` | `src/pages/Contact.tsx` | Email, profiles, availability |

Every page is a real HTML file, so each has its own link you can paste into an email
(for example `.../publications.html`). The navigation bar lives in `src/site.ts`; on screens
narrower than about 830px it collapses into a menu button.

To add a page: copy one of the HTML files and change `data-page`, add the file name to `pages` in
`vite.config.ts`, create the component in `src/pages/`, register it in `src/main.tsx`, and add a link
in `src/site.ts`.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-checks, then writes the site to dist/
npm run preview    # serve the built site locally
```

## Where to edit things

All of the words live in `src/data/`. You should rarely need to touch a component.

| File | What it controls |
| --- | --- |
| `src/data/profile.ts` | Name, role, photo, CV link, GitHub, LinkedIn, ORCID, introduction, "last updated" |
| `src/data/timeline.ts` | The Research path timeline, oldest first, ending with "Next" |
| `src/data/research.ts` | The Research direction section: focus, questions, related threads, keywords |
| `src/data/publications.ts` | Published papers, plus a `manuscripts` list (the section hides itself when empty) |
| `src/data/background.ts` | Education, teaching, honours, skills and languages |
| `src/styles.css` | All styling. Colours and fonts are variables at the top |
| `src/site.ts` | Navigation bar links |

## Finish the placeholders

```bash
npm run todos
```

lists every placeholder still in the code. Two kinds exist:

- `TODO` comments are instructions to you and never appear on the site.
- `[add: ...]` is visible text on the page. Replace each one before you publish.

Links with no URL are hidden in the built site. While you run `npm run dev` they show as a dashed
"add URL" reminder, so you can see what is missing.

## Add a photo, CV and PDFs

Anything in `public/` is served as-is. Put files there and refer to them **without a leading slash**:

```
public/images/profile.jpg     ->  photo: 'images/profile.jpg'
public/files/cv.pdf           ->  cvUrl: 'files/cv.pdf'
public/files/paper.pdf        ->  { label: 'PDF', href: 'files/paper.pdf' }
```

For screenshots or figures inside a section, drop them in `public/images/` and use
`<img src={asset('images/figure1.png')} alt="..." />`, where `asset` is exported from `src/lib.ts`.

## Publish it

The workflow in `.github/workflows/deploy.yml` deploys to GitHub Pages on every push to `main`.
In the repository, open Settings, then Pages, and set the source to **GitHub Actions**.
The site also builds to plain static files in `dist/`, so Netlify, Vercel or any university web
space will work too.

## Notes on the design

- The wave under the introduction is decorative. It draws a signal once and places a dot only where
  the value has moved enough, which echoes the value-aware sensing in your paper. It is hidden from
  screen readers and stops animating for people who prefer reduced motion.
- Light and dark colours follow the visitor's system setting. The page also has a print layout.
- The copy is a first draft written from what I know of your background. Read every sentence and
  change anything that does not sound like you or overstates your role.
