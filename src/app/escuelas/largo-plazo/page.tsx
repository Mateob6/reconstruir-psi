import type { Metadata } from "next";
import { PageHero, Section, Callout, DataTable } from "@/components/content";

export const metadata: Metadata = {
  title: "Largo plazo",
  description:
    "Marco Integral de Seguridad Escolar (CSSF), escuelas seguras, lección de Japón y marco colombiano GIRE para la reconstrucción.",
};

export default function LargoPlazoPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <PageHero
        title="Largo plazo"
        subtitle="Construir escuelas más seguras y comunidades más resilientes"
        stats={[
          { value: "3", label: "Pilares CSSF" },
          { value: "42.5% → ~100%", label: "Escuelas seguras Japón" },
          { value: "BBB", label: "Sendai: Build Back Better" },
          { value: "006519", label: "Resolución GIRE 2025" },
        ]}
      />

      <Section title="Marco Integral de Seguridad Escolar">
        <p>
          El Marco Integral de Seguridad Escolar (Comprehensive School Safety Framework, CSSF
          2022-2030) constituye la referencia global para integrar la reducción del riesgo de
          desastres en los sistemas educativos. Su estructura se organiza en una fundación de sistemas
          habilitantes sobre la que se articulan tres pilares complementarios, cada uno abordando una
          dimensión distinta de la seguridad escolar.
        </p>
        <p>
          La fundación establece las condiciones sistémicas necesarias para que los tres pilares
          operen de manera efectiva, incluyendo la evaluación de riesgos, las medidas de continuidad,
          la cultura de seguridad y la protección de la inversión educativa. Los pilares, a su vez,
          abarcan desde la infraestructura física hasta la incorporación de contenidos sobre riesgo en
          los currículos escolares.
        </p>

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
              "Códigos de construcción, control de calidad, evaluación de edificios existentes, WASH, mantenimiento, mitigación de riesgo no estructural",
            ],
            [
              "Pilar 2: Gestión y continuidad",
              "Operación",
              "Planes de respuesta, procedimientos operativos, simulacros, modalidades alternativas de entrega educativa",
            ],
            [
              "Pilar 3: Educación en reducción del riesgo",
              "Currículo",
              "Formación docente, mensajes comunitarios, materiales de calidad, integración DRR + SEL + cambio climático",
            ],
          ]}
        />
      </Section>

      <Section title="Instalaciones seguras">
        <p>
          El primer pilar del CSSF aborda la dimensión física de la seguridad escolar. Esto incluye
          los códigos de construcción aplicados a nuevas edificaciones, los protocolos de evaluación
          estructural para las existentes, las condiciones de agua, saneamiento e higiene (WASH), el
          mantenimiento preventivo y la mitigación de riesgos no estructurales como estanterías sin
          anclar, equipos sueltos o materiales almacenados en altura.
        </p>
        <p>
          En el contexto del terremoto de agosto de 2026, la Secretaría de Educación de Cali
          desplegó diez equipos de ingenieros estructurales para evaluar 217 sedes oficiales. De las
          89 instituciones y 214 sedes que reportaron daños en su infraestructura, la evaluación
          determina cuáles espacios pueden habilitarse para el retorno presencial y cuáles requieren
          alternativas temporales como espacios comunitarios, aulas prefabricadas o modalidades
          remotas.
        </p>
        <p>
          La mitigación del riesgo no estructural merece atención particular. Los terremotos causan
          lesiones no solo por el colapso de edificaciones, sino también por la caída de objetos,
          estanterías, equipos de laboratorio y materiales almacenados sin asegurar. Estas medidas
          pueden implementarse con inversión mínima y efecto inmediato.
        </p>
      </Section>

      <Section title="Gestión y continuidad">
        <p>
          El segundo pilar se centra en la capacidad operativa de las instituciones educativas para
          responder ante una emergencia y garantizar la continuidad del servicio educativo. Esto
          comprende los planes de respuesta, los procedimientos operativos estandarizados, los
          simulacros periódicos y la planificación de contingencia con modalidades alternativas de
          entrega educativa que incluyan opciones presenciales, remotas, híbridas y comunitarias.
        </p>
        <p>
          Colombia cuenta con un marco normativo que ha evolucionado recientemente. Los Planes
          Escolares de Gestión del Riesgo (PEGR), establecidos por la Guía No. 59 del MEN en 2015,
          fueron ampliados mediante la Resolución 006519 de abril de 2025, que los transformó en
          Planes de Gestión Integral del Riesgo Escolar (PGIRE). Este nuevo marco incorpora amenazas
          sociales y antrópicas junto a las amenazas naturales, ampliando el alcance de la gestión del
          riesgo en las instituciones educativas.
        </p>
        <p>
          El Cuadernillo GIRE, publicado por el MEN en enero de 2026, aporta herramientas prácticas
          organizadas en tres momentos de la gestión del riesgo. El primer momento, &quot;Conocimiento
          del riesgo&quot;, facilita la identificación participativa de amenazas y vulnerabilidades.
          El segundo, &quot;Reducción del riesgo&quot;, orienta la implementación de medidas
          preventivas y de mitigación. El tercero, &quot;Manejo de la situación&quot;, guía la
          respuesta cuando ocurre un evento.
        </p>
      </Section>

      <Section title="Educación en reducción del riesgo">
        <p>
          El tercer pilar del CSSF integra la educación sobre reducción del riesgo de desastres en el
          currículo formal y no formal. Su alcance va más allá de los contenidos informativos para
          incluir la formación de competencias docentes, el desarrollo de materiales de calidad, la
          producción de mensajes comunitarios y la articulación de la reducción del riesgo con la
          educación socioemocional y la educación sobre cambio climático.
        </p>
        <p>
          La experiencia chilena ofrece un modelo valioso para este pilar. Enseñar sobre los sismos a
          partir de la experiencia vivida permite articular simultáneamente la comprensión científica
          del fenómeno y el procesamiento emocional de lo ocurrido. Lejos de retraumatizar, este
          enfoque convierte el desastre en una oportunidad de aprendizaje significativo sobre el
          territorio, el riesgo y la resiliencia comunitaria.
        </p>
        <p>
          El Componente 1 del Cuadernillo GIRE proporciona actividades concretas para este pilar. El
          &quot;Mural de Sentires&quot; es una herramienta participativa que permite a la comunidad
          educativa expresar y compartir sus emociones tras el evento. Las &quot;Señales Seguras&quot;
          proponen la señalización participativa de espacios escolares, diseñada para ser accesible
          incluso a la primera infancia. Las &quot;Rutinas que Acompañan&quot; utilizan calendarios
          visuales para generar anticipación y sensación de seguridad en los estudiantes.
        </p>
      </Section>

      <Section title="La lección de Japón">
        <p>
          El terremoto de Kobe de 1995 destruyó aproximadamente 4,000 escuelas y transformó la
          política pública japonesa de seguridad escolar de manera irreversible. Japón puso en marcha
          un programa nacional de reforzamiento sísmico que llevó la proporción de escuelas
          sísmica-resistentes del 42.5% en 2002 a cifras cercanas al 100% en la actualidad.
        </p>
        <p>
          Esta transformación no fue inmediata ni automática. Requirió compromiso político sostenido
          durante dos décadas, financiamiento dedicado proveniente tanto del gobierno central como de
          las prefecturas, y estándares técnicos aplicados de manera uniforme en todo el sistema
          educativo. El programa no se limitó a las nuevas construcciones sino que incluyó el
          reforzamiento (retrofit) de las edificaciones existentes, lo que constituye el desafío más
          relevante para Colombia.
        </p>
        <p>
          Japón exporta hoy su modelo de seguridad escolar a través de programas de cooperación
          internacional en Perú, El Salvador, Turquía y Filipinas, demostrando que las lecciones
          aprendidas tras un desastre pueden convertirse en capacidad técnica transferible.
        </p>

        <Callout type="success" title="La seguridad escolar sísmica es alcanzable">
          <p>
            La experiencia japonesa demuestra que la seguridad escolar sísmica es alcanzable cuando
            existe voluntad política sostenida y estándares técnicos aplicados sistemáticamente. El
            país pasó de la devastación de 4,000 escuelas a un sistema escolar casi completamente
            protegido en menos de dos décadas.
          </p>
        </Callout>
      </Section>

      <Section title="Marco colombiano">
        <p>
          Colombia dispone de un conjunto de instrumentos normativos que proveen la base para una
          estrategia de largo plazo en seguridad escolar. La Guía No. 59 del MEN establece las
          directrices para los Planes Escolares de Gestión del Riesgo, mientras que las guías del
          UNGRD complementan la perspectiva institucional con herramientas operativas para la
          planificación comunitaria.
        </p>
        <p>
          La Resolución 006519 de abril de 2025 representa la actualización más reciente del marco,
          ampliando el enfoque de amenazas naturales a una gestión integral que incluye amenazas
          sociales y antrópicas. El Cuadernillo GIRE, publicado en enero de 2026, tradujo este marco
          normativo en actividades prácticas para las comunidades educativas.
        </p>
        <p>
          En respuesta al terremoto del 10 de agosto, el Ministerio de Educación Nacional redirigió
          48 millones de dólares del Programa de Espacios Educativos hacia la recuperación y
          reconstrucción de infraestructura educativa en las zonas afectadas. Esta decisión señala la
          prioridad que el gobierno central otorga a la continuidad del servicio educativo como
          componente de la respuesta integral al desastre.
        </p>
        <p>
          El principio &quot;Build Back Better&quot; del Marco de Sendai establece que la
          reconstrucción posterior a un desastre debe superar los estándares de seguridad previos al
          evento. Para las escuelas colombianas, esto significa que las reparaciones y
          reconstrucciones derivadas del terremoto de 2026 no deben limitarse a restaurar el estado
          anterior, sino aprovechar la oportunidad para elevar los estándares de seguridad sísmica,
          accesibilidad y condiciones sanitarias.
        </p>

        <Callout type="info" title="Primera prueba del nuevo marco">
          <p>
            La Resolución 006519 de abril 2025 amplió el alcance de los planes escolares de gestión
            del riesgo apenas cuatro meses antes del terremoto del 10 de agosto. Este evento
            constituye la primera prueba a gran escala del marco actualizado y ofrecerá lecciones
            fundamentales para su implementación en todo el territorio nacional.
          </p>
        </Callout>
      </Section>
    </div>
  );
}
