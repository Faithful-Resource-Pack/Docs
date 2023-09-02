<script lang="ts">
	import ThemeButton from "./themeButton.svelte";

	export let absolute: boolean = false;

	$: year = new Date().getFullYear().toString();
</script>

<footer class:absolute>
	<p>&copy; { year } Faithful Resource Pack</p>
	<p style="font-size: 0.7em; line-height: 1.1">
		Made with <a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer">Svelte</a>
		<br>
		<ThemeButton inline />
	</p>
	<p><small>NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT</small></p>
</footer>

<style lang="scss">
	footer.absolute {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
	}
</style>
