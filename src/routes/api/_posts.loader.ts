import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ fetch, props }) => {
	const result = await fetch('/api/posts.json');
	const posts: App.Post[] = await result.json();

	const categories: string[] = [];

	for (let i = 0; i < posts.length; i++) {
		if (!categories.includes(posts[i].meta.type)) {
			categories.push(posts[i].meta.type);
		}
	}

	return {
		props: {
			...props,
			posts: posts,
			categories: categories
		}
	};
}