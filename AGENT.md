# GroveUI - Agent Instructions

> **Project**: Grove Design System (`@groveengine/ui`)
> **Purpose**: Dedicated UI component library for the Grove platform

---

## Project Purpose

GroveUI is the centralized UI layer for the Grove ecosystem. It provides all UI components, design tokens, and styles used by GroveEngine and grove.place websites.

## Tech Stack

- **Language**: TypeScript
- **Framework**: SvelteKit 5 + Svelte 5
- **Styling**: Tailwind CSS 3.4+
- **Component Library**: bits-ui (headless components)
- **Package Manager**: pnpm
- **Deployment**: Cloudflare Pages (demo site)
- **Publishing**: npm (`@groveengine/ui`)

## Architecture Notes

- **Single package** with subpath exports (`/ui`, `/gallery`, `/editor`, `/gutter`)
- **Dual purpose**: npm library + demo documentation site
- **Built with `svelte-package`** for library distribution
- **Design tokens** in both TypeScript and Tailwind preset format

---

## Essential Instructions

### Core Behavior
- Do what has been asked; nothing more, nothing less
- ALWAYS prefer editing existing files to creating new ones
- NEVER proactively create documentation files unless explicitly requested

### Svelte 5 Patterns

**Always use Svelte 5 runes syntax:**

```svelte
<script lang="ts">
  // Props with $props()
  let { variant = 'default', children } = $props();

  // State with $state()
  let count = $state(0);

  // Derived with $derived()
  let doubled = $derived(count * 2);

  // Effects with $effect()
  $effect(() => {
    console.log('count changed:', count);
  });
</script>

<!-- Render children with @render -->
{@render children?.()}
```

### Component Patterns

**Wrapper component structure:**

```svelte
<script lang="ts">
  import { cn } from '$lib/utils/cn.js';
  import type { Snippet } from 'svelte';

  interface Props {
    variant?: 'default' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    class?: string;
    children?: Snippet;
  }

  let { variant = 'default', size = 'md', class: className, children }: Props = $props();
</script>

<button class={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}>
  {@render children?.()}
</button>
```

### File Organization

```
src/lib/
├── components/
│   ├── ui/           # Basic components (Button, Card, etc.)
│   ├── gallery/      # Media components
│   ├── editor/       # Editor components
│   ├── gutter/       # Gutter system
│   └── primitives/   # Low-level bits-ui wrappers
├── tokens/           # Design tokens
├── styles/           # CSS files
├── utils/            # Utilities (cn, etc.)
└── index.ts          # Main exports
```

### Export Conventions

Each category has an `index.ts` barrel export:

```typescript
// src/lib/components/ui/index.ts
export { default as Button } from './Button.svelte';
export { default as Card } from './Card.svelte';
// ...
```

---

## Git Workflow

**Conventional Commits Format:**
```bash
<type>: <brief description>

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

**Types:** `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `style`

---

## When to Read Guides

| Situation | Guide |
|-----------|-------|
| Svelte 5 patterns, runes syntax | `AgentUsage/svelte5_guide.md` |
| Cloudflare deployment | `AgentUsage/cloudflare_guide.md` |
| Git workflow | `AgentUsage/git_guide.md` |
| Testing components | `AgentUsage/testing_javascript.md` |
| Code style | `AgentUsage/code_style_guide.md` |

---

## Key Files

| File | Purpose |
|------|---------|
| `src/lib/index.ts` | Main package entry point |
| `src/lib/tailwind.preset.js` | Tailwind CSS preset with Grove tokens |
| `src/lib/utils/cn.ts` | Class name utility |
| `package.json` | Package config with subpath exports |

---

## Development Commands

```bash
# Development
pnpm dev              # Start dev server
pnpm build            # Build demo site
pnpm package          # Build npm package
pnpm check            # TypeScript check

# Testing
pnpm test             # Run tests
pnpm test:ui          # Run tests with UI
```

---

*Last updated: 2025-12-02*
*For: Claude Code CLI*
