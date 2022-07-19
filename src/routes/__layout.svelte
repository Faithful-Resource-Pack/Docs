<script lang="ts" context="module">
	import { load } from './api/_posts.loader';
  export { load }
</script>

<script>
import { setContext } from 'svelte';

	export let posts;
	export let categories;

  setContext("posts", posts);
  setContext("categories", categories);
</script>

<slot />