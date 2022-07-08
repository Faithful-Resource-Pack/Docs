<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/index.svelte</strong>
	</h2>

	<Counter />

	<p align="center">
		<img src="https://database.faithfulpack.net/images/branding/wordmarks/outlined/flat/faithful_flat_border.png" alt="Wordmark">
	</p>
	  
	<h1>Welcome to The Docs.</h1>
	<p align="justify">Here you will find documentation and guides related to the Faithful Project, including the Faithful Resource Packs, Discord bots and website.</p>
	  
	<h2>Tags</h2>
	<ul class="no-heads">
		<li><span class="new-badge">NEW</span>: This is a recently released article.</li>
		<li><span class="deprecated-badge">DEPRECATED</span>: This article has old and/or inacurate information, and needs to be reviewed and updated.</li>
	</ul>
</section>

<style lang="postcss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
