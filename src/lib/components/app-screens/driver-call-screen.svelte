<script lang="ts">
	import Icon from '#lib/components/icon.svelte';

	/* The bars of the voice meter, as heights in design pixels. */
	const wave = [14, 26, 18, 32, 22, 12, 28, 16];
</script>

<!-- An in-app call: the rider and driver never see each other's number. -->
<span class="absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_30%,#1E1530_0%,#000000_60%)]"
></span>

<div class="absolute inset-x-0 top-0 flex flex-col items-center px-5 pt-[60px] text-paper">
	<span
		class="flex h-7 items-center gap-1.5 rounded-full bg-[#1C1C1C] px-3 text-xs/4 font-semibold text-ash"
	>
		<Icon name="lock" size={14} weight="fill" />
		aera call · private, over data
	</span>

	<span class="relative mt-12 size-[132px]">
		{#each [0, 0.7, 1.4] as delay (delay)}
			<span
				class="absolute inset-0 animate-ping-out rounded-full border-2 border-accent"
				style="animation-delay: {delay}s"
			></span>
		{/each}
		<span
			class="absolute inset-0 flex items-center justify-center rounded-full bg-ink-soft text-5xl/[56px] font-bold"
		>
			E
		</span>
	</span>

	<span class="mt-6 text-[28px]/9 font-semibold tracking-[-0.015em]">Olutobi</span>
	<span class="text-[15px]/6 text-night-muted">Your driver · Silver Corolla · LND 482 KJ</span>

	<span class="mt-3.5 flex flex-col items-center gap-2">
		<span class="text-[17px]/6 font-semibold tabular-nums">0:42</span>
		<span class="flex h-8 items-center gap-1">
			{#each wave as height, i (i)}
				<span
					class="w-1 origin-center animate-wave rounded-full bg-accent-light"
					style="height: {height}px; animation-delay: {i * 0.12}s"
				></span>
			{/each}
		</span>
		<span
			class="flex h-6 items-center gap-1.5 rounded-full bg-success-soft px-2.5 text-xs/4 font-semibold text-success"
		>
			<Icon name="wifi-high" size={14} />
			Good connection
		</span>
	</span>
</div>
