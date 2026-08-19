import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section id="contato" className="contact-section">
      <div className="section-shell contact-grid" data-reveal="up">
        <p className="section-label section-label-light">Contato</p>
        <div>
          <h2>Tem um produto para construir ou uma oportunidade para conversar?</h2>
          <a className="contact-email" href={profile.contact.email}>{profile.contact.emailLabel} ↗</a>
        </div>
      </div>
      <footer className="section-shell footer">
        <p>© 2026 Bruno Souza</p>
        <div>
          <a href={profile.contact.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="#inicio">Voltar ao topo ↑</a>
        </div>
      </footer>
    </section>
  );
}
