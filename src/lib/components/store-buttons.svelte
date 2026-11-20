<script lang="ts">
	import Button from '#lib/components/button.svelte';
	import Icon from '#lib/components/icon.svelte';

	interface Props {
		/** On dark panels both buttons sit on white. */
		invert?: boolean;
		class?: string;
	}

	let { invert = false, class: className = '' }: Props = $props();

	const stores = [
		{ icon: 'apple-logo', kicker: 'Download on the', name: 'App Store' },
		{ icon: 'google-play-logo', kicker: 'Get it on', name: 'Google Play' }
	] as const;
</script>

<div class={['flex flex-wrap gap-3', className]}>
	{#each stores as store, i (store.name)}
		<Button
			size="xl"
			variant={i === 0 && !invert ? 'default' : 'outline'}
			aria-label="{store.kicker} {store.name}"
		>
			<span class="flex items-center gap-3">
				<Icon name={store.icon} />
				<span class="flex flex-col text-left">
					<span class="text-[11px]/[14px] font-normal opacity-70">{store.kicker}</span>
					<span class="text-base/5 font-semibold">{store.name}</span>
				</span>
			</span>
		</Button>
	{/each}
</div>
