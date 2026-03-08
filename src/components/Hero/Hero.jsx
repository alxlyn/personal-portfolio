import { personal } from '../../data/content';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.content}>
        <p className={styles.greeting}>Hi, I&apos;m</p>
        <h1 className={styles.name}>{personal.name}</h1>
        <p className={styles.role}>{personal.role}</p>
        <p className={styles.tagline}>{personal.tagline}</p>
        <div className={styles.ctas}>
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
          <a
            href={personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
