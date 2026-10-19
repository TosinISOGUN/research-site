import { profile } from '../data/profile';
import { publications, manuscripts } from '../data/publications';
import { PageHeader } from '../components/Layout';
import { Section } from '../components/Section';
import { PublicationList } from '../components/PublicationList';

export function Publications() {
  return (
    <>
      <PageHeader title="Publications" intro="Peer-reviewed work and manuscripts in progress." />
      <div className="page-body">
        <Section id="published" title="Published">
          <PublicationList items={publications} me={profile.name} />
        </Section>
        {manuscripts.length > 0 && (
          <Section id="manuscripts" title="Manuscripts">
            <PublicationList items={manuscripts} me={profile.name} />
          </Section>
        )}
      </div>
    </>
  );
}
