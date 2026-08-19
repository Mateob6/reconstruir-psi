import type { Metadata } from "next";
import {
  SectionHeader,
  Callout,
  KeyMessage,
  Ref,
  StepCards,
  Stat,
  StatGrid,
  StickySectionNav,
  EffectBar,
  EffectBarList,
  Term
} from "@/components/content";

export const metadata: Metadata = {
  title: "Primer semestre",
  description:
    "Recuperación de aprendizajes, tutoría intensiva en grupos pequeños, plan de recuperación RAPID y evaluación para guiar la enseñanza post-terremoto.",
};

export default function PrimerSemestrePage() {
  return (
    <div className="mx-auto max-w-[1100px]">
      <header className="mb-16">
        <p className="text-sm font-mono text-accent uppercase tracking-wider mb-4">MESES 2 A 6</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Recuperar aprendizajes sin sacrificar el bienestar</h1>
        <p className="text-xl text-muted mb-10 max-w-3xl">
          El desafío del primer semestre es recuperar el terreno académico perdido integrando el bienestar emocional de la comunidad educativa, sin sobrecargar un sistema ya tensionado.
        </p>
        <StatGrid>
          <Stat value="1.1 años" label="Pérdida por 1 año de cierre" />
          <Stat value="~⅔ año" label="Recupera tutoría en mate" />
          <Stat value="7%" label="Caída rendimiento Nepal" />
          <Stat value="$48M" label="USD redirigidos por el Ministerio de Educación (MEN)" />
        </StatGrid>
      </header>

      <StickySectionNav
        items={[
          { id: 'magnitud', label: 'Magnitud' },
          { id: 'tutoria', label: 'Tutoría' },
          { id: 'rapid', label: 'RAPID' },
          { id: 'acelerada', label: 'Ed. acelerada' },
          { id: 'adaptacion', label: 'Adaptación' },
          { id: 'evaluacion', label: 'Evaluación' },
        ]}
      />

      <div className="space-y-0">
        <section id="magnitud" className="scroll-mt-[120px] border-t border-border py-16">
          <SectionHeader eyebrow="El costo de la interrupción" title="La magnitud de la pérdida" />
          <div className="prose prose-lg prose-neutral dark:prose-invert max-w-3xl">
            <p>
              La interrupción escolar tras un desastre natural produce consecuencias que trascienden con
              mucho el número de días sin clase. Una revisión que sintetizó 57 estudios sobre los efectos
              de la pandemia de COVID-19 en el aprendizaje encontró que un año de cierre escolar se
              traduce en una pérdida equivalente
              a <span className="stat-inline">1,1 años</span> de aprendizaje, y que la reapertura solo
              permite recuperar hasta <span className="stat-inline">0,5 años</span><Ref id="R-091" />.
            </p>

            <KeyMessage>
              Un año de cierre escolar equivale a 1,1 años de pérdida de aprendizaje. La reapertura solo
              recupera hasta 0,5 años sin intervención activa.
            </KeyMessage>

            <div className="mt-8 mb-10 not-prose">
              <EffectBarList title="Impacto de la interrupción escolar en el aprendizaje">
                <EffectBar label="Pérdida (1 año cierre)" value={1.1} maxValue={1.2} unit=" años" variant="unfavor" />
                <EffectBar label="Recuperación (reapertura)" value={0.5} maxValue={1.2} unit=" años" variant="favor" />
                <EffectBar label="Recuperación (tutoría)" value={0.67} maxValue={1.2} unit=" años" variant="favor" />
              </EffectBarList>
            </div>

            <p>
              Los terremotos producen patrones similares. Tras el sismo de 2015 en Nepal, las
              evaluaciones documentaron una caída
              del <span className="stat-inline">7%</span> en el rendimiento académico en las zonas más
              afectadas<Ref id="R-113" />. Datos provenientes de Perú muestran que la exposición al
              terremoto de Ancash en 1970 se asoció con niveles inferiores de logro educativo décadas
              después, lo que sugiere que sin intervención oportuna, las consecuencias pueden extenderse
              a lo largo de toda la trayectoria de vida<Ref id="R-115" />.
            </p>
            <p>
              En Colombia, el terremoto de agosto de 2026 afectó
              a <span className="stat-inline">1.819</span> centros educativos y generó una interrupción
              mínima de dos semanas. El Ministerio de Educación Nacional
              redirigió <span className="stat-inline">$48 millones</span> de dólares del Programa de
              Espacios Educativos hacia la recuperación y reconstrucción de infraestructura educativa,
              una señal de voluntad institucional que debe complementarse con estrategias pedagógicas
              concretas<Ref id="R-116" />.
            </p>
          </div>
        </section>

        <section id="tutoria" className="scroll-mt-[120px] border-t border-border py-16">
          <SectionHeader eyebrow="Estrategia de recuperación" title="Tutoría de alta dosis" />
          <div className="prose prose-lg prose-neutral dark:prose-invert max-w-3xl">
            <p>
              Entre las estrategias de recuperación de aprendizajes con mayor respaldo empírico se
              encuentra el <strong><Term id="tutoria-alta-dosis">refuerzo intensivo en grupos pequeños</Term></strong>. Un <Term id="meta-analisis">estudio que combinó múltiples investigaciones</Term> que
              integró <span className="stat-inline">96</span> <Term id="eca">estudios experimentales con grupo de comparación</Term> encontró
              que esta modalidad permite recuperar
              aproximadamente <span className="stat-inline">dos tercios</span> de un año escolar en
              matemáticas<Ref id="R-124" />.
            </p>
            <p>
              Los factores de éxito identificados por la evidencia incluyen <strong>grupos de 3 a 5
              estudiantes</strong>, sesiones integradas <strong>dentro de la jornada escolar</strong> en
              lugar de actividades extracurriculares, tutores formados que mantienen consistencia a lo
              largo del programa, un currículo estructurado con objetivos claros por sesión, e
              individualización basada en datos diagnósticos. La implementación dentro del horario
              escolar resultó sustancialmente más efectiva que la realizada en horarios extraescolares.
            </p>

            <Callout type="info" title="Infraestructura existente en Colombia">
              <p>
                El <strong><Term id="pta">Programa Todos a Aprender</Term> (PTA)</strong> del Ministerio de Educación Nacional de Colombia ofrece
                infraestructura existente para implementar tutoría de alta dosis. Cuenta con tutores
                formados, mecanismos de articulación con las instituciones educativas y experiencia
                acumulada en acompañamiento pedagógico situado<Ref id="R-116" />.
              </p>
            </Callout>
          </div>
        </section>

        <section id="rapid" className="scroll-mt-[120px] border-t border-border py-16">
          <SectionHeader eyebrow="Marco del Banco Mundial" title="Marco RAPID — plan de recuperación educativa" />
          <div className="prose prose-lg prose-neutral dark:prose-invert max-w-3xl">
            <p>
              El Banco Mundial propuso el marco <strong>RAPID</strong> como guía para la recuperación de
              aprendizajes tras interrupciones educativas prolongadas. Sus cinco componentes se articulan
              como una secuencia lógica que va desde garantizar el retorno hasta integrar la salud
              psicosocial en todo el proceso<Ref id="R-120" />.
            </p>
          </div>

          <div className="my-10 max-w-4xl">
            <StepCards steps={[
              { num: 1, title: "R", subtitle: "Reach — Alcanzar", description: "Asegurar que cada estudiante regrese al sistema educativo" },
              { num: 2, title: "A", subtitle: "Assess — Evaluar", description: "Evaluación diagnóstica de los niveles reales de aprendizaje" },
              { num: 3, title: "P", subtitle: "Prioritize — Priorizar", description: "Focalizar en competencias fundamentales de lectura y matemáticas" },
              { num: 4, title: "I", subtitle: "Increase — Eficiencia", description: "Enseñanza paso a paso con materiales definidos (pedagogía estructurada), enseñanza adaptada al nivel de cada grupo (instrucción diferenciada), optimización del tiempo" },
              { num: 5, title: "D", subtitle: "Develop — Psicosocial", description: "Integrar actividades para manejar emociones y convivir (aprendizaje socioemocional) transversalmente" },
            ]} />
          </div>

          <div className="prose prose-lg prose-neutral dark:prose-invert max-w-3xl">
            <p>
              <strong>Reach</strong> (Alcanzar) busca asegurar que cada estudiante regrese al sistema:
              rastrear la matrícula, contactar a las familias de los estudiantes ausentes y remover
              barreras económicas, de transporte, de documentación o emocionales.
            </p>
            <p>
              <strong>Assess</strong> (Evaluar) establece la evaluación diagnóstica de los niveles reales
              de aprendizaje como segundo paso obligatorio. Las <strong><Term id="aser">evaluaciones rápidas de lectura y matemáticas</Term> (tipo ASER)</strong>,
              de bajo costo e individuales, permiten identificar el punto de partida real sin
              asumir que el currículo previo al desastre fue completamente asimilado.
            </p>
            <p>
              <strong>Prioritize</strong> (Priorizar) no significa empobrecer el currículo, sino
              focalizar los esfuerzos pedagógicos en las competencias fundamentales de lectura y
              matemáticas durante el periodo inmediato. A medida que los estudiantes consolidan estas
              bases, el currículo se expande progresivamente.
            </p>
            <p>
              <strong>Increase efficiency</strong> (Aumentar la eficiencia) apela a la enseñanza paso a paso
              con materiales definidos, la optimización del tiempo de aprendizaje y la enseñanza adaptada al nivel de cada grupo.
            </p>
            <p>
              <strong>Develop psychosocial health</strong> (Desarrollar la salud psicosocial) integra el
              aprendizaje socioemocional transversalmente, no como un complemento aislado. La evidencia
              muestra que la recuperación académica y la psicosocial se potencian mutuamente cuando se
              abordan de forma integrada.
            </p>
          </div>
        </section>

        <section id="acelerada" className="scroll-mt-[120px] border-t border-border py-16">
          <SectionHeader eyebrow="Educación acelerada (AEWG)" title="Educación acelerada" />
          <div className="prose prose-lg prose-neutral dark:prose-invert max-w-3xl">
            <p>
              El Grupo de Trabajo de <strong>Educación Acelerada</strong> (AEWG), coordinado por la <Term id="acnur">Agencia de la ONU para los Refugiados</Term> y
              la <Term id="ungei">Iniciativa de la ONU para la Educación de las Niñas</Term>, ha formulado diez principios para programas diseñados para estudiantes que han
              perdido periodos significativos de escolaridad. A diferencia de lo que sugiere el nombre,
              no consiste en avanzar más rápido, sino en concentrar los esfuerzos en lo que resulta más
              relevante con mayor eficiencia pedagógica<Ref id="R-102" />.
            </p>
            <p>
              Los principios incluyen un ritmo flexible que se adapta al progreso de los estudiantes, un
              currículo condensado que prioriza competencias fundamentales sin eliminar la riqueza
              formativa, la integración de habilidades para la vida junto con los contenidos académicos,
              y la creación de rutas claras de reintegración al sistema educativo regular.
            </p>
          </div>
        </section>

        <section id="adaptacion" className="scroll-mt-[120px] border-t border-border py-16">
          <SectionHeader eyebrow="Currículo transformado" title="Adaptación curricular profunda" />
          <div className="prose prose-lg prose-neutral dark:prose-invert max-w-3xl">
            <p>
              Más allá de las adaptaciones inmediatas del primer mes, el primer semestre requiere una
              transformación más profunda de la práctica pedagógica. La integración del <strong><Term id="sel">aprendizaje
              socioemocional</Term> (SEL)</strong> fue identificada como uno de los tres principales factores de
              éxito en las experiencias educativas post-desastre, presente en
              el <span className="stat-inline">32%</span> de los casos exitosos documentados, junto con
              el uso de medios de aprendizaje innovadores y la participación de la
              comunidad<Ref id="R-089" />.
            </p>
            <p>
              El <strong>Cuadernillo <Term id="gire">GIRE</Term></strong> (Guía de Gestión del Riesgo Escolar) del Ministerio de Educación Nacional ofrece 17
              actividades prácticas de aprendizaje socioemocional organizadas en su Componente 2. Estas
              actividades cubren un espectro que va desde la identificación de emociones hasta la
              conexión con objetos significativos, pasando por el manejo del estrés, la escucha activa y
              la resolución de problemas<Ref id="R-106" />.
            </p>
            <p>
              El Pilar 3 del <strong><Term id="cssf">Marco Integral de Seguridad Escolar</Term> (CSSF)</strong> aboga por incorporar la educación sobre reducción del
              riesgo de desastres en el currículo formal y no formal<Ref id="R-101" />. La experiencia
              chilena demostró que enseñar sobre los terremotos a partir de la vivencia directa de los
              estudiantes facilita simultáneamente la comprensión científica del fenómeno y el
              procesamiento emocional del evento.
            </p>
          </div>
        </section>

        <section id="evaluacion" className="scroll-mt-[120px] border-t border-border py-16">
          <SectionHeader eyebrow="Valoración formativa" title="Evaluación formativa" />
          <div className="prose prose-lg prose-neutral dark:prose-invert max-w-3xl">
            <p>
              El enfoque evaluativo durante el primer semestre posterior al desastre debe privilegiar la
              <Term id="evaluacion-formativa">evaluación para guiar la enseñanza</Term> (formativa) sobre la que <Term id="evaluacion-sumativa">califica</Term> (sumativa). Las <strong>evaluaciones tipo ASER</strong>, diseñadas
              para ser rápidas, de bajo costo e individuales, permiten valorar competencias fundamentales
              en pocos minutos por estudiante sin la carga logística de las pruebas convencionales.
            </p>

            <h3>Calendario de evaluación</h3>
            <p>
              El calendario de evaluación diagnóstica debe alinearse con la evidencia sobre los <Term id="trayectorias-recuperacion">caminos que sigue la recuperación</Term>:
              evaluaciones al mes, a los 3 meses, a los 6 meses y al año del evento
              permiten rastrear tanto las trayectorias crónicas como las de aparición tardía.
            </p>
            <p>
              Las lecciones de la pospandemia sugieren estrategias concretas adaptables al contexto
              post-terremoto: flexibilización de las calificaciones, <strong><Term id="promocion-condicional">pasar al siguiente grado con compromisos de nivelación</Term> (promoción condicional
              automática)</strong> y evaluación basada en portafolios demostraron ser mecanismos efectivos
              para mantener la continuidad educativa sin penalizar a los estudiantes por circunstancias
              fuera de su control.
            </p>

            <h3>Nuevas necesidades educativas</h3>
            <p>
              El terremoto puede generar necesidades educativas que no existían antes del evento.
              Dificultades de concentración, problemas de memoria, disminución de la motivación y
              <Term id="evitacion">conductas de evitación</Term> (negarse a entrar al salón o evitar temas que recuerdan el terremoto) pueden manifestarse en el aula como bajo rendimiento cuando en
              realidad reflejan secuelas psicológicas. Los docentes necesitan orientación clara para
              distinguir cuándo un estudiante necesita un ajuste pedagógico y cuándo requiere <Term id="remision">derivación
              a un profesional</Term> de salud mental.
            </p>

            <Callout type="warning" title="Evaluar antes de enseñar">
              <p>
                La evaluación diagnóstica debe realizarse ANTES de retomar el currículo regular. Sin
                ella, se corre el riesgo de penalizar el impacto del desastre como si fuera bajo
                rendimiento, amplificando la desigualdad en lugar de atenderla.
              </p>
            </Callout>
          </div>
        </section>
      </div>
    </div>
  );
}
