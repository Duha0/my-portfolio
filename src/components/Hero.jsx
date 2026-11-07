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
        <div className="code-card">
          <div className="code-bar" />
          <div className="code-line w80" />
          <div className="code-line w60" />
          <div className="code-line w90" />
          <div className="code-line w50" />
          <div className="code-grid">
            <span /><span /><span /><span />
          </div>
        </div>
      </div>
    </section>
  );
}
