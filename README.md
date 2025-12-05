# GroveUI

## Deprecated

This repository has been merged into [GroveEngine](https://github.com/AutumnsGrove/GroveEngine).

Please use `@autumnsgrove/groveengine/ui` instead of `@groveengine/ui`.

---

## Migration Guide

### Update your imports:

```javascript
// Old (deprecated)
import { Button, Card } from '@groveengine/ui';
import { ImageGallery } from '@groveengine/ui/gallery';
import { cn } from '@groveengine/ui/utils';

// New
import { Button, Card } from '@autumnsgrove/groveengine/ui';
import { ImageGallery } from '@autumnsgrove/groveengine/ui/gallery';
import { cn } from '@autumnsgrove/groveengine/utils';
```

### Update your package.json:

```json
{
  "dependencies": {
    // Remove this:
    "@groveengine/ui": "^X.X.X",

    // Add this:
    "@autumnsgrove/groveengine": "^0.4.0"
  }
}
```

### Update tailwind.config.js:

```javascript
// Old
import grovePreset from '@groveengine/ui/tailwind';

// New
import grovePreset from '@autumnsgrove/groveengine/ui/tailwind';
```

### Update CSS imports:

```css
/* Old */
@import '@groveengine/ui/styles/grove.css';

/* New */
@import '@autumnsgrove/groveengine/ui/styles/grove.css';
```

---

## Why the merge?

The Grove platform components are now unified in a single package (`@autumnsgrove/groveengine`) for:

- **Simpler dependency management** - One package instead of two
- **Better versioning** - UI and engine features stay in sync
- **Easier updates** - Single version bump covers everything
- **Reduced duplication** - No shared code copied between packages

---

## New Package Structure

```
@autumnsgrove/groveengine
├── /ui              - All GroveUI components
│   ├── /gallery     - ImageGallery, Lightbox, ZoomableImage
│   ├── /charts      - BarChart, LineChart
│   ├── /content     - MarkdownRenderer, CodeBlock
│   ├── /forms       - SearchInput, FormField
│   ├── /indicators  - LoadingSpinner, ProgressBar
│   ├── /icons       - Icon components
│   ├── /states      - EmptyState, ErrorState
│   └── /styles      - CSS tokens and themes
├── /utils           - Utility functions
├── /auth            - Authentication utilities
├── /server          - Server-side helpers
├── /config          - Configuration
└── /payments        - Stripe integration
```

---

## Links

- **New Package**: [@autumnsgrove/groveengine on NPM](https://www.npmjs.com/package/@autumnsgrove/groveengine)
- **Repository**: [github.com/AutumnsGrove/GroveEngine](https://github.com/AutumnsGrove/GroveEngine)
- **Migration Template**: [CLIENT_TEMPLATE.md](https://github.com/AutumnsGrove/GroveEngine/blob/main/packages/engine/CLIENT_TEMPLATE.md)

---

*This repository is archived and no longer maintained.*
