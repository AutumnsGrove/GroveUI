# GroveUI - Development Tasks

> **For Subagents**: This file contains structured tasks for autonomous development.
> Work through tasks in order. Mark completed tasks with `[x]`.
> Update this file as you complete tasks.

---

## IMPORTANT: Setup First!

### Step 0: Clone Source Repositories

**You MUST clone these repos before starting extraction.** They are not on your local machine.

```bash
# Create a temporary working directory
mkdir -p /tmp/grove-sources
cd /tmp/grove-sources

# Clone all source repositories
git clone https://github.com/AutumnsGrove/GroveEngine.git
git clone https://github.com/AutumnsGrove/AutumnsGrove.git
git clone https://github.com/AutumnsGrove/GroveScout.git

# Verify clones succeeded
ls -la
```

### Source Paths After Cloning

| Project | Clone Path | Component Location |
|---------|------------|-------------------|
| GroveEngine | `/tmp/grove-sources/GroveEngine` | `packages/engine/src/lib/components/` |
| GroveEngine UI | `/tmp/grove-sources/GroveEngine` | `packages/ui/src/lib/` |
| AutumnsGrove | `/tmp/grove-sources/AutumnsGrove` | `src/lib/components/` |
| GroveScout | `/tmp/grove-sources/GroveScout` | `src/lib/components/` |

### Target Project

**GroveUI**: `/Users/autumn/Documents/Projects/GroveUI`

All components should be copied TO this directory.

---

## Rules

1. **COPY ONLY** - Do NOT modify source repos, only copy files to GroveUI
2. **Update imports** - Fix `$lib/` paths after copying
3. **Svelte 5** - Ensure all components use runes syntax (`$props()`, `$state()`, etc.)
4. **Test after each task** - Run `pnpm check` and `pnpm dev`

---

## Phase 1: Core Component Extraction (GroveEngine)

### Task 1: Extract Basic UI Components

**Source**: `/tmp/grove-sources/GroveEngine/packages/engine/src/lib/components/ui/`
**Target**: `/Users/autumn/Documents/Projects/GroveUI/src/lib/components/ui/`

- [ ] `Button.svelte` - Button wrapper component
- [ ] `Card.svelte` - Card wrapper component
- [ ] `Badge.svelte` - Badge wrapper component
- [ ] `Dialog.svelte` - Dialog wrapper component
- [ ] `Input.svelte` - Input wrapper component
- [ ] `Textarea.svelte` - Textarea wrapper component
- [ ] `Select.svelte` - Select wrapper component
- [ ] `Tabs.svelte` - Tabs wrapper component
- [ ] `Accordion.svelte` - Accordion wrapper component
- [ ] `Sheet.svelte` - Sheet wrapper component
- [ ] `Toast.svelte` - Toast wrapper component
- [ ] `Skeleton.svelte` - Skeleton wrapper component
- [ ] `Table.svelte` - Table wrapper component
- [ ] `toast.ts` - Toast utility functions
- [ ] Update `src/lib/components/ui/index.ts` exports

---

### Task 2: Extract Primitives (bits-ui wrappers)

**Source**: `/tmp/grove-sources/GroveEngine/packages/engine/src/lib/components/ui/`
**Target**: `/Users/autumn/Documents/Projects/GroveUI/src/lib/components/primitives/`

Copy entire directories:

- [ ] `accordion/` directory
- [ ] `badge/` directory
- [ ] `button/` directory
- [ ] `card/` directory
- [ ] `dialog/` directory
- [ ] `input/` directory
- [ ] `select/` directory
- [ ] `separator/` directory
- [ ] `sheet/` directory
- [ ] `skeleton/` directory
- [ ] `table/` directory
- [ ] `tabs/` directory
- [ ] `textarea/` directory
- [ ] `toast/` directory
- [ ] Verify each has `index.ts` export

---

### Task 3: Extract Gallery Components

**Source**: `/tmp/grove-sources/GroveEngine/packages/engine/src/lib/components/gallery/`
**Target**: `/Users/autumn/Documents/Projects/GroveUI/src/lib/components/gallery/`

