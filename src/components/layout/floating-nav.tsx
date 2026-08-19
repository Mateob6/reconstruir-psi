"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/components/ui/cn";

interface NavItem {
  href: string;
  label: string;
  icon: string;
}

const ESCUELAS_NAV: NavItem[] = [
  { href: "/escuelas/evidencia", label: "Evidencia", icon: "📊" },
  { href: "/escuelas/recursos", label: "Recursos", icon: "📁" },
  { href: "/escuelas/experiencia", label: "Experiencia", icon: "🌍" },
  { href: "/referencias", label: "Referencias", icon: "📚" },
];

function getItems(pathname: string): NavItem[] {
  if (pathname.startsWith("/escuelas") || pathname === "/referencias") return ESCUELAS_NAV;
  return [];
}

export function FloatingNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const items = getItems(pathname);

  if (items.length === 0) return null;

  return (
    <>
      {/* Desktop: floating panel */}
      <nav
        aria-label="Navegación de sección"
        className="fixed right-6 top-1/2 z-20 hidden -translate-y-1/2 xl:block"
      >
        <div className="w-[160px] rounded-xl border border-border bg-surface/90 p-2 shadow-lg backdrop-blur-md">
          <ul className="space-y-0.5">
            {items.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
                      active
                        ? "bg-accent-subtle font-semibold text-accent"
                        : "text-muted hover:bg-surface-raised hover:text-foreground",
                    )}
                  >
                    <span aria-hidden="true" className="text-base">{item.icon}</span>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile: FAB */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-transform hover:scale-105 active:scale-95 xl:hidden"
        aria-label="Abrir navegación de sección"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile: bottom sheet */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40 xl:hidden"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <nav
            aria-label="Navegación de sección"
            className="fixed inset-x-0 bottom-0 z-50 rounded-t-2xl border-t border-border bg-surface p-6 shadow-2xl xl:hidden"
          >
            <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-border" />
            <ul className="space-y-1">
              {items.map((item) => {
                const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center gap-3 rounded-xl px-4 py-3 text-base transition-colors",
                        active
                          ? "bg-accent-subtle font-semibold text-accent"
                          : "text-foreground hover:bg-surface-raised",
                      )}
                    >
                      <span aria-hidden="true" className="text-xl">{item.icon}</span>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </>
      )}
    </>
  );
}
