# GroveUI - Development Tasks

> **For Subagents**: This file contains structured tasks for autonomous development.
> Work through tasks in order. Mark completed tasks with `[x]`.
> Update this file as you complete tasks.

---

## Phase 1: Component Extraction

### Source Projects to Extract From

| Project | Path | Notes |
|---------|------|-------|
| GroveEngine | `/Users/autumn/Documents/Projects/GroveEngine/packages/engine/src/lib/components/` | Primary source |
| GroveEngine UI | `/Users/autumn/Documents/Projects/GroveEngine/packages/ui/src/lib/` | Design system source |
| AutumnsGrove | `/Users/autumn/Documents/Projects/AutumnsGrove/src/lib/components/` | May have unique components |
| GroveScout | `/Users/autumn/Documents/Projects/GroveScout/` | Check for UI components |

### Important: Copy Only

- **DO NOT** modify the source projects (GroveEngine, AutumnsGrove, GroveScout)
- **COPY** components to GroveUI
- Source projects will be updated to import from @groveengine/ui in a later phase

---

## Task 1: Extract Basic UI Components

**Target**: `src/lib/components/ui/`

Copy from GroveEngine `/packages/engine/src/lib/components/ui/`:

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

**After copying**: Update `src/lib/components/ui/index.ts` to export all components.

---

## Task 2: Extract Primitives (bits-ui wrappers)

**Target**: `src/lib/components/primitives/`

Copy from GroveEngine `/packages/engine/src/lib/components/ui/`:

- [ ] `accordion/` - Accordion primitive parts
- [ ] `badge/` - Badge primitive parts
- [ ] `button/` - Button primitive parts
- [ ] `card/` - Card primitive parts
- [ ] `dialog/` - Dialog primitive parts
- [ ] `input/` - Input primitive parts
- [ ] `select/` - Select primitive parts
- [ ] `separator/` - Separator primitive parts
- [ ] `sheet/` - Sheet primitive parts
- [ ] `skeleton/` - Skeleton primitive parts
- [ ] `table/` - Table primitive parts
- [ ] `tabs/` - Tabs primitive parts
- [ ] `textarea/` - Textarea primitive parts
- [ ] `toast/` - Toast primitive parts (sonner integration)

**After copying**: Create `index.ts` for each primitive directory if not present.

---

## Task 3: Extract Gallery Components

**Target**: `src/lib/components/gallery/`

Copy from GroveEngine `/packages/engine/src/lib/components/gallery/`:

- [ ] `ImageGallery.svelte` - Grid gallery with lightbox integration
- [ ] `Lightbox.svelte` - Full-screen image viewer modal
- [ ] `LightboxCaption.svelte` - Caption component for lightbox
- [ ] `ZoomableImage.svelte` - Pinch-to-zoom image component

**After copying**: Update `src/lib/components/gallery/index.ts` to export all components.

---

## Task 4: Extract Editor Components

**Target**: `src/lib/components/editor/`

Copy from GroveEngine `/packages/engine/src/lib/components/admin/`:

- [ ] `MarkdownEditor.svelte` - Full markdown editor (~600 lines)
- [ ] `GutterManager.svelte` - Gutter annotation editor

**After copying**: Update `src/lib/components/editor/index.ts` to export all components.

---

## Task 5: Extract Gutter System

**Target**: `src/lib/components/gutter/`

Copy from GroveEngine `/packages/engine/src/lib/components/custom/`:

- [ ] `ContentWithGutter.svelte` - Main layout with gutter (~650 lines)
- [ ] `LeftGutter.svelte` - Gutter container component
- [ ] `GutterItem.svelte` - Individual gutter annotation
- [ ] `TableOfContents.svelte` - Auto-generated TOC
- [ ] `MobileTOC.svelte` - Mobile navigation TOC
- [ ] `CollapsibleSection.svelte` - Expandable content section

**After copying**: Update `src/lib/components/gutter/index.ts` to export all components.

---

## Task 6: Extract Design Tokens

**Target**: `src/lib/tokens/`

