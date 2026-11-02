import { education, languages } from '../../data/content';
import Section from '../Section/Section';
import styles from './Credentials.module.css';

function Group({ title, items, across = false }) {
  return (
    <div>
      <h3 className={styles.group}>{title}</h3>
      <ul className={across ? styles.across : styles.rows}>
        {items.map(({ name, detail, dates }) => (
          <li key={name} className={styles.row}>
            <div>
              <p className={styles.name}>{name}</p>
              <p className={styles.detail}>{detail}</p>
            </div>
            {dates && <p className={styles.dates}>{dates}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Credentials() {
  return (
    <Section id="credentials" title="Credentials">
      <div className={styles.groups}>
        <Group title="Education" items={education} />
        <Group title="Languages" items={languages} across />
      </div>
    </Section>
  );
}
