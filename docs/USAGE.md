# GroveUI - Usage Guide

## Installation

```bash
# Using pnpm (recommended)
pnpm add @groveengine/ui

# Using npm
npm install @groveengine/ui

# Using yarn
yarn add @groveengine/ui
```

### Peer Dependencies

GroveUI requires:
- `svelte` ^5.0.0
- `tailwindcss` ^3.4.0

---

## Setup

### 1. Configure Tailwind CSS

Add the Grove preset to your Tailwind configuration:

```javascript
// tailwind.config.js
import grovePreset from '@groveengine/ui/tailwind';

export default {
  presets: [grovePreset],
  content: [
    './src/**/*.{html,js,svelte,ts}',
    // Include GroveUI components in content scanning
    './node_modules/@groveengine/ui/**/*.{html,js,svelte,ts}'
  ],
};
```

### 2. Import Base Styles (Optional)

If you want Grove's base styles:

```css
/* app.css or +layout.svelte */
@import '@groveengine/ui/styles';
```

Or import specific style modules:

```css
@import '@groveengine/ui/styles/tokens';  /* CSS custom properties */
@import '@groveengine/ui/styles/content'; /* Prose/content styles */
```

---

## Importing Components

### Default Import (All Components)

```typescript
import {
  // UI Components
  Button,
  Card,
  Input,
  Dialog,
  Select,
  Tabs,

  // Gallery
  ImageGallery,
  Lightbox,

  // Editor
  MarkdownEditor,

  // Gutter
  ContentWithGutter,
  TableOfContents,
} from '@groveengine/ui';
```

### Category Imports (Smaller Bundles)

```typescript
// Basic UI only
import { Button, Card, Input, Badge } from '@groveengine/ui/ui';

// Gallery only
import { ImageGallery, Lightbox, ZoomableImage } from '@groveengine/ui/gallery';

// Editor only
import { MarkdownEditor, GutterManager } from '@groveengine/ui/editor';

// Gutter system only
import { ContentWithGutter, TableOfContents, MobileTOC } from '@groveengine/ui/gutter';
```

### Primitive Imports (Advanced)

For maximum control, import primitives directly:

```typescript
import * as Dialog from '@groveengine/ui/primitives/dialog';
import * as Select from '@groveengine/ui/primitives/select';
```

---

## Component Examples

### Button

```svelte
<script>
  import { Button } from '@groveengine/ui';
</script>

<!-- Variants -->
<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>

<!-- Sizes -->
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

<!-- With icon -->
<Button>
  <IconPlus class="w-4 h-4 mr-2" />
  Add Item
</Button>

<!-- Disabled -->
<Button disabled>Disabled</Button>
```

### Card

```svelte
<script>
  import { Card } from '@groveengine/ui';
</script>

<Card>
  <Card.Header>
    <Card.Title>Card Title</Card.Title>
    <Card.Description>Optional description</Card.Description>
  </Card.Header>
  <Card.Content>
    <p>Card content goes here.</p>
  </Card.Content>
  <Card.Footer>
    <Button>Action</Button>
  </Card.Footer>
</Card>
```

### Dialog

```svelte
<script>
  import { Button, Dialog } from '@groveengine/ui';
</script>

<Dialog.Root>
  <Dialog.Trigger asChild let:builder>
    <Button builders={[builder]}>Open Dialog</Button>
  </Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Header>
      <Dialog.Title>Confirm Action</Dialog.Title>
      <Dialog.Description>
        Are you sure you want to proceed?
      </Dialog.Description>
    </Dialog.Header>
    <Dialog.Footer>
      <Dialog.Close asChild let:builder>
        <Button variant="outline" builders={[builder]}>Cancel</Button>
      </Dialog.Close>
      <Button>Confirm</Button>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog.Root>
```

### ImageGallery

```svelte
<script>
  import { ImageGallery } from '@groveengine/ui/gallery';

  const images = [
    { src: '/images/photo1.jpg', alt: 'Photo 1', caption: 'Beautiful sunset' },
    { src: '/images/photo2.jpg', alt: 'Photo 2', caption: 'Mountain view' },
    { src: '/images/photo3.jpg', alt: 'Photo 3', caption: 'Ocean waves' },
  ];
</script>

<ImageGallery {images} columns={3} />
```

### ContentWithGutter

