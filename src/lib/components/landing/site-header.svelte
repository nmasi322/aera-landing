<script lang="ts">
	import Button from '#lib/components/button.svelte';
	import wordmark from '#lib/assets/aera-wordmark.png';
	import { reveal } from '#lib/actions/reveal.js';

	interface Props {
		/** The landing page links to its own sections; every other page links back to them. */
		variant?: 'landing' | 'site';
		/** Highlights the nav item for the page being viewed. */
		current?: 'blog' | 'help';
	}

	let { variant = 'site', current }: Props = $props();

	const landingLinks = [
		{ href: '#how', label: 'How it works' },
		{ href: '#safety', label: 'Safety' },
		{ href: '#fares', label: 'Fares' },
		{ href: '#drive', label: 'Drive' },
		{ href: '#faq', label: 'FAQ' }
	];

	const siteLinks = [
		{ href: '/#how', label: 'Ride' },
		{ href: '/#drive', label: 'Drive' },
		{ href: '/#safety', label: 'Safety' },
		{ href: '/blog', label: 'Blog', key: 'blog' },
		{ href: '/help', label: 'Help', key: 'help' }
	];

	const links = $derived(variant === 'landing' ? landingLinks : siteLinks);
	const home = $derived(variant === 'landing' ? '#top' : '/');
	const getTheApp = $derived(variant === 'landing' ? '#get' : '/#get');
</script>

<header use:reveal class="shell flex h-21 w-full reveal items-center">
	<a href={home} aria-label="Aera — home" class="flex">
		<img src={wordmark} alt="Aera" class="block h-auto w-21" />
	</a>

	<nav aria-label="Main" class="mx-auto flex gap-9 text-[15px]/5 max-wide:hidden">
		{#each links as link (link.href)}
			{@const active = 'key' in link && link.key === current}
			<a
				href={link.href}
				aria-current={active ? 'page' : undefined}
				class={[
					'no-underline transition-colors',
					active ? 'font-semibold text-ink' : 'font-medium text-muted hover:text-ink'
				]}
			>
				{link.label}
			</a>
		{/each}
	</nav>

	<Button href={getTheApp} class="ml-auto">Get the app</Button>
</header>
