import type { ReactNode } from "react";
import { cn } from "@/components/ui/cn";

type CalloutType = "info" | "warning" | "danger" | "success";

const styles: Record<CalloutType, { box: string; icon: string }> = {
  info: {
    box: "border-accent bg-accent-subtle",
    icon: "ℹ",
  },
  warning: {
    box: "border-warning bg-warning-subtle",
    icon: "⚠",
  },
  danger: {
    box: "border-danger bg-danger-subtle",
    icon: "✕",
  },
  success: {
    box: "border-success bg-success-subtle",
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
    <div className={cn("rounded-xl border-l-4 p-4", s.box)}>
      {title && (
        <p className="mb-2 flex items-center gap-2 font-semibold text-foreground">
          <span aria-hidden="true">{s.icon}</span>
          {title}
        </p>
      )}
      <div className="text-sm leading-relaxed text-foreground">{children}</div>
    </div>
  );
}
