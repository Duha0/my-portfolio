import { skillCategories } from "../data/portfolio";
import { icons } from "./Icons";

export default function Skills() {
  return (
    <section id="skills" className="section reveal">
      <h2>Skills</h2>
      <div className="skills-categories">
        {skillCategories.map((category) => (
          <div key={category.name} className="skill-category">
            <h3 className="skill-category-title">{category.name}</h3>
            <div className="skills-grid">
              {category.skills.map((skill) => (
                <div key={skill.name} className="skill-card">
                  <div className="skill-icon">{icons[skill.icon] || icons.javascript}</div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}