import { defaultTheme, defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
	public: "static",
	plugins: [searchPlugin({})],
	theme: defaultTheme({
		repo: "Faithful-Resource-Pack/Docs",
		contributors: false,
	}),
});
