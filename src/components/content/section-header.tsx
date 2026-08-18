import { cn } from "@/components/ui/cn";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  id?: string;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered,
  id,
  className,
}: SectionHeaderProps) {
  return (
    <div
      id={id}
      className={cn(
        "flex flex-col gap-3",
        centered && "items-center text-center",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3 text-xs font-mono font-medium tracking-wider uppercase text-[var(--accent)]",
          centered && "justify-center"
        )}
      >
        <span className="w-6 h-[2px] bg-[var(--accent)] rounded-full" />
        <span>{eyebrow}</span>
      </div>
      <h2
        className={cn(
          "font-sans font-extrabold tracking-tight text-[var(--foreground)]",
          "text-[clamp(24px,2.8vw,34px)] leading-[1.15]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-[var(--muted)] text-[15px] sm:text-base leading-relaxed max-w-[70ch]",
            centered && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
