import type { Metadata } from "next";
import { PageHero, Section, Callout, DataTable, Ref, KeyMessage } from "@/components/content";
import { StatGrid, Stat } from "@/components/content";

export const metadata: Metadata = {
  title: "Acerca de",
  description:
    "Metodología de la revisión de alcance rápida: 129 recursos, 39 búsquedas, 14 bases de datos. Autoría y limitaciones.",
};

export default function AcercaPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <PageHero
        title="Acerca de"
        subtitle="Metodología, alcance y autoría de esta guía"
      />

      <Section title="Sobre esta guía">
        <p>
          El 10 de agosto de 2026, a las 07:34 hora local, un terremoto de magnitud{" "}
          <span className="stat-inline">7.4</span> con epicentro en San José del Palmar (Chocó) y
          una profundidad de aproximadamente 107 km sacudió el occidente de Colombia. Fue el sismo
          más fuerte registrado en el país en la última década. Las cifras preliminares reportaron
          más de <span className="stat-inline">287</span> personas fallecidas,{" "}
          <span className="stat-inline">570</span> heridas, y un impacto que se extendió a lo
          largo de varias ciudades del occidente colombiano<Ref id="R-111" also={["R-116"]} />.
        </p>
        <p>
          Pereira concentró más de 60 muertes y múltiples edificios colapsados. En Cali,{" "}
          <span className="stat-inline">32</span> edificaciones colapsaron, incluyendo
          infraestructura hospitalaria. Manizales perdió la torre
          de su catedral neogótica. Armenia, Quibdó y otros municipios reportaron daños significativos
          en infraestructura pública y privada. Los aeropuertos fueron cerrados temporalmente y varias
          vías resultaron afectadas.
        </p>
        <p>
          Esta guía fue producida como una <strong>revisión de alcance rápida</strong> (rapid scoping review) para
          responder a la necesidad inmediata de orientaciones basadas en evidencia para los contextos
          escolares. Su propósito es traducir la evidencia científica internacional y las experiencias
          de campo documentadas en recomendaciones prácticas para quienes toman decisiones en el
          terreno educativo.
        </p>
        <p>
          El público al que se dirige incluye directivos escolares, docentes, equipos psicosociales
          de las secretarías de educación, coordinadores de bienestar estudiantil y responsables de
          política educativa a nivel territorial y nacional.
        </p>
      </Section>

      <Section title="Metodología">
        <p>
          La revisión fue conducida durante dos días (16 y 17 de agosto de 2026). Se realizaron{" "}
          <span className="stat-inline">39</span> búsquedas en{" "}
          <span className="stat-inline">14</span> bases de datos y fuentes institucionales, tanto
          en inglés como en español, con búsquedas específicas para la región latinoamericana en
          LILACS y SciELO.
        </p>

        <StatGrid>
          <Stat value="129" label="Recursos identificados" />
          <Stat value="128" label="Incluidos (1 excluido)" />
          <Stat value="39" label="Búsquedas realizadas" />
          <Stat value="14" label="Bases de datos" />
        </StatGrid>

        <p>
          Las bases de datos consultadas incluyeron PubMed, Cochrane Library, Campbell Collaboration,
          3ie/UNICEF Innocenti, Google Scholar, LILACS, SciELO, EBSCOhost (Psychology and Behavioral
          Sciences Collection), INEE, Banco Mundial, UNESCO, y búsquedas web dirigidas a fuentes
          institucionales colombianas e internacionales.
        </p>
        <p>
          La base de evidencia resultante está compuesta por tres meta-análisis que sintetizan más
          de <span className="stat-inline">11,000</span> participantes,{" "}
          <span className="stat-inline">18</span> revisiones sistemáticas,{" "}
          <span className="stat-inline">19</span> guías y protocolos institucionales, y{" "}
          <span className="stat-inline">54</span> estudios primarios. Un total de{" "}
          <span className="stat-inline">28</span> textos completos fueron analizados en
          profundidad (15 guías y 13 artículos). A partir de esta base se produjeron 13 síntesis temáticas que
          abarcan las dimensiones psicosocial (7 síntesis) y educativa (6 síntesis).
        </p>

        <DataTable
          caption="Composición de la base de evidencia"
          headers={["Tipo de recurso", "Cantidad"]}
          rows={[
            ["Meta-análisis", "9"],
            ["Revisiones sistemáticas", "26"],
            ["Guías y protocolos institucionales", "24"],
            ["Estudios primarios (cuasi-experimentales + cualitativos)", "52"],
            ["Reportes", "5"],
            ["Kits de herramientas", "2"],
          ]}
        />

        <p>
          Los recursos fueron clasificados en tres niveles de prioridad para la revisión. El Nivel 1
          (esencial, 50 recursos) incluye las fuentes con mayor relevancia directa para la respuesta
          escolar post-terremoto. El Nivel 2 (importante, 48 recursos) comprende fuentes que aportan
          evidencia complementaria o contexto valioso. El Nivel 3 (contexto, 30 recursos) reúne
          fuentes que proporcionan antecedentes generales o experiencias de referencia.
        </p>
        <p>
          La revisión abarcó dos dimensiones. La dimensión psicosocial reunió 83 recursos centrados
          en intervenciones de salud mental, primeros auxilios psicológicos, programas escolares y
          marcos normativos internacionales. La dimensión educativa compiló 42 recursos sobre
          continuidad educativa, recuperación de aprendizajes, adaptación curricular, evaluación en
          crisis y escuelas seguras. Cuatro recursos abarcaron ambas dimensiones.
        </p>
      </Section>

      <Section title="Limitaciones">
        <KeyMessage>
          Esta guía fue producida en dos días para responder a una necesidad inmediata. No sustituye
          una revisión sistemática formal, pero traduce la mejor evidencia disponible en
          orientaciones prácticas para el terreno.
        </KeyMessage>

        <p>
          Al tratarse de una revisión rápida conducida en dos días, esta guía no alcanza el rigor
          metodológico de una revisión sistemática formal. Algunos estudios relevantes pueden no haber
          sido identificados, particularmente aquellos publicados en repositorios institucionales de
          acceso restringido o en idiomas distintos al inglés y al español.
        </p>

        <h3>Alcance de la búsqueda</h3>
        <p>
          No se realizaron búsquedas formales en <strong>PsycINFO</strong>,{" "}
          <strong>Scopus</strong> ni <strong>ERIC</strong>, bases que podrían aportar estudios
          primarios adicionales. Las cadenas de búsqueda para estas bases fueron preparadas y están
          disponibles para futuras ampliaciones de la revisión.
        </p>

        <h3>Sesgo de idioma</h3>
        <p>
          La revisión priorizó fuentes en inglés y español, lo que introduce un sesgo de idioma que
          podría excluir experiencias documentadas en otros idiomas, particularmente las experiencias
          turcas, nepalíes y japonesas que solo tienen versiones en sus lenguas originales.
        </p>
        <p>
          La guía se centra exclusivamente en intervenciones post-desastre natural y no incorpora la
          evidencia proveniente de intervenciones post-conflicto armado, a pesar de que Colombia
          dispone de una capacidad instalada significativa a través del{" "}
          <strong>PAPSIVI</strong><Ref id="R-039" />. La transferibilidad entre estos contextos merece
          un análisis independiente.
        </p>

        <h3>Heterogeneidad estadística</h3>
        <p>
          Algunos de los meta-análisis incluidos presentan heterogeneidad elevada
          (<span className="stat-inline">I² superior al 90%</span> en determinados análisis), lo que
          obliga a interpretar los tamaños de efecto agregados con cautela<Ref id="R-003" />.
          Adicionalmente, no se identificaron estudios de implementación que examinen la escalabilidad
          de las intervenciones psicosociales escolares post-desastre, lo que constituye una brecha
          importante en la literatura<Ref id="R-003" />.
        </p>
      </Section>

      <Section title="Autoría">
        <p>
          Mateo Belalcázar Correa, MSc. Centro de Investigaciones y Estudios Avanzados en Psicología,
          Cognición y Cultura (CIDEAS), Facultad de Psicología, Universidad del Valle. Colombia,
          agosto de 2026.
        </p>
      </Section>

      <Section title="Cómo citar">
        <Callout type="info" title="Referencia sugerida (APA 7)">
          <p>
            Belalcázar Correa, M. (2026). <em>Respuesta psicosocial y educativa en contextos
            escolares post-terremoto: Guía basada en evidencia</em>. CIDEAS, Facultad de Psicología,
            Universidad del Valle. https://reconstruir-psi.vercel.app
          </p>
        </Callout>
      </Section>
    </div>
  );
}
