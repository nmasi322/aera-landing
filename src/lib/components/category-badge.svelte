<script lang="ts">
	import type { Category } from '#lib/content/blog-posts.js';

	interface Props {
		category: Category;
		class?: string;
	}

	let { category, class: className = '' }: Props = $props();

	const tones: Record<Category, string> = {
		Riders: 'bg-accent-soft text-accent',
		Drivers: 'bg-info-soft text-info',
		Safety: 'bg-success-soft text-success',
		Company: 'bg-surface text-ink-soft'
	};
</script>

<span
	class={[
		'inline-flex h-[26px] items-center rounded-full px-2.5 text-xs/4 font-semibold',
		tones[category],
		className
	]}
>
	{category}
</span>
