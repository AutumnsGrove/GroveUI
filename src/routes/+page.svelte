<script lang="ts">
	// Homepage for GroveUI documentation site
</script>

<svelte:head>
	<title>GroveUI - Grove Design System</title>
	<meta name="description" content="A calm, organic design system for the Grove platform. Built with Svelte 5 and Tailwind CSS." />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
	<!-- Hero -->
	<section class="text-center mb-16">
		<h1 class="text-display font-serif text-bark mb-6">
			Grove Design System
		</h1>
		<p class="text-body-lg text-bark-600 max-w-2xl mx-auto mb-8">
			A calm, organic component library for the Grove platform.
			Built with Svelte 5 and Tailwind CSS.
		</p>
		<p class="text-lg italic text-grove-600 font-serif">"a place to Be"</p>
	</section>

	<!-- Installation -->
	<section class="mb-16">
		<h2 class="text-heading-lg font-serif text-bark mb-4">Installation</h2>
		<div class="bg-bark-900 text-cream-100 rounded-grove p-4 font-mono text-sm overflow-x-auto">
			<code>pnpm add @groveengine/ui</code>
		</div>
	</section>

	<!-- Quick Start -->
	<section class="mb-16">
		<h2 class="text-heading-lg font-serif text-bark mb-4">Quick Start</h2>
		<div class="bg-bark-900 text-cream-100 rounded-grove p-4 font-mono text-sm overflow-x-auto">
			<pre>{`// Import components
import { Button, Card } from '@groveengine/ui';

// Or import from specific categories
import { ImageGallery } from '@groveengine/ui/gallery';
import { ContentWithGutter } from '@groveengine/ui/gutter';
import { MarkdownEditor } from '@groveengine/ui/editor';

// Import the Tailwind preset
import grovePreset from '@groveengine/ui/tailwind';`}</pre>
		</div>
	</section>

	<!-- Component Categories -->
	<section class="mb-16">
		<h2 class="text-heading-lg font-serif text-bark mb-6">Component Categories</h2>
		<div class="grid gap-4 sm:grid-cols-2">
			<a href="/components/ui" class="block p-6 bg-cream-100 rounded-grove-lg border border-cream-400 hover:border-grove-300 hover:shadow-grove transition-all">
				<h3 class="text-heading font-serif text-bark mb-2">UI Components</h3>
				<p class="text-body-sm text-bark-600">Button, Card, Input, Dialog, Select, Tabs, and more basic building blocks.</p>
			</a>
			<a href="/components/gallery" class="block p-6 bg-cream-100 rounded-grove-lg border border-cream-400 hover:border-grove-300 hover:shadow-grove transition-all">
				<h3 class="text-heading font-serif text-bark mb-2">Gallery</h3>
				<p class="text-body-sm text-bark-600">ImageGallery, Lightbox, ZoomableImage for media display.</p>
			</a>
			<a href="/components/editor" class="block p-6 bg-cream-100 rounded-grove-lg border border-cream-400 hover:border-grove-300 hover:shadow-grove transition-all">
				<h3 class="text-heading font-serif text-bark mb-2">Editor</h3>
				<p class="text-body-sm text-bark-600">MarkdownEditor and GutterManager for content creation.</p>
			</a>
			<a href="/components/gutter" class="block p-6 bg-cream-100 rounded-grove-lg border border-cream-400 hover:border-grove-300 hover:shadow-grove transition-all">
				<h3 class="text-heading font-serif text-bark mb-2">Gutter System</h3>
				<p class="text-body-sm text-bark-600">ContentWithGutter, TableOfContents, and annotation components.</p>
			</a>
		</div>
	</section>

	<!-- Status Banner -->
	<section class="bg-grove-50 border border-grove-200 rounded-grove-lg p-6 text-center">
		<p class="text-grove-800 font-medium mb-2">🌱 Coming Soon</p>
		<p class="text-grove-700 text-sm">
			GroveUI is being set up. Components will be extracted from GroveEngine shortly.
		</p>
	</section>
</div>
