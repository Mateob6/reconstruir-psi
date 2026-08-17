interface TimelineItem {
  time: string;
  label: string;
  description?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;

        return (
          <div
            key={i}
            className={`relative border-l-2 border-border pl-6 ${isLast ? "" : "pb-4"}`}
          >
            <div className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-accent" />
            <div className="text-xs font-semibold text-accent">{item.time}</div>
            <div className="text-sm font-semibold text-foreground">
              {item.label}
            </div>
            {item.description && (
              <div className="text-xs text-muted">{item.description}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
