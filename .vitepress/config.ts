import { defineConfig, DefaultTheme } from "vitepress";
import { readdirSync, readFileSync, statSync } from "fs";
import { join } from "path";
import { parse } from "yaml";

/**
 * Return an array of all filepaths in a directory
 * @author Juknum, Evorp
 * @param dir
 * @param filelist recursion
 * @returns array of file paths
 */
function walkSync(dir: string, filelist: string[] = []) {
	// add trailing slash if not present
	if (dir.at(-1) != "/") dir += "/";
	for (const file of readdirSync(dir)) {
		if (statSync(dir + file).isDirectory())
			// read directories inside directories recursively
			filelist = walkSync(dir + file + "/", filelist);
		else filelist.push(dir + file);
	}
	return filelist;
}

/**
 * Check if a DD/MM/YYYY date is older than one month
 * @author Juknum
 * @param date DD/MM/YYYY date to check
 * @returns whether it is
 */
function isNew(date: string) {
	if (date === undefined) return false;

	let delayedDate = new Date();
	delayedDate.setMonth(delayedDate.getMonth() - 1);

	const postDate = new Date();
	const [day, month, year] = date.split("/").map((el) => Number.parseInt(el, 10));
	postDate.setDate(day);
	postDate.setMonth(month - 1);
	postDate.setFullYear(year);

	if (isNaN(postDate.getTime())) return false;

	/**
	 * If the post date is greater than today's date - 1 month, show the span
	 */
	return postDate.getTime() > delayedDate.getTime();
}

/**
 * Generate VitePress sidebar
 * @author Evorp
 * @returns formatted sidebar
 */
function generateSidebar() {
	const basePath = join(process.cwd(), "pages");
	return walkSync(basePath)
		.filter((f) => f.endsWith(".md"))
		.map((fileName) => {
			const file = readFileSync(fileName, { encoding: "utf8" });
			const name = fileName.replace(process.cwd(), "").replace(".md", "");
			const parsed = parse(file.split(/---|___|\*\*\*/g)[1]);
			return {
				text: parsed.title,
				link: name,
				parsed: parsed,
			};
		})
		.reduce((acc, cur) => {
			const category = cur.parsed.type;
			delete cur.parsed;
			const found = acc.findIndex((v) => v.text === category);
			if (found === -1) acc.push({ text: category, collapsed: false, items: [cur] });
			else acc[found].items?.push(cur);
			return acc;
		}, [] as DefaultTheme.SidebarItem[])
		.sort();
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Faithful Docs",
	description: "The official site with documentation and guides related to Faithful.",
	head: [
		[
			"link",
			{
				rel: "icon",
				href: "https://raw.githubusercontent.com/Faithful-Resource-Pack/Branding/main/site/favicon.ico",
			},
		],
	],
	themeConfig: {
		logo: "https://raw.githubusercontent.com/Faithful-Resource-Pack/Branding/main/site/favicon.ico",
		// https://vitepress.dev/reference/default-theme-config
		nav: [{ text: "Home", link: "/" }, ...(generateSidebar() as any)],
		sidebar: generateSidebar(),
		docFooter: {
			prev: false,
			next: false,
		},
		socialLinks: [{ icon: "github", link: "https://github.com/faithful-resource-pack" }],
		footer: {
			message:
				"NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT",
			copyright: "© 2024 Faithful Resource Pack",
		},
		search: {
			provider: "local",
		},
	},
});
