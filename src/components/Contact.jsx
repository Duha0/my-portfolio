import { personal } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="section reveal">
      <h2>Contact</h2>
      <p>Interested in working together or discussing a project? I would be glad to connect.</p>
      <div className="contact-links">
        <a href={`mailto:${personal.email}`} className="btn primary">Email Me</a>
        <a href={personal.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={personal.vercel} target="_blank" rel="noopener noreferrer">Vercel</a>
      </div>
      <p className="contact-email">{personal.email}</p>
    </section>
  );
}
