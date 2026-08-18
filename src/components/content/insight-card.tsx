import { ReactNode } from "react";
import { cn } from "@/components/ui/cn";

export interface InsightCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function InsightCard({
  icon,
  title,
  description,
  className,
}: InsightCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 p-5 sm:p-6 bg-[var(--background)] border border-[var(--border)] rounded-2xl shadow-sm transition-all hover:shadow-md",
        className
      )}
    >
      <div className="flex items-center justify-center w-[34px] h-[34px] rounded-lg bg-[var(--accent-subtle)] text-[var(--accent)] shrink-0">
        {icon}
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-[16.5px] font-bold text-[var(--foreground)] leading-tight">
          {title}
        </h3>
        <p className="text-[14px] text-[var(--muted)] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export interface InsightGridProps {
  children: ReactNode;
  className?: string;
}

export function InsightGrid({ children, className }: InsightGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",
        className
      )}
    >
      {children}
    </div>
  );
}
