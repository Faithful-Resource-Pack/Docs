<script lang="ts">
    import Fa from "svelte-fa/src/fa.svelte";
    import { faSun, faCircleHalfStroke, faMoon } from "@fortawesome/free-solid-svg-icons";
	import { theme_index, theme, theme_html, THEME_VALUES } from "../lib/stores";
	import { derived } from "svelte/store";

    export let navLink: Boolean = false;
    export let text: Boolean = false;
    export let inline: Boolean = false;
    $: navTheme = navLink ? 'nav-link' : '';
    $: height = navLink ? '36px' : 'auto';

    const iconTheme = derived(theme, v => {
        if(v === 'auto') return faCircleHalfStroke
        else if(v === 'dark') return faMoon
        else return faSun
    })
    const all_html = THEME_VALUES.map(t => t.html)
</script>

{#if text}
<span id="DarkMode" class="{$theme}" on:click="{ theme_index.next }" on:keyup={() => {}}>
    { $theme_html }
</span>
{:else}
<button id="DarkMode" class:inline={inline} class:float={!inline} on:click="{ theme_index.next }" style="height: {height}" class="{navTheme} {$theme}">
    <span class="mode-text">
        {#each all_html as wide_html}
            <span class="wide-html">{wide_html}</span>
        {/each}
        <span>{ $theme_html }</span>
    </span><span id="icon"><Fa icon={$iconTheme} /></span>
</button>
{/if}

<style lang="scss">
    #DarkMode {
        color: inherit;
    }
    #DarkMode > * {
        display: inline-block;
        vertical-align: middle;
    }
    #DarkMode.inline {
        background: transparent;
    }
    #DarkMode #icon {
        margin-left: 4px;
        width: 19px;
        height: 19px;
        text-align: center;
    }
    .inline .mode-text {
        margin-bottom: 1px;

        /* trick to get constant width trough text */
        text-align: left;
        & > span {
            display: block;
        }
        & .wide-html {
            height: 0px;
            max-height: 0px;
            overflow: hidden;
        }
    }
    #DarkMode > * {
        display: inline-block;
        vertical-align: middle;
    }
</style>