<script lang="ts">
	import Button from '#lib/components/button.svelte';
	import Icon from '#lib/components/icon.svelte';
	import RichText from '#lib/components/rich-text.svelte';
	import { reveal } from '#lib/actions/reveal.js';
	import type { LegalPage } from '#lib/content/legal-pages.js';

	interface Props {
		page: LegalPage;
		/** Which of the two legal tabs is active. */
		active: 'terms' | 'privacy';
	}

	let { page, active }: Props = $props();

	/** The section the reader is currently in; empty until one is in view. */
	let seenId = $state('');
	/** Whether the mobile "On this page" dropdown is open. */
	let open = $state(false);

	/** Falls back to the first section, which is what the reader starts on. */
	const activeId = $derived(seenId || (page.sections[0]?.id ?? ''));
	const activeLabel = $derived(
		page.sections.find((section) => section.id === activeId)?.nav ?? 'On this page'
	);

	$effect(() => {
		const headings = page.sections
			.map((section) => document.getElementById(section.id))
			.filter((element): element is HTMLElement => element !== null);

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
				if (visible) seenId = visible.target.id;
			},
			// A band just under the two fixed bars, so the nav follows what is being read.
			{ rootMargin: '-140px 0px -65% 0px' }
		);

		for (const heading of headings) observer.observe(heading);
		return () => observer.disconnect();
	});

	function close() {
		open = false;
	}

	/** Closes the dropdown once focus leaves the nav altogether. */
	function onFocusOut(event: FocusEvent & { currentTarget: HTMLElement }) {
		const next = event.relatedTarget;
		if (!(next instanceof Node) || !event.currentTarget.contains(next)) close();
	}

	const tabs = [
		{ key: 'terms', href: '/terms', label: 'Terms of use' },
		{ key: 'privacy', href: '/privacy', label: 'Privacy policy' }
	] as const;
</script>

<svelte:window onkeydown={(event: KeyboardEvent) => event.key === 'Escape' && close()} />

<section class="shell flex w-full flex-col gap-4.5 pt-16 max-wide:pt-22">
	<div use:reveal class="flex reveal flex-wrap gap-2">
		{#each tabs as tab (tab.key)}
			<Button
				href={tab.href}
				aria-current={tab.key === active ? 'page' : undefined}
				size="sm"
				pill
				variant={tab.key === active ? 'default' : 'outline'}
			>
				{tab.label}
			</Button>
		{/each}
	</div>

	<h1
		use:reveal={{ delay: 80 }}
		class="mt-2 reveal text-[64px]/[70px] font-semibold tracking-[-0.04em] max-wide:text-[48px]/[52px]"
	>
		{page.title}
	</h1>
	<span class="text-[15px] text-muted">{page.updated}</span>
</section>

<!-- Mobile: a fixed bar under the header that drops the section list down. -->
<nav
	aria-label="On this page"
	class="fixed inset-x-0 top-21 z-40 border-b border-line bg-paper/95 backdrop-blur-md wide:hidden"
	onfocusout={onFocusOut}
>
	<button
		type="button"
		aria-expanded={open}
		onclick={() => (open = !open)}
		class="flex w-full cursor-pointer items-center justify-between gap-3 border-0 bg-transparent px-5 py-3.5 text-left font-sans"
	>
		<span class="flex min-w-0 flex-col">
			<span class="text-[11px] font-semibold tracking-[0.06em] text-muted-light uppercase">
				On this page
			</span>
			<span class="truncate text-sm/5 font-semibold text-ink">{activeLabel}</span>
		</span>
		<Icon
			name="caret-down"
			size={14}
			weight="bold"
			class={['shrink-0 transition-transform duration-200', open && '-rotate-180']}
		/>
	</button>

	{#if open}
		<div
			class="max-h-[60vh] overflow-y-auto border-t border-line-soft bg-paper px-3 py-2 shadow-[0_16px_32px_rgba(0,0,0,0.08)]"
		>
			{#each page.sections as section (section.id)}
				<a
					href={`#${section.id}`}
					onclick={() => (open = false)}
					aria-current={section.id === activeId ? 'location' : undefined}
					class={[
						'block rounded-[10px] px-3 py-2.5 text-sm/5 no-underline',
						section.id === activeId ? 'bg-surface font-semibold text-ink' : 'font-medium text-muted'
					]}
				>
					{section.nav}
				</a>
			{/each}
		</div>
	{/if}
</nav>

<section
	class="shell grid w-full grid-cols-[260px_1fr] items-start gap-18 py-0! pb-30 max-wide:grid-cols-1"
>
	<!-- Desktop: starts below the title block, then holds its place in the left gutter. -->
	<div class="self-stretch pt-1 max-wide:hidden">
		<nav
			aria-label="On this page"
			class="sticky top-27 flex max-h-[calc(100vh-160px)] w-65 flex-col gap-0.5 overflow-y-auto"
		>
			<span class="px-3 pb-2.5 text-xs font-semibold tracking-[0.06em] text-muted-light uppercase">
				On this page
			</span>
			{#each page.sections as section (section.id)}
				<a
					href={`#${section.id}`}
					aria-current={section.id === activeId ? 'location' : undefined}
					class={[
						'block rounded-[10px] px-3 py-2 text-sm/5 no-underline transition-colors',
						section.id === activeId
							? 'bg-surface font-semibold text-ink'
							: 'font-medium text-muted hover:text-ink'
					]}
				>
					{section.nav}
				</a>
			{/each}
		</nav>
	</div>

	<div class="max-w-190">
		<div use:reveal class="mb-4 flex reveal flex-col gap-3.5 rounded-3xl bg-accent-soft p-7">
			<span class="text-lg/[26px] font-semibold">A quick summary:</span>
			<ul class="m-0 flex list-none flex-col gap-3 p-0">
				{#each page.summary as point (point)}
					<li class="flex items-start gap-3 text-base/[25px]">
						<span
							class="mt-0.5 flex size-5.5 shrink-0 items-center justify-center rounded-full bg-accent text-paper"
						>
							<Icon name="check" size={12} />
						</span>
						<span>{point}</span>
					</li>
				{/each}
			</ul>
		</div>

		{#each page.sections as section (section.id)}
			<section id={section.id} use:reveal class="reveal pt-2 max-wide:scroll-mt-16">
				<RichText blocks={[{ type: 'h3', text: section.heading }, ...section.blocks]} />
			</section>
		{/each}
	</div>
</section>
