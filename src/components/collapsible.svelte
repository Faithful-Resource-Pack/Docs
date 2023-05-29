<script lang="ts">
	import Fa from "svelte-fa";
	import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
	import NavItem from "./navItem.svelte";

  export let name: string;
  export let posts: App.Post[];

  let collapsed = false;

  let content_el: HTMLElement;

  $: collapsed_icon  = collapsed ? faPlus : faMinus;
  $: collapsed_class = collapsed ? "" : " active";
  $: collapsed_style = collapsed ? "" : `max-height: none`;
</script>

<div>
  <div on:click={() => collapsed = !collapsed} on:keydown={() => {}}>
    <button class="collapsible{collapsed_class}">
      {name.toUpperCase()} <span class="icon-right"><Fa icon={collapsed_icon} /></span>
    </button>
  </div>
  <div class="content" style={collapsed_style} bind:this={content_el}>
    {#each posts as post}
      <NavItem {post} />
    {/each}
  </div>
</div>

<style lang="scss">
	.collapsible .icon-right {
		float: right;
	}
</style>
