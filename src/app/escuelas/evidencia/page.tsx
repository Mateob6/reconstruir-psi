import type { Metadata } from "next";
import {
  SectionHeader,
  InsightCard,
  InsightGrid,
  EvidenceCard,
  EvidenceGrid,
  EffectBar,
  EffectBarList,
  ComparisonCard,
  ComparisonGrid,
  IASCPyramid,
  StickySectionNav,
  Callout,
  DataTable,
  Ref,
  Stat,
  StatGrid,
} from "@/components/content";

export const metadata: Metadata = {
  title: "Evidencia",
  description:
    "Tres meta-análisis, tamaños de efecto, moderadores y trayectorias de recuperación de intervenciones psicosociales escolares post-desastre.",
};

const SECTION_NAV_ITEMS = [
  { id: "impacto", label: "Impacto" },
  { id: "resumen", label: "Resumen" },
  { id: "meta-analisis", label: "Meta-análisis" },
  { id: "terapias", label: "Terapias" },
  { id: "moderadores", label: "Moderadores" },
  { id: "colombia", label: "Colombia" },
  { id: "trayectorias", label: "Trayectorias" },
  { id: "piramide", label: "Pirámide IASC" },
  { id: "marcos", label: "Marcos" },
];

/* ── SVG Icons (inline, no emoji) ─────────────────────── */
const CheckIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12l4 4L19 6" />
  </svg>
);
const ClockIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="8" />
    <path d="M12 8v4l3 2" />
  </svg>
);
const SchoolIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
    <path d="M4 21V9l8-5 8 5v12" />
    <path d="M9 21v-7h6v7" />
  </svg>
);

