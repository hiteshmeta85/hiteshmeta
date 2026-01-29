# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio site for Hitesh Meta (SDE II). Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4. Deployed on Vercel. All content is static — no database or API routes.

## Commands

```bash
bun dev              # Start dev server
bun run build        # Production build
bun run lint         # Lint with Biome
bun run lint:fix     # Auto-fix lint issues
bun run format       # Format with Biome + Prettier (Tailwind class sorting)
bun run check        # Biome check with auto-fix
```

No test framework is configured.

## Architecture

### Routing (App Router)

Routes: `/`, `/about`, `/experience`, `/skills`, `/links`, `/blogs`, `/blogs/[slug]`

Pages are in `src/app/`. Most pages are server components that render static data from `src/lib/` TypeScript modules.

### Data Layer

All data lives in `src/lib/` as typed TypeScript objects:
- `experience.ts` — work history (type `WorkExperience`)
- `skills.ts` — skills by category (type `Skill`, enum `Category`)
- `featuredProject.ts` — featured projects (type `FeaturedProject`)
- `config.ts` — site metadata, theme defaults, SEO config
- `navLinks.ts`, `socialLinks.ts` — navigation and social links

Blog content is markdown/MDX in `src/content/blogs/` with YAML frontmatter (title, date, description, tags, published). `src/lib/blogs.ts` handles file reading and slug generation. Posts with `published: false` are hidden.

### Components

- `src/components/Nav/` — Desktop sidebar (`Nav.tsx`) and mobile drawer (`MobileNav.tsx`), theme toggle
- `src/components/ui/` — ThemeProvider (next-themes wrapper), Toaster, SkipToContent
- `src/components/Experience/` — ExperienceTimeline
- Feature components at `src/components/` root: FeaturedSection, SkillsSection, Footer, JsonLd

Client components (`"use client"`) are limited to interactive elements (nav, theme toggle, toaster). Pages and data-display components are server components.

### Styling

Tailwind CSS v4 via PostCSS. Custom component classes (`.heading`, `.h1`-`.h6`, `.text`, `.link`, `.container`) defined in `src/app/globals.css`. Font: Epilogue (Google Fonts).

Use the `cn()` utility from `src/lib/utils.ts` (clsx + tailwind-merge) for conditional/merged class names.

### MDX

Configured via `@next/mdx` in `next.config.mjs`. Custom MDX component overrides in `src/lib/mdx-components.tsx`. Plugins: remark-gfm, rehype-highlight, rehype-slug.

## Code Conventions

- **Path alias:** `@/*` maps to `src/*`
- **Linting:** Biome handles linting + formatting. Prettier only for Tailwind class sorting (`prettier-plugin-tailwindcss` with `cn` and `clsx` functions).
- **Biome rules to know:** `noExplicitAny` (error), `noUnusedImports` (error), `noUnusedVariables` (error), accessibility rules enforced (useButtonType, useAltText)
- **Formatting:** Double quotes, semicolons, 2-space indent, ES5 trailing commas
- **TypeScript:** Strict mode with `noUncheckedIndexedAccess`
