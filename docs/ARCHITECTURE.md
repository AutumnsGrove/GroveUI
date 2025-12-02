# GroveUI - Architecture Guide

## Overview

This document explains the architecture of GroveUI and how it fits into the Grove ecosystem.

---

## System Context

```
┌─────────────────────────────────────────────────────────────────┐
│                        Grove Ecosystem                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐       │
│  │  GroveUI    │     │ GroveEngine │     │ grove.place │       │
│  │             │────▶│             │────▶│   sites     │       │
│  │ @groveengine│     │ @groveengine│     │             │       │
│  │ /ui         │     │ /engine     │     │ (deployed)  │       │
│  └─────────────┘     └─────────────┘     └─────────────┘       │
│        │                    │                   │               │
│        │                    │                   │               │
│        ▼                    ▼                   ▼               │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                   Cloudflare Platform                    │   │
│  │  Workers │ Pages │ D1 │ R2 │ KV                         │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Component Responsibilities

| Package | Responsibility | Examples |
|---------|---------------|----------|
| **GroveUI** | All user interface | Buttons, forms, galleries, layouts |
| **GroveEngine** | Business logic & data | Auth, payments, markdown, database |
| **grove.place** | Deployed websites | Multi-tenant blogs |

---

## Package Structure

```
@groveengine/ui (GroveUI)
├── /ui              → Basic components (Button, Card, Input...)
├── /gallery         → Media components (ImageGallery, Lightbox...)
├── /editor          → Content tools (MarkdownEditor, GutterManager)
├── /gutter          → Annotation system (ContentWithGutter, TOC...)
├── /primitives/*    → Low-level bits-ui wrappers
├── /tokens          → Design tokens (colors, typography...)
├── /utils           → Helper functions (cn...)
├── /styles          → CSS files
└── /tailwind        → Tailwind preset
```

---

## Directory Layout

```
GroveUI/
├── src/
│   ├── lib/                          # Published package
│   │   ├── components/
│   │   │   ├── ui/                   # Basic UI components
│   │   │   │   ├── Button.svelte
│   │   │   │   ├── Card.svelte
│   │   │   │   └── index.ts          # Barrel export
│   │   │   ├── gallery/              # Media components
│   │   │   │   ├── ImageGallery.svelte
│   │   │   │   └── index.ts
│   │   │   ├── editor/               # Editor components
│   │   │   │   ├── MarkdownEditor.svelte
│   │   │   │   └── index.ts
│   │   │   ├── gutter/               # Gutter system
│   │   │   │   ├── ContentWithGutter.svelte
│   │   │   │   └── index.ts
│   │   │   └── primitives/           # bits-ui wrappers
│   │   │       ├── button/
│   │   │       ├── dialog/
│   │   │       └── ...
│   │   ├── tokens/                   # Design tokens
│   │   │   ├── colors.ts
│   │   │   ├── typography.ts
│   │   │   └── index.ts
│   │   ├── styles/                   # CSS
│   │   │   ├── grove.css
│   │   │   └── tokens.css
│   │   ├── utils/                    # Utilities
│   │   │   ├── cn.ts
│   │   │   └── index.ts
│   │   ├── tailwind.preset.js        # Tailwind config
│   │   └── index.ts                  # Main entry
│   │
│   └── routes/                       # Demo site (not published)
│       ├── +layout.svelte
│       ├── +page.svelte
│       └── components/
│           └── [category]/
│               └── [component]/
│
├── docs/                             # Documentation
├── static/                           # Static assets
├── dist/                             # Built package (generated)
│
├── package.json                      # Package config
├── svelte.config.js                  # SvelteKit config
├── tailwind.config.js                # Tailwind config
├── vite.config.ts                    # Vite config
└── wrangler.toml                     # Cloudflare config
```

---

## Data Flow

### Component Import Flow

```
Consumer App
     │
     ▼
┌─────────────────────────────────────────────┐
│  import { Button } from '@groveengine/ui'   │
└─────────────────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────────────────┐
│  dist/index.js                              │
│  └── export { Button } from './components/  │
│      ui/index.js'                           │
└─────────────────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────────────────┐
│  dist/components/ui/Button.svelte           │
│  └── Compiled Svelte component              │
└─────────────────────────────────────────────┘
```

### Build Flow

```
Source Files                    Build Process                    Output
─────────────────────────────────────────────────────────────────────────

src/lib/**/*.svelte    ──┐
src/lib/**/*.ts        ──┼──▶  svelte-package  ──▶  dist/
src/lib/**/*.css       ──┘                          ├── index.js
                                                    ├── index.d.ts
                                                    └── components/...

src/routes/**/*        ──────▶  vite build    ──▶  .svelte-kit/cloudflare/
                                                    └── (demo site)
