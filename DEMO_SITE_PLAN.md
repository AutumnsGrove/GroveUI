# GroveUI Demo Site - Comprehensive Implementation Plan

## Overview

Build a comprehensive documentation and showcase site for GroveUI using GroveEngine as the CMS backend. The site will demonstrate all 40+ components with live examples, code snippets, and interactive demos.

---

## Architecture

### Stack
- **Frontend**: SvelteKit (already configured)
- **CMS**: GroveEngine (@autumnsgrove/groveengine) - for markdown content management
- **Components**: GroveUI (local package) - all 11 component categories
- **Styling**: Tailwind CSS with Grove preset
- **Deployment**: Cloudflare Pages (matches GroveEngine infrastructure)

### Content Strategy
- **Static pages**: Component showcase with live demos
- **CMS-driven**: Blog posts, changelog, usage guides (powered by GroveEngine)
- **Hybrid approach**: Component docs are code-driven, editorial content is CMS-driven

---

## Site Structure

```
/                           # Homepage - overview and quick start
├── /components             # Component showcase hub
│   ├── /ui                 # 12 UI components
│   ├── /gallery            # 4 gallery components
│   ├── /editor             # 2 editor components
│   ├── /gutter             # 6 gutter system components
│   ├── /indicators         # 3 indicator components
│   ├── /content            # 3 content card components
│   ├── /forms              # 1 form component
│   ├── /icons              # 1 icon system
│   ├── /states             # 4 state components
│   ├── /charts             # 4 chart components
│   └── /primitives         # 14 primitive wrappers
├── /tokens                 # Design tokens showcase
│   ├── /colors             # Color palette
│   ├── /typography         # Font system
│   ├── /spacing            # Spacing scale
│   ├── /effects            # Shadows and effects
│   └── /animation          # Animation system
├── /examples               # Real-world usage examples
│   ├── /blog-layout        # Using gutter system
│   ├── /dashboard          # Using charts + indicators
│   ├── /gallery-site       # Using gallery components
│   └── /cms-integration    # GroveEngine integration
├── /guides                 # Usage guides (CMS-driven)
│   ├── /getting-started    # Installation and setup
│   ├── /customization      # Theming and tokens
│   └── /integration        # Framework integration
├── /blog                   # Changelog & updates (CMS-driven)
└── /playground             # Interactive component sandbox
```

---

## Phase 1: Foundation Setup

### Task 1.1: Install Dependencies
```bash
pnpm add @autumnsgrove/groveengine
pnpm add -D @types/marked gray-matter
```

### Task 1.2: Configure GroveEngine Integration
- Set up markdown content directory structure
- Configure content collections (guides, blog, examples)
- Set up frontmatter schema
- Configure image uploads (if using R2)

### Task 1.3: Update Layout
- Add navigation header with all sections
- Add footer with links
- Implement theme toggle (using ThemeToggle from states/)
- Add mobile-responsive menu

### Task 1.4: Create Shared Components
- `ComponentDemo.svelte` - Wrapper for live component examples
- `CodeBlock.svelte` - Syntax-highlighted code display
- `PropsTable.svelte` - Component prop documentation
- `CategoryNav.svelte` - Navigation for component categories
- `LivePreview.svelte` - Interactive component playground

---

## Phase 2: Component Documentation Pages

### Task 2.1: UI Components (`/components/ui/+page.svelte`)
**Components to document** (12):
- Button, Card, Badge, Dialog, Input, Textarea, Select, Tabs, Accordion, Sheet, Skeleton, Table

**Page structure**:
1. Category overview
2. Component grid with quick examples
3. Individual component sections:
   - Live demo with variants
   - Props table
   - Code examples
   - Usage guidelines
   - Accessibility notes

### Task 2.2: Gallery Components (`/components/gallery/+page.svelte`)
**Components** (4):
- ImageGallery, Lightbox, LightboxCaption, ZoomableImage

**Demos**:
- Photo gallery with 12+ sample images
- Single image lightbox
- Gallery with captions
- Mobile pinch-to-zoom demo

### Task 2.3: Editor Components (`/components/editor/+page.svelte`)
**Components** (2):
- MarkdownEditor, GutterManager

**Demos**:
- Live markdown editor with preview
- Gutter annotation interface
- Full editing workflow

### Task 2.4: Gutter System (`/components/gutter/+page.svelte`)
**Components** (6):
- ContentWithGutter, LeftGutter, GutterItem, TableOfContents, MobileTOC, CollapsibleSection

**Demos**:
- Full blog post layout with gutter annotations
- Auto-generated table of contents
- Mobile navigation
- Collapsible sections

### Task 2.5: Indicators (`/components/indicators/+page.svelte`)
**Components** (3):
- StatusBadge, ScoreBar, CreditBalance

