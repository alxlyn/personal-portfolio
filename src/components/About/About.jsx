import { about } from '../../data/content';
import { useScrollFadeIn } from '../../hooks/useScrollFadeIn';
import styles from './About.module.css';

export default function About() {
  const ref = useScrollFadeIn();

  return (
    <section id="about">
      <div className={`section fade-in-section ${styles.wrapper}`} ref={ref}>
        <p className="section-label">01. About</p>
        <h2 className="section-title">
          Who I <span>Am</span>
        </h2>
        <div className={styles.grid}>
          <div className={styles.bio}>
            {about.paragraphs.map((p, i) => (
              <p key={i} className={styles.para}>{p}</p>
            ))}
          </div>
          <div className={styles.sidebar}>
            <h3 className={styles.sidebarTitle}>Currently into</h3>
            <ul className={styles.list}>
              {about.currentlyInto.map((item) => (
                <li key={item} className={styles.listItem}>
                  <span className={styles.arrow} aria-hidden="true">&#9656;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
