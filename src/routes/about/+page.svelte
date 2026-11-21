<script lang="ts">
	import SiteShell from '#lib/components/site-shell.svelte';
	import PageIntro from '#lib/components/page-intro.svelte';
	import PhotoPlaceholder from '#lib/components/photo-placeholder.svelte';
	import RichText from '#lib/components/rich-text.svelte';
	import Button from '#lib/components/button.svelte';
	import Icon from '#lib/components/icon.svelte';
	import PhoneFrame from '#lib/components/phone-frame.svelte';
	import FarePreviewScreen from '#lib/components/app-screens/fare-preview-screen.svelte';
	import TripEarningsScreen from '#lib/components/app-screens/trip-earnings-screen.svelte';
	import SupportChatScreen from '#lib/components/app-screens/support-chat-screen.svelte';
	import { reveal } from '#lib/actions/reveal.js';
	import type { IconName } from '#lib/icons.js';
	import type { Component } from 'svelte';
	import about1 from '#lib/assets/about-1.webp';
	import about2 from '#lib/assets/about-2.webp';
	import about3 from '#lib/assets/about-3.webp';

	const story = [
		{
			type: 'p' as const,
			text: 'Getting around Lagos takes enough out of you already. You have prices that jump, drivers who ask you to cancel and pay cash, and a help line that never answers. You end up losing trust, and drivers feel squeezed by what they earn after the platform takes its cut.'
		},
		{
			type: 'p' as const,
			text: 'We built Aera to fix the basics first: One clear price before you book and drivers who are properly checked, safety tools that work during the ride, not after it, and a team that actually picks up.'
		},
		{
			type: 'p' as const,
			text: 'We’re starting with everyday rides in Lagos. Once that runs smoothly, we’ll grow, carefully.'
		}
	];

	type Value = {
		icon: IconName;
		title: string;
		body: string;
		/** The app screen this shows up as, for the three we can show. */
		screen?: Component;
		/** What that screen shows, for anyone who can't see it. */
		shot?: string;
		crop?: number;
	};

	const values: Value[] = [
		{
			icon: 'tag',
			title: 'Fair, clear prices',
			body: 'You see and pay the full fare before you book, and it’s locked once a driver accepts.',
			screen: FarePreviewScreen,
			shot: 'The aera app showing one upfront Economy fare of ₦8,400 before the rider books',
			crop: 430
		},
		{
			icon: 'steering-wheel',
			title: 'Drivers earnings',
			body: 'We take a flat 15% commission. Drivers keep the other 85% of every fare.',
			screen: TripEarningsScreen,
			shot: 'A driver’s trip earnings in the aera app: ₦8,400 fare, a flat 15% commission, ₦7,140 kept',
			crop: 430
		},
		{
			icon: 'lifebuoy',
			title: 'Support that actually answers',
			body: 'Connect with real people, in the app, for both riders and drivers.',
			screen: SupportChatScreen,
			shot: 'An aera support thread in the app, with Ngozi from the support team answering',
			crop: 430
		},
		{
			icon: 'shield-check',
			title: 'Safety first',
			body: "Verified drivers and inspected cars, trip sharing and a safety team that's just a tap away."
		},
		{
			icon: 'handshake',
			title: 'Reliable rides',
			body: 'We have clear rules on cancelling rides, the same for riders and drivers.'
		},
		{
			icon: 'device-mobile',
			title: 'Simple to use',
			body: 'One app. To ride or to drive is just a few taps either way.'
		}
	];
</script>

<svelte:head>
	<title>Aera: About us</title>
	<meta
		name="description"
		content="Aera is a ride-hailing app made in Lagos by AFRIBA TECHNOLOGIES, built to make everyday rides simpler, fairer and safer."
	/>
</svelte:head>

