import { readdirSync, readFileSync, statSync } from "fs";
import { sep } from "path";
import matter from "gray-matter";
import type { DocCategory, DocFile, DocFrontmatter } from "./types";

/**
 * Convert a string to title case
 * @author Evorp
 * @param str - String to convert
 * @returns String in title case
 */
export function toTitleCase(str: string) {
	if (!str) return str;
	return str
		.split(/-|_| /g)
		.map((word) => word[0].toUpperCase() + word.slice(1))
		.join(" ");
}

/**
 * Return an array of all filepaths in a directory
 * @author Juknum, Evorp
 * @param dir - Directory to search
 * @param filelist - Used for recursion
 * @returns Array of file paths
 */
export function walkSync(dir: string, filelist: string[] = []) {
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

/**
 * Read pages folder and map files to a sidebar and navbar compatible format
 * @author Evorp
 * @param dir - Directory to read
 * @returns Array of category objects
 */
export default function computeCategories(dir: string) {
	return walkSync(dir)
		.filter((f) => f.endsWith(".md"))
		.map<DocFile>((fileName) => {
			const file = readFileSync(fileName, { encoding: "utf8" });
			const name = fileName.replace(process.cwd(), "").replace(".md", "");
			// parse yaml frontmatter into object
			const frontmatter = matter(file).data as DocFrontmatter;
			return {
				text: frontmatter.title,
				link: name,
				// fall back to the parent folder
				category: frontmatter.category || toTitleCase(name.split("/").at(-2) || ""),
				date: frontmatter.date,
				// default false
				archived: frontmatter.archived ?? false,
				deprecated: frontmatter.deprecated ?? false,
			};
		})
		.reduce<DocCategory[]>((acc, cur) => {
			// because this isn't just an object with the names as keys we need to search
			const found = acc.findIndex((category) => category.text === cur.category);
			if (found === -1) acc.push({ text: cur.category, collapsed: false, items: [cur] });
			else acc[found].items?.push(cur);
			return acc;
		}, [])
		.map((category) => {
			// collapse categories that are entirely archived/deprecated by default
			if (category.items.every((i) => i.deprecated || i.archived)) category.collapsed = true;
			return category;
		})
		.sort();
}
