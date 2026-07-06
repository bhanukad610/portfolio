# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Run dev server at http://localhost:3000
npm run build      # Production build to /build
npm test           # Run tests in watch mode
npm run deploy     # Build then deploy to GitHub Pages (gh-pages -d build)
```

## Architecture

This is a React 18 single-page application (Create React App) deployed to GitHub Pages at `https://bhanukad610.github.io/portfolio`.

**Routing**: React Router v6 with routes for `/`, `/portfolio`, `/about`, `/resume`, `/projects`, `/blog`, and `/contact`. The `/portfolio` path aliases `/` to handle the GitHub Pages base path.

**Data pattern**: Content is stored as static JSON in `/public/` and fetched at runtime with `fetch(process.env.PUBLIC_URL + '/filename.json')`. This means updating content (projects, experience, bio) means editing the JSON files — no backend involved.

- `public/projects.json` — project list rendered on the Projects page
- `public/experience.json` — work history and education rendered on the Resume page
- `public/aboutContent.json` — bio paragraphs rendered on the About page
- `public/docs/resume.pdf` — downloadable resume linked from the Contact page

**Styling**: Plain CSS with one file per component/page, co-located in `styles/` subdirectories (e.g. `src/pages/styles/About.css`, `src/components/styles/Header.css`). No CSS framework or preprocessor.

**Structure**:
- `src/components/` — shared UI (`Header`, `Footer`, `Project` card)
- `src/pages/` — one file per route, each with its own `styles/` subfolder
- `public/` — static assets and JSON data files (authoritative source)
- `build/` — production output (mirrors `public/` structure after `npm run build`)

**Deployment**: The `homepage` field in `package.json` is set to the GitHub Pages URL. `npm run deploy` runs the predeploy build then pushes to the `gh-pages` branch via the `gh-pages` package.

**Dos**: Always create a new branch for a development.
