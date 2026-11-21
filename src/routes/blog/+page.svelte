<script lang="ts">
	import SiteShell from '#lib/components/site-shell.svelte';
	import Seo from '#lib/components/seo.svelte';
	import { breadcrumbs, isoDate, site } from '#lib/seo.js';
	import PageIntro from '#lib/components/page-intro.svelte';
	import PhotoPlaceholder from '#lib/components/photo-placeholder.svelte';
	import CategoryBadge from '#lib/components/category-badge.svelte';
	import PostCard from '#lib/components/post-card.svelte';
	import Button from '#lib/components/button.svelte';
	import Icon from '#lib/components/icon.svelte';
	import { reveal } from '#lib/actions/reveal.js';
	import { categories, featuredPost, posts } from '#lib/content/blog-posts.js';

	let active = $state<(typeof categories)[number]>('All');

	const rest = $derived(
		posts.filter((post) => !post.featured && (active === 'All' || post.category === active))
	);
</script>

<Seo
	title="Aera blog — rides, drivers and safety in Lagos"
	description="How Aera works, what we’re building next, and the people who keep Lagos moving."
	path="/blog"
	jsonLd={[
		{
			'@type': 'Blog',
			'@id': `${site.origin}/blog#blog`,
			url: `${site.origin}/blog`,
			name: 'The Aera blog',
			description:
				'How Aera works, what we’re building next, and the people who keep Lagos moving.',
			inLanguage: 'en-NG',
			publisher: { '@id': `${site.origin}/#organization` },
			blogPost: posts
				.filter((post) => post.article)
				.map((post) => ({
					'@type': 'BlogPosting',
					'@id': `${site.origin}/blog/${post.slug}#post`,
					url: `${site.origin}/blog/${post.slug}`,
					headline: post.title,
					description: post.excerpt,
					datePublished: isoDate(post.date),
					author: { '@type': 'Organization', name: post.article?.author ?? site.name }
				}))
		},
		breadcrumbs([
			{ name: 'Home', path: '/' },
			{ name: 'Blog', path: '/blog' }
		])
	]}
/>

<SiteShell current="blog">
	<PageIntro
		eyebrow="The Aera blog"
		title="Stories from the road."
		body="How Aera works, what we’re building next, and the people who keep Lagos moving."
	/>

	<section class="shell flex w-full flex-col gap-14 pb-18">
		<a
			use:reveal
			href={`/blog/${featuredPost.slug}`}
			class="grid reveal grid-cols-[1.2fr_1fr] items-center gap-10 text-ink no-underline transition-transform duration-[250ms] ease-[cubic-bezier(.2,.8,.2,1)] hover:-translate-y-1 max-wide:grid-cols-1"
		>
			<PhotoPlaceholder caption={featuredPost.image} class="h-[440px] rounded-[28px]" />
			<div class="flex flex-col gap-4">
				<CategoryBadge category={featuredPost.category} class="self-start" />
				<h2 class="text-[44px]/[50px] font-semibold tracking-[-0.03em] max-wide:text-[32px]/[38px]">
					{featuredPost.title}
				</h2>
				<p class="text-lg/7 text-muted">{featuredPost.excerpt}</p>
				<span class="text-sm text-muted-light">
					{featuredPost.date}{featuredPost.readingTime ? ` · ${featuredPost.readingTime}` : ''}
				</span>
				<span class="inline-flex items-center gap-1.5 text-[15px] font-semibold">
					Read the story
					<Icon name="arrow-right" size={16} />
				</span>
			</div>
		</a>

		<div class="flex flex-wrap gap-2 border-t border-line pt-8">
			{#each categories as category (category)}
				<Button
					onclick={() => (active = category)}
					aria-pressed={active === category}
					size="sm"
					pill
					variant={active === category ? 'default' : 'outline'}
				>
					{category}
				</Button>
			{/each}
		</div>

		<div class="grid grid-cols-3 gap-x-7 gap-y-12 max-wide:grid-cols-1">
			{#each rest as post, i (post.slug)}
				<div use:reveal={{ delay: (i % 3) * 100 }} class="reveal">
					<PostCard {post} />
				</div>
			{:else}
				<p class="text-[17px]/7 text-muted">No stories in this category yet.</p>
			{/each}
		</div>
	</section>

	<section class="shell w-full pb-24">
		<div
			use:reveal
			class="grid reveal grid-cols-[1fr_460px] items-center gap-10 rounded-[32px] bg-surface p-12 max-wide:grid-cols-1 max-wide:px-5 max-wide:py-8"
		>
			<div>
				<h2 class="text-[40px]/[46px] font-semibold tracking-[-0.03em] max-wide:text-[32px]/[38px]">
					Get the good stuff in your inbox.
				</h2>
				<p class="mt-3 text-[17px]/7 text-muted">
					New areas, new features and the odd Lagos story. Once a month, tops.
				</p>
			</div>
			<form class="flex gap-2.5" onsubmit={(event) => event.preventDefault()}>
				<label for="newsletter-email" class="sr-only">Email address</label>
				<input
					id="newsletter-email"
					type="email"
					placeholder="you@email.com"
					class="box-border h-14 min-w-0 flex-1 rounded-[14px] border border-ash bg-paper px-4 font-[inherit] text-base"
				/>
				<Button type="submit" size="xl">Subscribe</Button>
			</form>
		</div>
	</section>
</SiteShell>
