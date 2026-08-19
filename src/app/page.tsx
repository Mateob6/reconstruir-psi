import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28 space-y-24">
      {/* Hero */}
      <section className="max-w-3xl space-y-5">
        <p className="font-mono text-sm tracking-wider uppercase text-[var(--accent)]">
          COLOMBIA, AGOSTO 2026
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--foreground)]">
          Reconstruir Psi
        </h1>
        <p className="text-xl md:text-2xl text-[var(--muted)] leading-relaxed">
          Orientaciones basadas en evidencia para la recuperación después del terremoto.
          Todo en un solo lugar, accesible para todos.
        </p>
      </section>

      {/* Qué es esto */}
      <section className="max-w-3xl space-y-4">
        <h2 className="text-2xl font-semibold text-[var(--foreground)]">
          ¿Qué es esto?
        </h2>
        <p className="text-[16px] leading-relaxed text-[var(--muted)]">
          Reconstruir Psi traduce la mejor evidencia científica internacional en guías prácticas
          para quienes enfrentan la recuperación después del sismo del 10 de agosto de 2026.
          Reúne 129 fuentes verificadas y las organiza por contexto y por fase temporal, para
          que cada persona encuentre lo que necesita sin tener que leer un texto académico.
        </p>
        <p className="text-[16px] leading-relaxed text-[var(--muted)]">
          No importa si eres docente, directivo escolar, padre o madre de familia, profesional
          de salud mental o simplemente alguien que quiere entender qué hacer. Esta plataforma
          fue diseñada para ti.
        </p>
      </section>

      {/* Áreas */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-[var(--foreground)]">
          Guías disponibles
        </h2>

        <Link
          href="/escuelas"
          className="group block rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-10 transition-all hover:border-[var(--accent)] hover:shadow-md"
        >
          <p className="font-mono text-xs tracking-wider uppercase text-[var(--accent)] mb-3">
            ÁREA ACTIVA
          </p>
          <h3 className="text-2xl sm:text-3xl font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors mb-3">
            Escuelas
          </h3>
          <p className="text-[16px] text-[var(--muted)] leading-relaxed mb-6 max-w-2xl">
            Guía para la respuesta psicosocial, la recuperación educativa y la seguridad escolar.
            Organizada en cuatro fases temporales, con recomendaciones diferenciadas por nivel
            educativo.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="rounded-full bg-[var(--surface-raised)] border border-[var(--border)] px-3 py-1 text-xs font-medium text-[var(--muted)]">
              7 secciones
            </span>
            <span className="rounded-full bg-[var(--surface-raised)] border border-[var(--border)] px-3 py-1 text-xs font-medium text-[var(--muted)]">
              128 referencias
            </span>
            <span className="rounded-full bg-[var(--surface-raised)] border border-[var(--border)] px-3 py-1 text-xs font-medium text-[var(--muted)]">
              Guías descargables
            </span>
            <span className="rounded-full bg-[var(--surface-raised)] border border-[var(--border)] px-3 py-1 text-xs font-medium text-[var(--muted)]">
              Por nivel educativo
            </span>
          </div>
          <span className="inline-flex items-center gap-2 text-[var(--accent)] font-semibold group-hover:gap-3 transition-all">
            Entrar a la guía
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </Link>
      </section>

      {/* Qué encontrarás */}
      <section className="max-w-3xl space-y-6">
        <h2 className="text-2xl font-semibold text-[var(--foreground)]">
          Qué encontrarás
        </h2>
        <ul className="space-y-4">
          {[
            {
              title: "Orientaciones por fase temporal",
              desc: "Qué hacer esta semana, el primer mes, el primer semestre y a largo plazo.",
            },
            {
              title: "Evidencia verificada",
              desc: "Datos de 75 estudios con más de 11,000 participantes. Effect sizes, meta-análisis, moderadores.",
            },
            {
              title: "Recursos descargables",
              desc: "Guías de la OMS, UNICEF, OPS/PAHO, MinSalud, MEN Colombia y otros organismos.",
            },
            {
              title: "Experiencia internacional",
              desc: "Lecciones de Chile, Japón, Indonesia, Nepal y Ecuador para la respuesta colombiana.",
            },
          ].map((item) => (
            <li key={item.title} className="flex gap-4 items-start">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-white text-xs font-bold">
                ✓
              </span>
              <div>
                <p className="font-semibold text-[var(--foreground)]">{item.title}</p>
                <p className="text-sm text-[var(--muted)]">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Autoría */}
      <section className="max-w-3xl border-t border-[var(--border)] pt-10">
        <p className="text-sm text-[var(--muted)] leading-relaxed">
          Elaborado por <strong className="text-[var(--foreground)]">Mateo Belalcázar Correa</strong> (MSc),
          CIDEAS, Facultad de Psicología, Universidad del Valle. Revisión de alcance rápida conducida
          los días 16 y 17 de agosto de 2026.{" "}
          <Link href="/acerca" className="text-[var(--accent)] hover:underline">
            Ver metodología completa →
          </Link>
        </p>
      </section>
    </div>
  );
}
