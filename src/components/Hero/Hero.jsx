import { facts, personal } from '../../data/content';
import { ResumeLink } from '../Resume/Resume';
import Social from '../Social/Social';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div>
          <h1 className={`${styles.name} enter`}>{personal.name}</h1>
          <p className={`${styles.role} enter i1`}>
            {personal.role}
          </p>
          <p className={`${styles.intro} enter i2`}>
            {personal.intro}
          </p>
          <p className={`${styles.availability} enter i3`}>
            {personal.availability}
          </p>
          <div className={`${styles.actions} enter i4`}>
            <ResumeLink className={styles.resume}>View resume</ResumeLink>
            <Social />
          </div>
          <p className={`${styles.cases} enter i5`}>
            Case studies: <a href="/arzan">Arzan</a> and <a href="/tanish">Tanish</a>
          </p>
          <p className={`${styles.cases} enter i6`}>
            Email: <a href={`mailto:${personal.email}`}>{personal.email}</a>
          </p>
        </div>

        <aside className={`${styles.card} enter i3`} aria-label="At a glance">
          <dl className={styles.facts}>
            {facts.map(({ label, value }) => (
              <div key={label} className={styles.fact}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
