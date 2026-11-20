<script lang="ts">
	import SiteShell from '#lib/components/site-shell.svelte';
	import HeroSection from '#lib/components/landing/hero-section.svelte';
	import HowItWorksSection from '#lib/components/landing/how-it-works-section.svelte';
	import SafetySection from '#lib/components/landing/safety-section.svelte';
	import FaresSection from '#lib/components/landing/fares-section.svelte';
	import DriveSection from '#lib/components/landing/drive-section.svelte';
	import PilotSection from '#lib/components/landing/pilot-section.svelte';
	import FaqSection from '#lib/components/landing/faq-section.svelte';
	import DownloadSection from '#lib/components/landing/download-section.svelte';
</script>

<svelte:head>
	<title>Aera. Lagos, let’s move different.</title>
	<meta
		name="description"
		content="Everyday rides across Lagos at a price you see first, with drivers we’ve checked and a live trip link for the people who care about you."
	/>
</svelte:head>

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
