import type { Metadata } from "next";
import { 
  SectionHeader, 
  Callout, 
  DataTable, 
  Ref, 
  KeyMessage, 
  Pyramid, 
  Timeline, 
  Stat, 
  StatGrid, 
  StickySectionNav, 
  EffectBar, 
  EffectBarList 
} from "@/components/content";

export const metadata: Metadata = {
  title: "Primer mes",
  description:
    "Modelo escalonado de intervención, capacitación docente, adaptación curricular y evaluación en crisis durante el primer mes post-terremoto.",
};

export default function PrimerMesPage() {
  return (
    <div className="mx-auto max-w-[1100px]">
      <header className="mb-16">
        <p className="text-sm font-mono text-accent uppercase tracking-wider mb-4">SEMANAS 2 A 8</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">De la emergencia a la estructura</h1>
        <p className="text-xl text-muted mb-10 max-w-3xl">
          De la emergencia a la estructura: implementar la respuesta psicosocial y educativa exige articular un modelo escalonado, ajustar el ritmo pedagógico y sostener a quienes sostienen el sistema.
        </p>
        <StatGrid>
          <Stat value="2-8 sem" label="Ventana óptima" />
          <Stat value="1 día" label="Formación PAP" />
          <Stat value="3-5 días" label="Formación TRT/CBI" />
          <Stat value="≥6" label="Sesiones más efectivas" />
        </StatGrid>
      </header>

      <StickySectionNav
        items={[
          { id: 'escalonado', label: 'Modelo escalonado' },
          { id: 'ventana', label: 'Ventana' },
          { id: 'capacitacion', label: 'Capacitación' },
          { id: 'por-nivel', label: 'Por nivel' },
          { id: 'adaptacion', label: 'Adaptación' },
          { id: 'evaluacion', label: 'Evaluación' },
          { id: 'bienestar', label: 'Bienestar docente' },
        ]}
      />

      <div className="space-y-0">
        <section id="escalonado" className="scroll-mt-[120px] border-t border-border py-16">
          <SectionHeader eyebrow="Respuesta organizada" title="El modelo escalonado" />
          <div className="prose prose-lg prose-neutral dark:prose-invert max-w-3xl">
            <p>
              La evidencia converge en que la respuesta psicosocial escolar debe organizarse como un
              sistema escalonado de tres niveles, donde la intensidad del apoyo se ajusta a la severidad
              de las necesidades. Este modelo, articulado con claridad por Chen y colaboradores en su
              revisión de 2026<Ref id="R-019" />, permite que la mayoría de los estudiantes reciban atención temprana sin
              saturar los servicios especializados.
            </p>
            <p>
              En el primer nivel se ubican los <strong>Primeros Auxilios Psicológicos (PAP)</strong>, una
              intervención universal que puede ser entregada por cualquier miembro del personal educativo
              tras una formación de un día. Los PAP siguen el protocolo de la OMS basado en tres acciones
              fundamentales —observar, escuchar y conectar— y no constituyen consejería profesional ni
              intervención terapéutica. Su propósito es estabilizar, ofrecer presencia segura y facilitar
              la conexión con redes de apoyo.
            </p>
            <p>
              El segundo nivel involucra intervenciones grupales estructuradas, basadas en principios
              cognitivo-conductuales, que los docentes pueden implementar tras 3 a 5 días de formación
              supervisada. Los programas <strong>Teaching Recovery Techniques (TRT</strong>, 5 sesiones
              grupales) y <strong>Classroom-Based Intervention (CBI</strong>, 8 sesiones) representan las
              opciones con mayor evidencia para este nivel. Están diseñados para estudiantes con síntomas
              moderados que se benefician de un abordaje estructurado sin requerir atención clínica
              individual.
            </p>
            <p>
              El tercer nivel queda reservado para los estudiantes con síntomas severos o persistentes
              que no responden a las intervenciones de los niveles anteriores. Aquí intervienen
              psicólogos clínicos y psiquiatras con modalidades especializadas como <strong>EMDR</strong>,{" "}
              <strong>TCC focalizada en trauma</strong> o <strong>Terapia Narrativa de Exposición
              (NET)</strong>. La derivación oportuna a este nivel depende de la capacidad de los docentes
              para identificar señales de alerta durante las actividades de los niveles 1 y 2.
            </p>

            <KeyMessage>
              El modelo más efectivo es híbrido: docentes entregan los niveles 1 y 2 con supervisión
              semanal de profesionales de salud mental, y el nivel 3 se atiende por derivación.
            </KeyMessage>
          </div>

          <div className="my-10 max-w-3xl">
            <Pyramid
              levels={[
                { label: "Nivel 3", description: "Atención especializada: EMDR, TCC focalizada, NET (psicólogos clínicos)", color: "danger" },
                { label: "Nivel 2", description: "Intervención grupal: TRT (5 sesiones), CBI (8 sesiones) por docentes capacitados", color: "warning" },
                { label: "Nivel 1", description: "PAP universal: observar, escuchar, conectar (cualquier persona, 1 día de formación)", color: "success" },
              ]}
              caption="Modelo escalonado: la mayoría se beneficia del nivel 1. Solo los síntomas persistentes requieren nivel 3."
            />
          </div>

          <div className="prose prose-lg prose-neutral dark:prose-invert max-w-3xl mt-10">
            <Callout type="info" title="¿Quién entrega qué?">
              <p>
                Los datos de Laksmita y colaboradores<Ref id="R-003" /> revelan una paradoja aparente. Las personas
                sin formación en salud mental producen efectos inmediatos sustancialmente mayores que los
                profesionales de salud (<span className="stat-inline">g&nbsp;=&nbsp;−2.60</span> vs.{" "}
                <span className="stat-inline">g&nbsp;=&nbsp;−0.39</span>). Sin embargo, los efectos de
                los profesionales se sostienen en el seguimiento (g&nbsp;=&nbsp;−0.38,
                p&nbsp;=&nbsp;0.047), mientras que los de los no especialistas no alcanzan significancia
                estadística (g&nbsp;=&nbsp;−0.09, p&nbsp;=&nbsp;0.150).
              </p>
            </Callout>

            <div className="mt-8 not-prose">
              <EffectBarList title="Efecto inmediato por tipo de interventor — Laksmita et al. (2026)">
                <EffectBar label="No especialistas" value={2.60} maxValue={2.8} unit=" g" variant="favor" />
                <EffectBar label="Prof. de salud" value={0.39} maxValue={2.8} unit=" g" variant="unfavor" />
              </EffectBarList>
            </div>
          </div>
        </section>

        <section id="ventana" className="scroll-mt-[120px] border-t border-border py-16">
          <SectionHeader eyebrow="Timing crítico" title="La ventana de intervención" />
          <div className="prose prose-lg prose-neutral dark:prose-invert max-w-3xl">
            <p>
              El protocolo del Ministerio de Salud de Colombia<Ref id="R-027" /> distingue cuatro fases psicológicas
              tras un desastre. La <strong>fase heroica</strong>, que abarca las
              primeras <span className="stat-inline">72 horas</span>, se caracteriza por la movilización
              inmediata y la solidaridad espontánea. La <strong>fase de luna de miel</strong>, que puede
              extenderse de una semana a seis meses, trae consigo un optimismo transitorio sostenido por
              la ayuda humanitaria.
            </p>
            <p>
              La <strong>fase de desilusión</strong>, entre los 2 y los 24 meses posteriores, emerge
              cuando la realidad de la pérdida se impone sobre las expectativas de recuperación rápida.
              Finalmente, la <strong>fase de reconstrucción</strong> se extiende durante años y marca el
              retorno progresivo a la normalidad.
            </p>
          </div>

          <div className="my-10 max-w-3xl">
            <Timeline items={[
              { time: "0 — 72 horas", label: "Fase heroica", description: "Movilización inmediata y solidaridad espontánea" },
              { time: "1 semana — 6 meses", label: "Fase de luna de miel", description: "Optimismo transitorio sostenido por la ayuda humanitaria" },
              { time: "2 — 24 meses", label: "Fase de desilusión", description: "La realidad de la pérdida se impone sobre las expectativas" },
              { time: "Años", label: "Fase de reconstrucción", description: "Retorno progresivo a la normalidad" },
            ]} />
          </div>

          <div className="prose prose-lg prose-neutral dark:prose-invert max-w-3xl">
            <p>
              Dentro de este marco temporal, la evidencia señala que la ventana óptima para implementar
              programas estructurados en las escuelas se sitúa entre las{" "}
              <span className="stat-inline">2 y las 8 semanas</span> posteriores al
              desastre<Ref id="R-019" />. Las intervenciones iniciadas dentro de los
              primeros <span className="stat-inline">4 meses</span> producen los mayores impactos. Los
              programas con seis o más sesiones se asocian con efectos sustancialmente mayores que los más
              breves (<span className="stat-inline">g&nbsp;=&nbsp;−1.77</span>{" "}
              vs. g&nbsp;=&nbsp;−0.15)<Ref id="R-003" />.
            </p>

            <h3>Calendario de tamizaje</h3>
            <p>
              El tamizaje con instrumentos estandarizados debe realizarse a los 1, 3, 6 y 12 meses
              posteriores al evento. Este calendario se alinea con la evidencia sobre trayectorias de
              recuperación, que muestra que el periodo de mayor dinamismo ocurre durante el primer año y
              que una proporción de niños y niñas desarrolla síntomas tardíos que solo una evaluación
              longitudinal puede detectar.
            </p>
          </div>

          <div className="my-10 max-w-3xl">
            <Timeline items={[
              { time: "1 mes", label: "Primera evaluación", description: "Detección inicial con CRIES/CPSS" },
              { time: "3 meses", label: "Seguimiento temprano", description: "Identificar trayectorias crónicas emergentes" },
              { time: "6 meses", label: "Evaluación intermedia", description: "Detectar aparición tardía de síntomas" },
              { time: "12 meses", label: "Evaluación anual", description: "Balance del primer año, decisión de continuidad" },
            ]} />
          </div>
        </section>

        <section id="capacitacion" className="scroll-mt-[120px] border-t border-border py-16">
          <SectionHeader eyebrow="Formación docente" title="Capacitación docente" />
          
          <div className="max-w-4xl my-8">
            <DataTable
              caption="Formación requerida por nivel"
              headers={["Tipo de formación", "Duración", "Quién la recibe", "Contenido"]}
              rows={[
                [
                  "Primeros auxilios psicológicos (PAP)",
                  "1 día (8 horas)",
                  "Todo el personal educativo",
                  "Observar, escuchar, conectar + simulaciones",
                ],
                [
                  "Formación IASC básica",
                  "1-3 días",
                  "Orientadores y coordinadores",
                  "Pirámide IASC, principio «no hacer daño», derivación",
                ],
                [
                  "Programa TRT o CBI",
                  "3-5 días",
                  "Docentes seleccionados",
                  "Manejo de recuerdos intrusivos, activación, evitación + práctica supervisada",
                ],
                [
                  "Supervisión continua",
                  "Semanal (permanente)",
                  "Docentes que implementan",
                  "Revisión de audio, retroalimentación, manejo de casos",
                ],
              ]}
            />
          </div>

          <div className="prose prose-lg prose-neutral dark:prose-invert max-w-3xl">
            <h3>Lo que los docentes pueden hacer</h3>
            <p>
              Una revisión de Coombe y colaboradores identificó{" "}
              <span className="stat-inline">18</span> intervenciones mediadas por docentes en contextos
              post-desastre<Ref id="R-021" />, de las cuales <span className="stat-inline">9</span>{" "}
              contaban con metodología adecuada para evaluar su efectividad. Los resultados confirman que
              los docentes pueden entregar intervenciones psicosociales con efectos inmediatos
              significativos cuando reciben formación específica y supervisión periódica. Los
              programas <strong>TRT</strong> y <strong>EASE</strong> han demostrado ser viables para
              personas sin formación clínica<Ref id="R-013" />, siempre que cuenten con la estructura de
              acompañamiento descrita.
            </p>

            <h3>Límites de la intervención docente</h3>
            <p>
              No obstante, la evidencia también establece límites claros. El programa ERASE-Stress,
              entregado por docentes con nivel de evidencia calificado como «alto», no mostró efectos
              sostenidos en el seguimiento a <span className="stat-inline">3 años</span><Ref id="R-008" />.
              Los docentes que confunden la evitación con el funcionamiento normal pueden pasar por alto
              señales de alerta importantes.
            </p>
            <p>
              Un estudio realizado en Chile tras el terremoto de 2010 encontró que solo 3 de 33 niños
              evaluados cumplían criterios formales de TEPT, pero el{" "}
              <span className="stat-inline">45%</span> presentaba síntomas activados por el sismo, y los
              diagnósticos más frecuentes fueron TDAH (<span className="stat-inline">33%</span>) y
              trastornos de ajuste (<span className="stat-inline">24%</span>)<Ref id="R-086" />.
            </p>

            <Callout type="warning" title="Supervisión, no solo formación">
              <p>
                Los efectos de las intervenciones entregadas por docentes no se sostienen sin supervisión
                profesional continua. La formación inicial sin acompañamiento resulta insuficiente. La
                supervisión semanal, que incluya revisión de grabaciones de audio y retroalimentación
                sobre el manejo de casos, constituye el factor que marca la diferencia entre una
                intervención con efectos transitorios y una con impacto duradero.
              </p>
            </Callout>
          </div>
        </section>

        <section id="por-nivel" className="scroll-mt-[120px] border-t border-border py-16">
          <SectionHeader eyebrow="Por edad" title="Programas por nivel educativo" />
          <div className="space-y-6 max-w-3xl">
            <p>
              Los programas de intervención psicosocial cubren rangos de edad distintos, y el tipo de
              tamizaje debe adaptarse a la etapa del desarrollo. La siguiente tabla orienta la selección
              del programa según el nivel educativo de la población a atender.
            </p>

            <DataTable
              caption="Programas de intervención por nivel educativo"
              headers={["Programa", "Edad", "Nivel", "Tamizaje recomendado"]}
              rows={[
                ["CPRT", "0–5", "Preescolar", "Observación conductual por cuidadores"],
                ["CBI", "6–12", "Primaria", "CRIES/CPSS aplicado por docente"],
                ["ERASE-Stress", "6–12", "Primaria", "CRIES/CPSS aplicado por docente"],
                ["TRT", "8–18", "Primaria + Secundaria", "CRIES/CPSS + auto-reporte en secundaria"],
                ["CBITS", "10–15", "Primaria alta + Secundaria", "UCLA PTSD-RI por clínico"],
                ["SOLAR-Teens", "12–18", "Secundaria", "Auto-reporte + entrevista breve"],
              ]}
            />

            <p>
              Para <strong>preescolar</strong>, el tamizaje depende de la observación conductual del
              cuidador y el docente, dado que los instrumentos estandarizados requieren auto-reporte
              verbal que los menores de 6 años no pueden ofrecer. En <strong>primaria</strong>, los
              docentes pueden administrar instrumentos como el CRIES o el CPSS con presencia de un
              profesional de salud mental en la primera aplicación, siguiendo el modelo implementado en
              Kobe<Ref id="R-079" />. En <strong>secundaria</strong>, el auto-reporte adquiere mayor
              validez, y los instrumentos pueden complementarse con entrevistas breves que aborden
              conductas de riesgo específicas de la adolescencia.
            </p>

            <Callout type="info" title="Misma evidencia, diferente aplicación">
              <p>
                El meta-análisis de Morina et al. testeó la edad como moderador y no encontró diferencias
                significativas de efectividad<Ref id="R-002" />. Las intervenciones funcionan en todos los
                niveles. Lo que cambia es la presentación de síntomas, la forma de comunicar y el tipo de
                programa disponible.
              </p>
            </Callout>
          </div>
        </section>

        <section id="adaptacion" className="scroll-mt-[120px] border-t border-border py-16">
          <SectionHeader eyebrow="Currículo" title="Adaptación curricular" />
          <div className="prose prose-lg prose-neutral dark:prose-invert max-w-3xl">
            <p>
              Adaptar el currículo tras un desastre no significa empobrecerlo. El <strong>marco
              RAPID</strong> del Banco Mundial propone priorizar competencias fundamentales en lectura y
              matemáticas sin sacrificar la riqueza de la experiencia educativa. Esta priorización permite
              concentrar los recursos pedagógicos en lo esencial mientras se recupera la capacidad plena
              del sistema.
            </p>
            <p>
              La integración del <strong>aprendizaje socioemocional</strong> (SEL) en la práctica
              cotidiana del aula fue identificada como uno de los tres principales factores de éxito en
              las experiencias post-desastre, presente en el{" "}
              <span className="stat-inline">32%</span> de los casos exitosos
              documentados<Ref id="R-089" />, junto con el uso de medios de aprendizaje innovadores y la
              participación comunitaria.
            </p>

            <h3>Las herramientas disponibles</h3>
            <p>
              El <strong>Cuadernillo GIRE</strong> del Ministerio de Educación Nacional, publicado en
              enero de 2026, ofrece <span className="stat-inline">17 actividades</span> prácticas de SEL
              organizadas en su Componente 2, que van desde la identificación de emociones hasta la
              resolución de problemas y la conexión con objetos significativos<Ref id="R-106" />.
            </p>
            <p>
              La experiencia de Turquía tras el terremoto de 2023 aporta un dato cualitativo relevante.
              Los docentes describieron un giro espontáneo hacia lo que denominaron{" "}
              <strong>«pedagogía del amor»</strong>, donde el vínculo afectivo, la escucha activa, la
              presencia estable y un ambiente predecible desplazaron temporalmente la instrucción
              convencional. En Chile, enseñar sobre los terremotos a partir de la experiencia vivida
              demostró facilitar tanto la comprensión científica como el procesamiento emocional del
              evento.
            </p>
          </div>
        </section>

        <section id="evaluacion" className="scroll-mt-[120px] border-t border-border py-16">
          <SectionHeader eyebrow="Valoración en crisis" title="Evaluación en la crisis" />
          <div className="prose prose-lg prose-neutral dark:prose-invert max-w-3xl">
            <p>
              La primera evaluación tras el retorno a clases debe ser <strong>diagnóstica, no
              calificada</strong>. El pilar «Assess» del marco RAPID establece que la evaluación
              diagnóstica de los niveles reales de aprendizaje es el segundo paso obligatorio después de
              asegurar que cada estudiante haya regresado. Sin esta línea de base, cualquier decisión
              pedagógica o curricular operará sobre supuestos en lugar de datos.
            </p>

            <h3>No penalizar</h3>
            <p>
              Durante el periodo de recuperación, la <strong>evaluación formativa</strong> debe
              prevalecer sobre la sumativa. Las lecciones de la pandemia sugieren estrategias concretas
              como la flexibilización de las calificaciones, la promoción condicional automática y la
              evaluación basada en portafolios. El principio de no penalización debe aplicarse en tres
              niveles simultáneamente: a nivel individual, con ponderaciones diferentes para las
              calificaciones del periodo de crisis; a nivel institucional, con indicadores de desempeño
              contextualizados; y a nivel sistémico, con ajustes en pruebas estandarizadas como las
              Pruebas Saber.
            </p>

            <Callout type="info" title="Calendario escolar 2026">
              <p>
                Cali tiene aproximadamente <span className="stat-inline">14 semanas</span> efectivas
                entre la reapertura del 24 de agosto y el cierre del calendario académico el 4 de
                diciembre de 2026. Este marco temporal exige priorizar competencias fundamentales y
                utilizar la evaluación diagnóstica como brújula para focalizar los esfuerzos pedagógicos.
              </p>
            </Callout>
          </div>
        </section>

        <section id="bienestar" className="scroll-mt-[120px] border-t border-border py-16">
          <SectionHeader eyebrow="Cuidar al cuidador" title="Bienestar del docente" />
          <div className="prose prose-lg prose-neutral dark:prose-invert max-w-3xl">
            <p>
              UNICEF posiciona el bienestar docente como un <strong>pilar independiente</strong> de su
              marco de salud mental escolar<Ref id="R-025" />, y no como un subproducto de la atención a los
              estudiantes. Esta distinción resulta fundamental porque un docente que no ha sido atendido
              difícilmente puede atender a otros. Las investigaciones realizadas tras el terremoto de
              Sulawesi en Indonesia (2018) documentaron síntomas recurrentes entre los docentes que
              regresaron a las aulas<Ref id="R-021" />, entre ellos cefaleas, dolor de espalda, alteraciones del
              sueño e irritabilidad persistente.
            </p>
            <p>
              La guía de UNICEF Chile<Ref id="R-001" /> identifica la <strong>mentalización</strong> como
              un factor protector fundamental. La capacidad de comprender los propios estados mentales y
              los de los estudiantes permite al docente responder de manera sensible en lugar de
              reaccionar impulsivamente ante comportamientos difíciles. Fortalecer esta capacidad requiere
              espacios seguros de reflexión, no simplemente una charla motivacional antes de volver al
              aula.
            </p>

            <h3>La doble carga</h3>
            <p>
              Los docentes enfrentan una doble carga que no debe subestimarse. Son simultáneamente
              implementadores de la respuesta y personas afectadas por el mismo desastre. Deben resolver
              problemas pedagógicos para los cuales nunca fueron formados, con menos tiempo, menos
              recursos y una población estudiantil más heterogénea en sus necesidades que antes del sismo.
            </p>
            <p>
              La Semana de Desarrollo Institucional del 18 al 21 de agosto en Cali representa la única
              ventana de preparación antes de la reapertura, y en apenas cuatro días debe cubrir la
              preparación emocional del equipo, la evaluación de infraestructura, la reorganización
              curricular y los protocolos de seguridad.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
