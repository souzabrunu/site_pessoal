import type { Metadata } from "next";
import { headers } from "next/headers";

const whatsappUrl =
  "https://wa.me/5521981481814?text=Ol%C3%A1%2C%20Bruno!%20Vi%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const pageUrl = `${protocol}://${host}`;
  const socialImage = new URL("/og.png", pageUrl).toString();

  return {
    title: "Bruno Souza — Desenvolvedor de software",
    description:
      "Produtos digitais, aplicações web e landing pages desenvolvidos por Bruno Souza.",
    openGraph: {
      title: "Bruno Souza — Desenvolvedor de software",
      description:
        "Produtos digitais que funcionam. Aplicações web, SaaS e landing pages.",
      url: pageUrl,
      type: "website",
      images: [{ url: socialImage, width: 1734, height: 907 }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Bruno Souza — Desenvolvedor de software",
      description:
        "Produtos digitais que funcionam. Aplicações web, SaaS e landing pages.",
      images: [socialImage],
    },
  };
}

export default function Home() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      <header className="site-header" aria-label="Cabeçalho principal">
        <a className="brand" href="#inicio" aria-label="Bruno Souza, início">
          Bruno <span>Souza</span>
        </a>

        <nav className="main-nav" aria-label="Navegação principal">
          <a href="#projetos">Projetos</a>
          <a href="#servicos">Serviços</a>
          <a href="#trajetoria">Trajetória</a>
          <a href="#contato">Contato</a>
        </nav>

        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          Falar sobre um projeto <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">Desenvolvedor de software · Rio de Janeiro</p>
            <h1>
              Produtos digitais que funcionam.
              <em> Presença online que abre portas.</em>
            </h1>
            <p className="hero-intro">
              Sou Bruno Souza. Crio aplicações web, produtos SaaS e landing pages
              que transformam ideias em experiências claras, úteis e prontas para
              crescer.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">
                Explorar projetos <span aria-hidden="true">↓</span>
              </a>
              <a className="button button-secondary" href="#servicos">
                Conhecer serviços
              </a>
            </div>

            <a className="resume-link" href="/cur.pdf">
              Currículo para recrutadores <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="hero-visual" data-reveal data-reveal-delay="1">
            <div className="portrait-frame">
              <img
                src="/bruno-souza.webp"
                alt="Bruno Souza, desenvolvedor de software"
                width="1080"
                height="1350"
              />
            </div>
            <div className="availability-card">
              <span className="status-dot" aria-hidden="true" />
              <p>
                Disponível para <strong>projetos e oportunidades</strong>
              </p>
            </div>
          </div>
        </section>

        <section className="proof-strip" aria-label="Resumo profissional">
          <div>
            <span>01</span>
            <strong>SaaS em operação</strong>
            <p>Produto real, publicado e em evolução.</p>
          </div>
          <div>
            <span>02</span>
            <strong>Landing pages publicadas</strong>
            <p>Estratégia, interface e implementação.</p>
          </div>
          <div>
            <span>03</span>
            <strong>Engenharia da Computação</strong>
            <p>Formação técnica em desenvolvimento.</p>
          </div>
        </section>

        <section className="projects-section section-pad" id="projetos">
          <div className="section-heading" data-reveal>
            <p className="section-kicker">Projetos selecionados</p>
            <h2>
              Ideias que ganharam <em>forma, fluxo e uso real.</em>
            </h2>
            <p>
              Uma seleção que mostra produto, interface e implementação — do
              raciocínio inicial até a entrega publicada.
            </p>
          </div>

          <article className="featured-project" data-reveal>
            <div className="featured-project-copy">
              <div className="project-meta">
                <span>01</span>
                <p>Produto em operação · SaaS · PWA</p>
              </div>
              <h3>Rivio</h3>
              <p className="project-lead">
                Gestão que acompanha a rotina de profissionais da beleza.
              </p>
              <p className="project-description">
                Concebi e desenvolvi um produto para profissionais autônomos
                organizarem agenda, clientes, serviços, comandas e financeiro em
                um único fluxo.
              </p>
              <dl className="project-facts">
                <div>
                  <dt>Meu papel</dt>
                  <dd>Concepção, produto e desenvolvimento</dd>
                </div>
                <div>
                  <dt>Situação</dt>
                  <dd>Publicado, com planos recorrentes</dd>
                </div>
              </dl>
              <div className="tag-list" aria-label="Tecnologias e competências">
                <span>SaaS</span>
                <span>PWA</span>
                <span>Stripe</span>
                <span>UX/UI</span>
              </div>
              <a
                className="text-link light-link"
                href="https://www.rivioapp.com.br"
                target="_blank"
                rel="noreferrer"
              >
                Conhecer o produto <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="featured-project-media">
              <img
                src="/projects/rivio-preview.webp"
                alt="Tela do sistema Rivio mostrando a agenda de atendimentos"
                width="1321"
                height="912"
              />
              <div className="project-outcomes">
                <p>
                  <span>Problema</span>
                  Substituir cadernos e planilhas por uma rotina simples.
                </p>
                <p>
                  <span>Decisão</span>
                  Organizar o produto em torno de cada atendimento.
                </p>
                <p>
                  <span>Entrega</span>
                  Produto responsivo, instalável e com cobrança recorrente.
                </p>
              </div>
            </div>
          </article>

          <div className="technical-projects" data-reveal>
            <div>
              <p className="section-kicker">Outros projetos técnicos</p>
              <h3>Fundamentos transformados em aplicações.</h3>
            </div>
            <div className="technical-list">
              <a
                href="https://github.com/souzabrunu/estoque_produtos"
                target="_blank"
                rel="noreferrer"
              >
                <span>Python · JSON</span>
                <strong>Sistema de estoque</strong>
                <b aria-hidden="true">↗</b>
              </a>
              <a
                href="https://github.com/souzabrunu/gerenciador_clientes"
                target="_blank"
                rel="noreferrer"
              >
                <span>Python · CSV</span>
                <strong>Gerenciador de clientes</strong>
                <b aria-hidden="true">↗</b>
              </a>
              <a
                href="https://github.com/souzabrunu/Calculadora_Desconto"
                target="_blank"
                rel="noreferrer"
              >
                <span>Python · CLI</span>
                <strong>Calculadora interativa</strong>
                <b aria-hidden="true">↗</b>
              </a>
            </div>
          </div>
        </section>

        <section className="services-section" id="servicos">
          <div className="section-pad services-intro" data-reveal>
            <p className="section-kicker section-kicker-light">Serviços</p>
            <h2>
              Para quem precisa colocar uma ideia <em>na rua.</em>
            </h2>
            <p>
              Trabalho com escopo claro, comunicação direta e entregas pensadas
              para continuar úteis depois da publicação.
            </p>
          </div>

          <div className="service-grid">
            <article className="service-card service-card-featured" data-reveal>
              <p className="service-number">01</p>
              <div>
                <p className="service-type">Serviço com formato definido</p>
                <h3>Landing pages profissionais</h3>
                <p>
                  Página personalizada para apresentar seu trabalho, fortalecer sua
                  presença digital e facilitar o contato com novos clientes.
                </p>
                <ul>
                  <li>Design responsivo</li>
                  <li>Publicação completa</li>
                  <li>Configuração de domínio</li>
                  <li>Contato pelo WhatsApp</li>
                </ul>
              </div>
              <div className="service-footer">
                <p>
                  <span>A partir de</span>
                  <strong>R$ 900</strong>
                </p>
                <a className="button button-dark" href="/servicos/landing-pages">
                  Ver serviço completo <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>

            <article className="service-card" data-reveal data-reveal-delay="1">
              <p className="service-number">02</p>
              <div>
                <p className="service-type">Projeto sob medida</p>
                <h3>Produtos e aplicações web</h3>
                <p>
                  Estruturação e desenvolvimento de produtos digitais, sistemas e
                  fluxos que resolvem rotinas reais.
                </p>
                <ul>
                  <li>Definição de fluxos</li>
                  <li>Interface responsiva</li>
                  <li>Regras de negócio</li>
                  <li>Publicação e evolução</li>
                </ul>
              </div>
              <div className="service-footer">
                <p>
                  <span>Escopo</span>
                  <strong>Sob consulta</strong>
                </p>
                <a
                  className="button button-outline-light"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Conversar sobre uma ideia <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="career-section section-pad" id="trajetoria">
          <div className="career-top" data-reveal>
            <div>
              <p className="section-kicker">Sobre & repertório</p>
              <h2>
                Desenvolvimento com visão de <em>produto e entrega.</em>
              </h2>
            </div>
            <div className="about-copy">
              <p>
                Trabalho na construção de aplicações web, interfaces e landing
                pages, organizando conteúdo e fluxos para que cada entrega seja
                clara, responsiva e funcional.
              </p>
              <p>
                Também mantenho o Rivio em evolução e amplio minha base técnica em
                Engenharia da Computação, transformando requisitos em experiências
                digitais concretas.
              </p>
              <div className="social-links">
                <a href="https://github.com/souzabrunu" target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/bruno-souza-9250a4356"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>
                <a href="/cur.pdf">Currículo ↗</a>
              </div>
            </div>
          </div>

          <div className="skills-grid" aria-label="Competências principais" data-reveal>
            <article>
              <span>01</span>
              <h3>Produto</h3>
              <p>Fluxos, regras de negócio, iteração e experiência de uso.</p>
              <div className="tag-list">
                <span>SaaS</span>
                <span>PWA</span>
                <span>UX/UI</span>
              </div>
            </article>
            <article>
              <span>02</span>
              <h3>Desenvolvimento</h3>
              <p>Interfaces, integrações e aplicações web responsivas.</p>
              <div className="tag-list">
                <span>Next.js</span>
                <span>Python</span>
                <span>APIs</span>
              </div>
            </article>
            <article>
              <span>03</span>
              <h3>Entrega</h3>
              <p>Versionamento, publicação, pagamentos e evolução contínua.</p>
              <div className="tag-list">
                <span>Git</span>
                <span>Cloud</span>
                <span>Stripe</span>
              </div>
            </article>
          </div>

          <div className="timeline" data-reveal>
            <div className="timeline-heading">
              <p className="section-kicker">Trajetória</p>
              <h3>Uma evolução feita de entregas.</h3>
            </div>
            <ol>
              <li>
                <span>Agora</span>
                <div>
                  <strong>Produtos digitais e landing pages</strong>
                  <p>
                    Construção de produtos conectando clareza visual, experiência e
                    implementação.
                  </p>
                </div>
              </li>
              <li>
                <span>2025—2026</span>
                <div>
                  <strong>Aplicações e fundamentos de engenharia</strong>
                  <p>
                    Projetos com CRUD, validações e persistência em JSON e CSV,
                    publicados no GitHub.
                  </p>
                </div>
              </li>
              <li>
                <span>Formação</span>
                <div>
                  <strong>Engenharia da Computação</strong>
                  <p>
                    Desenvolvimento de fundamentos de computação, versionamento e
                    cloud.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="contact-section" id="contato" data-reveal>
          <div>
            <p className="section-kicker section-kicker-light">Vamos conversar</p>
            <h2>Um produto para construir ou uma oportunidade para compartilhar?</h2>
          </div>
          <div className="contact-actions">
            <a className="contact-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Conversar pelo WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <a href="mailto:souzabrunu@yahoo.com">souzabrunu@yahoo.com</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Bruno Souza</p>
        <div>
          <a href="https://github.com/souzabrunu" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/bruno-souza-9250a4356"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="#inicio">Voltar ao topo ↑</a>
        </div>
      </footer>
    </div>
  );
}
