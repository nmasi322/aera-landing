<script lang="ts">
	import Icon from '#lib/components/icon.svelte';

	interface Props {
		/** Subject and credit, e.g. "Lagos street · Idumota, Opeyemi Adisa / Unsplash". */
		caption: string;
		class?: string;
	}

	let { caption, class: className = '' }: Props = $props();
</script>

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
