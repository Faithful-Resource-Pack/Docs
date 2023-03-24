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
	$: full_title = `404 - Faithful Pack Docs`;
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
		<div id="content">
			<div>
				<h1 class="center">Are you lost in The End?</h1>
				<p class="center">
					Unfortunately, the page you requested doesn't exist!<br>Try checking your spelling or going to the <a href="/">main page</a> to find what you were looking for.
				</p>
			</div>
		</div>
    </main>
{/key}

<Footer />

<style lang="scss">
    h1, p {
        color: #ccc;
    }

	main #content {
		padding-top: 56px;
		position: relative;
	}

    main #content::after {
		content: "";
		display: block;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
        background: #120E19 url(/images/the_end.jpg) no-repeat center;
    }

	@media (min-width: 650px) {
		main #content::after {
			@include menu-transition(left);
		}
		.nav-open + main #content::after {
			left: 350px;
		}
	}

	:global {
		body {
			background-color: transparent !important;
		}
		$text-color: #c9d1d9;
		header:not(.header-shadow) .maintitle {
			color: $text-color;
			text-shadow: 2px 2px 2px rgba(0,0,0,.75);
		}

		header:not(.header-shadow) {
			background: transparent !important;
		}

		footer {
			#{$texts} {
				color: $text-color;
			}
		}
	}
</style>