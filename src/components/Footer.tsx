import { useEffect, useState, type ReactNode } from 'react';
import { profile } from '../data/profile';
import { NAV } from '../site';
import { ExtLink } from './ExtLink';
import { MailIcon, PROFILE_ICONS } from './Icons';

function IconLink({ label, href, external, children }: { label: string; href: string; external?: boolean; children: ReactNode }) {
  return (
    <a
      className="social__link"
      href={href}
      aria-label={label}
      title={label}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}

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
        <ul className="social" aria-label="Contact and profiles">
          <li>
            <IconLink label="Email" href={`mailto:${profile.email}`}>
              <MailIcon />
            </IconLink>
          </li>
          {profile.links.map((link) => {
            const Icon = PROFILE_ICONS[link.label];
            // Without a URL, or without a matching icon, fall back to the plain text link
            // (which is hidden in production and shown as a reminder in dev).
            if (!link.href || !Icon) {
              return link.href || import.meta.env.DEV ? (
                <li key={link.label}>
                  <ExtLink link={link} />
                </li>
              ) : null;
            }
            return (
              <li key={link.label}>
                <IconLink label={link.label} href={link.href} external>
                  <Icon />
                </IconLink>
              </li>
            );
          })}
        </ul>
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
