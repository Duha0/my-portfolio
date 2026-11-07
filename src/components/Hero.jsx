import { personal } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-kicker">Hi, I'm</p>
        <h1 className="hero-name">{personal.name}</h1>
        <h2 className="hero-role">{personal.title}</h2>
        <p className="hero-intro">
          I create modern, responsive websites and interactive web experiences that combine thoughtful design with practical functionality.
        </p>
        <p className="hero-location">{personal.location}</p>
        <div className="hero-ctas">
          <a href="#projects" className="btn primary">View My Work</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="profile-card">
          <div className="profile-monogram">DM</div>
          <div className="profile-name">{personal.name}</div>
          <div className="profile-role">{personal.title}</div>
          <div className="profile-location">{personal.location}</div>
          <div className="profile-tech">
            <span>React</span><span>JavaScript</span><span>CSS</span><span>Responsive Design</span>
          </div>
          <div className="profile-availability">
            <span className="dot" /> Open to Work
          </div>
        </div>
      </div>
    </section>
  );
}
