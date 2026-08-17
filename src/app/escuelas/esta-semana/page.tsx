import type { Metadata } from "next";
import { PageHero, Section, Callout, DosDonts, DataTable, Ref } from "@/components/content";

export const metadata: Metadata = {
  title: "Esta semana",
  description:
    "Qué hacer en los primeros 7 días tras el sismo: primeros auxilios psicológicos, guía para directivos y docentes, continuidad educativa.",
};

export default function EstaSemanaPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <PageHero
        title="Esta semana"
        subtitle="Qué hacer en los primeros 7 días tras el sismo"
        stats={[
          { value: "287+", label: "Fallecidos" },
          { value: "89", label: "Instituciones con daños" },
          { value: "24 ago", label: "Reapertura escolar" },
          { value: "106", label: "Línea psicológica 24/7" },
        ]}
      />

      <Callout type="danger" title="Lo que NO debe hacerse">
        <ul className="list-disc space-y-1 pl-5">
          <li>
            No realizar debriefing psicológico de sesión única. La evidencia muestra que puede ser
            dañino y el IASC lo prohíbe explícitamente<Ref id="R-023" />.
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

      <Section title="Para directivos escolares">
        <p>
          La primera responsabilidad de un directivo escolar en la semana posterior al sismo es
          garantizar que ningún estudiante regrese a un espacio físicamente inseguro. Antes de
          cualquier reapertura, los equipos de ingeniería estructural deben haber evaluado cada
          sede. En Cali, la Secretaría de Educación desplegó diez equipos para evaluar 217 sedes
          oficiales<Ref id="R-111" />, y el resultado determinará cuáles pueden funcionar con normalidad, cuáles
          requieren adecuaciones y cuáles necesitan alternativas temporales.
        </p>
        <p>
          Una vez confirmada la seguridad física, el paso siguiente consiste en activar los
          protocolos del Ministerio de Salud para atención psicosocial en emergencias<Ref id="R-027" />, sustentados
          en la Ley 1523 de 2012. Estos protocolos orientan la respuesta institucional y ofrecen
          un marco legal para las decisiones que los directivos deberán tomar en las semanas
          siguientes.
        </p>
        <p>
          Un paso que suele omitirse en la urgencia de reabrir consiste en organizar una jornada de
          autocuidado docente antes de que los estudiantes regresen. Los docentes son simultáneamente
          implementadores de la respuesta y personas afectadas por el desastre. Si llegan al primer
          día sin haber procesado su propia experiencia, la calidad de su contención emocional se
          verá comprometida.
        </p>
        <p>
          También conviene designar un equipo interno de respuesta que sirva como punto de contacto
          para derivaciones, articulación con servicios externos y seguimiento de casos. Este equipo
          debe incluir al menos un orientador escolar, un directivo y un docente de confianza para
          los estudiantes.
        </p>

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
      </Section>

      <Section title="Para docentes en el aula">
        <p>
          La evidencia converge en un conjunto de acciones que los docentes pueden implementar desde
          el primer día de retorno, sin requerir formación especializada en salud mental. Estas
          acciones se organizan en torno a un principio central: la presencia estable, predecible y
          afectuosa de un adulto es el factor protector más importante para un niño o niña tras un
          desastre<Ref id="R-024" />.
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
      </Section>

      <Section title="Continuidad educativa">
        <p>
          La reapertura de las instituciones educativas tras un desastre no constituye un simple acto
          administrativo de reanudación. La evidencia internacional la posiciona como una
          intervención en sí misma, dado que restaura rutinas, estructura temporal, contacto con
          pares y acceso a adultos de referencia, todos ellos factores protectores documentados
          tanto en la dimensión psicosocial como en la educativa.
        </p>
        <p>
          El riesgo de postergar el retorno se encuentra bien documentado. En Nepal, donde un millón
          de estudiantes vieron interrumpida su educación tras el terremoto de 2015, el gobierno
          desplegó 15,000 centros de aprendizaje transicional en el plazo de un mes<Ref id="R-121" />, lo que permitió
          que la actividad educativa se reanudara aun cuando la infraestructura permanente seguía
          siendo inhabitable. La introducción de actividades lúdicas, exploración al aire libre y
          ciencias creativas en estos espacios facilitó una atmósfera que favoreció la elaboración
          del trauma sin sacrificar el proceso educativo.
        </p>
        <p>
          En Ecuador, tras el terremoto de 2016, el Ministerio de Educación implementó el plan
          &quot;Escuela para todos, juntos nos levantamos&quot;<Ref id="R-126" />, que se convirtió en referencia
          regional por articular la respuesta inmediata con la recuperación a mediano plazo. El plan
          combinó espacios temporales, turnos diferenciados, kits escolares de emergencia y
          acompañamiento psicosocial, demostrando que la integración de las dimensiones educativa y
          emocional resulta más efectiva que abordarlas por separado.
        </p>
        <p>
          El marco colombiano de Gestión Integral del Riesgo Escolar (GIRE) prevé esta situación. La
          Fase 2, denominada &quot;Acogida&quot;, establece las condiciones para recibir a la
          comunidad educativa tras la emergencia, priorizando el restablecimiento de vínculos, la
          evaluación de necesidades y la adecuación de los espacios disponibles. La Fase 3,
          &quot;Manejo de la situación&quot;, orienta los ajustes necesarios a la atención educativa<Ref id="R-106" />.
        </p>

        <Callout type="info" title="Colombia, agosto 2026">
          <p>
            1,819 centros educativos resultaron afectados a nivel nacional<Ref id="R-116" />. El MEN redirigió 48
            millones de dólares del Programa de Espacios Educativos hacia la recuperación y
            reconstrucción de infraestructura educativa en las zonas afectadas<Ref id="R-116" />. En Cali, 89
            instituciones y 214 sedes reportaron daños. La Semana de Desarrollo Institucional del
            18 al 21 de agosto es la ventana para preparar a los docentes antes de la reapertura
            del 24 de agosto.
          </p>
        </Callout>
      </Section>

      <Section title="Señales de alerta">
        <p>
          Las reacciones emocionales en las primeras semanas tras un desastre son, en su mayoría,
          respuestas normales a una situación anormal. Sin embargo, transcurridas aproximadamente
          cuatro semanas, ciertos indicadores sugieren que un estudiante podría beneficiarse de una
          evaluación más especializada. La observación docente, aunque valiosa, no es suficiente
          por sí sola para identificar con precisión a quienes necesitan apoyo adicional.
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm">
          <li>Revivir el evento de forma repetida (pesadillas, juego repetitivo sobre el sismo)</li>
          <li>Evitación sistemática de lugares, conversaciones o actividades relacionadas</li>
          <li>Disminución marcada del interés en actividades que antes disfrutaba</li>
          <li>Agresividad persistente o desregulación emocional que no cede</li>
          <li>Síntomas físicos sin causa médica identificable (dolores de cabeza, de estómago)</li>
          <li>Interferencia sostenida con el rendimiento escolar</li>
        </ul>

        <Callout type="info" title="Evaluación con instrumentos estandarizados">
          <p>
            La observación docente debe complementarse con instrumentos validados como el CRIES
            (Children&apos;s Revised Impact of Event Scale) y el CPSS (Child PTSD Symptom Scale)<Ref id="R-003" />.
            El calendario recomendado de evaluación incluye mediciones a 1, 3, 6 y 12 meses
            post-desastre, lo que permite identificar tanto las trayectorias de recuperación como
            los casos de aparición tardía.
          </p>
        </Callout>
      </Section>

      <Section title="Cuidar al cuidador">
        <p>
          Los docentes enfrentan una doble carga en contextos post-desastre. Son simultáneamente
          implementadores de la respuesta institucional y personas afectadas por el evento. Los
          síntomas documentados entre docentes tras terremotos incluyen dolores de cabeza, dolor
          de espalda, alteraciones del sueño e irritabilidad. Un docente que no ha procesado su
          propia experiencia difícilmente podrá ofrecer contención emocional genuina.
        </p>
        <p>
          UNICEF posiciona el bienestar docente como un pilar independiente de la salud
          mental escolar, no como un subproducto de la atención a estudiantes<Ref id="R-025" />. La experiencia
          chilena post-terremoto de 2010 identificó la mentalización como factor protector central<Ref id="R-001" />:
          la capacidad de comprender las propias emociones y las de los estudiantes como respuestas
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
            Línea 106 del Ministerio de Salud<Ref id="R-027" /> — atención psicológica 24/7 (escucha, primeros
            auxilios psicológicos, intervención en crisis, remisión). Disponible para docentes,
            estudiantes y familias.
          </p>
        </Callout>
      </Section>

      <Section title="Marco normativo aplicable">
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
      </Section>
    </div>
  );
}
