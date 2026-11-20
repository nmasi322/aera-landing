<script lang="ts">
	import SiteShell from '#lib/components/site-shell.svelte';
	import PageIntro from '#lib/components/page-intro.svelte';
	import PhotoPlaceholder from '#lib/components/photo-placeholder.svelte';
	import RichText from '#lib/components/rich-text.svelte';
	import Button from '#lib/components/button.svelte';
	import Icon from '#lib/components/icon.svelte';
	import { reveal } from '#lib/actions/reveal.js';
	import type { IconName } from '#lib/icons.js';

	const story = [
		{
			type: 'p' as const,
			text: 'Getting around Lagos takes enough out of you already. Prices that jump, drivers who ask you to cancel and pay cash, support that never answers. Riders lose trust, and drivers feel squeezed by what they earn after the platform takes its cut.'
		},
		{
			type: 'p' as const,
			text: 'We built Aera to fix the basics first. One clear price before you book. Drivers who are properly checked, and who keep 85% of every fare. Safety tools that work during the ride, not after it. And a team that actually picks up.'
		},
		{
			type: 'p' as const,
			text: 'We’re starting with everyday Economy rides in Lagos, beginning with a small pilot. Once that runs smoothly, we’ll grow, carefully.'
		}
	];

	const values: { icon: IconName; title: string; body: string }[] = [
		{
			icon: 'tag',
			title: 'Fair, clear prices',
			body: 'You see the full fare before you book, and it’s locked once a driver accepts.'
		},
		{
			icon: 'steering-wheel',
			title: 'Drivers earn properly',
			body: 'A flat 15% commission. Drivers keep 85% of every fare.'
		},
		{
			icon: 'shield-check',
			title: 'Safety first',
			body: 'Checked drivers, inspected cars, trip sharing and a safety team a tap away.'
		},
		{
			icon: 'handshake',
			title: 'Reliable rides',
			body: 'Clear rules on cancelling and waiting, the same for riders and drivers.'
		},
		{
			icon: 'lifebuoy',
			title: 'Support that answers',
			body: 'Real people, in the app, for both riders and drivers.'
		},
		{
			icon: 'device-mobile',
			title: 'Simple to use',
			body: 'One app. Ride or drive, a few taps either way.'
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

<SiteShell>
	<PageIntro
		eyebrow="About Aera"
		title="Moving around Lagos should feel easy."
		body="Aera is a ride-hailing app made in Lagos by AFRIBA TECHNOLOGIES. We’re here to make everyday rides simpler, fairer and safer, for the people riding and the people driving."
	/>

	<section
		use:reveal
		class="shell grid w-full reveal grid-cols-[1.3fr_1fr] gap-5 pb-24 max-wide:grid-cols-1"
	>
		<PhotoPlaceholder
			caption="Lagos street life, people heading out"
			class="h-[520px] rounded-[32px]"
		/>
		<div class="grid grid-rows-2 gap-5">
			<PhotoPlaceholder caption="Driver smiling by his car" class="min-h-[250px] rounded-[32px]" />
			<PhotoPlaceholder caption="Friends getting into a car" class="min-h-[250px] rounded-[32px]" />
		</div>
	</section>

	<section
		class="shell grid w-full grid-cols-[420px_1fr] gap-20 pt-6 pb-30 max-wide:grid-cols-1 max-wide:pb-18"
	>
		<div use:reveal class="reveal">
			<span class="text-sm font-semibold text-accent">Why we started</span>
			<h2
				class="mt-3.5 text-[48px]/[54px] font-semibold tracking-[-0.035em] max-wide:text-[36px]/[42px]"
			>
				Rides got complicated. We think they don’t have to be.
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
				<div
					use:reveal={{ delay: (i % 3) * 100 }}
					class="flex reveal flex-col gap-3.5 rounded-3xl bg-surface p-7"
				>
					<span class="flex size-12 items-center justify-center rounded-[14px] bg-ink text-paper">
						<Icon name={value.icon} />
					</span>
					<h3 class="text-[21px]/7 font-semibold">{value.title}</h3>
					<p class="text-[15px]/6 text-muted">{value.body}</p>
				</div>
			{/each}
		</div>
	</section>

	<section class="shell w-full pb-24">
		<div
			use:reveal
			class="grid reveal grid-cols-[1fr_auto] items-center gap-8 rounded-[32px] bg-surface p-14 max-wide:grid-cols-1 max-wide:px-5 max-wide:py-8"
		>
			<div>
				<h2 class="text-[40px]/[46px] font-semibold tracking-[-0.03em] max-wide:text-[32px]/[38px]">
					Want to build this with us?
				</h2>
				<p class="mt-3 max-w-[620px] text-[17px]/7 text-muted">
					Partnerships, press or just saying hello. We’d love to hear from you at [hello@aera.ng].
				</p>
			</div>
			<div class="flex flex-wrap gap-3">
				<Button href="mailto:hello@aera.ng" size="xl">
					Get in touch
					<Icon name="arrow-right" size={18} />
				</Button>
				<Button href="/#drive" size="xl" variant="outline">Drive with Aera</Button>
			</div>
		</div>
	</section>
</SiteShell>
