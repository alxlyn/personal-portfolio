import { personal, projects } from '../../data/content';
import { ArrowUpRightIcon } from '../Icons/Icons';
import Section from '../Section/Section';
import Tags from '../Tags/Tags';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className={styles.grid}>
        {projects.map((project) => (
          <article key={project.name} className={styles.card} data-link={project.href ? 'true' : undefined}>
            <div className={styles.head}>
              {project.logo && <img className={styles.logo} src={project.logo} width="44" height="44" alt="" loading="lazy" decoding="async" />}
              <div className={styles.heading}>
                <h3 className={styles.name}>
                  {project.href ? (
                    <a className={styles.nameLink} href={project.href} target="_blank" rel="noopener noreferrer">
                      {project.name}
                      <span className={styles.arrow}>
                        <ArrowUpRightIcon />
                      </span>
                    </a>
                  ) : (
                    project.name
                  )}
                </h3>
                <p className={styles.meta}>{project.dates}</p>
              </div>
            </div>
            <p className={styles.about}>{project.meta}</p>
            <p className={styles.text}>{project.text}</p>
            <div className={styles.tags}>
              <Tags items={project.stack} label={`${project.name} stack`} />
            </div>
          </article>
        ))}
      </div>
      <p className={styles.note}>
        {personal.privateCode}{' '}
        <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
          {personal.contact}
        </a>
        .
      </p>
    </Section>
  );
}
