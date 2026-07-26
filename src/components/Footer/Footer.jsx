import { personal } from '../../data/content';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.socials} aria-label="Social links">
        <a href={personal.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          GitHub
        </a>
        <span aria-hidden="true">·</span>
        <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          LinkedIn
        </a>
        <span aria-hidden="true">·</span>
        <a href={personal.x} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          X
        </a>
      </nav>
      <p className={styles.text}>
        Designed &amp; built by{' '}
        <a href={personal.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
          {personal.name}
        </a>{' '}
        · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
