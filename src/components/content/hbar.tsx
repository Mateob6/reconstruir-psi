interface HBarItem {
  label: string;
  value: number;
}

interface HBarProps {
  title?: string;
  items: HBarItem[];
  max?: number;
  unit?: string;
}

export function HBar({ title, items, max: maxProp, unit }: HBarProps) {
  const max = maxProp ?? Math.max(...items.map((item) => item.value));

  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      {title && (
        <div className="mb-3 text-sm font-semibold text-foreground">
          {title}
        </div>
      )}
      <div className="space-y-2">
        {items.map((item, i) => {
          const widthPercent = max > 0 ? (item.value / max) * 100 : 0;
          const opacity = Math.max(1 - i * 0.15, 0.4);

          return (
            <div key={i} className="flex items-center gap-2">
              <span className="w-28 truncate text-right text-sm text-muted">
                {item.label}
              </span>
              <div className="flex-1">
                <div
                  className="h-7 rounded-r bg-accent"
                  style={{
                    width: `${widthPercent}%`,
                    minWidth: "4px",
                    opacity,
                  }}
                />
              </div>
              <span className="w-16 text-right text-sm font-semibold text-accent">
                {item.value}
                {unit ? ` ${unit}` : ""}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
