"use client";

import { useEffect, useState, ReactNode } from "react";
import { cn } from "@/components/ui/cn";

export interface EffectBarProps {
  label: string;
  value: number;
  maxValue: number;
  unit?: string;
  variant?: "default" | "favor" | "unfavor";
  className?: string;
}

export function EffectBar({
  label,
  value,
  maxValue,
  unit = "",
  variant = "default",
  className,
}: EffectBarProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const percentage = Math.max(0, Math.min(100, (value / maxValue) * 100));

  const variantStyles = {
    default: "bg-[var(--accent)] text-[var(--accent)]",
    favor: "bg-[var(--success)] text-[var(--success)]",
    unfavor: "bg-[var(--danger)] text-[var(--danger)]",
  };

  const bgClass = variantStyles[variant].split(" ")[0];
  const textClass = variantStyles[variant].split(" ")[1];

  return (
    <div className={cn("flex items-center gap-4 py-1.5", className)}>
      <div className="w-[120px] sm:w-[150px] shrink-0 text-sm font-medium text-[var(--foreground)] truncate" title={label}>
        {label}
      </div>
      <div className="flex-grow h-[10px] sm:h-[12px] bg-[var(--surface-raised)] rounded-full overflow-hidden flex items-center">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-1000 ease-out",
            bgClass
          )}
          style={{ width: mounted ? `${percentage}%` : "0%" }}
        />
      </div>
      <div className={cn("w-[50px] shrink-0 text-right text-sm font-mono font-semibold", textClass)}>
        {value}
        {unit}
      </div>
    </div>
  );
}

export interface EffectBarListProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export function EffectBarList({ title, children, className }: EffectBarListProps) {
  return (
    <div className={cn("flex flex-col gap-1 w-full", className)}>
      {title && (
        <div className="text-xs font-mono font-medium text-[var(--muted)] mb-3 pb-2 border-b border-[var(--border)] uppercase tracking-wider">
          {title}
        </div>
      )}
      <div className="flex flex-col gap-2">
        {children}
      </div>
    </div>
  );
}
