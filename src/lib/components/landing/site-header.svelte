<script lang="ts">
	import Button from '#lib/components/button.svelte';
	import Icon from '#lib/components/icon.svelte';
	import wordmark from '#lib/assets/aera-wordmark.png';
	import { reveal } from '#lib/actions/reveal.js';

	interface Props {
		/** The landing page links to its own sections; every other page links back to them. */
		variant?: 'landing' | 'site';
		/** Highlights the nav item for the page being viewed. */
		current?: 'home' | 'about' | 'faq' | 'legal' | 'blog' | 'help';
	}

	let { variant = 'site', current }: Props = $props();

	/** On the landing page the nav points at sections; elsewhere it points back home. */
	const prefix = $derived(variant === 'landing' ? '' : '/');

	type NavItem = {
		label: string;
		href: string;
		key: NonNullable<Props['current']>;
		items?: { label: string; href: string }[];
	};

	const nav: NavItem[] = $derived([
		{
			label: 'Home',
			href: `${prefix}#top`,
			key: 'home',
			items: [
				{ label: 'How it works', href: `${prefix}#how` },
				{ label: 'Safety', href: `${prefix}#safety` },
				{ label: 'Fares', href: `${prefix}#fares` },
				{ label: 'Drive', href: `${prefix}#drive` }
			]
		},
		{ label: 'About us', href: '/about', key: 'about' },
		{ label: "FAQ's", href: `${prefix}#faq`, key: 'faq' },
		{
			label: 'Legal',
			href: '/privacy',
			key: 'legal',
			items: [
				{ label: 'Privacy policy', href: '/privacy' },
				{ label: 'Terms of use', href: '/terms' }
			]
		}
	]);

	const home = $derived(variant === 'landing' ? '#top' : '/');
	const getTheApp = $derived(variant === 'landing' ? '#get' : '/#get');

	/** The key of the open submenu, if any. */
	let open = $state<string | null>(null);

	function close() {
		open = null;
	}

	/** Closes the menu once focus leaves the item altogether. */
	function onFocusOut(event: FocusEvent & { currentTarget: HTMLElement }) {
		const next = event.relatedTarget;
		if (!(next instanceof Node) || !event.currentTarget.contains(next)) close();
	}
</script>

<svelte:window onkeydown={(event: KeyboardEvent) => event.key === 'Escape' && close()} />

<header class="fixed inset-x-0 top-0 z-50 w-full bg-paper/85 backdrop-blur-md">
	<div use:reveal class="shell flex h-21 w-full reveal items-center border-b border-line/60 py-0!">
		<a href={home} aria-label="Aera — home" class="flex">
			<img src={wordmark} alt="Aera" class="block h-auto w-21" />
		</a>

		<nav aria-label="Main" class="mx-auto max-wide:hidden">
			<ul class="flex list-none items-center gap-9 p-0 text-[15px]/5">
				{#each nav as item (item.key)}
					{@const active = item.key === current}
					<li
						class="relative"
						onmouseenter={() => item.items && (open = item.key)}
						onmouseleave={close}
						onfocusout={onFocusOut}
					>
						{#if item.items}
							<button
								type="button"
								aria-expanded={open === item.key}
								onclick={() => (open = open === item.key ? null : item.key)}
								class={[
									'flex cursor-pointer items-center gap-1.5 border-0 bg-transparent p-0 font-sans text-[15px]/5 transition-colors',
									active ? 'font-semibold text-ink' : 'font-medium text-muted hover:text-ink'
								]}
							>
								{item.label}
								<Icon
									name="caret-down"
									size={12}
									weight="bold"
									class={['transition-transform duration-200', open === item.key && '-rotate-180']}
								/>
							</button>

							{#if open === item.key}
								<ul
									class="absolute top-1/2 left-0 z-20 mt-3 flex w-52 list-none flex-col gap-0.5 rounded-xl border border-line bg-paper p-2 shadow-[0_12px_32px_rgba(0,0,0,0.1)]"
								>
									{#each item.items as sub (sub.href)}
										<li>
											<a
												href={sub.href}
												onclick={close}
												class="block rounded-lg px-3 py-2 font-medium text-muted no-underline transition-colors hover:bg-surface hover:text-ink"
											>
												{sub.label}
											</a>
										</li>
									{/each}
								</ul>
							{/if}
						{:else}
							<a
								href={item.href}
								aria-current={active ? 'page' : undefined}
								class={[
									'no-underline transition-colors',
									active ? 'font-semibold text-ink' : 'font-medium text-muted hover:text-ink'
								]}
							>
								{item.label}
							</a>
						{/if}
					</li>
				{/each}
			</ul>
		</nav>

		<Button href={getTheApp} class="ml-auto">Get the app</Button>
	</div>
</header>
