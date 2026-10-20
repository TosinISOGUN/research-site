import { profile } from '../data/profile';
import { PageHeader } from '../components/Layout';
import { ExtLink } from '../components/ExtLink';
import { CopyEmail } from '../components/CopyEmail';

export function Contact() {
  return (
    <>
      <PageHeader
        title="Contact"
        intro="If my work overlaps with yours, I would be glad to hear from you. Email is the best way to reach me."
      />
      <div className="page-body">
        <a className="contact-email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <div className="contact-actions">
          <CopyEmail email={profile.email} />
        </div>

        <dl className="details">
          <div>
            <dt>Based in</dt>
            <dd>{profile.location} (West Africa Time, UTC+1)</dd>
          </div>
          <div>
            <dt>Profiles</dt>
            <dd className="details__links">
              {profile.links.map((link) => (
                <ExtLink key={link.label} link={link} />
              ))}
            </dd>
          </div>
          {profile.availability && (
            <div>
              <dt>Looking for</dt>
              <dd>{profile.availability}</dd>
            </div>
          )}
        </dl>
      </div>
    </>
  );
}
