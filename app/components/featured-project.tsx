import { profile } from "@/data/profile";

function ProductPreview() {
  return (
    <div className="product-preview" aria-hidden="true">
      <div className="preview-bar">
        <span className="preview-mark">R</span>
        <span>rivio.app</span>
        <span className="preview-plan">Completo</span>
      </div>
      <div className="preview-body">
        <div className="preview-sidebar" aria-hidden="true">
          <strong>Rivio</strong>
          {['Agenda', 'Clientes', 'Serviços', 'Comandas', 'Financeiro'].map((item, index) => (
            <span key={item} className={index === 0 ? "is-current" : undefined}>{item}</span>
          ))}
        </div>
        <div className="preview-agenda">
          <div className="agenda-heading">
            <div>
              <span>Hoje</span>
              <strong>Agenda</strong>
            </div>
            <span className="preview-action">+ Agendamento</span>
          </div>
          <div className="agenda-days" aria-hidden="true">
            <span>08<br /><strong>Seg</strong></span>
            <span className="is-today">09<br /><strong>Ter</strong></span>
            <span>10<br /><strong>Qua</strong></span>
            <span>11<br /><strong>Qui</strong></span>
            <span>12<br /><strong>Sex</strong></span>
          </div>
          <div className="appointments" aria-hidden="true">
            <span className="time">10:00</span>
            <article>
              <small>10:00 — 11:00</small>
              <strong>Juliana Alves</strong>
              <p>Corte e finalização</p>
            </article>
            <span className="time">12:30</span>
            <article className="appointment-alt">
              <small>12:30 — 13:30</small>
              <strong>Beatriz Lima</strong>
              <p>Escova modelada</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturedProject() {
  const project = profile.featuredProject;

  return (
    <article className="featured-project" data-reveal="scale">
      <div className="featured-project-head">
        <div>
          <p className="eyebrow eyebrow-light">{project.eyebrow}</p>
          <h3>{project.name}</h3>
        </div>
        <a href={project.links[0].href} target="_blank" rel="noreferrer">
          {project.links[0].label} <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="featured-project-grid">
        <div className="featured-copy">
          <h4>{project.headline}</h4>
          <p>{project.description}</p>

          <dl className="project-meta">
            <div>
              <dt>Meu papel</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Situação atual</dt>
              <dd>{project.status}</dd>
            </div>
          </dl>

          <ul className="capability-list">
            {project.capabilities.map((capability) => <li key={capability}>{capability}</li>)}
          </ul>
        </div>

        <ProductPreview />
      </div>

      <div className="case-notes">
        {project.decisions.map((item, index) => (
          <div key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h5>{item.title}</h5>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
