<script lang="ts">
	import Layout from "./layout.svelte";

	import { getContext } from 'svelte';
	const posts: App.Post[] = getContext('posts');
	const categories: string[] = getContext('categories');

	let title = "Home";
</script>

<Layout title="Home">
	<p style="text-align: center;">
		<img src="https://database.faithfulpack.net/images/branding/wordmarks/outlined/flat/faithful_flat_border.png" alt="Wordmark" width="100%" height="100%">
	</p>

	<h1>Welcome to The Docs.</h1>
	<p style="text-align: justify;">Here you will find documentation and guides related to the Faithful Project, including the Faithful Resource Packs, Discord bots and website.</p>

	<h2>Tags</h2>
	<ul class="no-heads">
		<li><span class="new-badge">NEW</span>: This is a recently released article.</li>
		<li><span class="deprecated-badge">DEPRECATED</span>: This article is no longer being updated and may contain outdated information.</li>
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
					</a>
				</li>
			{/each}
			</ul>
		{/each}
	</div>
</Layout>
