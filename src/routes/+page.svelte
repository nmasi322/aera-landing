<script lang="ts">
	import Seo from '#lib/components/seo.svelte';
	import SiteShell from '#lib/components/site-shell.svelte';
	import HeroSection from '#lib/components/landing/hero-section.svelte';
	import HowItWorksSection from '#lib/components/landing/how-it-works-section.svelte';
	import SafetySection from '#lib/components/landing/safety-section.svelte';
	import FaresSection from '#lib/components/landing/fares-section.svelte';
	import DriveSection from '#lib/components/landing/drive-section.svelte';
	import PilotSection from '#lib/components/landing/pilot-section.svelte';
	import FaqSection from '#lib/components/landing/faq-section.svelte';
	import DownloadSection from '#lib/components/landing/download-section.svelte';
	import { faqs } from '#lib/content/faqs.js';
	import { organization, site, website } from '#lib/seo.js';

	/** The home page carries the site-wide nodes plus the FAQ it actually answers. */
	const jsonLd = [
		organization,
		website,
		{
			'@type': 'WebPage',
			'@id': `${site.origin}/#webpage`,
			url: site.origin,
			name: site.title,
			description: site.description,
			isPartOf: { '@id': `${site.origin}/#website` },
			about: { '@id': `${site.origin}/#organization` },
			primaryImageOfPage: `${site.origin}${site.ogImage}`
		},
		{
			'@type': 'FAQPage',
			'@id': `${site.origin}/#faq`,
			mainEntity: faqs.map((faq) => ({
				'@type': 'Question',
				name: faq.q,
				acceptedAnswer: { '@type': 'Answer', text: faq.a }
			}))
		},
		{
			'@type': 'MobileApplication',
			name: site.name,
			applicationCategory: 'TravelApplication',
			operatingSystem: 'iOS, Android',
			url: site.origin,
			publisher: { '@id': `${site.origin}/#organization` },
			offers: { '@type': 'Offer', price: '0', priceCurrency: 'NGN' }
		}
	];
</script>

<Seo title={site.title} description={site.description} path="/" {jsonLd} />

<SiteShell variant="landing">
	<HeroSection />
	<HowItWorksSection />
	<SafetySection />
	<FaresSection />
	<DriveSection />
	<PilotSection />
	<FaqSection />
	<DownloadSection />
</SiteShell>
