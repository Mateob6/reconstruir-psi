import { Stat, StatGrid } from "./stat";

interface PageHeroProps {
  title: string;
  subtitle: string;
  stats?: { value: string; label: string }[];
}

export function PageHero({ title, subtitle, stats }: PageHeroProps) {
  return (
    <div className="relative mb-10 overflow-hidden rounded-2xl bg-surface-raised p-6 md:p-8 border border-border">
      <div className="absolute top-0 right-0 -mt-16 -mr-16 h-48 w-48 rounded-full bg-accent/5 blur-3xl" />
      <h2 className="relative text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      <p className="relative mt-3 max-w-2xl text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
      {stats && stats.length > 0 && (
        <StatGrid className="relative mt-8">
          {stats.map((s, i) => (
            <Stat key={i} value={s.value} label={s.label} />
          ))}
        </StatGrid>
      )}
    </div>
  );
}
