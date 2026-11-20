import type { Block } from '#lib/content/rich-text.js';

export type Category = 'Riders' | 'Drivers' | 'Safety' | 'Company';

export interface Post {
	slug: string;
	title: string;
	excerpt: string;
	category: Category;
	date: string;
	/** Subject and credit for the card image placeholder. */
	image: string;
	readingTime?: string;
	/** Set on the post the blog leads with. */
	featured?: boolean;
	/** Only published posts have a body; the rest are listed but not yet linked. */
	article?: {
		heroImage: string;
		author: string;
		blocks: Block[];
		/** The highlighted takeaway below the article. */
		takeaway: string;
	};
}

export const posts: Post[] = [
	{
		slug: 'why-your-fare-is-locked',
		title: 'Why your fare is locked the moment a driver accepts',
		excerpt:
			'Traffic on Third Mainland, a wrong turn, a detour. None of it changes what you pay. Here’s how that works.',
		category: 'Riders',
		date: '18 Nov 2026',
		readingTime: '4 min read',
		image: 'Rider in an Aera car, Lagos traffic outside',
		featured: true,
		article: {
			heroImage: 'Rider looking out of a car window in Lagos traffic',
			author: 'The Aera team',
			takeaway: 'the price you see is the price you pay, unless you change the trip.',
			blocks: [
				{
					type: 'p',
					text: 'You book a ride from Lekki to Ikeja City Mall. The app shows ₦8,400. A driver accepts. Then Third Mainland Bridge decides to be Third Mainland Bridge.'
				},
				{
					type: 'p',
					text: 'With Aera, that’s not your problem. The fare you saw is the fare you pay, and it stops being an estimate the moment your driver accepts.'
				},
				{ type: 'h3', text: 'What “locked” actually means' },
				{
					type: 'p',
					text: 'Before you book, we work out one upfront price for your trip from the distance, the expected time and what it costs a driver to get to you. That’s the number you see. Once a driver accepts, it’s locked.'
				},
				{
					type: 'ul',
					items: [
						'Traffic is slower than expected? Same price.',
						'Your driver takes a different route? Same price.',
						'The GPS estimate changes mid-trip? Same price.'
					]
				},
				{ type: 'h3', text: 'When the price can change' },
				{
					type: 'p',
					text: 'Only when you change the trip: a new destination or an extra stop you ask for in the app. You’ll see the new price before it applies. Waiting longer than 5 free minutes at pickup can add a small waiting charge, and you’ll see that in the app too.'
				},
				{ type: 'h3', text: 'Why we do it this way' },
				{
					type: 'p',
					text: 'Because arguing about money at the end of a ride is the worst part of getting around. You should know what you’re paying before you get in, and your driver should know what they’re earning before they set off. They keep 85% of it.'
				},
				{
					type: 'p',
					text: 'Took a route that felt way too long? Tell us from the trip in your activity and we’ll take a look.'
				}
			]
		}
	},
	{
		slug: 'how-we-check-every-driver',
		title: 'How we check every driver before they drive',
		excerpt:
			'ID, licence, car papers and an in-person car inspection. What we look at, and why it takes a few steps.',
		category: 'Safety',
		date: '16 Nov 2026',
		image: 'Safety photo'
	},
	{
		slug: 'why-drivers-keep-85-percent',
		title: '85%: why Aera drivers keep more of every fare',
		excerpt:
			'A flat 15% commission, no hidden cuts, and earnings that go straight to your bank account.',
		category: 'Drivers',
		date: '14 Nov 2026',
		image: 'Drivers photo'
	},
	{
		slug: 'how-the-live-trip-link-works',
		title: 'Share your trip: how the live link works',
		excerpt:
			'Send someone a link and they can follow your ride until you arrive. No app needed on their side.',
		category: 'Safety',
		date: '12 Nov 2026',
		image: 'Safety photo'
	},
	{
		slug: 'our-lagos-pilot',
		title: 'Our Lagos pilot: what to expect this November',
		excerpt: 'Where we’re starting, why we’re starting small, and how we’ll grow from there.',
		category: 'Company',
		date: '10 Nov 2026',
		image: 'Company photo'
	},
	{
		slug: 'paying-without-cash',
		title: 'Card or transfer: paying for rides without cash',
		excerpt:
			'Why Aera doesn’t take cash, and how paying by card or bank transfer works in the app.',
		category: 'Riders',
		date: '8 Nov 2026',
		image: 'Riders photo'
	}
];

export const categories: ('All' | Category)[] = ['All', 'Riders', 'Drivers', 'Safety', 'Company'];

export const featuredPost = posts.find((post) => post.featured) ?? posts[0];

export function getPost(slug: string): Post | undefined {
	return posts.find((post) => post.slug === slug);
}

/** Published posts other than the one being read. */
export function relatedPosts(slug: string, count = 3): Post[] {
	return posts.filter((post) => post.slug !== slug && !post.featured).slice(0, count);
}
