<script lang="ts">
	import type { Block } from '#lib/content/rich-text.js';

	interface Props {
		blocks: Block[];
		class?: string;
	}

	let { blocks, class: className = '' }: Props = $props();
</script>

<div class={['prose-site', className]}>
	{#each blocks as block, i (i)}
		{#if block.type === 'h3'}
			<h3>{block.text}</h3>
		{:else if block.type === 'p'}
			<p>{block.text}</p>
		{:else}
			<ul>
				{#each block.items as item, j (j)}
					<li>
						{#if typeof item === 'string'}
							{item}
						{:else}
							{#if item.lead}<b class="font-semibold">{item.lead}</b>{/if}
							{item.text}
						{/if}
					</li>
				{/each}
			</ul>
		{/if}
	{/each}
</div>