- [ ] `ImageGallery.svelte` - Grid gallery with lightbox
- [ ] `Lightbox.svelte` - Full-screen image viewer
- [ ] `LightboxCaption.svelte` - Caption component
- [ ] `ZoomableImage.svelte` - Pinch-to-zoom image
- [ ] Update `src/lib/components/gallery/index.ts` exports

---

### Task 4: Extract Editor Components

**Source**: `/tmp/grove-sources/GroveEngine/packages/engine/src/lib/components/admin/`
**Target**: `/Users/autumn/Documents/Projects/GroveUI/src/lib/components/editor/`

- [ ] `MarkdownEditor.svelte` - Full markdown editor (~600 lines)
- [ ] `GutterManager.svelte` - Gutter annotation editor
- [ ] Update `src/lib/components/editor/index.ts` exports

---

### Task 5: Extract Gutter System

**Source**: `/tmp/grove-sources/GroveEngine/packages/engine/src/lib/components/custom/`
**Target**: `/Users/autumn/Documents/Projects/GroveUI/src/lib/components/gutter/`

- [ ] `ContentWithGutter.svelte` - Main layout (~650 lines)
- [ ] `LeftGutter.svelte` - Gutter container
- [ ] `GutterItem.svelte` - Individual annotation
- [ ] `TableOfContents.svelte` - Auto-generated TOC
- [ ] `MobileTOC.svelte` - Mobile navigation
- [ ] `CollapsibleSection.svelte` - Expandable section
- [ ] Update `src/lib/components/gutter/index.ts` exports

---

### Task 6: Extract Design Tokens

**Source**: `/tmp/grove-sources/GroveEngine/packages/ui/src/lib/tokens/`
**Target**: `/Users/autumn/Documents/Projects/GroveUI/src/lib/tokens/`

- [ ] `colors.ts` - Color palette
- [ ] `typography.ts` - Font definitions
- [ ] `spacing.ts` - Spacing scale
- [ ] `effects.ts` - Shadows and effects
- [ ] `animation.ts` - Animation definitions
- [ ] Update `src/lib/tokens/index.ts` exports

---

### Task 7: Extract Styles

**Target**: `/Users/autumn/Documents/Projects/GroveUI/src/lib/styles/`

- [ ] `grove.css` from GroveEngine `/packages/ui/src/lib/styles/`
- [ ] `tokens.css` from GroveEngine `/packages/ui/src/lib/styles/`
- [ ] `content.css` from GroveEngine `/packages/engine/src/lib/styles/`

---

### Task 8: Extract Utilities

**Target**: `/Users/autumn/Documents/Projects/GroveUI/src/lib/utils/`

- [ ] `gutter.ts` from GroveEngine `/packages/engine/src/lib/utils/gutter.js` (convert to TS)
- [x] `cn.ts` - Already exists

---

## Phase 2: GroveScout Components

**Source**: `/tmp/grove-sources/GroveScout/src/lib/components/`

### Task 9: Create New Component Categories

First, create new directories:

```bash
mkdir -p /Users/autumn/Documents/Projects/GroveUI/src/lib/components/indicators
mkdir -p /Users/autumn/Documents/Projects/GroveUI/src/lib/components/content
mkdir -p /Users/autumn/Documents/Projects/GroveUI/src/lib/components/forms
mkdir -p /Users/autumn/Documents/Projects/GroveUI/src/lib/components/icons
mkdir -p /Users/autumn/Documents/Projects/GroveUI/src/lib/components/states
```

---

### Task 10: Extract Icons System

**Source**: `/tmp/grove-sources/GroveScout/src/lib/components/scout/Icons.svelte`
**Target**: `/Users/autumn/Documents/Projects/GroveUI/src/lib/components/icons/`

- [ ] `Icons.svelte` - 24 SVG icons (search, credits, arrow-right, check, x, star, etc.)
- [ ] Create `index.ts` export

---

### Task 11: Extract Indicator Components

