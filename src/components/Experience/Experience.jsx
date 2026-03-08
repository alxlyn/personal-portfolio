import { experience } from '../../data/content';
import { useScrollFadeIn } from '../../hooks/useScrollFadeIn';
import styles from './Experience.module.css';

export default function Experience() {
  const ref = useScrollFadeIn();

  return (
    <section id="experience">
      <div className={`section fade-in-section ${styles.wrapper}`} ref={ref}>
        <p className="section-label">03. Experience</p>
        <h2 className="section-title">
          Where I&apos;ve <span>Worked</span>
        </h2>
        <div className={styles.timeline}>
          {experience.map((job) => (
            <div key={job.company} className={styles.entry}>
              <div className={styles.dot} aria-hidden="true" />
              <div className={styles.card}>
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.company}>
                      {job.company}
                      {job.companyNote && (
                        <span className={styles.companyNote}> — {job.companyNote}</span>
                      )}
                    </h3>
                    <p className={styles.title}>{job.title}</p>
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.dates}>{job.start} – {job.end}</span>
                    <span className={styles.location}>{job.location}</span>
                  </div>
                </div>
                <ul className={styles.bullets}>
                  {job.bullets.map((b) => (
                    <li key={b} className={styles.bullet}>
                      <span className={styles.arrow} aria-hidden="true">&#9656;</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
