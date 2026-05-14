import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Bruno Souza | Desenvolvedor Backend",
  description:
    "Portfólio de Bruno Souza, desenvolvedor backend em formação, com projetos em Python, CRUD, persistência de dados e links diretos para o GitHub.",
  openGraph: {
    title: "Bruno Souza | Desenvolvedor Backend",
    description:
      "Projetos em Python, CRUD, persistência de dados e evolução prática para desenvolvimento backend.",
    url: "/",
    siteName: "Bruno Souza",
    images: [
      {
        url: "/bruno-souza-hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Retrato profissional de Bruno Souza",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruno Souza | Desenvolvedor Backend",
    description:
      "Portfólio com projetos em Python, CRUD, persistência de dados e foco em backend.",
    images: ["/bruno-souza-hero.jpeg"],
  },
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
