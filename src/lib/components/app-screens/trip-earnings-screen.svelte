<script lang="ts">
	import Icon from '#lib/components/icon.svelte';
	import type { IconName } from '#lib/icons.js';

	const lines: { label: string; value: string }[] = [
		{ label: 'Trip fare (locked)', value: '₦8,400' },
		{ label: 'Waiting charge', value: '₦0' },
		{ label: 'aera commission (15%)', value: '−₦1,260' }
	];

	const tabs: { icon: IconName; label: string; current: boolean }[] = [
		{ icon: 'house', label: 'Home', current: false },
		{ icon: 'credit-card', label: 'Earnings', current: true },
		{ icon: 'clock', label: 'Activity', current: false },
		{ icon: 'user-circle', label: 'Account', current: false }
	];
</script>

<!-- Driver side, after a trip: the whole fare, the flat 15%, and what the driver keeps. -->
<div class="flex flex-col px-5">
	<span class="text-xs/4 font-medium tracking-[0.06em] text-muted uppercase">Your earnings</span>

	<span class="mt-2 flex flex-col rounded-[20px] border border-line px-4 py-1">
		{#each lines as line (line.label)}
			<span class="flex justify-between py-2 text-[15px]/6">
				<span class="text-muted">{line.label}</span>
				<span>{line.value}</span>
			</span>
		{/each}
		<span class="h-px bg-line"></span>
		<span class="flex justify-between py-2 text-[17px]/6 font-bold">
			<span>You earned</span>
			<span>₦7,140</span>
		</span>
	</span>

	<span class="mt-3 flex flex-col gap-2 text-sm/5">
		<span class="flex items-center gap-2">
			<Icon name="check-circle" size={18} weight="fill" class="text-success" />
			Rider paid by card in the app
		</span>
		<span class="flex items-center gap-2">
			<Icon name="bank" size={18} class="text-accent" />
			In your Fri 13 Nov payout
		</span>
		<span class="flex items-center gap-2">
			<Icon name="star" size={18} weight="fill" />
			You rated Amaka 5 stars
		</span>
	</span>
</div>

<nav
	aria-hidden="true"
	class="mt-6 grid h-[84px] grid-cols-4 border-t border-surface bg-paper px-2 pt-2 pb-5.5"
>
	{#each tabs as tab (tab.label)}
		<span
			class={[
				'flex flex-col items-center justify-center gap-0.5',
				tab.current ? 'text-ink' : 'text-muted-light'
			]}
		>
			<Icon name={tab.icon} size={24} weight={tab.current ? 'fill' : 'regular'} />
			<span class={['text-xs/4', tab.current ? 'font-semibold' : 'font-medium']}>{tab.label}</span>
		</span>
	{/each}
</nav>
