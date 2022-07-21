<!-- Recognized as layout so you can call loader here -->

<script lang="ts">
	import { browser } from '$app/env';
	import Header from '../components/header.svelte';
	import '../css/app.scss';
	import { theme } from "../lib/stores";

	// mdsvex title prop
	export let title;

	$: year = new Date().getFullYear().toString();
</script>

<svelte:head>
	<title>Faithful Pack Docs - {title}</title>
	{#if $theme === 'dark' || ($theme === 'auto' && browser && window.matchMedia('(prefers-color-scheme: dark)').matches)}
		<style lang="scss">
			@use "../css/dark.scss";
		</style>
	{/if}
</svelte:head>

<!-- Give posts back to layout -->
<Header />

<main>
	<slot />
</main>

<footer>
	<p>
		&copy; Faithful Team { year }
	</p>
</footer>