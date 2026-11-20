<script lang="ts">
	import type { Snippet } from 'svelte';
	import SiteHeader from '#lib/components/landing/site-header.svelte';
	import SiteFooter from '#lib/components/landing/site-footer.svelte';

	interface Props {
		variant?: 'landing' | 'site';
		current?: 'blog' | 'help';
		children: Snippet;
	}

	let { variant = 'site', current, children }: Props = $props();
</script>

<div class="flex min-h-screen w-full flex-col overflow-hidden bg-paper text-ink">
	<SiteHeader {variant} {current} />
	{@render children()}
	<SiteFooter />
</div>