```

---

## Component Patterns

### Wrapper Component Pattern

Most GroveUI components wrap bits-ui primitives with Grove styling:

```svelte
<!-- Button.svelte -->
<script lang="ts">
  import { cn } from '$lib/utils/cn.js';
  import { Button as ButtonPrimitive } from '$lib/components/primitives/button';
  import type { Snippet } from 'svelte';

  interface Props {
    variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    class?: string;
    children?: Snippet;
  }

  let {
    variant = 'default',
    size = 'md',
    disabled = false,
    class: className,
    children,
    ...restProps
  }: Props = $props();

  const baseStyles = 'inline-flex items-center justify-center rounded-grove font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grove-500';

  const variants = {
    default: 'bg-grove-600 text-white hover:bg-grove-700',
    secondary: 'bg-cream-400 text-bark hover:bg-cream-500',
    outline: 'border border-bark-200 bg-transparent hover:bg-cream-100',
    ghost: 'bg-transparent hover:bg-cream-100',
    destructive: 'bg-destructive text-white hover:bg-destructive/90',
  };

  const sizes = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-base',
    lg: 'h-12 px-6 text-lg',
  };
</script>

<ButtonPrimitive.Root
  class={cn(baseStyles, variants[variant], sizes[size], className)}
  {disabled}
  {...restProps}
>
  {@render children?.()}
</ButtonPrimitive.Root>
```

### Compound Component Pattern

Complex components use compound patterns with multiple exports:

```typescript
// components/primitives/dialog/index.ts
export { Root } from './dialog-root.svelte';
export { Trigger } from './dialog-trigger.svelte';
export { Content } from './dialog-content.svelte';
export { Header } from './dialog-header.svelte';
export { Footer } from './dialog-footer.svelte';
export { Title } from './dialog-title.svelte';
export { Description } from './dialog-description.svelte';
export { Close } from './dialog-close.svelte';
```

Usage:
```svelte
<script>
  import * as Dialog from '@groveengine/ui/primitives/dialog';
</script>

<Dialog.Root>
  <Dialog.Trigger>Open</Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Header>
      <Dialog.Title>Title</Dialog.Title>
    </Dialog.Header>
    <!-- content -->
  </Dialog.Content>
</Dialog.Root>
```

---

## Styling Architecture

### Design Token Hierarchy

```
Tailwind Preset (tailwind.preset.js)
     │
     ├── Colors ──────────▶ grove.*, bark.*, cream.*
     ├── Typography ──────▶ font-serif, font-sans, text-display
     ├── Spacing ─────────▶ spacing-18, spacing-22, spacing-30
     ├── Effects ─────────▶ shadow-grove-*, rounded-grove-*
     └── Animations ──────▶ animate-bloom, animate-leaf-sway
```

### CSS Layer Structure

```css
/* app.css */
@tailwind base;      /* Reset + base styles */
@tailwind components; /* Component classes like .grove-prose */
@tailwind utilities;  /* Utility classes */
```

### Class Name Utility

The `cn()` function combines clsx and tailwind-merge:

```typescript
import { cn } from '@groveengine/ui/utils';

// Combines classes, resolves conflicts
cn('px-2 py-1', 'px-4')
// → 'py-1 px-4' (px-4 wins over px-2)

// Conditional classes
cn('base-class', isActive && 'active-class', className)
```

---

## Testing Strategy

### Component Testing

```typescript
// Button.test.ts
import { render, fireEvent } from '@testing-library/svelte';
import { Button } from '$lib/components/ui';

describe('Button', () => {
  it('renders children', () => {
    const { getByText } = render(Button, { props: { children: 'Click me' } });
    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('applies variant classes', () => {
    const { container } = render(Button, { props: { variant: 'secondary' } });
    expect(container.firstChild).toHaveClass('bg-cream-400');
  });

  it('handles click events', async () => {
    const onClick = vi.fn();
    const { getByRole } = render(Button, { props: { onclick: onClick } });
    await fireEvent.click(getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });
});
```

### Visual Regression

For the demo site, we can use:
- Percy or Chromatic for visual snapshots
- Playwright for E2E testing

---

## Performance Considerations

### Bundle Size

- **Tree-shakeable** - Import only what you use
- **No runtime CSS-in-JS** - Tailwind compiles to static CSS
- **Code splitting** - Category imports for smaller bundles

```typescript
// Full bundle (~50KB estimated)
import { Button, Card, ImageGallery, ContentWithGutter } from '@groveengine/ui';

// Smaller bundle (~10KB)
import { Button, Card } from '@groveengine/ui/ui';
```

### Runtime Performance

- **Svelte 5** - Compiled, minimal runtime
- **Bits-ui** - Headless, no style overhead
- **Tailwind** - Static CSS, no runtime injection

---

## Security Considerations

1. **XSS Prevention** - All user content must be sanitized (handled by GroveEngine)
2. **No Sensitive Data** - UI components don't handle auth/secrets
3. **Dependency Auditing** - Regular `pnpm audit` runs
4. **Type Safety** - TypeScript catches injection points

---

## Versioning Strategy

- **SemVer** - Major.Minor.Patch
- **Breaking changes** - Major version bump
- **New components** - Minor version bump
- **Bug fixes** - Patch version bump

### Deprecation Policy

1. Mark deprecated with `@deprecated` JSDoc
2. Console warning for one minor version
3. Remove in next major version
