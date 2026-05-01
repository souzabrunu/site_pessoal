import Image from "next/image";
import { profile } from "@/data/profile";
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

          <div className="nav-links">
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`}>
                {section.label}
              </a>
            ))}
          </div>
        </nav>

        <section id="topo" className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow">Currículo vivo • foco em backend</p>
            <h1>{profile.role}</h1>
            <p className="headline">{profile.headline}</p>
            <p className="intro">{profile.intro}</p>

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

            <div className="hero-details">
              <p className="hero-details-title">O que estou fortalecendo agora</p>
              <ul className="hero-details-list">
                {profile.currentFocus.slice(0, 3).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
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
            <div className="hero-photo-card">
              <div className="hero-photo-frame">
                <Image
                  src="/bruno-souza-hero.jpeg"
                  alt="Retrato profissional de Bruno Souza"
                  fill
                  priority
                  sizes="(max-width: 960px) 100vw, 34vw"
                  className="hero-photo"
                />
              </div>

              <div className="hero-photo-badge">
                <span className="photo-badge-kicker">Perfil profissional</span>
                <strong>Bruno Souza</strong>
                <p>Engenharia da Computação • foco em backend</p>
              </div>
            </div>

            <aside className="hero-panel" aria-label="Resumo profissional">
              <span className="panel-label">Direção atual</span>
              <strong>Backend como carreira principal</strong>
              <p>
                Estou fortalecendo fundamentos de programação, CRUD e
                persistência de dados para transformar essa base em experiência
                prática com desenvolvimento backend.
              </p>

              <ul className="tag-list">
                <li>Python</li>
                <li>CRUD</li>
                <li>Persistência de dados</li>
                <li>APIs REST</li>
                <li>Banco de dados</li>
                <li>Git e GitHub</li>
              </ul>
            </aside>
          </div>
        </section>
      </header>

      <section id="sobre" className="content-section">
        <div className="section-heading">
          <p className="section-kicker">Quem sou eu</p>
          <h2>Uma apresentação objetiva da minha jornada até o foco em backend.</h2>
        </div>

        <div className="two-column">
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
      </section>

      <section id="momento-atual" className="content-section">
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
      </section>

      <section id="projetos" className="content-section">
        <div className="section-heading">
          <p className="section-kicker">Projetos em destaque</p>
          <h2>Projetos escolhidos para mostrar raciocínio técnico, estrutura e evolução prática.</h2>
        </div>

        <div className="project-grid">
          {profile.projects.map((project) => {
            const primaryLink = project.links[0];
            const isClickable = primaryLink && !primaryLink.disabled;

            const content = (
              <article>
                <div className="project-header">
                  <h3>{project.name}</h3>
                  <div className="stack-list" aria-label="Tecnologias usadas">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

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

                <div className="project-links">
                  <span>{primaryLink?.label}</span>
                </div>
              </article>
            );

            return isClickable ? (
              <a
                key={project.name}
                className="project-card project-card-link"
                href={primaryLink.href}
                target="_blank"
                rel="noreferrer"
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
      </section>

      <section id="demonstracao" className="content-section">
        <div className="section-heading">
          <p className="section-kicker">Demonstração prática</p>
          <h2>Uma experiência curta para explorar a lógica de um projeto no próprio site.</h2>
        </div>

        <StockDemo />
      </section>

      <section id="tecnologias" className="content-section">
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
      </section>

      <section id="evolucao" className="content-section">
        <div className="section-heading">
          <p className="section-kicker">Linha do tempo</p>
          <h2>Uma leitura rápida da minha evolução até o foco atual em backend.</h2>
        </div>

        <div className="timeline">
          {profile.timeline.map((item) => (
            <article key={item.title} className="timeline-item">
              <span className="timeline-period">{item.period}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="certificacoes" className="content-section">
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
      </section>

      <section id="objetivos" className="content-section">
        <div className="section-heading">
          <p className="section-kicker">O que estou buscando</p>
          <h2>Meu objetivo é transformar estudo consistente em experiência prática.</h2>
        </div>

        <div className="goal-panel">
          <p className="goal-copy">{profile.searchFor}</p>

          <ul className="goal-list">
            {profile.careerGoals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contato" className="content-section contact-section">
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
      </section>
    </main>
  );
}
