import type { ReactNode } from 'react';
import { profile } from '../data/profile';
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

/** Email and profile links as round icon buttons, used in the footer and the mobile menu. */
export function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <ul className={`social ${className}`.trim()} aria-label="Contact and profiles">
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
  );
}
