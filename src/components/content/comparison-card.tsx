import { ReactNode } from "react";
import { cn } from "@/components/ui/cn";

export interface ComparisonCardProps {
  title: string;
  favorable: { value: string; stat: string };
  unfavorable: { value: string; stat: string };
  className?: string;
}

export function ComparisonCard({
  title,
  favorable,
  unfavorable,
  className,
}: ComparisonCardProps) {
  return (
    <div className={cn("flex flex-col bg-[var(--surface)] border border-[var(--border)] rounded-xl overflow-hidden", className)}>
      <div className="py-3 px-4 border-b border-[var(--border)] bg-[var(--background)]">
        <h3 className="font-bold text-[var(--foreground)] text-[15px]">{title}</h3>
      </div>
      <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-[var(--border)]">
        {/* Favorable */}
        <div className="flex-1 flex flex-col p-4 bg-[var(--success-subtle)]/30">
          <div className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[var(--success)] mb-2">
            Favorable
          </div>
          <div className="font-semibold text-[var(--foreground)] text-[15px] leading-tight mb-1">
            {favorable.value}
          </div>
          <div className="text-xs font-mono text-[var(--muted)] mt-auto pt-2">
            {favorable.stat}
          </div>
        </div>
        
        {/* Unfavorable */}
        <div className="flex-1 flex flex-col p-4 bg-[var(--danger-subtle)]/30">
          <div className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[var(--danger)] mb-2">
            Desfavorable
          </div>
          <div className="font-semibold text-[var(--foreground)] text-[15px] leading-tight mb-1">
            {unfavorable.value}
          </div>
          <div className="text-xs font-mono text-[var(--muted)] mt-auto pt-2">
            {unfavorable.stat}
          </div>
        </div>
      </div>
    </div>
  );
}

export interface ComparisonGridProps {
  children: ReactNode;
  className?: string;
}

export function ComparisonGrid({ children, className }: ComparisonGridProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6", className)}>
      {children}
    </div>
  );
}
