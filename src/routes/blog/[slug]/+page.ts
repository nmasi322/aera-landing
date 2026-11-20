import { error } from '@sveltejs/kit';
import { getPost, relatedPosts } from '#lib/content/blog-posts.js';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const post = getPost(params.slug);

	// Posts without an article body are listed on the blog but have no page yet.
	if (!post?.article) error(404, 'Story not found');

	return { post, article: post.article, related: relatedPosts(post.slug) };
};
