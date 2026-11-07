import { useState } from "react";
import { featuredProjects, moreProjects } from "../data/portfolio";

function Visual({ type, image, live }) {
  const content = image ? <img src={image} alt="" /> : <div className={`project-visual ${type}`} />;
  if (live) return <a href={live} target="_blank" rel="noreferrer" className="project-visual-link">{content}</a>;
  return content;
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <Visual type={project.visual} image={project.image} live={project.live} />
      <h3>{project.name} {project.featured && <span className="featured-badge">Featured</span>}</h3>
      <p>{project.description}</p>
      <div className="tech-list">
        {project.tech.map((t) => <span key={t} className="tech">{t}</span>)}
      </div>
      <div className="project-links">
        {project.github ? <a href={project.github} target="_blank" rel="noreferrer">GitHub</a> : null}
        {project.live ? <a href={project.live} target="_blank" rel="noreferrer">Live Demo</a> : null}
      </div>
    </article>
  );
}

export default function Projects() {
  const [showMore, setShowMore] = useState(false);
  return (
    <section id="projects" className="section reveal">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {featuredProjects.map((p) => <ProjectCard key={p.name} project={p} />)}
      </div>
      <div className="more-projects">
        <button className="btn secondary" onClick={() => setShowMore(!showMore)}>
          {showMore ? "Hide More Projects" : "More Projects"}
        </button>
        {showMore && (
          <div className="projects-grid" style={{ marginTop: "1.5rem" }}>
            {moreProjects.map((p) => <ProjectCard key={p.name} project={p} />)}
          </div>
        )}
      </div>
    </section>
  );
}
