# Reconstruir Psi

## Qué es

Sitio web de divulgación basado en evidencia para la respuesta psicosocial y educativa en escuelas tras el terremoto M7.4 del 10 de agosto de 2026 en Colombia. Público: tomadores de decisiones, docentes, equipos psicosociales, secretarías de educación.

## Stack

- Next.js 16 + React 19 + TypeScript (static export)
- Tailwind CSS v4 (tokens semánticos via `@theme inline`, sin tailwind.config)
- Vercel (hosting estático)

## Desarrollo

```bash
npm run dev      # http://localhost:3000
npm run build    # genera /out (static export)
```

## Estructura

```
src/
├── app/
│   ├── globals.css              ← tokens de color (teal/cream/stone)
│   ├── layout.tsx               ← root layout (sidebar + header)
│   ├── page.tsx                 ← redirect a /escuelas
│   ├── escuelas/
│   │   ├── page.tsx             ← overview con grid
│   │   ├── esta-semana/
│   │   ├── primer-mes/
│   │   ├── primer-semestre/
│   │   ├── largo-plazo/
│   │   ├── evidencia/
│   │   ├── recursos/
│   │   └── experiencia/
│   ├── trabajo/                 ← "Próximamente"
│   └── acerca/
└── components/
    ├── ui/                      ← Card, Badge, Button, cn
    └── layout/                  ← Sidebar, Header, ThemeToggle
```

## Design system

Adaptado de ecosistema-estadistica. Paleta warm cream/stone con acento teal (#0d9488). Tres superficies (background, surface, surface-raised), cinco tonos de estado. Dark mode via `data-theme` + `prefers-color-scheme`. Fuente Geist Sans.

## Contenido fuente

Las 13 síntesis temáticas en `~/Desktop/Proyectos/ayuda-terremoto/sintesis/` alimentan este sitio. El informe ejecutivo y la base de datos (129 recursos) están en el mismo directorio.

## Fases

| Fase | Descripción | Estado |
|------|-------------|--------|
| W1 | Scaffold, design system, layout, rutas placeholder | En curso |
| W2 | Contenido Escuelas (transformar síntesis → páginas) | Pendiente |
| W3 | Área Trabajo (revisión + contenido) | Pendiente |
| W4 | Acerca de + SEO + Open Graph | Pendiente |
| W5 | Deploy Vercel + pulido responsive | Pendiente |
| W6 | Iteración y contenido adicional | Pendiente |

## Deploy

```bash
npm run build    # genera /out
# Vercel despliega automáticamente desde el repo
```

Repo GitHub: mateob6/reconstruir-psi (pendiente creación)
