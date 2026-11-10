import { useState } from "react";
import { featuredProjects } from "../data/portfolio";

function getImage(project, theme) {
  if (project.imageLight) return theme === "dark" ? project.imageDark : project.imageLight;
  return project.image;
}

function Visual({ project, theme }) {
  const src = getImage(project, theme);
  const [imgError, setImgError] = useState(false);

  const hasExternalLink = project.live || project.github;
  const externalUrl = project.live || project.github;
  const externalLabel = project.live ? `Open ${project.name} live demo` : `View ${project.name} on GitHub`;

  const content = src && !imgError ? (
    <div className="browser-frame">
      <div className="browser-bar"><span /><span /><span /></div>
      <img
        src={src}
        alt={`${project.name} screenshot`}
        onError={() => setImgError(true)}
        loading="lazy"
      />
    </div>
  ) : (
    <div className={`project-visual ${project.visual}`} />
  );

  if (hasExternalLink) {
    return (
      <a
        href={externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="project-visual-link"
        aria-label={externalLabel}
      >
        {content}
      </a>
    );
  }
  return content;
}

function ProjectCard({ project, theme }) {
  const hasGithub = !!project.github;
  const hasLive = !!project.live;

  return (
    <article className={`project-card ${project.featured ? "featured" : ""}`}>
      <Visual project={project} theme={theme} />
      <div className="project-content">
        <h3>{project.name} {project.featured && <span className="featured-badge">Featured</span>}</h3>
        <p>{project.description}</p>
        <div className="tech-list">
          {project.tech.map((t) => <span key={t} className="tech">{t}</span>)}
        </div>
        <div className="project-links">
          {hasLive && <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link primary">Live Demo</a>}
          {hasGithub && <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link secondary">GitHub</a>}
        </div>
      </div>
    </article>
  );
}

export default function Projects({ theme }) {
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