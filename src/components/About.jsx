import { about } from "../data/portfolio";
import { icons } from "./Icons";

export default function About() {
  return (
    <section id="about" className="section reveal">
      <div className="about-content">
        <div className="about-text">
          <h2>About</h2>
          {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          <div className="about-highlights">
            <div className="highlight">
              <div className="highlight-icon">{icons.layout}</div>
              <div>
                <strong>BIT Student</strong>
                <span>Business Information Technology</span>
              </div>
            </div>
            <div className="highlight">
              <div className="highlight-icon">{icons.component}</div>
              <div>
                <strong>Frontend Focus</strong>
                <span>React, JavaScript, CSS</span>
              </div>
            </div>
            <div className="highlight">
              <div className="highlight-icon">{icons.refresh}</div>
              <div>
                <strong>Continuous Learning</strong>
                <span>Building real projects daily</span>
              </div>
            </div>
          </div>
        </div>
        <div className="about-visual" aria-hidden="true">
          <div className="code-showcase">
            <div className="code-header">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <pre className="code-snippet"><code>{`const developer = {
  name: "Doha Mustafa",
  role: "Frontend Developer",
  location: "Kigali, Rwanda",
  stack: ["React", "JavaScript", "CSS"],
  currentlyBuilding: "StudyAI",
  openToWork: true
};`}</code></pre>
          </div>
        </div>
      </div>
    </section>
  );
}