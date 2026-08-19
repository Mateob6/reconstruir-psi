# Reconstruir Psi

- **URL:** https://reconstruir-psi.vercel.app
- **Repo:** https://github.com/Mateob6/reconstruir-psi

## Qué es

Plataforma de guías basadas en evidencia para la recuperación post-terremoto en Colombia (M7.4, agosto 2026). Público amplio: familias, docentes, directivos, profesionales, organizaciones comunitarias, medios. Propósito dual: traducir evidencia en acción + centralizar recursos dispersos.

## Stack

- Next.js 16 + React 19 + TypeScript (static export)
- Tailwind CSS v4 (tokens semánticos via `@theme inline`, sin tailwind.config)
- Vercel (hosting estático, deploy automático con cada push a main)
- Paleta carmesí Univalle (#9B1B30) + warm cream/stone

## Desarrollo

```bash
npm run dev      # http://localhost:3000
npm run build    # genera /out (static export)
git push         # trigger deploy en Vercel
```

## Arquitectura de navegación

| Nivel | Componente | Qué muestra |
|-------|-----------|-------------|
| Global nav | Header | Logo → `/`, [Escuelas, Acerca de], logos institucionales, theme toggle |
| Section nav | TopTimeline | Fases temporales (solo en /escuelas/*) |
| Floating nav | FloatingNav | Evidencia, Recursos, Experiencia, Referencias (panel derecho desktop, FAB+bottom sheet mobile) |
| Page nav | StickySectionNav | Anchors intra-página (scroll spy) |

## Estructura

```
src/
├── app/
│   ├── globals.css              ← tokens carmesí/cream/stone + .stat-inline
│   ├── layout.tsx               ← Header + TopTimeline + FloatingNav + Footer
│   ├── page.tsx                 ← HOME: logos + hero horizontal + card Escuelas + autoría
│   ├── icon.svg                 ← favicon ψ carmesí
│   ├── opengraph-image.tsx      ← OG image 1200×630
│   ├── sitemap.ts               ← 12 URLs
│   ├── robots.ts                ← allow all + sitemap
│   ├── escuelas/
│   │   ├── page.tsx             ← landing: KPIs + timeline fases + soporte
│   │   ├── esta-semana/         ← primeros 7 días + LevelTabs por nivel educativo
│   │   ├── primer-mes/          ← modelo escalonado + programas por nivel
│   │   ├── primer-semestre/     ← recuperación de aprendizajes, RAPID
│   │   ├── largo-plazo/         ← CSSF, escuelas seguras
│   │   ├── evidencia/           ← meta-análisis, effect sizes, moderadores
│   │   ├── recursos/            ← programas, screening, marco normativo
│   │   └── experiencia/         ← Chile, Japón, Indonesia, Nepal, Ecuador
│   ├── referencias/             ← 128 recursos con DOI/URL
│   └── acerca/                  ← metodología, autoría, logos institucionales
├── components/
│   ├── ui/                      ← Card, Badge, Button, cn
│   ├── layout/                  ← Header, TopTimeline, FloatingNav, Footer, ThemeToggle
│   └── content/                 ← ver componentes abajo
└── data/
    └── references.ts            ← 128 refs extraídas de revision.json
```

## Componentes de contenido

| Componente | Uso |
|-----------|-----|
| `SectionHeader` | Eyebrow + título de sección (estilo Gemini) |
| `StickySectionNav` | Nav sticky intra-página con scroll spy |
| `Callout` | Box info/warning/danger/success |
| `KeyMessage` | Pull quote con borde accent |
| `DataTable` | Tabla responsive con header y caption |
| `DosDonts` | Dos columnas: Sí hacer / No hacer |
| `StatGrid` + `Stat` | Grid de estadísticas grandes con hover |
| `Ref` | Cita numerada [N] → /referencias#R-N + tooltip |
| `Pyramid` | Pirámide escalonada (IASC, modelo de atención) |
| `HBar` / `EffectBar` | Barras horizontales comparativas |
| `CaseCard` | Card de caso de estudio (país, magnitud, lección) |
| `Timeline` | Línea temporal vertical (fases, calendario) |
| `StepCards` | Cards numerados en grid (RAPID framework) |
| `LevelTabs` | Tabs preescolar/primaria/secundaria |
| `Accordion` | Secciones expandibles |
| `GridCards` | Grid de cards enlazables |

## Contenido fuente

Las 13 síntesis temáticas en `~/Desktop/Proyectos/ayuda-terremoto/sintesis/` alimentan este sitio. El informe ejecutivo y la base de datos (129 recursos en `revision.json`) están en el mismo directorio.

## Sistema de referencias

128 recursos incluidos, extraídos de revision.json. Componente `Ref` renderiza superíndice [N] con link a `/referencias#R-N` y tooltip "Autor (Año)". ~80 citas inline en 8 páginas.

## Fases

| Fase | Descripción | Estado |
|------|-------------|--------|
| W1 | Scaffold, design system, layout, rutas placeholder | Completada |
| W2 | Contenido Escuelas (8 páginas desde 4 fuentes) | Completada |
| W4 | SEO + Open Graph + favicon + sitemap | Completada |
| W5 | Repo GitHub + Deploy Vercel | Completada |
| A | Sistema de referencias (128 refs + ~80 citas inline) | Completada |
| B1 | Presentación de texto (strong, h3, KeyMessage, stat-inline) | Completada |
| B2 | Componentes visuales (Pyramid, HBar, CaseCard, Timeline, StepCards) | Completada |
| C | Enlaces descargables (DOIs + URLs en Recursos) | Completada |
| Niveles | Diferenciación por nivel educativo (LevelTabs) | Completada |
| Paleta | Carmesí Univalle (#9B1B30) reemplaza teal | Completada |
| Auditoría | Corregir atribuciones + moderar lenguaje | Completada |
| UX | Trazabilidad KPIs, subtítulo ampliado, CTA fases | Completada |
| Home | Home page como puerta de entrada (horizontal, logos, card Escuelas) | Completada |
| Nav | Reestructurar: header → áreas, FloatingNav → sección, FAB mobile | Completada |
| W6 | Iteración y pulido (Accesibilidad, logos, copy, pedagogía) | Completada |
| Glosario | Sistema de glosario contextual: ~99 entradas, componente Term con popover | Completada |

## Sistema de glosario

Componente `<Term>` que hace accesibles los términos técnicos para público no especializado.

**Archivos clave:**
- `src/data/glossary.ts` — Diccionario (~99 entradas) con `sigla?`, `nombre`, `definicion`
- `src/components/content/term.tsx` — Client component con portal + `position: fixed` popover
- `src/app/globals.css` — Estilos de flechita del popover (`.term-arrow-down`, `.term-arrow-up`)

**Uso:**
```tsx
// Con sigla: renderiza "texto llano (SIGLA)" con popover en la sigla
<Term id="tept">reacciones de estrés prolongadas</Term>

// Sin sigla: renderiza "texto" con subrayado punteado y popover
<Term id="tamizaje">evaluación rápida</Term>
```

**Reglas de aplicación:**
1. Solo la PRIMERA ocurrencia por página usa `<Term>`
2. Repeticiones posteriores: lenguaje llano sin componente
3. Dentro de strings (props, DataTable, Pyramid): expandir siglas inline, no `<Term>`
4. Términos auto-explicados: solo envolver en `<Term>` sin reescribir

**Categorías:** siglas institucionales, marcos/frameworks, términos clínicos, estadísticos, programas/intervenciones, instrumentos de evaluación, pedagógicos, normativa.

## Notas de auditoría

- R-021 = Chile (Sommera 2013, 33 NNA, 9% TEPT). R-086 = Indonesia (Parrott 2025, 40 docentes)
- R-008 = Coombe 2015 (teacher-mediated SR, 18 intervenciones). No confundir con R-021
- R-113 = Nepal 7% caída rendimiento. R-121 = ADB blog (15,000 TLS)
- Japón "4,000 escuelas" y "42.5%→100%" atribuidos a R-079 pero Uemoto es sobre TEPT — pendiente fuente correcta
- g = −2.60 (no especialistas) tiene IC amplio: −4.88 a −0.32, I² = 97.77%
- Sección "Colombia cumple moderadores" removida de Evidencia por ser interpretación especulativa
- EBSCOhost SÍ se buscó (SL-022, SL-023, 347 resultados). Solo Scopus queda sin buscar independientemente
