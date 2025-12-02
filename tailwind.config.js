import grovePreset from './src/lib/tailwind.preset.js';

/** @type {import('tailwindcss').Config} */
export default {
	presets: [grovePreset],
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [
		require('@tailwindcss/typography')
	]
};
