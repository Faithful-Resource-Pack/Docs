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
	<p><small>"Minecraft" is a trademark of Microsoft Corporation and not affiliated with this site. Visit the <a href="https://www.minecraft.net/">official site</a> to get the game!</small></p>
</footer>

<style lang="scss">
	footer.absolute {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
	}
</style>
