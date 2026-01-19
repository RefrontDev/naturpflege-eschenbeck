# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Naturpflege Eschenbeck is a Next.js 16 website for a professional landscaping and nature management business in the Altmühltal region (Bavaria, Germany). The site showcases services like orchard management, landscape care, and specialized ecological work.

## Tech Stack

- **Framework:** Next.js 16.1.3 with App Router
- **React:** 19.2.3 (React Server Components)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4 with CSS variables
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Maps:** Leaflet with react-leaflet (OpenStreetMap)
- **Component Variants:** class-variance-authority (CVA)

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

### App Router Structure (`src/app/`)
- `layout.tsx` - Root layout with Header/Footer, Montserrat font
- `page.tsx` - Home page with hero, services overview, CTA
- `leistungen/page.tsx` - Services page (Streuobst, Landschaftspflege, Spezialleistungen)
- `kontakt/page.tsx` - Contact form + Leaflet map (client component)
- `galerie/page.tsx` - Image gallery
- `ueber-mich/page.tsx` - About Markus page

### Components (`src/components/`)
- `layout/Header.tsx` - Sticky header with mobile hamburger menu (client component)
- `layout/Footer.tsx` - Multi-column footer
- `ui/Button.tsx` - CVA button with variants: default, outline, secondary, ghost, link
- `ui/Container.tsx` - Max-width container wrapper
- `Map.tsx` - Leaflet map (must be dynamically imported with `ssr: false`)
- `ServiceCard.tsx`, `ImageSlider.tsx`, `Lightbox.tsx` - Feature components

### Utilities (`src/lib/`)
- `utils.ts` - `cn()` helper for Tailwind class merging (clsx + tailwind-merge)

## Key Implementation Details

**Client Components:** Use `"use client"` directive for interactive components (Header, Map, contact form). The Map component requires dynamic import:
```typescript
const Map = dynamic(() => import("@/components/Map"), { ssr: false });
```

**Path Aliases:** Import with `@/` prefix (e.g., `@/components/ui/Button`)

**Color Palette (CSS Variables in globals.css):**
- `--background`: #F9F9F5 (Off-white)
- `--foreground`: #1C2D27 (Dark green)
- `--primary`: #2F5233 (Nature green)
- `--secondary`: #B19470 (Earth/wood tone)
- `--accent`: #A5B864 (Fresh green)

**Contact Form:** Currently has no submission handler - needs backend implementation.

## Deployment

Configured via `nixpacks.toml` for cloud platforms (Render, Railway):
- Node.js 22
- Install: `npm ci`
- Build: `npm run build`
- Start: `npm run start`
