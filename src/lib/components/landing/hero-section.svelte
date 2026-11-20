<script lang="ts">
	import Icon from '#lib/components/icon.svelte';
	import heroStreet from '#assets/hero-1.webp';
	import heroRider from '#assets/hero-2.webp';
	import heroDriver from '#assets/hero-3.webp';
	import StoreButtons from '#lib/components/store-buttons.svelte';
	import { reveal } from '#lib/actions/reveal.js';

	const card =
		'absolute z-10 rounded-[18px] bg-paper shadow-[0_16px_40px_rgba(0,0,0,.14),0_2px_6px_rgba(0,0,0,.06)]';
</script>

<section
	id="top"
	class="shell grid w-full grid-cols-[560px_1fr] items-start gap-10 pt-16 pb-24 max-xl:grid-cols-1"
>
	<div class="flex flex-col pt-14 max-wide:pt-0">
		<span use:reveal class="reveal">
			<span
				class="inline-flex h-8.5 items-center gap-2.5 rounded-full border border-line bg-white pr-3.5 pl-3 text-sm/5 font-medium text-ink-soft"
			>
				<span class="relative size-2">
					<span class="absolute inset-0 animate-ping-out rounded-full bg-accent"></span>
					<span class="absolute inset-0 rounded-full bg-accent"></span>
				</span>
				Now arriving in Lagos · pilot from November
			</span>
		</span>

		<h1
			use:reveal={{ delay: 80 }}
			class="mt-7 reveal text-[80px]/[84px] font-semibold tracking-[-0.04em] max-wide:text-[48px]/[52px]"
		>
			Lagos, let’s move different.
		</h1>
		<p use:reveal={{ delay: 160 }} class="mt-6 inline reveal text-[20px]/8 text-muted">
			Get where you’re going at a price you saw first, with a driver we’ve checked, while the people
			who care about you (and you allow) watch you get home safely.
		</p>

		<div use:reveal={{ delay: 240 }} class="mt-9 reveal">
			<StoreButtons />
		</div>

		<a
			use:reveal={{ delay: 320 }}
			href="#drive"
			class="mt-5.5 inline-flex reveal items-center gap-1.5 text-[15px]/5 font-semibold text-ink"
		>
			Got a car? Drive with Aera and keep 85%
			<Icon name="arrow-right" size={16} />
		</a>
	</div>

	<div use:reveal={{ delay: 160 }} class="relative h-190 reveal">
		<div
			class="absolute top-0 left-22.5 h-125 w-155 rounded-4xl bg-ink-soft object-cover max-xl:left-0 max-xl:h-100 max-xl:w-full"
		>
			<img
				src={heroStreet}
				fetchpriority="high"
				alt="A driver smiling through the window of his car in Lagos"
				class="size-full rounded-4xl object-cover opacity-50"
			/>
		</div>
		<div
			class="absolute top-80 left-0 z-2 h-90 w-70 rounded-[28px] border-6 border-white bg-ink-soft object-cover max-xl:top-80 max-xl:left-[10%] max-sm:hidden"
		>
			<img
				src={heroRider}
				alt="A driver smiling through the window of his car in Lagos"
				class="size-full rounded-[28px] object-cover opacity-50"
			/>
		</div>
		<div
			class="absolute top-102.5 left-105 z-2 h-67.5 w-72.5 rounded-[28px] border-6 border-white bg-ink-soft object-cover max-xl:top-60 max-xl:right-[10%] max-md:hidden"
		>
			<img
				src={heroDriver}
				alt="A driver smiling through the window of his car in Lagos"
				class="size-full rounded-[28px] object-cover opacity-50"
			/>
		</div>

		<!-- Driver on the way -->
		<div class={[card, 'top-10 left-35 animate-float']}>
			<div class="flex items-center gap-3 py-3 pr-4 pl-3">
				<span
					class="flex size-10 items-center justify-center rounded-full bg-ink text-sm font-semibold text-paper"
				>
					OA
				</span>
				<span class="flex flex-col">
					<span class="flex items-center gap-1.5 text-[15px]/5 font-semibold">
						Olutobi is 3 min away
						<Icon name="seal-check" size={15} class="text-accent" />
					</span>
					<span class="text-[13px]/[18px] text-muted">Silver Corolla · LND 482 KJ</span>
				</span>
			</div>
		</div>

		<!-- Locked price -->
		<div class={[card, 'top-62.5 left-135 animate-float-slow max-xl:hidden']}>
			<div class="flex flex-col gap-0.5 px-4 py-3.5">
				<span class="flex items-center gap-1.5 text-xs/4 text-muted">
					<Icon name="lock" size={14} />
					Price locked
				</span>
				<span class="text-[26px]/8 font-bold tracking-[-0.02em]">₦8,400</span>
			</div>
		</div>

		<!-- Someone following the trip -->
		<div class={[card, 'top-162.5 left-30 animate-float-slow max-md:hidden']}>
			<div class="flex items-center gap-3 py-3 pr-4 pl-3">
				<span class="relative size-10">
					<span class="absolute inset-0 animate-ping-out rounded-full bg-accent/35"></span>
					<span
						class="absolute inset-0 flex items-center justify-center rounded-full bg-accent-soft text-sm font-bold text-accent"
					>
						T
					</span>
				</span>
				<span class="flex flex-col">
					<span class="text-[15px]/5 font-semibold">Timi is following your trip</span>
					<span class="text-[13px]/[18px] text-muted">And she'll keep track till you're home</span>
				</span>
			</div>
		</div>

		<!-- Driver earnings -->
		<div class={[card, 'top-160 left-100 animate-float max-xl:top-120 max-md:hidden']}>
			<div class="flex items-center gap-2.5 px-3.5 py-3">
				<span
					class="flex size-9 items-center justify-center rounded-[10px] bg-accent-soft text-accent"
				>
					<Icon name="gauge" size={20} />
				</span>
				<span class="flex flex-col">
					<span class="text-xs/4 text-muted">Today’s earnings</span>
					<span class="text-[17px]/[22px] font-bold whitespace-nowrap">
						₦25,500
						<span class="text-xs font-medium text-muted">· you keep <strong>₦21,700</strong></span>
					</span>
				</span>
			</div>
		</div>
	</div>
</section>
