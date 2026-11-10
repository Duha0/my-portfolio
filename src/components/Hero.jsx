import { useRef, useEffect } from "react";
import { personal } from "../data/portfolio";

const codeLines = [
  { num: 1, indent: 0, tokens: [{ type: "keyword", text: "const" }, { type: "whitespace", text: " " }, { type: "variable", text: "developer" }, { type: "whitespace", text: " " }, { type: "operator", text: "=" }, { type: "whitespace", text: " " }, { type: "punctuation", text: "{" }] },
  { num: 2, indent: 1, tokens: [{ type: "property", text: "name" }, { type: "punctuation", text: ":" }, { type: "whitespace", text: " " }, { type: "string", text: '"Doha Mustafa"' }, { type: "punctuation", text: "," }] },
  { num: 3, indent: 1, tokens: [{ type: "property", text: "role" }, { type: "punctuation", text: ":" }, { type: "whitespace", text: " " }, { type: "string", text: '"Frontend Developer & Web Creator"' }, { type: "punctuation", text: "," }] },
  { num: 4, indent: 1, tokens: [{ type: "property", text: "location" }, { type: "punctuation", text: ":" }, { type: "whitespace", text: " " }, { type: "string", text: '"Kigali, Rwanda"' }, { type: "punctuation", text: "," }] },
  { num: 5, indent: 1, tokens: [{ type: "property", text: "stack" }, { type: "punctuation", text: ":" }, { type: "whitespace", text: " " }, { type: "punctuation", text: "[" }, { type: "string", text: '"React"' }, { type: "punctuation", text: "," }, { type: "whitespace", text: " " }, { type: "string", text: '"JavaScript"' }, { type: "punctuation", text: "," }, { type: "whitespace", text: " " }, { type: "string", text: '"CSS"' }, { type: "punctuation", text: "]" }, { type: "punctuation", text: "," }] },
  { num: 6, indent: 1, tokens: [{ type: "property", text: "currentlyBuilding" }, { type: "punctuation", text: ":" }, { type: "whitespace", text: " " }, { type: "string", text: '"StudyAI"' }, { type: "punctuation", text: "," }] },
  { num: 7, indent: 1, tokens: [{ type: "property", text: "openToWork" }, { type: "punctuation", text: ":" }, { type: "whitespace", text: " " }, { type: "keyword", text: "true" }] },
  { num: 8, indent: 0, tokens: [{ type: "punctuation", text: "}" }] },
  { num: 9, indent: 0, tokens: [{ type: "comment", text: "// Building modern web experiences" }] },
];

const techBadges = [
  { name: "HTML", color: "#E34F26", glow: "rgba(227, 79, 38, 0.4)" },
  { name: "CSS", color: "#1572B6", glow: "rgba(21, 114, 182, 0.4)" },
  { name: "JS", color: "#F7DF1E", glow: "rgba(247, 223, 30, 0.4)" },
  { name: "React", color: "#61DAFB", glow: "rgba(97, 218, 251, 0.4)" },
];

export default function Hero() {
  const codeRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const cursor = codeRef.current?.querySelector(".cursor");
    if (!cursor) return;

    const interval = setInterval(() => {
      cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0";
    }, 530);

    return () => clearInterval(interval);
  }, []);

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
        <div className="code-window">
          <div className="code-window-header">
            <div className="window-dots">
              <span className="dot close" />
              <span className="dot minimize" />
              <span className="dot maximize" />
            </div>
            <div className="window-title">portfolio.jsx</div>
          </div>
          <div className="code-editor" ref={codeRef}>
            <div className="line-numbers">
              {codeLines.map((line) => <span key={line.num}>{line.num}</span>)}
            </div>
            <pre className="code-content">
              {codeLines.map((line) => (
                <div key={line.num} className="code-line" style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
                  {line.tokens.map((token, i) => (
                    <span key={i} className={`token token-${token.type}`}>{token.text}</span>
                  ))}
                  {line.num === 8 && <span className="cursor" aria-hidden="true" />}
                </div>
              ))}
            </pre>
          </div>
          <div className="tech-badges">
            {techBadges.map((badge) => (
              <span key={badge.name} className="tech-badge" style={{ "--badge-color": badge.color, "--badge-glow": badge.glow }}>
                {badge.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}