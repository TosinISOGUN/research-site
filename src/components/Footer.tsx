import { profile } from '../data/profile';
import { ExtLink } from './ExtLink';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">{profile.name}</p>
          <p className="footer__meta">
            {profile.role}, {profile.location}
          </p>
        </div>
        <ul className="footer__links">
          <li>
            <a className="link" href={`mailto:${profile.email}`}>
              Email
            </a>
          </li>
          {profile.links
            .filter((link) => link.href || import.meta.env.DEV)
            .map((link) => (
              <li key={link.label}>
                <ExtLink link={link} />
              </li>
            ))}
        </ul>
      </div>
      <p className="container footer__updated">Last updated {profile.lastUpdated}.</p>
    </footer>
  );
}
