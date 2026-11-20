<script lang="ts">
	import SiteShell from '#lib/components/site-shell.svelte';
	import CategoryBadge from '#lib/components/category-badge.svelte';
	import Button from '#lib/components/button.svelte';
	import Icon from '#lib/components/icon.svelte';
	import { reveal } from '#lib/actions/reveal.js';
	import { driverTopics, popularArticles, riderTopics } from '#lib/content/help-topics.js';

	const tabs = [
		{ key: 'riders', icon: 'user', label: 'I ride with Aera' },
		{ key: 'drivers', icon: 'steering-wheel', label: 'I drive with Aera' }
	] as const;

	let tab = $state<'riders' | 'drivers'>('riders');

	const topics = $derived(tab === 'riders' ? riderTopics : driverTopics);
</script>

<svelte:head>
	<title>Aera: Help centre</title>
	<meta
		name="description"
		content="Answers for riders and drivers: trips, payments, safety, papers, payouts and account help."
	/>
</svelte:head>

<SiteShell current="help">
	<section class="w-full bg-night text-paper">
		<div class="shell flex flex-col items-center gap-[18px] py-22 text-center">
			<span use:reveal class="reveal text-sm font-semibold text-accent-light">Help centre</span>
			<h1
				use:reveal={{ delay: 80 }}
				class="reveal text-[64px]/[70px] font-semibold tracking-[-0.04em] max-wide:text-[40px]/[46px]"
			>
				How can we help?
			</h1>
			<form
				use:reveal={{ delay: 160 }}
				class="mt-3 w-full max-w-[640px] reveal"
				onsubmit={(event) => event.preventDefault()}
			>
				<label
					for="help-search"
					class="box-border flex h-16 w-full items-center gap-3 rounded-2xl bg-paper px-5 text-left text-[17px] text-muted-light"
				>
					<Icon name="magnifying-glass" />
					<span class="sr-only">Search help articles</span>
					<input
						id="help-search"
						type="search"
						placeholder="Search for answers, like “refund” or “payout”"
						class="h-full min-w-0 flex-1 border-0 bg-transparent font-[inherit] text-[17px] text-ink outline-none"
					/>
				</label>
			</form>
			<span class="text-sm text-ash">
				In danger right now? Call <b class="text-paper">112</b>. Then use the safety button in your
				trip.
			</span>
		</div>
	</section>

	<section class="shell flex w-full flex-col gap-8 py-18">
		<div
			role="tablist"
			aria-label="Help for"
			class="inline-flex gap-1 self-start rounded-2xl bg-surface p-1 max-wide:w-full"
		>
			{#each tabs as item (item.key)}
				<Button
					role="tab"
					aria-selected={tab === item.key}
					onclick={() => (tab = item.key)}
					size="lg"
					variant={tab === item.key ? 'default' : 'ghost'}
					class="max-wide:flex-1"
				>
					<Icon name={item.icon} size={20} />
					{item.label}
				</Button>
			{/each}
		</div>

		<div class="grid grid-cols-3 gap-4 max-wide:grid-cols-1">
			{#each topics as topic, i (topic.title)}
				<a
					use:reveal={{ delay: (i % 3) * 80 }}
					href="/help"
					class="flex reveal flex-col gap-3.5 rounded-3xl border border-line p-6 text-ink no-underline transition-transform duration-[250ms] ease-[cubic-bezier(.2,.8,.2,1)] hover:-translate-y-1"
				>
					<span class="flex size-11 items-center justify-center rounded-xl bg-surface">
						<Icon name={topic.icon} size={22} />
					</span>
					<span class="text-[19px]/[26px] font-semibold">{topic.title}</span>
					<span class="text-sm/[22px] text-muted">{topic.summary}</span>
				</a>
			{/each}
		</div>
	</section>

	<section
		class="shell grid w-full grid-cols-[1fr_420px] items-start gap-14 pb-24 max-wide:grid-cols-1"
	>
		<div>
			<h2 class="mb-4 text-[32px]/10 font-semibold tracking-[-0.02em]">Popular right now</h2>
			<ul class="m-0 list-none border-b border-line p-0">
				{#each popularArticles as article (article.question)}
					<li use:reveal class="reveal border-t border-line">
						<a href="/help" class="flex min-h-16 items-center gap-4 py-4 text-ink no-underline">
							<span class="flex-1 text-[17px]/6 font-medium">{article.question}</span>
							<CategoryBadge category={article.audience} />
							<Icon name="caret-right" size={18} class="text-muted" />
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<aside class="flex flex-col gap-4">
			<div use:reveal class="flex reveal flex-col gap-3.5 rounded-3xl bg-surface p-7">
				<span class="flex size-12 items-center justify-center rounded-[14px] bg-ink text-paper">
					<Icon name="chat-circle-text" />
				</span>
				<h3 class="text-[22px]/[30px] font-semibold">Still stuck? Chat with us.</h3>
				<p class="text-[15px]/6 text-muted">
					Open the Aera app, go to Account → Help, and message our team. Pick the trip it’s about
					and we’ll already have the details.
				</p>
				<Button href="/#get" size="xl" class="self-start">
					Open the app
					<Icon name="arrow-up-right" size={18} />
				</Button>
			</div>

			<div
				use:reveal={{ delay: 120 }}
				class="flex reveal gap-3.5 rounded-3xl border border-danger-line bg-danger-soft p-6"
			>
				<Icon name="siren" class="shrink-0 text-danger" />
				<span class="text-[15px]/6">
					<b class="font-semibold">Safety issue during a trip?</b> Use the red safety button in the app
					to reach our safety team. If you’re in danger, call 112 first.
				</span>
			</div>
		</aside>
	</section>
</SiteShell>
