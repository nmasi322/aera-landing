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
import CaretRightIcon from 'phosphor-svelte/lib/CaretRightIcon';
import CarProfileIcon from 'phosphor-svelte/lib/CarProfileIcon';
import ChatCircleTextIcon from 'phosphor-svelte/lib/ChatCircleTextIcon';
import CheckCircleIcon from 'phosphor-svelte/lib/CheckCircleIcon';
import CheckIcon from 'phosphor-svelte/lib/CheckIcon';
import DeviceMobileIcon from 'phosphor-svelte/lib/DeviceMobileIcon';
import FilesIcon from 'phosphor-svelte/lib/FilesIcon';
import GooglePlayLogoIcon from 'phosphor-svelte/lib/GooglePlayLogoIcon';
import HandshakeIcon from 'phosphor-svelte/lib/HandshakeIcon';
import IdentificationCardIcon from 'phosphor-svelte/lib/IdentificationCardIcon';
import ImageIcon from 'phosphor-svelte/lib/ImageIcon';
import LifebuoyIcon from 'phosphor-svelte/lib/LifebuoyIcon';
import LinkedinLogoIcon from 'phosphor-svelte/lib/LinkedinLogoIcon';
import LinkIcon from 'phosphor-svelte/lib/LinkIcon';
import LockIcon from 'phosphor-svelte/lib/LockIcon';
import MagnifyingGlassIcon from 'phosphor-svelte/lib/MagnifyingGlassIcon';
import MinusIcon from 'phosphor-svelte/lib/MinusIcon';
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
import WalletIcon from 'phosphor-svelte/lib/WalletIcon';
import WarningCircleIcon from 'phosphor-svelte/lib/WarningCircleIcon';
import WhatsappLogoIcon from 'phosphor-svelte/lib/WhatsappLogoIcon';
import WrenchIcon from 'phosphor-svelte/lib/WrenchIcon';
import XLogoIcon from 'phosphor-svelte/lib/XLogoIcon';
import GaugeIcon from 'phosphor-svelte/lib/GaugeIcon';

export const icons = {
	'apple-logo': AppleLogoIcon,
	'arrow-left': ArrowLeftIcon,
	'arrow-right': ArrowRightIcon,
	'arrow-up-right': ArrowUpRightIcon,
	backpack: BackpackIcon,
	'car-profile': CarProfileIcon,
	'caret-right': CaretRightIcon,
	'chat-circle-text': ChatCircleTextIcon,
	check: CheckIcon,
	'check-circle': CheckCircleIcon,
	'device-mobile': DeviceMobileIcon,
	files: FilesIcon,
	gauge: GaugeIcon,
	'google-play-logo': GooglePlayLogoIcon,
	handshake: HandshakeIcon,
	'identification-card': IdentificationCardIcon,
	image: ImageIcon,
	lifebuoy: LifebuoyIcon,
	link: LinkIcon,
	'linkedin-logo': LinkedinLogoIcon,
	lock: LockIcon,
	'magnifying-glass': MagnifyingGlassIcon,
	minus: MinusIcon,
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
	wallet: WalletIcon,
	'warning-circle': WarningCircleIcon,
	'whatsapp-logo': WhatsappLogoIcon,
	wrench: WrenchIcon,
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
