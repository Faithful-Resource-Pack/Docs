<!-- Recognized as layout so you can call loader here -->

<script context="module">
    // @ts-ignore
	export const load = ({ url }) => {
		const currentRoute = url.pathname;

		return {
			props: {
				currentRoute
			}
		};
	};
</script>

<script lang="ts">
	import { browser } from "$app/env";
	import { page } from "$app/stores";
	import Header from "../components/header.svelte";
	import Footer from "../components/footer.svelte";
	import "../css/app.scss";
	import { theme } from "../lib/stores";
	import { fade } from "svelte/transition";

	// mdsvex title prop
	// @ts-ignore
	export let title;
	// @ts-ignore
	export let currentRoute;

	$: domain = $page.url.hostname;
	// @ts-ignore
	$: full_title = `${title} - Faithful Pack Docs`;
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
	{:else if $theme === 'light' || ($theme === 'auto' && browser && window.matchMedia('(prefers-color-scheme: light)').matches)}
		<style lang="scss">
			@use "../css/light.scss";
		</style>
	{/if}
</svelte:head>

<!-- Give posts back to layout -->
<Header />

{#key currentRoute}
	<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
        <div id="container">
            <slot />
        </div>
	</main>
{/key}

<Footer />