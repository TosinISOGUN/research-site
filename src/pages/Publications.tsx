import { profile } from '../data/profile';
import { publications, manuscripts } from '../data/publications';
import { PageHeader } from '../components/Layout';
import { Section } from '../components/Section';
import { PublicationList } from '../components/PublicationList';
import { SoftwareList } from '../components/SoftwareList';
import { software } from '../data/software';

export function Publications() {
  return (
    <>
      <PageHeader title="Publications" intro="Peer-reviewed work, manuscripts in progress and open-source software." />
      <div className="page-body">
        <Section id="published" title="Published">
          <PublicationList items={publications} me={profile.name} />
        </Section>
        {manuscripts.length > 0 && (
          <Section id="manuscripts" title="Manuscripts">
            <PublicationList items={manuscripts} me={profile.name} />
          </Section>
        )}
        <Section id="software" title="Open-source software">
          <SoftwareList items={software} />
        </Section>
      </div>
    </>
  );
}
