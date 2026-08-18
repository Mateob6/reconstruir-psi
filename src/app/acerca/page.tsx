import type { Metadata } from "next";
import { SectionHeader, Callout, DataTable, KeyMessage, Stat, StatGrid, StickySectionNav } from "@/components/content";

export const metadata: Metadata = {
  title: "Créditos y Metodología",
  description: "Metodología de la revisión, alcance, limitaciones y créditos institucionales.",
};

export default function AcercaPage() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-accent"></div>
          <span className="font-mono text-sm font-bold tracking-widest text-accent uppercase">
            Acerca de la Guía
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight font-sans">
          Metodología y Créditos
        </h1>
        <p className="text-xl text-muted leading-relaxed max-w-3xl mb-12">
          Conoce cómo se construyó esta guía de respuesta rápida, las bases de evidencia que la sustentan y el equipo institucional detrás del proyecto.
        </p>
      </header>

      <StickySectionNav
        items={[
          { id: "institucional", label: "Institucional" },
          { id: "autoria", label: "Autoría" },
          { id: "metodologia", label: "Metodología" },
          { id: "limitaciones", label: "Limitaciones" },
          { id: "citar", label: "Cómo citar" },
        ]}
      />

      {/* Nivel 1: Respaldo y Créditos */}
      <section id="institucional" style={{ scrollMarginTop: "150px" }} className="py-8 border-t border-[var(--border)]">
        <SectionHeader eyebrow="Institucional" title="Respaldo Académico" />
        
        <div className="mt-8 p-10 rounded-2xl bg-surface border border-border flex flex-col justify-center items-center text-center">
          <p className="text-muted max-w-2xl mx-auto mb-10 leading-relaxed text-[15px]">
            Esta guía fue desarrollada como una iniciativa académica de respuesta rápida por el Instituto de Investigación en Ciencias del Desarrollo, del Aprendizaje y Subjetividades (CIDEAS), en el marco de la Facultad de Psicología de la Universidad del Valle.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-12 opacity-90 hover:opacity-100 transition-opacity">
            {/* Logo Univalle */}
            <a href="https://www.univalle.edu.co/" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-4 hover:scale-105 transition-transform">
              <img src="/logos/logo1.png" alt="Universidad del Valle" className="h-20 object-contain drop-shadow-sm" />
              <span className="text-sm font-bold uppercase tracking-wider text-foreground text-center">Universidad<br/>del Valle</span>
            </a>
            
            <div className="hidden md:block w-px h-16 bg-border"></div>
            
            {/* Logo Facultad */}
            <a href="https://psicologia.univalle.edu.co/" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-4 hover:scale-105 transition-transform">
              <img src="/logos/logo2.png" alt="Facultad de Psicología" className="h-20 object-contain drop-shadow-sm" />
              <span className="text-sm font-bold uppercase tracking-wider text-foreground text-center">Facultad de<br/>Psicología</span>
            </a>

            <div className="hidden md:block w-px h-16 bg-border"></div>
            
            {/* Logo CIDEAS */}
            <a href="https://psicologia.univalle.edu.co/?id=834" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-4 hover:scale-105 transition-transform">
              <div className="h-20 flex items-center justify-center">
                <span className="font-bold text-3xl tracking-widest text-primary drop-shadow-sm">CIDEAS</span>
              </div>
              <span className="text-sm font-bold uppercase tracking-wider text-foreground text-center">Instituto de<br/>Investigación</span>
            </a>
          </div>
        </div>
      </section>

      <section id="autoria" style={{ scrollMarginTop: "150px" }} className="py-8 border-t border-[var(--border)]">
        <SectionHeader eyebrow="Autoría" title="Autor y Compilador" />
        
        <div className="mt-8 p-8 md:p-10 rounded-2xl bg-surface border border-border flex flex-col md:flex-row items-start gap-8">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-surface-raised border-4 border-surface shadow-sm shrink-0">
            <img src="https://mateob6.github.io/photo.jpg" alt="Mateo Belalcázar Correa" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <h4 className="text-2xl font-bold text-foreground mb-1">Mateo Belalcázar Correa</h4>
            <p className="text-sm font-mono text-accent uppercase tracking-wider mb-4">Investigador Doctoral en Psicología</p>
            <p className="text-[15px] text-muted leading-relaxed mb-6">
              Investigador en el Instituto CIDEAS, Universidad del Valle. Su trabajo se enfoca en el desarrollo cognitivo, la neuropsicología, la medición psicológica y los métodos computacionales aplicados a contextos educativos y comunitarios.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <a href="mailto:mateo.belalcazar6@gmail.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold bg-surface-raised px-4 py-2 rounded-full hover:bg-accent hover:text-white transition-colors border border-border text-foreground">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Email
              </a>
              <a href="https://mateob6.github.io/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold bg-surface-raised px-4 py-2 rounded-full hover:bg-accent hover:text-white transition-colors border border-border text-foreground">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                Sitio web
              </a>
              <a href="https://scholar.google.com/citations?hl=es&authuser=1&user=RoI0VQ8AAAAJ" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold bg-surface-raised px-4 py-2 rounded-full hover:bg-accent hover:text-white transition-colors border border-border text-foreground">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/></svg>
                Google Scholar
              </a>
              <a href="https://github.com/Mateob6" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold bg-surface-raised px-4 py-2 rounded-full hover:bg-accent hover:text-white transition-colors border border-border text-foreground">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Nivel 2: Metodología */}
      <section id="metodologia" style={{ scrollMarginTop: "150px" }} className="py-8 border-t border-[var(--border)]">
        <SectionHeader eyebrow="Evidencia" title="Metodología de la revisión" />
        
        <div className="space-y-6 text-[15px] leading-relaxed text-muted mt-8">
          <p>
            Esta guía fue producida como una <strong>revisión de alcance rápida</strong> (rapid scoping review) para responder a la necesidad inmediata de orientaciones basadas en evidencia para los contextos escolares tras el sismo de agosto de 2026. Su propósito es traducir la evidencia científica internacional y las experiencias de campo documentadas en recomendaciones prácticas para quienes toman decisiones en el terreno educativo.
          </p>

          <StatGrid>
            <Stat value="129" label="Recursos identificados" />
            <Stat value="128" label="Incluidos en la síntesis" />
            <Stat value="39" label="Búsquedas realizadas" />
            <Stat value="14" label="Bases de datos" />
          </StatGrid>

          <p>
            La revisión fue conducida durante dos días (16 y 17 de agosto de 2026). Se realizaron búsquedas en inglés y español en bases de datos como PubMed, Cochrane Library, Campbell Collaboration, 3ie/UNICEF Innocenti, Google Scholar, LILACS, SciELO, EBSCOhost, y fuentes institucionales (Banco Mundial, UNESCO, INEE).
          </p>
          
          <p>
            La base de evidencia resultante está compuesta por tres meta-análisis que sintetizan más de <span className="stat-inline">11,000</span> participantes, 18 revisiones sistemáticas, 19 guías institucionales, y 54 estudios primarios. Un total de 28 textos completos fueron analizados en profundidad (15 guías y 13 artículos).
          </p>

          <DataTable
            caption="Composición de la base de evidencia"
            headers={["Tipo de recurso", "Cantidad"]}
            rows={[
              ["Meta-análisis", "9"],
              ["Revisiones sistemáticas", "26"],
              ["Guías y protocolos institucionales", "24"],
              ["Estudios primarios (cuasi-experimentales + cualitativos)", "52"],
              ["Reportes y herramientas", "7"],
            ]}
          />
        </div>
      </section>

      {/* Nivel 3: Limitaciones */}
      <section id="limitaciones" style={{ scrollMarginTop: "150px" }} className="py-8 border-t border-[var(--border)]">
        <SectionHeader eyebrow="Transparencia" title="Limitaciones del estudio" />
        
        <div className="space-y-6 text-[15px] leading-relaxed text-muted mt-8">
          <KeyMessage>
            Al tratarse de una revisión rápida conducida en dos días, esta guía no alcanza el rigor metodológico de una revisión sistemática formal. No sustituye un análisis clínico exhaustivo, pero ofrece la mejor evidencia disponible para orientar la respuesta inicial.
          </KeyMessage>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 bg-surface border border-border rounded-xl shadow-sm">
              <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
                Sesgo de idioma
              </h4>
              <p className="text-sm">La revisión priorizó fuentes en inglés y español, excluyendo posibles experiencias locales documentadas en otros idiomas (japonés, turco, nepalí) que no han sido traducidas o indexadas internacionalmente.</p>
            </div>
            
            <div className="p-6 bg-surface border border-border rounded-xl shadow-sm">
              <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                Alcance de búsqueda
              </h4>
              <p className="text-sm">No se realizaron búsquedas formales exhaustivas en PsycINFO, Scopus ni ERIC debido a la restricción de tiempo. Las cadenas de búsqueda para estas bases fueron preparadas y están disponibles para futuras iteraciones.</p>
            </div>
            
            <div className="p-6 bg-surface border border-border rounded-xl shadow-sm">
              <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                Heterogeneidad
              </h4>
              <p className="text-sm">Algunos meta-análisis incluidos presentan heterogeneidad elevada (I² superior al 90%), lo que obliga a interpretar los tamaños de efecto agregados con cautela extrema y adaptarlos siempre al contexto particular.</p>
            </div>
            
            <div className="p-6 bg-surface border border-border rounded-xl shadow-sm">
              <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                Transferibilidad
              </h4>
              <p className="text-sm">Se requiere un análisis empírico independiente para evaluar cómo la enorme capacidad instalada en Colombia por décadas de conflicto armado (ej. PAPSIVI) se transfiere eficientemente a la atención psicosocial post-desastre natural.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="citar" style={{ scrollMarginTop: "150px" }} className="py-8 border-t border-[var(--border)]">
        <SectionHeader eyebrow="Referencia" title="Cómo citar" />
        <div className="mt-8">
          <Callout type="info" title="Cita APA 7">
            <p className="font-serif">
              Belalcázar Correa, M. (2026). <em>Respuesta psicosocial y educativa en contextos
              escolares post-terremoto: Guía basada en evidencia</em>. CIDEAS, Facultad de Psicología,
              Universidad del Valle. https://reconstruir-psi.vercel.app
            </p>
          </Callout>
        </div>
      </section>
    </div>
  );
}
