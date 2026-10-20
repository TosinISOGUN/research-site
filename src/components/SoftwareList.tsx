import type { Software } from '../types';
import { LinkRow } from './ExtLink';

/** Open-source projects as cards: name, what it does, a facts line and links. */
export function SoftwareList({ items, level = 3 }: { items: Software[]; level?: 2 | 3 }) {
  const Heading = `h${level}` as const;
  return (
    <ul className="software">
      {items.map((s) => (
        <li key={s.id} className="software__item">
          <Heading className="software__name">{s.name}</Heading>
          {s.accompanies && (
            <p className="software__paper">
              Code for <em>“{s.accompanies.title}”</em> ({s.accompanies.venue})
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
