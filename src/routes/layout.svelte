<!-- Recognized as layout so you can call loader here -->

<script lang="ts">
	import { browser } from '$app/env';
	import { page } from "$app/stores";
	import Header from '../components/header.svelte';
	import '../css/app.scss';
	import { theme } from "../lib/stores";

	// mdsvex title prop
	export let title;

	$: domain = $page.url.hostname;
	$: full_title = `Faithful Pack Docs - ${title}`;
	$: year = new Date().getFullYear().toString();
	$: url = $page.url.href;
</script>

<svelte:head>
	<title>{full_title}</title>

	<meta property="og:title" content={full_title}>
	<meta property="og:url" content={url}>
	
	<meta name="twitter:title" content={full_title}>
	<meta property="twitter:domain" content={domain}>
	<meta property="twitter:url" content={url}>
	
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