"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/components/ui/cn";

export interface StickySectionNavProps {
  items: { id: string; label: string }[];
  className?: string;
}

export function StickySectionNav({ items, className }: StickySectionNavProps) {
  const [activeId, setActiveId] = useState<string>("");
  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const pathname = usePathname();
  const hasTimeline = pathname.startsWith("/educacion");

  // Set up intersection observer for scroll spy
  useEffect(() => {
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      }
    );

    items.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  // Scroll active item into view within the nav bar
  useEffect(() => {
    if (activeId && navRef.current) {
      const activeElement = itemRefs.current.get(activeId);
      if (activeElement) {
        const navContainer = navRef.current;
        const navRect = navContainer.getBoundingClientRect();
        const elRect = activeElement.getBoundingClientRect();

        // Check if the element is fully visible in the container
        const isFullyVisible =
          elRect.left >= navRect.left && elRect.right <= navRect.right;

        if (!isFullyVisible) {
          activeElement.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
          });
        }
      }
    }
  }, [activeId]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset by approximate header height if needed, or rely on scroll-margin-top in CSS
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!items || items.length === 0) return null;

  return (
    <div
      className={cn(
        "sticky z-10 w-full border-b border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-md",
        hasTimeline ? "top-[101px]" : "top-[60px]",
        className
      )}
    >
      <div className="mx-auto max-w-5xl px-4">
        <div
          ref={navRef}
          className="flex h-[52px] items-center gap-1 overflow-x-auto whitespace-nowrap scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map(({ id, label }) => {
            const isActive = activeId === id;
            return (
              <button
                key={id}
                ref={(el) => {
                  if (el) {
                    itemRefs.current.set(id, el);
                  } else {
                    itemRefs.current.delete(id);
                  }
                }}
                onClick={() => handleScrollTo(id)}
                className={cn(
                  "rounded-full px-3 py-2 text-[12.5px] font-semibold font-sans transition-colors duration-200",
                  isActive
                    ? "bg-[var(--accent-subtle)] text-[var(--accent)]"
                    : "text-[var(--muted)] hover:bg-[var(--surface-raised)] hover:text-[var(--foreground)]"
                )}
                aria-current={isActive ? "true" : undefined}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
