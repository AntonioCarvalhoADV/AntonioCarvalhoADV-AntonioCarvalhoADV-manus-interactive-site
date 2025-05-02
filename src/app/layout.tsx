import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout"; // Ajuste o caminho se necessário

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manus IA - Site Interativo",
  description: "Explore a criação e as capacidades de Manus IA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

