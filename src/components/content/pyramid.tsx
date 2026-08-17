interface PyramidLevel {
  label: string;
  description: string;
  color: "accent" | "success" | "warning" | "danger";
}

interface PyramidProps {
  levels: PyramidLevel[];
  caption?: string;
}

const colorStyles: Record<string, { bg: string; border: string }> = {
  accent: { bg: "bg-accent-subtle", border: "border-accent" },
  success: { bg: "bg-success-subtle", border: "border-success" },
  warning: { bg: "bg-warning-subtle", border: "border-warning" },
  danger: { bg: "bg-danger-subtle", border: "border-danger" },
};

export function Pyramid({ levels, caption }: PyramidProps) {
  const n = levels.length;

  return (
    <div>
      <div className="flex flex-col items-center gap-1">
        {levels.map((level, i) => {
          const widthPercent = ((i + 1) / n) * 60 + 40;
          const styles = colorStyles[level.color];

          return (
            <div
              key={i}
              className={`${styles.bg} ${styles.border} mx-auto rounded-lg border-l-4 px-4 py-2 text-center`}
              style={{ width: `${widthPercent}%` }}
            >
              <div className="text-sm font-semibold">{level.label}</div>
              <div className="text-xs text-muted">{level.description}</div>
            </div>
          );
        })}
      </div>
      {caption && (
        <p className="mt-2 text-center text-xs text-muted">{caption}</p>
      )}
    </div>
  );
}
