<script lang="ts">
	import Icon from '#lib/components/icon.svelte';
	import SectionHeading from '#lib/components/section-heading.svelte';
	import { reveal } from '#lib/actions/reveal.js';

	const faqs = [
		{
			q: 'Can I pay cash?',
			a: 'No, and that’s on purpose. You pay by card or bank transfer in the app, so there’s no change wahala and nobody haggles at the end of the ride.'
		},
		{
			q: 'What if my driver takes a longer route?',
			a: 'You still pay the price you saw. Your fare is locked the moment a driver accepts, traffic or detours included. Tell us in the app and we’ll look into the route.'
		},
		{
			q: 'Who can follow my trip?',
			a: 'Only the people you share it with. They get a link that shows your driver, car, plate and where you are, live, until you arrive. They never see your card or payment details.'
		},
		{
			q: 'How do I know my driver is legit?',
			a: 'Every driver’s ID, licence and car papers are checked, and their car is inspected in person before they can go online. At pickup, you give them your 4-digit trip PIN so you know it’s the right car.'
		},
		{
			q: 'How much do drivers keep?',
			a: '85% of every fare. Aera takes a flat 15%, and earnings are paid out to the driver’s bank account.'
		},
		{
			q: 'Where does Aera work?',
			a: 'We’re starting with a pilot in parts of Lagos from November, then growing area by area. Download the app to see if we’re in your area yet.'
		}
	];

	let open = $state(0);

	function toggle(index: number) {
		open = open === index ? -1 : index;
	}
</script>

<section
	id="faq"
	class="shell grid w-full grid-cols-[420px_1fr] items-start gap-20 pt-10 pb-30 max-wide:grid-cols-1 max-wide:pb-18"
>
	<SectionHeading
		eyebrow="FAQ"
		title="Questions we hear a lot."
		body="Something else on your mind? Message us in the app any time."
	/>

	<ul class="m-0 list-none border-b border-line p-0">
		{#each faqs as faq, i (faq.q)}
			<li use:reveal={{ delay: i * 60 }} class="reveal border-t border-line">
				<button
					type="button"
					onclick={() => toggle(i)}
					aria-expanded={open === i}
					class="flex min-h-18 w-full cursor-pointer items-center gap-4 border-0 bg-transparent py-5 text-left font-[inherit] text-ink"
				>
					<span class="flex-1 text-xl/7 font-semibold">{faq.q}</span>
					{#if open === i}
						<span
							class="flex size-9 shrink-0 items-center justify-center rounded-full bg-ink text-paper"
						>
							<Icon name="minus" size={18} />
						</span>
					{:else}
						<span class="flex size-9 shrink-0 items-center justify-center rounded-full bg-surface">
							<Icon name="plus" size={18} />
						</span>
					{/if}
				</button>
				{#if open === i}
					<p class="m-0 pr-14 pb-6 text-[17px]/7 text-muted">{faq.a}</p>
				{/if}
			</li>
		{/each}
	</ul>
</section>
