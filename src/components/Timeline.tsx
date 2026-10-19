import type { TimelineItem } from '../types';
import { LinkRow } from './ExtLink';

/** A vertical path from earliest work to what comes next. Read top to bottom. */
export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="tl">
      {items.map((item) => (
        <li key={item.id} className={item.upcoming ? 'tl__item tl__item--next' : 'tl__item'}>
          <p className="tl__when">{item.when}</p>
          <span className="tl__rail" aria-hidden="true">
            <span className="tl__dot" />
          </span>
          <div className="tl__body">
            <h3 className="tl__title">
              {item.workTitle ? <em>{item.isPaper ? `“${item.workTitle}”` : item.workTitle}</em> : item.title}
            </h3>
            {item.place && <p className="tl__place">{item.place}</p>}
            <p>{item.summary}</p>
            {item.contribution && (
              <p>
                <span className="entry__label">My role.</span> {item.contribution}
              </p>
            )}
            {item.highlights && item.highlights.length > 0 && (
              <ul className="entry__highlights">
                {item.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
            <LinkRow links={item.links} />
          </div>
        </li>
      ))}
    </ol>
  );
}
