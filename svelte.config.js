import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		preprocess({
			postcss: true,

			scss: {
				prependData: '@use "src/css/variables.scss" as *;',
				outputStyle: "compressed"
			}
		}),
		mdsvex({
			extensions: ['.md'],
			layout: "./src/routes/layout.svelte"
		})
	],

	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
};

export default config;
