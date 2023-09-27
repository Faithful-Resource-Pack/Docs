<script lang="ts">
	import Layout from "./layout.svelte";

	import { getContext } from 'svelte';
	const posts: App.Post[] = getContext('posts');
	const categories: string[] = getContext('categories');

	let title = "Home";

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

<Layout title="Home">
	<p>
		<img src="https://database.faithfulpack.net/images/branding/wordmarks/outlined/flat/faithful_flat_border.png" alt="Wordmark" width="100%" height="100%">
	</p>

	<h1>Welcome to the Docs.</h1>
	<p style="text-align: justify;">Here you will find documentation and guides related to the Faithful Project for texture making, moderation, and more.</p>

	<h2>Tags</h2>
	<ul class="no-heads">
		<li><span class="new-badge">NEW</span>: This is a recently released article.</li>
		<li><span class="deprecated-badge">DEPRECATED</span>: This article is no longer being updated and may contain outdated information.</li>
		<li><span class="archived-badge">ARCHIVED</span>: This article is no longer relevant to Faithful, but is staying up for archival purposes.</li>
	</ul>

	<h2>Table of Contents</h2>
	<div class="table-of-content" style="position: inherit;">
		{#each categories as category}
			<h3>{ category }</h3>
			<ul>
			{#each posts.filter(f => f.meta.type === category) as post}
				<li>
					<a href={post.path}>
						{post.meta.title}
						{#if isNew(post.meta.date) }<span class="new-badge keepTag" style="margin-right: 5px;">NEW</span>{/if}
						{#if 'deprecated' in post.meta && post.meta.deprecated}<span class="deprecated-badge">DEPRECATED</span>{/if}
                        {#if 'archived' in post.meta && post.meta.archived}<span class="archived-badge">ARCHIVED</span>{/if}
					</a>
				</li>
			{/each}
			</ul>
		{/each}
	</div>
</Layout>
