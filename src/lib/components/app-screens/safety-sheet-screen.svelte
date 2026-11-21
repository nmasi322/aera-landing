<script lang="ts">
	import Icon from '#lib/components/icon.svelte';
</script>

<!-- The safety sheet, opened mid-trip over the live map. -->
<svg width="390" height="470" viewBox="0 0 390 470" class="absolute inset-x-0 top-0">
	<rect x="10" y="200" width="59" height="130" rx="12" fill="#E3E3E3" />
	<rect x="111" y="200" width="168" height="130" rx="12" fill="#E3E3E3" />
	<rect x="321" y="200" width="59" height="130" rx="12" fill="#E3E3E3" />
	<rect x="10" y="362" width="59" height="108" rx="12" fill="#E3E3E3" />
	<rect x="111" y="362" width="168" height="108" rx="12" fill="#E3E3E3" />
	<rect x="321" y="362" width="59" height="108" rx="12" fill="#E3E3E3" />
	<path d="M0,350 H390 M90,0 V470 M300,0 V470" stroke="#FFFFFF" stroke-width="22" fill="none" />
	<path
		d="M200,350 H300 V170"
		stroke="#000000"
		stroke-width="6"
		stroke-linecap="round"
		stroke-linejoin="round"
		fill="none"
	/>
	<rect
		x="226"
		y="341"
		width="34"
		height="17"
		rx="5"
		fill="#000000"
		stroke="#FFFFFF"
		stroke-width="2"
	/>
</svg>
<span class="absolute inset-0 bg-ink/50"></span>

<div
	class="absolute inset-x-0 top-0 flex flex-col rounded-b-[28px] bg-paper px-5 pt-[60px] shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
>
	<span class="flex items-center gap-3">
		<span
			class="flex size-11 shrink-0 items-center justify-center rounded-[14px] bg-danger-soft text-danger"
		>
			<Icon name="shield-check" size={22} weight="fill" />
		</span>
		<span class="flex flex-1 flex-col">
			<span class="text-[22px]/[30px] font-semibold tracking-[-0.01em]">Safety</span>
			<span class="text-[13px]/5 text-muted">Olutobi · LND 482 KJ · live trip</span>
		</span>
		<span class="flex size-11 shrink-0 items-center justify-center rounded-full bg-surface">
			<Icon name="x" size={20} />
		</span>
	</span>

	<span
		class="mt-4 flex h-14 items-center justify-center gap-2.5 rounded-[14px] bg-danger text-[17px]/6 font-semibold text-paper"
	>
		<span class="relative flex size-5.5 items-center justify-center">
			<span class="absolute -inset-1 animate-ping-out rounded-full border-2 border-paper/70"></span>
			<Icon name="siren" size={22} weight="fill" />
		</span>
		Call 112 — emergency
	</span>
	<span class="mt-2 text-[13px]/5 text-muted">
		Opens your phone to call Nigeria's emergency line. aera can't call emergency services for you.
	</span>

	<span class="mt-3 flex flex-col">
		<span class="flex min-h-16 items-center gap-3.5 border-b border-surface">
			<span class="flex size-10 shrink-0 items-center justify-center rounded-full bg-surface">
				<Icon name="lifebuoy" size={20} />
			</span>
			<span class="flex flex-1 flex-col">
				<span class="text-[15px]/5 font-semibold">Alert aera safety team</span>
				<span class="text-[13px]/5 text-muted">They see your live trip and contact you</span>
			</span>
			<Icon name="caret-right" size={18} class="text-muted-light" />
		</span>
		<span class="flex min-h-16 items-center gap-3.5">
			<span class="flex size-10 shrink-0 items-center justify-center rounded-full bg-surface">
				<Icon name="share-network" size={20} />
			</span>
			<span class="flex flex-1 flex-col">
				<span class="text-[15px]/5 font-semibold">Share live trip</span>
				<span class="text-[13px]/5 text-muted">Timi is following · link ends when you arrive</span>
			</span>
			<Icon name="caret-right" size={18} class="text-muted-light" />
		</span>
	</span>
	<span class="mt-3.5 mb-2.5 h-[5px] w-9 self-center rounded-full bg-line"></span>
</div>
