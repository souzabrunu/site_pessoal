import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="sobre" className="content-section section-shell about-section">
      <div className="section-label">Sobre</div>
      <div className="about-content" data-reveal="right">
        <p className="about-lead">
          Desenvolvimento de software com visão de interface, produto e entrega.
        </p>
        <div className="about-columns">
          <p>
            Trabalho na construção de aplicações web, interfaces e landing pages, organizando conteúdo e fluxos para que cada entrega seja clara, responsiva e funcional.
          </p>
          <p>
            Também mantenho o Rivio em evolução e amplio minha base técnica em desenvolvimento de software, transformando requisitos em experiências digitais concretas.
          </p>
        </div>
        <div className="about-links">
          <a href={profile.contact.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={profile.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href={profile.contact.resume} target="_blank" rel="noreferrer">Currículo ↗</a>
        </div>
      </div>
    </section>
  );
}
