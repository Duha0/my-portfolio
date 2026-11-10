import { services } from "../data/portfolio";
import { icons } from "./Icons";

export default function Services() {
  return (
    <section id="services" className="section reveal">
      <h2>Services</h2>
      <p className="services-intro">What I can help you with</p>
      <div className="services-grid">
        {services.map((service) => (
          <article key={service.name} className="service-card">
            <div className="service-icon">{icons[service.icon]}</div>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}