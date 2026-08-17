"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId, useState } from "react";
import { Badge, cn } from "@/components/ui";

interface NavItem {
  href: string;
  label: string;
  badge?: string;
}

interface NavSection {
  title: string | null;
  items: NavItem[];
}

const NAV: NavSection[] = [
  {
    title: "Escuelas",
    items: [
      { href: "/escuelas", label: "Vista general" },
      { href: "/escuelas/esta-semana", label: "Esta semana" },
      { href: "/escuelas/primer-mes", label: "Primer mes" },
      { href: "/escuelas/primer-semestre", label: "Primer semestre" },
      { href: "/escuelas/largo-plazo", label: "Largo plazo" },
      { href: "/escuelas/evidencia", label: "Evidencia" },
      { href: "/escuelas/recursos", label: "Recursos" },
      { href: "/escuelas/experiencia", label: "Experiencia internacional" },
    ],
  },
  {
    title: "Trabajo",
    items: [{ href: "/trabajo", label: "Trabajo", badge: "Próximamente" }],
  },
  {
    title: null,
    items: [{ href: "/acerca", label: "Acerca de" }],
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [abierto, setAbierto] = useState(false);
  const navId = useId();

  function esActivo(href: string) {
    if (href === "/escuelas") return pathname === "/escuelas";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setAbierto((v) => !v)}
        aria-expanded={abierto}
        aria-controls={navId}
        className="fixed left-3 top-3 z-30 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground md:hidden"
      >
        <span aria-hidden="true">☰</span>
        <span className="sr-only">Abrir navegación</span>
      </button>

      {abierto && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setAbierto(false)}
          aria-hidden="true"
        />
      )}

      <nav
        id={navId}
        aria-label="Navegación principal"
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-64 shrink-0 flex-col border-r border-border bg-surface transition-transform",
          "md:static md:translate-x-0",
          abierto ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="border-b border-border px-4 py-4 pt-16 md:pt-4">
          <p className="text-base font-semibold text-foreground">Reconstruir Psi</p>
          <p className="text-xs text-muted">Guía basada en evidencia</p>
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          {NAV.map((section, i) => (
            <div key={i} className={cn(i > 0 && "mt-4")}>
              {section.title && (
                <p className="mb-1 px-3 text-[11px] font-semibold tracking-wider text-muted uppercase">
                  {section.title}
                </p>
              )}
              <ul>
                {section.items.map((item) => {
                  const activo = esActivo(item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={activo ? "page" : undefined}
                        onClick={() => setAbierto(false)}
                        className={cn(
                          "flex items-center gap-2 truncate rounded-lg px-3 py-2 text-sm transition-colors",
                          activo
                            ? "bg-accent-subtle font-medium text-accent"
                            : "text-muted hover:bg-surface-raised hover:text-foreground",
                        )}
                      >
                        {item.label}
                        {item.badge && <Badge>{item.badge}</Badge>}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border px-4 py-3">
          <p className="text-xs text-muted">
            Colombia, agosto 2026
          </p>
        </div>
      </nav>
    </>
  );
}
