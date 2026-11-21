<script lang="ts">
	import type { Snippet } from 'svelte';
	import SiteHeader from '#lib/components/landing/site-header.svelte';
	import SiteFooter from '#lib/components/landing/site-footer.svelte';

	interface Props {
		variant?: 'landing' | 'site';
		current?: 'home' | 'about' | 'faq' | 'legal' | 'blog' | 'help';
		children: Snippet;
	}

	let { variant = 'site', current, children }: Props = $props();
</script>

<div class="flex min-h-screen w-full flex-col bg-paper text-ink">
	<SiteHeader {variant} {current} />
	<!-- Holds the space the fixed header takes out of the flow. -->
	<div class="h-21 shrink-0" aria-hidden="true"></div>
	{@render children()}
	<SiteFooter />
</div>
