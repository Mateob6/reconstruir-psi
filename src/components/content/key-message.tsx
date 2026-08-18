import type { ReactNode } from "react";

interface KeyMessageProps {
  children: ReactNode;
}

export function KeyMessage({ children }: KeyMessageProps) {
  return (
    <div className="relative my-6 overflow-hidden rounded-xl border border-accent/20 bg-accent/5 p-6 shadow-sm">
      <div className="absolute left-0 top-0 h-full w-1.5 bg-accent" />
      <p className="text-lg font-medium leading-relaxed text-foreground md:text-xl">
        {children}
      </p>
    </div>
  );
}
