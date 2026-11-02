import { experience } from '../../data/content';
import { ArrowUpRightIcon } from '../Icons/Icons';
import Section from '../Section/Section';
import Tags from '../Tags/Tags';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className={styles.list}>
        {experience.map((job) => (
          <article key={job.company} className={styles.job}>
            <img className={styles.logo} src={job.logo} width="56" height="56" alt="" />
            <div className={styles.head}>
              <div className={styles.top}>
                <h3 className={styles.role}>{job.role}</h3>
                <p className={styles.dates}>{job.dates}</p>
              </div>
              <p className={styles.company}>
                <b>{job.company}</b>, {job.meta}
              </p>
            </div>
            <div className={styles.details}>
              <ul className={styles.bullets}>
                {job.bullets.map((bullet) => (
                  <li key={bullet.slice(0, 24)}>{bullet}</li>
                ))}
              </ul>
              <div className={styles.tags}>
                <Tags items={job.stack} label={`${job.company} stack`} />
              </div>
              {job.link && (
                <p className={styles.more}>
                  <a className={styles.moreLink} href={job.link.href}>
                    {job.link.label}
                    <ArrowUpRightIcon />
                  </a>
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
