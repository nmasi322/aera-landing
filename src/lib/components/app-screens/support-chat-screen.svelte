<script lang="ts">
	import Icon from '#lib/components/icon.svelte';

	const quick = ["Thanks, that's all", 'Can I get a receipt?', 'I need more help'];
</script>

<!-- aera Support, in the app: a real person on the thread, with the trip attached. -->
<div class="flex flex-col gap-2.5 px-5 pb-4">
	<span class="flex max-w-[82%] flex-col gap-1 self-start">
		<span class="text-xs/4 text-muted-light">Ngozi</span>
		<span class="rounded-[20px] rounded-bl-md bg-surface px-3.5 py-2.5 text-[15px]/[22px]">
			Hi Tunde, I'm looking at your trip to Ikeja City Mall now. You said the route was longer than
			expected?
		</span>
	</span>

	<span
		class="max-w-[78%] self-end rounded-[20px] rounded-br-md bg-ink px-3.5 py-2.5 text-[15px]/[22px] text-paper"
	>
		Yes, he went through Ikoyi instead of the Third Mainland Bridge.
	</span>

	<span class="flex max-w-[82%] flex-col gap-1 self-start">
		<span class="text-xs/4 text-muted-light">Ngozi</span>
		<span class="rounded-[20px] rounded-bl-md bg-surface px-3.5 py-2.5 text-[15px]/[22px]">
			Your fare was locked at ₦8,400 when you booked, so the longer route didn't change what you
			paid. I've flagged the route to our driver team so it gets reviewed.
		</span>
	</span>
</div>

<div class="flex flex-col gap-2.5 border-t border-surface pt-2 pb-8.5">
	<span class="flex gap-2 overflow-hidden px-5">
		{#each quick as chip (chip)}
			<span
				class="flex h-10 shrink-0 items-center rounded-full border border-line px-3.5 text-[13px]/5 font-semibold whitespace-nowrap"
			>
				{chip}
			</span>
		{/each}
	</span>
	<span class="flex items-center gap-2 px-5">
		<span class="flex size-12 shrink-0 items-center justify-center rounded-full bg-surface">
			<Icon name="paperclip" size={20} />
		</span>
		<span
			class="flex h-12 flex-1 items-center rounded-full bg-surface px-4.5 text-[15px]/5 text-muted-light"
		>
			Message aera Support
		</span>
		<span
			class="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent text-paper"
		>
			<Icon name="paper-plane-right" size={20} weight="fill" />
		</span>
	</span>
</div>
