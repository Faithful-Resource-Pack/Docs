<script lang="ts">
	import { browser } from '$app/env';
	import Header from '../components/header.svelte';
	import '../css/app.scss';
	import "../css/variables.scss";
	export let title;

	import { theme } from "../lib/stores";
	
</script>

<svelte:head>
	<title>{title}</title>
	{#if $theme === 'dark' || ($theme === 'auto' && browser && window.matchMedia('(prefers-color-scheme: dark)').matches)}
		<style lang="scss">
			@use "../css/dark.scss";
		</style>
	{/if}
</svelte:head>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>this is a thing</p>
</footer>