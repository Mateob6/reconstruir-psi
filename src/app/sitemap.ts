import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://reconstruir-psi.vercel.app";
  const routes = [
    { path: "", priority: 1 },
    { path: "/educacion", priority: 0.9 },
    { path: "/educacion/esta-semana", priority: 0.8 },
    { path: "/educacion/primer-mes", priority: 0.8 },
    { path: "/educacion/primer-semestre", priority: 0.8 },
    { path: "/educacion/largo-plazo", priority: 0.8 },
    { path: "/educacion/evidencia", priority: 0.8 },
    { path: "/educacion/recursos", priority: 0.8 },
    { path: "/educacion/experiencia", priority: 0.8 },
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
