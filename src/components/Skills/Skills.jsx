import { skills } from '../../data/content';
import { useScrollFadeIn } from '../../hooks/useScrollFadeIn';
import styles from './Skills.module.css';

export default function Skills() {
  const ref = useScrollFadeIn();

  return (
    <section id="skills">
      <div className={`section fade-in-section ${styles.wrapper}`} ref={ref}>
        <p className="section-label">04. Skills</p>
        <h2 className="section-title">
          What I <span>Work With</span>
        </h2>
        <div className={styles.grid}>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className={styles.group}>
              <h3 className={styles.category}>{category}</h3>
              <ul className={styles.tags}>
                {items.map((skill) => (
                  <li key={skill} className={styles.tag}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
