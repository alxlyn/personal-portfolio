import { skills } from '../../data/content';
import Section from '../Section/Section';
import Tags from '../Tags/Tags';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className={styles.list}>
        {skills.map(({ label, items }) => (
          <div key={label} className={styles.row}>
            <h3 className={styles.label}>{label}</h3>
            <Tags items={items} label={label} />
          </div>
        ))}
      </div>
    </Section>
  );
}
