<script lang="ts">
	import { reveal } from '#lib/actions/reveal.js';

	interface Props {
		eyebrow: string;
		title: string;
		body?: string;
	}

	let { eyebrow, title, body }: Props = $props();
</script>

<section class="shell w-full pt-18 pb-14 text-left">
	<span use:reveal class="block reveal text-sm/5 font-semibold text-accent">{eyebrow}</span>
	<h1
		use:reveal={{ delay: 80 }}
		class="mt-3.5 max-w-[900px] reveal text-[72px]/[78px] font-semibold tracking-[-0.04em] max-wide:text-[48px]/[52px]"
	>
		{title}
	</h1>
	{#if body}
		<p use:reveal={{ delay: 160 }} class="mt-5 max-w-[640px] reveal text-[20px]/8 text-muted">
			{body}
		</p>
	{/if}
</section>
