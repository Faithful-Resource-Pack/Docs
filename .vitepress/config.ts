import { defineConfig, DefaultTheme } from "vitepress";
import { readdirSync, readFileSync, statSync } from "fs";
import { join } from "path";
import { parse } from "yaml";

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

function generateSidebar() {
	const basePath = join(process.cwd(), "pages");
	return walkSync(basePath)
		.filter((f) => f.endsWith(".md"))
		.map((fileName) => {
			const file = readFileSync(fileName, { encoding: "utf8" });
			const name = fileName.replace(process.cwd(), "").replace(".md", "");
			const parsed = parse(file.split(/---|___|\*\*\*/g)[1]);
			if (isNew(parsed.date)) parsed.title = `${parsed.title} <Badge type="danger" text="NEW" /> `;
			if (parsed.deprecated)
				parsed.title = `${parsed.title} <Badge type="warning" text="DEPRECATED" />`;
			if (parsed.archived) parsed.title = `${parsed.title} <Badge type="info" text="ARCHIVED" />`;
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
			if (found === -1) acc.push({ text: category, items: [cur] });
			else acc[found].items?.push(cur);
			return acc;
		}, [] as DefaultTheme.SidebarItem[])
		.sort();
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Faithful Docs",
	description: "The official site with documentation and guides related to Faithful.",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [{ text: "Home", link: "/" }],
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
		}
	},
});
