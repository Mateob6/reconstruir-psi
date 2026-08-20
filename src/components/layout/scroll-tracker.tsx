"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { track } from "@vercel/analytics";

const MILESTONES = [25, 50, 75, 100];

export function ScrollTracker() {
  const pathname = usePathname();
  const fired = useRef(new Set<number>());

  useEffect(() => {
    fired.current.clear();

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const pct = Math.round((scrollTop / docHeight) * 100);

      for (const m of MILESTONES) {
        if (pct >= m && !fired.current.has(m)) {
          fired.current.add(m);
          track("scroll_depth", { depth: `${m}%`, page: pathname });
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return null;
}
