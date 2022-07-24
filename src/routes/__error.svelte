<!--
    uhh lets just hope we don't get any other error than 404 lol
-->

<script context="module">
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

    export let currentRoute;

    $: domain = $page.url.hostname;
	$: full_title = `Faithful Pack Docs - 404`;
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

<Header />

{#key currentRoute}
    <main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
        <h1 class="center">Are you lost in The End?</h1>
    	<p class="center">
    		Unfortunately the page you requested doesn't exist!<br>We recommand you to check the spelling or go to the <strong><a href="/">main page</a></strong> to find what you were looking for.
    	</p>
    </main>
{/key}

<Footer />

<style>
    h1, p {
        color: #ccc;
    }

    main {
        background: #120E19 url(/images/the_end.jpg) no-repeat center;
    }
</style>