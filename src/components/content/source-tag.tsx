import Link from "next/link";
import { REF_MAP } from "@/data/references";

interface RefProps {
  id: string;
  also?: string[];
}

function refNum(id: string): string {
  return id.replace("R-", "").replace(/^0+/, "");
}

function refTooltip(id: string): string {
  const ref = REF_MAP.get(id);
  return ref?.tooltip ?? id;
}

export function Ref({ id, also }: RefProps) {
  const ids = [id, ...(also ?? [])];

  return (
    <sup className="ml-0.5">
      {ids.map((refId, i) => (
        <span key={refId}>
          {i > 0 && <span className="text-muted">,</span>}
          <Link
            href={`/referencias#${refId}`}
            title={refTooltip(refId)}
            className="text-accent hover:underline"
          >
            {refNum(refId)}
          </Link>
        </span>
      ))}
    </sup>
  );
}
