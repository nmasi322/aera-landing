<script lang="ts">
	import CategoryBadge from '#lib/components/category-badge.svelte';
	import PhotoPlaceholder from '#lib/components/photo-placeholder.svelte';
	import type { Post } from '#lib/content/blog-posts.js';

	interface Props {
		post: Post;
	}

	let { post }: Props = $props();

	// Posts without an article body are listed but have nothing to link to yet.
	const href = $derived(post.article ? `/blog/${post.slug}` : undefined);
	const card =
		'flex flex-col gap-4 text-ink no-underline transition-transform duration-[250ms] ease-[cubic-bezier(.2,.8,.2,1)]';
</script>

{#snippet body()}
	<PhotoPlaceholder caption={post.image} class="h-60 rounded-3xl" />
	<span class="flex items-center gap-2.5">
		<CategoryBadge category={post.category} />
		<span class="text-[13px] text-muted-light">{post.date}</span>
	</span>
	<h3 class="text-[22px]/[30px] font-semibold tracking-[-0.01em]">{post.title}</h3>
	<p class="text-[15px]/6 text-muted">{post.excerpt}</p>
{/snippet}

{#if href}
	<a {href} class={[card, 'hover:-translate-y-1']}>
		{@render body()}
	</a>
{:else}
	<article class={card}>
		{@render body()}
	</article>
{/if}
