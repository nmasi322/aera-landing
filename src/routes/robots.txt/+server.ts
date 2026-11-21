import { absolute } from '#lib/seo.js';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = () => {
	const body = `# Everything here is public; crawl it all.
User-agent: *
Allow: /

Sitemap: ${absolute('/sitemap.xml')}
`;

	return new Response(body, {
		headers: {
			'content-type': 'text/plain; charset=utf-8',
			'cache-control': 'public, max-age=3600'
		}
	});
};
