<script lang="ts">
	import Header from '../components/header.svelte';
	import '../css/app.scss';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>this is a thing</p>
</footer>