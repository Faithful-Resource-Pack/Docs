/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		userid: string;
	}

	interface Post {
		meta: {
			title: string,
			deprecated: bool?,
			archived: bool?,
			type: string,
			date: string,
		},
		path: string,
	}

	// interface Platform {}

	// interface Session {}

	// interface Stuff {}
}
