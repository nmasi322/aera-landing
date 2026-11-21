/** The questions the landing page answers, and the FAQ schema it publishes. */
export interface Faq {
	q: string;
	a: string;
}

export const faqs: Faq[] = [
	{
		q: 'Can I pay cash?',
		a: 'No, and that’s on purpose. You pay by card or bank transfer in the app, so there’s no extra fees added by the driver at the end of the ride.'
	},
	{
		q: 'What if my driver takes a longer route?',
		a: 'You still pay the price you saw. Your fare is locked the moment a driver accepts, traffic or detours included. Tell us in the app and we’ll look into the route.'
	},
	{
		q: 'Who can follow my trip?',
		a: 'Only the people you share it with. You send them a link that shows your driver, car, plate number and where you are, live, until you arrive.'
	},
	{
		q: 'How do I know my driver is legit?',
		a: 'Every driver’s ID, licence and car papers are checked, and their car is inspected in person before they can come pick you up. At pickup, you give them your 4-digit trip PIN so you know it’s the right car.'
	},
	{
		q: 'How much do drivers keep?',
		a: '85% of every fare. Aera takes a flat 15% (to make the team happy), and earnings are paid out instantly to the driver’s bank account.'
	},
	{
		q: 'Where does Aera work?',
		a: 'We’re starting with a pilot in parts of Lagos from November, then growing area by area. Download the app to see if we’re in your area yet.'
	}
];
