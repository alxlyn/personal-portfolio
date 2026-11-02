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
          <p className={`${styles.role} enter`} style={{ '--i': 1 }}>
            {personal.role}
          </p>
          <p className={`${styles.intro} enter`} style={{ '--i': 2 }}>
            {personal.intro}
          </p>
          <p className={`${styles.availability} enter`} style={{ '--i': 3 }}>
            {personal.availability}
          </p>
          <div className={`${styles.actions} enter`} style={{ '--i': 4 }}>
            <ResumeLink className={styles.resume}>View resume</ResumeLink>
            <Social />
          </div>
          <p className={`${styles.cases} enter`} style={{ '--i': 5 }}>
            Case studies: <a href="/arzan">Arzan</a> and <a href="/tanish">Tanish</a>
          </p>
        </div>

        <aside className={`${styles.card} enter`} style={{ '--i': 3 }} aria-label="At a glance">
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
