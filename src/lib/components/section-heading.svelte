<script lang="ts">
	import { reveal } from '#lib/actions/reveal.js';

	interface Props {
		eyebrow: string;
		title: string;
		body?: string;
		tone?: 'light' | 'dark';
		class?: string;
	}

	let { eyebrow, title, body, tone = 'light', class: className = '' }: Props = $props();
</script>

<div class={['text-left', className]}>
	<span
		use:reveal
		class={[
			'block reveal text-sm/5 font-semibold',
			tone === 'dark' ? 'text-accent-light' : 'text-accent'
		]}
	>
		{eyebrow}
	</span>
	<h2
		use:reveal={{ delay: 80 }}
		class="mt-3.5 max-w-205 reveal text-[56px]/[62px] font-semibold tracking-[-0.035em] max-wide:text-[36px]/[42px]"
	>
		{title}
	</h2>
	{#if body}
		<p
			use:reveal={{ delay: 160 }}
			class={[
				'mt-5 max-w-155 reveal text-base/relaxed whitespace-pre-wrap md:text-[19px]/[30px]',
				tone === 'dark' ? 'text-ash' : 'text-muted'
			]}
		>
			{body}
		</p>
	{/if}
</div>
