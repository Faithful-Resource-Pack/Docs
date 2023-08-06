<script lang="ts">
	import { browser } from "$app/env";
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import { menu_opened } from "../lib/stores";
	import Collapsible from "./collapsible.svelte";

	import { getContext } from 'svelte';
	import ThemeButton from "./themeButton.svelte";
	import { derived } from "svelte/store";

	import Fa from "svelte-fa";
	import { faHome } from "@fortawesome/free-solid-svg-icons";

	const posts: App.Post[] = getContext('posts');
	const categories: string[] = getContext('categories');

	let nav_class = derived(menu_opened, $value => $value ? 'nav-open' : '');
	let shadow = false;
	$: shadow_class = shadow ? 'header-shadow' : '';

	function handleScroll() {
		if(shadow) {
			if(window.scrollY < 5) {
				shadow = false;
			}
		} else {
			if(window.scrollY > 0) {
				shadow = true;
			}
		}
	}

	// after content rendered to the DOM
	onMount(async () => {
		// swipe event import
  		const Hammer = await import("svelte-hammer")

		// ensure client-side code
		if(browser) {
			handleScroll(); // make sure at startup
			document.addEventListener('scroll', handleScroll);

			// nav-swipe is not null
			new Hammer.Hammer(document.getElementById('nav-swipe') as HTMLElement).on('swiperight', function() {
				menu_opened.set(true);
			});
		}
	})
</script>

<header class={$nav_class + ' ' + shadow_class} class:border={shadow}>
	<button id="menuBtn" class="header-button" type="button" on:click={ menu_opened.toggle }>Menu</button>
	<h1 class="small-display maintitle">
		<span class="height" /><a href="/">
			<img height="32" width="32" src="https://database.faithfulpack.net/images/branding/site/favicon.ico" alt="F"
			 /><span>DOCS</span>
		</a>
	</h1>
	<h1 class="big-display maintitle">
		<span class="height" /><span>
			<a href="/">FAITHFUL PACK DOCS</a>
		</span></h1>
	<div id="nav-swipe"></div>
	<div id="nav-bg" class={$nav_class} on:click={() => $menu_opened = false} on:keydown={() => {}}></div>
	<nav class={$nav_class}>
		<div id="nav-img" class:border={shadow}>
			<a href="/">
				<img height="48" width="48" src="https://raw.githubusercontent.com/Faithful-Resource-Pack/Branding/main/logos/transparent/64/plain_logo.png" alt="F">
				<Fa id="icon" icon={faHome} size="xs" />
			</a>
			<ThemeButton inline={true} />
		</div>

		<div id="nav-list">
			{#each categories as item}
				<Collapsible name={item} posts={posts.filter(p => p.meta.type === item)} />
			{/each}
		</div>
	</nav>
</header>

<style lang="scss">
	.nav-link .icon-right {
		float: right;
	}

	$border-color: var(--header-border-color, rgba(0,0,0,0.5));
	// Header little border
	header {
		@include little-border(transparent);

		&.border {
			@include little-border-color($border-color);
		}
	}

	#nav-img {
		position: relative;
		@include little-border(transparent);

		&.border {
			@include little-border-color($border-color);
		}
	}

	#nav-img {
		a {
			margin: 4px 0;
			padding-right: 10px;
			color: inherit;

			& :global( > *) {
				display: inline-block;
				vertical-align: middle;
				transition: opacity 0.2s ease;
			}

			// opacity effect
			& :global( > div) {
				opacity: 0.8;
			}
			& :global( > div + svg) {
				margin-left: 3px;
				opacity: 0.7;
			}
			&:hover :global( > *) {
				opacity: 1;
			}
		}
	}

	nav {
		display: flex;
		flex-direction: column;
		color: var(--nav-text-color, inherit);

		#nav-list {
			flex-grow: 1;
			overflow-y: auto;
			padding-top: 3px;
		}

		& :global {
			ol, ul, li {
				color: var(--nav-text-color, inherit);
			}
		}
	}
</style>