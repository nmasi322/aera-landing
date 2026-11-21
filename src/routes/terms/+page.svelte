<script lang="ts">
	import SiteShell from '#lib/components/site-shell.svelte';
	import LegalPage from '#lib/components/legal-page.svelte';
	import { termsPage } from '#lib/content/legal-pages.js';
</script>

<svelte:head>
	<title>Aera: Terms of use</title>
	<meta name="description" content="The terms you agree to when you ride or drive with Aera." />
</svelte:head>

<SiteShell current="legal">
	<LegalPage page={termsPage} active="terms" />
</SiteShell>
