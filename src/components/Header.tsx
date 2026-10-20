import { useEffect, useState } from 'react';
import { profile } from '../data/profile';
import { HOME_HREF, NAV, type PageKey } from '../site';
import { ThemeToggle } from './ThemeToggle';
import { SocialLinks } from './SocialLinks';

const DESKTOP = '(min-width: 52rem)';

export function Header({ current }: { current: PageKey }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.classList.add('menu-open');

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const mq = window.matchMedia(DESKTOP);
    const onResize = () => {
      if (mq.matches) setOpen(false);
    };

    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onResize);
    return () => {
      document.body.classList.remove('menu-open');
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onResize);
    };
  }, [open]);

  const links = NAV.map((link) => (
    <li key={link.key}>
      <a href={link.href} aria-current={current === link.key ? 'page' : undefined}>
        {link.label}
      </a>
    </li>
  ));

  // The mobile menu sits outside <header>: the header's backdrop blur would otherwise
  // trap the fixed-position panel inside the header's own box.
  return (
    <>
    <header className="header">
      <div className="header__inner container">
        <a className="brand" href={HOME_HREF} aria-current={current === 'home' ? 'page' : undefined}>
          <span className="brand__name">{profile.name}</span>
        </a>

        <div className="header__right">
          <nav className="nav" aria-label="Main">
            <ul>{links}</ul>
          </nav>

          <ThemeToggle />

          <button
            type="button"
            className="menu-button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="menu-button__bar" />
            <span className="menu-button__bar" />
            <span className="menu-button__bar" />
          </button>
        </div>
      </div>
    </header>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <nav className="container" aria-label="Main">
          <ul>
            <li>
              <a href={HOME_HREF} aria-current={current === 'home' ? 'page' : undefined}>
                Home
              </a>
            </li>
            {links}
          </ul>
          <SocialLinks className="mobile-menu__social" />
        </nav>
      </div>
    </>
  );
}
