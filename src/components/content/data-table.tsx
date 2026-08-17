import type { ReactNode } from "react";

interface DataTableProps {
  headers: string[];
  rows: (string | ReactNode)[][];
  caption?: string;
}

export function DataTable({ headers, rows, caption }: DataTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-left text-sm">
        {caption && (
          <caption className="border-b border-border bg-surface px-4 py-2 text-left text-xs font-medium text-muted">
            {caption}
          </caption>
        )}
        <thead>
          <tr className="bg-surface-raised">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 text-xs font-semibold tracking-wide text-muted">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-t border-border bg-surface">
              {row.map((cell, ci) => (
                <td key={ci} className="px-4 py-3 text-foreground">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
