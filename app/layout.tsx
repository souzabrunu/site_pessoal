import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MotionEnhancer } from "@/app/components/motion-enhancer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bruno Souza — Desenvolvedor de software",
  description:
    "Produtos digitais, aplicações web e landing pages desenvolvidos por Bruno Souza.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MotionEnhancer />
        {children}
      </body>
    </html>
  );
}
