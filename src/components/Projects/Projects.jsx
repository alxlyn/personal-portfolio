import { projects } from '../../data/content';
import { useScrollFadeIn } from '../../hooks/useScrollFadeIn';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

export default function Projects() {
  const ref = useScrollFadeIn();

  return (
    <section id="projects" style={{ background: 'var(--bg-surface)' }}>
      <div className={`section fade-in-section ${styles.wrapper}`} ref={ref}>
        <p className="section-label">02. Work</p>
        <h2 className="section-title">
          Things I&apos;ve <span>Built</span>
        </h2>
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
