import { teaching, service } from '../data/background';
import { PageHeader } from '../components/Layout';
import { Section } from '../components/Section';
import { EntryList } from '../components/EntryList';

export function Teaching() {
  return (
    <>
      <PageHeader
        title="Teaching and service"
        intro="Teaching, mentoring and student leadership during and since my degree."
      />
      <div className="page-body">
        <Section id="teaching" title="Teaching and mentoring">
          <EntryList entries={teaching} level={3} />
        </Section>
        <Section id="service" title="Service">
          <EntryList entries={service} level={3} />
        </Section>
      </div>
    </>
  );
}
