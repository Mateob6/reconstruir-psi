import type { Metadata } from "next";
import { PageHero, Section, Callout, DataTable } from "@/components/content";

export const metadata: Metadata = {
  title: "Recursos",
  description:
    "Programas con evidencia (TRT, CBI), instrumentos de screening, marco normativo colombiano y guías internacionales.",
};

export default function RecursosPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <PageHero
        title="Recursos"
        subtitle="Programas, instrumentos y marco normativo para la acción"
        stats={[
          { value: "6", label: "Programas perfilados" },
          { value: "5", label: "Sesiones TRT" },
          { value: "8", label: "Sesiones CBI" },
          { value: "15", label: "Guías disponibles" },
        ]}
      />

      <Section title="Programas con evidencia">
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
          de evidencia entre los 25 programas analizados por Avery et al. (2024), resultado
          confirmado de manera independiente por Cosgrove et al. (2025). El programa enseña
          habilidades específicas para manejar memorias intrusivas, activación fisiológica y
          conductas de evitación. Cuando se combina con un módulo de habilidades parentales, los
          resultados superan a los de TRT solo. El manual está disponible de forma gratuita en
          childrenandwar.org e incluye un componente de entrenamiento en línea.
        </p>

        <p>
          <strong>Classroom-Based Intervention (CBI)</strong>, desarrollado por UNICEF y War Child
          Holland, se estructura en ocho sesiones grupales que integran terapia de juego, conciencia
          emocional, resolución de conflictos y aprendizaje cooperativo. Las sesiones oscilan entre
          45 y 120 minutos, y el meta-análisis de Morina et al. (2017) reporta un tamaño de efecto
          pre-post de g = 0,68 para intervenciones de aula de este tipo.
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
          calificación de evidencia &quot;alta&quot; en la evaluación de Cosgrove et al. (2025). Sin
          embargo, un seguimiento a tres años reveló que los efectos no se sostuvieron en el
          tiempo, lo que subraya la necesidad de supervisión y acompañamiento continuos cuando son
          los docentes quienes entregan la intervención.
        </p>

        <p>
          <strong>SOLAR-Kids/Teens</strong> es un programa breve y escalable basado en un modelo de
          &quot;tamizaje y tratamiento&quot; para síntomas moderados. Se encuentra aún en fase
          piloto y su efectividad a gran escala está por evaluarse.
        </p>

        <Callout type="success" title="Candidatos más fuertes para Colombia">
          <p>
            TRT y CBI reúnen las condiciones de viabilidad más favorables para el contexto
            colombiano. Ambos pueden ser entregados por personas sin formación clínica especializada,
            requieren entre 5 y 8 sesiones, disponen de materiales accesibles y son compatibles con
            la estructura institucional de las escuelas colombianas.
          </p>
        </Callout>
      </Section>

      <Section title="Instrumentos de screening">
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
          y garantizar la calidad de los datos sin sobrecargar al personal clínico.
        </p>

        <Callout type="info" title="Calendario de evaluación recomendado">
          <p>
            La evidencia sobre trayectorias de recuperación indica que el desarrollo más dinámico
            ocurre durante los primeros 12 meses. Las evaluaciones deben realizarse al mes, a los 3
            meses, a los 6 meses y al año del evento, lo que permite detectar tanto las trayectorias
            crónicas como las de aparición tardía.
          </p>
        </Callout>
      </Section>

      <Section title="Marco normativo colombiano">
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
              "MinSalud — Protocolo atención psicosocial",
              "2016",
              "Marco oficial para emergencias (Ley 1523/2012). Tres fases de respuesta, referencias a pueblos indígenas (Paez/Nasas)",
            ],
            [
              "MinSalud — Guía salud mental en emergencias",
              "2016",
              "Guía clínica validada en todas las regiones colombianas",
            ],
            [
              "MEN — Guía 59 (PEGR)",
              "2015",
              "Planes Escolares de Gestión del Riesgo",
            ],
            [
              "MEN — Resolución 006519 (GIRE)",
              "2025",
              "PEGR se transforma en PGIRE, amplía alcance a amenazas sociales y antrópicas",
            ],
            [
              "MEN — Cuadernillo GIRE",
              "2026",
              "17 actividades socioemocionales + 3 momentos de gestión del riesgo",
            ],
            [
              "PAPSIVI",
              "2019",
              "Atención psicosocial para víctimas del conflicto — capacidad instalada transferible",
            ],
            [
              "UNGRD — Plan escolar",
              "—",
              "Guía para planes de gestión del riesgo escolar",
            ],
          ]}
        />

        <p>
          Un recurso singular del contexto colombiano es la infraestructura del PAPSIVI (Programa
          de Atención Psicosocial y Salud Integral a Víctimas), construida durante décadas de
          conflicto armado. Este programa ha formado redes de profesionales con experiencia en
          atención psicosocial comunitaria, trabajo con poblaciones vulnerables y adaptación
          cultural de intervenciones. Si bien fue diseñado para víctimas del conflicto, sus
          protocolos, su personal capacitado y sus redes territoriales constituyen una capacidad
          instalada que puede activarse para la respuesta a desastres naturales.
        </p>
      </Section>

      <Section title="Guías internacionales">
        <p>
          La revisión identificó y descargó 15 guías de organismos internacionales y nacionales que
          constituyen el corpus de referencia para la respuesta psicosocial y educativa. Estas guías
          cubren desde los primeros auxilios psicológicos inmediatos hasta los marcos de seguridad
          escolar a largo plazo, y están disponibles en español e inglés.
        </p>

        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>IASC (2007) — Directrices sobre salud mental y apoyo psicosocial en emergencias</li>
          <li>OMS (2011) — Primeros auxilios psicológicos: guía para trabajadores de campo</li>
          <li>UNICEF (2022) — Salud mental y apoyo psicosocial en escuelas</li>
          <li>OPS/PAHO — Guía de salud mental en desastres para las Américas</li>
          <li>
            UNICEF Chile — &quot;Rearmemos la vida de niños y niñas&quot;: guía psicoeducativa
            post-terremoto
          </li>
          <li>MHPSS Collaborative (2020) — Revisión de intervenciones SMAPS</li>
          <li>
            MinSalud Colombia (×2) — Protocolos de atención psicosocial y guía de salud mental en
            emergencias
          </li>
          <li>CSSF (2022–2030) — Marco integral de seguridad escolar</li>
          <li>AEWG (2017) — Educación acelerada: principios y prácticas</li>
          <li>MEN — Guía 59: Planes escolares de gestión del riesgo</li>
          <li>MEN GIRE (×2) — Cuadernillo y Política GIRE 2025</li>
          <li>UNGRD — Plan escolar de gestión del riesgo</li>
        </ul>
      </Section>
    </div>
  );
}
