# GroveUI - Project Specification

## Document Info
- **Version**: 1.0
- **Created**: 2025-12-02
- **Status**: Active Development

---

## Executive Summary

GroveUI is the dedicated UI component library for the Grove ecosystem. It extracts and centralizes all user interface components from GroveEngine into a single, reusable package that powers every grove.place website.

### The Problem

Before GroveUI, UI components were scattered across multiple locations:

1. **GroveEngine's `packages/engine`** - Had 30+ UI components mixed with core business logic
2. **GroveEngine's `packages/ui`** - Limited design system with only 17 basic components
3. **AutumnsGrove** - Duplicated many components locally

This caused:
- **Code duplication** across projects
- **Messy separation of concerns** - UI mixed with auth, payments, markdown parsing
- **Difficult maintenance** - Changes needed in multiple places
- **Deployment complexity** - Package boundaries unclear

### The Solution

GroveUI consolidates ALL UI components into a single, well-organized package:

```
Before:                              After:
┌──────────────────────┐            ┌──────────────────────┐
│ GroveEngine/engine   │            │ GroveUI              │
│ ├── UI components ✗  │            │ └── ALL UI here ✓    │
│ ├── Auth logic       │            └──────────────────────┘
│ ├── Payments         │                      ↑
│ └── Markdown         │            ┌──────────────────────┐
├──────────────────────┤            │ GroveEngine          │
│ GroveEngine/ui       │   ───►     │ └── Pure logic only  │
│ └── 17 components ✗  │            └──────────────────────┘
├──────────────────────┤                      ↑
│ AutumnsGrove         │            ┌──────────────────────┐
│ └── Duplicates ✗     │            │ grove.place sites    │
└──────────────────────┘            └──────────────────────┘
```

---

## Scope

### In Scope

| Category | Components | Description |
|----------|------------|-------------|
| **Basic UI** | Button, Card, Input, Textarea, Select, Dialog, Sheet, Tabs, Accordion, Badge, Toast, Skeleton, Table | Standard interface building blocks |
| **Gallery** | ImageGallery, Lightbox, LightboxCaption, ZoomableImage | Media display and interaction |
| **Editor** | MarkdownEditor, GutterManager | Content creation tools |
| **Gutter System** | ContentWithGutter, LeftGutter, GutterItem, TableOfContents, MobileTOC, CollapsibleSection | Grove's unique annotation system |
| **Primitives** | Low-level bits-ui wrappers | Accessible, unstyled base components |
| **Design Tokens** | Colors, typography, spacing, animations | Visual design language |
| **Tailwind Preset** | Grove-themed Tailwind configuration | Ready-to-use styling |
| **Utilities** | `cn()` class name helper, gutter positioning | Helper functions |

### Out of Scope

| Item | Reason | Where It Lives |
|------|--------|----------------|
| Authentication | Business logic, not UI | GroveEngine |
| Payment processing | Business logic | GroveEngine |
| Markdown parsing | Core engine feature | GroveEngine |
| Database operations | Data layer | GroveEngine |
| API routes | Server logic | GroveEngine |
| Multi-tenancy | Platform infrastructure | GroveEngine |

---

## Technical Specifications

### Package Details

| Property | Value |
|----------|-------|
| **Package Name** | `@groveengine/ui` |
| **Version** | 0.2.0 (replaces 0.1.0 from old location) |
| **Registry** | npm (public) |
| **License** | MIT |

### Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Svelte** | 5.x | Component framework |
| **SvelteKit** | 2.x | Build tooling + demo site |
| **TypeScript** | 5.6+ | Type safety |
| **Tailwind CSS** | 3.4+ | Styling |
| **bits-ui** | 1.x | Accessible primitives |
| **Vite** | 5.x | Build tooling |
| **pnpm** | Latest | Package management |

### Export Structure

