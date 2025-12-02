// GroveUI - Design Tokens
//
// This module exports design tokens for the Grove Design System:
// colors, typography, spacing, effects, animation
//
// Usage:
//   import { colors, grove, bark, cream } from '@groveengine/ui/tokens';

// Design tokens will be added here after extraction from GroveEngine
// The tokens define the visual language of the Grove platform:
// - Grove Green: Primary brand color (#16a34a)
// - Bark Brown: Text and dark accents (#3d2914)
// - Cream: Background and light surfaces (#fefdfb)

// Color palette exports (to be uncommented when tokens are added):
// export * from './colors.js';
// export * from './typography.js';
// export * from './spacing.js';
// export * from './effects.js';
// export * from './animation.js';

// Placeholder export with key colors for reference
export const colors = {
	grove: {
		DEFAULT: '#16a34a',
		50: '#f0fdf4',
		600: '#16a34a',
		900: '#14532d'
	},
	bark: {
		DEFAULT: '#3d2914',
		50: '#f9f6f3',
		900: '#3d2914'
	},
	cream: {
		DEFAULT: '#fefdfb',
		50: '#fefdfb',
		500: '#e2ddd0'
	}
} as const;

export const TOKENS_VERSION = '0.2.0';
