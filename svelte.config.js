import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import { preprocess as compilerPreprocess } from "svelte/compiler";
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import image from "./src/preprocessors/image_preprocessor.js";
import { img_preprocess } from "./src/preprocessors/img_preprocessor.js";

const EXTENSIONS = ["jpg", "jpeg", "png", "JPG", "JPEG", "PNG"];

// https://github.com/happycollision/dondentonactor.com/blob/bc329f377e4c8c4d715588146b5da78b994560ea/svelte.config.js#L4
const imagePreprocessor = image({
	imgTagExtensions: EXTENSIONS,
	webpOptions: {
		quality: 100, // 1-100 best
		effort: 6, // 0-6 best
		lossless: true,
		force: true,
	},
	placeholder: "blur",
	inlineBelow: false,
	webp: true,
	compressionLevel: 9, // 1-9 slowest
	quality: 100, // 1-100 best
})

imagePreprocessor.markup({ content: "<html/>" })

function runImagesAfterOthers(otherProcessors) {
	return {
		markup: async ({ content, filename }) => {
			const before = await compilerPreprocess(content, otherProcessors, { filename })
			content = before.code
			const img_to_image = await compilerPreprocess(content, img_preprocess(EXTENSIONS), { filename })
			content = img_to_image.code
			const after_image = await imagePreprocessor.markup({ content })
			content = after_image.code
			// const fix_srcset = await compilerPreprocess(content, srcset_preprocess, { filename })
			// content = fix_srcset.code

			return {
				...before,
				code: content,
			}
		},
	}
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: runImagesAfterOthers([
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
				() => rehypeAutolinkHeadings({
					behavior: "append"
				})
			],
		})
	]),

	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
};

export default config;
