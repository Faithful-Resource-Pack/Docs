<script lang="ts">
	import { browser } from "$app/env";
	import { page } from "$app/stores";
	import { onDestroy, onMount } from "svelte";
	import { theme_index, theme, theme_html, menu_opened } from "../lib/stores";
	import Collapsible from "./collapsible.svelte";

	import { getContext } from 'svelte';
	const posts: App.Post[] = getContext('posts');
	const categories: string[] = getContext('categories');

	let nav_class = menu_opened ? 'nav-open' : '';
  const unsubscribe = menu_opened.subscribe((value) => {
    nav_class = value ? 'nav-open' : '';
  });
  onDestroy(unsubscribe);

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

<header class={nav_class + ' ' + shadow_class}>
	<button id="menuBtn" class="header-button" type="button" on:click={() => $menu_opened = true}>Menu</button>
	<h1 class="small-display">
		<span class="height" /><a href="/">
			<img height="32" width="32" src="https://database.faithfulpack.net/images/branding/site/favicon.ico" alt="F"
			 /><span>DOCS</span>
		</a>
	</h1>
	<h1 class="big-display">
		<span class="height" /><span>
			<a href="/">FAITHFUL PACK DOCS</a>
		</span></h1>
	<div id="nav-swipe"></div>
	<div id="nav-bg" class={nav_class} on:click={() => $menu_opened = false}></div>
	<nav class={nav_class}>
		<div id="nav-img">Logo</div>
		<button id="DarkMode" on:click="{ theme_index.next }" style="height: 36px;" class="nav-link {$theme}">{ $theme_html }</button>

		{#if new URL($page.url).pathname !== '/'}
			<a class="nav-link home" style="height: 36px; line-height: 36px;" href="/">HOME</a>
		{/if}

		{#each categories as item}
			<Collapsible name={item} posts={posts.filter(p => p.meta.type === item)} />
		{/each}
	</nav>
</header>
