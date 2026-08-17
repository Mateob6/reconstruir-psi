import { Stat, StatGrid } from "./stat";

interface PageHeroProps {
  title: string;
  subtitle: string;
  stats?: { value: string; label: string }[];
}

export function PageHero({ title, subtitle, stats }: PageHeroProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      <p className="mt-2 text-muted">{subtitle}</p>
      {stats && stats.length > 0 && (
        <StatGrid className="mt-6">
          {stats.map((s, i) => (
            <Stat key={i} value={s.value} label={s.label} />
          ))}
        </StatGrid>
      )}
    </div>
  );
}
