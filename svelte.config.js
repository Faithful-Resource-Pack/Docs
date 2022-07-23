import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		preprocess({
			postcss: true,

			scss: {
				prependData: '@use "src/css/variables.scss" as *;'
			}
		}),
		mdsvex({
			extensions: ['.md'],
			layout: "./src/routes/layout.svelte",
			rehypePlugins: [
				rehypeSlug,
				rehypeAutolinkHeadings
			]
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
