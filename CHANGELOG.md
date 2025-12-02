# Changelog

All notable changes to GroveUI will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [0.2.0] - Unreleased

### Added

- Initial project setup as dedicated GroveUI repository
- Package configuration with subpath exports:
  - `@groveengine/ui` - Main entry
  - `@groveengine/ui/ui` - Basic UI components
  - `@groveengine/ui/gallery` - Gallery components
  - `@groveengine/ui/editor` - Editor components
  - `@groveengine/ui/gutter` - Gutter system
  - `@groveengine/ui/tokens` - Design tokens
  - `@groveengine/ui/utils` - Utilities
  - `@groveengine/ui/tailwind` - Tailwind preset
- Tailwind CSS preset with Grove design tokens
- `cn()` utility for class name merging
- Demo site scaffolding
- Cloudflare Pages deployment configuration

### Changed

- Separated from GroveEngine monorepo into standalone repository
- Version bump from 0.1.0 to 0.2.0

### Migration from @groveengine/ui 0.1.0

If upgrading from the previous version in GroveEngine:

```typescript
// Old import (from GroveEngine monorepo)
import { Button } from '@groveengine/ui';

// New import (same, but from GroveUI)
import { Button } from '@groveengine/ui';

// New: Category-specific imports available
import { Button } from '@groveengine/ui/ui';
import { ImageGallery } from '@groveengine/ui/gallery';
```

---

## [0.1.0] - Previous (in GroveEngine)

Initial version as part of the GroveEngine monorepo at `packages/ui/`.

### Included

- 17 basic UI components
- Design tokens (colors, typography, spacing)
- Tailwind preset