export default function EvidenciaPage() {
  return (
    <>
      <StickySectionNav items={SECTION_NAV_ITEMS} />

      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
        {/* ═══════════════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════════════ */}
        <section className="pt-12 pb-6 sm:pt-16 sm:pb-8" style={{ scrollMarginTop: "120px" }}>
          <div className="flex items-center gap-3 text-xs font-mono font-medium tracking-wider uppercase text-[var(--accent)] mb-5">
            <span className="w-6 h-[2px] bg-[var(--accent)] rounded-full" />
            <span>Evidencia científica</span>
          </div>
          <h1 className="font-sans font-extrabold tracking-tight text-[var(--foreground)] text-[clamp(28px,4.2vw,48px)] leading-[1.1] max-w-[20ch] mb-5">
            Qué dice la investigación sobre las intervenciones psicosociales escolares post-desastre
          </h1>
          <p className="text-[var(--muted)] text-base sm:text-lg leading-relaxed max-w-[62ch]">
            Tres meta-análisis, 75 estudios y más de 11.000 participantes sintetizan qué funciona,
            bajo qué condiciones y para quién — la base para decisiones informadas en la respuesta
            psicosocial escolar tras el terremoto de agosto 2026 en Colombia.
          </p>
        </section>

        {/* ═══════════════════════════════════════════════════
            KPIs
        ═══════════════════════════════════════════════════ */}
        <section id="impacto" className="pb-16" style={{ scrollMarginTop: "120px" }}>
          <StatGrid>
            <Stat value="75" label="Estudios analizados" />
            <Stat value="11,000+" label="Participantes" />
            <Stat value="3" label="Meta-análisis clave" />
            <Stat value="g = −1.20" label="Efecto en TEPT" />
          </StatGrid>
        </section>

        {/* ═══════════════════════════════════════════════════
            RESUMEN EJECUTIVO
        ═══════════════════════════════════════════════════ */}
        <section id="resumen" className="py-16 border-t border-[var(--border)]" style={{ scrollMarginTop: "120px" }}>
          <SectionHeader
            eyebrow="Resumen ejecutivo"
            title="Tres conclusiones antes de entrar al detalle"
            className="mb-10"
          />
          <InsightGrid>
            <InsightCard
              icon={CheckIcon}
              title="Las intervenciones estructuradas ayudan"
              description="Implementar cualquier intervención estructurada produce beneficios significativos frente a no intervenir, sin diferencias estadísticamente significativas entre modalidades terapéuticas."
            />
            <InsightCard
              icon={ClockIcon}
              title="Sesiones cortas, programas sostenidos"
              description="Las sesiones de 60 minutos o menos y los programas con seis o más sesiones presentan los mejores efectos en la revisión de Laksmita et al. (2026)."
            />
            <InsightCard
              icon={SchoolIcon}
              title="Las escuelas son escenarios clave"
              description="Son las primeras instituciones en reanudar operaciones tras un desastre y sostienen los niveles 1 a 3 de apoyo psicosocial de la pirámide IASC."
            />
          </InsightGrid>
        </section>

        {/* ═══════════════════════════════════════════════════
            TRES META-ANÁLISIS
        ═══════════════════════════════════════════════════ */}
        <section id="meta-analisis" className="py-16 border-t border-[var(--border)]" style={{ scrollMarginTop: "120px" }}>
          <SectionHeader
            eyebrow="La base de evidencia"
            title="Tres meta-análisis clave"
            description="Tres revisiones sistemáticas con meta-análisis sintetizan 75 estudios con más de 11,000 participantes, permitiendo identificar no solo si las intervenciones funcionan, sino bajo qué condiciones y para qué poblaciones producen los mayores efectos."
            className="mb-10"
          />

          <EvidenceGrid className="mb-10">
            <EvidenceCard
              year="2026 · Escuelas exclusivamente"
              title="Laksmita et al."
              meta={{ k: "13", n: "2,418" }}
              description="13 ensayos controlados aleatorizados. Efecto inmediato grande sobre TEPT (g = −1.20), sostenido a corto (g = −0.25) y largo plazo (g = −0.45). Efecto pequeño pero significativo en depresión (g = −0.34)."
              href="/referencias#R-003"
              linkLabel="Ver referencia [3] →"
            />
            <EvidenceCard
              year="2024 · Meta-análisis en red"
              title="Xie et al."
              meta={{ k: "26", n: "4,331" }}
              description="26 ensayos controlados. Permite comparar simultáneamente múltiples modalidades terapéuticas y establecer rankings de efectividad mediante el estadístico SUCRA."
              href="/referencias#R-004"
              linkLabel="Ver referencia [4] →"
            />
            <EvidenceCard
              year="2017 · La revisión más amplia"
              title="Morina et al."
              meta={{ k: "36", n: "4,411" }}
              description="36 estudios. Efecto pre-post grande (g = 1.35) y efecto moderado frente a controles activos (g = 0.44). Base de la taxonomía fina por tipo de terapia."
              href="/referencias#R-002"
              linkLabel="Ver referencia [2] →"
            />
          </EvidenceGrid>

          <DataTable
            caption="Tamaños de efecto por revisión"
            headers={["Revisión", "k", "N", "Efecto TEPT", "Efecto depresión"]}
            rows={[
              ["Laksmita et al. (2026)", "13", "2,418", "g = −1.20", "g = −0.34"],
              ["Xie et al. (2024)", "26", "4,331", "SMD = −0.67 (EMDR)", "SMD = −0.40 (EMDR)"],
              ["Morina et al. (2017)", "36", "4,411", "g = 0.44 (vs. control)", "No reportado"],
            ]}
          />
        </section>

        {/* ═══════════════════════════════════════════════════
            TERAPIAS
        ═══════════════════════════════════════════════════ */}
        <section id="terapias" className="py-16 border-t border-[var(--border)]" style={{ scrollMarginTop: "120px" }}>
          <SectionHeader
            eyebrow="Comparación de modalidades"
            title="¿Qué terapia funciona mejor?"
            description="El meta-análisis en red de Xie y colaboradores (2024) clasificó diez modalidades mediante SUCRA. Para TEPT, EMDR ocupó la primera posición (69.6), seguida por ET/NET (69.6) y TCC (66.0). Los datos pre-post de Morina et al. (2017) complementan esta imagen con una taxonomía más fina."
            className="mb-10"
          />

          <EffectBarList title="Tamaño de efecto pre-post por terapia — Morina et al. (2017)" className="mb-8">
            <EffectBar label="KIDNET / NET" value={1.87} maxValue={2.0} unit=" g" />
            <EffectBar label="EMDR" value={1.46} maxValue={2.0} unit=" g" />
            <EffectBar label="TCC" value={1.07} maxValue={2.0} unit=" g" />
            <EffectBar label="Intervenciones de aula" value={0.68} maxValue={2.0} unit=" g" />
          </EffectBarList>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--surface-raised)]">
              <h4 className="font-bold text-[var(--foreground)] text-[14px] mb-2">KIDNET / NET</h4>
              <p className="text-[13px] text-[var(--muted)] leading-relaxed">
                <strong>Terapia de Exposición Narrativa.</strong> El estudiante construye una narración cronológica de su vida, enfocándose en procesar las experiencias traumáticas para integrarlas en su memoria biográfica en lugar de revivirlas como fragmentos emocionales.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--surface-raised)]">
              <h4 className="font-bold text-[var(--foreground)] text-[14px] mb-2">EMDR</h4>
              <p className="text-[13px] text-[var(--muted)] leading-relaxed">
                <strong>Desensibilización y Reprocesamiento por Movimientos Oculares.</strong> Utiliza estimulación bilateral (como movimientos oculares guiados) mientras el paciente se enfoca en el recuerdo traumático, ayudando al cerebro a reprocesarlo y reducir su carga emocional.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--surface-raised)]">
              <h4 className="font-bold text-[var(--foreground)] text-[14px] mb-2">TCC</h4>
              <p className="text-[13px] text-[var(--muted)] leading-relaxed">
                <strong>Terapia Cognitivo-Conductual.</strong> Se centra en identificar y modificar patrones de pensamiento negativos o distorsionados tras el trauma, enseñando habilidades de afrontamiento prácticas y reduciendo los comportamientos evitativos.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--surface-raised)]">
              <h4 className="font-bold text-[var(--foreground)] text-[14px] mb-2">Intervenciones de aula</h4>
              <p className="text-[13px] text-[var(--muted)] leading-relaxed">
                <strong>Programas grupales preventivos.</strong> Incluyen psicoeducación, arteterapia, juego y técnicas de relajación/mindfulness. Frecuentemente lideradas por docentes para normalizar síntomas y fomentar la regulación emocional a gran escala.
              </p>
            </div>
          </div>

          <Callout type="info" title="Todas las modalidades son efectivas">
            <p>
              El análisis formal no encontró diferencias estadísticamente significativas entre
              tipos de terapia (<span className="stat-inline">F&nbsp;=&nbsp;2.49</span>,{" "}
              <span className="stat-inline">p&nbsp;=&nbsp;0.062</span>)<Ref id="R-002" />. El
              mensaje central: implementar cualquier intervención estructurada produce beneficios
              significativos frente a no intervenir. El ranking no implica diferencia estadísticamente
              significativa entre modalidades según la evidencia citada.
            </p>
          </Callout>
        </section>

        {/* ═══════════════════════════════════════════════════
            MODERADORES
        ═══════════════════════════════════════════════════ */}
        <section id="moderadores" className="py-16 border-t border-[var(--border)]" style={{ scrollMarginTop: "120px" }}>
          <SectionHeader
            eyebrow="Qué amplifica el efecto"
            title="Moderadores"
            description="El análisis de Laksmita y colaboradores (2026) revela cuatro factores que amplifican sustancialmente la efectividad de las intervenciones escolares."
            className="mb-6"
          />

          <div className="bg-[var(--surface-raised)] border border-[var(--border)] p-5 rounded-xl mb-10 max-w-3xl">
            <h4 className="font-bold text-[var(--foreground)] text-[14px] flex items-center gap-2 mb-1">
              <svg className="w-4 h-4 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              ¿Qué es un moderador?
            </h4>
            <p className="text-[13px] text-[var(--muted)] leading-relaxed ml-6">
              En investigación, un moderador es una variable que afecta la dirección o la fuerza de la relación entre la intervención y su resultado. En otras palabras, nos dice <strong>bajo qué condiciones</strong> o <strong>para quién</strong> funciona mejor una terapia.
            </p>
          </div>

          <ComparisonGrid className="mb-10">
            <ComparisonCard
              title="Duración de sesión"
              favorable={{ value: "60 min o menos", stat: "g = −1.60" }}
              unfavorable={{ value: "Más de 60 min", stat: "g = −0.16" }}
            />
            <ComparisonCard
              title="Número de sesiones"
              favorable={{ value: "6 sesiones o más", stat: "g = −1.77" }}
              unfavorable={{ value: "Menos de 6 sesiones", stat: "g = −0.15" }}
            />
            <ComparisonCard
              title="Contexto del país"
              favorable={{ value: "En desarrollo", stat: "g = −1.77" }}
              unfavorable={{ value: "Desarrollado", stat: "g = −0.15" }}
            />
            <ComparisonCard
              title="Quién entrega la intervención"
              favorable={{ value: "No especialistas", stat: "g = −2.60" }}
              unfavorable={{ value: "Prof. de salud", stat: "g = −0.39" }}
            />
          </ComparisonGrid>

          <EffectBarList title="Efecto en TEPT por condición del moderador — Laksmita et al. (2026)" className="mb-6">
            <EffectBar label="No especialistas" value={2.60} maxValue={2.8} unit=" g" variant="favor" />
            <EffectBar label="Países en desarrollo" value={1.77} maxValue={2.8} unit=" g" variant="favor" />
            <EffectBar label="6 sesiones o más" value={1.77} maxValue={2.8} unit=" g" variant="favor" />
            <EffectBar label="60 min o menos / sesión" value={1.60} maxValue={2.8} unit=" g" variant="favor" />
            <EffectBar label="Prof. de salud" value={0.39} maxValue={2.8} unit=" g" variant="unfavor" />
            <EffectBar label="Países desarrollados" value={0.15} maxValue={2.8} unit=" g" variant="unfavor" />
            <EffectBar label="Menos de 6 sesiones" value={0.15} maxValue={2.8} unit=" g" variant="unfavor" />
            <EffectBar label="Más de 60 min / sesión" value={0.16} maxValue={2.8} unit=" g" variant="unfavor" />
          </EffectBarList>
        </section>

        {/* ═══════════════════════════════════════════════════
            COLOMBIA
        ═══════════════════════════════════════════════════ */}
        <section id="colombia" className="py-16 border-t border-[var(--border)]" style={{ scrollMarginTop: "120px" }}>
          <div className="relative overflow-hidden rounded-2xl border border-amber-300/40 bg-amber-50 dark:bg-amber-900/10 dark:border-amber-700/30 p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-amber-500 text-white shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l4 4L19 6" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] mb-3">
                  Colombia cumple los moderadores favorables
                </h3>
                <p className="text-[var(--muted)] text-[15px] leading-relaxed mb-4">
                  Como país en desarrollo con una amplia red de docentes capacitables, Colombia se
                  ubica en la intersección de los cuatro moderadores que amplifican la efectividad.
                  Las intervenciones de sesiones breves, entregadas por docentes formados, en un
                  contexto de desarrollo, representan exactamente el perfil con mayores tamaños de efecto.
                </p>
                <p className="text-[12.5px] text-[var(--muted)] italic opacity-70">
                  Esta es una interpretación del conjunto de moderadores citado, no una prueba de que
                  una intervención funcionará necesariamente mejor en Colombia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            TRAYECTORIAS DE RECUPERACIÓN
        ═══════════════════════════════════════════════════ */}
        <section id="trayectorias" className="py-16 border-t border-[var(--border)]" style={{ scrollMarginTop: "120px" }}>
          <SectionHeader
            eyebrow="No todos necesitan lo mismo"
            title="Trayectorias de recuperación"
            description="No todos los niños y niñas necesitan intervención clínica. La revisión de Witt et al. (2024) sintetizó 15 estudios longitudinales con 11,519 participantes menores de edad, identificando cuatro trayectorias predominantes tras un desastre natural. Entre el 34% y el 82% mostraron trayectorias resilientes; entre el 51% y el 97% fueron resilientes o en recuperación espontánea."
            className="mb-10"
          />

          {/* Timeline visual */}
          <div className="relative pl-2 sm:pl-4 ml-4 sm:ml-8 border-l-2 border-[var(--border)] space-y-8 mb-10">
            {[
              { month: "0 m", title: "Evento disruptivo", desc: "Punto de partida de las cuatro trayectorias: resiliente, recuperación espontánea, recuperación tardía y síntomas persistentes.", key: true },
              { month: "4–6 m", title: "Primeras mediciones", desc: "El estudio de Kobe evaluó a 8,800 estudiantes a los 4 y 6 meses, junto con 1,886 controles de áreas no afectadas.", key: false },
              { month: "12 m", title: "Ventana de mayor desarrollo", desc: "El desarrollo más dinámico de las trayectorias ocurre durante los primeros 12 meses — la ventana donde intervenir temprano tiene más peso.", key: true },
              { month: "24 m", title: "Persistencia en zonas de mayor daño", desc: "Los síntomas persistieron más de dos años en las zonas más afectadas; un tercer factor no documentado antes, ligado a responsabilidad social y culpa, apareció en los cuestionarios.", key: false },
            ].map((item) => (
              <div key={item.month} className="relative pl-8 sm:pl-10">
                <div className={`absolute -left-[11px] top-1 w-[20px] h-[20px] rounded-full border-[3px] ${item.key ? "border-amber-500 bg-amber-500" : "border-[var(--accent)] bg-[var(--surface)]"}`} />
                <div className="text-xs font-mono font-semibold text-[var(--accent)] mb-1 uppercase tracking-wide">
                  {item.month}
                </div>
                <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-4 sm:p-5">
                  <h4 className="font-bold text-[var(--foreground)] text-[15px] mb-1">{item.title}</h4>
                  <p className="text-[13.5px] text-[var(--muted)] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Estudio de Kobe */}
          <EvidenceGrid>
            <EvidenceCard
              year="2012 · Estudio longitudinal de Kobe"
              title="Uemoto et al."
              meta={{ k: "1", n: "8,800" }}
              description="Evaluados en cuatro momentos (4, 6, 12 y 24 meses) tras el terremoto de 1995. Los más jóvenes (grado 3) resultaron los más afectados; las niñas presentaron consistentemente puntuaciones más altas que los niños."
              href="/referencias#R-079"
              linkLabel="Ver referencia [79] →"
            />
          </EvidenceGrid>
        </section>

        {/* ═══════════════════════════════════════════════════
            PIRÁMIDE IASC
        ═══════════════════════════════════════════════════ */}
        <section id="piramide" className="py-16 border-t border-[var(--border)]" style={{ scrollMarginTop: "120px" }}>
          <SectionHeader
            eyebrow="Marco organizador"
            title="La pirámide IASC"
            description="El Comité Permanente entre Organismos (IASC, 2007) propone cuatro niveles que ordenan las intervenciones según su alcance y grado de especialización. La mayoría de las personas se recupera con los niveles 1 y 2, sin requerir intervención clínica."
            centered
            className="mb-10"
          />
          <IASCPyramid caption="Las escuelas operan en los niveles 1 a 3, dado que son las primeras instituciones en reanudar operaciones y ofrecen estructura, rutina y contacto con pares." />
        </section>

        {/* ═══════════════════════════════════════════════════
            MARCOS COMPLEMENTARIOS
        ═══════════════════════════════════════════════════ */}
        <section id="marcos" className="py-16 border-t border-[var(--border)]" style={{ scrollMarginTop: "120px" }}>
          <SectionHeader
            eyebrow="Otros marcos de referencia"
            title="Marcos complementarios"
            className="mb-10"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6">
              <div className="text-[11px] font-mono font-bold text-[var(--accent)] uppercase tracking-wider mb-3">UNICEF · 2022</div>
              <h3 className="font-bold text-[16.5px] text-[var(--foreground)] mb-3 leading-tight">
                Cinco pilares para la salud mental escolar
              </h3>
              <p className="text-[13.5px] text-[var(--muted)] leading-relaxed">
                Van desde la creación de ambientes propicios hasta la colaboración escuela-familia-comunidad,
                posicionando el bienestar docente como pilar independiente. Retorno estimado de $21.5 por
                cada dólar invertido a lo largo de 80 años<Ref id="R-025" />.
              </p>
            </div>
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6">
              <div className="text-[11px] font-mono font-bold text-[var(--accent)] uppercase tracking-wider mb-3">INEE · 2024</div>
              <h3 className="font-bold text-[16.5px] text-[var(--foreground)] mb-3 leading-tight">
                Estándares mínimos para educación en emergencias
              </h3>
              <p className="text-[13.5px] text-[var(--muted)] leading-relaxed">
                19 estándares que cubren desde la seguridad física de las instalaciones hasta la integración
                de actividades psicosociales en los currículos durante la fase de recuperación<Ref id="R-030" />.
              </p>
            </div>
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6">
              <div className="text-[11px] font-mono font-bold text-[var(--accent)] uppercase tracking-wider mb-3">MinSalud Colombia</div>
              <h3 className="font-bold text-[16.5px] text-[var(--foreground)] mb-3 leading-tight">
                Las cuatro fases psicológicas del desastre
              </h3>
              <p className="text-[13.5px] text-[var(--muted)] leading-relaxed">
                Heroica (72 h) · Luna de miel (1 semana–6 meses) · Desilusión (2 meses–2 años) ·
                Reconstrucción (años). Colombia registra un promedio de 597.7 eventos desastrosos
                al año en las últimas tres décadas<Ref id="R-026" /><Ref id="R-027" />.
              </p>
            </div>
          </div>
        </section>

        {/* Spacer final */}
        <div className="h-16" />
      </div>
    </>
  );
}
