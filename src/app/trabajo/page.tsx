import type { Metadata } from "next";
import { Badge, Card, CardTitle, CardDescription } from "@/components/ui";

export const metadata: Metadata = {
  title: "Trabajo",
  description:
    "Próximamente: guía para la respuesta psicosocial en contextos laborales post-desastre.",
};

export default function TrabajoPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <Card>
        <div className="flex items-center gap-3">
          <CardTitle>Trabajo</CardTitle>
          <Badge>Próximamente</Badge>
        </div>
        <CardDescription className="mt-2">
          Guía para la respuesta psicosocial en contextos laborales post-desastre. Salud mental
          ocupacional, apoyo a equipos de primera respuesta y retorno al trabajo. Esta sección se
          encuentra en desarrollo.
        </CardDescription>
      </Card>
    </div>
  );
}
