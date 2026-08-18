import type { ReactNode } from "react";
import { cn } from "@/components/ui/cn";

interface GridCardItem {
  title: string;
  description: ReactNode;
  icon?: string;
}

interface GridCardsProps {
  items: GridCardItem[];
  columns?: 2 | 3;
}

export function GridCards({ items, columns = 2 }: GridCardsProps) {
  return (
    <div
      className={cn(
        "grid gap-4 mt-4",
        columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"
      )}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="group relative flex flex-col justify-start rounded-xl border border-border bg-surface p-5 text-left transition-all hover:shadow-md hover:-translate-y-1 hover:border-accent/30 dark:hover:bg-surface-raised"
        >
          {item.icon && (
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-subtle text-xl text-accent transition-transform group-hover:scale-110">
              {item.icon}
            </div>
          )}
          <h4 className="mb-2 text-sm font-semibold text-foreground">
            {item.title}
          </h4>
          <div className="text-sm text-muted-foreground leading-relaxed">
            {item.description}
          </div>
        </div>
      ))}
    </div>
  );
}
