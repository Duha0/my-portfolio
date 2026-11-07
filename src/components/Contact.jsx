import { personal } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="section reveal">
      <h2>Contact</h2>
      <p>Interested in working together or discussing a project? I would be glad to connect.</p>
      <div className="contact-links">
        <a href={personal.github} target="_blank" rel="noreferrer">GitHub</a>
        {personal.email && <a href={`mailto:${personal.email}`}>Email</a>}
        {personal.linkedin && <a href={personal.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
      </div>
    </section>
  );
}
