import type { Entry } from '../types';
import { LinkRow } from './ExtLink';

/** Used for research experience, software work and education: a date on the left, details on the right. */
export function EntryList({ entries, level }: { entries: Entry[]; level: 3 | 4 }) {
  const Title = level === 4 ? 'h4' : 'h3';
  return (
    <ol className="entries">
      {entries.map((entry) => (
        <li key={entry.id} className="entry">
          <p className="entry__when">{entry.when}</p>
          <div className="entry__body">
            <Title className="entry__title">{entry.title}</Title>
            {entry.subtitle && <p className="entry__subtitle">{entry.subtitle}</p>}
            <p>{entry.summary}</p>
            {entry.contribution && (
              <p>
                <span className="entry__label">My role.</span> {entry.contribution}
              </p>
            )}
            {entry.highlights && entry.highlights.length > 0 && (
              <ul className="entry__highlights">
                {entry.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
            <LinkRow links={entry.links} />
          </div>
        </li>
      ))}
    </ol>
  );
}
