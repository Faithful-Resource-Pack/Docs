import { defineConfig } from "vitepress";
import { fileURLToPath } from "url";
import metaTags from "./meta";
import computeCategories from "./computeCategories";
import { join } from "path";

// https://vitepress.dev/reference/site-config
export default () => {
	// DocCategory satisfies both navbar and sidebar interfaces
	const categories = computeCategories(join(process.cwd(), "pages"));
	return defineConfig({
		title: "Faithful Docs",
		description: "The official site with documentation and guides related to Faithful.",
		transformHead: ({ pageData }) => [
			...metaTags,
			[
				"meta",
				{
					property: "og:title",
					content: `${pageData.frontmatter.title} | Faithful Docs`,
				},
			],
		],
		themeConfig: {
			logo: "https://raw.githubusercontent.com/Faithful-Resource-Pack/Branding/main/site/favicon.ico",
			nav: [
				{ text: "Home", link: "/" },
				// don't put all archived/deprecated categories in navbar
				...categories.filter((c) => !c.collapsed),
				{ text: "Main Site", link: "https://faithfulpack.net" },
			],
			sidebar: categories,
			docFooter: {
				prev: false,
				next: false,
			},
			editLink: {
				pattern: "https://github.com/Faithful-Resource-Pack/Docs/edit/main/:path",
			},
			footer: {
				message: `NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT
					<br>
					This website was made using the
					<a
						href="https://vitepress.dev"
						target="_blank"
						rel="noopener noreferrer"
					>VitePress</a> framework. View the source
					<a
						href="https://github.com/Faithful-Resource-Pack/Docs"
						target="_blank"
						rel="noopener noreferrer"
					>here</a>!
				`,
				copyright: `© ${new Date().getFullYear()} Faithful Resource Pack`,
			},
			search: {
				provider: "local",
			},
		},
		cleanUrls: true,
		outDir: "./dist",
		vite: {
			resolve: {
				alias: [
					{
						find: /^.*\/VPSidebarItem\.vue$/,
						replacement: fileURLToPath(
							new URL("./components/SidebarItemOverride.vue", import.meta.url),
						),
					},
				],
			},
		},
	});
};
