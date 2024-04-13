const DESCRIPTION = "The official site with documentation and guides related to Faithful.";
const BANNER_URL =
	"https://database.faithfulpack.net/images/branding/site/banners/universal_banner.png";

export default [
	// html meta tags
	[
		"link",
		{
			rel: "icon",
			href: "https://raw.githubusercontent.com/Faithful-Resource-Pack/Branding/main/site/favicon.ico",
		},
	],
	[
		"meta",
		{
			name: "theme-color",
			content: "#76C945",
		},
	],
	[
		"meta",
		{
			name: "description",
			content: DESCRIPTION,
		},
	],
	// open graph meta tags
	[
		"meta",
		{
			property: "og:type",
			content: "website",
		},
	],
	[
		"meta",
		{
			property: "og:description",
			content: DESCRIPTION,
		},
	],
	[
		"meta",
		{
			property: "og:image",
			content: BANNER_URL,
		},
	],
	// twitter meta tags
	[
		"meta",
		{
			name: "twitter:card",
			content: "summary_large_image",
		},
	],
	[
		"meta",
		{
			name: "twitter:description",
			content: DESCRIPTION,
		},
	],
	[
		"meta",
		{
			name: "twitter:image",
			content: BANNER_URL,
		},
	],
] as [string, Record<string, string>][];
