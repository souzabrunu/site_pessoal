import Image from "next/image";
import { profile } from "@/data/profile";
import { ActiveNav } from "@/app/components/active-nav";
import { BackToTop } from "@/app/components/back-to-top";
import { SiteInteractions } from "@/app/components/site-interactions";
import { StockDemo } from "@/app/components/stock-demo";

const sections = [
  { id: "sobre", label: "Sobre" },
  { id: "momento-atual", label: "Momento Atual" },
  { id: "projetos", label: "Projetos" },
  { id: "demonstracao", label: "Demonstração" },
  { id: "tecnologias", label: "Tecnologias" },
  { id: "evolucao", label: "Evolução" },
  { id: "certificacoes", label: "Certificações" },
  { id: "objetivos", label: "Objetivos" },
  { id: "contato", label: "Contato" },
];

export default function Home() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-left" aria-hidden="true" />
      <div className="ambient ambient-right" aria-hidden="true" />

      <header className="hero">
        <nav className="topbar" aria-label="Navegação principal">
          <a className="brand" href="#topo">
            {profile.name}
          </a>

          <ActiveNav sections={sections} />
        </nav>

        <section id="topo" className="hero-content layout-wide">
          <div className="hero-copy">
            <p className="eyebrow">Currículo vivo • foco em backend</p>
            <h1>
              <span>Construindo</span>
              <span>minha base</span>
              <span>para atuar com</span>
              <span>backend</span>
            </h1>
            <p className="headline">{profile.headline}</p>

            <div className="quick-facts" aria-label="Atalhos rápidos">
              {profile.quickFacts.map((item) => (
                <a
                  key={item.label}
                  className="quick-fact"
                  href={item.href}
                  target={item.href.endsWith(".pdf") ? "_blank" : undefined}
                  rel={item.href.endsWith(".pdf") ? "noreferrer" : undefined}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">
                Ver projetos
              </a>
              <a className="button button-secondary" href="/cur.pdf" target="_blank" rel="noreferrer">
                Ver currículo
              </a>
              <a className="button button-secondary" href="#contato">
                Entrar em contato
              </a>
            </div>
          </div>

          <div className="hero-side">
            <div className="hero-photo-frame">
              <Image
                src="/bruno-souza-hero.jpeg"
                alt="Retrato profissional de Bruno Souza"
                fill
                priority
                sizes="(max-width: 960px) 100vw, 42vw"
                className="hero-photo"
              />

              <div className="hero-photo-badge">
                <span className="photo-badge-kicker">Perfil profissional</span>
                <strong>Bruno Souza</strong>
                <p>Engenharia da Computação • foco em backend</p>
              </div>
            </div>
          </div>
        </section>
      </header>

      <section id="sobre" className="content-section section-about">
        <div className="layout-wide about-grid">
          <div className="about-copy">
            <p className="section-kicker">Quem sou eu</p>
            <h2>Uma apresentação objetiva da minha jornada até o foco em backend.</h2>
            <p className="body-copy">
              Estou construindo minha carreira com foco em desenvolvimento
              backend. Meu interesse principal está em entender como sistemas
              funcionam por trás da interface: fluxo de dados, estrutura de APIs,
              persistência, regras de negócio e confiabilidade.
            </p>

            <ul className="highlight-list">
              {profile.strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      <section id="momento-atual" className="content-section section-focus">
        <div className="layout-reading">
          <div className="section-heading">
            <p className="section-kicker">O que faço atualmente</p>
            <h2>Estudo direcionado para construir repertório técnico com aplicação prática.</h2>
          </div>

          <div className="focus-grid">
            {profile.currentFocus.map((item) => (
              <article key={item} className="focus-card">
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projetos" className="content-section section-projects">
        <div className="layout-wide">
          <div className="section-heading">
            <p className="section-kicker">Projetos em destaque</p>
            <h2>Projetos escolhidos para mostrar raciocínio técnico, estrutura e evolução prática.</h2>
          </div>

          <div className="project-grid">
            {profile.projects.map((project, index) => {
              const primaryLink = project.links[0];
              const isClickable = primaryLink && !primaryLink.disabled;
              const projectNumber = String(index + 1).padStart(2, "0");

              const content = (
                <article>
                  <span className="project-number" aria-hidden="true">
                    {projectNumber}
                  </span>
                  <div className="project-main">
                    <div className="project-header">
                      <div>
                        <span className="project-period">{project.period}</span>
                        <h3>{project.name}</h3>
                      </div>
                      <div className="stack-list" aria-label="Tecnologias usadas">
                        {project.stack.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                    </div>

                    <p className="project-description">{project.description}</p>

                    <div className="project-links">
                      <span className={primaryLink?.disabled ? "project-link-muted" : undefined}>
                        {primaryLink?.label}
                      </span>
                    </div>
                  </div>

                  <dl className="project-details">
                    <div>
                      <dt>Desafio técnico</dt>
                      <dd>{project.technicalChallenge}</dd>
                    </div>
                    <div>
                      <dt>Decisão principal</dt>
                      <dd>{project.decisions}</dd>
                    </div>
                    <div>
                      <dt>Aprendizado</dt>
                      <dd>{project.learning}</dd>
                    </div>
                  </dl>
                </article>
              );

              return isClickable ? (
                <a
                  key={project.name}
                  className="project-card project-card-link"
                  href={primaryLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              ) : (
                <div key={project.name} className="project-card project-card-static">
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="demonstracao" className="content-section section-demo">
        <div className="layout-wide">
          <div className="section-heading">
            <p className="section-kicker">Demonstração prática</p>
            <h2>Uma experiência curta para explorar a lógica de um projeto no próprio site.</h2>
          </div>

          <StockDemo />
        </div>
      </section>

      <section id="tecnologias" className="content-section section-technology">
        <div className="layout-wide">
          <div className="section-heading">
            <p className="section-kicker">Tecnologias em prática</p>
            <h2>Ferramentas que aparecem com frequência nos projetos que venho construindo.</h2>
          </div>

          <div className="technology-grid">
            {profile.technologies.map((technology) => (
              <article key={technology.name} className="technology-card">
                <h3>{technology.name}</h3>
                <p>{technology.context}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="evolucao" className="content-section section-timeline">
        <div className="layout-narrow">
          <div className="section-heading">
            <p className="section-kicker">Linha do tempo</p>
            <h2>Uma leitura rápida da minha evolução até o foco atual em backend.</h2>
          </div>

          <div className="timeline">
            {profile.timeline.map((item, index) => (
              <article key={item.title} className="timeline-item">
                <span className="timeline-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <span className="timeline-period">{item.period}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="certificacoes" className="content-section section-certificates">
        <div className="layout-reading">
          <div className="section-heading">
            <p className="section-kicker">Certificações e Aprendizado</p>
            <h2>Formações que complementam os projetos e reforçam minha base técnica.</h2>
          </div>

          <div className="certificate-grid">
            {profile.certificates.map((certificate) => (
              <article key={certificate.name} className="certificate-card">
                <div className="certificate-header">
                  <div>
                    <p className="certificate-issuer">{certificate.issuer}</p>
                    <h3>{certificate.name}</h3>
                  </div>

                  {(certificate.date || certificate.duration) && (
                    <div className="certificate-meta" aria-label="Informações do certificado">
                      {certificate.date ? <span>{certificate.date}</span> : null}
                      {certificate.duration ? <span>{certificate.duration}</span> : null}
                    </div>
                  )}
                </div>

                <p className="certificate-summary">{certificate.summary}</p>

                {certificate.link ? (
                  <div className="certificate-link">
                    <a href={certificate.link} target="_blank" rel="noreferrer">
                      Ver certificado
                    </a>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="objetivos" className="content-section section-goals">
        <div className="layout-wide goal-editorial">
          <div className="goal-quote">
            <p className="section-kicker">O que estou buscando</p>
            <h2>Meu objetivo é transformar estudo consistente em experiência prática.</h2>
            <p className="goal-copy">{profile.searchFor}</p>
          </div>

          <ul className="goal-list">
            {profile.careerGoals.map((goal, index) => (
              <li key={goal}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{goal}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contato" className="content-section section-contact contact-section">
        <div className="layout-narrow">
          <div className="section-heading">
            <p className="section-kicker">Contato</p>
            <h2>Links diretos para acompanhar minha trajetória e entrar em contato.</h2>
          </div>

          <div className="contact-panel">
            {profile.contact.map((item) => (
              item.label === "Currículo" ? (
                <a
                  key={item.href}
                  className="contact-link"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Currículo</span>
                  <strong>{item.value}</strong>
                </a>
              ) : (
                <a
                  key={item.href}
                  className="contact-link"
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                >
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </a>
              )
            ))}
          </div>
        </div>
      </section>
      <BackToTop />
      <SiteInteractions />
    </main>
  );
}
