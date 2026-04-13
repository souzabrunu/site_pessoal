import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bruno Souza | Jornada para Backend",
  description:
    "Site pessoal em formato de currículo vivo para apresentar experiência, projetos e objetivos de carreira com foco em backend.",
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
