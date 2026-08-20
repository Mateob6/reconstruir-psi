"use client";

import { useState, type ReactNode } from "react";
import { track } from "@vercel/analytics";
import { cn } from "@/components/ui/cn";

const TABS = [
  { id: 0, label: "Preescolar", sub: "0–5 años", icon: "🧒" },
  { id: 1, label: "Primaria", sub: "6–12 años", icon: "📚" },
  { id: 2, label: "Secundaria", sub: "12–18 años", icon: "🎓" },
];

interface LevelTabsProps {
  children: [ReactNode, ReactNode, ReactNode];
}

export function LevelTabs({ children }: LevelTabsProps) {
  const [active, setActive] = useState(1);

  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-border bg-surface">
      <div className="flex border-b border-border">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => { setActive(tab.id); track("tab_switch", { tab: tab.label }); }}
            className={cn(
              "flex flex-1 flex-col items-center gap-0.5 px-3 py-3 text-center transition-colors",
              active === tab.id
                ? "border-b-2 border-accent bg-accent/5 text-accent"
                : "text-muted hover:bg-surface-raised hover:text-foreground",
            )}
          >
            <span className="text-lg" aria-hidden="true">{tab.icon}</span>
            <span className="text-sm font-semibold">{tab.label}</span>
            <span className="text-[11px] opacity-70">{tab.sub}</span>
          </button>
        ))}
      </div>
      <div className="p-5 text-sm leading-relaxed text-foreground">
        {children[active]}
      </div>
    </div>
  );
}
