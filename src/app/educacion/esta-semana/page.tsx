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
  StickySectionNav,
  LevelTabs,
  Term
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
    { id: 'niveles', label: 'Por nivel' },
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
              Qué hacer en los primeros 7 días tras el sismo: apoyo emocional de primera respuesta, guía para directivos y docentes, y continuidad educativa.
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
                No realizar <strong><Term id="debriefing">sesiones donde se pide relatar la experiencia traumática en detalle</Term></strong>. La evidencia muestra
                que puede ser dañino y el <Term id="iasc">comité de coordinación humanitaria de la ONU</Term> lo prohíbe explícitamente<Ref id="R-023" />.
              </li>
              <li>
                No forzar a los niños y niñas a narrar su experiencia del terremoto.
              </li>
              <li>
                No <Term id="patologizar">tratar como enfermedad</Term> las reacciones normales de angustia. La mayoría de las respuestas
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
              procurar que ningún estudiante regrese a un espacio físicamente inseguro. Antes de
              cualquier reapertura, los equipos de ingeniería estructural deben haber evaluado cada
              sede. En Cali, la Secretaría de Educación desplegó{" "}
              <span className="font-mono text-[var(--accent)] bg-[var(--accent-subtle)] px-1 py-0.5 rounded text-sm">10 equipos</span> para
              evaluar <span className="font-mono text-[var(--accent)] bg-[var(--accent-subtle)] px-1 py-0.5 rounded text-sm">217 sedes</span> oficiales<Ref id="R-111" />, y el
              resultado determinará cuáles pueden funcionar con normalidad, cuáles requieren adecuaciones
              y cuáles necesitan alternativas temporales.
            </p>
            <p>
              Una vez confirmada la <strong>seguridad física</strong>, el paso siguiente consiste en
              activar los <strong>protocolos del Ministerio de Salud</strong> para <Term id="respuesta-psicosocial">acompañamiento emocional y social</Term>{" "}
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
                "No confundir el que un niño evite hablar del tema (evitación) con normalidad — observar sin presionar",
                "No asumir el rol de profesional de salud mental",
                "No descuidar el propio bienestar — un docente agotado no puede contener",
              ]}
            />
          </div>
        </section>

        <section id="niveles" style={{ scrollMarginTop: '120px' }} className="py-16 border-t border-[var(--border)]">
          <SectionHeader eyebrow="Adaptación" title="Por nivel educativo" />
          <div className="space-y-6">
            <p>
              Las actividades de acompañamiento emocional y social funcionan en todos los niveles educativos, sin diferencias
              significativas de efectividad por edad<Ref id="R-002" />. Lo que sí varía es la forma de comunicar,
              los síntomas a observar y las acciones concretas según la etapa del desarrollo<Ref id="R-001" />.
            </p>

            <LevelTabs>
              {/* Preescolar */}
              <div className="space-y-4">
                <h3 className="font-semibold">Cómo se manifiesta el estrés</h3>
                <p>
                  Los más pequeños expresan la angustia a través del cuerpo y la conducta, no con palabras.
                  Las manifestaciones más frecuentes incluyen <strong><Term id="regresion">regresión</Term></strong> (mojar la cama,
                  chuparse el dedo, perder habilidades ya adquiridas), llanto excesivo, <strong>apego
                  intenso</strong> al cuidador, trastornos del sueño y miedo a la separación.
                </p>
                <h3 className="font-semibold">Cómo comunicarse</h3>
                <p>
                  Usar lenguaje concreto y breve: &quot;la tierra se movió fuerte, ya pasó, estamos seguros
                  aquí&quot;. Evitar explicaciones abstractas sobre placas tectónicas o magnitudes. El
                  <strong> contacto físico</strong> (abrazar, cargar, estar cerca) comunica más seguridad que
                  cualquier palabra.
                </p>
                <h3 className="font-semibold">Qué hacer</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Mantener <strong>rutinas</strong> de alimentación, siesta y juego como anclas de seguridad</li>
                  <li>Permitir objetos de apego (cobija, juguete favorito)</li>
                  <li>El <strong>juego libre</strong> ES el procesamiento emocional — no hay que &quot;hablar del terremoto&quot;</li>
                  <li>Presencia física constante — no forzar separación del cuidador</li>
                  <li>Herramienta de gestión del riesgo escolar (<Term id="gire">GIRE</Term>): <strong>&quot;Señales Seguras&quot;</strong> — señalización participativa accesible a primera infancia<Ref id="R-106" /></li>
                </ul>
                <Callout type="warning" title="Señales de alerta">
                  <p>Regresión persistente por más de 4 semanas, rechazo completo a separarse del cuidador, o pérdida sostenida de habilidades ya adquiridas.</p>
                </Callout>
              </div>

              {/* Primaria */}
              <div className="space-y-4">
                <h3 className="font-semibold">Cómo se manifiesta el estrés</h3>
                <p>
                  El estudio de Kobe encontró que los estudiantes de <strong>grado 3</strong> (~8 años) fueron
                  los más afectados, y las niñas registraron puntuaciones consistentemente más altas en todos
                  los momentos de evaluación<Ref id="R-079" />. Los síntomas típicos incluyen sentimientos de
                  <strong> culpa</strong> (&quot;debí haber hecho algo&quot;), molestias físicas causadas por el estrés (<Term id="quejas-somaticas">quejas somáticas</Term>) como dolor de cabeza
                  y dolor de estómago, dificultades de concentración y <Term id="re-escenificacion">repetición del evento traumático</Term> en el juego.
                </p>
                <h3 className="font-semibold">Cómo comunicarse</h3>
                <p>
                  Explicaciones honestas y adaptadas a la edad. Permitir preguntas y responderlas con
                  sinceridad. Usar dibujos, modelos o experimentos sencillos para explicar qué son los
                  terremotos. Normalizar las emociones: &quot;es normal sentir miedo, muchos adultos también lo
                  sienten&quot;.
                </p>
                <h3 className="font-semibold">Qué hacer</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Espacio diario de expresión (<span className="stat-inline">15-20 minutos</span>): dibujo, escritura, conversación grupal</li>
                  <li><strong>Técnicas de relajación</strong>: el <span className="stat-inline">91%</span> de docentes las valoraron como &quot;útiles&quot;<Ref id="R-021" /></li>
                  <li>Involucrar en acciones solidarias (empodera sin exponer)</li>
                  <li>Enseñar sobre los sismos desde la experiencia vivida — oportunidad de aprendizaje, no retraumatización</li>
                </ul>
                <p>
                  <strong>Programas disponibles:</strong> técnicas de recuperación (<Term id="trt">TRT</Term>, 8-18 años), intervención en el aula (<Term id="cbi">CBI</Term>, 6-12 años), programa de reducción de estrés (<Term id="erase-stress">ERASE-Stress</Term>, 6-12 años)
                  — este rango concentra el grueso de la base de evidencia.
                </p>
                <Callout type="warning" title="Señales de alerta">
                  <p>Caída sostenida en el rendimiento, agresividad persistente, aislamiento social o quejas físicas recurrentes sin causa médica.</p>
                </Callout>
              </div>

              {/* Secundaria */}
              <div className="space-y-4">
                <h3 className="font-semibold">Cómo se manifiesta el estrés</h3>
                <p>
                  Los adolescentes pueden expresar la angustia a través de <strong><Term id="conductas-riesgo">comportamientos peligrosos para sí mismos</Term></strong>{" "}
                  (consumo de sustancias, conducta sexual), ira y desafío, aislamiento social pronunciado y
                  ansiedad sobre el futuro. En casos severos, pueden presentarse <Term id="ideacion-suicida">pensamientos de hacerse daño</Term>.
                </p>
                <h3 className="font-semibold">Cómo comunicarse</h3>
                <p>
                  <strong>Respetar la autonomía</strong> es central. No infantilizar. Los adolescentes necesitan
                  sentirse tomados en serio. Escuchar sin juzgar. Permitir la expresión de rabia — es una
                  respuesta adaptativa, no un problema de conducta. Favorecer la discusión abierta sobre lo que
                  pasó y sobre el futuro, no solo sobre el pasado.
                </p>
                <h3 className="font-semibold">Qué hacer</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Involucrar en la reconstrucción comunitaria</strong> — sentido de agencia y propósito</li>
                  <li>Facilitar grupos de pares y proyectos colaborativos</li>
                  <li>Hablar del futuro: planes, metas, lo que viene — no solo de lo que se perdió</li>
                  <li>Los formatos más cognitivos y estructurados funcionan bien con este grupo</li>
                </ul>
                <p>
                  <strong>Programas disponibles:</strong> TRT (8-18 años), intervención para trauma en escuelas (<Term id="cbits">CBITS</Term>, 10-15 años), programa de apoyo adolescente (<Term id="solar">SOLAR-Teens</Term>, 12-18 años).
                </p>
                <Callout type="danger" title="Señales de alerta">
                  <p>Aislamiento prolongado, conductas autolesivas, consumo de sustancias, abandono escolar o cambios drásticos de personalidad. Derivación inmediata a profesional de salud mental.</p>
                </Callout>
              </div>
            </LevelTabs>
          </div>
        </section>

        <section id="continuidad" style={{ scrollMarginTop: '120px' }} className="py-16 border-t border-[var(--border)]">
          <SectionHeader eyebrow="Reapertura escolar" title="Continuidad educativa" />
          <div className="space-y-6">
            <p>
              La reapertura de las instituciones educativas tras un desastre no constituye un simple acto
              administrativo de reanudación. La evidencia internacional la posiciona como una{" "}
              <strong>intervención en sí misma</strong>, dado que restaura rutinas, estructura temporal,
              contacto con pares y acceso a adultos de referencia, todos ellos <Term id="factores-protectores">condiciones que favorecen la recuperación</Term>{" "}
              documentados tanto en la dimensión emocional-social como en la educativa.
            </p>
            <p>
              El riesgo de postergar el retorno se encuentra bien documentado. En Nepal, donde{" "}
              <span className="font-mono text-[var(--accent)] bg-[var(--accent-subtle)] px-1 py-0.5 rounded text-sm">1 millón</span> de estudiantes vieron interrumpida su
              educación tras el terremoto de 2015, el gobierno
              desplegó <span className="font-mono text-[var(--accent)] bg-[var(--accent-subtle)] px-1 py-0.5 rounded text-sm">15,000</span> centros de aprendizaje transicional en
              el plazo de un mes<Ref id="R-121" />. La introducción de actividades lúdicas, exploración al aire
              libre y ciencias creativas en estos espacios facilitó una atmósfera que favoreció la
              <Term id="elaboracion-trauma">procesamiento gradual de la experiencia difícil</Term> sin sacrificar el proceso educativo.
            </p>
            <p>
              En Ecuador, tras el terremoto de 2016, el Ministerio de Educación implementó el plan
              &quot;Escuela para todos, juntos nos levantamos&quot;<Ref id="R-126" />, que se convirtió en referencia
              regional por articular la respuesta inmediata con la recuperación a mediano plazo. El plan
              combinó espacios temporales, turnos diferenciados, kits escolares de emergencia y
              acompañamiento emocional y social.
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
                nivel nacional<Ref id="R-116" />. El Ministerio de Educación (<Term id="men">MEN</Term>) redirigió{" "}
                <span className="font-mono text-[var(--accent)] bg-[var(--accent-subtle)] px-1 py-0.5 rounded text-sm">$48 millones de dólares</span> del Programa de Espacios
                Educativos hacia la recuperación<Ref id="R-116" />. En Cali, 89 instituciones y 214 sedes
                reportaron daños. La Semana de Desarrollo Institucional del 18 al 21 de agosto es la
                ventana para preparar a los docentes antes de la reapertura del 24 de agosto.
              </p>
            </Callout>
          </div>
        </section>

        <section id="senales" style={{ scrollMarginTop: '120px' }} className="py-16 border-t border-[var(--border)]">
          <SectionHeader eyebrow="Observación y detección temprana" title="Señales de alerta" />
          <div className="space-y-6">
            <p>
              Las reacciones emocionales en las primeras semanas tras un desastre son, en su mayoría,
              respuestas normales a una situación anormal. Sin embargo, transcurridas
              aproximadamente <span className="font-mono text-[var(--accent)] bg-[var(--accent-subtle)] px-1 py-0.5 rounded text-sm">4 semanas</span>, ciertos indicadores
              sugieren que un estudiante podría beneficiarse de una <Term id="tamizaje">evaluación rápida</Term> más especializada. La
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
                  description: "O dificultad para manejar las emociones que no cede fácilmente",
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
                La observación docente debe complementarse con instrumentos validados como la{" "}
                <Term id="cries">escala de impacto del evento para niños</Term> (<strong>CRIES</strong>) y
                la <Term id="cpss">escala de síntomas de estrés postraumático infantil</Term> (<strong>CPSS</strong>)<Ref id="R-003" />. El calendario
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
              la <strong><Term id="mentalizacion">mentalización</Term></strong> como factor protector central<Ref id="R-001" />: la
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
                psicológica 24/7 (escucha, primeros auxilios psicológicos, <Term id="intervencion-crisis">atención de urgencia emocional</Term>,{" "}
                <Term id="remision">derivación a un profesional especializado</Term>). Disponible para docentes, estudiantes y familias.
              </p>
            </Callout>
          </div>
        </section>

        <section id="marco" style={{ scrollMarginTop: '120px' }} className="py-16 border-t border-[var(--border)]">
          <SectionHeader eyebrow="Normatividad" title="Marco normativo aplicable" />
          <div className="space-y-6">
            <p>
              Colombia cuenta con un conjunto de instrumentos normativos y operativos que orientan la
              respuesta emocional, social y educativa en contextos de emergencia. Estos recursos constituyen
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
                  "Organización Mundial de la Salud (OMS)",
                  "Protocolo OBSERVAR-ESCUCHAR-CONECTAR, 1 día de formación",
                ],
                [
                  "Directrices IASC",
                  "Comité Permanente entre Organismos",
                  "Modelo de atención en 4 niveles (pirámide escalonada), principio \"no hacer daño\"",
                ],
                [
                  "GIRE Cuadernillo",
                  "MEN Colombia",
                  "17 actividades para trabajar emociones y convivencia + 3 momentos de gestión del riesgo",
                ],
                [
                  "Guía de Primeros Auxilios Psicológicos (PAP)",
                  "Organización Panamericana de la Salud (OPS)",
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
