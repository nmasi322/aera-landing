// import { posts } from '#lib/content/blog-posts.js';
import { privacyPage, termsPage } from '#lib/content/legal-pages.js';
import { absolute, isoDate } from '#lib/seo.js';
import type { RequestHandler } from './$types';

/** Nothing here depends on the request, so it ships as a static file. */
export const prerender = true;

interface Entry {
	path: string;
	changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
	priority: string;
	lastmod?: string;
}

/** Only posts with a body have a page; the rest are listed on the blog but not linked. */
// const published = posts.filter((post) => post.article);

const entries: Entry[] = [
	{ path: '/', changefreq: 'weekly', priority: '1.0' },
	{ path: '/about', changefreq: 'monthly', priority: '0.8' },
	// { path: '/help', changefreq: 'monthly', priority: '0.7' },
	// {
	// 	path: '/blog',
	// 	changefreq: 'weekly',
	// 	priority: '0.7',
	// 	lastmod: published.map((post) => isoDate(post.date)).filter(Boolean).sort().at(-1) ?? undefined
	// },
	// ...published.map(
	// 	(post): Entry => ({
	// 		path: `/blog/${post.slug}`,
	// 		changefreq: 'yearly',
	// 		priority: '0.6',
	// 		lastmod: isoDate(post.date)
	// 	})
	// ),
	{ path: '/terms', changefreq: 'yearly', priority: '0.3', lastmod: isoDate(termsPage.updated) },
	{ path: '/privacy', changefreq: 'yearly', priority: '0.3', lastmod: isoDate(privacyPage.updated) }
];

export const GET: RequestHandler = () => {
	const urls = entries
		.map(({ path, changefreq, priority, lastmod }) =>
			[
				'\t<url>',
				`\t\t<loc>${absolute(path)}</loc>`,
				lastmod ? `\t\t<lastmod>${lastmod}</lastmod>` : undefined,
				`\t\t<changefreq>${changefreq}</changefreq>`,
				`\t\t<priority>${priority}</priority>`,
				'\t</url>'
			]
				.filter(Boolean)
				.join('\n')
		)
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

	return new Response(xml, {
		headers: {
			'content-type': 'application/xml; charset=utf-8',
			'cache-control': 'public, max-age=3600'
		}
	});
};
