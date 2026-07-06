# Portfolio Revamp

## Goal
Modernise the portfolio to align with current industry standards: replace the deprecated Create React App build tool with Vite, introduce Tailwind CSS as the styling system, and deliver a more polished UI/UX with a clean & minimal aesthetic.

## Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Build tool | Vite | CRA is unmaintained; Vite starts in <1s and has active support |
| Styling | Tailwind CSS | Replaces 10 scattered plain CSS files with a single design system |
| Typography | Inter (Google Fonts) | Industry-standard humanist sans-serif |
| Design aesthetic | Clean & Minimal | White/near-white backgrounds, one accent color, subtle fade animations |
| Dark mode | Class strategy (Tailwind) | User preference persisted to localStorage |
| Icons | react-icons | Fixes broken Font Awesome icons (CDN was never added) |
| Animations | framer-motion | Page transitions + animated hero role titles |

## New Features

- Dark / light mode toggle (all pages, persisted)
- Active nav link highlighting
- Smooth page-to-page fade transitions
- Animated role titles on the Home page hero
- Responsive project grid (3 col → 2 col → 1 col)
- Blog cover images from Medium RSS feed

## Bug Fixes

- Font Awesome icons not rendering on Contact page
- Footer `position: fixed` overlapping page content
- Blog page missing heading
- About page hardcoded top padding tied to fixed footer

## User Stories

See [user-stories.md](./user-stories.md) for the full list with acceptance criteria. Stories are ordered for delivery: project structure and package changes (US-001 to US-003) first, then the UI/UX stories (US-004 onward).
