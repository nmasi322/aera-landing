<script lang="ts">
	import SiteShell from '#lib/components/site-shell.svelte';
	import LegalPage from '#lib/components/legal-page.svelte';
	import { privacyPage } from '#lib/content/legal-pages.js';
</script>

<svelte:head>
	<title>Aera: Privacy policy</title>
	<meta
		name="description"
		content="What we collect, how we use it, and the control you have over your data."
	/>
</svelte:head>

<SiteShell>
	<LegalPage page={privacyPage} active="privacy" />
</SiteShell>
