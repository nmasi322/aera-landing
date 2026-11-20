import type { Action } from 'svelte/action';

export interface RevealOptions {
	/** Delay before the entrance animation runs, in milliseconds. */
	delay?: number;
	/** How far into the viewport the element must be before it animates, 0–1. */
	threshold?: number;
	/** Shrinks the viewport from the bottom so elements animate slightly early. */
	rootMargin?: string;
}

/**
 * Plays an entrance animation the first time an element scrolls into view.
 * Pair with the `reveal` utility class, which keeps the element hidden until then.
 */
export const reveal: Action<HTMLElement, RevealOptions | undefined> = (node, options = {}) => {
	const { delay = 0, threshold = 0.15, rootMargin = '0px 0px -10% 0px' } = options;

	node.style.setProperty('--reveal-delay', `${delay}ms`);

	if (typeof IntersectionObserver === 'undefined') {
		node.classList.add('is-visible');
		return;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				node.classList.add('is-visible');
				observer.disconnect();
			}
		},
		{ threshold, rootMargin }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};
