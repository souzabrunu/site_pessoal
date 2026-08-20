import type { Metadata } from "next";
import Link from "next/link";

const whatsappUrl =
  "https://wa.me/5521981481814?text=Ol%C3%A1%2C%20Bruno!%20Tenho%20interesse%20em%20criar%20uma%20landing%20page%20profissional%20e%20gostaria%20de%20saber%20como%20funciona.";

export const metadata: Metadata = {
  title: "Landing pages profissionais — Bruno Souza",
  description:
    "Landing pages personalizadas, responsivas e publicadas por Bruno Souza. Conheça entregas, processo, prazo e investimento.",
  openGraph: {
    title: "Landing pages profissionais — Bruno Souza",
    description:
      "Páginas personalizadas para apresentar seu trabalho e facilitar o contato com novos clientes.",
    images: [],
  },
  twitter: {
    title: "Landing pages profissionais — Bruno Souza",
    description:
      "Páginas personalizadas para apresentar seu trabalho e facilitar o contato com novos clientes.",
    images: [],
  },
};

export default function LandingPagesService() {
  return (
    <div className="service-page">
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      <header className="site-header service-page-header">
        <Link className="brand" href="/" aria-label="Bruno Souza, página inicial">
          Bruno <span>Souza</span>
        </Link>
        <nav className="main-nav" aria-label="Navegação da página de serviço">
          <a href="#beneficios">Benefícios</a>
          <a href="#entregas">Entregas</a>
          <a href="#processo">Processo</a>
          <a href="#investimento">Investimento</a>
        </nav>
        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          Solicitar orçamento <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="conteudo">
        <section className="service-hero" id="topo">
          <div className="service-hero-copy" data-reveal>
            <Link className="back-link" href="/">
              ← Voltar ao portfólio
            </Link>
            <p className="eyebrow">Landing pages profissionais</p>
            <h1>
              Seu trabalho merece uma página que <em>faz a conversa começar.</em>
            </h1>
            <p className="hero-intro">
              Desenvolvo páginas personalizadas, responsivas e prontas para
              apresentar seus serviços com clareza, transmitir confiança e facilitar
              o contato com novos clientes.
            </p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                Solicitar orçamento <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-secondary" href="#projetos-do-servico">
                Ver projetos <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="service-hero-board" aria-label="Resumo do serviço" data-reveal data-reveal-delay="1">
            <div className="browser-mockup">
              <div className="browser-bar">
                <span />
                <span />
                <span />
              </div>
              <div className="mockup-content">
                <span className="mockup-label">Sua marca</span>
                <b />
                <b />
                <i />
                <div>
                  <em />
                  <em />
                </div>
              </div>
            </div>
            <div className="service-badges">
              <span>Responsivo</span>
              <span>Domínio próprio</span>
              <span>Publicação completa</span>
              <span>Contato direto</span>
            </div>
          </div>
        </section>

        <section className="benefits-section section-pad" id="beneficios">
          <div className="section-heading compact-heading" data-reveal>
            <p className="section-kicker">O que muda para você</p>
            <h2>
              Uma página feita para <em>valorizar o seu trabalho.</em>
            </h2>
          </div>
          <div className="benefit-grid" data-reveal data-reveal-delay="1">
            <article>
              <span>01</span>
              <h3>Apresentação profissional</h3>
              <p>Estrutura clara para transmitir credibilidade desde o primeiro contato.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Experiência responsiva</h3>
              <p>Uma página que funciona bem no celular, tablet e computador.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Contato sem atrito</h3>
              <p>Botões estratégicos de WhatsApp para encurtar o caminho até a conversa.</p>
            </article>
            <article>
              <span>04</span>
              <h3>Endereço profissional</h3>
              <p>Domínio próprio, publicação completa e conexão segura via HTTPS.</p>
            </article>
          </div>
        </section>

        <section className="service-projects section-pad" id="projetos-do-servico">
          <div className="section-heading compact-heading" data-reveal>
            <p className="section-kicker">Projetos publicados</p>
            <h2>
              Design pensado para cada <em>voz e oferta.</em>
            </h2>
          </div>
          <div className="service-project-grid" data-reveal data-reveal-delay="1">
            <a
              href="https://isabela-alves.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="service-project"
            >
              <img
                src="/projects/isabela.png"
                alt="Landing page de marketing, conteúdo e estratégia digital"
                width="2880"
                height="1800"
              />
              <div>
                <span>Marketing · Conteúdo</span>
                <strong>Isabela Alves</strong>
                <b aria-hidden="true">↗</b>
              </div>
            </a>
            <div className="service-project">
              <img
                src="/projects/claudia.png"
                alt="Landing page Autoridade que conecta"
                width="2880"
                height="1800"
              />
              <div>
                <span>Marketing estratégico</span>
                <strong>Autoridade que conecta</strong>
                <b>Prévia</b>
              </div>
            </div>
          </div>
        </section>

        <section className="deliverables-section section-pad" id="entregas" data-reveal>
          <div>
            <p className="section-kicker section-kicker-light">O que está incluído</p>
            <h2>Do primeiro alinhamento até a página no ar.</h2>
          </div>
          <ul className="deliverables-list">
            <li><span>01</span>Landing page personalizada</li>
            <li><span>02</span>Versão para celular e computador</li>
            <li><span>03</span>Botões estratégicos de WhatsApp</li>
            <li><span>04</span>Publicação completa</li>
            <li><span>05</span>Configuração do domínio</li>
            <li><span>06</span>Certificado de segurança HTTPS</li>
            <li><span>07</span>Até duas rodadas de ajustes</li>
          </ul>
        </section>

        <section className="process-section section-pad" id="processo">
          <div className="section-heading compact-heading" data-reveal>
            <p className="section-kicker">Como funciona</p>
            <h2>
              Um processo simples, com <em>começo, meio e publicação.</em>
            </h2>
          </div>
          <ol className="process-list" data-reveal data-reveal-delay="1">
            <li>
              <span>01</span>
              <strong>Conteúdo</strong>
              <p>Recebo textos, imagens e informações do seu trabalho.</p>
            </li>
            <li>
              <span>02</span>
              <strong>Entrada</strong>
              <p>O projeto começa após o pagamento de 50% do valor.</p>
            </li>
            <li>
              <span>03</span>
              <strong>Primeira versão</strong>
              <p>Desenvolvo a estrutura, o visual e a experiência da página.</p>
            </li>
            <li>
              <span>04</span>
              <strong>Revisão</strong>
              <p>Você avalia e fazemos os ajustes previstos no escopo.</p>
            </li>
            <li>
              <span>05</span>
              <strong>Publicação</strong>
              <p>Com a aprovação final, sua página entra no ar.</p>
            </li>
          </ol>
        </section>

        <section className="investment-section" id="investimento" data-reveal>
          <div className="investment-copy">
            <p className="section-kicker">Investimento</p>
            <h2>Landing page profissional</h2>
            <p>
              Um escopo objetivo para você saber o que recebe, quanto custa e quando
              fica pronto.
            </p>
          </div>
          <div className="price-card">
            <p>A partir de</p>
            <strong>R$ 900</strong>
            <span>50% para iniciar · 50% na conclusão</span>
          </div>
          <div className="deadline-card">
            <span>Prazo estimado</span>
            <strong>Até 12 dias úteis</strong>
            <p>Após o envio de todo o material necessário.</p>
          </div>
        </section>

        <section className="service-final-cta" data-reveal>
          <p className="section-kicker section-kicker-light">Próximo passo</p>
          <h2>Pronto para apresentar seu trabalho de forma mais profissional?</h2>
          <p>Conte brevemente o que você faz e o que precisa apresentar.</p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            Falar com Bruno pelo WhatsApp <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer className="site-footer service-footer-main">
        <p>© 2026 Bruno Souza · Rio de Janeiro, RJ</p>
        <div>
          <Link href="/">Portfólio</Link>
          <a href="mailto:souzabrunu@yahoo.com">E-mail</a>
          <a href="#topo">Voltar ao topo ↑</a>
        </div>
      </footer>
    </div>
  );
}
