import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const META_COLOUR: Record<Theme, string> = { light: '#F6F7F3', dark: '#0D1310' };

/** Moon and sun buttons are both rendered; CSS shows the right one for the current theme, so the
 *  pre-rendered HTML needs no knowledge of the visitor's choice. */
export function ThemeToggle() {
  // Light is the default. The saved choice was applied to <html> before first paint by a script in
  // each HTML file; read it back after hydration so the label and state match.
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  }, []);

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', META_COLOUR[next]);
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Storage can be blocked (private windows); the choice then lasts until the page closes.
    }
  }

  const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-label={label} title={label}>
      <svg className="icon theme-toggle__moon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.6 6.6 0 0 0 9.8 9.8Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
      <svg className="icon theme-toggle__sun" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
