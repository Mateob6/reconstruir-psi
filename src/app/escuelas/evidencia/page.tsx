import type { Metadata } from "next";
import { PageHero, Section, Callout, DataTable, Ref } from "@/components/content";

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
          en tres revisiones sistemáticas con meta-análisis que, en conjunto, sintetizan 75 estudios
          con más de 11,000 participantes. Estas revisiones permiten identificar no solo si las
          intervenciones funcionan, sino bajo qué condiciones y para qué poblaciones producen los
          mayores efectos.
        </p>
        <p>
          La revisión más reciente, conducida por Laksmita y colaboradores en 2026, analizó 13
          ensayos controlados aleatorizados con 2,418 participantes, restringidos exclusivamente a
          intervenciones implementadas en contextos escolares. El efecto inmediato sobre los
          síntomas de TEPT fue grande (g&nbsp;=&nbsp;−1.20), con efectos que se sostuvieron tanto a
          corto plazo (g&nbsp;=&nbsp;−0.25) como a largo plazo (g&nbsp;=&nbsp;−0.45). Para
          depresión, el efecto inmediato fue pequeño pero significativo (g&nbsp;=&nbsp;−0.34)<Ref id="R-003" />.
        </p>
        <p>
          Xie y colaboradores (2024) realizaron un meta-análisis en red con 26 ensayos controlados
          y 4,331 participantes, lo que permitió comparar simultáneamente múltiples modalidades
          terapéuticas y establecer rankings de efectividad<Ref id="R-004" />. Morina y colaboradores (2017) aportaron
          la revisión más amplia con 36 estudios y 4,411 participantes, encontrando un efecto
          pre-post grande (g&nbsp;=&nbsp;1.35) y un efecto moderado cuando se compara contra
          controles activos (g&nbsp;=&nbsp;0.44)<Ref id="R-002" />.
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
          terapéuticas según su probabilidad de ser la más efectiva, utilizando el estadístico SUCRA.
          Para los síntomas de TEPT tras la intervención, EMDR ocupó la primera posición
          (SUCRA&nbsp;69.6), seguida por la Terapia de Exposición/NET (SUCRA&nbsp;69.6) y la TCC
          (SUCRA&nbsp;66.0). En el seguimiento a largo plazo, EMDR mantuvo el primer lugar
          (SUCRA&nbsp;87.1), con ET/NET en segundo (SUCRA&nbsp;78.9). Para síntomas depresivos,
          EMDR también lideró (SUCRA&nbsp;88.5), seguida por la Terapia de Juego (SUCRA&nbsp;87.3)<Ref id="R-004" />.
        </p>
        <p>
          Los datos pre-post de Morina y colaboradores (2017) complementan esta perspectiva con una
          taxonomía más fina. La Terapia Narrativa de Exposición para niños (KIDNET) mostró el
          tamaño de efecto más alto (g&nbsp;=&nbsp;1.87), aunque con solo dos estudios. EMDR
          obtuvo g&nbsp;=&nbsp;1.46 a partir de diez estudios, la TCC g&nbsp;=&nbsp;1.07 en ocho
          estudios, y las intervenciones de aula g&nbsp;=&nbsp;0.68 en nueve estudios<Ref id="R-002" />.
        </p>

        <Callout type="info" title="Todas las modalidades son efectivas">
          <p>
            A pesar de las diferencias en los rankings, el análisis formal no encontró diferencias
            estadísticamente significativas entre los tipos de terapia (F&nbsp;=&nbsp;2.49,
            p&nbsp;=&nbsp;0.062)<Ref id="R-002" />. El mensaje central de la evidencia es que implementar cualquier
            intervención estructurada produce beneficios significativos frente a no intervenir.
          </p>
        </Callout>
      </Section>

      <Section title="Moderadores: qué amplifica el efecto">
        <p>
          El análisis de moderadores de Laksmita y colaboradores (2026) revela cuatro factores que
          amplifican sustancialmente la efectividad de las intervenciones escolares. Las sesiones de
          60 minutos o menos produjeron efectos significativamente mayores que las sesiones más
          prolongadas (g&nbsp;=&nbsp;−1.60 vs. g&nbsp;=&nbsp;−0.16), y los programas con seis o
          más sesiones superaron ampliamente a los más breves (g&nbsp;=&nbsp;−1.77
          vs. g&nbsp;=&nbsp;−0.15).
        </p>
        <p>
          El contexto geográfico emergió como un moderador poderoso. Las intervenciones en países en
          desarrollo obtuvieron efectos notablemente más grandes que en países desarrollados
          (g&nbsp;=&nbsp;−1.77 vs. g&nbsp;=&nbsp;−0.15, diferencia entre grupos
          p&nbsp;&lt;&nbsp;0.001). De manera consistente, cuando las intervenciones fueron
          entregadas por personas sin formación en salud mental, los efectos inmediatos fueron
          sustancialmente mayores que cuando las entregaron profesionales de salud
          (g&nbsp;=&nbsp;−2.60 vs. g&nbsp;=&nbsp;−0.39)<Ref id="R-003" />.
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
          colaboradores (2024), que sintetizó 15 estudios longitudinales con 11,519 participantes
          menores de edad, identificó cuatro trayectorias predominantes tras un desastre natural.
          Entre el 34% y el 82% de los participantes mostraron trayectorias resilientes, y entre el
          51% y el 97% fueron clasificados como resilientes o en recuperación espontánea. El
          desarrollo más dinámico ocurre durante los primeros 12 meses, lo que subraya la
          importancia de intervenir tempranamente<Ref id="R-050" />.
        </p>
        <p>
          El estudio longitudinal de Kobe (Uemoto et al., 2012) ofrece la evidencia más granular.
          Tras el terremoto de 1995, 8,800 estudiantes de los grados 3, 5 y 8 fueron evaluados en
          cuatro momentos (4, 6, 12 y 24 meses) junto con 1,886 controles de áreas no afectadas.
          Los más jóvenes (grado 3) resultaron los más afectados. Las niñas presentaron
          consistentemente puntuaciones más altas que los niños. Los síntomas persistieron más de
          dos años en las zonas de mayor daño. Un hallazgo inesperado fue la aparición de un tercer
          factor en los cuestionarios, relacionado con la responsabilidad social y la culpa, que
          no había sido documentado previamente<Ref id="R-079" />.
        </p>
      </Section>

      <Section title="La pirámide IASC">
        <p>
          Toda respuesta psicosocial en emergencias debe organizarse dentro del marco establecido
          por el Comité Permanente entre Organismos (IASC, 2007)<Ref id="R-023" />. Este modelo propone una pirámide
          de cuatro niveles que ordena las intervenciones según su alcance y grado de
          especialización.
        </p>
        <p>
          En la base se ubican los servicios básicos y la seguridad, que incluyen alimentación, agua,
          refugio y protección física. El segundo nivel corresponde a los apoyos comunitarios y
          familiares, como la activación de redes sociales y los espacios seguros para la niñez. El
          tercer nivel comprende los apoyos focalizados no especializados, donde se incluyen los
          primeros auxilios psicológicos (PAP) y las actividades psicosociales estructuradas en
          escuelas. Solo el cuarto nivel, reservado para una minoría de personas con afectaciones
          severas, involucra servicios especializados de psicología y psiquiatría.
        </p>
        <p>
          El principio fundamental de este modelo es que la mayoría de las personas se recuperan con
          apoyo de los niveles 1 y 2, sin requerir intervención clínica. Las escuelas constituyen
          escenarios privilegiados para los niveles 1 a 3, dado que son las primeras instituciones
          en reanudar operaciones y ofrecen estructura, rutina y contacto con pares.
        </p>
      </Section>

      <Section title="Marcos complementarios">
        <p>
          UNICEF (2022) articula cinco pilares para la salud mental en entornos escolares, que van
          desde la creación de ambientes propicios hasta la colaboración escuela-familia-comunidad.
          Este marco resulta especialmente relevante porque posiciona el bienestar docente como un
          pilar independiente. Los datos que presenta son contundentes: por cada dólar invertido en
          programas de salud mental escolar, se genera un retorno de 21.5 dólares a lo largo de 80
          años<Ref id="R-025" />.
        </p>
        <p>
          La Red Interagencial para la Educación en Emergencias (INEE, 2024) establece 19 estándares
          mínimos que cubren desde la seguridad física de las instalaciones hasta la integración de
          actividades psicosociales en los currículos durante la fase de recuperación<Ref id="R-030" />.
        </p>
        <p>
          A nivel nacional, el Ministerio de Salud de Colombia identifica cuatro fases psicológicas
          tras un desastre. La fase heroica (primeras 72 horas) se caracteriza por la solidaridad
          y la acción inmediata. La fase de luna de miel (de una semana a seis meses) trae un
          optimismo inicial. La fase de desilusión (de dos meses a dos años) emerge cuando la
          realidad de la reconstrucción se impone. Finalmente, la fase de reconstrucción puede
          extenderse durante años. Colombia registra un promedio de 597.7 eventos desastrosos por
          año en las últimas tres décadas<Ref id="R-026" />, lo que refuerza la necesidad de marcos de respuesta
          institucionalizados<Ref id="R-027" />.
        </p>
      </Section>
    </div>
  );
}
