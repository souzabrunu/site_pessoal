import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bruno Souza | Jornada para Backend",
  description:
    "Site pessoal em formato de curriculo vivo para apresentar experiencia, projetos e objetivos de carreira com foco em backend.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
