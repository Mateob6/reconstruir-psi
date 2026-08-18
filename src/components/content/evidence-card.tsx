import { cn } from "@/components/ui/cn";

export interface EvidenceCardProps {
  year: string;
  title: string;
  meta: { k: string; n: string };
  description: string;
  href?: string;
  linkLabel?: string;
  className?: string;
}

export function EvidenceCard({
  year,
  title,
  meta,
  description,
  href,
  linkLabel = "Ver estudio →",
  className,
}: EvidenceCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col h-full bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-5 sm:p-6",
        className
      )}
    >
      <div className="text-xs font-mono font-semibold text-[var(--accent)] mb-3 uppercase tracking-wide">
        {year}
      </div>
      <h3 className="text-lg font-bold text-[var(--foreground)] mb-3 leading-snug">
        {title}
      </h3>
      <div className="flex items-center gap-3 text-xs font-mono font-medium text-[var(--muted)] mb-4 bg-[var(--surface-raised)] py-1.5 px-3 rounded-md self-start">
        <span>k = {meta.k}</span>
        <span className="w-[3px] h-[3px] bg-[var(--muted)] rounded-full opacity-50" />
        <span>N = {meta.n}</span>
      </div>
      <p className="text-[14.5px] text-[var(--muted)] leading-relaxed mb-5 flex-grow">
        {description}
      </p>
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-foreground)] transition-colors mt-auto self-start inline-flex items-center group"
        >
          {linkLabel}
          <span className="ml-1 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0">
            ↗
          </span>
        </a>
      )}
    </div>
  );
}

export interface EvidenceGridProps {
  children: React.ReactNode;
  className?: string;
}

export function EvidenceGrid({ children, className }: EvidenceGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",
        className
      )}
    >
      {children}
    </div>
  );
}