```typescript
// Main entry - everything
import { Button, ImageGallery, ContentWithGutter } from '@groveengine/ui';

// Category-specific imports
import { Button, Card } from '@groveengine/ui/ui';
import { Lightbox } from '@groveengine/ui/gallery';
import { MarkdownEditor } from '@groveengine/ui/editor';
import { ContentWithGutter } from '@groveengine/ui/gutter';

// Design tokens
import { colors } from '@groveengine/ui/tokens';

// Utilities
import { cn } from '@groveengine/ui/utils';

// Tailwind preset
import grovePreset from '@groveengine/ui/tailwind';

// CSS
import '@groveengine/ui/styles';
```

### Deployment

| Target | Method | URL |
|--------|--------|-----|
| npm package | GitHub Actions → npm publish | npmjs.com/@groveengine/ui |
| Demo site | GitHub Actions → Cloudflare Pages | ui.grove.place |

---

## Design Philosophy

### Visual Language

GroveUI follows the Grove design philosophy: **"a place to Be"**

**Color Palette:**
- **Grove Green** (`#16a34a`) - Primary, growth, life
- **Bark Brown** (`#3d2914`) - Text, grounding, earth
- **Cream** (`#fefdfb`) - Background, calm, paper

**Typography:**
- **Serif** (Georgia) - Headings, literary feel
- **Sans** (System) - Body text, readability
- **Mono** (SF Mono) - Code, precision

**Animations:**
- Organic, nature-inspired motion
- `bloom`, `grow`, `leaf-fall`, `leaf-sway`
- Gentle easing, never jarring

### Component Principles

1. **Accessible by default** - Built on bits-ui, ARIA compliant
2. **Composable** - Small, focused components that combine well
3. **Customizable** - Accept `class` prop, use `cn()` for merging
4. **Consistent** - Same patterns across all components
5. **Documented** - Every component has examples

---

## Architecture Decisions

### Why a Separate Repository?

**Decision**: GroveUI lives in its own repository, not as a package in the GroveEngine monorepo.

**Rationale**:
1. **Independent versioning** - UI can release independently of engine
2. **Clearer ownership** - UI team vs engine team separation
3. **Simpler CI/CD** - Don't rebuild engine when UI changes
4. **Better npm publishing** - Direct from repo, not monorepo subpath

### Why Same Package Name?

**Decision**: Keep `@groveengine/ui` as the package name.

**Rationale**:
1. **Zero migration** for existing consumers
2. **Established namespace** in the Grove ecosystem
3. **Version bump** (0.1.0 → 0.2.0) signals the change

### Why SvelteKit for a Library?

**Decision**: Use SvelteKit instead of just Svelte.

**Rationale**:
1. **Dual purpose** - Library + documentation site
2. **`svelte-package`** - Built-in library packaging
3. **Demo site** - Showcase components with real routing
4. **Developer experience** - Hot reload, TypeScript, etc.

---

## Success Criteria

### Phase 1: Setup (Current)
- [x] Repository created with proper structure
- [x] Package.json with correct exports
- [x] Tailwind preset with Grove tokens
- [x] Basic demo site scaffolding
- [x] Documentation (this spec)

### Phase 2: Component Migration
- [ ] Extract all UI components from GroveEngine
- [ ] Extract gallery components
- [ ] Extract editor components
- [ ] Extract gutter system
- [ ] All components type-safe and documented

### Phase 3: Integration
- [ ] GroveEngine updated to import from @groveengine/ui
- [ ] AutumnsGrove updated to use shared components
- [ ] Old packages/ui deprecated

### Phase 4: Demo Site
- [ ] Component documentation pages
- [ ] Interactive playground
- [ ] Design token showcase
- [ ] Deployed to ui.grove.place

### Phase 5: Production
- [ ] Published to npm
- [ ] CI/CD pipeline active
- [ ] All grove.place sites using GroveUI

---

## Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Breaking changes during migration | High | Maintain same export API |
| Component behavior differences | Medium | Comprehensive testing |
| Performance regression | Medium | Bundle size monitoring |
| Documentation gaps | Low | Require docs for all components |

---

## Future Considerations

1. **Theming system** - Allow sites to customize colors/tokens
2. **Dark mode** - Already using `darkMode: 'class'` in Tailwind
3. **Component variants** - More size/style options
4. **Storybook** - Consider for more interactive docs
5. **Design tokens export** - CSS custom properties, Figma tokens