```svelte
<script>
  import { ContentWithGutter } from '@groveengine/ui/gutter';

  const gutterItems = [
    { id: 'note-1', type: 'note', content: 'Important context', targetId: 'para-1' },
    { id: 'link-1', type: 'link', content: 'Related article', url: '/blog/related', targetId: 'para-2' },
  ];
</script>

<ContentWithGutter {gutterItems}>
  <p id="para-1">Main content paragraph one...</p>
  <p id="para-2">Main content paragraph two...</p>
</ContentWithGutter>
```

---

## Using Design Tokens

### In TypeScript/JavaScript

```typescript
import { colors } from '@groveengine/ui/tokens';

// Access colors programmatically
console.log(colors.grove.DEFAULT); // '#16a34a'
console.log(colors.bark[900]);     // '#3d2914'
```

### In Tailwind Classes

```svelte
<!-- Grove colors -->
<div class="bg-grove-100 text-grove-800">Grove themed</div>

<!-- Bark colors -->
<div class="bg-bark-50 text-bark-900">Bark themed</div>

<!-- Cream colors -->
<div class="bg-cream text-bark">Cream background</div>

<!-- Shadows -->
<div class="shadow-grove-md">Medium shadow</div>

<!-- Animations -->
<div class="animate-fade-in">Fades in</div>
<div class="animate-bloom">Blooms in</div>
```

### Custom CSS Properties

If you import the tokens CSS:

```css
.my-element {
  color: var(--grove-600);
  background: var(--cream-DEFAULT);
  box-shadow: var(--shadow-grove);
}
```

---

## Utilities

### cn() - Class Name Helper

Combines classes and resolves Tailwind conflicts:

```typescript
import { cn } from '@groveengine/ui/utils';

// Basic usage
cn('px-4 py-2', 'text-white')
// → 'px-4 py-2 text-white'

// Conflict resolution (later wins)
cn('px-2', 'px-4')
// → 'px-4'

// Conditional classes
cn('base', isActive && 'active', className)

// Object syntax
cn('base', { 'active': isActive, 'disabled': isDisabled })

// Array syntax
cn(['px-4', 'py-2'], someCondition && 'extra')
```

---

## Customization

### Overriding Component Styles

All components accept a `class` prop:

```svelte
<Button class="rounded-full px-8">Pill Button</Button>
```

### Extending the Tailwind Preset

```javascript
// tailwind.config.js
import grovePreset from '@groveengine/ui/tailwind';

export default {
  presets: [grovePreset],
  theme: {
    extend: {
      colors: {
        // Add your custom colors
        brand: {
          500: '#your-color',
        },
      },
    },
  },
};
```

### Creating Custom Variants

```svelte
<script>
  import { Button } from '@groveengine/ui';
  import { cn } from '@groveengine/ui/utils';

  // Create a custom button variant
  const CustomButton = (props) => {
    return Button({
      ...props,
      class: cn('bg-brand-500 hover:bg-brand-600', props.class),
    });
  };
</script>
```

---

## TypeScript Support

All components are fully typed. Import types as needed:

```typescript
import type { ButtonProps } from '@groveengine/ui';

interface MyComponentProps {
  buttonVariant?: ButtonProps['variant'];
}
```

---

## Accessibility

GroveUI components are built on bits-ui and follow WAI-ARIA guidelines:

- **Keyboard navigation** - All interactive elements are keyboard accessible
- **Focus management** - Proper focus trapping in modals/dialogs
- **ARIA attributes** - Correct roles, labels, and states
- **Screen reader support** - Meaningful announcements

---

## Browser Support

GroveUI supports all modern browsers:

- Chrome/Edge 88+
- Firefox 78+
- Safari 14+

---

## Troubleshooting

### Components Not Styled

Make sure you've configured Tailwind to scan GroveUI:

```javascript
// tailwind.config.js
content: [
  './src/**/*.{html,js,svelte,ts}',
  './node_modules/@groveengine/ui/**/*.{html,js,svelte,ts}' // Add this
]
```

### TypeScript Errors

Ensure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "moduleResolution": "bundler"
  }
}
```

### Import Errors

Make sure you're using the correct import path:

```typescript
// Correct
import { Button } from '@groveengine/ui';
import { Button } from '@groveengine/ui/ui';

// Wrong
import { Button } from '@groveengine/ui/components/ui/Button';
```
