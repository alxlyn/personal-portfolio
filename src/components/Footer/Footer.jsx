import { personal } from '../../data/content';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
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
