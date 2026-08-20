"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { track } from "@vercel/analytics";

export function ExternalLinkTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.href;
      if (!href || (!href.startsWith("http://") && !href.startsWith("https://"))) return;

      try {
        const url = new URL(href);
        if (url.hostname === window.location.hostname) return;
        track("external_link", { url: href, page: pathname });
      } catch {}
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname]);

  return null;
}
