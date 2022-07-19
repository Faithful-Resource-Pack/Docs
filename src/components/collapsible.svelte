<script lang="ts">
  export let name: string;
  export let posts: App.Post[];

  let collapsed = true;

  let content_el: HTMLElement;

  $: collapsed_class = collapsed ? "" : " active";
  $: collapsed_style = collapsed ? "" : `max-height: ${content_el.scrollHeight}px`;

  let isNew = (date: string) => {
    if(date === undefined) return false;

    let delayedDate = new Date();
    delayedDate.setMonth(delayedDate.getMonth() - 1);

    let postDate = new Date();
    let args = date.split('/').map(el => Number.parseInt(el, 10));
    postDate.setDate(args[0]);
    postDate.setMonth(args[1] - 1);
    postDate.setFullYear(args[2]);

    if (isNaN(postDate.getTime())) return false;

    /**
     * If the post date is greater than today's date - 1 month, show the span
     */
    return postDate.getTime() > delayedDate.getTime()
  }
</script>

<div>
  <div on:click={() => collapsed = !collapsed}>
    <button class="collapsible{collapsed_class}">
      {name.toUpperCase()}
    </button>
  </div>
  <div class="content" style={collapsed_style} bind:this={content_el}>
    {#each posts as post}
      <a class="nav-link" href={ post.path }>
        {post.meta.title}<br>
        {#if isNew(post.meta.date) }<span class="new-badge keepTag" style="margin-right: 5px;">NEW</span>{/if}
        {#if 'deprecated' in post.meta && post.meta.deprecated}<span class="deprecated-badge">DEPRECATED</span>{/if}
      </a>
    {/each}
  </div>
</div>
