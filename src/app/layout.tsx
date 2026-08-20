import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { TopTimeline } from "@/components/layout/top-timeline";
import { FloatingNav } from "@/components/layout/floating-nav";
import { Footer } from "@/components/layout/footer";
import { ScrollTracker } from "@/components/layout/scroll-tracker";
import { ExternalLinkTracker } from "@/components/layout/external-link-tracker";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
    "Guía basada en evidencia para la respuesta psicosocial y educativa en instituciones educativas tras el terremoto de agosto 2026 en Colombia.",
  keywords: [
    "terremoto",
    "Colombia",
    "psicosocial",
    "educación",
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
      "Guía basada en evidencia para la respuesta psicosocial y educativa en instituciones educativas tras el terremoto de agosto 2026 en Colombia.",
    url: "https://reconstruir-psi.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reconstruir Psi",
    description:
      "Guía basada en evidencia para la respuesta psicosocial y educativa en instituciones educativas post-terremoto.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <TopTimeline />
        <main className="flex-1 w-full mx-auto p-4 md:p-6 lg:p-8">{children}</main>
        <FloatingNav />
        <Footer />
        <ScrollTracker />
        <ExternalLinkTracker />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
