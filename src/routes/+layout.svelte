<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="min-h-screen flex flex-col">
	<!-- Header -->
	<header class="border-b border-cream-400 bg-cream-50/80 backdrop-blur-grove sticky top-0 z-50">
		<nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
			<a href="/" class="flex items-center gap-2 text-bark hover:text-grove-600 transition-colors">
				<span class="text-xl font-serif font-medium">GroveUI</span>
				<span class="text-xs bg-grove-100 text-grove-700 px-2 py-0.5 rounded-full">v0.2.0</span>
			</a>
			<div class="flex items-center gap-6">
				<a href="/components" class="text-sm text-bark-600 hover:text-grove-600 transition-colors">Components</a>
				<a href="/tokens" class="text-sm text-bark-600 hover:text-grove-600 transition-colors">Tokens</a>
				<a href="/playground" class="text-sm text-bark-600 hover:text-grove-600 transition-colors">Playground</a>
				<a
					href="https://github.com/AutumnsGrove/GroveUI"
					target="_blank"
					rel="noopener noreferrer"
					class="text-sm text-bark-600 hover:text-grove-600 transition-colors"
				>
					GitHub
				</a>
			</div>
		</nav>
	</header>

	<!-- Main Content -->
	<main class="flex-1">
		{@render children()}
	</main>

	<!-- Footer -->
	<footer class="border-t border-cream-400 bg-cream-100 py-8">
		<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-bark-600">
			<p>GroveUI - A calm, organic design system for the Grove platform</p>
			<p class="mt-2 text-bark-500">"a place to Be"</p>
		</div>
	</footer>
</div>
