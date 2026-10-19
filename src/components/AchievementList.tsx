import type { Achievement } from '../types';
import { ExtLink } from './ExtLink';

export function AchievementList({ items }: { items: Achievement[] }) {
  return (
    <ul className="rows">
      {items.map((a) => (
        <li key={a.text} className="row">
          <span className="row__when">{a.year}</span>
          <span>
            {a.text}
            {a.link && (
              <>
                {' '}
                <span className="row__link">
                  <ExtLink link={a.link} />
                </span>
              </>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}
