import { profile } from '../data/profile';
import { asset } from '../lib';

function initials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join('');
}

/** Your photo if `profile.photo` is set, otherwise your initials. */
export function Portrait({ className = '' }: { className?: string }) {
  return (
    <div className={`portrait ${className}`}>
      {profile.photo ? (
        <img src={asset(profile.photo)} alt={`Portrait of ${profile.name}`} width={480} height={600} />
      ) : (
        <span className="portrait__initials" aria-hidden="true">
          {initials(profile.name)}
        </span>
      )}
    </div>
  );
}
