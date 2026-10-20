import { profile } from '../data/profile';
import { publications } from '../data/publications';
import { researchDirection, researchInterests } from '../data/research';
import { software } from '../data/software';
import { SoftwareList } from '../components/SoftwareList';
import { timeline } from '../data/timeline';
import { Portrait } from '../components/Portrait';
import { ExtLink } from '../components/ExtLink';
import { Authors } from '../components/PublicationList';
import { SignalTrace } from '../components/SignalTrace';

export function Home() {
  const [lead, ...rest] = profile.intro;
  const latest = publications[0];
  // The three most recent completed or ongoing items, newest first.
  const recent = timeline.filter((item) => !item.upcoming).slice(-3).reverse();

  return (
    <>
      <section className="hero" aria-labelledby="hero-name">
        <div className="hero__text">
          <h1 id="hero-name" className="hero__name">
            {profile.name}
          </h1>
          <p className="hero__tagline">{profile.tagline}</p>
          <p className="hero__lede">{lead}</p>
          <div className="actions">
            <a className="button button--primary" href="research.html">
              View my research
            </a>
            <a className="button" href="publications.html">
              Publications
            </a>
          </div>
        </div>
        <Portrait className="hero__portrait" />
      </section>

      <SignalTrace />

      <dl className="glance">
        {profile.glance.map((g) => (
          <div key={g.value}>
            <dt>{g.value}</dt>
            <dd>{g.label}</dd>
          </div>
        ))}
      </dl>

      <section className="home-section" aria-labelledby="about-title">
        <h2 id="about-title" className="h2">
          About
        </h2>
        <div className="prose">
          {rest.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      <section className="home-section" aria-labelledby="interests-title">
        <h2 id="interests-title" className="h2">
          Research interests
        </h2>
        <ul className="interests">
          {researchInterests.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
        <p className="interests__next">
          Where I am heading next: <em>{researchDirection.title}</em>.{' '}
          <a className="link" href="research.html#direction">
            Read the research direction
          </a>
        </p>
      </section>

      {latest && (
        <section className="home-card home-card--wide" aria-labelledby="latest-title">
          <h2 id="latest-title" className="home-card__label">
            Latest publication
          </h2>
          <p className="home-card__title">{latest.title}</p>
          <p className="home-card__authors">
            <Authors authors={latest.authors} me={profile.name} />
          </p>
          <p className="home-card__meta">
            <em>{latest.venue}</em>, {latest.year}
          </p>
          {latest.summary && <p className="home-card__summary">{latest.summary}</p>}
          <p className="link-row">
            {latest.links?.map((link) => <ExtLink key={link.label} link={link} />)}
            <a className="link" href="publications.html">
              See all publications
            </a>
          </p>
        </section>
      )}

      <section className="home-section" aria-labelledby="software-title">
        <h2 id="software-title" className="h2">
          Open-source software
        </h2>
        <SoftwareList items={software} />
      </section>

      <section className="home-section" aria-labelledby="recent-title">
        <h2 id="recent-title" className="h2">
          Recent work
        </h2>
        <ul className="rows">
          {recent.map((item) => (
            <li key={item.id} className="row">
              <span className="row__when">{item.when}</span>
              <span>
                <span className="row__title">{item.title}</span>
                {item.place && <span className="row__sub">{item.place}</span>}
              </span>
            </li>
          ))}
        </ul>
        <a className="link" href="research.html#path">
          See the full research path
        </a>
      </section>

      {profile.availability && (
        <section className="band" aria-label="Availability">
          <p className="band__text">{profile.availability}</p>
          <a className="button button--primary" href="contact.html">
            Get in touch
          </a>
        </section>
      )}
    </>
  );
}
