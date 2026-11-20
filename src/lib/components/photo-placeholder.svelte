<script lang="ts">
	import Icon from '#lib/components/icon.svelte';

	interface Props {
		/** Subject and credit, e.g. "Lagos street · Idumota, Opeyemi Adisa / Unsplash". */
		caption: string;
		/** The photo to show. Without one the container stays a labelled placeholder. */
		src?: string;
		/** Describes the photo for screen readers; falls back to the caption. */
		alt?: string;
		/** Hints the browser that this photo is below the fold. */
		loading?: 'eager' | 'lazy';
		class?: string;
	}

	let { caption, src, alt, loading = 'lazy', class: className = '' }: Props = $props();
</script>

{#if src}
	<div class={['overflow-hidden bg-placeholder', className]}>
		<img {src} alt={alt ?? caption} {loading} decoding="async" class="size-full object-cover" />
	</div>
{:else}
	<div
		role="img"
		aria-label={`Photo placeholder: ${caption}`}
		class={['flex items-end overflow-hidden bg-placeholder', className]}
	>
		<span
			class="m-3.5 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1.5 text-xs/4 text-ink-soft"
		>
			<Icon name="image" size={14} />
			{caption}
		</span>
	</div>
{/if}
