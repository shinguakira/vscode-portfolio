# TypeScript 7 (tsgo) upgrade — vscode-portfolio

Replaced classic `tsc` with the TypeScript 7 native (Go) compiler for the
standalone type-check script. TS 7 ships as `@typescript/native-preview` → the
`tsgo` binary.

## Repo shape

Next.js 16 App Router, **npm** (not pnpm), TypeScript 5.9.3. 79 `.ts`/`.tsx`
files, ~10.2k LOC. Already used the `@/*` path alias with **no `baseUrl`**, so
the TS5102 gotcha did not apply here.

## Result

| Compiler   | Mode                  | Time     |
| ---------- | --------------------- | -------- |
| tsc 5.9.3  | cold                  | ~4,460ms |
| tsc 5.9.3  | warm (incremental)    | ~2,310ms |
| tsgo 7.0   | full, every run       | ~340ms   |

≈6.8× faster than warm tsc, ≈13× vs cold (raw node binaries, npx overhead
excluded). tsgo keeps no `.tsbuildinfo` cache, so it's a full compile (~340ms)
every run. Both compilers exit 0 on identical code — parity verified.

## Changes

- `npm install -D @typescript/native-preview` (pinned exact
  `7.0.0-dev.20260707.2`).
- `package.json`:
  - `"type-check": "tsgo --noEmit"` (was `tsc --noEmit`)
  - added `"type-check:tsc": "tsc --noEmit"` fallback / cross-check
  - `"check"` now runs `tsgo --noEmit && oxfmt && eslint . --fix`
- `tsconfig.json`: added `"noUncheckedSideEffectImports": false`.

## Gotchas encountered

1. **TS5102 (`baseUrl` removed in TS 7)** — N/A here. This repo already imported
   via the `@/*` alias with no `baseUrl`. On a stock create-next-app repo you'd
   rewrite bare imports to `@/` (or add a `"*": ["./*"]` path mapping).
2. **TS2882 — global CSS side-effect import.** `app/layout.tsx:1`'s
   `import "./globals.css"` throws because tsgo defaults
   `noUncheckedSideEffectImports` to `true` (classic tsc defaults it `false`).
   Fixed with the one-line `"noUncheckedSideEffectImports": false`. Alternative:
   declare `module "*.css"` in a `.d.ts` (official TS 5.6 recommendation).

## Caveats

- tsgo is a dev preview (stable ~Q3 2026); `type-check:tsc` is kept as a
  cross-check.
- `next build` still uses its own bundled classic tsc, so CI build safety is
  unchanged — the speedup is only the standalone type-check step.
- Native Next integration tracked in vercel/next.js discussion #81472.

## Gates

prettier/oxfmt clean · `tsgo --noEmit` PASS (exit 0) · parity vs `tsc` PASS ·
`next build` validated.
