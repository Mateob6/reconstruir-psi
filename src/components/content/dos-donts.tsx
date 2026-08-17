interface DosDontsProps {
  dos: string[];
  donts: string[];
}

export function DosDonts({ dos, donts }: DosDontsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-xl border border-border bg-success-subtle p-4">
        <p className="mb-3 flex items-center gap-2 font-semibold text-success">
          <span aria-hidden="true">✓</span> Sí hacer
        </p>
        <ul className="space-y-2">
          {dos.map((item, i) => (
            <li key={i} className="flex gap-2 text-sm text-foreground">
              <span className="shrink-0 text-success" aria-hidden="true">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-border bg-danger-subtle p-4">
        <p className="mb-3 flex items-center gap-2 font-semibold text-danger">
          <span aria-hidden="true">✕</span> No hacer
        </p>
        <ul className="space-y-2">
          {donts.map((item, i) => (
            <li key={i} className="flex gap-2 text-sm text-foreground">
              <span className="shrink-0 text-danger" aria-hidden="true">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
