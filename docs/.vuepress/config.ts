import { defineConfig } from "vuepress/config";

export default defineConfig({
	themeConfig: {
		smoothScroll: true,
	},
	markdown: {
		pageSuffix: "/"
	},
	plugins: {
		"vuepress-plugin-clean-urls": {
			normalSuffix: "/",
			indexSuffix: "/",
			notFoundPath: "/404.html",
		},
	},
});
