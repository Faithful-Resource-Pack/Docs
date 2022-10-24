<script lang="ts">
	import { theme_index, theme, theme_html } from "../lib/stores";

    export let navLink: Boolean = false;
    export let text: Boolean = false;
    $: navTheme = navLink ? 'nav-link' : '';
</script>

{#if text}
<span id="DarkMode" class="{$theme}" on:click="{ theme_index.next }">{ $theme_html }</span>
{:else}
<button id="DarkMode" on:click="{ theme_index.next }" style="height: 36px;" class="{navTheme} {$theme}">{ $theme_html }</button>
{/if}