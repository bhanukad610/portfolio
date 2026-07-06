# User Stories

Stories are ordered for delivery: project structure and package changes (US-001 to US-003) land first since every later story depends on the Vite + TypeScript + Tailwind toolchain being in place, followed by the UI/UX stories (US-004 onward).

## US-001 — Migrate Project Structure to Vite Conventions

**As a** developer working on the project,
**I want** the project layout restructured to match Vite's conventions,
**So that** the build tool works correctly and the codebase follows current best practices.

**Acceptance Criteria:**
- `index.html` is moved from `public/` to the project root and references `/src/main.tsx` via a module script
- An entry point `src/main.tsx` exists and renders the app into `#root`
- `vite.config.ts` is added with `base` set correctly for GitHub Pages (`/portfolio/`)
- Static assets that must remain in `public/` (JSON data files, images, `docs/`) are still served as-is and fetched via `import.meta.env.BASE_URL` instead of `process.env.PUBLIC_URL`
- All application source files (`src/**/*.js`) are converted to `.ts`/`.tsx`, with a `tsconfig.json` (`strict: true`) added; no CRA-only files (`reportWebVitals.js`, `setupTests.js`) remain in `src/`
- `.gitignore` is updated to ignore Vite's `dist/` output instead of `build/`

---

## US-002 — Update Dependencies for New Design System

**As a** developer working on the project,
**I want** `package.json` updated to add Tailwind CSS, framer-motion, and react-icons and remove `react-scripts` and other CRA-only packages,
**So that** the new styling and animation system can be used and the project carries no unused or deprecated dependencies.

**Acceptance Criteria:**
- `react-scripts` and any CRA-specific testing packages that are no longer needed are removed from `dependencies`
- `vite` and `@vitejs/plugin-react` are added as `devDependencies`
- `tailwindcss`, `postcss`, and `autoprefixer` are added as `devDependencies` with `tailwind.config.js` and `postcss.config.js` present and configured
- `typescript`, `@types/react`, and `@types/react-dom` are added as `devDependencies`
- `framer-motion` and `react-icons` are added as `dependencies`
- The CRA-specific `eslintConfig` entry in `package.json` is replaced with a flat-config `eslint.config.js` using `typescript-eslint`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`
- `package-lock.json` is regenerated cleanly with no leftover CRA-only entries
- `npm install` completes with no peer dependency errors

---

## US-003 — Fast Loads with Modern Tooling

**As a** developer working on the project,
**I want** the project to use Vite instead of Create React App,
**So that** the dev server starts quickly and the build toolchain is actively maintained.

**Acceptance Criteria:**
- `npm run dev` starts the dev server at `http://localhost:5173` in under 1 second
- `npm run build` produces a production build in the `dist/` directory
- `npm run deploy` deploys the `dist/` build to GitHub Pages correctly
- The deployed site at `https://bhanukad610.github.io/portfolio` works as expected
- `react-scripts` has been removed from the project
- `npx tsc -b --noEmit` (or equivalent build-time type check) passes with zero errors

---

## US-004 — Animated Hero on Home Page

**As a** visitor landing on the portfolio for the first time,  
**I want to** see an engaging hero section with animated role titles,  
**So that** I immediately understand who Bhanuka is and what he does.

**Acceptance Criteria:**
- Name "Bhanuka Dissanayake" and profile photo are displayed prominently
- Role titles cycle through at least 3 values (e.g. "Software Engineer", "Full-Stack Developer", "Problem Solver") with a smooth fade/slide animation
- A primary CTA button links to the About page
- A secondary CTA button links to the Projects page
- Hero is vertically centered and looks good on all screen sizes

---

## US-005 — Dark / Light Mode Toggle

**As a** visitor,  
**I want to** switch between dark and light themes,  
**So that** I can read comfortably in my preferred environment.

**Acceptance Criteria:**
- A toggle button (sun/moon icon) is visible in the header on all pages
- Clicking the toggle switches the entire site between dark and light mode instantly
- The selected preference is saved to `localStorage` and restored on next visit
- All pages — including Home, About, Projects, Resume, Blog, and Contact — respect the active theme
- Background, text, card surfaces, and navigation all adapt correctly to both themes

---

## US-006 — Active Nav Link Highlighted

**As a** visitor navigating the site,  
**I want to** see which page I'm currently on highlighted in the navigation,  
**So that** I always know where I am in the site.

**Acceptance Criteria:**
- The nav link matching the current route is visually distinct (e.g. different color, underline, or weight)
- The active state updates immediately when navigating to a new route
- Works correctly for all 6 routes: Home, About, Resume, Projects, Blog, Contact

---

## US-007 — Smooth Page Transitions

**As a** visitor clicking between pages,  
**I want to** see a smooth fade animation when navigating,  
**So that** the site feels modern and polished rather than a hard flash.

**Acceptance Criteria:**
- All route changes trigger a brief fade-out / fade-in animation
- Transitions complete within 300ms and do not feel sluggish
- No flash of unstyled or empty content during the transition
- Animation works on both desktop and mobile

---

## US-008 — Browse Projects in a Responsive Grid

**As a** visitor exploring Bhanuka's work,  
**I want to** see projects displayed in a grid layout,  
**So that** I can scan multiple projects at once rather than scrolling through a long single column.

**Acceptance Criteria:**
- Projects are shown in a 3-column grid on desktop (≥1024px)
- Grid collapses to 2 columns on tablet (768px–1023px) and 1 column on mobile (<768px)
- Each card displays: project title, organisation, technology tags, and description
- Cards have a hover state (subtle shadow lift or scale) indicating they are interactive
- All 9 existing projects are rendered

---

## US-009 — Footer Does Not Overlap Page Content

**As a** visitor reading any page,  
**I want** the footer to sit below the page content rather than covering it,  
**So that** I can read content near the bottom of the page without obstruction.

**Acceptance Criteria:**
- Footer is no longer `position: fixed`
- On short pages the footer is pushed to the bottom of the viewport (sticky footer behaviour)
- On long pages the footer appears naturally below all content
- Verified on: Home, About, Resume, Projects, Blog, Contact

---

## US-010 — Working Social Icons on Contact Page

**As a** visitor on the Contact page,  
**I want to** see recognisable GitHub and LinkedIn icons,  
**So that** I can quickly identify and click through to the right platform.

**Acceptance Criteria:**
- GitHub icon renders correctly next to the "GitHub" link
- LinkedIn icon renders correctly next to the "LinkedIn" link
- Icons are the correct brand icons (not generic placeholders)
- Icons scale appropriately on mobile

---

## US-011 — Blog Posts Show Cover Images

**As a** visitor reading the Blog page,  
**I want to** see a cover image for each Medium post,  
**So that** the page is visually engaging and I can quickly identify posts by their imagery.

**Acceptance Criteria:**
- If the Medium RSS feed provides a thumbnail URL for a post, the image is displayed at the top of the card
- If no thumbnail is available, the card degrades gracefully (no broken image icon)
- Images are responsive and do not overflow their card
- The "My Blog" page heading is present

---

## US-012 — Consistent Visual Language Site-Wide

**As a** visitor browsing multiple pages,  
**I want** the site to feel visually cohesive on every page,  
**So that** it presents a professional, considered impression.

**Acceptance Criteria:**
- Inter (or equivalent modern sans-serif) is used as the primary font across all pages
- A single accent color is consistently used for buttons, links, and highlights
- Spacing and card radius values are consistent across pages
- Typography scale (heading sizes, body sizes) is consistent across all pages
- No page feels visually out of place compared to the others
