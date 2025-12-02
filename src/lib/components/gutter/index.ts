// GroveUI - Gutter System Components
//
// This module exports the Grove annotation/gutter system:
// ContentWithGutter, LeftGutter, GutterItem, TableOfContents, MobileTOC, CollapsibleSection
//
// The gutter system is a unique Grove feature that displays annotations,
// table of contents, and supplementary content alongside main prose.
//
// Usage:
//   import { ContentWithGutter, TableOfContents } from '@groveengine/ui/gutter';

// Gutter system components
export { default as ContentWithGutter } from './ContentWithGutter.svelte';
export { default as LeftGutter } from './LeftGutter.svelte';
export { default as GutterItem } from './GutterItem.svelte';
export { default as TableOfContents } from './TableOfContents.svelte';
export { default as MobileTOC } from './MobileTOC.svelte';
export { default as CollapsibleSection } from './CollapsibleSection.svelte';

export const GUTTER_VERSION = '0.2.0';
