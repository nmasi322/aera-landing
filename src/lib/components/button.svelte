<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

	type Variant = 'default' | 'outline' | 'ghost' | 'destructive';
	type Size = 'sm' | 'md' | 'lg' | 'xl' | 'icon';

	interface Props
		extends
			Omit<HTMLButtonAttributes, 'class'>,
			Pick<HTMLAnchorAttributes, 'href' | 'target' | 'rel' | 'download'> {
		variant?: Variant;
		size?: Size;
		/** Fully rounded, like the design's filter pills. */
		pill?: boolean;
		/** Renders an `<a>` instead of a `<button>`. */
		href?: string;
		class?: string;
		children: Snippet;
	}

	let {
		variant = 'default',
		size = 'md',
		pill = false,
		href,
		type = 'button',
		class: className,
		children,
		...rest
	}: Props = $props();

	const base =
		'box-border inline-flex cursor-pointer items-center justify-center gap-2 border font-[inherit] font-semibold whitespace-nowrap no-underline transition-colors disabled:pointer-events-none disabled:opacity-50';

	const variants: Record<Variant, string> = {
		default: 'border-transparent bg-ink text-paper hover:bg-ink-soft',
		outline: 'border-ash bg-paper text-ink hover:bg-surface',
		ghost: 'border-transparent bg-transparent text-ink hover:bg-surface',
		destructive: 'border-transparent bg-danger text-paper hover:bg-danger/90'
	};

	const sizes: Record<Size, string> = {
		sm: 'h-10 px-4 text-sm',
		md: 'h-11 px-[18px] text-[15px]/5',
		lg: 'h-12 px-[22px] text-base',
		xl: 'h-14 px-6 text-[17px]/6',
		icon: 'size-10 p-0'
	};

	const radii: Record<Size, string> = {
		sm: 'rounded-xl',
		md: 'rounded-xl',
		lg: 'rounded-xl',
		xl: 'rounded-[14px]',
		icon: 'rounded-full'
	};

	/** The element differs by `href`, but the forwarded attributes are the same. */
	const anchorRest = $derived(rest as unknown as HTMLAnchorAttributes);

	const classes = $derived([
		base,
		variants[variant],
		sizes[size],
		pill ? 'rounded-full' : radii[size],
		className
	]);
</script>

{#if href}
	<a {href} class={classes} {...anchorRest}>{@render children()}</a>
{:else}
	<button {type} class={classes} {...rest}>{@render children()}</button>
{/if}
