import type { ComponentType } from 'react';
import type { PageKey } from './site';
import { Home } from './pages/Home';
import { Research } from './pages/Research';
import { Publications } from './pages/Publications';
import { Teaching } from './pages/Teaching';
import { CV } from './pages/CV';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

// Each HTML file says which page it is with <body data-page="...">.
export const PAGES: Record<PageKey, ComponentType> = {
  home: Home,
  research: Research,
  publications: Publications,
  teaching: Teaching,
  cv: CV,
  contact: Contact,
  notfound: NotFound,
};
