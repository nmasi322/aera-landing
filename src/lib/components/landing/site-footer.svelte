<script lang="ts">
	import Icon from '#lib/components/icon.svelte';
	import wordmark from '#lib/assets/aera-wordmark.png';
	import type { IconName } from '#lib/icons.js';

	const columns = [
		{
			title: 'Useful links',
			links: [
				{ href: '#how', label: 'How it works' },
				{ href: '#safety', label: 'Safety' },
				{ href: '#fares', label: 'Fares' },
				{ href: '#drive', label: 'Apply to drive' }
				// { href: '/help', label: 'Help centre' }
			]
		},
		// {
		// 	title: 'Drive',
		// 	links: [
		// 		{ href: '#drive', label: 'Apply to drive' },
		// 		{ href: '/help', label: 'Earnings and payouts' },
		// 		{ href: '/help', label: 'Driver help' }
		// 	]
		// },
		{
			title: 'Company',
			links: [
				{ href: '/about', label: 'About us' },
				// { href: '/blog', label: 'Blog' },
				{ href: '/terms', label: 'Terms' },
				{ href: '/privacy', label: 'Privacy' }
			]
		}
	];

	/** Point these at the real accounts once they exist. */
	const socials: { href: string; label: string; icon: IconName }[] = [
		{ href: 'https://instagram.com/aera.ng', label: 'Instagram', icon: 'instagram-logo' },
		{ href: 'https://x.com/aera_ng', label: 'X', icon: 'x-logo' },
		{ href: 'https://tiktok.com/@aera.ng', label: 'TikTok', icon: 'tiktok-logo' },
		{
			href: 'https://www.linkedin.com/company/aera-ng',
			label: 'LinkedIn',
			icon: 'linkedin-logo'
		}
	];
</script>

<footer class="mt-auto w-full border-t border-line">
	<div
		class="shell flex items-start justify-between gap-16 pt-16 pb-8 max-wide:flex-col max-wide:gap-10"
	>
		<div class="flex flex-col gap-3.5">
			<img src={wordmark} alt="Aera" class="block h-auto w-21" />
			<span class="max-w-75 text-sm/[22px] text-muted">
				Everyday rides across Lagos, at fair prices, with drivers you can trust.
			</span>
		</div>

		<div class="grid grid-cols-3 gap-x-16 gap-y-10 max-wide:grid-cols-2 max-wide:gap-x-10">
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

			<div class="flex flex-col gap-3">
				<span class="text-sm font-semibold">Follow us</span>
				{#each socials as social (social.label)}
					<a
						href={social.href}
						target="_blank"
						rel="noreferrer noopener"
						class="flex items-center gap-2 text-sm/5 text-muted no-underline transition-colors hover:text-ink"
					>
						<Icon name={social.icon} size={16} />
						{social.label}
					</a>
				{/each}
			</div>
		</div>
	</div>

	<div
		class="shell flex flex-wrap justify-between gap-3 border-t border-surface pt-5 pb-8 text-[13px]/5 text-muted-light"
	>
		<span>© 2026 AFRIBA TECHNOLOGIES. Aera is a product of AFRIBA TECHNOLOGIES.</span>
		<span class="font-semibold text-ink">Move Different.</span>
	</div>
</footer>
