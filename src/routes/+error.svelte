<script lang="ts">
	import { page } from '$app/state';
	import SiteShell from '#lib/components/site-shell.svelte';
	import Seo from '#lib/components/seo.svelte';
	import Button from '#lib/components/button.svelte';
	import Icon from '#lib/components/icon.svelte';

	const title = $derived(
		page.status === 404 ? 'We can’t find that page.' : 'Something went wrong.'
	);
	const body = $derived(
		page.status === 404
			? 'The link may be old, or the page may have moved. Everything else is a tap away.'
			: 'Try again in a moment. If it keeps happening, email us at support@getaera.co.'
	);
</script>

<Seo title={`Aera: ${page.status}`} description={body} noindex />

<SiteShell>
	<section class="shell flex w-full flex-col items-start gap-5 pt-24 pb-30">
		<span class="font-mono text-[13px] font-medium text-accent">{page.status}</span>
		<h1
			class="max-w-180 text-[64px]/[70px] font-semibold tracking-[-0.04em] max-wide:text-[40px]/[46px]"
		>
			{title}
		</h1>
		<p class="max-w-140 text-[19px]/[30px] text-muted">{body}</p>
		<Button href="/" size="xl" class="mt-2">
			Back to the home page
			<Icon name="arrow-right" size={18} />
		</Button>
	</section>
</SiteShell>
