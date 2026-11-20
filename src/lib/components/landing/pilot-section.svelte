<script lang="ts">
	import PhotoPlaceholder from '#lib/components/photo-placeholder.svelte';
	import { reveal } from '#lib/actions/reveal.js';
</script>

<section class="shell w-full py-30 max-wide:py-18">
	<div
		use:reveal
		class="relative flex min-h-[520px] reveal items-end overflow-hidden rounded-[36px]"
	>
		<PhotoPlaceholder
			caption="Lagos street with a bridge · Ben Iwara / Unsplash"
			class="absolute inset-0 h-full w-full"
		/>
		<div
			aria-hidden="true"
			class="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_30%,rgba(0,0,0,.72)_100%)]"
		></div>
		<div
			class="relative flex max-w-[760px] flex-col gap-4 p-14 text-paper max-wide:px-5 max-wide:py-8"
		>
			<span class="text-sm font-semibold text-accent-light">Made in Lagos, for Lagos</span>
			<h2 class="text-[52px]/[58px] font-semibold tracking-[-0.035em] max-wide:text-[36px]/[42px]">
				We’re starting small so we get it right.
			</h2>
			<p class="text-[19px]/[30px] text-night-soft">
				Our pilot opens in parts of Lagos this November with a small group of hand-checked drivers.
				Then we grow, one neighbourhood at a time.
			</p>
		</div>
	</div>
</section>
