import type { ExternalLink } from '../types';
import { asset } from '../lib';

/** A link that disappears when it has no URL, so unfinished placeholders never ship as dead links.
 *  While you run `npm run dev` it shows a dashed reminder instead. */
export function ExtLink({ link }: { link: ExternalLink }) {
  if (!link.href) {
    return import.meta.env.DEV ? (
      <span className="link link--missing" title="Add this URL in src/data">
        {link.label}: add URL
      </span>
    ) : null;
  }

  const isWeb = /^https?:\/\//.test(link.href);
  const isMail = link.href.startsWith('mailto:');
  const isAnchor = link.href.startsWith('#');
  const href = isWeb || isMail || isAnchor ? link.href : asset(link.href);

  return (
    <a
      className="link"
      href={href}
      {...(!isMail && !isAnchor ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {link.label}
    </a>
  );
}

export function LinkRow({ links }: { links?: ExternalLink[] }) {
  if (!links || links.length === 0) return null;
  // Render nothing at all (not an empty row) when every link is unfinished in production.
  if (!import.meta.env.DEV && links.every((l) => !l.href)) return null;
  return (
    <p className="link-row">
      {links.map((link) => (
        <ExtLink key={link.label} link={link} />
      ))}
    </p>
  );
}
