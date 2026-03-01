# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PDF resume generator built with React and `@react-pdf/renderer`. Renders resume content into multiple PDF layout variants and deploys them to AWS S3. This is NOT a web app — it uses React purely for PDF generation.

## Commands

```bash
yarn install           # Install dependencies
yarn dev               # Start Vite dev server (opens browser, PDF preview via PDFViewer)
yarn checkTypes        # TypeScript type checking (tsc --noEmit)
yarn build             # Generate PDF files locally to dist/
yarn deploy            # Build PDFs + upload to S3
```

Dev server routes for viewing variants: `/`, `/plain-1`, `/plain-2`, `/fancy-1`

## Architecture

**Entry point**: `src/main.tsx` — uses simple path-based routing (switch on `window.location.pathname`) to render a `PDFViewer` wrapping the selected variant. No router library.

**Resume variants** (`src/variants/`): Three independent resume layouts, each a self-contained React-PDF `Document`:
- `plain-1/` — simple single-column
- `plain-2/` — single-column with dividers and icons
- `fancy-1/` — two-column sidebar layout (35%/65% split)

Each variant imports shared data and icons but defines its own styles and layout.

**Shared data** (`src/data/`): Resume content (contact info, about me, work experience) as typed constants. Work experience uses a nested Company → Positions → Details structure with TypeScript generics.

**Icons** (`src/icons/`): Custom SVG icon components built with `@react-pdf/renderer` Svg/Path primitives. Not standard React SVGs.

**Fonts** (`src/fonts/`): Open Sans and Poppins font families, registered globally via `@react-pdf/renderer` Font.register.

**Build script** (`scripts/build.ts`): Discovers variants in `src/variants/`, renders each to PDF via `renderToFile()`, optionally uploads to S3 (`upton-public-assets` bucket, `resumes/` prefix) when `--deploy` flag is passed.

## Key Conventions

- Path alias: `@/` maps to `src/`
- Shared design tokens (colors, typography sizes) are defined per-variant in their respective files, following a consistent pattern
- Brand color: `#04395E`
- ESLint config extends airbnb + airbnb-typescript

## CI/CD

GitHub Actions (`.github/workflows/build.yml`): On push to `main`, runs `npm run deploy` on a self-hosted runner with Node 20. AWS credentials come from GitHub Secrets.
