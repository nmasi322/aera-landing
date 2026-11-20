import type { LegalSection } from '#lib/content/rich-text.js';

export interface LegalPage {
	title: string;
	/** Placeholder dates stay until legal sign-off. */
	updated: string;
	summary: string[];
	sections: LegalSection[];
}

export const termsPage: LegalPage = {
	title: 'Terms of use',
	updated: 'Last updated [date] · Effective [date]',
	summary: [
		'You pay the price you see when you book. It’s locked once a driver accepts, unless you change the trip.',
		'You pay by card or bank transfer in the app. No cash.',
		'Cancelling is free until your driver arrives. After that, a cancellation fee may apply.',
		'Your driver waits 5 minutes for free. After that, a waiting charge may apply.',
		'Drivers are independent and keep 85% of each fare; Aera keeps 15%.',
		'Be respectful. Harassment, unsafe behaviour or asking for off-app payments can get an account suspended.'
	],
	sections: [
		{
			id: 'who',
			nav: 'Who we are',
			heading: '1. Who we are',
			blocks: [
				{
					type: 'p',
					text: 'Aera is a product of AFRIBA TECHNOLOGIES, a company registered in Nigeria at [registered address]. “Aera”, “we” and “us” in these terms mean AFRIBA TECHNOLOGIES.'
				}
			]
		},
		{
			id: 'account',
			nav: 'Your account',
			heading: '2. Your account',
			blocks: [
				{
					type: 'p',
					text: 'You need a Nigerian phone number to create an account. We sign you in with one-time codes, so there’s no password to remember. Keep your phone and codes to yourself, and tell us straight away if you think someone else is using your account.'
				}
			]
		},
		{
			id: 'rides',
			nav: 'Booking a ride',
			heading: '3. Booking a ride',
			blocks: [
				{
					type: 'p',
					text: 'When you request a ride we show you the full upfront fare. Once a driver accepts, the fare is locked. It only changes if you change the trip, for example a new destination or an extra stop, and we’ll show you the new price first.'
				}
			]
		},
		{
			id: 'pay',
			nav: 'Paying',
			heading: '4. Paying',
			blocks: [
				{
					type: 'p',
					text: 'You pay through the app by debit card or bank transfer. Cash isn’t accepted. Card fares are charged when the trip ends; bank transfers are paid before we find you a driver. If a payment fails, you may not be able to book again until it’s settled.'
				}
			]
		},
		{
			id: 'cancel',
			nav: 'Cancelling and waiting',
			heading: '5. Cancelling and waiting',
			blocks: [
				{
					type: 'p',
					text: 'Cancelling is free until your driver arrives. After that, a cancellation fee of [amount] may apply. Your driver waits 5 minutes at pickup for free; after that, a waiting charge of [rate] per minute may apply. Both are shown in the app before you book.'
				}
			]
		},
		{
			id: 'drivers',
			nav: 'Drivers',
			heading: '6. Drivers',
			blocks: [
				{
					type: 'p',
					text: 'Drivers on Aera are independent and have been checked by us: ID, licence, car papers and an in-person car inspection. aera keeps a 15% commission on each fare and drivers keep 85%.'
				}
			]
		},
		{
			id: 'conduct',
			nav: 'How we expect everyone to behave',
			heading: '7. How we expect everyone to behave',
			blocks: [
				{
					type: 'ul',
					items: [
						'Treat each other with respect.',
						'Don’t ask for or offer payment outside the app.',
						'Don’t cancel a trip to arrange it off the app.',
						'No harassment, discrimination or unsafe behaviour.'
					]
				},
				{ type: 'p', text: 'We may warn, suspend or remove accounts that break these rules.' }
			]
		},
		{
			id: 'safety',
			nav: 'Safety',
			heading: '8. Safety',
			blocks: [
				{
					type: 'p',
					text: 'The safety button in the app alerts our safety team. It does not contact emergency services. If you are in danger, call 112.'
				}
			]
		},
		{
			id: 'changes',
			nav: 'Changes to these terms',
			heading: '9. Changes to these terms',
			blocks: [
				{
					type: 'p',
					text: 'We’ll tell you in the app before important changes take effect. If you keep using Aera after that, the new terms apply.'
				}
			]
		},
		{
			id: 'contact',
			nav: 'Contact',
			heading: '10. Contact',
			blocks: [
				{
					type: 'p',
					text: 'Questions about these terms? Message us in the app or email [legal@aera.ng].'
				}
			]
		}
	]
};

