import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://reconstruir-psi.vercel.app";
  const routes = [
    { path: "", priority: 1 },
    { path: "/escuelas", priority: 0.9 },
    { path: "/escuelas/esta-semana", priority: 0.8 },
    { path: "/escuelas/primer-mes", priority: 0.8 },
    { path: "/escuelas/primer-semestre", priority: 0.8 },
    { path: "/escuelas/largo-plazo", priority: 0.8 },
    { path: "/escuelas/evidencia", priority: 0.8 },
    { path: "/escuelas/recursos", priority: 0.8 },
    { path: "/escuelas/experiencia", priority: 0.8 },
    { path: "/trabajo", priority: 0.5 },
    { path: "/acerca", priority: 0.6 },
  ];

  return routes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified: new Date("2026-08-17"),
    changeFrequency: "monthly" as const,
    priority: route.priority,
  }));
}
