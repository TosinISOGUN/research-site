import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import type { PageKey } from './site';
import { Layout } from './components/Layout';
import { PAGES } from './pages';

/** Renders one page to an HTML string. Used only at build time by scripts/prerender.mjs. */
export function render(key: PageKey): string {
  const Page = PAGES[key];
  return renderToString(
    <StrictMode>
      <Layout current={key}>
        <Page />
      </Layout>
    </StrictMode>,
  );
}
