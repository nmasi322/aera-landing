<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	interface Props {
		/** Describes the screen. The frame is one image, so its insides stay out of the a11y tree. */
		label: string;
		/** How much of the 390×844 app screen stays visible, in design pixels. */
		crop: number;
		/** Shrinks the 390px-wide design so it fits the card it sits in. */
		scale?: number;
		/** Which end of the phone to show. The other end is cropped away. */
		edge?: 'top' | 'bottom';
		/** Matches the screen behind the status bar, so its ink stays readable. */
		tone?: 'light' | 'dark';
		/** The screen's own background, e.g. "bg-line-soft" for the map screens. */
		screenClass?: ClassValue;
		/** Fades a bottom-cropped screen into the card behind it, e.g. "from-surface". */
		fadeClass?: ClassValue;
		class?: ClassValue;
		children: Snippet;
	}

	let {
		label,
		crop,
		scale = 0.62,
		edge = 'top',
		tone = 'light',
		screenClass = 'bg-paper',
		fadeClass,
		class: className,
		children
	}: Props = $props();

	/* The bezel the design draws around the 390px screen. */
	const bezel = 12;
	const width = $derived(Math.round((390 + bezel * 2) * scale));
	const height = $derived(Math.round((crop + bezel) * scale));
</script>

<div
	role="img"
	aria-label={label}
	class={['relative overflow-hidden', className]}
	style="width: {width}px; height: {height}px"
>
	<div
		class={[
			'absolute left-0',
			edge === 'top' ? 'top-0 origin-top-left' : 'bottom-0 origin-bottom-left'
		]}
		style="transform: scale({scale})"
	>
		<div
			class={[
				'w-[414px] bg-ink px-3 shadow-[0_18px_40px_rgba(0,0,0,0.28)]',
				edge === 'top' ? 'rounded-t-[54px] pt-3' : 'rounded-b-[54px] pb-3'
			]}
		>
			<div
				class={[
					'relative w-[390px] overflow-hidden font-sans text-ink',
					edge === 'top' ? 'rounded-t-[42px]' : 'rounded-b-[42px]',
					screenClass
				]}
				style="height: {crop}px"
			>
				<div class={edge === 'top' ? 'absolute inset-0' : 'absolute inset-x-0 bottom-0'}>
					{@render children()}
				</div>

				{#if edge === 'top'}
					<!-- iOS status bar, drawn once here so the screens don't repeat it -->
					<div
						class={[
							'pointer-events-none absolute inset-x-0 top-0 z-10 flex h-[54px] items-center justify-between pt-1 pr-[26px] pl-12',
							tone === 'dark' ? 'text-paper' : 'text-ink'
						]}
						style="font-family: -apple-system, 'SF Pro Text', system-ui, sans-serif"
					>
						<span class="text-[17px]/[22px] font-semibold tracking-[-0.01em]">9:41</span>
						<span
							class="absolute top-[11px] left-1/2 -ml-[62px] h-9 w-[124px] rounded-full bg-black"
						></span>
						<span class="flex items-center gap-1.5">
							<svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor">
								<rect x="0" y="8" width="3" height="4" rx="1"></rect>
								<rect x="5" y="5.5" width="3" height="6.5" rx="1"></rect>
								<rect x="10" y="3" width="3" height="9" rx="1"></rect>
								<rect x="15" y="0" width="3" height="12" rx="1"></rect>
							</svg>
							<svg
								width="16"
								height="12"
								viewBox="0 0 16 12"
								fill="none"
								stroke="currentColor"
								stroke-width="1.8"
								stroke-linecap="round"
							>
								<path d="M1.2 4.4a9.6 9.6 0 0 1 13.6 0"></path>
								<path d="M3.6 6.9a6.2 6.2 0 0 1 8.8 0"></path>
								<path d="M8 11.2 6 9.3a2.9 2.9 0 0 1 4 0Z" fill="currentColor" stroke="none"></path>
							</svg>
							<svg width="27" height="13" viewBox="0 0 27 13" fill="none">
								<rect
									x="0.5"
									y="0.5"
									width="22"
									height="12"
									rx="3.5"
									stroke="currentColor"
									opacity=".4"
								></rect>
								<rect x="2" y="2" width="19" height="9" rx="2" fill="currentColor"></rect>
								<rect x="24" y="4.5" width="1.6" height="4" rx=".8" fill="currentColor" opacity=".4"
								></rect>
							</svg>
						</span>
					</div>
				{:else}
					<span
						class="absolute inset-x-0 bottom-2.5 mx-auto h-[5px] w-[120px] rounded-full bg-ink/25"
					></span>
				{/if}

				{#if fadeClass}
					<span class={['absolute inset-x-0 top-0 h-20 bg-gradient-to-b to-transparent', fadeClass]}
					></span>
				{/if}
			</div>
		</div>
	</div>
</div>
