import { profile } from '../data/profile';
import { education, achievements, certifications, skills } from '../data/background';
import { PageHeader } from '../components/Layout';
import { Section } from '../components/Section';
import { EntryList } from '../components/EntryList';
import { AchievementList } from '../components/AchievementList';
import { asset } from '../lib';

export function CV() {
  return (
    <>
      <PageHeader title="Curriculum vitae" intro="Education, honours, certifications and skills.">
        {profile.cvUrl ? (
          <div className="actions">
            <a
              className="button button--primary"
              href={asset(profile.cvUrl)}
              target="_blank"
              rel="noopener noreferrer"
            >
              View CV (PDF)
            </a>
          </div>
        ) : import.meta.env.DEV ? (
          <p className="link link--missing">View CV: set cvUrl in src/data/profile.ts</p>
        ) : null}
      </PageHeader>
      <div className="page-body">
        <Section id="education" title="Education">
          <EntryList entries={education} level={3} />
        </Section>
        <Section id="honours" title="Honours and scholarships">
          <AchievementList items={achievements} />
        </Section>
        <Section id="certifications" title="Certifications">
          <AchievementList items={certifications} />
        </Section>
        <Section id="skills" title="Skills and languages">
          <dl className="skills">
            {skills.map((group) => (
              <div key={group.title}>
                <dt>{group.title}</dt>
                <dd>
                  <ul className="chips">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {group.note && <p className="skills__note">{group.note}</p>}
                </dd>
              </div>
            ))}
          </dl>
        </Section>
      </div>
    </>
  );
}
