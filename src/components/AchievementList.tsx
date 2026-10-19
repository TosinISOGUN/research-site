import type { Achievement } from '../types';

export function AchievementList({ items }: { items: Achievement[] }) {
  return (
    <ul className="rows">
      {items.map((a) => (
        <li key={a.text} className="row">
          <span className="row__when">{a.year}</span>
          <span>{a.text}</span>
        </li>
      ))}
    </ul>
  );
}
