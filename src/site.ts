// The pages of the site and the navigation bar.
// To add a page: create an HTML file like research.html (copy one and change data-page),
// add it to the `pages` list in vite.config.ts, add a component in src/pages/,
// register it in src/main.tsx, and add a link here.

export type PageKey = 'home' | 'research' | 'publications' | 'teaching' | 'cv' | 'contact';

export interface NavLink {
  key: PageKey;
  label: string;
  href: string;
}

export const NAV: NavLink[] = [
  { key: 'research', label: 'Research', href: 'research.html' },
  { key: 'publications', label: 'Publications', href: 'publications.html' },
  { key: 'teaching', label: 'Teaching', href: 'teaching.html' },
  { key: 'cv', label: 'CV', href: 'cv.html' },
  { key: 'contact', label: 'Contact', href: 'contact.html' },
];

export const HOME_HREF = './';
