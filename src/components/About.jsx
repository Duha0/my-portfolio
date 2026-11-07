import { about } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="section">
      <h2>About</h2>
      {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
    </section>
  );
}
