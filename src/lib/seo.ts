/**
 * One place for everything the crawlers and share cards read: the canonical
 * origin, the default copy and the Open Graph image. `seo.svelte` turns these
 * into tags; the sitemap and robots routes read the same origin.
 */
export const site = {
	name: 'Aera',
	legalName: 'AFRIBA TECHNOLOGIES',
	/** The production origin, no trailing slash. Everything canonical hangs off it. */
	origin: 'https://getaera.co',
	locale: 'en_NG',
	tagline: 'Move Different.',
	title: 'Aera. Lagos, let’s move different.',
	description:
		'Everyday rides across Lagos at a price you see first, with drivers we’ve checked and a live trip link for the people who care about you.',
	email: 'support@getaera.co',
	/** Lives in `static/`, so it is served from the origin root. */
	ogImage: '/og-img.webp',
	ogImageWidth: 2796,
	ogImageHeight: 1698,
	ogImageAlt: 'Aera — everyday rides across Lagos.',
	socials: [
		'https://instagram.com/aera.ng',
		'https://x.com/aera_ng',
		'https://tiktok.com/@aera.ng',
		'https://www.linkedin.com/company/aera-ng'
	]
} as const;

/** Resolves a site-relative path against the canonical origin. */
export function absolute(path: string): string {
	if (/^https?:\/\//.test(path)) return path;
	const trimmed = path.replace(/\/+$/, '');
	if (!trimmed || trimmed === '/') return `${site.origin}/`;
	return `${site.origin}${trimmed.startsWith('/') ? trimmed : `/${trimmed}`}`;
}

const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

/**
 * Pulls an ISO 8601 date out of the display dates the content is written in
 * ("18 Nov 2026", "Last updated 5th November, 2026 · Effective …"), which is
 * what `datePublished` and the sitemap need. Returns undefined when there is no
 * date to find, so a typo drops the tag instead of publishing a broken one.
 */
export function isoDate(date: string): string | undefined {
	const match = /(\d{1,2})(?:st|nd|rd|th)?\s+([A-Za-z]{3,})\.?,?\s+(\d{4})/.exec(date);
	if (!match) return undefined;

	const month = months.indexOf(match[2].slice(0, 3).toLowerCase());
	if (month < 0) return undefined;

	return `${match[3]}-${String(month + 1).padStart(2, '0')}-${match[1].padStart(2, '0')}`;
}

/** The organisation node every page's JSON-LD points back to. */
export const organization = {
	'@type': 'Organization',
	'@id': `${site.origin}/#organization`,
	name: site.name,
	legalName: site.legalName,
	url: site.origin,
	logo: absolute(site.ogImage),
	email: site.email,
	description: site.description,
	areaServed: {
		'@type': 'City',
		name: 'Lagos',
		containedInPlace: { '@type': 'Country', name: 'Nigeria' }
	},
	sameAs: [...site.socials]
};

/** The site node, so search engines tie the pages together under one name. */
export const website = {
	'@type': 'WebSite',
	'@id': `${site.origin}/#website`,
	name: site.name,
	url: site.origin,
	description: site.description,
	inLanguage: 'en-NG',
	publisher: { '@id': `${site.origin}/#organization` }
};

/** A breadcrumb trail, so search results show the path rather than a bare URL. */
export function breadcrumbs(trail: { name: string; path: string }[]): Record<string, unknown> {
	return {
		'@type': 'BreadcrumbList',
		itemListElement: trail.map((crumb, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: crumb.name,
			item: absolute(crumb.path)
		}))
	};
}

/** The shared shape of the terms and privacy pages. */
export function legalPageSchema(
	path: string,
	name: string,
	updated: string
): Record<string, unknown> {
	return {
		'@type': 'WebPage',
		'@id': `${absolute(path)}#webpage`,
		url: absolute(path),
		name: `${name} — ${site.name}`,
		isPartOf: { '@id': `${site.origin}/#website` },
		about: { '@id': `${site.origin}/#organization` },
		// The content writes this as "Last updated 5th November, 2026 · Effective …".
		dateModified: isoDate(updated),
		inLanguage: 'en-NG'
	};
}
