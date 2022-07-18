<script lang="ts">
	import { browser } from "$app/env";

	import { page } from "$app/stores";
	import { onDestroy, onMount } from "svelte";
	import { theme_index, theme, theme_html, menu_opened } from "../lib/stores";

	const ITEMS = [
		"API",
		"CompliBot",
		"Docs",
		"Dungeons",
		"Modpacks",
		"Mods",
		"Textures"
	];

	const PAGES = [{
		type: "API",
		url: "example-page",
		title: "Example title",
		date: "1999-10-22"
	}];

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

	/**
	 * Defines class based on number
	 * @param {number} i
	 */
	const peer = (i: number) => i%2===0 ? 'peer' : 'odd';
</script>
<header class={nav_class + ' ' + shadow_class}>
	<button id="menuBtn" class="header-button" type="button" on:click={() => $menu_opened = true}>Menu</button>
	<h1 class="small-display"><span class="height"></span><img src="https://database.faithfulpack.net/images/branding/site/favicon.ico" alt="F" /><span>DOCS</span></h1>
	<h1 class="big-display"><span class="height"></span><span>FAITHFUL PACK DOCS</span></h1>
	<div id="nav-swipe"></div>
	<div id="nav-bg" class={nav_class} on:click={() => $menu_opened = false}></div>
	<nav class={nav_class}>
		<div id="nav-img">Logo</div>
		<button id="DarkMode" on:click="{ theme_index.next }" style="height: 36px;" class="nav-link {$theme}">{ $theme_html }</button>

		{#if new URL($page.url).pathname !== '/'}
			<a class="nav-link home" style="height: 36px; line-height: 36px;" href="/">HOME</a>
		{/if}

		{#each ITEMS as item}
			<button class="collapsible">{item.toUpperCase()}</button>
			<div class="content">
				{#each PAGES as page, i}
					{#if page.type == item }
						<a class="nav-link {peer(i)}" href='/{ page.url.slice(0, -5)}}'>
							{page.title}<br>
							<span class="new-badge keepTag" data-date="{ page.date }" style="margin-right: 5px;">NEW</span>
							{#if 'deprecated' in page}<span class="deprecated-badge">DEPRECATED</span>{/if}
						</a>
					{/if}
				{/each}
			</div>
		{/each}
	</nav>
</header>
