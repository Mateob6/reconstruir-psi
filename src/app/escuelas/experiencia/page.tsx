import type { Metadata } from "next";
import { SectionHeader, Callout, KeyMessage, Ref, CaseCard, Stat, StatGrid, StickySectionNav } from "@/components/content";

export const metadata: Metadata = {
  title: "Experiencia internacional",
  description:
    "Lecciones de Chile, Japón, Indonesia, Colombia 1999 y Nepal para la respuesta escolar post-terremoto.",
};

export default function ExperienciaPage() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-accent"></div>
          <span className="font-mono text-sm font-bold tracking-widest text-accent uppercase">
            Lecciones Aprendidas
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight font-sans">
          Experiencia Internacional
        </h1>
        <p className="text-xl text-muted leading-relaxed max-w-3xl mb-12">
          La revisión de desastres sísmicos previos ofrece aprendizajes críticos sobre la eficacia de las intervenciones, el rol de la cultura y la importancia de la educación en emergencias.
        </p>

        <StatGrid>
          <Stat value="5" label="Casos de estudio" />
          <Stat value="8,800" label="NNA evaluados (Kobe)" />
          <Stat value="15k" label="TLS desplegados (Nepal)" />
          <Stat value="82%" label="Recuperación resiliente" />
        </StatGrid>
      </header>

      <StickySectionNav
        items={[
          { id: "chile", label: "Chile" },
          { id: "japon", label: "Japón" },
          { id: "indonesia", label: "Indonesia" },
          { id: "colombia", label: "Colombia" },
          { id: "nepal", label: "Nepal" },
          { id: "ecuador", label: "Ecuador" },
          { id: "trayectorias", label: "Trayectorias" },
        ]}
      />

      <section id="chile" style={{ scrollMarginTop: "150px" }} className="py-8 border-t border-[var(--border)]">
        <SectionHeader eyebrow="2010" title="Chile (M8.8)" />
        <div className="space-y-6 text-[15px] leading-relaxed text-muted mt-8">
          <CaseCard
            country="Chile"
            year={2010}
            magnitude="M8.8"
            deaths="~525"
            lesson="La mentalización como factor protector central y herramienta terapéutica"
          />
          <p>
            El terremoto del 27 de febrero de 2010 en Chile, uno de los más potentes registrados a
            nivel global, dio lugar a una respuesta psicosocial escolar que priorizó un concepto poco
            frecuente en la literatura de emergencias: la <strong>mentalización</strong>. La guía
            publicada por UNICEF Chile posicionó la capacidad de reflexionar sobre los propios estados
            mentales y los de otras personas como factor protector central y como herramienta
            terapéutica, desplazando el énfasis habitual en las técnicas conductuales<Ref id="R-001" />.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Resultados del programa escolar</h3>
          <p>
            Un programa escolar rural implementado durante ocho meses evaluó a 33 niños, niñas y
            adolescentes con la participación de 11 docentes capacitados. Los resultados cuestionaron
            supuestos frecuentes sobre la prevalencia del trauma post-desastre: solo
            el <span className="stat-inline">9%</span> de los participantes cumplió criterios formales
            de trastorno de estrés postraumático. Los diagnósticos más frecuentes fueron trastorno por
            déficit de atención e hiperactividad (<span className="stat-inline">33%</span>) y
            trastornos adaptativos (<span className="stat-inline">24%</span>), lo que sugiere que las
            dificultades preexistentes pueden amplificarse tras un sismo sin constituir necesariamente
            patología traumática<Ref id="R-021" />.
          </p>
          <p>
            La evaluación de los docentes arrojó un dato relevante para la implementación:
            el <span className="stat-inline">91%</span> calificó las técnicas de relajación
            como &quot;útiles&quot;, lo que indica que las herramientas de regulación
            fisiológica son las que los docentes adoptan con mayor facilidad y confianza, aun sin
            formación clínica previa<Ref id="R-021" />.
          </p>
        </div>
      </section>

      <section id="japon" style={{ scrollMarginTop: "150px" }} className="py-8 border-t border-[var(--border)]">
        <SectionHeader eyebrow="1995" title="Japón — Kobe (M7.2)" />
        <div className="space-y-6 text-[15px] leading-relaxed text-muted mt-8">
          <CaseCard
            country="Japón — Kobe"
            year={1995}
            magnitude="M7.2"
            deaths="~6,400"
            schools="~4,000"
            lesson="Estudio longitudinal de referencia: 8,800 NNA evaluados en 4 momentos"
          />
          <p>
            El terremoto de Kobe del 17 de enero de 1995 generó una de las bases de evidencia
            longitudinal más sólidas sobre el impacto psicológico en población infantil. Un <strong>estudio
            longitudinal</strong> evaluó a <span className="stat-inline">8,800</span> estudiantes de
            los grados 3, 5 y 8 en cuatro momentos sucesivos (a los 4, 6, 12 y 24 meses del evento),
            comparándolos con <span className="stat-inline">1,886</span> controles de una región no
            afectada<Ref id="R-079" />.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Hallazgos clave</h3>
          <p>
            Tres hallazgos resultan especialmente pertinentes para el contexto colombiano. El grupo
            más joven (grado 3, equivalente a tercero de primaria) presentó los niveles más altos de
            afectación, lo que subraya la necesidad de <strong>priorizar la intervención en los
            primeros años de la educación básica</strong>. Las niñas registraron puntuaciones
            consistentemente más altas que los niños en todos los momentos de evaluación, patrón que
            debe orientar la detección diferenciada.
          </p>
          <p>
            Los síntomas persistieron más de dos años en las zonas con mayor nivel de destrucción, lo
            que cuestiona la creencia de que las reacciones normales se resuelven de forma espontánea
            en todos los casos. Un tercer factor emergió del análisis, más allá del estrés
            postraumático y la depresión clásicos: la <strong>responsabilidad social y la
            culpa</strong>. Algunos niños desarrollaron la convicción de que debían haber hecho más
            durante la emergencia, una dimensión que rara vez se aborda en los protocolos estándar.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-4">La transformación institucional</h3>
          <p>
            La respuesta institucional de Japón tras la destrucción de
            aproximadamente <span className="stat-inline">4,000</span> escuelas dio lugar a
            un <strong>programa nacional de seguridad escolar</strong> sin precedentes. El porcentaje
            de escuelas con resistencia sísmica adecuada pasó
            del <span className="stat-inline">42,5%</span> en 2002 a prácticamente
            el <span className="stat-inline">100%</span> en la actualidad. Japón exporta ahora este
            modelo a Perú, El Salvador, Turquía y Filipinas, demostrando que la inversión sostenida en
            infraestructura escolar segura es posible incluso cuando el punto de partida parece
            abrumador<Ref id="R-079" />.
          </p>
        </div>
      </section>

      <section id="indonesia" style={{ scrollMarginTop: "150px" }} className="py-8 border-t border-[var(--border)]">
        <SectionHeader eyebrow="2018" title="Indonesia — Sulawesi (M7.5)" />
        <div className="space-y-6 text-[15px] leading-relaxed text-muted mt-8">
          <CaseCard
            country="Indonesia — Sulawesi"
            year={2018}
            magnitude="M7.5"
            deaths="4,340"
            schools="1,299"
            lesson="Prácticas culturales locales como mecanismos de afrontamiento colectivo"
          />
          <p>
            El terremoto y tsunami de Sulawesi Central en septiembre de 2018
            causó <span className="stat-inline">4,340</span> muertes y daños
            en <span className="stat-inline">1,299</span> escuelas<Ref id="R-086" />. Un estudio con 40
            docentes documentó cómo, ante la insuficiencia de protocolos formales, los maestros
            recurrieron espontáneamente a prácticas culturales locales como mecanismos de
            afrontamiento colectivo.
          </p>
          <p>
            Tres prácticas resultaron centrales. El <strong>gotong royong</strong>, una tradición de
            cooperación mutua arraigada en las comunidades indonesias, facilitó la reconstrucción de
            espacios educativos provisionales y la redistribución de recursos entre familias afectadas.
            La <strong>tutura</strong>, una práctica de narración oral tradicional, ofreció a los niños
            un marco culturalmente familiar para elaborar la experiencia traumática sin recurrir a
            protocolos clínicos importados. La religiosidad proporcionó marcos de sentido compartidos
            que permitieron a las comunidades integrar el evento dentro de sistemas de creencias
            preexistentes.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Transferencia a Colombia</h3>
          <p>
            La experiencia de Sulawesi sugiere que las intervenciones más efectivas son aquellas que se
            articulan con los recursos culturales disponibles en cada comunidad, en lugar de
            reemplazarlos. Para Colombia, esto se traduce en la integración de prácticas como
            la <strong>minga</strong>, la solidaridad vecinal y las redes parroquiales y comunitarias
            como vehículos de la respuesta psicosocial<Ref id="R-086" />.
          </p>
        </div>
      </section>

      <section id="colombia" style={{ scrollMarginTop: "150px" }} className="py-8 border-t border-[var(--border)]">
        <SectionHeader eyebrow="1999" title="Colombia — Eje Cafetero (M6.2)" />
        <div className="space-y-6 text-[15px] leading-relaxed text-muted mt-8">
          <CaseCard
            country="Colombia — Eje Cafetero"
            year={1999}
            magnitude="M6.2"
            deaths="~1,200"
            lesson="PAPSIVI como capacidad instalada transferible del conflicto armado"
          />
          <p>
            El terremoto del 25 de enero de 1999, con epicentro en el Eje Cafetero,
            causó aproximadamente <span className="stat-inline">1,200</span> muertes y afectó
            gravemente a Armenia, Pereira y otras ciudades de la región. Aunque la documentación de la
            respuesta psicosocial escolar es menos sistemática que en los otros casos presentados, esta
            experiencia ofrece dos lecciones relevantes para la respuesta actual.
          </p>
          <p>
            Las comunidades <strong>Nasa</strong>, que habían experimentado el terremoto de Páez en
            1994, designaron ese evento como una &quot;restauración de la relación con la
            tierra&quot;, un encuadramiento que posiciona el desastre dentro de la cosmología cultural
            en lugar de reducirlo a una categoría exclusiva de pérdida. Esta perspectiva resulta
            significativa para un país en el que las comunidades indígenas y afrocolombianas aportan
            marcos de interpretación que pueden enriquecer la respuesta, siempre que sean reconocidos y
            no subordinados a los protocolos técnicos.
          </p>
          <p>
            La infraestructura del <strong>PAPSIVI</strong> (Programa de Atención Psicosocial y Salud
            Integral a Víctimas), construida a lo largo de décadas de conflicto armado, representa una
            capacidad instalada que diferencia a Colombia de otros países afectados por desastres
            naturales. Los profesionales formados en atención psicosocial comunitaria, las redes
            territoriales y los protocolos de adaptación cultural constituyen recursos activables para
            la respuesta al terremoto de 2026<Ref id="R-039" />.
          </p>
        </div>
      </section>

      <section id="nepal" style={{ scrollMarginTop: "150px" }} className="py-8 border-t border-[var(--border)]">
        <SectionHeader eyebrow="2015" title="Nepal (M7.8)" />
        <div className="space-y-6 text-[15px] leading-relaxed text-muted mt-8">
          <CaseCard
            country="Nepal"
            year={2015}
            magnitude="M7.8"
            deaths="~8,900"
            schools="15,000 TLS"
            lesson="Centros transicionales desplegados en un mes; retraso aumenta deserción"
          />
          <p>
            El terremoto de abril de 2015 en Nepal interrumpió la educación de <span className="stat-inline">un
            millón</span> de estudiantes, y la respuesta del gobierno se convirtió en referencia
            internacional por su velocidad y pragmatismo. En el plazo de un mes, se
            desplegaron <span className="stat-inline">15,000</span> centros de aprendizaje
            transicional (Temporary Learning Spaces, TLS) que permitieron reanudar la actividad
            educativa mientras la infraestructura permanente seguía siendo inhabitable<Ref id="R-121" />.
          </p>
          <p>
            Los centros transicionales no se limitaron a reproducir las condiciones del aula
            convencional. Integraron actividades lúdicas, exploración al aire libre y &quot;ciencias
            creativas&quot;, generando una atmósfera que facilitó la elaboración del trauma sin
            sacrificar el proceso educativo. Esta estrategia evidenció que la <strong>continuidad
            educativa y el apoyo psicosocial funcionan mejor cuando se implementan de forma
            integrada</strong>.
          </p>
          <p>
            Los datos de Nepal también documentan las consecuencias de la demora. El rendimiento
            académico cayó un <span className="stat-inline">7%</span> en las zonas afectadas, y las
            interrupciones prolongadas incrementaron significativamente la probabilidad de deserción,
            especialmente entre las niñas y los estudiantes de hogares con menores
            ingresos<Ref id="R-113" also={["R-121"]} />.
          </p>
        </div>
      </section>

      <section id="ecuador" style={{ scrollMarginTop: "150px" }} className="py-8 border-t border-[var(--border)]">
        <SectionHeader eyebrow="2016" title="Ecuador — Costa (M7.8)" />
        <div className="space-y-6 text-[15px] leading-relaxed text-muted mt-8">
          <CaseCard
            country="Ecuador — Costa"
            year={2016}
            magnitude="M7.8"
            deaths="~670"
            lesson="Plan 'Escuela para todos': referencia regional de respuesta educativa integrada"
          />
          <p>
            El terremoto del 16 de abril de 2016 en la costa ecuatoriana dio lugar al Plan Nacional de
            Respuesta Educativa &quot;Escuela para todos, juntos nos levantamos&quot;, que se convirtió
            en referencia regional por articular la respuesta inmediata con la recuperación a mediano
            plazo. El plan combinó espacios temporales, turnos diferenciados para compartir la
            infraestructura disponible, kits escolares de emergencia y acompañamiento psicosocial
            integrado en la actividad educativa<Ref id="R-126" />.
          </p>
          <p>
            La experiencia ecuatoriana demostró que la integración de las dimensiones educativa y
            emocional dentro de una misma estrategia resulta más efectiva que abordarlas como acciones
            separadas, un principio consistente con la evidencia de Nepal y con las recomendaciones
            del <strong>Marco Integral de Seguridad Escolar</strong> (CSSF 2022-2030).
          </p>
        </div>
      </section>

      <section id="trayectorias" style={{ scrollMarginTop: "150px" }} className="py-8 border-t border-[var(--border)]">
        <SectionHeader eyebrow="Síntesis" title="Trayectorias de recuperación" />
        <div className="space-y-6 text-[15px] leading-relaxed text-muted mt-8">
          <p>
            La revisión de Witt y colaboradores (2024) sintetizó 15 estudios longitudinales
            con <span className="stat-inline">11,519</span> niños, niñas y adolescentes tras desastres
            naturales<Ref id="R-050" />, e identificó cuatro trayectorias predominantes de recuperación.
            La trayectoria <strong>resiliente</strong>, caracterizada por niveles bajos y estables de
            síntomas desde el inicio, fue la más frecuente, abarcando entre
            el <span className="stat-inline">34%</span> y
            el <span className="stat-inline">82%</span> de los participantes según el estudio.
          </p>
          <p>
            La trayectoria de <strong>recuperación</strong> mostró síntomas iniciales elevados que
            disminuyeron progresivamente. La trayectoria <strong>crónica</strong> se caracterizó por
            síntomas persistentemente altos, y la trayectoria de <strong>aparición tardía</strong> por
            síntomas que emergieron después de un periodo inicial asintomático.
          </p>
          <p>
            Tomadas en conjunto, las trayectorias resilientes y de recuperación representan entre
            el <span className="stat-inline">51%</span> y
            el <span className="stat-inline">97%</span> de las muestras estudiadas, lo que confirma
            que la mayoría de los niños y niñas se recuperará con un apoyo ambiental adecuado,
            correspondiente a los niveles 1 y 2 de la pirámide IASC. El desarrollo más dinámico ocurre
            durante los primeros 12 meses, lo que define la ventana de intervención más
            productiva<Ref id="R-050" />.
          </p>

          <div className="mt-8">
            <KeyMessage>
              La evidencia sugiere que la mayoría de los niños y niñas se recuperarán con apoyo ambiental
              adecuado. El desafío es identificar tempranamente al 3-49% que seguirá trayectorias
              crónicas o de aparición tardía.
            </KeyMessage>
          </div>
        </div>
      </section>
    </div>
  );
}
