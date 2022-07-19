<script lang="ts">
	import Layout from "./layout.svelte";

	import { getContext } from 'svelte';
	const posts: App.Post[] = getContext('posts');
	const categories: string[] = getContext('categories');

	let title = "Home";
</script>

<Layout title="Home">
	<p style="text-align: center;">
		<img src="https://database.faithfulpack.net/images/branding/wordmarks/outlined/flat/faithful_flat_border.png" alt="Wordmark">
	</p>

	<h1>Welcome to The Docs.</h1>
	<p style="text-align: justify;">Here you will find documentation and guides related to the Faithful Project, including the Faithful Resource Packs, Discord bots and website.</p>

	<h2>Tags</h2>
	<ul class="no-heads">
		<li><span class="new-badge">NEW</span>: This is a recently released article.</li>
		<li><span class="deprecated-badge">DEPRECATED</span>: This article has old and/or inacurate information, and needs to be reviewed and updated.</li>
	</ul>

	<h2>Table of Contents</h2>
	<div class="table-of-content" style="position: inherit;">
		{#each categories as category}
		<ul>
			<li>
				<h3>{ category }</h3>
			</li>
			<ul>
			{#each posts as post}
				{#if post.meta.type == category}
					<li>
							<a href={post.path}>
							{post.meta.title}
						</a>
					</li>
				{/if}
			{/each}
			</ul>
		</ul>
		{/each}
	</div>
</Layout>
