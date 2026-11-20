<script lang="ts">
	import wordmark from '#lib/assets/aera-wordmark.png';

	const columns = [
		{
			title: 'Ride',
			links: [
				{ href: '#how', label: 'How it works' },
				{ href: '#safety', label: 'Safety' },
				{ href: '#fares', label: 'Fares' },
				{ href: '/help', label: 'Help centre' }
			]
		},
		{
			title: 'Drive',
			links: [
				{ href: '#drive', label: 'Apply to drive' },
				{ href: '/help', label: 'Earnings and payouts' },
				{ href: '/help', label: 'Driver help' }
			]
		},
		{
			title: 'Company',
			links: [
				{ href: '/about', label: 'About us' },
				{ href: '/blog', label: 'Blog' },
				{ href: '/terms', label: 'Terms' },
				{ href: '/privacy', label: 'Privacy' }
			]
		}
	];
</script>

<footer class="mt-auto w-full border-t border-line">
	<div class="shell grid grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 pt-16 pb-8 max-wide:grid-cols-1">
		<div class="flex flex-col gap-3.5">
			<img src={wordmark} alt="Aera" class="block h-auto w-21" />
			<span class="max-w-75 text-sm/[22px] text-muted">
				Everyday rides across Lagos, at fair prices, with drivers you can trust.
			</span>
		</div>

		{#each columns as column (column.title)}
			<div class="flex flex-col gap-3">
				<span class="text-sm font-semibold">{column.title}</span>
				{#each column.links as link (link.label)}
					<a
						href={link.href}
						class="text-sm/5 text-muted no-underline transition-colors hover:text-ink"
					>
						{link.label}
					</a>
				{/each}
			</div>
		{/each}
	</div>

	<div
		class="shell flex flex-wrap justify-between gap-3 border-t border-surface pt-5 pb-8 text-[13px]/5 text-muted-light"
	>
		<span>© 2026 AFRIBA TECHNOLOGIES. Aera is a product of AFRIBA TECHNOLOGIES.</span>
		<span class="font-semibold text-ink">Move Different.</span>
	</div>
</footer>
