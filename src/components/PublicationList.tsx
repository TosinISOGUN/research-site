import { useState } from 'react';
import type { Publication, PublicationStatus } from '../types';
import { ExtLink } from './ExtLink';

const STATUS_LABEL: Record<PublicationStatus, string> = {
  published: 'Published',
  preprint: 'Preprint',
  'under-review': 'Under review',
  'in-preparation': 'In preparation',
};

function plainCitation(p: Publication): string {
  return `${p.authors.join(', ')} (${p.year ?? 'manuscript'}). ${p.title}. ${p.venue}.`;
}

function CopyCitation({ publication }: { publication: Publication }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(plainCitation(publication));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard can be blocked (older browsers, insecure context). Fail quietly.
    }
  }

  return (
    <button type="button" className="link link--button" onClick={copy}>
      {copied ? 'Citation copied' : 'Copy citation'}
    </button>
  );
}

/** Author list with your own name in bold. */
export function Authors({ authors, me }: { authors: string[]; me: string }) {
  return (
    <>
      {authors.map((a, i) => (
        <span key={`${a}-${i}`}>
          {a === me ? <strong>{a}</strong> : a}
          {i < authors.length - 1 ? ', ' : ''}
        </span>
      ))}
    </>
  );
}

interface Props {
  items: Publication[];
  /** Your name exactly as written in the authors lists, so it can be set in bold. */
  me: string;
}

export function PublicationList({ items, me }: Props) {
  return (
    <ol className="pubs">
      {items.map((p) => (
        <li key={p.id} className="pub">
          <p className="pub__year">{p.dateLabel ?? p.year}</p>
          <div className="pub__body">
            <h3 className="pub__title">{p.title}</h3>
            <p className="pub__authors">
              <Authors authors={p.authors} me={me} />
            </p>
            <p className="pub__venue">
              <em>{p.venue}</em>
              <span className={`tag tag--${p.status}`}>{STATUS_LABEL[p.status]}</span>
            </p>
            {p.note && <p className="pub__note">{p.note}</p>}
            {p.abstract && (
              <details className="pub__abstract">
                <summary>Abstract</summary>
                <p>{p.abstract}</p>
              </details>
            )}
            <p className="link-row">
              {p.links?.map((link) => <ExtLink key={link.label} link={link} />)}
              <CopyCitation publication={p} />
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
