import { personal } from '../../data/content';
import { GitHubIcon, LinkedInIcon, XIcon } from '../Icons/Icons';
import styles from './Social.module.css';

const LINKS = [
  { label: 'GitHub', href: personal.github, Icon: GitHubIcon },
  { label: 'LinkedIn', href: personal.linkedin, Icon: LinkedInIcon },
  { label: 'X', href: personal.x, Icon: XIcon },
];

export default function Social() {
  return (
    <ul className={styles.list}>
      {LINKS.map((link) => (
        <li key={link.label}>
          <a className={styles.icon} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
            <link.Icon />
            <span className={styles.tip} aria-hidden="true">
              {link.label}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
