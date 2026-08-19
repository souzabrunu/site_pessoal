import { profile } from "@/data/profile";

export function Experience() {
  return (
    <section id="experiencia" className="content-section experience-section">
      <div className="section-shell section-heading-row" data-reveal="left">
        <p className="section-label">Experiência e repertório</p>
        <h2>Capacidades organizadas pelo que consigo entregar.</h2>
      </div>

      <div className="section-shell capability-grid">
        {profile.capabilities.map((capability, index) => (
          <article key={capability.title} data-reveal>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{capability.title}</h3>
            <p>{capability.description}</p>
            <ul>
              {capability.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>

      <div className="section-shell journey-grid" data-reveal="right">
        <div>
          <p className="section-label">Trajetória</p>
          <h3>Uma evolução feita de entregas.</h3>
        </div>
        <ol>
          {profile.journey.map((item) => (
            <li key={item.title}>
              <span>{item.period}</span>
              <div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="section-shell credentials" data-reveal>
        <div className="credentials-heading">
          <p className="section-label">Cursos e credenciais</p>
          <p>Formações complementares que sustentam minha prática.</p>
        </div>
        <div className="credential-list">
          {profile.credentials.map((credential) => (
            <a key={credential.name} href={credential.link} target="_blank" rel="noreferrer">
              <span>{credential.issuer}</span>
              <strong>{credential.name}</strong>
              <small>{credential.duration} · Abrir ↗</small>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
