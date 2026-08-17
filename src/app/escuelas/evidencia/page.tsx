import type { Metadata } from "next";
import { PageHero, Section, Callout, DataTable, Ref, KeyMessage } from "@/components/content";

export const metadata: Metadata = {
  title: "Evidencia",
  description:
    "Tres meta-análisis, tamaños de efecto, moderadores y trayectorias de recuperación de intervenciones psicosociales escolares post-desastre.",
};

export default function EvidenciaPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <PageHero
        title="Evidencia"
        subtitle="Qué dice la investigación sobre las intervenciones psicosociales escolares post-desastre"
        stats={[
          { value: "75", label: "Estudios analizados" },
          { value: "11,000+", label: "Participantes" },
          { value: "3", label: "Meta-análisis clave" },
          { value: "g = −1.20", label: "Efecto en TEPT" },
        ]}
      />

      <Section title="Tres meta-análisis clave">
        <p>
          La base de evidencia sobre intervenciones psicosociales escolares post-desastre descansa
          en tres <strong>revisiones sistemáticas con meta-análisis</strong> que, en conjunto,
          sintetizan <span className="stat-inline">75</span> estudios con más de{" "}
          <span className="stat-inline">11,000</span> participantes. Estas revisiones permiten
          identificar no solo si las intervenciones funcionan, sino bajo qué condiciones y para qué
          poblaciones producen los mayores efectos.
        </p>
        <p>
          La revisión más reciente, conducida por Laksmita y colaboradores en 2026, analizó{" "}
          <span className="stat-inline">13</span> ensayos controlados aleatorizados con 2,418
          participantes, restringidos exclusivamente a intervenciones implementadas en contextos
          escolares. El efecto inmediato sobre los síntomas de TEPT fue grande
          (<span className="stat-inline">g&nbsp;=&nbsp;−1.20</span>), con efectos que se
          sostuvieron tanto a corto plazo
          (<span className="stat-inline">g&nbsp;=&nbsp;−0.25</span>) como a largo plazo
          (<span className="stat-inline">g&nbsp;=&nbsp;−0.45</span>). Para depresión, el efecto
          inmediato fue pequeño pero significativo
          (<span className="stat-inline">g&nbsp;=&nbsp;−0.34</span>)<Ref id="R-003" />.
        </p>
        <p>
          Xie y colaboradores (2024) realizaron un <strong>meta-análisis en red</strong> con{" "}
          <span className="stat-inline">26</span> ensayos controlados y 4,331 participantes, lo
          que permitió comparar simultáneamente múltiples modalidades terapéuticas y establecer
          rankings de efectividad<Ref id="R-004" />. Morina y colaboradores (2017) aportaron la
          revisión más amplia con <span className="stat-inline">36</span> estudios y 4,411
          participantes, encontrando un efecto pre-post grande
          (<span className="stat-inline">g&nbsp;=&nbsp;1.35</span>) y un efecto moderado cuando
          se compara contra controles activos
          (<span className="stat-inline">g&nbsp;=&nbsp;0.44</span>)<Ref id="R-002" />.
        </p>

        <DataTable
          caption="Tamaños de efecto por revisión"
          headers={["Revisión", "k", "N", "Efecto TEPT", "Efecto depresión"]}
          rows={[
            ["Laksmita et al. (2026)", "13", "2,418", "g = −1.20", "g = −0.34"],
            ["Xie et al. (2024)", "26", "4,331", "SMD = −0.67 (EMDR)", "SMD = −0.40 (EMDR)"],
            ["Morina et al. (2017)", "36", "4,411", "g = 0.44 (vs. control)", "No reportado"],
          ]}
        />
      </Section>

      <Section title="¿Qué terapia funciona mejor?">
        <p>
          El meta-análisis en red de Xie y colaboradores (2024) permitió clasificar diez modalidades
          terapéuticas según su probabilidad de ser la más efectiva, utilizando el estadístico
          SUCRA. Para los síntomas de TEPT tras la intervención, <strong>EMDR</strong> ocupó la
          primera posición (SUCRA&nbsp;<span className="stat-inline">69.6</span>), seguida por la
          Terapia de Exposición/NET (SUCRA&nbsp;69.6) y la <strong>TCC</strong>
          (SUCRA&nbsp;66.0). En el seguimiento a largo plazo, EMDR mantuvo el primer lugar
          (SUCRA&nbsp;<span className="stat-inline">87.1</span>), con ET/NET en segundo
          (SUCRA&nbsp;78.9). Para síntomas depresivos, EMDR también lideró
          (SUCRA&nbsp;<span className="stat-inline">88.5</span>), seguida por la Terapia de Juego
          (SUCRA&nbsp;87.3)<Ref id="R-004" />.
        </p>
        <p>
          Los datos pre-post de Morina y colaboradores (2017) complementan esta perspectiva con una
          taxonomía más fina. La <strong>Terapia Narrativa de Exposición para niños (KIDNET)</strong>{" "}
          mostró el tamaño de efecto más alto
          (<span className="stat-inline">g&nbsp;=&nbsp;1.87</span>), aunque con solo dos estudios.
          EMDR obtuvo <span className="stat-inline">g&nbsp;=&nbsp;1.46</span> a partir de diez
          estudios, la TCC <span className="stat-inline">g&nbsp;=&nbsp;1.07</span> en ocho
          estudios, y las intervenciones de aula{" "}
          <span className="stat-inline">g&nbsp;=&nbsp;0.68</span> en nueve estudios<Ref id="R-002" />.
        </p>

        <KeyMessage>
          Implementar cualquier intervención estructurada produce beneficios significativos frente a
          no intervenir. No hay diferencia estadísticamente significativa entre las modalidades
          terapéuticas.
        </KeyMessage>

        <Callout type="info" title="Todas las modalidades son efectivas">
          <p>
            A pesar de las diferencias en los rankings, el análisis formal no encontró diferencias
            estadísticamente significativas entre los tipos de terapia
            (<span className="stat-inline">F&nbsp;=&nbsp;2.49</span>,{" "}
            <span className="stat-inline">p&nbsp;=&nbsp;0.062</span>)<Ref id="R-002" />. El mensaje
            central de la evidencia es que implementar cualquier intervención estructurada produce
            beneficios significativos frente a no intervenir.
          </p>
        </Callout>
      </Section>

      <Section title="Moderadores: qué amplifica el efecto">
        <p>
          El análisis de moderadores de Laksmita y colaboradores (2026) revela cuatro factores que
          amplifican sustancialmente la efectividad de las intervenciones escolares. Las sesiones de
          60 minutos o menos produjeron efectos significativamente mayores que las sesiones más
          prolongadas (<span className="stat-inline">g&nbsp;=&nbsp;−1.60</span> vs.{" "}
          <span className="stat-inline">g&nbsp;=&nbsp;−0.16</span>), y los programas con seis o
          más sesiones superaron ampliamente a los más breves
          (<span className="stat-inline">g&nbsp;=&nbsp;−1.77</span> vs.{" "}
          <span className="stat-inline">g&nbsp;=&nbsp;−0.15</span>).
        </p>
        <p>
          El <strong>contexto geográfico</strong> emergió como un moderador poderoso. Las
          intervenciones en países en desarrollo obtuvieron efectos notablemente más grandes que en
          países desarrollados (<span className="stat-inline">g&nbsp;=&nbsp;−1.77</span> vs.{" "}
          <span className="stat-inline">g&nbsp;=&nbsp;−0.15</span>, diferencia entre grupos
          p&nbsp;&lt;&nbsp;0.001). De manera consistente, cuando las intervenciones fueron
          entregadas por personas sin formación en salud mental, los efectos inmediatos fueron
          sustancialmente mayores que cuando las entregaron profesionales de salud
          (<span className="stat-inline">g&nbsp;=&nbsp;−2.60</span> vs.{" "}
          <span className="stat-inline">g&nbsp;=&nbsp;−0.39</span>)<Ref id="R-003" />.
        </p>

        <DataTable
          caption="Efectos por moderador (Laksmita et al., 2026)"
          headers={["Moderador", "Condición favorable", "Condición desfavorable"]}
          rows={[
            ["Duración de sesión", "≤60 min: g = −1.60", ">60 min: g = −0.16"],
            ["Número de sesiones", "≥6 sesiones: g = −1.77", "<6 sesiones: g = −0.15"],
            ["Contexto país", "En desarrollo: g = −1.77", "Desarrollado: g = −0.15"],
            ["Quién entrega", "No especialistas: g = −2.60", "Prof. salud: g = −0.39"],
          ]}
        />

        <Callout type="success" title="Colombia cumple todos los moderadores favorables">
          <p>
            Como país en desarrollo con una amplia red de docentes capacitables, Colombia se ubica
            en la intersección de los cuatro moderadores que amplifican la efectividad. Las
            intervenciones de sesiones breves, entregadas por docentes formados, en un contexto de
            desarrollo, representan exactamente el perfil con mayores tamaños de efecto.
          </p>
        </Callout>
      </Section>

      <Section title="Trayectorias de recuperación">
        <p>
          No todos los niños y niñas necesitan intervención clínica. La revisión de Witt y
          colaboradores (2024), que sintetizó <span className="stat-inline">15</span> estudios
          longitudinales con <span className="stat-inline">11,519</span> participantes menores de
          edad, identificó cuatro trayectorias predominantes tras un desastre natural. Entre el{" "}
          <span className="stat-inline">34%</span> y el{" "}
          <span className="stat-inline">82%</span> de los participantes mostraron{" "}
          <strong>trayectorias resilientes</strong>, y entre el{" "}
          <span className="stat-inline">51%</span> y el{" "}
          <span className="stat-inline">97%</span> fueron clasificados como resilientes o en
          recuperación espontánea. El desarrollo más dinámico ocurre durante los primeros 12 meses,
          lo que subraya la importancia de intervenir tempranamente<Ref id="R-050" />.
        </p>

        <h3>El estudio de Kobe</h3>
        <p>
          El estudio longitudinal de Kobe (Uemoto et al., 2012) ofrece la evidencia más granular.
          Tras el terremoto de 1995, <span className="stat-inline">8,800</span> estudiantes de los
          grados 3, 5 y 8 fueron evaluados en cuatro momentos (4, 6, 12 y 24 meses) junto con{" "}
          <span className="stat-inline">1,886</span> controles de áreas no afectadas. Los más
          jóvenes (grado 3) resultaron los más afectados. Las niñas presentaron consistentemente
          puntuaciones más altas que los niños.
        </p>
        <p>
          Los síntomas persistieron más de dos años en las zonas de mayor daño. Un hallazgo
          inesperado fue la aparición de un tercer factor en los cuestionarios, relacionado con la{" "}
          <strong>responsabilidad social y la culpa</strong>, que no había sido documentado
          previamente<Ref id="R-079" />.
        </p>
      </Section>

      <Section title="La pirámide IASC">
        <p>
          Toda respuesta psicosocial en emergencias debe organizarse dentro del marco establecido
          por el Comité Permanente entre Organismos (IASC, 2007)<Ref id="R-023" />. Este modelo propone una{" "}
          <strong>pirámide de cuatro niveles</strong> que ordena las intervenciones según su alcance
          y grado de especialización.
        </p>

        <h3>Nivel 1: Servicios básicos y seguridad</h3>
        <p>
          En la base se ubican los <strong>servicios básicos y la seguridad</strong>, que incluyen
          alimentación, agua, refugio y protección física.
        </p>

        <h3>Nivel 2: Apoyos comunitarios y familiares</h3>
        <p>
          El segundo nivel corresponde a los <strong>apoyos comunitarios y familiares</strong>,
          como la activación de redes sociales y los espacios seguros para la niñez.
        </p>

        <h3>Nivel 3: Apoyos focalizados no especializados</h3>
        <p>
          El tercer nivel comprende los <strong>apoyos focalizados no especializados</strong>,
          donde se incluyen los primeros auxilios psicológicos (PAP) y las actividades
          psicosociales estructuradas en escuelas.
        </p>

        <h3>Nivel 4: Servicios especializados</h3>
        <p>
          Solo el cuarto nivel, reservado para una minoría de personas con afectaciones severas,
          involucra <strong>servicios especializados</strong> de psicología y psiquiatría. El
          principio fundamental de este modelo es que la mayoría de las personas se recuperan con
          apoyo de los niveles 1 y 2, sin requerir intervención clínica. Las escuelas constituyen
          escenarios privilegiados para los niveles 1 a 3, dado que son las primeras instituciones
          en reanudar operaciones y ofrecen estructura, rutina y contacto con pares.
        </p>
      </Section>

      <Section title="Marcos complementarios">
        <h3>UNICEF: cinco pilares para la salud mental escolar</h3>
        <p>
          <strong>UNICEF</strong> (2022) articula cinco pilares para la salud mental en entornos
          escolares, que van desde la creación de ambientes propicios hasta la colaboración
          escuela-familia-comunidad. Este marco resulta especialmente relevante porque posiciona el{" "}
          <strong>bienestar docente</strong> como un pilar independiente. Los datos que presenta son
          contundentes: por cada dólar invertido en programas de salud mental escolar, se genera un
          retorno de <span className="stat-inline">$21.5</span> dólares a lo largo de 80
          años<Ref id="R-025" />.
        </p>

        <h3>INEE: estándares mínimos para educación en emergencias</h3>
        <p>
          La Red Interagencial para la Educación en Emergencias (<strong>INEE</strong>, 2024)
          establece <span className="stat-inline">19 estándares</span> mínimos que cubren desde la
          seguridad física de las instalaciones hasta la integración de actividades psicosociales en
          los currículos durante la fase de recuperación<Ref id="R-030" />.
        </p>

        <h3>MinSalud Colombia: las cuatro fases del desastre</h3>
        <p>
          A nivel nacional, el <strong>Ministerio de Salud de Colombia</strong> identifica cuatro
          fases psicológicas tras un desastre. La <strong>fase heroica</strong> (primeras 72 horas)
          se caracteriza por la solidaridad y la acción inmediata. La <strong>fase de luna de
          miel</strong> (de una semana a seis meses) trae un optimismo inicial. La{" "}
          <strong>fase de desilusión</strong> (de dos meses a dos años) emerge cuando la realidad
          de la reconstrucción se impone. Finalmente, la <strong>fase de reconstrucción</strong>{" "}
          puede extenderse durante años. Colombia registra un promedio de{" "}
          <span className="stat-inline">597.7</span> eventos desastrosos por año en las últimas
          tres décadas<Ref id="R-026" />, lo que refuerza la necesidad de marcos de respuesta
          institucionalizados<Ref id="R-027" />.
        </p>
      </Section>
    </div>
  );
}
