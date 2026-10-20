import { PageHeader } from '../components/Layout';
import { HOME_HREF, NAV } from '../site';

// Shown by 404.html, which GitHub Pages serves for any address that does not exist.
export function NotFound() {
  return (
    <>
      <PageHeader
        title="Page not found"
        intro="That address does not lead anywhere on this site. The page may have moved, or the link may have a typo."
      />
      <div className="page-body">
        <div className="actions actions--flush">
          <a className="button button--primary" href={HOME_HREF}>
            Go to the homepage
          </a>
        </div>
        <p className="notfound__label">Or go straight to</p>
        <ul className="notfound__links">
          {NAV.map((item) => (
            <li key={item.key}>
              <a className="link" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
