import type { Metadata } from "next";
import { 
  SectionHeader, 
  Callout, 
  DosDonts, 
  DataTable, 
  Ref, 
  KeyMessage, 
  Accordion, 
  GridCards,
  StatGrid,
  Stat,
  StickySectionNav
} from "@/components/content";

export const metadata: Metadata = {
  title: "Esta semana",
  description:
    "Qué hacer en los primeros 7 días tras el sismo: primeros auxilios psicológicos, guía para directivos y docentes, continuidad educativa.",
};

export default function EstaSemanaPage() {
  const navItems = [
    { id: 'alertas', label: 'Alertas' },
    { id: 'directivos', label: 'Directivos' },
    { id: 'docentes', label: 'Docentes' },
    { id: 'continuidad', label: 'Continuidad' },
    { id: 'senales', label: 'Señales' },
    { id: 'cuidador', label: 'Cuidador' },
    { id: 'marco', label: 'Marco legal' }
  ];

  return (
    <>
      <StickySectionNav items={navItems} />
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Hero */}
        <section className="py-16 md:py-24">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-[var(--accent)]" />
              <span className="font-mono text-sm uppercase tracking-wider text-[var(--accent)]">
                PRIMEROS 7 DÍAS
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-[var(--foreground)]">
              Qué hacer en los primeros 7 días tras el sismo
            </h1>
            <p className="text-xl text-[var(--muted)] max-w-2xl">
              Qué hacer en los primeros 7 días tras el sismo: primeros auxilios psicológicos, guía para directivos y docentes, y continuidad educativa.
            </p>
          </div>
          <div className="mt-16">
            <StatGrid>
              <Stat value="287+" label="Fallecidos" />
              <Stat value="89" label="Instituciones con daños" />
              <Stat value="24 ago" label="Reapertura escolar" />
              <Stat value="106" label="Línea psicológica 24/7" />
            </StatGrid>
          </div>
        </section>

        <section id="alertas" style={{ scrollMarginTop: '120px' }} className="py-16">
          <SectionHeader eyebrow="Acción inmediata" title="Lo que NO debe hacerse" />
          <Callout type="danger" title="Lo que NO debe hacerse">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                No realizar <strong>debriefing psicológico</strong> de sesión única. La evidencia muestra
                que puede ser dañino y el IASC lo prohíbe explícitamente<Ref id="R-023" />.
              </li>
              <li>
                No forzar a los niños y niñas a narrar su experiencia del terremoto.
              </li>
              <li>
                No patologizar las reacciones normales de angustia. La mayoría de las respuestas
                emocionales en las primeras semanas son adaptativas.
              </li>
              <li>
                No reanudar actividades como si nada hubiera pasado.
              </li>
              <li>
                No penalizar académicamente por la interrupción.
              </li>
            </ul>
          </Callout>
        </section>

        <section id="directivos" style={{ scrollMarginTop: '120px' }} className="py-16 border-t border-[var(--border)]">
          <SectionHeader eyebrow="Gestión institucional" title="Para directivos escolares" />
          <div className="space-y-6">
            <p>
              La primera responsabilidad de un directivo escolar en la semana posterior al sismo es
              garantizar que ningún estudiante regrese a un espacio físicamente inseguro. Antes de
              cualquier reapertura, los equipos de ingeniería estructural deben haber evaluado cada
              sede. En Cali, la Secretaría de Educación desplegó{" "}
              <span className="font-mono text-[var(--accent)] bg-[var(--accent-subtle)] px-1 py-0.5 rounded text-sm">10 equipos</span> para
              evaluar <span className="font-mono text-[var(--accent)] bg-[var(--accent-subtle)] px-1 py-0.5 rounded text-sm">217 sedes</span> oficiales<Ref id="R-111" />, y el
              resultado determinará cuáles pueden funcionar con normalidad, cuáles requieren adecuaciones
              y cuáles necesitan alternativas temporales.
            </p>
            <p>
              Una vez confirmada la <strong>seguridad física</strong>, el paso siguiente consiste en
              activar los <strong>protocolos del Ministerio de Salud</strong> para atención psicosocial
              en emergencias<Ref id="R-027" />, sustentados en la Ley 1523 de 2012. Estos protocolos orientan la
              respuesta institucional y ofrecen un marco legal para las decisiones que los directivos
              deberán tomar en las semanas siguientes.
            </p>

            <Accordion items={[
              {
                title: "Autocuidado docente",
                content: (
                  <p>
                    Un paso que suele omitirse en la urgencia de reabrir consiste en organizar una jornada de
                    autocuidado docente antes de que los estudiantes regresen. Los docentes son simultáneamente
                    implementadores de la respuesta y personas afectadas por el desastre. Si llegan al primer
                    día sin haber procesado su propia experiencia, la calidad de su contención emocional se
                    verá comprometida.
                  </p>
                )
              },
              {
                title: "Equipo de respuesta",
                content: (
                  <p>
                    También conviene designar un <strong>equipo interno de respuesta</strong> que sirva como
                    punto de contacto para derivaciones, articulación con servicios externos y seguimiento de
                    casos. Este equipo debe incluir al menos un orientador escolar, un directivo y un docente
                    de confianza para los estudiantes.
                  </p>
                )
              }
            ]} />

            <Callout type="info" title="Reapertura en Cali">
              <p>
                La Secretaría de Educación de Cali anunció la reapertura de los colegios oficiales para
                el 24 de agosto de 2026, con tres modalidades según la situación de cada comunidad
                educativa (presencial, virtual o híbrida). La Semana de Desarrollo Institucional del 18
                al 21 de agosto es la ventana para preparar a los docentes. Con 89 instituciones y 214
                sedes que reportaron daños, los diez equipos de ingenieros estructurales desplegados
                evalúan cuáles espacios pueden habilitarse y cuáles necesitan alternativas.
              </p>
            </Callout>
          </div>
        </section>

        <section id="docentes" style={{ scrollMarginTop: '120px' }} className="py-16 border-t border-[var(--border)]">
          <SectionHeader eyebrow="En el aula" title="Para docentes en el aula" />
          <div className="space-y-6">
            <KeyMessage>
              La <strong>presencia estable, predecible y afectuosa</strong> de un adulto es el factor
              protector más importante para un niño o niña tras un desastre<Ref id="R-024" />.
            </KeyMessage>

            <p>
              La evidencia converge en un conjunto de acciones que los docentes pueden implementar desde
              el primer día de retorno, sin requerir formación especializada en salud mental.
            </p>

            <DosDonts
              dos={[
                "Restaurar rutinas lo antes posible — la estructura da seguridad",
                "Crear un espacio diario de expresión (15-20 minutos)",
                "Escuchar con contención: mirar a los ojos, no interrumpir, reflejar emociones",
                "Dar explicaciones honestas y simples sobre los sismos, adecuadas a la edad",
                "Permitir el juego, la actividad física y la risa — son sanadores naturales",
                "Preparar a los niños y niñas para las réplicas (qué hacer, a dónde ir)",
                "Involucrar a los estudiantes en acciones solidarias (empodera sin exponer)",
              ]}
              donts={[
                "No forzar a hablar del terremoto — respetar silencios y tiempos",
                "No usar el sismo como material de trabajo (dibujar el terremoto, escribir sobre el miedo)",
                "No separar a los niños de sus cuidadores salvo por seguridad",
                "No confundir evitación con normalidad — observar sin presionar",
                "No asumir el rol de profesional de salud mental",
                "No descuidar el propio bienestar — un docente agotado no puede contener",
              ]}
            />
          </div>
        </section>

        <section id="continuidad" style={{ scrollMarginTop: '120px' }} className="py-16 border-t border-[var(--border)]">
          <SectionHeader eyebrow="Reapertura escolar" title="Continuidad educativa" />
          <div className="space-y-6">
            <p>
              La reapertura de las instituciones educativas tras un desastre no constituye un simple acto
              administrativo de reanudación. La evidencia internacional la posiciona como una{" "}
              <strong>intervención en sí misma</strong>, dado que restaura rutinas, estructura temporal,
              contacto con pares y acceso a adultos de referencia, todos ellos factores protectores
              documentados tanto en la dimensión psicosocial como en la educativa.
            </p>
            <p>
              El riesgo de postergar el retorno se encuentra bien documentado. En Nepal, donde{" "}
              <span className="font-mono text-[var(--accent)] bg-[var(--accent-subtle)] px-1 py-0.5 rounded text-sm">1 millón</span> de estudiantes vieron interrumpida su
              educación tras el terremoto de 2015, el gobierno
              desplegó <span className="font-mono text-[var(--accent)] bg-[var(--accent-subtle)] px-1 py-0.5 rounded text-sm">15,000</span> centros de aprendizaje transicional en
              el plazo de un mes<Ref id="R-121" />. La introducción de actividades lúdicas, exploración al aire
              libre y ciencias creativas en estos espacios facilitó una atmósfera que favoreció la
              elaboración del trauma sin sacrificar el proceso educativo.
            </p>
            <p>
              En Ecuador, tras el terremoto de 2016, el Ministerio de Educación implementó el plan
              &quot;Escuela para todos, juntos nos levantamos&quot;<Ref id="R-126" />, que se convirtió en referencia
              regional por articular la respuesta inmediata con la recuperación a mediano plazo. El plan
              combinó espacios temporales, turnos diferenciados, kits escolares de emergencia y
              acompañamiento psicosocial.
            </p>

            <h3 className="text-2xl font-medium mt-8 mb-4">La experiencia colombiana</h3>
            <p>
              El marco colombiano de <strong>Gestión Integral del Riesgo Escolar (GIRE)</strong> prevé
              esta situación. La Fase 2, denominada &quot;Acogida&quot;, establece las condiciones para
              recibir a la comunidad educativa tras la emergencia, priorizando el restablecimiento de
              vínculos, la evaluación de necesidades y la adecuación de los espacios disponibles. La
              Fase 3, &quot;Manejo de la situación&quot;, orienta los ajustes necesarios a la atención
              educativa<Ref id="R-106" />.
            </p>

            <Callout type="info" title="Colombia, agosto 2026">
              <p>
                <span className="font-mono text-[var(--accent)] bg-[var(--accent-subtle)] px-1 py-0.5 rounded text-sm">1,819</span> centros educativos resultaron afectados a
                nivel nacional<Ref id="R-116" />. El MEN redirigió{" "}
                <span className="font-mono text-[var(--accent)] bg-[var(--accent-subtle)] px-1 py-0.5 rounded text-sm">$48 millones de dólares</span> del Programa de Espacios
                Educativos hacia la recuperación<Ref id="R-116" />. En Cali, 89 instituciones y 214 sedes
                reportaron daños. La Semana de Desarrollo Institucional del 18 al 21 de agosto es la
                ventana para preparar a los docentes antes de la reapertura del 24 de agosto.
              </p>
            </Callout>
          </div>
        </section>

        <section id="senales" style={{ scrollMarginTop: '120px' }} className="py-16 border-t border-[var(--border)]">
          <SectionHeader eyebrow="Observación y tamizaje" title="Señales de alerta" />
          <div className="space-y-6">
            <p>
              Las reacciones emocionales en las primeras semanas tras un desastre son, en su mayoría,
              respuestas normales a una situación anormal. Sin embargo, transcurridas
              aproximadamente <span className="font-mono text-[var(--accent)] bg-[var(--accent-subtle)] px-1 py-0.5 rounded text-sm">4 semanas</span>, ciertos indicadores
              sugieren que un estudiante podría beneficiarse de una evaluación más especializada. La
              observación docente, aunque valiosa, no es suficiente por sí sola para identificar con
              precisión a quienes necesitan apoyo adicional.
            </p>
            <GridCards
              columns={2}
              items={[
                {
                  title: "Revivir el evento",
                  description: "De forma repetida (pesadillas, juego repetitivo sobre el sismo)",
                  icon: "🔄"
                },
                {
                  title: "Evitación sistemática",
                  description: "De lugares, conversaciones o actividades relacionadas",
                  icon: "🚫"
                },
                {
                  title: "Disminución del interés",
                  description: "Pérdida marcada del interés en actividades que antes disfrutaba",
                  icon: "📉"
                },
                {
                  title: "Agresividad persistente",
                  description: "O desregulación emocional que no cede fácilmente",
                  icon: "💢"
                },
                {
                  title: "Síntomas físicos",
                  description: "Sin causa médica identificable (dolores de cabeza, de estómago)",
                  icon: "🤒"
                },
                {
                  title: "Interferencia escolar",
                  description: "Dificultad sostenida y caída en el rendimiento académico",
                  icon: "📚"
                }
              ]}
            />

            <Callout type="info" title="Evaluación con instrumentos estandarizados">
              <p>
                La observación docente debe complementarse con instrumentos validados como el{" "}
                <strong>CRIES</strong> (Children&apos;s Revised Impact of Event Scale) y
                el <strong>CPSS</strong> (Child PTSD Symptom Scale)<Ref id="R-003" />. El calendario
                recomendado incluye mediciones a 1, 3, 6 y 12 meses post-desastre, lo que permite
                identificar tanto las trayectorias de recuperación como los casos de aparición tardía.
              </p>
            </Callout>
          </div>
        </section>

        <section id="cuidador" style={{ scrollMarginTop: '120px' }} className="py-16 border-t border-[var(--border)]">
          <SectionHeader eyebrow="Bienestar docente" title="Cuidar al cuidador" />
          <div className="space-y-6">
            <p>
              Los docentes enfrentan una doble carga en contextos post-desastre. Son simultáneamente
              implementadores de la respuesta institucional y personas afectadas por el evento. Los
              síntomas documentados entre docentes tras terremotos incluyen dolores de cabeza, dolor
              de espalda, alteraciones del sueño e irritabilidad. Un docente que no ha procesado su
              propia experiencia difícilmente podrá ofrecer contención emocional genuina.
            </p>
            <p>
              UNICEF posiciona el bienestar docente como un <strong>pilar independiente</strong> de la
              salud mental escolar, no como un subproducto de la atención a
              estudiantes<Ref id="R-025" />. La experiencia chilena post-terremoto de 2010 identificó
              la <strong>mentalización</strong> como factor protector central<Ref id="R-001" />: la
              capacidad de comprender las propias emociones y las de los estudiantes como respuestas
              comprensibles a una situación extraordinaria.
            </p>
            <p>
              Las instituciones deben garantizar espacios de ventilación emocional para docentes,
              horarios de descanso razonables y rutas claras de apoyo. La inversión en el bienestar
              docente no constituye un lujo sino el prerrequisito sin el cual ninguna intervención,
              psicosocial o educativa, puede implementarse con efectividad.
            </p>

            <Callout type="info">
              <p>
                <strong>Línea 106</strong> del Ministerio de Salud<Ref id="R-027" /> — atención
                psicológica 24/7 (escucha, primeros auxilios psicológicos, intervención en crisis,
                remisión). Disponible para docentes, estudiantes y familias.
              </p>
            </Callout>
          </div>
        </section>

        <section id="marco" style={{ scrollMarginTop: '120px' }} className="py-16 border-t border-[var(--border)]">
          <SectionHeader eyebrow="Normatividad" title="Marco normativo aplicable" />
          <div className="space-y-6">
            <p>
              Colombia cuenta con un conjunto de instrumentos normativos y operativos que orientan la
              respuesta psicosocial y educativa en contextos de emergencia. Estos recursos constituyen
              el marco legal y técnico dentro del cual deben operar las instituciones educativas.
            </p>

            <DataTable
              headers={["Recurso", "Organismo", "Descripción"]}
              rows={[
                [
                  "Protocolo de atención psicosocial",
                  "MinSalud Colombia",
                  "Ley 1523 de 2012 — marco oficial para emergencias",
                ],
                [
                  "Guía de salud mental en emergencias",
                  "MinSalud Colombia",
                  "Guía clínica validada en todas las regiones",
                ],
                [
                  "Primeros auxilios psicológicos",
                  "OMS",
                  "Protocolo OBSERVAR-ESCUCHAR-CONECTAR, 1 día de formación",
                ],
                [
                  "Directrices IASC",
                  "Comité Permanente entre Organismos",
                  "Pirámide de 4 niveles, principio \"no hacer daño\"",
                ],
                [
                  "GIRE Cuadernillo",
                  "MEN Colombia",
                  "17 actividades socioemocionales + 3 momentos de gestión del riesgo",
                ],
                [
                  "Guía de PAP",
                  "OPS/PAHO",
                  "9 acciones clave adaptadas para las Américas",
                ],
              ]}
            />
          </div>
        </section>

      </div>
    </>
  );
}
