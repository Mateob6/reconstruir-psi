import type { Metadata } from "next";
import { PageHero, Section, Callout, Ref } from "@/components/content";

export const metadata: Metadata = {
  title: "Primer semestre",
  description:
    "Recuperación de aprendizajes, tutoría de alta dosis, marco RAPID del Banco Mundial y evaluación formativa post-terremoto.",
};

export default function PrimerSemestrePage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <PageHero
        title="Primer semestre"
        subtitle="Recuperar aprendizajes sin sacrificar el bienestar"
        stats={[
          { value: "1.1 años", label: "Pérdida por 1 año de cierre" },
          { value: "~⅔ año", label: "Recupera tutoría en mate" },
          { value: "7%", label: "Caída rendimiento Nepal" },
          { value: "$48M", label: "USD redirigidos por MEN" },
        ]}
      />

      <Section title="La magnitud de la pérdida">
        <p>
          La interrupción escolar tras un desastre natural produce consecuencias que trascienden con
          mucho el número de días sin clase. Una revisión que sintetizó 57 estudios sobre los efectos
          de la pandemia de COVID-19 en el aprendizaje encontró que un año de cierre escolar se
          traduce en una pérdida equivalente a 1,1 años de aprendizaje, y que la reapertura solo
          permite recuperar hasta 0,5 años<Ref id="R-091" />. La brecha restante, si no se aborda activamente, tiende a
          acumularse y a amplificar las desigualdades preexistentes.
        </p>
        <p>
          Los terremotos producen patrones similares. Tras el sismo de 2015 en Nepal, las evaluaciones
          documentaron una caída del 7% en el rendimiento académico en las zonas más afectadas<Ref id="R-121" />. Datos
          provenientes de Perú muestran que la exposición al terremoto de Ancash en 1970 se asoció con
          niveles inferiores de logro educativo décadas después, lo que sugiere que sin intervención
          oportuna, las consecuencias pueden extenderse a lo largo de toda la trayectoria de vida<Ref id="R-115" />.
        </p>
        <p>
          En Colombia, el terremoto de agosto de 2026 afectó a 1.819 centros educativos y generó una
          interrupción mínima de dos semanas. El Ministerio de Educación Nacional redirigió 48
          millones de dólares del Programa de Espacios Educativos hacia la recuperación y
          reconstrucción de infraestructura educativa en las zonas afectadas, una señal de voluntad
          institucional que, sin embargo, debe complementarse con estrategias pedagógicas concretas
          para la recuperación del aprendizaje<Ref id="R-116" />.
        </p>
      </Section>

      <Section title="Tutoría de alta dosis">
        <p>
          Entre las estrategias de recuperación de aprendizajes con mayor respaldo empírico se
          encuentra la tutoría de alta dosis. Un meta-análisis que integró 96 ensayos controlados
          aleatorizados encontró que esta modalidad permite recuperar aproximadamente dos tercios de un
          año escolar en matemáticas, un efecto sustancialmente mayor que el de las intervenciones
          convencionales de remediación<Ref id="R-124" />.
        </p>
        <p>
          Los factores de éxito identificados por la evidencia incluyen grupos reducidos de 3 a 5
          estudiantes, sesiones integradas dentro de la jornada escolar en lugar de actividades
          extracurriculares, tutores formados que mantienen consistencia a lo largo del programa, un
          currículo estructurado con objetivos claros por sesión, e individualización basada en datos
          diagnósticos. La implementación dentro del horario escolar resultó sustancialmente más
          efectiva que la realizada en horarios extraescolares, posiblemente porque reduce las
          barreras de asistencia y permite mayor integración con el currículo regular.
        </p>

        <Callout type="info" title="Infraestructura existente en Colombia">
          <p>
            El Programa Todos a Aprender (PTA) del MEN Colombia ofrece infraestructura existente para
            implementar tutoría de alta dosis. Cuenta con tutores formados, mecanismos de articulación
            con las instituciones educativas y experiencia acumulada en acompañamiento pedagógico
            situado. Adaptar esta plataforma para la recuperación de aprendizajes post-terremoto
            representaría una ruta de implementación con costos marginales significativamente menores
            que la creación de un programa nuevo.
          </p>
        </Callout>
      </Section>

      <Section title="Marco RAPID">
        <p>
          El Banco Mundial propuso el marco RAPID como guía para la recuperación de aprendizajes tras
          interrupciones educativas prolongadas. Sus cinco componentes se articulan como una secuencia
          lógica que va desde garantizar el retorno hasta integrar la salud psicosocial en todo el
          proceso<Ref id="R-120" />.
        </p>
        <p>
          El primer componente, <strong>Reach</strong> (Alcanzar), busca asegurar que cada estudiante
          regrese al sistema. Esto implica rastrear la matrícula, contactar a las familias de los
          estudiantes ausentes, y remover las barreras que dificultan el retorno, ya sean económicas,
          de transporte, de documentación o emocionales.
        </p>
        <p>
          <strong>Assess</strong> (Evaluar) establece la evaluación diagnóstica de los niveles reales
          de aprendizaje como segundo paso obligatorio. Las evaluaciones tipo ASER ofrecen un modelo
          adecuado para este propósito, dado que son rápidas, de bajo costo, individuales y se
          administran en pocos minutos por estudiante. Su foco en competencias fundamentales permite
          identificar el punto de partida real sin asumir que el currículo previo al desastre fue
          completamente asimilado.
        </p>
        <p>
          <strong>Prioritize</strong> (Priorizar) no significa empobrecer el currículo, sino focalizar
          los esfuerzos pedagógicos en las competencias fundamentales de lectura y matemáticas durante
          el periodo inmediato de recuperación. A medida que los estudiantes consolidan estas bases, el
          currículo se expande progresivamente hacia su alcance completo.
        </p>
        <p>
          <strong>Increase efficiency</strong> (Aumentar la eficiencia) apela a la pedagogía
          estructurada, la optimización del tiempo de aprendizaje y la instrucción diferenciada. Esto
          requiere que los docentes dispongan de materiales organizados por niveles de competencia y
          herramientas para adaptar su enseñanza a la heterogeneidad que el desastre inevitablemente
          amplifica.
        </p>
        <p>
          Finalmente, <strong>Develop psychosocial health</strong> (Desarrollar la salud psicosocial)
          integra el aprendizaje socioemocional transversalmente en todo el proceso, no como un
          complemento aislado. La evidencia muestra de manera consistente que la recuperación
          académica y la recuperación psicosocial se potencian mutuamente cuando se abordan de forma
          integrada.
        </p>
      </Section>

      <Section title="Educación acelerada">
        <p>
          El Grupo de Trabajo de Educación Acelerada (AEWG), coordinado por ACNUR y UNGEI, ha
          formulado diez principios para programas diseñados para estudiantes que han perdido periodos
          significativos de escolaridad. A diferencia de lo que sugiere el nombre, la educación
          acelerada no consiste en avanzar más rápido, sino en concentrar los esfuerzos en lo que
          resulta más relevante con mayor eficiencia pedagógica.
        </p>
        <p>
          Los principios incluyen un ritmo flexible que se adapta al progreso de los estudiantes en
          lugar de imponerles un calendario rígido, un currículo condensado que prioriza competencias
          fundamentales sin eliminar la riqueza formativa, la integración de habilidades para la vida
          junto con los contenidos académicos, y la creación de rutas claras de reintegración al
          sistema educativo regular. Este marco resulta especialmente pertinente para los estudiantes
          que, además de la interrupción por el terremoto, arrastraban rezagos previos que el desastre
          ha agudizado<Ref id="R-102" />.
        </p>
      </Section>

      <Section title="Adaptación curricular profunda">
        <p>
          Más allá de las adaptaciones inmediatas del primer mes, el primer semestre requiere una
          transformación más profunda de la práctica pedagógica. La integración del aprendizaje
          socioemocional (SEL) fue identificada como uno de los tres principales factores de éxito en
          las experiencias educativas post-desastre, presente en el 32% de los casos exitosos
          documentados, junto con el uso de medios de aprendizaje innovadores y la participación de la
          comunidad<Ref id="R-089" />.
        </p>
        <p>
          El Cuadernillo GIRE del Ministerio de Educación Nacional, publicado en enero de 2026, ofrece
          17 actividades prácticas de aprendizaje socioemocional organizadas en su Componente 2. Estas
          actividades cubren un espectro que va desde la identificación de emociones hasta la conexión
          con objetos significativos, pasando por el manejo del estrés, la escucha activa y la
          resolución de problemas. Su diseño permite integrarlas en cualquier área curricular sin
          desplazar los contenidos disciplinares<Ref id="R-106" />.
        </p>
        <p>
          El Pilar 3 del Marco Integral de Seguridad Escolar (CSSF) aboga por incorporar la educación
          sobre reducción del riesgo de desastres en el currículo formal y no formal<Ref id="R-101" />. La experiencia
          chilena demostró que enseñar sobre los terremotos a partir de la vivencia directa de los
          estudiantes facilita simultáneamente la comprensión científica del fenómeno y el
          procesamiento emocional del evento. El sismo se convierte así en una oportunidad de
          aprendizaje significativo sobre el territorio, el riesgo y la resiliencia comunitaria.
        </p>
      </Section>

      <Section title="Evaluación formativa">
        <p>
          El enfoque evaluativo durante el primer semestre posterior al desastre debe privilegiar la
          función formativa sobre la sumativa. Las evaluaciones tipo ASER, diseñadas para ser rápidas,
          de bajo costo e individuales, permiten valorar competencias fundamentales en pocos minutos
          por estudiante sin la carga logística de las pruebas convencionales.
        </p>
        <p>
          El calendario de evaluación diagnóstica debe alinearse con la evidencia sobre trayectorias
          de recuperación, que señala que el desarrollo más dinámico ocurre durante los primeros 12
          meses. Las evaluaciones al mes, a los 3 meses, a los 6 meses y al año del evento permiten
          rastrear tanto las trayectorias crónicas como las de aparición tardía, que solo un
          seguimiento longitudinal puede detectar.
        </p>
        <p>
          Las lecciones de la pospandemia sugieren estrategias concretas que pueden adaptarse al
          contexto post-terremoto. La flexibilización de las calificaciones, la promoción condicional
          automática y la evaluación basada en portafolios demostraron ser mecanismos efectivos para
          mantener la continuidad del proceso educativo sin penalizar a los estudiantes por
          circunstancias fuera de su control.
        </p>
        <p>
          Es importante reconocer que el terremoto puede generar necesidades educativas nuevas que no
          existían antes del evento. Las dificultades de concentración, los problemas de memoria, la
          disminución de la motivación y las conductas de evitación pueden manifestarse en el aula
          como bajo rendimiento cuando en realidad reflejan secuelas psicológicas que requieren un
          abordaje distinto. Los docentes necesitan orientación clara para distinguir cuándo un
          estudiante necesita un ajuste pedagógico y cuándo requiere derivación a un profesional de
          salud mental.
        </p>

        <Callout type="warning" title="Evaluar antes de enseñar">
          <p>
            La evaluación diagnóstica debe realizarse ANTES de retomar el currículo regular. Sin
            ella, se corre el riesgo de penalizar el impacto del desastre como si fuera bajo
            rendimiento, amplificando la desigualdad en lugar de atenderla.
          </p>
        </Callout>
      </Section>
    </div>
  );
}
