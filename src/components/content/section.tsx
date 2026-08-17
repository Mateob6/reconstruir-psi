import type { ReactNode } from "react";

interface SectionProps {
  title: string;
  id?: string;
  children: ReactNode;
}

export function Section({ title, id, children }: SectionProps) {
  const sectionId = id ?? title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
  return (
    <section id={sectionId} className="scroll-mt-16">
      <h2 className="mb-4 text-xl font-semibold text-foreground">{title}</h2>
      <div className="space-y-4 text-base leading-relaxed text-foreground">{children}</div>
    </section>
  );
}
