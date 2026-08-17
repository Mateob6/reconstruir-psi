import type { Metadata } from "next";
import { PageHero, Section, Callout, DataTable, KeyMessage, Ref } from "@/components/content";

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
          El primer pilar del CSSF aborda la dimensión física de la seguridad escolar: códigos de
          construcción para nuevas edificaciones, protocolos de evaluación estructural para las
          existentes, condiciones de agua, saneamiento e higiene (WASH) y mantenimiento preventivo.
        </p>
        <p>
          En el contexto del terremoto de agosto de 2026, la Secretaría de Educación de Cali
          desplegó <span className="stat-inline">10 equipos</span> de ingenieros estructurales para
          evaluar <span className="stat-inline">217 sedes</span> oficiales. De
          las <span className="stat-inline">89 instituciones</span> y 214 sedes que reportaron daños,
          la evaluación determina cuáles espacios pueden habilitarse para el retorno presencial y
          cuáles requieren alternativas temporales<Ref id="R-111" />.
        </p>

        <h3>Riesgo no estructural</h3>
        <p>
          La mitigación del <strong>riesgo no estructural</strong> merece atención particular. Los
          terremotos causan lesiones no solo por el colapso de edificaciones, sino también por la
          caída de objetos, estanterías, equipos de laboratorio y materiales almacenados sin
          asegurar. Estas medidas pueden implementarse con inversión mínima y efecto inmediato.
        </p>
      </Section>

      <Section title="Gestión y continuidad">
        <p>
          El segundo pilar se centra en la capacidad operativa de las instituciones educativas para
          responder ante una emergencia y garantizar la continuidad del servicio educativo: planes de
          respuesta, procedimientos operativos estandarizados, simulacros periódicos y planificación
          de contingencia con modalidades alternativas.
        </p>
        <p>
          Colombia cuenta con un marco normativo que ha evolucionado recientemente. Los <strong>Planes
          Escolares de Gestión del Riesgo (PEGR)</strong>, establecidos por la Guía No. 59 del MEN
          en 2015<Ref id="R-105" />, fueron ampliados mediante la <strong>Resolución
          006519</strong> de abril de <span className="stat-inline">2025</span><Ref id="R-107" />,
          que los transformó en <strong>Planes de Gestión Integral del Riesgo Escolar
          (PGIRE)</strong>. Este nuevo marco incorpora amenazas sociales y antrópicas junto a las
          naturales.
        </p>

        <h3>El Cuadernillo GIRE</h3>
        <p>
          El <strong>Cuadernillo GIRE</strong>, publicado por el MEN en enero de 2026, aporta
          herramientas prácticas organizadas en tres momentos de la gestión del riesgo:
          &quot;Conocimiento del riesgo&quot; (identificación participativa de amenazas),
          &quot;Reducción del riesgo&quot; (medidas preventivas y de mitigación), y &quot;Manejo de
          la situación&quot; (respuesta cuando ocurre un evento)<Ref id="R-106" />.
        </p>
      </Section>

      <Section title="Educación en reducción del riesgo">
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
      </Section>

      <Section title="La lección de Japón">
        <p>
          El terremoto de Kobe de 1995 destruyó
          aproximadamente <span className="stat-inline">4,000</span> escuelas y transformó la
          política pública japonesa de seguridad escolar de manera irreversible. Japón puso en marcha
          un <strong>programa nacional de seguridad escolar</strong> que llevó la proporción de
          escuelas sísmica-resistentes
          del <span className="stat-inline">42,5%</span> en 2002 a cifras cercanas
          al <span className="stat-inline">100%</span> en la actualidad<Ref id="R-079" />.
        </p>
        <p>
          Esta transformación requirió compromiso político sostenido durante dos décadas,
          financiamiento dedicado proveniente tanto del gobierno central como de las prefecturas, y
          estándares técnicos aplicados de manera uniforme en todo el sistema educativo. El programa
          no se limitó a las nuevas construcciones sino que incluyó el reforzamiento (retrofit) de
          las edificaciones existentes.
        </p>
        <p>
          Japón exporta hoy su modelo a través de programas de cooperación internacional en Perú, El
          Salvador, Turquía y Filipinas, demostrando que las lecciones aprendidas tras un desastre
          pueden convertirse en capacidad técnica transferible.
        </p>

        <KeyMessage>
          La experiencia japonesa demuestra que la seguridad escolar sísmica es alcanzable cuando
          existe voluntad política sostenida y estándares técnicos aplicados sistemáticamente.
        </KeyMessage>
      </Section>

      <Section title="Marco colombiano">
        <p>
          Colombia dispone de un conjunto de instrumentos normativos que proveen la base para una
          estrategia de largo plazo. La <strong>Guía No. 59</strong> del
          MEN<Ref id="R-105" /> establece las directrices para los Planes Escolares de Gestión del
          Riesgo, mientras que las guías de la <strong>UNGRD</strong><Ref id="R-108" /> complementan
          la perspectiva institucional con herramientas operativas.
        </p>
        <p>
          En respuesta al terremoto, el MEN
          redirigió <span className="stat-inline">$48 millones</span> de dólares del Programa de
          Espacios Educativos hacia la recuperación y reconstrucción de infraestructura
          educativa<Ref id="R-116" />.
        </p>
        <p>
          El principio <strong>&quot;Reconstruir mejor&quot;</strong> (Build Back Better) del Marco
          de Sendai establece que la reconstrucción posterior a un desastre debe superar los
          estándares de seguridad previos al evento. Para las escuelas colombianas, esto significa
          que las reparaciones derivadas del terremoto de 2026 no deben limitarse a restaurar el
          estado anterior, sino aprovechar la oportunidad para elevar los estándares de seguridad
          sísmica, accesibilidad y condiciones sanitarias.
        </p>

        <Callout type="info" title="Primera prueba del nuevo marco">
          <p>
            La <strong>Resolución 006519</strong> de abril 2025 amplió el alcance de los planes
            escolares de gestión del riesgo apenas cuatro meses antes del terremoto del 10 de agosto.
            Este evento constituye la primera prueba a gran escala del marco actualizado.
          </p>
        </Callout>
      </Section>
    </div>
  );
}
