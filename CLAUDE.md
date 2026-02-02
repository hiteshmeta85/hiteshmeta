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

### Routing

App Router. Pages live in `src/app/` as server components. Explore the directory to discover routes.

### Data Layer

Static data as typed TypeScript objects in `src/lib/`. Blog content is MDX in `src/content/blogs/` with YAML frontmatter (`title`, `date`, `description`, `tags`, `published`). Posts with `published: false` are hidden.

### Components

Components in `src/components/`, organized by feature subdirectories. Client components (`"use client"`) are limited to interactive elements — pages and data-display components are server components.

### Styling

Tailwind CSS v4 via PostCSS. Custom component classes defined in `src/app/globals.css`. Font: Epilogue (Google Fonts).

Use the `cn()` utility from `src/lib/utils.ts` (clsx + tailwind-merge) for conditional/merged class names.

### MDX

Configured via `@next/mdx` in `next.config.mjs`. Custom MDX component overrides in `src/lib/mdx-components.tsx`.

## Code Conventions

- **Path alias:** `@/*` maps to `src/*`
- **Linting:** Biome handles linting + formatting. Prettier only for Tailwind class sorting (`prettier-plugin-tailwindcss` with `cn` and `clsx` functions).
- **Biome rules to know:** `noExplicitAny` (error), `noUnusedImports` (error), `noUnusedVariables` (error), accessibility rules enforced (useButtonType, useAltText)
- **Formatting:** Double quotes, semicolons, 2-space indent, ES5 trailing commas
- **TypeScript:** Strict mode with `noUncheckedIndexedAccess`
