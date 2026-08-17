import { Badge } from "@/components/ui";

interface CaseCardProps {
  country: string;
  year: number;
  magnitude: string;
  deaths: string;
  schools?: string;
  lesson: string;
}

export function CaseCard({
  country,
  year,
  magnitude,
  deaths,
  schools,
  lesson,
}: CaseCardProps) {
  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <div className="flex items-center gap-2">
        <span className="text-lg font-semibold text-foreground">
          {country} ({year})
        </span>
        <Badge tone="danger">{magnitude}</Badge>
      </div>

      <div className="mt-2 flex gap-4">
        <div>
          <span className="font-semibold text-accent">{deaths}</span>
          <span className="ml-1 text-xs text-muted">Fallecidos</span>
        </div>
        {schools && (
          <div>
            <span className="font-semibold text-accent">{schools}</span>
            <span className="ml-1 text-xs text-muted">Escuelas afectadas</span>
          </div>
        )}
      </div>

      <p className="mt-3 text-sm font-medium italic text-accent">{lesson}</p>
    </div>
  );
}