**Source**: `/tmp/grove-sources/GroveScout/src/lib/components/scout/`
**Target**: `/Users/autumn/Documents/Projects/GroveUI/src/lib/components/indicators/`

- [ ] `StatusBadge.svelte` - Status indicator (pending/running/completed/failed)
- [ ] `ScoreBar.svelte` - Animated score/progress bar with color gradient
- [ ] `CreditBalance.svelte` - Credit/balance display (3 variants, 3 sizes)
- [ ] Create `index.ts` export

---

### Task 12: Extract Content Components

**Source**: `/tmp/grove-sources/GroveScout/src/lib/components/scout/`
**Target**: `/Users/autumn/Documents/Projects/GroveUI/src/lib/components/content/`

- [ ] `ProductCard.svelte` - Product display card (image, price, discount, score)
- [ ] `SearchCard.svelte` - Search/list item card with status
- [ ] `PlanCard.svelte` - Pricing plan card with features
- [ ] Create `index.ts` export

---

### Task 13: Extract Form Components

**Source**: `/tmp/grove-sources/GroveScout/src/lib/components/scout/`
**Target**: `/Users/autumn/Documents/Projects/GroveUI/src/lib/components/forms/`

- [ ] `SearchInput.svelte` - Textarea search input with suggestions
- [ ] Create `index.ts` export

---

### Task 14: Extract State Components

**Source**: `/tmp/grove-sources/GroveScout/src/lib/components/scout/`
**Target**: `/Users/autumn/Documents/Projects/GroveUI/src/lib/components/states/`

- [ ] `LoadingSkeleton.svelte` - 6 skeleton variants (text, heading, avatar, button, card, product)
- [ ] `EmptyState.svelte` - Empty state with icon picker
- [ ] Create `index.ts` export

Also from GroveScout root components:
- [ ] `Loading.svelte` from `/tmp/grove-sources/GroveScout/src/lib/components/` - Animated spinner
- [ ] `ThemeToggle.svelte` - Light/Dark/System theme switcher

---

## Phase 3: AutumnsGrove Components

**Source**: `/tmp/grove-sources/AutumnsGrove/src/lib/components/`

### Task 15: Extract Chart Components

**Target**: `/Users/autumn/Documents/Projects/GroveUI/src/lib/components/charts/`

First create directory:
```bash
mkdir -p /Users/autumn/Documents/Projects/GroveUI/src/lib/components/charts
```

From `/tmp/grove-sources/AutumnsGrove/src/lib/components/charts/`:

- [ ] `ActivityOverview.svelte` - GitHub-style contribution chart
- [ ] `LOCBar.svelte` - Lines of code bar chart
- [ ] `RepoBreakdown.svelte` - Repository statistics
- [ ] `Sparkline.svelte` - Sparkline visualization
- [ ] Create `index.ts` export

---

### Task 16: Check for Other Unique Components

Review AutumnsGrove for components NOT already in GroveEngine:

**Check these locations**:
- `/tmp/grove-sources/AutumnsGrove/src/lib/components/custom/`
- `/tmp/grove-sources/AutumnsGrove/src/lib/components/admin/`

- [ ] `IconLegend.svelte` - If exists, extract to icons/
- [ ] `LogViewer.svelte` - If exists, evaluate for extraction
- [ ] `InternalsPostViewer.svelte` - If exists, evaluate for extraction
- [ ] Document any other unique components found

---

## Phase 4: Update All Exports

### Task 17: Update Main Index

**File**: `/Users/autumn/Documents/Projects/GroveUI/src/lib/index.ts`

Update to export ALL component categories:

```typescript
// Core UI
export * from './components/ui/index.js';
export * from './components/gallery/index.js';
export * from './components/editor/index.js';
export * from './components/gutter/index.js';

// New categories from GroveScout
export * from './components/indicators/index.js';
export * from './components/content/index.js';
export * from './components/forms/index.js';
export * from './components/icons/index.js';
export * from './components/states/index.js';

// Charts from AutumnsGrove
export * from './components/charts/index.js';

// Tokens and utilities
export * from './tokens/index.js';
export { cn } from './utils/cn.js';
```

