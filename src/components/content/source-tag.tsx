interface SourceTagProps {
  id: string;
  text: string;
}

export function Source({ id, text }: SourceTagProps) {
  return (
    <span className="text-xs text-muted" title={`Referencia ${id}`}>
      ({text})
    </span>
  );
}
