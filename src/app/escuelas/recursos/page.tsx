import type { Metadata } from "next";
import { SectionHeader, Callout, DataTable, Ref, KeyMessage, Stat, StatGrid, StickySectionNav } from "@/components/content";
import { REFERENCES } from "@/data/references";

export const metadata: Metadata = {
  title: "Recursos y Marco de Acción",
  description:
    "Programas con evidencia (TRT, CBI), instrumentos de screening, marco normativo colombiano y guías internacionales.",
};

export default function RecursosPage() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-accent"></div>
          <span className="font-mono text-sm font-bold tracking-widest text-accent uppercase">
            Caja de Herramientas
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight font-sans">
          Recursos y Marco de Acción
        </h1>
        <p className="text-xl text-muted leading-relaxed max-w-3xl mb-12">
          Programas con evidencia empírica, instrumentos de screening validados, el marco normativo colombiano para la respuesta psicosocial y las principales guías internacionales.
        </p>

        <StatGrid>
          <Stat value="6" label="Programas perfilados" />
          <Stat value="15" label="Guías internacionales" />
          <Stat value="7" label="Instrumentos legales" />
          <Stat value="4" label="Tests de screening" />
        </StatGrid>
      </header>

      <StickySectionNav
        items={[
          { id: "programas", label: "Programas" },
          { id: "screening", label: "Screening" },
          { id: "normativo", label: "Marco legal" },
          { id: "guias", label: "Guías int." },
        ]}
      />

      <section id="programas" style={{ scrollMarginTop: "150px" }} className="py-8 border-t border-[var(--border)]">
        <SectionHeader
          eyebrow="Intervención"
          title="Programas con evidencia"
        />
        <div className="space-y-6 text-[15px] leading-relaxed text-muted mt-8">
          <p>
            La revisión de la literatura permite identificar seis programas estructurados de
            intervención psicosocial escolar con distintos niveles de evidencia empírica. Todos
            comparten un núcleo común de técnicas cognitivo-conductuales adaptadas para entornos
            grupales, pero difieren en la duración, el perfil del facilitador y la viabilidad de
            implementación en contextos como el colombiano.
          </p>

          <DataTable
            caption="Programas de intervención psicosocial escolar"
            headers={["Programa", "Sesiones", "Quién entrega", "Evidencia", "Viabilidad Colombia"]}
            rows={[
              ["TRT", "5 grupales", "No especialistas", "Alto", "Alta"],
              ["CBI", "8 grupales", "Docentes capacitados", "Moderado-alto", "Alta"],
              ["CBITS", "10 grupales", "Clínicos", "Alto", "Media"],
              ["ERASE-Stress", "Variable", "Docentes", "Alto", "Media"],
              ["SOLAR-Kids", "Breve", "No especialistas", "Piloto", "Por evaluar"],
              ["Journey of Hope", "Variable", "Docentes", "Moderado", "Por evaluar"],
            ]}
          />

          <p>
            <strong>Teaching Recovery Techniques (TRT)</strong> consiste en cinco sesiones grupales
            basadas en principios de la terapia cognitivo-conductual, diseñadas para niños, niñas y
            adolescentes de 8 a 18 años. Las evaluaciones más recientes le otorgan el nivel más alto
            de evidencia entre los 25 programas analizados por Avery et al. (2024)<Ref id="R-013" />, resultado
            confirmado de manera independiente por Cosgrove et al. (2025)<Ref id="R-012" />. El programa enseña
            habilidades específicas para manejar memorias intrusivas, activación fisiológica y
            conductas de evitación. Cuando se combina con un módulo de habilidades parentales, los
            resultados superan a los de TRT solo. El manual está disponible de forma gratuita en
            childrenandwar.org e incluye un componente de entrenamiento en línea<Ref id="R-031" />.
          </p>

          <p>
            <strong>Classroom-Based Intervention (CBI)</strong>, desarrollado por UNICEF y War Child
            Holland, se estructura en ocho sesiones grupales que integran terapia de juego, conciencia
            emocional, resolución de conflictos y aprendizaje cooperativo. Las sesiones oscilan entre
            45 y 120 minutos, y el meta-análisis de Morina et al. (2017) reporta un tamaño de efecto
            pre-post de <span className="stat-inline">g = 0,68</span> para intervenciones de aula de este tipo<Ref id="R-002" />.
          </p>

          <p>
            <strong>CBITS (Cognitive Behavioral Intervention for Trauma in Schools)</strong> comprende
            diez sesiones grupales desarrolladas por UCLA y RAND Corporation, dirigidas a población de
            10 a 15 años. El programa requiere facilitadores con formación clínica e incluye
            psicoeducación, relajación, reestructuración cognitiva y exposición gradual. Su manual es
            comercial. Existe una variante para no clínicos denominada &quot;Trauma Healing Club&quot;.
          </p>

          <p>
            <strong>ERASE-Stress</strong> es un programa entregado por docentes que recibió
            calificación de evidencia &quot;alta&quot; en la evaluación de Cosgrove et al. (2025)<Ref id="R-012" />. Sin
            embargo, un seguimiento a tres años reveló que los efectos no se sostuvieron en el
            tiempo, lo que subraya la necesidad de supervisión y acompañamiento continuos cuando son
            los docentes quienes entregan la intervención.
          </p>

          <p>
            <strong>SOLAR-Kids/Teens</strong> es un programa breve y escalable basado en un modelo de
            &quot;tamizaje y tratamiento&quot; para síntomas moderados. Se encuentra aún en fase
            piloto y su efectividad a gran escala está por evaluarse.
          </p>

          <div className="mt-8">
            <KeyMessage>
              TRT y CBI reúnen las condiciones de viabilidad más favorables para Colombia: entrega por
              no especialistas, 5 a 8 sesiones, materiales accesibles y compatibilidad institucional.
            </KeyMessage>
          </div>
        </div>
      </section>

      <section id="screening" style={{ scrollMarginTop: "150px" }} className="py-8 border-t border-[var(--border)]">
        <SectionHeader
          eyebrow="Evaluación"
          title="Instrumentos de screening"
        />
        <div className="space-y-6 text-[15px] leading-relaxed text-muted mt-8">
          <p>
            La identificación temprana de niños, niñas y adolescentes con trayectorias de riesgo
            requiere instrumentos estandarizados aplicados en momentos definidos. Cuatro instrumentos
            cuentan con validación suficiente para uso en contextos escolares post-desastre.
          </p>

          <p>
            El <strong>CRIES</strong> (Children&apos;s Revised Impact of Event Scale) evalúa síntomas
            de estrés postraumático mediante ítems de intrusión, evitación y activación. El{" "}
            <strong>CPSS</strong> (Child PTSD Symptom Scale) ofrece una medida más detallada alineada
            con los criterios diagnósticos del DSM. El <strong>UCLA PTSD Reaction Index</strong> es
            uno de los más utilizados internacionalmente y dispone de versiones para distintos rangos
            de edad. El <strong>Birleson CDI</strong> complementa la evaluación con una medida de
            sintomatología depresiva.
          </p>

          <p>
            El modelo implementado en Kobe tras el terremoto de 1995 ofrece una referencia valiosa
            para Colombia. Los docentes administraron los instrumentos en el aula con la presencia de
            un psiquiatra durante la primera aplicación, lo que permitió resolver dudas en tiempo real
            y garantizar la calidad de los datos sin sobrecargar al personal clínico<Ref id="R-079" />.
          </p>

          <div className="mt-8">
            <Callout type="info" title="Calendario de evaluación recomendado">
              <p>
                La evidencia sobre trayectorias de recuperación indica que el desarrollo más dinámico
                ocurre durante los primeros 12 meses. Las evaluaciones deben realizarse al{" "}
                <span className="stat-inline">1, 3, 6 y 12 meses</span> del evento, lo que permite
                detectar tanto las trayectorias crónicas como las de aparición tardía.
              </p>
            </Callout>
          </div>
        </div>
      </section>

      <section id="normativo" style={{ scrollMarginTop: "150px" }} className="py-8 border-t border-[var(--border)]">
        <SectionHeader
          eyebrow="Legal"
          title="Marco normativo colombiano"
        />
        <div className="space-y-6 text-[15px] leading-relaxed text-muted mt-8">
          <p>
            Colombia dispone de un conjunto articulado de instrumentos normativos que proveen la base
            institucional para la respuesta psicosocial y educativa en emergencias. Varios de estos
            marcos fueron actualizados entre 2025 y 2026, lo que los hace especialmente pertinentes
            para la respuesta al terremoto de agosto.
          </p>

          <DataTable
            caption="Instrumentos normativos colombianos"
            headers={["Instrumento", "Año", "Alcance"]}
            rows={[
              [
                <span key="1">MinSalud — Protocolo atención psicosocial <Ref id="R-027" /></span>,
                "2016",
                "Marco oficial para emergencias (Ley 1523/2012). Tres fases de respuesta, referencias a pueblos indígenas (Paez/Nasas)",
              ],
              [
                <span key="2">MinSalud — Guía salud mental en emergencias <Ref id="R-028" /></span>,
                "2016",
                "Guía clínica validada en todas las regiones colombianas",
              ],
              [
                <span key="3">MEN — Guía 59 (PEGR) <Ref id="R-105" /></span>,
                "2015",
                "Planes Escolares de Gestión del Riesgo",
              ],
              [
                <span key="4">MEN — Resolución 006519 (GIRE) <Ref id="R-107" /></span>,
                "2025",
                "PEGR se transforma en PGIRE, amplía alcance a amenazas sociales y antrópicas",
              ],
              [
                <span key="5">MEN — Cuadernillo GIRE <Ref id="R-106" /></span>,
                "2026",
                "17 actividades socioemocionales + 3 momentos de gestión del riesgo",
              ],
              [
                <span key="6">PAPSIVI <Ref id="R-039" /></span>,
                "2019",
                "Atención psicosocial para víctimas del conflicto — capacidad instalada transferible",
              ],
              [
                <span key="7">UNGRD — Plan escolar <Ref id="R-108" /></span>,
                "—",
                "Guía para planes de gestión del riesgo escolar",
              ],
            ]}
          />

          <h3 className="text-xl font-bold text-foreground mt-8 mb-4">PAPSIVI: capacidad instalada del conflicto armado</h3>
          <p>
            Un recurso singular del contexto colombiano es la infraestructura del <strong>PAPSIVI</strong> (Programa
            de Atención Psicosocial y Salud Integral a Víctimas), construida durante décadas de
            conflicto armado. Este programa ha formado redes de profesionales con experiencia en
            atención psicosocial comunitaria, trabajo con poblaciones vulnerables y adaptación
            cultural de intervenciones. Si bien fue diseñado para víctimas del conflicto, sus
            protocolos, su personal capacitado y sus redes territoriales constituyen una capacidad
            instalada que puede activarse para la respuesta a desastres naturales<Ref id="R-039" />.
          </p>
        </div>
      </section>

      <section id="guias" style={{ scrollMarginTop: "150px" }} className="py-8 border-t border-[var(--border)]">
        <SectionHeader
          eyebrow="Referencias"
          title="Guías internacionales"
        />
        <div className="space-y-6 text-[15px] leading-relaxed text-muted mt-8">
          <p>
            La revisión identificó y descargó 15 guías de organismos internacionales y nacionales que
            constituyen el corpus de referencia para la respuesta psicosocial y educativa. Estas guías
            cubren desde los primeros auxilios psicológicos inmediatos hasta los marcos de seguridad
            escolar a largo plazo, y están disponibles en español e inglés.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {["R-023", "R-024", "R-025", "R-026", "R-001", "R-041", "R-029", "R-027", "R-028", "R-101", "R-103", "R-105", "R-106", "R-107", "R-108"]
              .map(id => REFERENCES.find(r => r.id === id))
              .filter((ref): ref is NonNullable<typeof ref> => ref !== undefined)
              .map((ref) => (
              <a
                key={ref.id}
                href={ref.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col p-4 rounded-xl border border-border bg-surface hover:bg-surface-raised hover:border-accent/40 transition-colors group"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-accent bg-accent-subtle px-2 py-0.5 rounded-sm">
                    {ref.shortAuthor} {ref.year ? `(${ref.year})` : ""}
                  </span>
                  <svg className="w-4 h-4 text-muted group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold text-foreground line-clamp-3 mb-1">
                  {ref.title}
                </h4>
                <p className="text-[12px] text-muted line-clamp-1 mt-auto">
                  {ref.authors[0]}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
