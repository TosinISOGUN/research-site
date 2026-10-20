import { useEffect, useState } from 'react';
import { profile } from '../data/profile';
import { NAV } from '../site';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  // The pre-rendered page and the first browser render both use the build year, so they match.
  // Right after that the year is set from the visitor's clock, so it rolls over on 1 January
  // without a new deploy.
  const [year, setYear] = useState(__BUILD_YEAR__);
  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">{profile.name}</p>
          <p className="footer__meta">
            {profile.role}, {profile.location}
          </p>
        </div>
        <SocialLinks />
      </div>
      <div className="container footer__bottom">
        <nav aria-label="Footer">
          <ul className="footer__nav">
            {NAV.map((item) => (
              <li key={item.key}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="footer__updated">
          © {year} {profile.name}. All rights reserved.
          <br />
          Last updated {__LAST_UPDATED__}.
        </p>
      </div>
    </footer>
  );
}
