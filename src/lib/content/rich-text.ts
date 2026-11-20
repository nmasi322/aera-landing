/** A list item, optionally opening with a bolded lead-in ("Account: name, phone number…"). */
export interface ListItem {
	lead?: string;
	text: string;
}

/** The blocks long-form copy is written in. Rendered by `rich-text.svelte`. */
export type Block =
	| { type: 'h3'; text: string }
	| { type: 'p'; text: string }
	| { type: 'ul'; items: (string | ListItem)[] };

/** A numbered section of a legal page, linked from the "On this page" nav. */
export interface LegalSection {
	id: string;
	/** Shown in the side nav. */
	nav: string;
	/** Shown as the heading, numbered in the design. */
	heading: string;
	blocks: Block[];
}
