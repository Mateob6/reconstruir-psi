import type { ReactNode } from "react";
import { cn } from "@/components/ui/cn";

interface StatProps {
  value: string;
  label: string;
}

export function Stat({ value, label }: StatProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-surface p-4 text-center transition-all hover:border-accent/40 hover:shadow-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <p className="relative text-3xl font-black tracking-tight text-accent transition-transform group-hover:scale-105">{value}</p>
      <p className="relative mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
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
