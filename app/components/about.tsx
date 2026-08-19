import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="sobre" className="content-section section-shell about-section">
      <div className="section-label">Sobre</div>
      <div className="about-content" data-reveal="right">
        <p className="about-lead">
          Gosto de entender o sistema inteiro: quem usa, qual problema precisa ser resolvido e como os dados percorrem cada etapa.
        </p>
        <div className="about-columns">
          <p>
            Minha trajetória combina Engenharia da Computação, projetos autorais em Python e a experiência de colocar um produto digital real no ar.
          </p>
          <p>
            Hoje, avanço em backend sem perder a visão de produto: regras de negócio claras, experiências simples e entregas que resolvem uma rotina concreta.
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
