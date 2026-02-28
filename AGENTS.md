# Agent Instructions

## No Barrel Exports

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

## File Size

Keep files under 300 lines. If a file grows beyond that, split it by feature or responsibility.

## Imports

Use the `@/` path alias for all imports outside the current directory.
Use relative paths (`./` or `../`) only for siblings or direct children within the same component directory.
