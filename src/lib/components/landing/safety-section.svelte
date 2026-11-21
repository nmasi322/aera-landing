<script lang="ts">
	import type { Component } from 'svelte';
	import Icon from '#lib/components/icon.svelte';
	import PhoneFrame from '#lib/components/phone-frame.svelte';
	import SectionHeading from '#lib/components/section-heading.svelte';
	import TripPinScreen from '#lib/components/app-screens/trip-pin-screen.svelte';
	import TrustedContactsScreen from '#lib/components/app-screens/trusted-contacts-screen.svelte';
	import SafetySheetScreen from '#lib/components/app-screens/safety-sheet-screen.svelte';
	import DriverCallScreen from '#lib/components/app-screens/driver-call-screen.svelte';
	import { reveal } from '#lib/actions/reveal.js';
	import type { IconName } from '#lib/icons.js';

	type Feature = {
		icon: IconName;
		title: string;
		body: string;
		/** The app screen this promise looks like in the hand. */
		screen: Component;
		/** What that screen shows, for anyone who can't see it. */
		shot: string;
		crop: number;
		tone?: 'light' | 'dark';
		screenClass?: string;
	};

	const features: Feature[] = [
		{
			icon: 'identification-card',
			title: 'Verified drivers',
			body: 'ID, licence and car papers are verified, and every car is inspected in person before it comes to pick you.',
			screen: TripPinScreen,
			shot: 'The aera app at pickup, showing the car’s plate number and the rider’s four-digit trip PIN',
			crop: 430,
			screenClass: 'bg-line-soft'
		},
		{
			icon: 'share-network',
			title: 'Share your trip',
			body: 'Send a live link to family or friends, or share every trip automatically.',
			screen: TrustedContactsScreen,
			shot: 'The aera app’s trusted contacts screen, with a live trip link going out to Ada',
			crop: 470
		},
		{
			icon: 'siren',
			title: 'Help is one tap away',
			body: 'The safety button instantly reaches our safety team during your trip. In danger? Call 112 straight from the app.',
			screen: SafetySheetScreen,
			shot: 'The aera app’s safety sheet, with an emergency call button and a shortcut to the safety team',
			crop: 470,
			screenClass: 'bg-line-soft'
		},
		{
			icon: 'phone',
			title: 'Calls are always private',
			body: 'Talk to your driver inside the app. Your phone number is not disclosed.',
			screen: DriverCallScreen,
			shot: 'An in-app aera call with a driver, marked private and carried over data',
			crop: 470,
			tone: 'dark',
			screenClass: 'bg-night'
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
						<span class="text-xs text-muted">getaera.co/t/8KQ2X</span>
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
					{@const Screen = feature.screen}
					<div
						use:reveal={{ delay: 120 + i * 100 }}
						class="flex reveal gap-5 overflow-hidden rounded-3xl border border-night-line bg-night-card px-4 pt-4 max-wide:flex-col md:px-7 md:pt-7"
					>
						<div class="flex flex-1 flex-col gap-2 pb-4 md:gap-3.5 md:pb-7">
							<span
								class="flex size-12 items-center justify-center rounded-[14px] bg-accent-light/15 text-accent-light"
							>
								<Icon name={feature.icon} />
							</span>
							<h3 class="text-lg/snug font-semibold md:text-[21px]/7">{feature.title}</h3>
							<p class="text-[15px]/6 text-night-muted">{feature.body}</p>
						</div>

						<PhoneFrame
							label={feature.shot}
							crop={feature.crop}
							tone={feature.tone}
							screenClass={feature.screenClass}
							scale={0.52}
							class="self-end max-wide:self-center"
						>
							<Screen />
						</PhoneFrame>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
