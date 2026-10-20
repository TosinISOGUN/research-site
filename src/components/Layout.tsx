import type { ReactNode } from 'react';
import type { PageKey } from '../site';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout({ current, children }: { current: PageKey; children: ReactNode }) {
  return (
    <>
      {/* 404.html sets <base href>, which would turn a plain #main link into a link to the home page,
          so the click is handled here. Without JavaScript the plain anchor still works. */}
      <a
        className="skip-link"
        href="#main"
        onClick={(e) => {
          const main = document.getElementById('main');
          if (!main) return;
          e.preventDefault();
          main.focus();
          main.scrollIntoView();
        }}
      >
        Skip to content
      </a>
      <Header current={current} />
      <main id="main" className="container main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  );
}

/** Title block at the top of every inner page. */
export function PageHeader({ title, intro, children }: { title: string; intro?: string; children?: ReactNode }) {
  return (
    <header className="page-head">
      <h1 className="page-head__title">{title}</h1>
      {intro && <p className="page-head__intro">{intro}</p>}
      {children}
    </header>
  );
}
