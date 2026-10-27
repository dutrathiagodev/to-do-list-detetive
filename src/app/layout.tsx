import type { Metadata } from "next";
import { Caveat, Special_Elite, Stardos_Stencil } from "next/font/google";
import "./globals.css";

const elite = Special_Elite({ weight: "400", subsets: ["latin"], variable: "--next-elite" });
const stencil = Stardos_Stencil({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--next-stencil",
});
const hand = Caveat({ weight: "600", subsets: ["latin"], variable: "--next-hand" });

export const metadata: Metadata = {
  title: "To-Do List Detetive · Caso Aberto",
  description: "Lista de tarefas com tema de investigação: cada tarefa é um caso a resolver.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${elite.variable} ${stencil.variable} ${hand.variable}`}>
      <body className="font-elite antialiased">{children}</body>
    </html>
  );
}