**Demos**:
- All status states (pending, running, completed, failed)
- Animated score bars with different values
- Credit balance in all 3 variants and 3 sizes

### Task 2.6: Content Cards (`/components/content/+page.svelte`)
**Components** (3):
- ProductCard, SearchCard, PlanCard

**Demos**:
- E-commerce product grid
- Search results list
- Pricing plan comparison

### Task 2.7: Forms (`/components/forms/+page.svelte`)
**Components** (1):
- SearchInput

**Demos**:
- Search with suggestions
- Form integration examples
- Accessibility features

### Task 2.8: Icons (`/components/icons/+page.svelte`)
**Components** (1):
- Icons (24 SVG icons)

**Demos**:
- Complete icon grid
- Icon with text combinations
- Size variants
- Custom coloring

### Task 2.9: States (`/components/states/+page.svelte`)
**Components** (4):
- LoadingSkeleton, EmptyState, Loading, ThemeToggle

**Demos**:
- All 6 skeleton variants
- Empty state with different icons
- Spinner in various contexts
- Theme switcher in action

### Task 2.10: Charts (`/components/charts/+page.svelte`)
**Components** (4):
- ActivityOverview, LOCBar, RepoBreakdown, Sparkline

**Demos**:
- GitHub-style contribution chart with real data
- Lines of code comparison
- Repository statistics breakdown
- Sparkline variations

### Task 2.11: Primitives (`/components/primitives/+page.svelte`)
**Components** (14 directories):
- All bits-ui wrapper components

**Structure**:
- Explanation of primitives vs. wrapper components
- Link to bits-ui documentation
- Quick reference for available primitives

---

## Phase 3: Design Tokens Documentation

### Task 3.1: Colors (`/tokens/colors/+page.svelte`)
- Display all color palettes (grove, cream, bark)
- Show semantic aliases (primary, secondary, etc.)
- Color contrast checker
- Copy hex values functionality

### Task 3.2: Typography (`/tokens/typography/+page.svelte`)
- Font family showcase
- Font size scale with examples
- Line height and letter spacing
- Type specimen for each size

### Task 3.3: Spacing (`/tokens/spacing/+page.svelte`)
- Spacing scale visualization
- Margin/padding examples
- Common spacing patterns
- Max-width utilities

### Task 3.4: Effects (`/tokens/effects/+page.svelte`)
- Shadow examples (grove-sm, grove, grove-lg, grove-xl)
- Border radius variants
- Transition examples
- Backdrop blur effects

### Task 3.5: Animation (`/tokens/animation/+page.svelte`)
- Animation timing functions
- Duration scale
- Common animation patterns
- Interactive examples

---

## Phase 4: Real-World Examples

### Task 4.1: Blog Layout Example (`/examples/blog-layout/+page.svelte`)
**Demonstrates**:
- ContentWithGutter
- MarkdownEditor
- TableOfContents
- GutterItem annotations

**Content**: Sample blog post with full gutter annotation system

### Task 4.2: Dashboard Example (`/examples/dashboard/+page.svelte`)
**Demonstrates**:
- Charts (ActivityOverview, LOCBar, RepoBreakdown, Sparkline)
- Indicators (StatusBadge, ScoreBar, CreditBalance)
- Cards
- Table

**Content**: Analytics dashboard with mock data

### Task 4.3: Gallery Site Example (`/examples/gallery-site/+page.svelte`)
**Demonstrates**:
- ImageGallery
- Lightbox
- ZoomableImage
- Grid layouts

**Content**: Photography portfolio layout

### Task 4.4: CMS Integration Example (`/examples/cms-integration/+page.svelte`)
**Demonstrates**:
- GroveEngine markdown parsing
- Content rendering
- Image uploads
- Metadata handling

**Content**: Step-by-step integration guide with code examples

---

## Phase 5: CMS-Driven Content

### Task 5.1: Set Up Content Collections

**Directory structure**:
```
content/
├── guides/
│   ├── getting-started.md
│   ├── customization.md
│   └── integration.md
├── blog/
│   └── 2025-12-03-groveui-launch.md
└── examples/
    └── building-with-groveui.md
```

**Frontmatter schema**:
```yaml
---
title: "Getting Started with GroveUI"
description: "Learn how to install and use GroveUI in your project"
author: "AutumnsGrove"
date: 2025-12-03
category: "guide"
tags: ["getting-started", "installation", "setup"]
---
```

### Task 5.2: Create Content Loaders
- `src/lib/server/content.ts` - Load markdown files
- Parse frontmatter with gray-matter
- Render markdown with marked.js
- Generate table of contents
- Handle code syntax highlighting

