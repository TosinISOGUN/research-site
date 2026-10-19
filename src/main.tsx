import { StrictMode, type ComponentType } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/instrument-serif/400.css';
import '@fontsource/instrument-serif/400-italic.css';
import '@fontsource-variable/geist';
import './styles.css';
import type { PageKey } from './site';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Research } from './pages/Research';
import { Publications } from './pages/Publications';
import { Teaching } from './pages/Teaching';
import { CV } from './pages/CV';
import { Contact } from './pages/Contact';

// Each HTML file says which page it is with <body data-page="...">.
const PAGES: Record<PageKey, ComponentType> = {
  home: Home,
  research: Research,
  publications: Publications,
  teaching: Teaching,
  cv: CV,
  contact: Contact,
};

const key = (document.body.dataset.page ?? 'home') as PageKey;
const Page = PAGES[key] ?? Home;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout current={key}>
      <Page />
    </Layout>
  </StrictMode>,
);
