import { About } from "@/app/components/about";
import { ActiveNav } from "@/app/components/active-nav";
import { Contact } from "@/app/components/contact";
import { Experience } from "@/app/components/experience";
import { FeaturedProject } from "@/app/components/featured-project";
import { Hero } from "@/app/components/hero";
import { ProjectList } from "@/app/components/project-list";
import { ScrollReveal } from "@/app/components/scroll-reveal";
import { profile } from "@/data/profile";

const sections = [
  { id: "projetos", label: "Projetos" },
  { id: "sobre", label: "Sobre" },
  { id: "experiencia", label: "Experiência" },
  { id: "contato", label: "Contato" },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>

      <header className="site-header">
        <nav className="section-shell topbar" aria-label="Navegação principal">
          <a className="brand" href="#inicio" aria-label="Bruno Souza, início">
            Bruno<span> Souza</span>
          </a>
          <ActiveNav sections={sections} />
          <a className="header-contact" href={profile.contact.whatsapp} target="_blank" rel="noreferrer">
            Conversar com Bruno ↗
          </a>
        </nav>
      </header>

      <main id="conteudo">
        <ScrollReveal />
        <Hero />

        <section id="projetos" className="content-section projects-section">
          <div className="section-shell section-heading-row" data-reveal="left">
            <p className="section-label">Projetos selecionados</p>
            <h2>Produtos e landing pages que saíram da ideia e ganharam forma.</h2>
          </div>
          <div className="section-shell">
            <FeaturedProject />
            <ProjectList />
          </div>
        </section>

        <About />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
