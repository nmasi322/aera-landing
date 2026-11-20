import type { IconName } from '#lib/icons.js';
import type { Category } from '#lib/content/blog-posts.js';

export interface HelpTopic {
	icon: IconName;
	title: string;
	summary: string;
}

export const riderTopics: HelpTopic[] = [
	{
		icon: 'path',
		title: 'Your trips',
		summary: 'Booking, changing a destination, cancelling, waiting time'
	},
	{
		icon: 'receipt',
		title: 'Payments and refunds',
		summary: 'Cards, bank transfers, receipts, charges you don’t recognise'
	},
	{
		icon: 'shield-check',
		title: 'Safety',
		summary: 'Sharing your trip, the safety button, reporting a driver'
	},
	{
		icon: 'user-circle',
		title: 'Account and login',
		summary: 'Phone number, codes, recovering your account'
	},
	{
		icon: 'backpack',
		title: 'Lost items',
		summary: 'Left something in the car? Here’s what to do'
	},
	{
		icon: 'star',
		title: 'Ratings and feedback',
		summary: 'Rating your driver, how ratings work'
	}
];

export const driverTopics: HelpTopic[] = [
	{
		icon: 'identification-card',
		title: 'Applying to drive',
		summary: 'The 7 steps, what you need, how long it takes'
	},
	{
		icon: 'wallet',
		title: 'Earnings and payouts',
		summary: 'Your 85%, payout times, changing your bank account'
	},
	{
		icon: 'files',
		title: 'Car papers',
		summary: 'Uploading, expiry reminders, what gets rejected'
	},
	{
		icon: 'wrench',
		title: 'Car inspection',
		summary: 'Booking a slot, what we check, re-inspection'
	},
	{
		icon: 'car-profile',
		title: 'Trips and cancellations',
		summary: 'Accepting trips, trip PINs, no-shows'
	},
	{
		icon: 'prohibit',
		title: 'Account status',
		summary: 'Why you can’t go online, suspensions, appeals'
	}
];

export const popularArticles: {
	question: string;
	audience: Extract<Category, 'Riders' | 'Drivers'>;
}[] = [
	{ question: 'How do I cancel a ride, and will I be charged?', audience: 'Riders' },
	{ question: 'My card was declined. What now?', audience: 'Riders' },
	{ question: 'How does sharing my trip work?', audience: 'Riders' },
	{ question: 'When do I get paid?', audience: 'Drivers' },
	{ question: 'One of my papers was rejected. What do I do?', audience: 'Drivers' },
	{ question: 'I left something in the car', audience: 'Riders' }
];