- [ ] Update main index.ts
- [ ] Update package.json exports to include new categories

---

### Task 18: Update Package.json Exports

**File**: `/Users/autumn/Documents/Projects/GroveUI/package.json`

Add new subpath exports:

```json
{
  "exports": {
    "./indicators": { ... },
    "./content": { ... },
    "./forms": { ... },
    "./icons": { ... },
    "./states": { ... },
    "./charts": { ... }
  }
}
```

- [ ] Add all new category exports to package.json

---

## Phase 5: Verify & Test

### Task 19: Build Verification

```bash
cd /Users/autumn/Documents/Projects/GroveUI

# Type check
pnpm check

# Build demo site
pnpm build

# Build npm package
pnpm package

# Verify dist structure
ls -la dist/
ls -la dist/components/
```

- [ ] `pnpm check` passes (or only minor warnings)
- [ ] `pnpm build` succeeds
- [ ] `pnpm package` creates dist/ folder
- [ ] All component categories present in dist/

---

### Task 20: Test Imports

Create a quick test file to verify imports work:

```typescript
// Test file (don't commit)
import { Button, Card } from './src/lib/index.js';
import { ImageGallery } from './src/lib/components/gallery/index.js';
import { Icons, StatusBadge } from './src/lib/components/indicators/index.js';
import { Sparkline } from './src/lib/components/charts/index.js';
```

- [ ] All imports resolve correctly
- [ ] No circular dependency errors

---

## Phase 6: Demo Site (Lower Priority)

### Task 21: Component Documentation Pages

- [ ] `/components/ui/+page.svelte` - UI components overview
- [ ] `/components/gallery/+page.svelte` - Gallery docs
- [ ] `/components/editor/+page.svelte` - Editor docs
- [ ] `/components/gutter/+page.svelte` - Gutter system docs
- [ ] `/components/indicators/+page.svelte` - Indicators docs
- [ ] `/components/content/+page.svelte` - Content cards docs
- [ ] `/components/charts/+page.svelte` - Charts docs
- [ ] `/tokens/+page.svelte` - Design tokens showcase

---

## Notes for Subagents

### Import Path Fixes

When copying components, fix these import patterns:

```typescript
// GroveEngine/GroveScout style → GroveUI style
'$lib/utils/cn' → '$lib/utils/cn.js'
'$lib/components/ui/button' → '$lib/components/primitives/button'
'../Icons.svelte' → '$lib/components/icons/Icons.svelte'
```

### Svelte 5 Runes Syntax

Ensure all components use:
- `let { prop1, prop2 } = $props();` instead of `export let`
- `let state = $state(initial);` for reactive state
- `let derived = $derived(expression);` for computed values
- `{@render children?.()}` for rendering children/slots

### Component Cleanup

When extracting, remove:
- Scout-specific business logic
- Hardcoded Scout branding (make customizable via props)
- References to Scout-specific stores

### Testing Checklist

After EACH task:
1. Run `pnpm check`
2. Run `pnpm dev`
3. Check browser console for errors
4. Verify no broken imports

---

## Final Checklist

### GroveEngine Components
- [ ] All UI wrapper components (13)
- [ ] All primitives (14 directories)
- [ ] Gallery components (4)
- [ ] Editor components (2)
- [ ] Gutter system (6)
- [ ] Design tokens (5)
- [ ] Styles (3)
- [ ] Utilities (1)

### GroveScout Components
- [ ] Icons system (1)
- [ ] Indicators (3)
- [ ] Content cards (3)
- [ ] Form components (1)
- [ ] State components (4)

### AutumnsGrove Components
- [ ] Chart components (4)
- [ ] Other unique components (TBD)

### Final Verification
- [ ] All exports updated
- [ ] Package.json exports complete
- [ ] Build succeeds
- [ ] Package builds correctly
- [ ] Demo site runs

---

## Cleanup

After all extraction is complete:

```bash
# Remove cloned repos
rm -rf /tmp/grove-sources
```

---

*Last updated: 2025-12-02*
*Total components to extract: ~50+*
