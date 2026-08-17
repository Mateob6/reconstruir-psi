import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardTitle, CardDescription } from "@/components/ui";

export const metadata: Metadata = {
  title: "Escuelas",
  description:
    "Guía por fases para la respuesta psicosocial y educativa en escuelas tras el terremoto de agosto 2026 en Colombia.",
};

const SECCIONES = [
  {
    href: "/escuelas/esta-semana",
    titulo: "Esta semana",
    descripcion: "Qué hacer en los primeros 7 días tras el sismo. Primeros auxilios psicológicos, estabilización y principios de acción inmediata.",
  },
  {
    href: "/escuelas/primer-mes",
    titulo: "Primer mes",
    descripcion: "Programas escolares estructurados, rol del docente y estrategias de continuidad educativa para las primeras 4 semanas.",
  },
  {
    href: "/escuelas/primer-semestre",
    titulo: "Primer semestre",
    descripcion: "Intervenciones basadas en evidencia (TCC, TRT, CBI), recuperación de aprendizajes y adaptaciones curriculares.",
  },
  {
    href: "/escuelas/largo-plazo",
    titulo: "Largo plazo",
    descripcion: "Implementación sostenible, marcos de escuelas seguras y construcción de resiliencia institucional.",
  },
  {
    href: "/escuelas/evidencia",
    titulo: "Evidencia",
    descripcion: "Revisiones sistemáticas, meta-análisis y tamaños de efecto de las intervenciones psicosociales escolares post-desastre.",
  },
  {
    href: "/escuelas/recursos",
    titulo: "Recursos",
    descripcion: "Marcos normativos internacionales, guías de evaluación en crisis y herramientas de apoyo pedagógico.",
  },
  {
    href: "/escuelas/experiencia",
    titulo: "Experiencia internacional",
    descripcion: "Lecciones de Nepal, Ecuador, Turquía, Chile y otros países que han enfrentado terremotos y respondido desde las escuelas.",
  },
];

export default function EscuelasPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground">Escuelas</h2>
        <p className="mt-2 text-muted">
          Guía basada en evidencia para la respuesta psicosocial y educativa en contextos escolares
          tras el terremoto del 10 de agosto de 2026 en Colombia.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {SECCIONES.map((s) => (
          <Link key={s.href} href={s.href} className="group">
            <Card className="h-full transition-colors group-hover:border-accent">
              <CardTitle className="group-hover:text-accent">{s.titulo}</CardTitle>
              <CardDescription className="mt-2">{s.descripcion}</CardDescription>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
