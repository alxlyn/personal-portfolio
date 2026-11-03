import { useEffect, useState } from 'react';
import { personal } from '../../data/content';
import { ResumeLink } from '../Resume/Resume';
import styles from './Nav.module.css';

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'credentials', label: 'Education' },
  { id: 'skills', label: 'Skills' },
];

export default function Nav() {
  const [active, setActive] = useState(null);

  // Marks the last section above the 35% line. The bottom sections can't scroll that far,
  // so the end of the page counts as the last section unless a nav link landed on another one.
  useEffect(() => {
    const sections = SECTIONS.map(({ id }) => document.getElementById(id));
    let frame = 0;

    const update = () => {
      frame = 0;
      const line = innerHeight * 0.35;
      const passed = sections.filter((section) => section.getBoundingClientRect().top <= line);
      const atEnd = innerHeight + scrollY >= document.documentElement.scrollHeight - 2;
      if (atEnd) {
        const linked = document.getElementById(location.hash.slice(1));
        const inView = sections.includes(linked) && linked.getBoundingClientRect().top >= 0;
        setActive(inView ? linked.id : sections.at(-1).id);
      } else {
        setActive(passed.at(-1)?.id ?? null);
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    schedule();
    addEventListener('scroll', schedule, { passive: true });
    addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      removeEventListener('scroll', schedule);
      removeEventListener('resize', schedule);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a className={styles.name} href="#top">
          {personal.name}
        </a>
        <nav className={styles.nav} aria-label="Sections">
          <ul>
            {SECTIONS.map(({ id, label }) => (
              <li key={id}>
                <a className={styles.link} href={`#${id}`} aria-current={active === id ? 'true' : undefined}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ResumeLink className={styles.resume}>Resume</ResumeLink>
      </div>
    </header>
  );
}