Copy from GroveEngine `/packages/ui/src/lib/tokens/`:

- [ ] `colors.ts` - Color palette definitions
- [ ] `typography.ts` - Font definitions
- [ ] `spacing.ts` - Spacing scale
- [ ] `effects.ts` - Shadow and effect definitions
- [ ] `animation.ts` - Animation definitions

**After copying**: Update `src/lib/tokens/index.ts` to export all tokens.

---

## Task 7: Extract Styles

**Target**: `src/lib/styles/`

Copy from GroveEngine:

- [ ] `grove.css` from `/packages/ui/src/lib/styles/` - Main styles
- [ ] `tokens.css` from `/packages/ui/src/lib/styles/` - CSS custom properties
- [ ] `content.css` from `/packages/engine/src/lib/styles/` - Prose/content styles

---

## Task 8: Extract Utilities

**Target**: `src/lib/utils/`

Copy/verify from GroveEngine:

- [ ] `gutter.ts` from `/packages/engine/src/lib/utils/gutter.js` - Gutter positioning logic
- [x] `cn.ts` - Already created (class name utility)

---

## Task 9: Check Other Projects for Unique Components

### AutumnsGrove Check

Location: `/Users/autumn/Documents/Projects/AutumnsGrove/src/lib/components/`

Review these for extraction:
- [ ] Check `custom/` for components not in GroveEngine
- [ ] Check `charts/` - ActivityOverview, LOCBar, RepoBreakdown, Sparkline
- [ ] Check for any other unique components

### GroveScout Check

Location: `/Users/autumn/Documents/Projects/GroveScout/`

- [ ] Explore project structure
- [ ] Identify any UI components
- [ ] Note components worth extracting

---

## Phase 2: Update Exports & Verify

- [ ] Update `src/lib/index.ts` main entry to export all components
- [ ] Update each category's `index.ts` with actual exports
- [ ] Run `pnpm check` - fix any TypeScript errors
- [ ] Run `pnpm build` - verify site builds
- [ ] Run `pnpm package` - verify npm package builds
- [ ] Verify `dist/` folder has correct structure

---

## Phase 3: Demo Site (Lower Priority)

- [ ] Create `/components/ui/button/+page.svelte` - Button docs
- [ ] Create `/components/ui/card/+page.svelte` - Card docs
- [ ] Create component pages for remaining UI components
- [ ] Create `/components/gallery/+page.svelte` - Gallery docs
- [ ] Create `/components/editor/+page.svelte` - Editor docs
- [ ] Create `/components/gutter/+page.svelte` - Gutter system docs
- [ ] Create `/tokens/colors/+page.svelte` - Color palette showcase
- [ ] Create `/playground/+page.svelte` - Interactive playground

---

## Notes for Subagents

### Import Path Updates

When copying components, update internal imports:
- `$lib/utils/cn` → `$lib/utils/cn.js`
- `$lib/components/ui/button` → `$lib/components/primitives/button`
- Check all relative imports work correctly

### Svelte 5 Compatibility

All components should use Svelte 5 runes syntax:
- `$props()` instead of `export let`
- `$state()` for reactive state
- `$derived()` for computed values
- `{@render children?.()}` for slot content

### File Naming

- Components: `PascalCase.svelte`
- Utilities: `camelCase.ts`
- Primitives: `kebab-case.svelte` in subdirectories

### Testing After Extraction

After each major task:
1. Run `pnpm check` to verify types
2. Run `pnpm dev` to verify imports work
3. Check browser console for errors

---

## Completion Checklist

- [ ] All UI wrapper components extracted
- [ ] All primitives extracted
- [ ] Gallery components extracted
- [ ] Editor components extracted
- [ ] Gutter system extracted
- [ ] Design tokens extracted
- [ ] Styles extracted
- [ ] Utilities extracted
- [ ] All exports updated
- [ ] Build succeeds
- [ ] Package builds correctly
- [ ] Unique components from AutumnsGrove identified
- [ ] GroveScout components identified

---

*Last updated: 2025-12-02*
