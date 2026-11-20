<script lang="ts">
	import type { ClassValue } from 'svelte/elements';
	import { icons, iconWeights, type IconName, type IconWeight } from '#lib/icons.js';

	interface Props {
		name: IconName;
		size?: number;
		/** Overrides the weight the design uses for this icon. */
		weight?: IconWeight;
		/** Give a label when the icon carries meaning on its own. */
		label?: string;
		class?: ClassValue;
	}

	let { name, size = 24, weight, label, class: className }: Props = $props();

	const Glyph = $derived(icons[name]);
</script>

<Glyph
	{size}
	weight={weight ?? iconWeights[name] ?? 'regular'}
	class={className || undefined}
	role={label ? 'img' : undefined}
	aria-label={label}
	aria-hidden={label ? undefined : 'true'}
/>
