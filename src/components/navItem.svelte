<script lang="ts">
	import Fa from "svelte-fa";
	import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
	import { page } from "$app/stores";
	import { onMount } from "svelte";

	export let post: App.Post;

	let isNew = (date: string) => {
		if (date === undefined) return false;

		let delayedDate = new Date();
		delayedDate.setMonth(delayedDate.getMonth() - 1);

		let postDate = new Date();
		let args = date.split('/').map((el) => Number.parseInt(el, 10));
		postDate.setDate(args[0]);
		postDate.setMonth(args[1] - 1);
		postDate.setFullYear(args[2]);

		if (isNaN(postDate.getTime())) return false;

		/**
		 * If the post date is greater than today's date - 1 month, show the span
		 */
		return postDate.getTime() > delayedDate.getTime();
	};

  $: hasToc = post.toc !== null;
  $: showToc = hasToc && $page.url.pathname == post.path;
  $: adaptedToc = post.toc !== null ? post.toc.replaceAll('href="#', `href="${post.path}/#`) : post.toc;

  let collapsed = true;
  $: collapsed_icon  = collapsed ? faPlus : faMinus;
  $: collapsed_style = collapsed ? "" : `max-height: none`;

  $: {
    collapsed = $page.url.pathname != post.path
  }
</script>

<div class="nav-link">
  <span class="nav-text">
    <a class="nav-text-content" href={post.path}>
      {post.meta.title}
      {#if isNew(post.meta.date)}<span class="new-badge keepTag" style="margin-right: 5px;">NEW</span
        >{/if}
      {#if 'deprecated' in post.meta && post.meta.deprecated}<span class="deprecated-badge"
          >DEPRECATED</span
        >{/if}
      {#if 'archived' in post.meta && post.meta.archived}<span class="archived-badge">ARCHIVED</span
        >{/if}
    </a>
  </span>
  {#if showToc}
    <button class="toc-collapse" on:click|stopPropagation={() => collapsed = !collapsed} on:keydown={() => {}}>
      <span class="icon-right"><Fa icon={collapsed_icon} />
    </button>
  {/if}
</div>
{#if showToc}
	<div class="toc" style={collapsed_style}>
		{ @html adaptedToc }
	</div>
{/if}

<style lang="scss">
  .nav-link {
    display: flex;
    align-items: center;
    padding-right: 0 !important;
  }

  a, .toc :global(a) {
    color: inherit !important;
  }

  .nav-text {
    flex-grow: 1;
    line-height: 1;
    min-height: 36px;
    display: flex;
    align-items: center;
    padding-top: 6px;
    padding-bottom: 6px;
  }

  .toc-collapse {
    background: transparent;
    padding-left: 16px;
    padding-right: 16px;
    width: 46px;
    z-index: 5;
  }

	.toc {
		text-align: left;
		font-size: 0.75em;
		padding-right: 0;
    max-height: 0;
    overflow: hidden;

    & :global(> *) {
        padding-top: 0.4em !important;
        padding-bottom: 0.4em !important;
      }

		:global {
			ul,
			ol {
				margin-top: 0;
				margin-bottom: 0;
				padding: 0 0 0 1em;
			}

			li {
				line-height: 1.3;
        padding-right: 16px;

				a {
					display: block;
				}
			}
		}
	}
</style>
