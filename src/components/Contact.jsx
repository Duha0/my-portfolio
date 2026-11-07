import { personal } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>Interested in working together? Let's connect.</p>
      <div className="contact-links">
        <a href={personal.github} target="_blank" rel="noreferrer">GitHub</a>
        {personal.email ? <a href={`mailto:${personal.email}`}>Email</a> : <span className="disabled">Email (add in data file)</span>}
        {personal.linkedin ? <a href={personal.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> : <span className="disabled">LinkedIn (add in data file)</span>}
      </div>
    </section>
  );
}
