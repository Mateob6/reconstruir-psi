interface Step {
  num: number;
  title: string;
  subtitle: string;
  description: string;
}

interface StepCardsProps {
  steps: Step[];
}

export function StepCards({ steps }: StepCardsProps) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((step) => (
        <div
          key={step.num}
          className="rounded-xl border border-border bg-surface p-4"
        >
          <div className="text-2xl font-bold text-accent">{step.num}</div>
          <div className="text-sm font-semibold text-foreground">
            {step.title}
          </div>
          <div className="text-xs text-muted">{step.subtitle}</div>
          <p className="mt-2 text-sm text-foreground">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
