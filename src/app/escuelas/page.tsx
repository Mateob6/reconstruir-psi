import { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeader, Stat, StatGrid } from '@/components/content';


export const metadata: Metadata = {
  title: 'Reconstruir Psi | Guía para Escuelas',
  description: 'Guía basada en evidencia para la recuperación escolar tras el sismo de agosto de 2026 en Colombia.',
};

export default function EscuelasPage() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 space-y-24">
      {/* Hero Section */}
      <section className="space-y-6 max-w-4xl">
        <p className="font-mono text-sm tracking-wider uppercase text-[var(--accent)]">
          GUÍA PARA ESCUELAS
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--foreground)]">
          Reconstruir Psi
        </h1>
        <p className="text-xl md:text-2xl text-[var(--muted)] leading-relaxed max-w-3xl">
          Marco de acción basado en evidencia para la respuesta psicosocial, la recuperación educativa y la seguridad escolar tras el sismo de agosto de 2026 en el suroccidente de Colombia.
        </p>
        <div className="pt-4 max-w-3xl">
          <div className="p-6 rounded-2xl bg-[var(--surface-raised)] border border-[var(--border)] shadow-sm">
            <h2 className="font-bold text-[16px] text-[var(--foreground)] mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              ¿Cómo navegar esta guía?
            </h2>
            <p className="text-[14.5px] text-[var(--muted)] mb-4">
              Esta herramienta <strong>no</strong> está diseñada para leerse de forma lineal como un texto académico. Funciona como un manual de respuesta rápida:
            </p>
            <ul className="space-y-3 text-[14px] text-[var(--muted)]">
              <li className="flex items-start gap-2.5">
                <span className="flex items-center justify-center w-5 h-5 rounded bg-[var(--foreground)] text-[var(--background)] text-xs font-bold shrink-0 mt-0.5">1</span>
                <span><strong>Ubica tu fase temporal:</strong> Identifica en qué momento de la emergencia escolar te encuentras en la línea de tiempo de abajo.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="flex items-center justify-center w-5 h-5 rounded bg-[var(--foreground)] text-[var(--background)] text-xs font-bold shrink-0 mt-0.5">2</span>
                <span><strong>Ve a lo accionable:</strong> Accede a recomendaciones directas, qué hacer y qué evitar sin tener que leer toda la justificación técnica.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="flex items-center justify-center w-5 h-5 rounded bg-[var(--foreground)] text-[var(--background)] text-xs font-bold shrink-0 mt-0.5">3</span>
                <span><strong>Profundiza en el soporte:</strong> Utiliza los tres módulos finales para consultar la evidencia base, descargar recursos o ver casos de otros países.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Context KPIs */}
      <section>
        <StatGrid>
          <Stat value="287+" label="Fallecidos" />
          <Stat value="1,819" label="Centros afectados" />
          <Stat value="$48M" label="USD redirigidos" />
          <Stat value="24 ago" label="Reapertura escolar" />
        </StatGrid>
        <p className="text-[11px] text-[var(--muted)] text-center mt-3 opacity-70">
          Fuentes: reportes institucionales MEN, Secretaría de Educación de Cali, prensa nacional. Datos al 17 de agosto de 2026.
        </p>
      </section>

      {/* Timeline Section */}
      <section id="fases" className="space-y-12">
        <SectionHeader
          eyebrow="¿Dónde está tu escuela ahora?"
          title="Selecciona la fase de recuperación"
          className="mb-8"
        />
        
        {/* Timeline container */}
        <div className="relative">
          {/* Connecting line (desktop only, behind the nodes) */}
          <div className="hidden lg:block absolute top-[23px] left-0 w-full h-[2px] bg-[var(--border)] -z-10" />
          
          <div className="flex overflow-x-auto pb-8 -mx-4 px-4 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-4 lg:gap-6 snap-x snap-mandatory hide-scrollbar">
            {/* Phase Cards */}
            {[
              {
                num: '1',
                title: 'Esta semana',
                time: 'Días 1-7',
                desc: 'Estabilización, PAP, seguridad física, reapertura',
                href: '/escuelas/esta-semana'
              },
              {
                num: '2',
                title: 'Primer mes',
                time: 'Semanas 2-8',
                desc: 'Modelo escalonado, capacitación docente, adaptación curricular',
                href: '/escuelas/primer-mes'
              },
              {
                num: '3',
                title: 'Primer semestre',
                time: 'Meses 2-6',
                desc: 'Recuperación de aprendizajes, tutoría, marco RAPID',
                href: '/escuelas/primer-semestre'
              },
              {
                num: '4',
                title: 'Largo plazo',
                time: 'Año 1+',
                desc: 'Escuelas seguras, CSSF, resiliencia institucional',
                href: '/escuelas/largo-plazo'
              }
            ].map((phase, i) => (
              <Link 
                key={phase.num}
                href={phase.href}
                className="flex-none w-[280px] lg:w-auto snap-center group relative flex flex-col bg-[var(--surface)] border border-[var(--border)] p-6 hover:border-[var(--accent)] transition-colors mr-4 lg:mr-0"
              >
                {/* Node circle */}
                <div className="w-12 h-12 rounded-full bg-[var(--background)] border-2 border-[var(--border)] flex items-center justify-center font-mono text-sm text-[var(--muted)] group-hover:bg-[var(--accent)] group-hover:text-white group-hover:border-[var(--accent)] transition-colors mb-6 shadow-[0_0_0_4px_var(--background)]">
                  {phase.num}
                </div>
                
                <h3 className="text-xl font-medium text-[var(--foreground)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {phase.title}
                </h3>
                <p className="font-mono text-[13px] text-[var(--muted)] mb-4">
                  {phase.time}
                </p>
                <p className="text-[15px] leading-relaxed text-[var(--foreground)] text-opacity-80">
                  {phase.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Support Sections */}
      <section id="soporte" className="space-y-12">
        <SectionHeader 
          eyebrow="Profundizar" 
          title="Secciones de soporte" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/escuelas/evidencia" className="group flex flex-col bg-[var(--surface)] border border-[var(--border)] p-8 hover:border-[var(--accent)] transition-all">
            <svg className="w-6 h-6 text-[var(--muted)] group-hover:text-[var(--accent)] mb-6 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">Evidencia</h3>
            <p className="text-[15px] text-[var(--muted)] leading-relaxed">
              Revisiones sistemáticas, meta-análisis y tamaños de efecto.
            </p>
          </Link>

          <Link href="/escuelas/recursos" className="group flex flex-col bg-[var(--surface)] border border-[var(--border)] p-8 hover:border-[var(--accent)] transition-all">
            <svg className="w-6 h-6 text-[var(--muted)] group-hover:text-[var(--accent)] mb-6 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 13H8"/><path d="M16 17H8"/><path d="M16 13h-2"/></svg>
            <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">Recursos</h3>
            <p className="text-[15px] text-[var(--muted)] leading-relaxed">
              Marcos normativos, guías de evaluación y herramientas.
            </p>
          </Link>

          <Link href="/escuelas/experiencia" className="group flex flex-col bg-[var(--surface)] border border-[var(--border)] p-8 hover:border-[var(--accent)] transition-all">
            <svg className="w-6 h-6 text-[var(--muted)] group-hover:text-[var(--accent)] mb-6 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
            <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">Experiencia internacional</h3>
            <p className="text-[15px] text-[var(--muted)] leading-relaxed">
              Lecciones de Chile, Nepal, Ecuador, Turquía y Japón.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
