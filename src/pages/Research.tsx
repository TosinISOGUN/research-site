import { researchDirection } from '../data/research';
import { timeline } from '../data/timeline';
import { PageHeader } from '../components/Layout';
import { Section } from '../components/Section';
import { Timeline } from '../components/Timeline';

export function Research() {
  return (
    <>
      <PageHeader
        title="Research"
        intro="The question I want to pursue next, and the work that led me to it."
      />
      <div className="page-body">
        <Section id="direction" title="Research direction">
          <h3 className="subhead">{researchDirection.title}</h3>
          <p>{researchDirection.summary}</p>
          <h3 className="subhead">Questions I want to answer</h3>
          <ul className="bullets">
            {researchDirection.questions.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ul>
          <h3 className="subhead">Related threads</h3>
          <dl className="threads">
            {researchDirection.threads.map((t) => (
              <div key={t.title}>
                <dt>{t.title}</dt>
                <dd>{t.text}</dd>
              </div>
            ))}
          </dl>
          <ul className="chips" aria-label="Keywords">
            {researchDirection.keywords.map((k) => (
              <li key={k}>{k}</li>
            ))}
          </ul>
        </Section>

        <Section id="path" title="Research path">
          <p className="muted">From undergraduate projects to the question I want to pursue next.</p>
          <Timeline items={timeline} />
        </Section>
      </div>
    </>
  );
}
