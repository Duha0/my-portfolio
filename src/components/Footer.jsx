export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Doha Mustafa. All rights reserved.</p>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </button>
    </footer>
  );
}