### Task 5.3: Guides Pages
**Routes**:
- `/guides/getting-started/+page.svelte` - Installation, setup, first component
- `/guides/customization/+page.svelte` - Theming, tokens, Tailwind config
- `/guides/integration/+page.svelte` - Framework integration, GroveEngine setup

### Task 5.4: Blog Pages
**Routes**:
- `/blog/+page.svelte` - List all blog posts
- `/blog/[slug]/+page.svelte` - Individual blog post
- `/blog/rss.xml/+server.ts` - RSS feed

**Content**:
- Launch announcement
- Changelog format
- Future update posts

---

## Phase 6: Interactive Features

### Task 6.1: Component Playground (`/playground/+page.svelte`)
**Features**:
- Component selector dropdown
- Live code editor (use Textarea component)
- Real-time preview
- Props editor with form controls
- Export code button

**Implementation**:
- Use svelte's `$effect` for reactivity
- Store user code in localStorage
- Syntax highlighting for code

### Task 6.2: Search Functionality
**Features**:
- Full-text search across components and docs
- Filter by category
- Keyboard shortcuts (Cmd+K)
- Recent searches

**Implementation**:
- Use SearchInput component
- Client-side search with Fuse.js or similar
- Search index generation at build time

### Task 6.3: Copy Code Buttons
- Add to all code blocks
- Toast notification on copy
- Use Toast component from ui/

### Task 6.4: Dark Mode
- Already have ThemeToggle component
- Ensure all demos work in dark mode
- Add theme persistence

---

## Phase 7: Polish & Optimization

### Task 7.1: SEO & Meta Tags
- Add proper meta descriptions
- Open Graph tags for social sharing
- Twitter cards
- Sitemap generation
- Robots.txt

### Task 7.2: Performance
- Image optimization
- Code splitting for heavy components
- Lazy load component demos
- Preload critical assets

### Task 7.3: Accessibility
- ARIA labels on interactive elements
- Keyboard navigation
- Screen reader testing
- Color contrast verification

### Task 7.4: Analytics
- Add privacy-friendly analytics (Plausible or similar)
- Track component page views
- Monitor search queries
- Error tracking

---

## Content Requirements

### Sample Data Needed

**Images** (for gallery demos):
- 12+ placeholder images (nature, landscape, abstract)
- Use Unsplash API or local placeholder images

**Chart Data** (for chart demos):
- GitHub-style contribution data (365 days)
- Repository statistics (5-10 repos)
- Lines of code data
- Activity trends

**Mock Content**:
- Blog post examples (3-5 posts)
- Guide content (3 guides minimum)
- Component usage examples

### Markdown Content Files

**guides/getting-started.md**:
```markdown
---
title: Getting Started with GroveUI
description: Install and configure GroveUI in your project
date: 2025-12-03
---

# Getting Started

GroveUI is a comprehensive design system...

## Installation

\`\`\`bash
pnpm add @groveengine/ui
\`\`\`

...
```

**guides/customization.md**:
- Theming guide
- Token customization
- Tailwind configuration

**guides/integration.md**:
- SvelteKit integration
- GroveEngine CMS setup
- Component imports

---

## Technical Implementation Details

### GroveEngine Integration Pattern

```typescript
// src/lib/server/content.ts
import { parseMarkdown } from '@autumnsgrove/groveengine/utils/markdown';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function loadGuide(slug: string) {
  const filePath = path.join('content/guides', `${slug}.md`);
  const content = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content: markdown } = matter(content);
  const html = await parseMarkdown(markdown);

  return {
    frontmatter,
    html,
    slug
  };
}
```

### Component Demo Pattern

```svelte
<!-- src/lib/demo/ComponentDemo.svelte -->
<script lang="ts">
  let {
    title,
    description,
    code,
    children
  } = $props();
</script>

<section class="mb-12">
  <h3 class="text-heading-lg font-serif mb-2">{title}</h3>
  <p class="text-body text-bark-600 mb-4">{description}</p>

  <!-- Live Preview -->
  <div class="border border-cream-400 rounded-grove-lg p-8 mb-4 bg-cream-50">
    {@render children?.()}
  </div>

  <!-- Code Block -->
  <CodeBlock {code} />
</section>
```

### Navigation Structure

