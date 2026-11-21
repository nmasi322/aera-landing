<script lang="ts">
	import SiteShell from '#lib/components/site-shell.svelte';
	import Seo from '#lib/components/seo.svelte';
	import { breadcrumbs, legalPageSchema } from '#lib/seo.js';
	import LegalPage from '#lib/components/legal-page.svelte';
	import { privacyPage } from '#lib/content/legal-pages.js';
</script>

<Seo
	title="Aera privacy policy"
	description="What we collect, how we use it, and the control you have over your data."
	path="/privacy"
	jsonLd={[
		legalPageSchema('/privacy', 'Privacy policy', privacyPage.updated),
		breadcrumbs([
			{ name: 'Home', path: '/' },
			{ name: 'Privacy policy', path: '/privacy' }
		])
	]}
/>

<SiteShell current="legal">
	<LegalPage page={privacyPage} active="privacy" />
</SiteShell>
