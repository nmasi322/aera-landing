/**
 * The Phosphor icons used across the site, keyed by their Phosphor name.
 * Each entry is a component from `phosphor-svelte`; import it here rather than
 * reaching for `phosphor-svelte/lib/*` in a component, so every call site goes
 * through `icon.svelte` and stays size- and weight-consistent.
 */
import AppleLogoIcon from 'phosphor-svelte/lib/AppleLogoIcon';
import ArrowLeftIcon from 'phosphor-svelte/lib/ArrowLeftIcon';
import ArrowRightIcon from 'phosphor-svelte/lib/ArrowRightIcon';
import ArrowUpRightIcon from 'phosphor-svelte/lib/ArrowUpRightIcon';
import BackpackIcon from 'phosphor-svelte/lib/BackpackIcon';
import BankIcon from 'phosphor-svelte/lib/BankIcon';
import CarProfileIcon from 'phosphor-svelte/lib/CarProfileIcon';
import CaretDownIcon from 'phosphor-svelte/lib/CaretDownIcon';
import CaretRightIcon from 'phosphor-svelte/lib/CaretRightIcon';
import ChatCircleTextIcon from 'phosphor-svelte/lib/ChatCircleTextIcon';
import CheckCircleIcon from 'phosphor-svelte/lib/CheckCircleIcon';
import CheckIcon from 'phosphor-svelte/lib/CheckIcon';
import ClockIcon from 'phosphor-svelte/lib/ClockIcon';
import CreditCardIcon from 'phosphor-svelte/lib/CreditCardIcon';
import DeviceMobileIcon from 'phosphor-svelte/lib/DeviceMobileIcon';
import FilesIcon from 'phosphor-svelte/lib/FilesIcon';
import GaugeIcon from 'phosphor-svelte/lib/GaugeIcon';
import GooglePlayLogoIcon from 'phosphor-svelte/lib/GooglePlayLogoIcon';
import HandshakeIcon from 'phosphor-svelte/lib/HandshakeIcon';
import HouseIcon from 'phosphor-svelte/lib/HouseIcon';
import IdentificationCardIcon from 'phosphor-svelte/lib/IdentificationCardIcon';
import ImageIcon from 'phosphor-svelte/lib/ImageIcon';
import LifebuoyIcon from 'phosphor-svelte/lib/LifebuoyIcon';
import LinkIcon from 'phosphor-svelte/lib/LinkIcon';
import InstagramLogoIcon from 'phosphor-svelte/lib/InstagramLogoIcon';
import LinkedinLogoIcon from 'phosphor-svelte/lib/LinkedinLogoIcon';
import LockIcon from 'phosphor-svelte/lib/LockIcon';
import MagnifyingGlassIcon from 'phosphor-svelte/lib/MagnifyingGlassIcon';
import MinusIcon from 'phosphor-svelte/lib/MinusIcon';
import PaperPlaneRightIcon from 'phosphor-svelte/lib/PaperPlaneRightIcon';
import PaperclipIcon from 'phosphor-svelte/lib/PaperclipIcon';
import PathIcon from 'phosphor-svelte/lib/PathIcon';
import PhoneIcon from 'phosphor-svelte/lib/PhoneIcon';
import PlusIcon from 'phosphor-svelte/lib/PlusIcon';
import ProhibitIcon from 'phosphor-svelte/lib/ProhibitIcon';
import ReceiptIcon from 'phosphor-svelte/lib/ReceiptIcon';
import SealCheckIcon from 'phosphor-svelte/lib/SealCheckIcon';
import ShareNetworkIcon from 'phosphor-svelte/lib/ShareNetworkIcon';
import ShieldCheckIcon from 'phosphor-svelte/lib/ShieldCheckIcon';
import SirenIcon from 'phosphor-svelte/lib/SirenIcon';
import StarIcon from 'phosphor-svelte/lib/StarIcon';
import SteeringWheelIcon from 'phosphor-svelte/lib/SteeringWheelIcon';
import TagIcon from 'phosphor-svelte/lib/TagIcon';
import UserCircleIcon from 'phosphor-svelte/lib/UserCircleIcon';
import UserIcon from 'phosphor-svelte/lib/UserIcon';
import UsersIcon from 'phosphor-svelte/lib/UsersIcon';
import WalletIcon from 'phosphor-svelte/lib/WalletIcon';
import WarningCircleIcon from 'phosphor-svelte/lib/WarningCircleIcon';
import TiktokLogoIcon from 'phosphor-svelte/lib/TiktokLogoIcon';
import WhatsappLogoIcon from 'phosphor-svelte/lib/WhatsappLogoIcon';
import WifiHighIcon from 'phosphor-svelte/lib/WifiHighIcon';
import WrenchIcon from 'phosphor-svelte/lib/WrenchIcon';
import XIcon from 'phosphor-svelte/lib/XIcon';
import XLogoIcon from 'phosphor-svelte/lib/XLogoIcon';

export const icons = {
	'apple-logo': AppleLogoIcon,
	'arrow-left': ArrowLeftIcon,
	'arrow-right': ArrowRightIcon,
	'arrow-up-right': ArrowUpRightIcon,
	backpack: BackpackIcon,
	bank: BankIcon,
	'car-profile': CarProfileIcon,
	'caret-down': CaretDownIcon,
	'caret-right': CaretRightIcon,
	'chat-circle-text': ChatCircleTextIcon,
	check: CheckIcon,
	'check-circle': CheckCircleIcon,
	clock: ClockIcon,
	'credit-card': CreditCardIcon,
	'device-mobile': DeviceMobileIcon,
	files: FilesIcon,
	gauge: GaugeIcon,
	'google-play-logo': GooglePlayLogoIcon,
	handshake: HandshakeIcon,
	house: HouseIcon,
	'identification-card': IdentificationCardIcon,
	image: ImageIcon,
	lifebuoy: LifebuoyIcon,
	link: LinkIcon,
	'instagram-logo': InstagramLogoIcon,
	'linkedin-logo': LinkedinLogoIcon,
	lock: LockIcon,
	'magnifying-glass': MagnifyingGlassIcon,
	minus: MinusIcon,
	'paper-plane-right': PaperPlaneRightIcon,
	paperclip: PaperclipIcon,
	path: PathIcon,
	phone: PhoneIcon,
	plus: PlusIcon,
	prohibit: ProhibitIcon,
	receipt: ReceiptIcon,
	'seal-check': SealCheckIcon,
	'share-network': ShareNetworkIcon,
	'shield-check': ShieldCheckIcon,
	siren: SirenIcon,
	star: StarIcon,
	'steering-wheel': SteeringWheelIcon,
	tag: TagIcon,
	user: UserIcon,
	'user-circle': UserCircleIcon,
	users: UsersIcon,
	wallet: WalletIcon,
	'warning-circle': WarningCircleIcon,
	'tiktok-logo': TiktokLogoIcon,
	'whatsapp-logo': WhatsappLogoIcon,
	'wifi-high': WifiHighIcon,
	wrench: WrenchIcon,
	x: XIcon,
	'x-logo': XLogoIcon
};

export type IconName = keyof typeof icons;

export type IconWeight = 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';

/** Icons the design draws in something other than the default regular weight. */
export const iconWeights: Partial<Record<IconName, IconWeight>> = {
	'apple-logo': 'fill',
	check: 'bold',
	'check-circle': 'fill',
	'google-play-logo': 'fill',
	'seal-check': 'fill'
};
