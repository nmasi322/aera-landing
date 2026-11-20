<script lang="ts">
	import Icon from '#lib/components/icon.svelte';
	import SectionHeading from '#lib/components/section-heading.svelte';
	import { reveal } from '#lib/actions/reveal.js';

	const promises = [
		'Full fare shown before you book, locked once a driver accepts',
		'Pay by card or bank transfer, so no cash and no change wahala',
		'Cancel free until your driver arrives, and 5 free minutes of waiting at pickup',
		'Drivers keep 85% of every fare. We take a flat 15%.'
	];

	const breakdown = [
		{ label: 'Your driver, Olutobi', value: '₦7,140 · 85%', strong: true },
		{ label: 'Aera', value: '₦1,260 · 15%', strong: false },
		{ label: 'Booking fee', value: '₦0', strong: false },
		{ label: 'Paid with', value: 'Card or bank transfer', strong: false }
	];
</script>

<section
	id="fares"
	class="shell grid w-full grid-cols-[1fr_560px] items-center gap-20 py-30 max-wide:grid-cols-1 max-wide:py-18"
>
	<div class="flex flex-col gap-8">
		<SectionHeading
			eyebrow="Fares"
			title="The price you see is the price you pay."
			body="No surprise numbers when you get out of the car. Here’s exactly where your money goes."
		/>

		<ul class="m-0 flex list-none flex-col gap-4 p-0">
			{#each promises as promise, i (promise)}
				<li use:reveal={{ delay: i * 90 }} class="flex reveal items-start gap-3 text-[17px]/[26px]">
					<span
						class="mt-px flex size-6 shrink-0 items-center justify-center rounded-full bg-ink text-paper"
					>
						<Icon name="check" size={14} />
					</span>
					<span>{promise}</span>
				</li>
			{/each}
		</ul>
	</div>

	<div
		use:reveal={{ delay: 160 }}
		class="flex reveal flex-col rounded-[28px] border border-line bg-paper p-8 shadow-[0_24px_60px_rgba(0,0,0,.08)]"
	>
		<span class="flex items-center justify-between">
			<span class="text-sm text-muted">Lekki Phase 1 → Ikeja City Mall</span>
			<span
				class="inline-flex h-[26px] items-center gap-1 rounded-full bg-accent-soft px-2.5 text-xs font-semibold text-accent"
			>
				<Icon name="lock" size={12} />
				Locked
			</span>
		</span>

		<span class="mt-2.5 text-[64px]/[72px] font-bold tracking-[-0.03em]">₦8,400</span>
		<span class="mb-[18px] text-sm text-muted">What you pay. Same at the end of the ride.</span>

		{#each breakdown as row (row.label)}
			<div class="flex items-center justify-between border-t border-line-soft py-3.5 text-base/6">
				<span class={row.strong ? 'font-semibold text-ink' : 'text-muted'}>{row.label}</span>
				<span class={['text-ink tabular-nums', row.strong ? 'font-bold' : 'font-semibold']}>
					{row.value}
				</span>
			</div>
		{/each}
	</div>
</section>
