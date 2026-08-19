import type { Metadata } from "next";
import {
  SectionHeader,
  InsightCard,
  InsightGrid,
  EffectBar,
  EffectBarList,
  Stat,
  StatGrid,
  StickySectionNav,
  Callout,
  DataTable,
  KeyMessage,
  Ref,
  Term,
} from "@/components/content";

export const metadata: Metadata = {
  title: "Largo plazo",
  description:
    "Marco Integral de Seguridad Escolar (CSSF), escuelas seguras, lección de Japón y marco colombiano GIRE para la reconstrucción.",
};

export default function LargoPlazoPage() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 space-y-16 pb-24">
      {/* Hero Section */}
      <div className="pt-24 pb-8 max-w-3xl">
        <p className="text-sm font-bold tracking-wider text-[var(--accent)] uppercase mb-4">
          AÑO 1 EN ADELANTE
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] tracking-tight mb-6">
          Construir escuelas más seguras y comunidades más resilientes
        </h1>
        <p className="text-xl text-[var(--muted)] leading-relaxed mb-12">
          <Term id="cssf">Marco Integral de Seguridad Escolar</Term> (CSSF), escuelas seguras, lección de Japón y marco colombiano <Term id="gire">Gestión Integral del Riesgo Escolar</Term> (GIRE) para la reconstrucción.
        </p>

        <StatGrid>
          <Stat value="3" label="Pilares del Marco de Seguridad Escolar (CSSF)" />
          <Stat value="42.5% → ~100%" label="Escuelas seguras Japón" />
          <Stat value="BBB" label="Marco de Sendai: Reconstruir mejor" />
          <Stat value="006519" label="Resolución de Gestión del Riesgo Escolar 2025" />
        </StatGrid>
      </div>

      <StickySectionNav
        items={[
          { id: "cssf", label: "CSSF" },
          { id: "instalaciones", label: "Instalaciones" },
          { id: "gestion", label: "Gestión" },
          { id: "educacion-drr", label: "Reducción del riesgo" },
          { id: "japon", label: "Japón" },
          { id: "colombia", label: "Marco colombiano" },
        ]}
      />

      <div className="space-y-0">
        {/* CSSF */}
        <section id="cssf" style={{ scrollMarginTop: "120px" }} className="py-16 border-t border-[var(--border)]">
          <SectionHeader
            eyebrow="Marco global 2022-2030"
            title="Marco Integral de Seguridad Escolar"
          />
          <div className="max-w-3xl space-y-6 text-[var(--foreground)] leading-relaxed mb-10">
            <p>
              El <strong>CSSF 2022-2030</strong> (Comprehensive School Safety Framework) constituye la
              referencia global para integrar la reducción del riesgo de desastres en los sistemas
              educativos. Su estructura se organiza en una fundación de sistemas habilitantes sobre la
              que se articulan tres pilares complementarios<Ref id="R-101" />.
            </p>
            <p>
              La fundación establece las condiciones sistémicas necesarias para que los tres pilares
              operen de manera efectiva, incluyendo la evaluación de riesgos, las medidas de continuidad,
              la cultura de seguridad y la protección de la inversión educativa.
            </p>
          </div>

          <InsightGrid className="mb-10">
            <InsightCard
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              }
              title="Sistemas habilitantes"
              description="Evaluación de riesgos, medidas de continuidad, cultura de seguridad y protección de la inversión."
            />
            <InsightCard
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              }
              title="Instalaciones seguras"
              description="Códigos de construcción, evaluación estructural, agua, saneamiento e higiene (WASH) y riesgo por caída de objetos (no estructural)."
            />
            <InsightCard
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              }
              title="Gestión y continuidad"
              description="Planes de respuesta, simulacros y modalidades alternativas de entrega educativa."
            />
            <InsightCard
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              }
              title="Educación en reducción del riesgo"
              description="Formación docente, currículo de reducción del riesgo (DRR) + educación socioemocional (SEL) y cambio climático."
            />
          </InsightGrid>

          <DataTable
            caption="CSSF 2022-2030: Componentes del Marco Integral de Seguridad Escolar"
            headers={["Componente", "Alcance", "Estrategias clave"]}
            rows={[
              [
                "Fundación",
                "Sistemas habilitantes",
                "Evaluación de riesgo, medidas de continuidad, cultura de seguridad, protección de la inversión",
              ],
              [
                "Pilar 1: Instalaciones seguras",
                "Infraestructura",
                "Códigos de construcción, control de calidad, evaluación de edificios existentes, agua, saneamiento e higiene (WASH), mantenimiento, mitigación de riesgo por caída de objetos (no estructural)",
              ],
              [
                "Pilar 2: Gestión y continuidad",
                "Operación",
                "Planes de respuesta, procedimientos operativos, simulacros, modalidades alternativas de entrega educativa",
              ],
              [
                "Pilar 3: Educación en reducción del riesgo",
                "Currículo",
                "Formación docente, mensajes comunitarios, materiales de calidad, integración reducción del riesgo (DRR) + educación socioemocional (SEL) + cambio climático",
              ],
            ]}
          />
        </section>

        {/* Instalaciones */}
        <section id="instalaciones" style={{ scrollMarginTop: "120px" }} className="py-16 border-t border-[var(--border)]">
          <SectionHeader
            eyebrow="Pilar 1"
            title="Instalaciones seguras"
          />
          <div className="max-w-3xl space-y-6 text-[var(--foreground)] leading-relaxed">
            <p>
              El primer pilar del CSSF aborda la dimensión física de la seguridad escolar: códigos de
              construcción para nuevas edificaciones, protocolos de evaluación estructural para las
              existentes, condiciones de agua, saneamiento e higiene (<Term id="wash">WASH</Term>) y mantenimiento preventivo.
            </p>
            <p>
              En el contexto del terremoto de agosto de 2026, la Secretaría de Educación de Cali
              desplegó <span className="font-mono text-sm px-1 py-0.5 bg-[var(--surface-raised)] rounded">10 equipos</span> de ingenieros estructurales para
              evaluar <span className="font-mono text-sm px-1 py-0.5 bg-[var(--surface-raised)] rounded">217 sedes</span> oficiales. De
              las <span className="font-mono text-sm px-1 py-0.5 bg-[var(--surface-raised)] rounded">89 instituciones</span> y 214 sedes que reportaron daños,
              la evaluación determina cuáles espacios pueden habilitarse para el retorno presencial y
              cuáles requieren alternativas temporales<Ref id="R-111" />.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4"><Term id="riesgo-no-estructural">Riesgo no estructural</Term></h3>
            <p>
              La mitigación del <strong>riesgo no estructural</strong> merece atención particular. Los
              terremotos causan lesiones no solo por el colapso de edificaciones, sino también por la
              caída de objetos, estanterías, equipos de laboratorio y materiales almacenados sin
              asegurar. Estas medidas pueden implementarse con inversión mínima y efecto inmediato.
            </p>
          </div>
        </section>

        {/* Gestión y continuidad */}
        <section id="gestion" style={{ scrollMarginTop: "120px" }} className="py-16 border-t border-[var(--border)]">
          <SectionHeader
            eyebrow="Pilar 2"
            title="Gestión y continuidad"
          />
          <div className="max-w-3xl space-y-6 text-[var(--foreground)] leading-relaxed">
            <p>
              El segundo pilar se centra en la capacidad operativa de las instituciones educativas para
              responder ante una emergencia y garantizar la continuidad del servicio educativo: planes de
              respuesta, procedimientos operativos estandarizados, simulacros periódicos y planificación
              de contingencia con modalidades alternativas.
            </p>
            <p>
              Colombia cuenta con un marco normativo que ha evolucionado recientemente. Los <strong><Term id="pegr">Planes
              Escolares de Gestión del Riesgo</Term> (PEGR)</strong>, establecidos por la Guía No. 59 del <Term id="men">Ministerio de Educación Nacional</Term> (MEN)
              en 2015<Ref id="R-105" />, fueron ampliados mediante la <strong><Term id="resolucion-006519">Resolución
              006519</Term></strong> de abril de <span className="font-mono text-sm px-1 py-0.5 bg-[var(--surface-raised)] rounded">2025</span><Ref id="R-107" />,
              que los transformó en <strong>Planes de Gestión Integral del Riesgo Escolar
              (<Term id="pgire">PGIRE</Term>)</strong>. Este nuevo marco incorpora amenazas sociales y <Term id="amenaza-antropica">antrópicas</Term> (causadas por actividad humana) junto a las
              naturales.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">El Cuadernillo GIRE</h3>
            <p>
              El <strong>Cuadernillo GIRE</strong>, publicado por el MEN en enero de 2026, aporta
              herramientas prácticas organizadas en tres momentos de la gestión del riesgo:
              &quot;Conocimiento del riesgo&quot; (identificación participativa de amenazas),
              &quot;Reducción del riesgo&quot; (medidas preventivas y de mitigación), y &quot;Manejo de
              la situación&quot; (respuesta cuando ocurre un evento)<Ref id="R-106" />.
            </p>
          </div>
        </section>

        {/* Educación DRR */}
        <section id="educacion-drr" style={{ scrollMarginTop: "120px" }} className="py-16 border-t border-[var(--border)]">
          <SectionHeader
            eyebrow="Pilar 3"
            title="Educación en reducción del riesgo"
          />
          <div className="max-w-3xl space-y-6 text-[var(--foreground)] leading-relaxed">
            <p>
              El tercer pilar del CSSF integra la educación sobre reducción del riesgo de desastres en el
              currículo formal y no formal. Su alcance incluye la formación de competencias docentes, el
              desarrollo de materiales de calidad, la producción de mensajes comunitarios y la
              articulación de la reducción del riesgo con la educación socioemocional y la educación
              sobre cambio climático.
            </p>
            <p>
              La experiencia chilena ofrece un modelo valioso: enseñar sobre los sismos a partir de la
              experiencia vivida permite articular simultáneamente la comprensión científica del fenómeno
              y el procesamiento emocional de lo ocurrido<Ref id="R-001" />.
            </p>
            <p>
              El Componente 1 del Cuadernillo GIRE proporciona actividades concretas.
              El <strong>&quot;Mural de Sentires&quot;</strong> permite a la comunidad educativa expresar
              y compartir sus emociones tras el evento.
              Las <strong>&quot;Señales Seguras&quot;</strong> proponen señalización participativa de
              espacios escolares, accesible incluso a la primera infancia.
              Las <strong>&quot;Rutinas que Acompañan&quot;</strong> utilizan calendarios visuales para
              generar anticipación y sensación de seguridad<Ref id="R-106" />.
            </p>
          </div>
        </section>

        {/* Japón */}
        <section id="japon" style={{ scrollMarginTop: "120px" }} className="py-16 border-t border-[var(--border)]">
          <SectionHeader
            eyebrow="Caso de estudio"
            title="La lección de Japón"
          />
          <div className="max-w-3xl space-y-6 text-[var(--foreground)] leading-relaxed mb-10">
            <p>
              El terremoto de Kobe de 1995 destruyó
              aproximadamente <span className="font-mono text-sm px-1 py-0.5 bg-[var(--surface-raised)] rounded">4,000</span> escuelas y transformó la
              política pública japonesa de seguridad escolar de manera irreversible. Japón puso en marcha
              un <strong>programa nacional de seguridad escolar</strong> que llevó la proporción de
              escuelas sísmica-resistentes
              del <span className="font-mono text-sm px-1 py-0.5 bg-[var(--surface-raised)] rounded">42,5%</span> en 2002 a cifras cercanas
              al <span className="font-mono text-sm px-1 py-0.5 bg-[var(--surface-raised)] rounded">100%</span> en la actualidad<Ref id="R-079" />.
            </p>
            
            <div className="my-8">
              <EffectBarList title="Progreso en seguridad escolar sísmica — Japón">
                <EffectBar label="2002" value={42.5} maxValue={100} unit="%" variant="unfavor" />
                <EffectBar label="Actualidad" value={98} maxValue={100} unit="%" variant="favor" />
              </EffectBarList>
            </div>

            <p>
              Esta transformación requirió compromiso político sostenido durante dos décadas,
              financiamiento dedicado proveniente tanto del gobierno central como de las prefecturas, y
              estándares técnicos aplicados de manera uniforme en todo el sistema educativo. El programa
              no se limitó a las nuevas construcciones sino que incluyó el <Term id="retrofit">reforzamiento estructural</Term> (retrofit) de
              las edificaciones existentes.
            </p>
            <p>
              Japón exporta hoy su modelo a través de programas de cooperación internacional en Perú, El
              Salvador, Turquía y Filipinas, demostrando que las lecciones aprendidas tras un desastre
              pueden convertirse en capacidad técnica transferible.
            </p>

            <KeyMessage>
              La experiencia japonesa ilustra que la seguridad escolar sísmica es alcanzable cuando
              existe voluntad política sostenida y estándares técnicos aplicados sistemáticamente.
            </KeyMessage>
          </div>
        </section>

        {/* Marco colombiano */}
        <section id="colombia" style={{ scrollMarginTop: "120px" }} className="py-16 border-t border-[var(--border)]">
          <SectionHeader
            eyebrow="Contexto nacional"
            title="Marco colombiano"
          />
          <div className="max-w-3xl space-y-6 text-[var(--foreground)] leading-relaxed">
            <p>
              Colombia dispone de un conjunto de instrumentos normativos que proveen la base para una
              estrategia de largo plazo. La <strong>Guía No. 59</strong> del
              MEN<Ref id="R-105" /> establece las directrices para los Planes Escolares de Gestión del
              Riesgo, mientras que las guías de la <strong><Term id="ungrd">Unidad Nacional para la Gestión del Riesgo</Term></strong><Ref id="R-108" /> complementan
              la perspectiva institucional con herramientas operativas.
            </p>
            <p>
              En respuesta al terremoto, el MEN
              redirigió <span className="font-mono text-sm px-1 py-0.5 bg-[var(--surface-raised)] rounded">$48 millones</span> de dólares del Programa de
              Espacios Educativos hacia la recuperación y reconstrucción de infraestructura
              educativa<Ref id="R-116" />.
            </p>

            <div className="my-10 rounded-2xl border border-amber-300/40 bg-amber-50 dark:bg-amber-900/10 p-8">
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-amber-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100 m-0"><Term id="bbb">Reconstruir mejor</Term> (Build Back Better)</h3>
                  <p className="text-amber-800 dark:text-amber-200/80">
                    El principio <strong>&quot;Reconstruir mejor&quot;</strong> (Build Back Better) del <Term id="marco-sendai">Marco
                    de Sendai</Term> establece que la reconstrucción posterior a un desastre debe superar los
                    estándares de seguridad previos al evento. Para las escuelas colombianas, esto significa
                    que las reparaciones derivadas del terremoto de 2026 no deben limitarse a restaurar el
                    estado anterior, sino aprovechar la oportunidad para elevar los estándares de seguridad
                    sísmica, accesibilidad y condiciones sanitarias.
                  </p>
                  <div className="mt-4 pt-4 border-t border-amber-200 dark:border-amber-900/50">
                    <p className="text-sm text-amber-800 dark:text-amber-200/80">
                      <strong>Primera prueba del nuevo marco:</strong> La Resolución 006519 de abril 2025 amplió el alcance de los planes
                      escolares de gestión del riesgo apenas cuatro meses antes del terremoto del 10 de agosto.
                      Este evento constituye la primera prueba a gran escala del marco actualizado.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
