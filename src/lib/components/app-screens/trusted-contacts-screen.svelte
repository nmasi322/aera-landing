<script lang="ts">
	import Icon from '#lib/components/icon.svelte';

	const people = [
		{ initials: 'AB', name: 'Timi Adeniyi', detail: 'Sister · +234 802 ••• 1144', on: true },
		{ initials: 'CO', name: 'Chidi Okafor', detail: 'Friend · +234 809 ••• 3302', on: false }
	];
</script>

<!-- Account › Trusted contacts: who gets the live trip link, and who gets every trip. -->
<div class="flex flex-col px-5 pt-[60px]">
	<span class="flex items-center gap-3">
		<span class="flex size-11 shrink-0 items-center justify-center rounded-full bg-surface">
			<Icon name="arrow-left" size={22} />
		</span>
		<span class="text-[22px]/[30px] font-semibold tracking-[-0.01em]">Trusted contacts</span>
	</span>

	<span class="relative mt-5 block h-28 overflow-hidden rounded-[20px] bg-ink">
		<span
			class="absolute top-[55px] right-[76px] left-[76px] border-t-2 border-dashed border-night-line"
		></span>
		<span
			class="absolute top-[46px] left-[150px] size-5 rounded-full bg-accent shadow-[0_0_0_6px_rgba(124,58,237,0.18)]"
		></span>
		<span
			class="absolute top-7 left-6 flex size-14 items-center justify-center rounded-full bg-paper text-[17px]/6 font-semibold text-ink"
		>
			TB
		</span>
		<span class="absolute top-7 right-6 size-14">
			<span class="absolute inset-0 animate-ping-out rounded-full border-2 border-accent"></span>
			<span
				class="absolute inset-0 flex items-center justify-center rounded-full bg-ink-soft text-[17px]/6 font-semibold text-paper"
			>
				AB
			</span>
		</span>
	</span>

	<span class="mt-3.5 block text-[15px]/6 text-ink-soft">
		They get a live trip link by SMS — driver, car, plate and route.
		<b class="font-semibold">Never your card or payment details.</b>
	</span>

	<span class="mt-4 flex flex-col gap-2.5">
		{#each people as person (person.name)}
			<span class="flex flex-col gap-3 rounded-[20px] border border-line p-3.5">
				<span class="flex items-center gap-3.5">
					<span
						class="flex size-11 shrink-0 items-center justify-center rounded-full bg-surface text-[15px]/5 font-semibold"
					>
						{person.initials}
					</span>
					<span class="flex flex-1 flex-col">
						<span class="text-[17px]/6 font-semibold">{person.name}</span>
						<span class="text-[13px]/5 text-muted">{person.detail}</span>
					</span>
					<span class="text-[13px]/5 font-semibold text-danger">Remove</span>
				</span>
				<span class="flex items-center gap-3 border-t border-surface pt-3">
					<span class="flex-1 text-[15px]/5">Share every trip automatically</span>
					<span
						class={['relative h-8 w-13 shrink-0 rounded-full', person.on ? 'bg-accent' : 'bg-line']}
					>
						<span
							class={[
								'absolute top-[3px] size-6.5 rounded-full bg-paper',
								person.on ? 'left-[23px]' : 'left-[3px] shadow-[0_1px_3px_rgba(0,0,0,0.2)]'
							]}
						></span>
					</span>
				</span>
			</span>
		{/each}
	</span>
</div>
