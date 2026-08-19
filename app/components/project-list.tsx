import { profile } from "@/data/profile";

export function ProjectList() {
  return (
    <div className="project-list">
      {profile.projects.map((project, index) => (
        <article key={project.name} className="project-row" data-reveal>
          <div className="project-index">{String(index + 2).padStart(2, "0")}</div>
          <div className="project-summary">
            <p className="project-eyebrow">{project.eyebrow}</p>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.links[0].href} target="_blank" rel="noreferrer">
              {project.links[0].label} <span aria-hidden="true">↗</span>
            </a>
          </div>
          <dl className="project-rationale">
            <div>
              <dt>Desafio</dt>
              <dd>{project.challenge}</dd>
            </div>
            <div>
              <dt>Decisão</dt>
              <dd>{project.decision}</dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  );
}
