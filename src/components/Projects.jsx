import { useState } from "react";
import { featuredProjects, moreProjects } from "../data/portfolio";

function getImage(project, theme) {
  if (project.imageLight) return theme === "dark" ? project.imageDark : project.imageLight;
  return project.image;
}

function Visual({ project, theme }) {
  const src = getImage(project, theme);
  const content = src ? (
    <div className="browser-frame">
      <div className="browser-bar"><span /><span /><span /></div>
      <img src={src} alt={`${project.name} screenshot`} />
    </div>
  ) : (
    <div className={`project-visual ${project.visual}`} />
  );
  if (project.live) return <a href={project.live} target="_blank" rel="noreferrer" className="project-visual-link" aria-label={`Open ${project.name} live demo`}>{content}</a>;
  return content;
}

function ProjectCard({ project, theme }) {
  return (
    <article className={`project-card ${project.featured ? "featured" : ""}`}>
      <Visual project={project} theme={theme} />
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

export default function Projects({ theme }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <section id="projects" className="section reveal">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {featuredProjects.map((p) => <ProjectCard key={p.name} project={p} theme={theme} />)}
      </div>
      <div className="more-projects-cta">
        <p>Want to see more of my work? Explore my other projects and experiments.</p>
        <div className="hero-ctas">
          <a href="https://github.com/Duha0" target="_blank" rel="noopener noreferrer" className="btn secondary">More on GitHub</a>
          <a href="https://vercel.com/duha0" target="_blank" rel="noopener noreferrer" className="btn primary">Explore on Vercel</a>
        </div>
      </div>
    </section>
  );
}
