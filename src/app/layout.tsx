import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
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
  metadataBase: new URL("https://reconstruir-psi.vercel.app"),
  title: {
    default: "Reconstruir Psi",
    template: "%s — Reconstruir Psi",
  },
  description:
    "Guía basada en evidencia para la respuesta psicosocial y educativa en escuelas tras el terremoto de agosto 2026 en Colombia.",
  keywords: [
    "terremoto",
    "Colombia",
    "psicosocial",
    "escuelas",
    "intervención",
    "evidencia",
    "2026",
    "TEPT",
    "educación en emergencias",
  ],
  authors: [{ name: "Mateo Belalcázar Correa" }],
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "Reconstruir Psi",
    title: "Reconstruir Psi",
    description:
      "Guía basada en evidencia para la respuesta psicosocial y educativa en escuelas tras el terremoto de agosto 2026 en Colombia.",
    url: "https://reconstruir-psi.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reconstruir Psi",
    description:
      "Guía basada en evidencia para la respuesta psicosocial y educativa en escuelas post-terremoto.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex h-full font-sans">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <Header />
          <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
