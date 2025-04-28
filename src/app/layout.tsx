import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gerador de Senha",
  description: "Aplicação para gerar senhas seguras",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.className} h-screen w-screen
       bg-gradient-to-r from-slate-900 to-slate-700`}
      >
        {children}
      </body>
    </html>
  );
}
