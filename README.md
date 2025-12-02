# GroveUI

**Grove Design System** - A calm, organic component library for the Grove platform.

*"a place to Be"*

---

## Overview

GroveUI (`@groveengine/ui`) is the dedicated UI layer for the Grove ecosystem. It provides:

- **UI Components** - Button, Card, Input, Dialog, Select, Tabs, Accordion, and more
- **Gallery Components** - ImageGallery, Lightbox, ZoomableImage
- **Editor Components** - MarkdownEditor, GutterManager
- **Gutter System** - ContentWithGutter, TableOfContents, MobileTOC
- **Design Tokens** - Colors, typography, spacing, animations
- **Tailwind Preset** - Ready-to-use Tailwind configuration

Built with **Svelte 5**, **TypeScript**, and **Tailwind CSS**.

---

## Installation

```bash
pnpm add @groveengine/ui
```

## Quick Start

### Import Components

```typescript
// Import everything
import { Button, Card, ImageGallery, ContentWithGutter } from '@groveengine/ui';

// Or import from specific categories
import { Button, Card, Input } from '@groveengine/ui/ui';
import { ImageGallery, Lightbox } from '@groveengine/ui/gallery';
import { MarkdownEditor } from '@groveengine/ui/editor';
import { ContentWithGutter, TableOfContents } from '@groveengine/ui/gutter';

// Import utilities
import { cn } from '@groveengine/ui/utils';
import { colors } from '@groveengine/ui/tokens';
```

### Use the Tailwind Preset

```javascript
// tailwind.config.js
import grovePreset from '@groveengine/ui/tailwind';

export default {
  presets: [grovePreset],
  content: ['./src/**/*.{html,js,svelte,ts}'],
};
```

---

## Component Categories

### UI Components (`@groveengine/ui/ui`)

Basic building blocks for interfaces:

| Component | Description |
|-----------|-------------|
| `Button` | Primary, secondary, ghost, and link variants |
| `Card` | Container with header, content, footer |
| `Input` | Text input with validation states |
| `Textarea` | Multi-line text input |
| `Select` | Dropdown selection |
| `Dialog` | Modal dialogs |
| `Sheet` | Slide-out panels |
| `Tabs` | Tab navigation |
| `Accordion` | Collapsible sections |
| `Badge` | Status indicators |
| `Toast` | Notifications |
| `Skeleton` | Loading placeholders |
| `Table` | Data tables |

### Gallery Components (`@groveengine/ui/gallery`)

Media display components:

| Component | Description |
|-----------|-------------|
| `ImageGallery` | Grid of images with lightbox |
| `Lightbox` | Full-screen image viewer |
| `LightboxCaption` | Image captions |
| `ZoomableImage` | Pinch-to-zoom image |

### Editor Components (`@groveengine/ui/editor`)

Content creation tools:

| Component | Description |
|-----------|-------------|
| `MarkdownEditor` | Full-featured markdown editor |
| `GutterManager` | Gutter annotation editor |

### Gutter System (`@groveengine/ui/gutter`)

The Grove annotation system:

| Component | Description |
|-----------|-------------|
| `ContentWithGutter` | Main content with side annotations |
| `LeftGutter` | Annotation container |
| `GutterItem` | Individual annotation |
| `TableOfContents` | Auto-generated TOC |
| `MobileTOC` | Mobile navigation |
| `CollapsibleSection` | Expandable content |

---

## Design Tokens

GroveUI uses a carefully crafted color palette:

### Colors

```typescript
// Primary: Grove Green
grove: {
  50: '#f0fdf4',
  600: '#16a34a', // PRIMARY
  900: '#14532d',
}

// Neutrals: Bark (dark) and Cream (light)
bark: {
  DEFAULT: '#3d2914',
  ...
}
cream: {
  DEFAULT: '#fefdfb',
  ...
}
```

### Typography

- **Serif** - Georgia for headings
- **Sans** - System fonts for body
- **Mono** - SF Mono for code

### Animations

Organic, nature-inspired animations:
- `fade-in`, `fade-out`, `fade-in-up`
- `grow`, `shrink`, `bloom`
- `leaf-fall`, `leaf-sway`
- `slide-in-*` variants

---

## Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build
pnpm build

# Build package for npm
pnpm package

# Type check
pnpm check
```

---

## Architecture

GroveUI is part of the Grove ecosystem:

```
┌─────────────────────────────────────────────────┐
│  GroveUI (@groveengine/ui)                      │
│  └── UI components, tokens, styles             │
└─────────────────────────────────────────────────┘
                      ↑ imports
┌─────────────────────────────────────────────────┐
│  GroveEngine (@groveengine/engine)              │
│  └── Blog engine, auth, markdown, payments     │
└─────────────────────────────────────────────────┘
                      ↑ powers
┌─────────────────────────────────────────────────┐
│  grove.place websites                           │
│  └── Multi-tenant blogs on Cloudflare          │
└─────────────────────────────────────────────────┘
```

---

## License

MIT

---

**Demo Site**: [ui.grove.place](https://ui.grove.place)
**Repository**: [github.com/AutumnsGrove/GroveUI](https://github.com/AutumnsGrove/GroveUI)
