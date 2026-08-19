import Image from "next/image";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section id="inicio" className="hero section-shell">
      <div className="hero-copy">
        <p className="eyebrow">{profile.role} · Rio de Janeiro</p>
        <h1>{profile.headline}</h1>
        <p className="hero-intro">{profile.introduction}</p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projetos">
            Ver projetos <span aria-hidden="true">↘</span>
          </a>
          <a className="button button-secondary" href={profile.contact.resume} target="_blank" rel="noreferrer">
            Baixar currículo <span aria-hidden="true">↗</span>
          </a>
        </div>

        <dl className="hero-facts">
          <div>
            <dt>Projeto atual</dt>
            <dd>Rivio · SaaS em operação</dd>
          </div>
          <div>
            <dt>Direção técnica</dt>
            <dd>Produtos, dados e backend</dd>
          </div>
        </dl>
      </div>

      <div className="portrait-wrap">
        <div className="portrait-frame">
          <Image
            src="/bruno-souza.webp"
            alt="Bruno Souza, desenvolvedor de software"
            fill
            priority
            sizes="(max-width: 760px) 92vw, (max-width: 1100px) 42vw, 420px"
            className="portrait"
          />
        </div>
        <div className="portrait-caption">
          <span className="status-dot" aria-hidden="true" />
          <p>{profile.availability}</p>
        </div>
      </div>
    </section>
  );
}