<SiteShell current="about">
	<PageIntro
		eyebrow="About Aera"
		title="Moving around Lagos should be easy & safe."
		body="Aera is a ride-hailing app made in Lagos by AFRIBA TECHNOLOGIES. We’re here to make everyday rides simpler, fairer and safer, for the people riding and the people driving."
	/>

	<section
		use:reveal
		class="shell grid w-full reveal grid-cols-[1.3fr_1fr] gap-5 pb-24 max-wide:grid-cols-1"
	>
		<PhotoPlaceholder
			src={about1}
			caption="Lagos street life, people heading out"
			class="h-130 rounded-4xl"
		/>
		<div class="grid grid-rows-2 gap-5">
			<PhotoPlaceholder
				src={about2}
				caption="Driver smiling by his car"
				class="min-h-62.5 rounded-4xl"
			/>
			<PhotoPlaceholder
				src={about3}
				caption="Friends getting into a car"
				class="min-h-62.5 rounded-4xl"
			/>
		</div>
	</section>

	<section
		class="shell grid w-full grid-cols-[420px_1fr] gap-8 pt-6 pb-30 max-wide:grid-cols-1 max-wide:pb-18 wide:gap-20"
	>
		<div use:reveal class="reveal">
			<span class="text-sm font-semibold text-accent">Why we started</span>
			<h2
				class="mt-3.5 text-[48px]/[54px] font-semibold tracking-[-0.035em] max-wide:text-[36px]/[42px]"
			>
				Rides got <span class="text-accent italic">really</span> complicated. We don't think they have
				to be.
			</h2>
		</div>
		<div use:reveal={{ delay: 120 }} class="reveal pt-1.5">
			<RichText blocks={story} />
		</div>
	</section>

	<section class="w-full bg-night text-paper">
		<div class="shell grid grid-cols-2 gap-16 py-30 max-wide:grid-cols-1 max-wide:py-18">
			<div use:reveal class="flex reveal flex-col gap-3.5">
				<span class="text-sm font-semibold text-accent-light">Our vision</span>
				<p class="text-[34px]/[44px] font-semibold tracking-[-0.02em]">
					A trusted way to move around the city that’s easier, safer and more affordable.
				</p>
			</div>
			<div use:reveal={{ delay: 120 }} class="flex reveal flex-col gap-3.5">
				<span class="text-sm font-semibold text-accent-light">Our mission</span>
				<p class="text-[34px]/[44px] font-semibold tracking-[-0.02em]">
					Connect riders and drivers with technology that brings convenience, fair prices and
					reliable rides.
				</p>
			</div>
		</div>
	</section>

	<section class="shell flex w-full flex-col gap-12 pt-30 pb-24 max-wide:pt-18">
		<div use:reveal class="reveal">
			<span class="text-sm font-semibold text-accent">What we care about</span>
			<h2
				class="mt-3.5 text-[48px]/[54px] font-semibold tracking-[-0.035em] max-wide:text-[36px]/[42px]"
			>
				Six things we won’t compromise on.
			</h2>
		</div>

		<div class="grid grid-cols-3 gap-5 max-wide:grid-cols-1">
			{#each values as value, i (value.title)}
				{@const Screen = value.screen}
				<div
					use:reveal={{ delay: (i % 3) * 100 }}
					class="flex reveal flex-col gap-3.5 overflow-hidden rounded-3xl bg-surface p-7"
				>
					<span class="flex size-12 items-center justify-center rounded-[14px] bg-ink text-paper">
						<Icon name={value.icon} />
					</span>
					<h3 class="text-[21px]/7 font-semibold">{value.title}</h3>
					<p class="text-[15px]/6 text-muted">{value.body}</p>
					{#if Screen && value.crop}
						<PhoneFrame
							label={value.shot ?? value.title}
							crop={value.crop}
							scale={0.64}
							edge="bottom"
							fadeClass="from-surface"
							class="mx-auto mt-auto -mb-7 max-w-full"
						>
							<Screen />
						</PhoneFrame>
					{/if}
				</div>
			{/each}
		</div>
	</section>

	<section class="shell w-full pb-24">
		<div
			use:reveal
			class="grid reveal grid-cols-[1fr_auto] items-center gap-8 rounded-4xl bg-surface p-14 max-wide:grid-cols-1 max-wide:px-5 max-wide:py-8"
		>
			<div>
				<h2 class="text-[40px]/[46px] font-semibold tracking-[-0.03em] max-wide:text-[32px]/[38px]">
					Want to build this with us?
				</h2>
				<p class="mt-3 max-w-155 text-[17px]/7 text-muted">
					Partnerships, press or a report. We’d love to hear from you at
					<a class="text-accent underline" href="mailto:partnership@getaera.co">
						partnership@getaera.co
					</a>.
				</p>
			</div>
			<div class="flex flex-wrap gap-3">
				<Button href="mailto:partnership@getaera.co" size="xl">
					Get in touch
					<Icon name="arrow-right" size={18} />
				</Button>
				<Button href="/#drive" size="xl" variant="outline">Drive with Aera</Button>
			</div>
		</div>
	</section>
</SiteShell>
