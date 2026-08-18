import type { Metadata } from "next";
import { REFERENCES } from "@/data/references";
import { PageHero } from "@/components/content";
import { Badge } from "@/components/ui";

export const metadata: Metadata = {
  title: "Referencias",
  description:
    "128 recursos incluidos en la revisión: meta-análisis, revisiones sistemáticas, guías institucionales y estudios primarios.",
};

const TYPE_LABELS: Record<string, string> = {
  "meta-analysis": "Meta-análisis",
  "systematic-review": "Revisión sistemática",
  guideline: "Guía",
  protocol: "Protocolo",
  paper: "Estudio",
  review: "Revisión",
  report: "Reporte",
  toolkit: "Kit de herramientas",
};

const DOMAIN_TONE: Record<string, "accent" | "success" | "warning" | "neutral"> = {
  psychosocial: "accent",
  education: "success",
  both: "warning",
};

function formatAuthors(authors: string[]): string {
  if (authors.length === 0) return "";
  if (authors.length <= 3) return authors.join(", ");
  return `${authors[0]}, ${authors[1]}, ... & ${authors[authors.length - 1]}`;
}

export default function ReferenciasPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <PageHero
        title="Referencias"
        subtitle="128 recursos incluidos en esta revisión de alcance rápida"
        stats={[
          { value: "128", label: "Recursos incluidos" },
          { value: "9", label: "Meta-análisis" },
          { value: "26", label: "Revisiones sistemáticas" },
          { value: "24", label: "Guías institucionales" },
        ]}
      />

      <ol className="space-y-4">
        {REFERENCES.map((ref) => (
          <li
            key={ref.id}
            id={ref.id}
            className="scroll-mt-20 rounded-lg border border-border bg-surface p-4 target:ring-2 target:ring-accent"
          >
            <div className="flex items-start gap-3">
              <span className="shrink-0 text-sm font-bold text-accent">[{ref.num}]</span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-foreground">{ref.title}</p>
                <p className="mt-1 text-xs text-muted">
                  {formatAuthors(ref.authors)}
                  {ref.year && ` (${ref.year})`}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <Badge tone={DOMAIN_TONE[ref.domain] ?? "neutral"}>
                    {ref.domain === "psychosocial"
                      ? "Psicosocial"
                      : ref.domain === "education"
                        ? "Educación"
                        : "Ambos"}
                  </Badge>
                  <Badge>{TYPE_LABELS[ref.type] ?? ref.type}</Badge>
                  {ref.doi && (
                    <a
                      href={`https://doi.org/${ref.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md bg-rose-500/10 px-2.5 py-1 text-[11px] font-semibold text-rose-700 hover:bg-rose-600 hover:text-white transition-colors dark:text-rose-400"
                    >
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                      DOI
                    </a>
                  )}
                  {ref.url && (
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md bg-surface-raised border border-border px-2.5 py-1 text-[11px] font-medium text-foreground hover:bg-border transition-colors"
                    >
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Ver documento
                    </a>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
