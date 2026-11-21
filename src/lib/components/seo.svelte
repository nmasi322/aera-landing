<script lang="ts">
	import { page } from '$app/state';
	import { absolute, site } from '#lib/seo.js';

	interface Props {
		/** The full <title>, written the way it should read in a tab. */
		title: string;
		description: string;
		/** Defaults to the page's own path, so canonicals drop query strings. */
		path?: string;
		/** A share image other than the site default, site-relative or absolute. */
		image?: string;
		imageAlt?: string;
		type?: 'website' | 'article';
		/** ISO dates, for articles. */
		published?: string;
		modified?: string;
		author?: string;
		section?: string;
		/** Keeps a page out of the index: error pages, anything unlisted. */
		noindex?: boolean;
		/** Structured data nodes for this page, added to the @graph. */
		jsonLd?: Record<string, unknown>[];
	}

	let {
		title,
		description,
		path,
		image,
		imageAlt = site.ogImageAlt,
		type = 'website',
		published,
		modified,
		author,
		section,
		noindex = false,
		jsonLd = []
	}: Props = $props();

	const canonical = $derived(absolute(path ?? page.url.pathname));
	const ogImage = $derived(absolute(image ?? site.ogImage));
	const isDefaultImage = $derived(!image);

	/** Split so the literal tags can't end this component's own script block. */
	const openTag = `<${'script'} type="application/ld+json">`;
	const closeTag = `</${'script'}>`;

	const graph = $derived(
		jsonLd.length
			? JSON.stringify({ '@context': 'https://schema.org', '@graph': jsonLd })
					// Escapes any angle bracket in the content, so a closing script tag
					// inside a string can't end the JSON-LD block early.
					.replaceAll('<', '\\u003c')
			: ''
	);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />

	{#if noindex}
		<meta name="robots" content="noindex, follow" />
	{:else}
		<meta name="robots" content="index, follow, max-image-preview:large" />
	{/if}

	<meta property="og:type" content={type} />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:locale" content={site.locale} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:alt" content={imageAlt} />
	{#if isDefaultImage}
		<meta property="og:image:type" content="image/webp" />
		<meta property="og:image:width" content={String(site.ogImageWidth)} />
		<meta property="og:image:height" content={String(site.ogImageHeight)} />
	{/if}

	{#if type === 'article'}
		{#if published}
			<meta property="article:published_time" content={published} />
		{/if}
		{#if modified ?? published}
			<meta property="article:modified_time" content={modified ?? published} />
		{/if}
		{#if author}
			<meta property="article:author" content={author} />
		{/if}
		{#if section}
			<meta property="article:section" content={section} />
		{/if}
	{/if}

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />
	<meta name="twitter:image:alt" content={imageAlt} />

	{#if graph}
		<!-- Our own JSON, with every angle bracket escaped above, so there is nothing to inject. -->
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html openTag + graph + closeTag}
	{/if}
</svelte:head>
