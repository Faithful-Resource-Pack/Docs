import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
	public: `static`,
	plugins: [searchPlugin({})],
});
