<script lang="ts">
    import Fa from "svelte-fa/src/fa.svelte";
    import { faSun, faCircleHalfStroke, faMoon } from "@fortawesome/free-solid-svg-icons";
	import { theme_index, theme, theme_html } from "../lib/stores";
	import { derived } from "svelte/store";

    export let navLink: Boolean = false;
    export let text: Boolean = false;
    export let inline: Boolean = false;
    $: navTheme = navLink ? 'nav-link' : '';

    const iconTheme = derived(theme, v => {
        if(v === 'auto') return faCircleHalfStroke
        else if(v === 'dark') return faMoon
        else return faSun
    })
</script>

{#if text}
<span id="DarkMode" class="{$theme}" on:click="{ theme_index.next }" on:keyup={() => {}}>
    { $theme_html }
</span>
{:else}
<button id="DarkMode" class:inline={inline} class:float={!inline} on:click="{ theme_index.next }" style="height: 36px;" class="{navTheme} {$theme}">
    <span>
        { $theme_html }
    </span><span id="icon"><Fa icon={$iconTheme} /></span>
</button>
{/if}

<style>
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
        margin-left: 10px;
    }
    #DarkMode.float #icon {
        float: right;
    }
</style>