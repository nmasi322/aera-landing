<script lang="ts">
	import Icon from '#lib/components/icon.svelte';
	import SectionHeading from '#lib/components/section-heading.svelte';
	import { reveal } from '#lib/actions/reveal.js';

	const steps = [
		{
			step: '01',
			title: 'Tell us where to',
			body: `Set your pickup and tell us where you’re headed. You can also frequent routes so they're two taps away next time.`
		},
		{
			step: '02',
			title: 'See the price, lock it in',
			body: 'You see the full price before you confirm your trip. Once a driver accepts, it’s locked, traffic or not.'
		},
		{
			step: '03',
			title: 'Check the PIN, hop in',
			body: `For your safety, your driver will always ask for your 4-digit PIN at pickup, so you  know you're in the right car.`
		}
	];

	const card =
		'reveal flex flex-col gap-[22px] rounded-[28px] bg-surface p-7 transition-all duration-300 ease-[cubic-bezier(.2,.8,.2,1)] hover:-translate-y-3 hover:scale-95 hover:bg-muted/10 cursor-pointer';
	const preview = 'rounded-2xl bg-paper p-3.5 border-2 border-muted-light/20';
</script>

<section id="how" class="shell flex w-full flex-col gap-14 py-30 max-wide:gap-8 max-wide:py-18">
	<SectionHeading
		eyebrow="How it works"
		title="Booking a ride shouldn’t need a tutorial."
		body={`There are only 3 steps from “where are you?” to “I’m in the car.” \nUh huh, we're very straightforward.`}
	/>

	<div class="grid grid-cols-3 gap-5 max-wide:grid-cols-1">
		<article use:reveal class={card}>
			<div class={[preview, 'flex flex-col gap-2']}>
				<span class="flex items-center gap-2.5 text-sm font-semibold">
					<span class="size-2.5 rounded-full bg-ink"></span>
					14 Admiralty Way, Lekki
				</span>
				<span
					class="ml-1 h-3.5 w-0.5 bg-[repeating-linear-gradient(#A6A6A6_0_3px,transparent_3px_6px)]"
				></span>
				<span class="flex items-center gap-2.5 text-sm font-semibold">
					<span class="size-2.5 rounded-xs bg-ink"></span>
					Ikeja City Mall
					<span class="ml-auto h-4.5 w-0.5 animate-blink bg-accent"></span>
				</span>
			</div>
			{@render body(steps[0])}
		</article>

		<article use:reveal={{ delay: 120 }} class={card}>
			<div class={[preview, 'flex h-24 items-center gap-3']}>
				<span class="flex size-10 items-center justify-center rounded-xl bg-surface">
					<Icon name="car-profile" size={22} />
				</span>
				<span class="flex flex-1 flex-col">
					<span class="text-[15px] font-semibold">Economy</span>
					<span class="text-xs text-muted">4 seats · 6 min away</span>
				</span>
				<span class="flex flex-col items-end">
					<span class="text-lg font-bold">₦8,400</span>
					<span class="inline-flex items-center gap-0.75 text-[11px] font-semibold text-accent">
						<Icon name="lock" size={11} />
						Locked
					</span>
				</span>
			</div>
			{@render body(steps[1])}
		</article>

		<article use:reveal={{ delay: 240 }} class={card}>
			<div class={[preview, 'flex flex-col items-center gap-2.5']}>
				<span class="text-xs text-muted">Give Olutobi your trip PIN</span>
				<span class="flex gap-2">
					{#each ['4', '8', '2', '7'] as digit, i (i)}
						<span
							class="flex h-12 w-10 items-center justify-center rounded-[10px] border-2 border-ink text-[22px] font-bold"
						>
							{digit}
						</span>
					{/each}
				</span>
			</div>
			{@render body(steps[2])}
		</article>
	</div>
</section>

{#snippet body(step: (typeof steps)[number])}
	<div class="flex flex-col gap-2">
		<span class="font-mono text-[13px] font-medium text-accent">{step.step}</span>
		<h3 class="text-2xl/[30px] font-semibold tracking-[-0.01em]">{step.title}</h3>
		<p class="text-base/[26px] text-muted">{step.body}</p>
	</div>
{/snippet}
