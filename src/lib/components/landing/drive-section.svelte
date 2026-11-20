<script lang="ts">
	import Button from '#lib/components/button.svelte';
	import Icon from '#lib/components/icon.svelte';
	import PhotoPlaceholder from '#lib/components/photo-placeholder.svelte';
	import SectionHeading from '#lib/components/section-heading.svelte';
	import { reveal } from '#lib/actions/reveal.js';

	const steps = [
		{ title: 'Apply in the app', body: 'Same app as your rides. Just switch to Driver.' },
		{ title: 'We check your papers', body: 'We review your ID, licence and car papers.' },
		{ title: 'Quick car inspection', body: 'Book a slot at our Lekki or Ikeja centre.' },
		{ title: 'Go online', body: 'Accept trips when you want. Earn 85% of every fare.' }
	];
</script>

<section id="drive" class="w-full bg-surface">
	<div class="shell grid grid-cols-2 items-center gap-20 py-30 max-wide:grid-cols-1 max-wide:py-18">
		<div use:reveal class="relative reveal">
			<PhotoPlaceholder
				caption="Driver in his car, Lagos · Joshua Oluwagbemiga / Unsplash"
				class="h-160 w-full rounded-4xl"
			/>
			<div
				class="absolute -right-6 bottom-12 flex animate-float flex-col gap-1 rounded-[20px] bg-paper px-5 py-4.5 shadow-[0_16px_40px_rgba(0,0,0,.14)] max-wide:hidden"
			>
				<span class="text-[13px] text-muted">Trip complete · you earned</span>
				<span class="text-[32px]/10 font-bold tracking-[-0.02em]">₦7,140</span>
				<span class="inline-flex items-center gap-1.5 text-[13px] font-semibold text-success">
					<Icon name="check-circle" size={16} />
					85% of the ₦8,400 fare
				</span>
			</div>
		</div>

		<div class="flex flex-col gap-8">
			<SectionHeading
				eyebrow="Drive with Aera"
				title="Your car. Your hours. 85% of every fare."
				body="Drive when it suits you and keep most of what you earn. Earnings go straight to your bank account."
			/>

			<ol class="m-0 list-none border-b border-line p-0">
				{#each steps as step, i (step.title)}
					<li use:reveal={{ delay: i * 90 }} class="flex reveal gap-4 border-t border-line py-4.5">
						<span
							class={[
								'flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-paper',
								i === steps.length - 1 ? 'bg-accent' : 'bg-ink'
							]}
						>
							{i + 1}
						</span>
						<span class="flex flex-col gap-0.5">
							<span class="text-lg/6 font-semibold">{step.title}</span>
							<span class="text-[15px]/[22px] text-muted">{step.body}</span>
						</span>
					</li>
				{/each}
			</ol>

			<div use:reveal={{ delay: 360 }} class="flex reveal flex-wrap items-center gap-4">
				<Button href="#get" size="xl">
					Apply to drive
					<Icon name="arrow-right" size={18} />
				</Button>
				<span class="text-sm/5 text-muted">
					You’ll need a car from 2010 or newer and a valid licence.
				</span>
			</div>
		</div>
	</div>
</section>