export const privacyPage: LegalPage = {
	title: 'Privacy policy',
	updated: 'Last updated [date] · Effective [date]',
	summary: [
		'We collect what we need to run rides: your name, phone number, location during trips, and payment details through our payment provider.',
		'Your full card number never touches our servers. We keep only the last 4 digits.',
		'Your location is shared with your driver only during a trip, and with people you choose to share your trip with.',
		'Your phone number stays hidden. Calls with your driver go through the app.',
		'We don’t sell your data.',
		'You can ask to see, correct or delete your data at any time.'
	],
	sections: [
		{
			id: 'who',
			nav: 'Who we are',
			heading: '1. Who we are',
			blocks: [
				{
					type: 'p',
					text: 'Aera is a product of AFRIBA TECHNOLOGIES, the controller of your personal data, registered at [registered address]. We follow the Nigeria Data Protection Act 2023.'
				}
			]
		},
		{
			id: 'collect',
			nav: 'What we collect',
			heading: '2. What we collect',
			blocks: [
				{
					type: 'ul',
					items: [
						{ lead: 'Account:', text: 'name, phone number, email if you add one, profile photo.' },
						{ lead: 'Trips:', text: 'pickup, destination, route, times, fares and ratings.' },
						{ lead: 'Location:', text: 'your location while you request or take a ride.' },
						{
							lead: 'Payments:',
							text: 'card type and last 4 digits, and payment status. Card details are handled by our payment provider.'
						},
						{
							lead: 'Drivers:',
							text: 'NIN, selfie, licence, car papers, car photos and bank account for payouts.'
						},
						{
							lead: 'Support:',
							text: 'messages you send us and call records from in-app calls (not recordings).'
						}
					]
				}
			]
		},
		{
			id: 'use',
			nav: 'How we use it',
			heading: '3. How we use it',
			blocks: [
				{
					type: 'p',
					text: 'To match you with drivers, work out fares, take payments and pay drivers, keep rides safe, help you when something goes wrong, and prevent fraud. We use trip data in aggregate to improve Aera.'
				}
			]
		},
		{
			id: 'location',
			nav: 'Your location',
			heading: '4. Your location',
			blocks: [
				{
					type: 'p',
					text: 'We use your location to find drivers near you and to run your trip. Your driver sees your location only during an active ride. If you share your trip, the people you choose see it live until you arrive. Then the link stops working.'
				}
			]
		},
		{
			id: 'share',
			nav: 'Who we share it with',
			heading: '5. Who we share it with',
			blocks: [
				{
					type: 'ul',
					items: [
						'Your driver: your first name, pickup, destination and rating during a trip.',
						'Payment and banking partners, to process payments and payouts.',
						'Identity verification partners, to check driver documents.',
						'Authorities, when the law requires it.'
					]
				},
				{ type: 'p', text: 'We don’t sell your personal data.' }
			]
		},
		{
			id: 'keep',
			nav: 'How long we keep it',
			heading: '6. How long we keep it',
			blocks: [
				{
					type: 'p',
					text: 'We keep your data while your account is open, and for up to [period] after, where the law or open disputes require it. Then we delete or anonymise it.'
				}
			]
		},
		{
			id: 'rights',
			nav: 'Your rights',
			heading: '7. Your rights',
			blocks: [
				{
					type: 'p',
					text: 'You can ask to see, correct, download or delete your data, or object to how we use it. Message us in the app or email [privacy@aera.ng]. You can also complain to the Nigeria Data Protection Commission.'
				}
			]
		},
		{
			id: 'security',
			nav: 'Keeping it safe',
			heading: '8. Keeping it safe',
			blocks: [
				{
					type: 'p',
					text: 'We encrypt data in transit and at rest, limit who on our team can see what, and log every admin action.'
				}
			]
		},
		{
			id: 'contact',
			nav: 'Contact',
			heading: '9. Contact',
			blocks: [
				{ type: 'p', text: 'Our data protection officer can be reached at [privacy@aera.ng].' }
			]
		}
	]
};
