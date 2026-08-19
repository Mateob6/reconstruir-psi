"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { cn, Badge } from "@/components/ui";

type NavLink = { href: string; label: string; badge?: string };

const NAV_LINKS: NavLink[] = [
  { href: "/escuelas", label: "Escuelas" },
  { href: "/acerca", label: "Acerca de" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 flex h-[60px] w-full items-center justify-between border-b border-border bg-surface/80 px-4 py-2 backdrop-blur-md md:px-6">
      <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          {/* Un ícono simple o el nombre del proyecto */}
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-white font-bold text-lg shadow-sm">
            ψ
          </div>
          <div className="hidden sm:block">
            <h1 className="text-sm font-bold text-foreground leading-tight">Reconstruir Psi</h1>
            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Agosto 2026</p>
          </div>
        </Link>

        {/* Secondary Navigation (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 ml-4">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-accent-subtle text-accent"
                    : "text-muted hover:bg-surface-raised hover:text-foreground"
                )}
              >
                {link.label}
                {link.badge && <Badge className="text-[9px] px-1 py-0">{link.badge}</Badge>}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex items-center gap-4 shrink-0">
        {/* Logos institucionales constantes */}
        <div className="hidden lg:flex items-center gap-3 mr-2 opacity-80 hover:opacity-100 transition-opacity">
          <a href="https://www.univalle.edu.co/" target="_blank" rel="noreferrer" title="Universidad del Valle">
            <img src="/logos/logo1.png" alt="Univalle" className="h-14 w-auto object-contain drop-shadow-sm" />
          </a>
          <div className="h-5 w-px bg-border"></div>
          <a href="https://psicologia.univalle.edu.co/" target="_blank" rel="noreferrer" title="Facultad de Psicología">
            <img src="/logos/logo2.png" alt="Facultad de Psicología" className="h-14 w-auto object-contain drop-shadow-sm" />
          </a>
        </div>
        
        <ThemeToggle />
      </div>
    </header>
  );
}
