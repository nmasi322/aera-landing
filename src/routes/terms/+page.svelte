<script lang="ts">
	import SiteShell from '#lib/components/site-shell.svelte';
	import Seo from '#lib/components/seo.svelte';
	import { breadcrumbs, legalPageSchema } from '#lib/seo.js';
	import LegalPage from '#lib/components/legal-page.svelte';
	import { termsPage } from '#lib/content/legal-pages.js';
</script>

<Seo
	title="Aera terms of use"
	description="The terms you agree to when you ride or drive with Aera."
	path="/terms"
	jsonLd={[
		legalPageSchema('/terms', 'Terms of use', termsPage.updated),
		breadcrumbs([
			{ name: 'Home', path: '/' },
			{ name: 'Terms of use', path: '/terms' }
		])
	]}
/>

<SiteShell current="legal">
	<LegalPage page={termsPage} active="terms" />
</SiteShell>
