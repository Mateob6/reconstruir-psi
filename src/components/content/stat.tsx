import type { ReactNode } from "react";
import { cn } from "@/components/ui/cn";

interface StatProps {
  value: string;
  label: string;
}

export function Stat({ value, label }: StatProps) {
  return (
    <div className="rounded-xl border border-border bg-surface p-4 text-center">
      <p className="text-2xl font-bold text-accent">{value}</p>
      <p className="mt-1 text-xs text-muted">{label}</p>
    </div>
  );
}

interface StatGridProps {
  children: ReactNode;
  className?: string;
}

export function StatGrid({ children, className }: StatGridProps) {
  return (
    <div className={cn("grid grid-cols-2 gap-3 sm:grid-cols-4", className)}>
      {children}
    </div>
  );
}
