import { about } from '../../data/content';
import Section from '../Section/Section';
import styles from './About.module.css';

export default function About() {
  return (
    <Section id="about" title="About">
      <div className={styles.text}>
        {about.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
