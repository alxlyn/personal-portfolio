import { personal } from '../../data/content';
import { ResumeLink } from '../Resume/Resume';
import Social from '../Social/Social';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.name}>{personal.name}</p>
          <p className={styles.line}>{personal.availability}</p>
          <div className={styles.contacts}>
            <a className={styles.contact} href={personal.linkedin} target="_blank" rel="noopener noreferrer">
              {personal.contact}
            </a>
            <a className={styles.contact} href={`mailto:${personal.email}`}>
              {personal.email}
            </a>
          </div>
        </div>
        <div className={styles.links}>
          <ResumeLink className={styles.resume}>View resume</ResumeLink>
          <Social />
        </div>
      </div>
    </footer>
  );
}
