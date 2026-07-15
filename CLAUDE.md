# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Run dev server at http://localhost:5173/portfolio/
npm run build      # Type-check (tsc -b) then production build to /dist
npm run preview    # Preview the production build locally
npm run deploy     # Build then deploy to GitHub Pages (gh-pages -d dist)
```

## Architecture

This is a React 18 + TypeScript (strict) single-page application built with Vite, deployed to GitHub Pages at `https://bhanukad610.github.io/portfolio`.

**Routing**: React Router v6 with routes for `/`, `/portfolio`, `/about`, `/resume`, `/projects`, `/blog`, and `/contact`. The `/portfolio` path aliases `/` to handle the GitHub Pages base path.

**Data pattern**: Content is stored as static JSON in `/public/` and fetched at runtime with `fetch(\`${import.meta.env.BASE_URL}filename.json\`)`, typed against interfaces in `src/types/`. This means updating content (projects, experience, bio) means editing the JSON files — no backend involved.

- `public/projects.json` — project list rendered on the Projects page (`src/types/project.ts`)
- `public/experience.json` — work history and education rendered on the Resume page (`src/types/resume.ts`)
- `public/aboutContent.json` — bio paragraphs rendered on the About page (`src/types/about.ts`)
- `public/docs/resume.pdf` — downloadable resume linked from the Contact page

**Styling**: Plain CSS with one file per component/page, co-located in `styles/` subdirectories (e.g. `src/pages/styles/About.css`, `src/components/styles/Header.css`). No CSS framework or preprocessor.

**Structure**:
- `src/components/` — shared UI (`Header`, `Footer`, `Project` card), all `.tsx`
- `src/pages/` — one file per route (`.tsx`), each with its own `styles/` subfolder
- `src/types/` — shared TypeScript interfaces for the JSON data sources and the Medium RSS response
- `public/` — static assets and JSON data files (authoritative source)
- `dist/` — production output (mirrors `public/` structure after `npm run build`)

**Deployment**: The `homepage` field in `package.json` is set to the GitHub Pages URL. `npm run deploy` runs the predeploy build then pushes to the `gh-pages` branch via the `gh-pages` package.

**Dos**: Always create a new branch for a development.

**Don'ts**: Do not run the dev server, build, or a browser to verify changes (no `npm run dev`/`preview`, no Playwright/chromium-cli, etc.). Only make code changes; leave verification to the user unless they explicitly ask for it.
