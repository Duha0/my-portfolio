import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((s) => (
          <div key={s} className="skill-card">{s}</div>
        ))}
      </div>
    </section>
  );
}
