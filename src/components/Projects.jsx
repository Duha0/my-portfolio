import { projects } from "../data/portfolio";

function Visual({ type }) {
  return <div className={`project-visual ${type}`} aria-hidden="true" />;
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <Visual type={project.visual} />
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="tech-list">
        {project.tech.map((t) => <span key={t} className="tech">{t}</span>)}
      </div>
      <div className="project-links">
        {project.github ? <a href={project.github} target="_blank" rel="noreferrer">GitHub</a> : <span className="disabled">GitHub</span>}
        {project.live ? <a href={project.live} target="_blank" rel="noreferrer">Live Demo</a> : <span className="disabled">Live Demo</span>}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => <ProjectCard key={p.name} project={p} />)}
      </div>
    </section>
  );
}
