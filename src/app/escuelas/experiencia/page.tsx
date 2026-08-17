import type { Metadata } from "next";
import { PageHero, Section, Callout } from "@/components/content";

export const metadata: Metadata = {
  title: "Experiencia internacional",
  description:
    "Lecciones de Chile, Japón, Indonesia, Colombia 1999 y Nepal para la respuesta escolar post-terremoto.",
};

export default function ExperienciaPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <PageHero
        title="Experiencia internacional"
        subtitle="Lecciones de otros terremotos para Colombia"
        stats={[
          { value: "5", label: "Casos de estudio" },
          { value: "8,800", label: "NNA evaluados (Kobe)" },
          { value: "15,000", label: "TLS desplegados (Nepal)" },
          { value: "34-82%", label: "Trayectorias resilientes" },
        ]}
      />

      <Section title="Chile 2010 (M8.8)">
        <p>
          El terremoto del 27 de febrero de 2010 en Chile, uno de los más potentes registrados a
          nivel global, dio lugar a una respuesta psicosocial escolar que priorizó un concepto poco
          frecuente en la literatura de emergencias: la mentalización. La guía publicada por UNICEF
          Chile posicionó la capacidad de reflexionar sobre los propios estados mentales y los de
          otras personas como factor protector central y como herramienta terapéutica, desplazando
          el énfasis habitual en las técnicas conductuales.
        </p>
        <p>
          Un programa escolar rural implementado durante ocho meses evaluó a 33 niños, niñas y
          adolescentes con la participación de 11 docentes capacitados. Los resultados cuestionaron
          supuestos frecuentes sobre la prevalencia del trauma post-desastre. Solo el 9% de los
          participantes cumplió criterios formales de trastorno de estrés postraumático. Los
          diagnósticos más frecuentes fueron trastorno por déficit de atención e hiperactividad
          (33%) y trastornos adaptativos (24%), lo que sugiere que las dificultades preexistentes
          pueden amplificarse tras un sismo sin constituir necesariamente patología traumática.
        </p>
        <p>
          La evaluación de los docentes arrojó un dato relevante para la implementación. El 91%
          calificó las técnicas de relajación como &quot;especialmente útiles&quot;, lo que indica
          que las herramientas de regulación fisiológica son las que los docentes adoptan con mayor
          facilidad y confianza, aun sin formación clínica previa.
        </p>
      </Section>

      <Section title="Japón 1995 — Kobe (M7.2)">
        <p>
          El terremoto de Kobe del 17 de enero de 1995 generó una de las bases de evidencia
          longitudinal más sólidas sobre el impacto psicológico en población infantil. Un estudio
          evaluó a 8,800 estudiantes de los grados 3, 5 y 8 en cuatro momentos sucesivos (a los 4,
          6, 12 y 24 meses del evento), comparándolos con 1,886 controles de una región no afectada.
        </p>
        <p>
          Tres hallazgos resultan especialmente pertinentes para el contexto colombiano. El grupo
          más joven (grado 3, equivalente a tercero de primaria) presentó los niveles más altos de
          afectación, lo que subraya la necesidad de priorizar la intervención en los primeros años
          de la educación básica. Las niñas registraron puntuaciones consistentemente más altas que
          los niños en todos los momentos de evaluación, patrón que debe orientar la detección
          diferenciada. Los síntomas persistieron más de dos años en las zonas con mayor nivel de
          destrucción, lo que cuestiona la creencia de que las reacciones normales se resuelven de
          forma espontánea en todos los casos.
        </p>
        <p>
          Un tercer factor emergió del análisis, más allá del estrés postraumático y la depresión
          clásicos: la responsabilidad social y la culpa. Algunos niños desarrollaron la convicción
          de que debían haber hecho más durante la emergencia, una dimensión que rara vez se aborda
          en los protocolos estándar de intervención.
        </p>
        <p>
          La respuesta institucional de Japón tras la destrucción de aproximadamente 4,000 escuelas
          dio lugar a un programa nacional de seguridad escolar sin precedentes. El porcentaje de
          escuelas con resistencia sísmica adecuada pasó del 42,5% en 2002 a prácticamente el 100%
          en la actualidad. Japón exporta ahora este modelo a Perú, El Salvador, Turquía y
          Filipinas, demostrando que la inversión sostenida en infraestructura escolar segura es
          posible incluso cuando el punto de partida parece abrumador.
        </p>
      </Section>

      <Section title="Indonesia 2018 — Sulawesi (M7.5)">
        <p>
          El terremoto y tsunami de Sulawesi Central en septiembre de 2018 causó 4,340 muertes y
          daños en 1,299 escuelas. Un estudio con 40 docentes documentó cómo, ante la insuficiencia
          de protocolos formales, los maestros recurrieron espontáneamente a prácticas culturales
          locales como mecanismos de afrontamiento colectivo.
        </p>
        <p>
          Tres prácticas resultaron centrales. El gotong royong, una tradición de cooperación mutua
          arraigada en las comunidades indonesias, facilitó la reconstrucción de espacios educativos
          provisionales y la redistribución de recursos entre familias afectadas. La tutura, una
          práctica de narración oral tradicional, ofreció a los niños un marco culturalmente
          familiar para elaborar la experiencia traumática sin recurrir a protocolos clínicos
          importados. La religiosidad proporcionó marcos de sentido compartidos que permitieron a las
          comunidades integrar el evento dentro de sistemas de creencias preexistentes.
        </p>
        <p>
          La experiencia de Sulawesi sugiere que las intervenciones más efectivas son aquellas que se
          articulan con los recursos culturales disponibles en cada comunidad, en lugar de
          reemplazarlos. Para Colombia, esto se traduce en la integración de prácticas como la
          minga, la solidaridad vecinal y las redes parroquiales y comunitarias como vehículos de la
          respuesta psicosocial.
        </p>
      </Section>

      <Section title="Colombia 1999 — Eje Cafetero (M6.2)">
        <p>
          El terremoto del 25 de enero de 1999, con epicentro en el Eje Cafetero, causó
          aproximadamente 1,200 muertes y afectó gravemente a Armenia, Pereira y otras ciudades de
          la región. Aunque la documentación de la respuesta psicosocial escolar es menos sistemática
          que en los otros casos presentados, esta experiencia ofrece dos lecciones relevantes para
          la respuesta actual.
        </p>
        <p>
          Las comunidades Nasa, que habían experimentado el terremoto de Páez en 1994, designaron
          ese evento como una &quot;restauración de la relación con la tierra&quot;, un
          encuadramiento que posiciona el desastre dentro de la cosmología cultural en lugar de
          reducirlo a una categoría exclusiva de pérdida. Esta perspectiva resulta significativa para
          un país en el que las comunidades indígenas y afrocolombianas aportan marcos de
          interpretación que pueden enriquecer la respuesta, siempre que sean reconocidos y no
          subordinados a los protocolos técnicos.
        </p>
        <p>
          La infraestructura del PAPSIVI (Programa de Atención Psicosocial y Salud Integral a
          Víctimas), construida a lo largo de décadas de conflicto armado, representa una capacidad
          instalada que diferencia a Colombia de otros países afectados por desastres naturales. Los
          profesionales formados en atención psicosocial comunitaria, las redes territoriales y los
          protocolos de adaptación cultural constituyen recursos activables para la respuesta al
          terremoto de 2026.
        </p>
      </Section>

      <Section title="Nepal 2015 (M7.8)">
        <p>
          El terremoto de abril de 2015 en Nepal interrumpió la educación de un millón de
          estudiantes, y la respuesta del gobierno se convirtió en referencia internacional por su
          velocidad y pragmatismo. En el plazo de un mes, se desplegaron 15,000 centros de
          aprendizaje transicional (Temporary Learning Spaces, TLS) que permitieron reanudar la
          actividad educativa mientras la infraestructura permanente seguía siendo inhabitable.
        </p>
        <p>
          Los centros transicionales no se limitaron a reproducir las condiciones del aula
          convencional. Integraron actividades lúdicas, exploración al aire libre y &quot;ciencias
          creativas&quot;, generando una atmósfera que facilitó la elaboración del trauma sin
          sacrificar el proceso educativo. Esta estrategia evidenció que la continuidad educativa y
          el apoyo psicosocial funcionan mejor cuando se implementan de forma integrada que cuando
          se abordan como acciones paralelas e inconexas.
        </p>
        <p>
          Los datos de Nepal también documentan las consecuencias de la demora. El rendimiento
          académico cayó un 7% en las zonas afectadas, y las interrupciones prolongadas
          incrementaron significativamente la probabilidad de deserción, especialmente entre las
          niñas y los estudiantes de hogares con menores ingresos. La lección es directa: cada
          semana de retraso en la reapertura amplía las brechas existentes.
        </p>
      </Section>

      <Section title="Ecuador 2016 — Costa (M7.8)">
        <p>
          El terremoto del 16 de abril de 2016 en la costa ecuatoriana dio lugar al Plan Nacional de
          Respuesta Educativa &quot;Escuela para todos, juntos nos levantamos&quot;, que se convirtió
          en referencia regional por articular la respuesta inmediata con la recuperación a mediano
          plazo. El plan combinó espacios temporales, turnos diferenciados para compartir la
          infraestructura disponible, kits escolares de emergencia y acompañamiento psicosocial
          integrado en la actividad educativa.
        </p>
        <p>
          La experiencia ecuatoriana demostró que la integración de las dimensiones educativa y
          emocional dentro de una misma estrategia resulta más efectiva que abordarlas como acciones
          separadas, un principio consistente con la evidencia de Nepal y con las recomendaciones
          del Marco Integral de Seguridad Escolar (CSSF 2022-2030).
        </p>
      </Section>

      <Section title="Trayectorias de recuperación">
        <p>
          La revisión de Witt y colaboradores (2024) sintetizó 15 estudios longitudinales con 11,519
          niños, niñas y adolescentes tras desastres naturales, e identificó cuatro trayectorias
          predominantes de recuperación. La trayectoria resiliente, caracterizada por niveles bajos
          y estables de síntomas desde el inicio, fue la más frecuente, abarcando entre el 34% y el
          82% de los participantes según el estudio. La trayectoria de recuperación mostró síntomas
          iniciales elevados que disminuyeron progresivamente. La trayectoria crónica se caracterizó
          por síntomas persistentemente altos, y la trayectoria de aparición tardía por síntomas que
          emergieron después de un periodo inicial asintomático.
        </p>
        <p>
          Tomadas en conjunto, las trayectorias resilientes y de recuperación representan entre el
          51% y el 97% de las muestras estudiadas, lo que confirma que la mayoría de los niños y
          niñas se recuperará con un apoyo ambiental adecuado, correspondiente a los niveles 1 y 2
          de la pirámide IASC. El desarrollo más dinámico ocurre durante los primeros 12 meses, lo
          que define la ventana de intervención más productiva.
        </p>

        <Callout type="info" title="El reto de la detección">
          <p>
            La evidencia sobre trayectorias sugiere que la mayoría de los niños y niñas se
            recuperarán con apoyo ambiental adecuado. El verdadero reto es identificar
            tempranamente al 3-49% que seguirá trayectorias crónicas o de aparición tardía, para
            quienes las intervenciones de nivel 3 (especializadas) serán necesarias.
          </p>
        </Callout>
      </Section>
    </div>
  );
}
