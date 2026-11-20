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

	const tabs = [
		{ key: 'terms', href: '/terms', label: 'Terms of use' },
		{ key: 'privacy', href: '/privacy', label: 'Privacy policy' }
	] as const;
</script>

<section class="shell flex w-full flex-col gap-[18px] pt-16 pb-10">
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

	<div
		class="flex max-w-[760px] items-start gap-2.5 rounded-[14px] bg-warn-soft px-4 py-3.5 text-sm/[22px]"
	>
		<Icon name="warning-circle" size={20} class="shrink-0 text-warn" />
		<span>
			<b class="font-semibold">Draft for design.</b> This text follows the PRD but isn’t legal advice.
			Have it reviewed by a lawyer before publishing.
		</span>
	</div>
</section>

<section
	class="shell grid w-full grid-cols-[260px_1fr] items-start gap-18 pb-30 max-wide:grid-cols-1"
>
	<nav aria-label="On this page" class="flex flex-col gap-0.5 pt-1 max-wide:hidden">
		<span class="px-3 pb-2.5 text-xs font-semibold tracking-[0.06em] text-muted-light uppercase">
			On this page
		</span>
		{#each page.sections as section, i (section.id)}
			<a
				href={`#${section.id}`}
				class={[
					'block rounded-[10px] px-3 py-2 text-sm/5 no-underline',
					i === 0 ? 'bg-surface font-semibold text-ink' : 'font-medium text-muted hover:text-ink'
				]}
			>
				{section.nav}
			</a>
		{/each}
	</nav>

	<div class="max-w-[760px]">
		<div use:reveal class="mb-4 flex reveal flex-col gap-3.5 rounded-3xl bg-accent-soft p-7">
			<span class="text-lg/[26px] font-semibold">The short version</span>
			<ul class="m-0 flex list-none flex-col gap-3 p-0">
				{#each page.summary as point (point)}
					<li class="flex items-start gap-3 text-base/[25px]">
						<span
							class="mt-0.5 flex size-[22px] shrink-0 items-center justify-center rounded-full bg-accent text-paper"
						>
							<Icon name="check" size={12} />
						</span>
						<span>{point}</span>
					</li>
				{/each}
			</ul>
		</div>

		{#each page.sections as section (section.id)}
			<section id={section.id} use:reveal class="reveal pt-2">
				<RichText blocks={[{ type: 'h3', text: section.heading }, ...section.blocks]} />
			</section>
		{/each}
	</div>
</section>
