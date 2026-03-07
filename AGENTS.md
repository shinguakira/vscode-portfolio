# Agent Instructions

## Project Summary

A portfolio website that mimics the VS Code editor interface. Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4. Supports Japanese and English (next-intl). All portfolio data is static constants — no API calls or database.

### Architecture

- **Main page** (`app/[locale]/page.tsx`): Client-rendered VS Code layout with interactive tabs, sidebar, settings, and terminal
- **Screenshot pages** (`app/[locale]/screenshot/[section]/[theme]/page.tsx`): SSG-rendered isolated section previews (42 static pages)
- **Preview sections**: 8 features × 3 themes = 24 components in `components/preview/sections/<feature>/<theme>.tsx`
  - Features: profile, projects, skills, contact, strong-points, faq, experience, readme
  - Themes: modern, innovative, professional
- **VS Code chrome**: title-bar, activity-bar, tab-bar, status-bar, settings-panel in `components/vscode/`
- **Sidebar panels**: explorer, search, git-history, changelog, extensions in `components/sidebar/`
- **Career timeline**: `components/career-timeline/` with shared styles per theme
- **Contexts**: ThemeContext (color derivation), LocaleContext (ja/en)
- **Hooks**: use-settings (localStorage), use-tabs, use-file-search, use-responsive
- **Constants**: All data in `constants/` — portfolio-data, career-data, preview-data, vscode-config, tutorial-steps

### Testing

- Playwright visual regression: `npx playwright test` (168 snapshot tests across 4 viewports × 2 locales)
- Update baselines: `npx playwright test --update-snapshots`
- Snapshots stored in `e2e/__snapshots__/{locale}/{viewport}/`

## Coding Conventions

### No Barrel Exports

Do NOT create `index.ts` files that only re-export from other files.
Always import directly from the source file.

```ts
// BAD
import { Foo } from "@/components/bar" // via bar/index.ts
import { Foo } from "./sections" // via sections/index.ts

// GOOD
import { Foo } from "@/components/bar/foo" // direct to source
import { Foo } from "./sections/baz/foo" // direct to source
```

Why: Barrel files waste AI context, add indirection, and pollute search results without providing logic.

### File Size

Keep files under 300 lines. If a file grows beyond that, split it by feature or responsibility.

### Imports

Use the `@/` path alias for all imports outside the current directory.
Use relative paths (`./` or `../`) only for siblings or direct children within the same component directory.

### i18n

- **No JSON message files.** This project does NOT use `messages/ja.json` or `messages/en.json`.
- All translations are inline in components using `locale === "en" ? "English" : "日本語"` pattern via `useLocale()` hook.
- `next-intl` is used only for locale routing and detection, not for message translation.
- Do NOT create `messages/` directory or add `messages` to `getRequestConfig`.

### Components

- All components use `"use client"` directive (except SSG pages)
- Japanese UI text with English translation via locale context
- Theme colors derived from `adjustBrightness()` in `lib/color-utils.ts`
- Settings hydrated via useEffect to avoid SSR/client mismatch

### Quality

- Run `npm run check` before committing (tsc + oxfmt + eslint --fix)
- Run `npx knip` to detect unused code
- Run `npx playwright test` to verify visual regression
