<script lang="ts">
	import Icon from '#lib/components/icon.svelte';
</script>

<!-- Rider side, the moment the driver pulls up: plate to check, PIN to read out. -->
<svg width="390" height="430" viewBox="0 0 390 430" class="absolute inset-x-0 top-0">
	<rect x="10" y="190" width="59" height="130" rx="12" fill="#E3E3E3" />
	<rect x="111" y="190" width="168" height="130" rx="12" fill="#DEDEDE" />
	<rect x="321" y="190" width="59" height="130" rx="12" fill="#E3E3E3" />
	<rect x="10" y="352" width="59" height="78" rx="12" fill="#E3E3E3" />
	<rect x="111" y="352" width="168" height="78" rx="12" fill="#E3E3E3" />
	<rect x="321" y="352" width="59" height="78" rx="12" fill="#E3E3E3" />
	<path d="M0,340 H390 M90,0 V430 M300,0 V430" stroke="#FFFFFF" stroke-width="22" fill="none" />
	<path
		d="M150,404 L150,352 L196,340"
		stroke="#000000"
		stroke-width="3"
		stroke-dasharray="2 6"
		stroke-linecap="round"
		fill="none"
	/>
	<circle cx="150" cy="406" r="9" fill="#000000" stroke="#FFFFFF" stroke-width="3" />
	<circle cx="150" cy="406" r="3" fill="#7C3AED" />
</svg>

<span
	class="absolute top-[422px] left-28 flex h-6 items-center rounded-full bg-paper px-2.5 text-xs/4 font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
>
	You · 40 m
</span>

<span class="absolute top-[331px] left-[194px] size-[34px]">
	<span class="absolute top-0 left-[7px] size-[19px] animate-ping-out rounded-full bg-accent/70"
	></span>
	<span
		class="absolute inset-0 flex h-[17px] items-center justify-end rounded-[5px] border-2 border-paper bg-ink pr-1"
	>
		<span class="h-[9px] w-1.5 rounded-sm bg-accent"></span>
	</span>
</span>

<span
	class="absolute top-[324px] left-[236px] flex h-[26px] items-center rounded-full bg-ink px-2.5 text-xs/4 font-semibold text-paper"
>
	LND 482 KJ
</span>

<div
	class="absolute inset-x-0 top-0 flex flex-col rounded-b-[28px] bg-paper px-5 pt-[60px] shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
>
	<span
		class="flex h-9 items-center gap-2.5 self-start rounded-full bg-ink pr-3.5 pl-3 text-[13px]/5 font-semibold text-paper"
	>
		<span class="relative size-2.5">
			<span class="absolute inset-0 animate-ping-out rounded-full bg-accent"></span>
			<span class="absolute inset-0 rounded-full bg-accent"></span>
		</span>
		Olutobi is here
	</span>

	<span class="mt-3 flex flex-col gap-0.5">
		<span class="text-[22px]/[30px] font-semibold tracking-[-0.01em]">
			Your driver has arrived
		</span>
		<span class="text-[15px]/6 text-muted">
			Silver Toyota Corolla · <b class="font-semibold text-ink">LND 482 KJ</b>
		</span>
	</span>

	<span class="mt-3.5 flex items-center gap-3 rounded-[20px] bg-ink px-3.5 py-3 text-paper">
		<span class="flex flex-1 flex-col">
			<span
				class="flex items-center gap-1.5 text-xs/4 font-medium tracking-[0.06em] text-accent-light uppercase"
			>
				<Icon name="shield-check" size={14} weight="fill" />
				Trip PIN
			</span>
			<span class="text-[13px]/5 text-night-muted">
				Check the plate, then give Olutobi this PIN
			</span>
		</span>
		<span class="flex gap-1.5">
			{#each ['4', '8', '2', '7'] as digit, i (i)}
				<span
					class="flex h-[42px] w-[34px] items-center justify-center rounded-[10px] bg-night-line text-xl/7 font-bold"
				>
					{digit}
				</span>
			{/each}
		</span>
	</span>

	<span class="my-3 flex items-center justify-between">
		<span class="text-[13px]/5 text-muted">₦8,400 · Card •••• 4821</span>
		<span class="text-[15px]/5 font-semibold text-danger">Cancel ride</span>
	</span>
	<span class="mb-2.5 h-[5px] w-9 self-center rounded-full bg-line"></span>
</div>
