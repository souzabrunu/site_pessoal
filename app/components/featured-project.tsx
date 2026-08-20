import Image from "next/image";
import { profile } from "@/data/profile";

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

        <div className="product-preview">
          <Image
            src="/rivio-preview.png"
            alt="Tela do sistema Rivio mostrando a agenda de atendimentos"
            width={1321}
            height={912}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
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
