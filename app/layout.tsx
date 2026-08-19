import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, Manrope } from "next/font/google";
import { getSiteUrl } from "@/data/site";
import "./globals.css";

const bodyFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "Bruno Souza | Desenvolvedor de software",
  description:
    "Portfólio de Bruno Souza: produtos digitais, aplicações orientadas a dados e projetos em Python, com foco crescente em backend.",
  keywords: ["Bruno Souza", "desenvolvedor de software", "backend", "Python", "produto digital", "Rivio"],
  authors: [{ name: "Bruno Souza" }],
  creator: "Bruno Souza",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Bruno Souza | Produtos digitais e aplicações orientadas a dados",
    description:
      "Conheça o Rivio e outros projetos construídos por Bruno Souza, desenvolvedor de software com foco crescente em backend.",
    url: "/",
    siteName: "Bruno Souza",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Bruno Souza — Desenvolvedor de software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruno Souza | Desenvolvedor de software",
    description: "Produtos digitais, aplicações orientadas a dados e foco crescente em backend.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f2f0e9",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
