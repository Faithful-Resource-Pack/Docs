<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<button id="menuBtn" class="header-button" type="button" onclick="openMenu()">Menu</button>
	<h1 class="small-display"><span class="height"></span><img src="https://database.faithfulpack.net/images/branding/site/favicon.ico" alt="F" /><span>DOCS</span></h1>
	<h1 class="big-display"><span class="height"></span><span>FAITHFUL PACK DOCS</span></h1>

	<!--
	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">About</a>
			</li>
			<li class:active={$page.url.pathname === '/todos'}>
				<a sveltekit:prefetch href="/todos">Todos</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>
	-->
</header>
