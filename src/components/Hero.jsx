import { personal } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <span className="availability">
          <span className="dot" /> {personal.availability}
        </span>
        <h1>{personal.title}</h1>
        <p className="hero-intro">
          I build modern, responsive websites and interactive web applications. Based in Kigali, Rwanda.
        </p>
        <div className="hero-ctas">
          <a href="#projects" className="btn primary">View My Work</a>
          <a href="#contact" className="btn secondary">Let's Connect</a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="orb" />
      </div>
    </section>
  );
}
