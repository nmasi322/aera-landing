<script lang="ts">
	import Icon from '#lib/components/icon.svelte';
</script>

<!-- The fare the rider sees before booking: one upfront price, locked on acceptance. -->
<svg width="390" height="430" viewBox="0 0 390 430" class="absolute inset-x-0 bottom-0">
	<rect width="390" height="430" fill="#EDEDED" />

	<rect x="10" y="46" width="59" height="98" rx="12" fill="#E3E3E3" />
	<rect x="111" y="46" width="168" height="98" rx="12" fill="#DEDEDE" />
	<circle cx="150" cy="78" r="13" fill="#D4D4D4" />
	<circle cx="186" cy="116" r="9" fill="#D4D4D4" />
	<circle cx="236" cy="72" r="11" fill="#D4D4D4" />
	<circle cx="250" cy="120" r="8" fill="#D4D4D4" />
	<rect x="321" y="46" width="59" height="98" rx="12" fill="#E3E3E3" />
	<rect x="10" y="167" width="59" height="120" rx="12" fill="#E3E3E3" />
	<rect x="111" y="167" width="168" height="120" rx="12" fill="#E3E3E3" />
	<rect x="321" y="167" width="59" height="120" rx="12" fill="#E3E3E3" />
	<rect x="10" y="309" width="59" height="121" rx="12" fill="#E3E3E3" />
	<rect x="111" y="309" width="168" height="121" rx="12" fill="#E3E3E3" />
	<rect x="321" y="309" width="59" height="121" rx="12" fill="#E3E3E3" />

	<path
		d="M0,29 H390 M0,150 H390 M0,298 H390 M90,0 V430 M300,0 V430"
		stroke="#FFFFFF"
		stroke-width="22"
		fill="none"
	/>

	<path
		d="M140,150 H300 V29 H200"
		stroke="#000000"
		stroke-width="6"
		stroke-linecap="round"
		stroke-linejoin="round"
		fill="none"
	/>
	<path
		d="M140,150 H300 V29 H200"
		stroke="#7C3AED"
		stroke-width="2"
		stroke-dasharray="6 14"
		stroke-linecap="round"
		stroke-linejoin="round"
		fill="none"
	/>

	<circle cx="140" cy="150" r="11" fill="#000000" />
	<circle cx="140" cy="150" r="4.5" fill="#FFFFFF" />
	<rect x="189" y="18" width="22" height="22" rx="5" fill="#000000" />
	<rect x="196" y="25" width="8" height="8" rx="2" fill="#FFFFFF" />
</svg>

<span
	class="absolute bottom-[262px] left-9 flex h-[26px] items-center rounded-full bg-ink px-2.5 text-xs/4 font-semibold text-paper"
>
	Pickup
</span>

<span
	class="absolute bottom-[352px] left-[132px] flex h-[30px] items-center overflow-hidden rounded-full bg-ink text-xs/4 font-semibold text-paper"
>
	<span class="flex h-full items-center bg-accent px-2">52 min</span>
	<span class="px-2.5">Ikeja City Mall</span>
</span>

<div
	class="relative flex flex-col gap-2.5 rounded-t-[28px] bg-paper px-4 pt-4 pb-7 shadow-[0_-4px_24px_rgba(0,0,0,0.12)]"
>
	<span class="flex items-center gap-3.5 rounded-[20px] border-2 border-ink px-3.5 py-3">
		<span class="flex h-10 w-13 shrink-0 items-center justify-center rounded-xl bg-surface">
			<Icon name="car-profile" size={30} />
		</span>
		<span class="flex flex-1 flex-col">
			<span class="text-[17px]/6 font-semibold">Economy</span>
			<span class="flex items-center gap-1 text-[13px]/5 text-muted">
				4 min away ·
				<Icon name="users" size={14} />
				4
			</span>
		</span>
		<span class="flex flex-col items-end">
			<span class="text-xl/7 font-bold tracking-[-0.01em]">₦8,400</span>
			<span class="text-xs/4 font-semibold text-success">Upfront</span>
		</span>
	</span>

	<span class="flex h-12 items-center gap-3 px-1">
		<Icon name="credit-card" size={22} />
		<span class="flex-1 text-[15px]/5 font-semibold">Debit card •••• 4821</span>
		<span class="text-[13px]/5 text-muted">Change</span>
		<Icon name="caret-right" size={18} class="text-muted-light" />
	</span>

	<span
		class="flex h-14 items-center justify-center rounded-[14px] bg-ink text-[17px]/6 font-semibold text-paper"
	>
		Request Economy · ₦8,400
	</span>
</div>
