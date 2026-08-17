import type { ReactNode } from "react";

interface KeyMessageProps {
  children: ReactNode;
}

export function KeyMessage({ children }: KeyMessageProps) {
  return (
    <p className="rounded-r-lg border-l-3 border-accent bg-accent-subtle px-4 py-3 text-base font-medium leading-relaxed text-foreground">
      {children}
    </p>
  );
}
