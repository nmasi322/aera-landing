<script lang="ts">
	import Icon from '#lib/components/icon.svelte';
	import SectionHeading from '#lib/components/section-heading.svelte';
	import { reveal } from '#lib/actions/reveal.js';
	import type { IconName } from '#lib/icons.js';

	const features: { icon: IconName; title: string; body: string }[] = [
		{
			icon: 'identification-card',
			title: 'Verified drivers',
			body: 'ID, licence and car papers are verified, and every car is inspected in person before it comes to pick you.'
		},
		{
			icon: 'share-network',
			title: 'Share your trip',
			body: 'Send a live link to family or friends, or share every trip automatically.'
		},
		{
			icon: 'siren',
			title: 'Help is one tap away',
			body: 'The safety button instantly reaches our safety team during your trip. In danger? Call 112 straight from the app.'
		},
		{
			icon: 'phone',
			title: 'Calls are always private',
			body: 'Talk to your driver inside the app. Your phone number is not disclosed.'
		}
	];
</script>

<section id="safety" class="w-full bg-night text-paper">
	<div class="shell flex flex-col gap-14 py-30 max-wide:gap-8 max-wide:py-18">
		<SectionHeading
			tone="dark"
			eyebrow="Safety"
			title="We’ve got your back, from pickup to “I’m home.”"
			body="Every part of the trip is designed to feel like you’re never on your own, and the people who worry about you can relax too."
		/>

		<div class="grid items-stretch gap-4 max-wide:grid-cols-1 md:gap-5">
			<div
				use:reveal
				class="relative flex reveal flex-col gap-2.5 overflow-hidden rounded-[28px] border border-night-line bg-night-card p-4 md:gap-4 md:p-7"
			>
				<span class="text-[13px]/5 font-semibold text-accent-light">What Timi sees</span>

				<div class="flex flex-col gap-3 rounded-[20px] bg-paper p-4.5 text-ink">
					<span class="flex items-center gap-2">
						<span
							class="inline-flex h-6.5 items-center gap-1.5 rounded-full bg-ink px-2.5 text-xs font-semibold text-paper"
						>
							<span class="relative size-1.75">
								<span class="absolute inset-0 animate-ping-out rounded-full bg-accent-light"></span>
								<span class="absolute inset-0 rounded-full bg-accent-light"></span>
							</span>
							Live
						</span>
						<span class="text-xs text-muted">aera.ng/t/8KQ2X</span>
					</span>

					<span class="text-xl/[26px] font-semibold">Tunde is on the way to Ikeja City Mall</span>

					<span class="flex items-baseline gap-2">
						<span class="text-[26px] font-bold">10:33</span>
						<span class="text-[13px] text-muted">arrival · 38 min left</span>
					</span>

					<span class="h-1 overflow-hidden rounded-full bg-line">
						<span class="block h-full w-[40%] animate-progress rounded-full bg-ink"></span>
					</span>

					<span class="flex items-center gap-2.5 pt-1">
						<span
							class="flex size-8.5 items-center justify-center rounded-full bg-surface text-xs font-semibold"
						>
							OA
						</span>
						<span class="flex-1 text-[13px]/[18px]">
							<b class="font-semibold">Olutobi · 4.9</b><br />
							<span class="text-muted">Silver Toyota Corolla</span>
						</span>
						<span
							class="flex h-7 items-center rounded-lg border-2 border-ink px-2 text-[11px] font-bold tracking-[0.06em]"
						>
							LND 482 KJ
						</span>
					</span>
				</div>

				<span class="text-[13px]/5 text-night-subtle">
					She doesn't need an app or account to follow along. And we never show card or payment
					details.
				</span>
			</div>

			<div class="grid grid-cols-2 gap-4 max-wide:grid-cols-1 md:gap-5">
				{#each features as feature, i (feature.title)}
					<div
						use:reveal={{ delay: 120 + i * 100 }}
						class="flex reveal flex-col gap-2 rounded-3xl border border-night-line bg-night-card p-4 md:gap-3.5 md:p-7"
					>
						<span
							class="flex size-12 items-center justify-center rounded-[14px] bg-accent-light/15 text-accent-light"
						>
							<Icon name={feature.icon} />
						</span>
						<h3 class="text-lg/snug font-semibold md:text-[21px]/7">{feature.title}</h3>
						<p class="text-[15px]/6 text-night-muted">{feature.body}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
