<script lang="ts">
	import ThemeButton from "./themeButton.svelte";

	$: year = new Date().getFullYear().toString();
</script>

<footer>
	<p>&copy; { year } Faithful Resource Pack</p>
	<p><ThemeButton text /></p>
	<p><small>"Minecraft" is a trademark of Microsoft Corporation and not affiliated with this site. Visit the <a href="https://www.minecraft.net/">official site</a> to get the game!</small></p>
</footer>
