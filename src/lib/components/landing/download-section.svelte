<script lang="ts">
	import wordmark from '#lib/assets/aera-wordmark-white.png';
	import StoreButtons from '#lib/components/store-buttons.svelte';
	import { reveal } from '#lib/actions/reveal.js';

	const ripples = [0, 1.3, 2.6];
</script>

<section id="get" class="shell w-full pb-24">
	<div
		use:reveal
		class="relative flex reveal flex-col items-center overflow-hidden rounded-[36px] bg-night px-16 py-24 text-center text-paper max-wide:px-5 max-wide:py-14"
	>
		<div aria-hidden="true" class="absolute top-1/2 left-1/2 size-0">
			{#each ripples as delay (delay)}
				<span
					class="absolute -top-40 -left-40 size-80 animate-ping-out rounded-full border border-accent-light/35 [animation-delay:var(--ripple-delay)] [animation-duration:4s]"
					style:--ripple-delay={`${delay}s`}
				></span>
			{/each}
		</div>

		<img src={wordmark} alt="Aera" class="relative block h-auto w-30" />

		<h2
			class="relative mt-7 text-[64px]/[70px] font-semibold tracking-[-0.04em] max-wide:text-[36px]/[42px]"
		>
			Ready when you are.
		</h2>
		<p class="relative mt-4 max-w-130 text-[19px]/[30px] text-ash">
			Download Aera, and make your first trip in just a few taps. Move different.
		</p>

		<StoreButtons invert class="relative mt-9 justify-center" />
	</div>
</section>
