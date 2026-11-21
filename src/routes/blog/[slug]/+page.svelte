<script lang="ts">
	import { page } from '$app/state';
	import wordmark from '#lib/assets/aera-wordmark-white.png';
	import Seo from '#lib/components/seo.svelte';
	import SiteShell from '#lib/components/site-shell.svelte';
	import PhotoPlaceholder from '#lib/components/photo-placeholder.svelte';
	import CategoryBadge from '#lib/components/category-badge.svelte';
	import PostCard from '#lib/components/post-card.svelte';
	import RichText from '#lib/components/rich-text.svelte';
	import Button from '#lib/components/button.svelte';
	import Icon from '#lib/components/icon.svelte';
	import { reveal } from '#lib/actions/reveal.js';
	import type { PageProps } from './$types';

	import { breadcrumbs, isoDate, site } from '#lib/seo.js';

	let { data }: PageProps = $props();

	const { post, article, related } = $derived(data);

	const published = $derived(isoDate(post.date));
	const postUrl = $derived(`${site.origin}/blog/${post.slug}`);
	const jsonLd = $derived([
		{
			'@type': 'BlogPosting',
			'@id': `${postUrl}#post`,
			url: postUrl,
			mainEntityOfPage: { '@type': 'WebPage', '@id': postUrl },
			headline: post.title,
			description: post.excerpt,
			articleSection: post.category,
			datePublished: published,
			dateModified: published,
			inLanguage: 'en-NG',
			image: `${site.origin}${site.ogImage}`,
			author: { '@type': 'Organization', name: article.author, url: site.origin },
			publisher: { '@id': `${site.origin}/#organization` },
			isPartOf: { '@id': `${site.origin}/blog#blog` }
		},
		breadcrumbs([
			{ name: 'Home', path: '/' },
			{ name: 'Blog', path: '/blog' },
			{ name: post.title, path: `/blog/${post.slug}` }
		])
	]);

	const shareUrl = $derived(page.url.href);
	const shareLinks = $derived([
		{
			icon: 'x-logo' as const,
			label: 'Share on X',
			href: `https://x.com/intent/post?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`
		},
		{
			icon: 'whatsapp-logo' as const,
			label: 'Share on WhatsApp',
			href: `https://wa.me/?text=${encodeURIComponent(`${post.title} ${shareUrl}`)}`
		},
		{
			icon: 'linkedin-logo' as const,
			label: 'Share on LinkedIn',
			href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
		}
	]);

	let copied = $state(false);

	async function copyLink() {
		try {
			await navigator.clipboard.writeText(shareUrl);
			copied = true;
			setTimeout(() => (copied = false), 2000);
		} catch {
			copied = false;
		}
	}
</script>

<Seo
	title={`${post.title} — Aera blog`}
	description={post.excerpt}
	path={`/blog/${post.slug}`}
	type="article"
	{published}
	author={article.author}
	section={post.category}
	{jsonLd}
/>

<SiteShell current="blog">
	<article class="w-full">
		<header class="shell pt-14 pb-10">
			<div use:reveal class="mx-auto flex max-w-[760px] reveal flex-col gap-[18px]">
				<a
					href="/blog"
					class="inline-flex items-center gap-1.5 self-start text-sm font-semibold text-muted no-underline transition-colors hover:text-ink"
				>
					<Icon name="arrow-left" size={16} />
					All stories
				</a>
				<CategoryBadge category={post.category} class="self-start" />
				<h1
					class="text-[60px]/[66px] font-semibold tracking-[-0.035em] max-wide:text-[40px]/[46px]"
				>
					{post.title}
				</h1>
				<span class="flex items-center gap-3 text-sm text-muted">
					<span class="flex size-9 items-center justify-center rounded-full bg-ink">
						<img src={wordmark} alt="" class="h-auto w-[26px]" />
					</span>
					<span>
						<b class="font-semibold text-ink">{article.author}</b><br />
						{post.date}{post.readingTime ? ` · ${post.readingTime}` : ''}
					</span>
				</span>
			</div>
		</header>

		<div class="shell">
			<PhotoPlaceholder
				caption={article.heroImage}
				class="mx-auto h-[520px] max-w-[1080px] rounded-[32px] max-wide:h-[320px]"
			/>
		</div>

		<div class="shell pt-14 pb-18">
			<div class="mx-auto max-w-[680px]">
				<RichText blocks={article.blocks} />

				<div class="mt-8 flex items-center gap-4 rounded-3xl bg-surface p-6">
					<span
						class="flex size-12 shrink-0 items-center justify-center rounded-[14px] bg-ink text-paper"
					>
						<Icon name="lock" />
					</span>
					<span class="flex-1 text-base/6">
						<b class="font-semibold">Short version:</b>
						{article.takeaway}
					</span>
				</div>

				<div class="mt-8 flex items-center gap-2.5 text-sm font-semibold">
					Share
					<Button
						onclick={copyLink}
						aria-label={copied ? 'Link copied' : 'Copy link'}
						size="icon"
						variant="outline"
						class={copied ? 'bg-surface' : undefined}
					>
						<Icon name={copied ? 'check' : 'link'} size={18} />
					</Button>
					{#each shareLinks as link (link.label)}
						<Button
							href={link.href}
							target="_blank"
							rel="noreferrer noopener"
							aria-label={link.label}
							size="icon"
							variant="outline"
						>
							<Icon name={link.icon} size={18} />
						</Button>
					{/each}
				</div>
			</div>
		</div>
	</article>

	<section class="shell w-full border-t border-line pt-14 pb-24">
		<h2 class="mb-8 text-[32px]/10 font-semibold tracking-[-0.02em]">Keep reading</h2>
		<div class="grid grid-cols-3 gap-7 max-wide:grid-cols-1">
			{#each related as item, i (item.slug)}
				<div use:reveal={{ delay: i * 100 }} class="reveal">
					<PostCard post={item} />
				</div>
			{/each}
		</div>
	</section>
</SiteShell>
