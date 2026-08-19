# Reconstruir Psi

- **URL:** https://reconstruir-psi.vercel.app
- **Repo:** https://github.com/Mateob6/reconstruir-psi

## Qué es

Sitio web de divulgación basado en evidencia para la respuesta psicosocial y educativa en escuelas tras el terremoto M7.4 del 10 de agosto de 2026 en Colombia. Público: tomadores de decisiones, docentes, equipos psicosociales, secretarías de educación.

## Stack

- Next.js 16 + React 19 + TypeScript (static export)
- Tailwind CSS v4 (tokens semánticos via `@theme inline`, sin tailwind.config)
- Vercel (hosting estático, deploy automático con cada push a main)

## Desarrollo

```bash
npm run dev      # http://localhost:3000
npm run build    # genera /out (static export)
git push         # trigger deploy en Vercel
```

## Estructura

```
src/
├── app/
│   ├── globals.css              ← tokens de color (teal/cream/stone) + .stat-inline
│   ├── layout.tsx               ← root layout (sidebar + header + metadataBase)
│   ├── page.tsx                 ← redirect a /escuelas
│   ├── icon.svg                 ← favicon ψ teal
│   ├── opengraph-image.tsx      ← OG image 1200×630 (ImageResponse)
│   ├── sitemap.ts               ← 11 URLs
│   ├── robots.ts                ← allow all + sitemap
│   ├── escuelas/
│   │   ├── page.tsx             ← overview con grid de cards
│   │   ├── esta-semana/         ← primeros 7 días
│   │   ├── primer-mes/          ← modelo escalonado, capacitación
│   │   ├── primer-semestre/     ← recuperación de aprendizajes
│   │   ├── largo-plazo/         ← CSSF, escuelas seguras
│   │   ├── evidencia/           ← meta-análisis, effect sizes
│   │   ├── recursos/            ← programas, screening, marco normativo
│   │   └── experiencia/         ← Chile, Japón, Indonesia, Nepal, Ecuador
│   ├── referencias/             ← 128 recursos con DOI/URL
│   └── acerca/                  ← metodología (revisión y desarrollo), autoría
├── components/
│   ├── ui/                      ← Card, Badge, Button, cn
│   ├── layout/                  ← Sidebar, Header, ThemeToggle
│   └── content/                 ← componentes de contenido (ver abajo)
└── data/
    └── references.ts            ← 128 refs extraídas de revision.json
```

## Componentes de contenido

| Componente | Uso |
|-----------|-----|
| `PageHero` | Hero con título, subtítulo y stats |
| `Section` | Wrapper con h2 + spacing |
| `Callout` | Box info/warning/danger/success con icono |
| `KeyMessage` | Pull quote con borde accent (más ligero que Callout) |
| `DataTable` | Tabla responsive con header y caption |
| `DosDonts` | Dos columnas: Sí hacer / No hacer |
| `StatGrid` + `Stat` | Grid de estadísticas grandes |
| `Ref` | Cita numerada [N] con link a /referencias + tooltip |
| `Pyramid` | Pirámide escalonada (IASC, modelo de atención) |
| `HBar` | Barras horizontales comparativas (effect sizes) |
| `CaseCard` | Card de caso de estudio (país, magnitud, lección) |
| `Timeline` | Línea temporal vertical (fases, calendario) |
| `StepCards` | Cards numerados en grid (RAPID framework) |

## Design system

Adaptado de ecosistema-estadistica. Paleta warm cream/stone con acento teal (#0d9488). Tres superficies (background, surface, surface-raised), cinco tonos de estado. Dark mode via `data-theme` + `prefers-color-scheme`. Fuente Geist Sans.

## Contenido fuente

Las 13 síntesis temáticas en `~/Desktop/Proyectos/ayuda-terremoto/sintesis/` alimentan este sitio. El informe ejecutivo y la base de datos (129 recursos en `revision.json`) están en el mismo directorio.

## SEO

- Metadata por página (title template + description única)
- Open Graph + Twitter card (imagen 1200×630 auto-generada)
- Favicon SVG ψ en teal
- Sitemap XML (11 URLs) + robots.txt
- keywords, authors, metadataBase configurados

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
| Niveles | Diferenciación por nivel educativo (preescolar/primaria/secundaria) | Completada |
| Paleta | Carmesí Univalle (#9B1B30) reemplaza teal | Completada |
| Auditoría | Corregir atribuciones (R-021↔R-086 swap, R-008, R-113) + moderar lenguaje | Completada |
| UX | Trazabilidad KPIs, subtítulo ampliado, CTA fases | Completada |
| W3 | Área Trabajo (revisión de literatura + contenido) | Descartada |
| W6 | Iteración y pulido (Accesibilidad, logos, copy, pedagogía) | Completada |

## Notas de auditoría

- R-021 = Chile (Sommera 2013, 33 NNA, 9% TEPT). R-086 = Indonesia (Parrott 2025, 40 docentes)
- R-008 = Coombe 2015 (teacher-mediated SR, 18 intervenciones). No confundir con R-021
- R-113 = Nepal 7% caída rendimiento (earthquake exposure schooling). R-121 = ADB blog (15,000 TLS)
- Japón "4,000 escuelas" y "42.5%→100%" atribuidos a R-079 pero Uemoto es sobre TEPT, no infraestructura — pendiente fuente correcta
- g = −2.60 (no especialistas) tiene IC amplio: −4.88 a −0.32, I² = 97.77%
- Sección "Colombia cumple moderadores" removida de Evidencia por ser interpretación especulativa
