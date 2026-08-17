"use client";

import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

const TITLES: Record<string, string> = {
  "/escuelas": "Escuelas",
  "/escuelas/esta-semana": "Esta semana",
  "/escuelas/primer-mes": "Primer mes",
  "/escuelas/primer-semestre": "Primer semestre",
  "/escuelas/largo-plazo": "Largo plazo",
  "/escuelas/evidencia": "Evidencia",
  "/escuelas/recursos": "Recursos",
  "/escuelas/experiencia": "Experiencia internacional",
  "/trabajo": "Trabajo",
  "/referencias": "Referencias",
  "/acerca": "Acerca de",
};

export function Header() {
  const pathname = usePathname();
  const title = TITLES[pathname] ?? "Reconstruir Psi";

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-border bg-surface px-4 py-3 pl-16 md:pl-4">
      <h1 className="truncate text-base font-semibold text-foreground">{title}</h1>
      <div className="shrink-0">
        <ThemeToggle />
      </div>
    </header>
  );
}
