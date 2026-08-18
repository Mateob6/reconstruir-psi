import type { ReactNode } from "react";
import { cn } from "@/components/ui/cn";

type CalloutType = "info" | "warning" | "danger" | "success";

const styles: Record<CalloutType, { box: string; icon: string }> = {
  info: {
    box: "border-teal-500/30 bg-teal-500/5 dark:bg-teal-500/10 text-teal-800 dark:text-teal-200",
    icon: "ℹ",
  },
  warning: {
    box: "border-amber-500/30 bg-amber-500/5 dark:bg-amber-500/10 text-amber-800 dark:text-amber-200",
    icon: "⚠",
  },
  danger: {
    box: "border-rose-500/30 bg-rose-500/5 dark:bg-rose-500/10 text-rose-800 dark:text-rose-200",
    icon: "✕",
  },
  success: {
    box: "border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-200",
    icon: "✓",
  },
};

interface CalloutProps {
  type: CalloutType;
  title?: string;
  children: ReactNode;
}

export function Callout({ type, title, children }: CalloutProps) {
  const s = styles[type];
  return (
    <div className={cn("relative overflow-hidden rounded-xl border p-5 shadow-sm backdrop-blur-sm transition-all hover:shadow-md", s.box)}>
      {title && (
        <p className="mb-2 flex items-center gap-2 font-bold tracking-tight">
          <span aria-hidden="true" className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-xs">
            {s.icon}
          </span>
          {title}
        </p>
      )}
      <div className="text-sm leading-relaxed opacity-90">{children}</div>
    </div>
  );
}
