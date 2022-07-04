<script>
	import "../app.css";
	import Footer from "../components/footer.svelte";
	import Header from "../components/header.svelte";
</script>

<div class="app">
	<div class="content">
		<Header />

		<main class="main">
			<slot />
		</main>

		<Footer />
	</div>
</div>
