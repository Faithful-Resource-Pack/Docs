import { defineConfig } from "vitepress";
import { readdirSync, readFileSync, statSync } from "fs";
import { join, sep } from "path";
import { parse } from "yaml";
import { fileURLToPath } from "url";
import metaTags from "./meta";

/**
 * Return an array of all filepaths in a directory
 * @author Juknum, Evorp
 * @param dir
 * @param filelist recursion
 * @returns array of file paths
 */
function walkSync(dir: string, filelist: string[] = []) {
	// add trailing slash if not present
	if (!dir.endsWith(sep)) dir += sep;
	for (const file of readdirSync(dir)) {
		if (statSync(dir + file).isDirectory())
			// read directories inside directories recursively
			filelist = walkSync(dir + file + sep, filelist);
		else filelist.push(dir + file);
	}
	return filelist;
}

function computeBars() {
	return walkSync(join(process.cwd(), "pages"))
		.filter((f) => f.endsWith(".md"))
		.map((fileName) => {
			const file = readFileSync(fileName, { encoding: "utf8" });
			const name = fileName.replace(process.cwd(), "").replace(".md", "");
			// parse yaml frontmatter into object
			const frontmatter = parse(file.split(/---|___|\*\*\*/g)[1]);
			return {
				frontmatter,
				text: frontmatter.title,
				link: name,
				date: frontmatter.date,
				archived: frontmatter.archived ?? false,
				deprecated: frontmatter.deprecated ?? false,
			};
		})
		.reduce((acc, cur) => {
			const category = cur.frontmatter.type;

			// delete because unused
			delete cur.frontmatter;

			// because this isn't just an object with the names as keys we need to search
			const found = acc.findIndex((v) => v.text === category);
			if (found === -1) acc.push({ text: category, collapsed: false, items: [cur] });
			else acc[found].items?.push(cur);
			return acc;
		}, [] as any[])
		.sort();
}

// https://vitepress.dev/reference/site-config
export default () => {
	const bars = computeBars();
	return defineConfig({
		title: "Faithful Docs",
		description: "The official site with documentation and guides related to Faithful.",
		transformHead: ({ pageData }) => [
			...metaTags,
			[
				"title",
				{},
				`${pageData.frontmatter.title} | Faithful Docs`
			],
			[
				"meta",
				{
					property: "og:title",
					content: `${pageData.frontmatter.title} | Faithful Docs`,
				},
			],
		],
		// https://vitepress.dev/reference/default-theme-config
		themeConfig: {
			logo: "https://raw.githubusercontent.com/Faithful-Resource-Pack/Branding/main/site/favicon.ico",
			nav: [
				{ text: "Home", link: "/" },
				...bars,
				{ text: "Main Site", link: "https://faithfulpack.net" },
			],
			sidebar: bars,
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
