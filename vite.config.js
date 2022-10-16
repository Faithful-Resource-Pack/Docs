import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

process.env.CI = true;
console.log("process.env.ci", process.env.CI);

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],

	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/css/variables.scss" as *;'
			}
		}
	},

	resolve: {
		alias: {
			"@src": path.resolve('./src/')
		}
	}
};

export default config;