```typescript
// src/lib/navigation.ts
export const navigation = [
  {
    title: 'Components',
    items: [
      { title: 'UI', href: '/components/ui' },
      { title: 'Gallery', href: '/components/gallery' },
      { title: 'Editor', href: '/components/editor' },
      { title: 'Gutter', href: '/components/gutter' },
      { title: 'Indicators', href: '/components/indicators' },
      { title: 'Content', href: '/components/content' },
      { title: 'Forms', href: '/components/forms' },
      { title: 'Icons', href: '/components/icons' },
      { title: 'States', href: '/components/states' },
      { title: 'Charts', href: '/components/charts' },
      { title: 'Primitives', href: '/components/primitives' }
    ]
  },
  {
    title: 'Design Tokens',
    items: [
      { title: 'Colors', href: '/tokens/colors' },
      { title: 'Typography', href: '/tokens/typography' },
      { title: 'Spacing', href: '/tokens/spacing' },
      { title: 'Effects', href: '/tokens/effects' },
      { title: 'Animation', href: '/tokens/animation' }
    ]
  },
  {
    title: 'Examples',
    items: [
      { title: 'Blog Layout', href: '/examples/blog-layout' },
      { title: 'Dashboard', href: '/examples/dashboard' },
      { title: 'Gallery Site', href: '/examples/gallery-site' },
      { title: 'CMS Integration', href: '/examples/cms-integration' }
    ]
  },
  {
    title: 'Guides',
    items: [
      { title: 'Getting Started', href: '/guides/getting-started' },
      { title: 'Customization', href: '/guides/customization' },
      { title: 'Integration', href: '/guides/integration' }
    ]
  },
  {
    title: 'More',
    items: [
      { title: 'Blog', href: '/blog' },
      { title: 'Playground', href: '/playground' }
    ]
  }
];
```

---

## Development Workflow

### Phase 1 (Foundation) - ~2-4 hours
- Install dependencies
- Set up GroveEngine
- Update layout and navigation
- Create shared demo components

### Phase 2 (Component Docs) - ~8-12 hours
- Document all 11 component categories
- Create live demos for each component
- Write usage examples and guidelines

### Phase 3 (Tokens) - ~3-4 hours
- Document all 5 token categories
- Create interactive visualizations
- Add copy functionality

### Phase 4 (Examples) - ~4-6 hours
- Build 4 real-world examples
- Demonstrate complex component combinations
- Show GroveEngine integration

### Phase 5 (CMS Content) - ~3-4 hours
- Set up content collections
- Write guides
- Create blog posts
- Set up content loaders

### Phase 6 (Interactive) - ~4-6 hours
- Build playground
- Add search
- Implement copy buttons
- Polish dark mode

### Phase 7 (Polish) - ~2-3 hours
- SEO optimization
- Performance tuning
- Accessibility audit
- Analytics setup

**Total estimated time: 26-39 hours**

---

## Success Metrics

### Must-Have (MVP)
- [x] All 40+ components documented with live demos
- [ ] All 5 token categories documented
- [ ] At least 2 real-world examples
- [ ] GroveEngine CMS integration working
- [ ] Mobile-responsive design
- [ ] Dark mode support

### Nice-to-Have (V2)
- [ ] Component playground with live editing
- [ ] Full-text search
- [ ] 4 complete example sites
- [ ] Video tutorials
- [ ] Interactive token editor
- [ ] Analytics dashboard

---

## Deployment Strategy

### Cloudflare Pages Configuration

```toml
# wrangler.toml
name = "groveui-docs"
compatibility_date = "2025-12-03"
pages_build_output_dir = ".svelte-kit/cloudflare"

[build]
command = "pnpm build"
cwd = "."

[[build.environment]]
NODE_VERSION = "20"
```

### Build Command
```bash
pnpm build
```

### Environment Variables
```
PUBLIC_SITE_URL=https://ui.grove.place
PUBLIC_GROVE_ENGINE_URL=... (if using external GroveEngine instance)
```

---

## Future Enhancements

### Phase 8+ (Post-Launch)
- [ ] Component variants generator
- [ ] Figma plugin for design tokens
- [ ] Storybook integration
- [ ] Accessibility testing suite
- [ ] Component usage analytics
- [ ] AI-powered component search
- [ ] Community showcase
- [ ] Contribution guidelines
- [ ] Internationalization

---

## Notes

### Why GroveEngine for CMS?
- **Consistency**: Both packages from AutumnsGrove
- **Integration**: Already uses Svelte 5 + SvelteKit
- **Features**: Markdown editing, gutter annotations match component library
- **Infrastructure**: Cloudflare-native (D1, R2, KV)
- **DX**: Familiar patterns for Grove platform users

### Content Strategy
- **Component docs**: Static generation (always available)
- **Guides/Blog**: CMS-driven (easy to update)
- **Examples**: Hybrid (code + explanatory content)

### Performance Considerations
- Lazy load heavy components (MarkdownEditor, Charts)
- Code split by category
- Image optimization for gallery examples
- Cache markdown rendering results
- Preload navigation data

---

*Last updated: 2025-12-03*
*Estimated total pages: 30-40*
*Estimated total components: 40+*
