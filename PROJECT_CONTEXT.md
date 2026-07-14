# Project Context - seezamonline

> Created: July 12, 2026
> Purpose: save project context for quick recovery

---

## Structure

```
seezamonline/
+-- .github/workflows/ci.yml      # GitHub Actions - deploy to GitHub Pages
+-- public/
|   +-- 404.html                   # Fallback for hash routing
|   +-- favicon.svg                # SVG favicon
|   +-- .nojekyll                  # Disable Jekyll
|   +-- robots.txt
|   +-- test.txt
+-- src/
|   +-- main.tsx                   # Entry point
|   +-- App.tsx                    # Routing (HashRouter)
|   +-- assets/
|   |   +-- hero-image.jpg
|   +-- components/
|   |   +-- Header.tsx             # Header with navigation
|   |   +-- HeroSection.tsx        # Hero section
|   |   +-- ServicesSection.tsx    # Services section
|   |   +-- ContactSection.tsx     # Contact section
|   |   +-- Footer.tsx             # Footer
|   |   +-- NavLink.tsx            # Navigation link component
|   |   +-- ui/                    # shadcn/ui components
|   +-- pages/
|       +-- Index.tsx              # Home page
|       +-- TelegramBots.tsx       # Telegram Bots page
|       +-- MiniApps.tsx           # Mini Apps page
|       +-- WebApps.tsx            # Web Apps page
|       +-- AIAutomation.tsx       # AI Automation page
|       +-- CloudHosting.tsx       # Cloud Hosting page
|       +-- VPSHosting.tsx         # VPS Hosting page
|       +-- NotFound.tsx           # 404 page
+-- vite.config.ts                 # Vite + React SWC + base: ./
+-- tailwind.config.*              # Tailwind + shadcn/ui
+-- package.json
```

## Tech Stack

- **React** + **Vite** + **TypeScript**
- **Tailwind CSS** + **shadcn/ui**
- **Framer Motion** — animations
- **Lucide React** — icons
- **React Router** — HashRouter (for GitHub Pages)
- **GitHub Pages** — hosting

## Deploy

### GitHub Actions (.github/workflows/ci.yml)

Pipeline:
1. `npm ci` — install dependencies
2. `npm run build` — production build
3. Commit to `gh-pages` branch
4. Deploy to GitHub Pages

### Key decisions

| Decision | Reason |
|----------|--------|
| `base: "./"` in vite.config.ts | Relative paths for GitHub Pages |
| HashRouter instead of BrowserRouter | GitHub Pages compatibility |
| `public/404.html` | Fallback for hash routing |
| `.nojekyll` | Disable Jekyll |
| Port 8080 | Dev server port |

## Recent changes

Last commit: **d837a0a** — `fix: removed AI Developer badge from HeroSection`

| # | Hash | Description |
|---|------|-------------|
| 1 | d837a0a | Removed AI Developer badge from HeroSection |
| 2 | da009a1 | Updated favicon to SVG version |
| 3 | 48f1a19 | Removed confusing ./services button from HeroSection |
| 4 | f2ff7df | Simplified header navigation |
| 5 | 409efaa | Header navigation links work on all pages |
| 6 | aabf6a8 | Improved navigation links for all pages |
| 7 | 19b5203 | Updated GitHub Actions workflow (permissions) |
| 8 | e0b8cca | Improved 404.html redirect for hash routes |
| 9 | a6645f3 | Switched to HashRouter for GitHub Pages |
| 10 | f06ea4c | Relative base path for GitHub Pages |

## Current state

- **Branch:** `main` (synced with `origin/main`)
- **Last change:** cleaned HeroSection - removed AI Developer badge
- **Site:** deployed to **seezam.online** via GitHub Pages
- **Dev server:** port 8080

## Remembered context

- **HeroSection:** clean title `seezam.online`, subtitle about Telegram bots/miniprograms/web services/AI automation, CTA button "Связаться" → `https://t.me/seezam`, hero image, stats (50+ projects, 3+ years experience, 24/7 support)
- **Header:** simplified navigation, works on all pages
- **8 pages:** Index, TelegramBots, MiniApps, WebApps, AIAutomation, CloudHosting, VPSHosting, NotFound
- All pages use shared Header/Footer

## Commands

```bash
npm run dev       # Start dev server (port 8080)
npm run build     # Production build
npm run preview   # Preview production build
```

## Quick start on return

1. `cd /home/al/dev/seezamonline`
2. `git status` — check current state
3. `git log --oneline -5` — recent commits
4. `npm run dev` — start dev server
5. Open `http://localhost:8080`

---

*This file was created to preserve project context.*
