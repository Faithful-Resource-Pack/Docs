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
  	const Hammer = await import("svelte-hammer")

		// ensure client-side code
		if(browser) {
			document.addEventListener('scroll', handleScroll);

			// nav-swipe is not null
			new Hammer.Hammer(document.getElementById('nav-swipe') as HTMLElement).on('swiperight', function() {
				menu_opened.set(true);
			});
		}
	})
</script>

<header class={$nav_class + ' ' + shadow_class}>
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
		<div id="nav-img">Logo</div>
		<ThemeButton navLink />

		{#if new URL($page.url).pathname !== '/'}
			<a class="nav-link home" style="height: 36px; line-height: 36px;" href="/">HOME <span class="icon-right"><Fa icon={faHome} /></span></a>
		{/if}

		{#each categories as item}
			<Collapsible name={item} posts={posts.filter(p => p.meta.type === item)} />
		{/each}
	</nav>
</header>

<style lang="scss">
	.nav-link .icon-right {
		float: right;
	}
</style>