"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/components/ui";

const TIMELINE_STEPS = [
  { href: "/escuelas", label: "Vista general", exact: true },
  { href: "/escuelas/esta-semana", label: "Esta semana", exact: false },
  { href: "/escuelas/primer-mes", label: "Primer mes", exact: false },
  { href: "/escuelas/primer-semestre", label: "Primer semestre", exact: false },
  { href: "/escuelas/largo-plazo", label: "Largo plazo", exact: false },
];

export function TopTimeline() {
  const pathname = usePathname();

  // Ocultar la línea de tiempo si no estamos en la sección de escuelas
  if (!pathname.startsWith("/escuelas")) return null;

  return (
    <div className="w-full border-b border-border bg-surface/80 backdrop-blur-md sticky top-[60px] z-10">
      <div className="flex w-full overflow-x-auto p-3 no-scrollbar scroll-smooth">
        <div className="flex mx-auto items-center gap-2 min-w-max px-4">
          {TIMELINE_STEPS.map((step, index) => {
            const isActive = step.exact 
              ? pathname === step.href 
              : pathname.startsWith(step.href);
            
            // Determine if the step is past (before the active step)
            const activeIndex = TIMELINE_STEPS.findIndex(s => s.exact ? pathname === s.href : pathname.startsWith(s.href));
            const isPast = activeIndex > -1 && index < activeIndex;

            return (
              <div key={step.href} className="flex items-center">
                <Link
                  href={step.href}
                  className={cn(
                    "flex items-center justify-center rounded-full px-4 py-1.5 text-sm transition-all duration-300 relative group",
                    isActive
                      ? "bg-teal-500/10 text-teal-600 font-semibold shadow-sm ring-1 ring-teal-500/20 dark:bg-teal-500/20 dark:text-teal-300"
                      : isPast
                        ? "text-muted hover:text-foreground"
                        : "text-muted/70 hover:text-foreground"
                  )}
                >
                  {isPast && !isActive && (
                    <svg className="w-4 h-4 mr-1.5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  {step.label}
                  {/* Micro-animación de hover */}
                  {!isActive && (
                    <span className="absolute inset-0 rounded-full bg-surface-raised opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />
                  )}
                </Link>
                {index < TIMELINE_STEPS.length - 1 && (
                  <div className={cn(
                    "h-px w-6 mx-2 transition-colors duration-300",
                    isPast || isActive ? "bg-teal-500/30" : "bg-border"
                  )} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
