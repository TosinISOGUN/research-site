import type { Software } from '../types';
import { ExtLink, LinkRow } from './ExtLink';

interface Props {
  items: Software[];
  /** 'cards' for the home page; 'list' matches the layout of the publication lists. */
  variant?: 'cards' | 'list';
}

function PaperLine({ accompanies }: { accompanies: NonNullable<Software['accompanies']> }) {
  return (
    <>
      Code for <em>“{accompanies.title}”</em> ({accompanies.venue})
    </>
  );
}

export function SoftwareList({ items, variant = 'cards' }: Props) {
  if (variant === 'list') {
    return (
      <ol className="pubs">
        {items.map((s) => (
          <li key={s.id} className="pub">
            <p className="pub__year">{s.year}</p>
            <div className="pub__body">
              <h3 className="pub__title">{s.name}</h3>
              {s.accompanies && (
                <p className="pub__authors">
                  <PaperLine accompanies={s.accompanies} />
                </p>
              )}
              <p className="pub__venue">
                {s.meta.join(' · ')}
                <span className="tag tag--published">Released</span>
              </p>
              <p className="pub__note">{s.description}</p>
              <p className="link-row">
                {s.links.map((link) => (
                  <ExtLink key={link.label} link={link} />
                ))}
              </p>
            </div>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ul className="software">
      {items.map((s) => (
        <li key={s.id} className="software__item">
          <h3 className="software__name">{s.name}</h3>
          {s.accompanies && (
            <p className="software__paper">
              <PaperLine accompanies={s.accompanies} />
            </p>
          )}
          <p className="software__desc">{s.description}</p>
          <p className="software__meta">{s.meta.join(' · ')}</p>
          <LinkRow links={s.links} />
        </li>
      ))}
    </ul>
  );
}
