<script lang="ts">
	import Header from '../components/header.svelte';
	import '../css/app.scss';
	export let title;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Header />

<main>
	<h1>{title}</h1>
	<slot />
</main>

<footer>
	<p>this is a thing</p>
</footer>