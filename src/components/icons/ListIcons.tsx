import React from 'react';
import ArrowLeftIcon from './ArrowLeftIcon';
import ArrowRight from './ArrowRight';
import ArrowUpIcon from './ArrowUpIcon';
import ArrowDownIcon from './ArrowDownIcon';
import TriangleIcon from './TriangleIcon';
import CheckIcon from './CheckIcon';
import CloseIcon from './CloseIcon';
import MinusIcon from './MinusIcon';
import PlusIcon from './PlusIcon';
import SearchIcon from './SearchIcon';
import MoreIcon from './MoreIcon';
import HomeIcon from './HomeIcon';
import MenuIcon from './MenuIcon';
import SliderIcon from './SliderIcon';
import SettingsIcon from './SettingsIcon';
import DashboardIcon from './DashboardIcon';
import FilterIcon from './FilterIcon';
import EditIcon from './EditIcon';
import DeleteIcon from './DeleteIcon';
import CopyIcon from './CopyIcon';
import DocumentIcon from './DocumentIcon';
import SaveIcon from './SaveIcon';
import PrinterIcon from './PrinterIcon';
import MailIcon from './MailIcon';
import PhoneIcon from './PhoneIcon';
import InternetIcon from './InternetIcon';
import ShareIcon from './ShareIcon';
import ExternalLinkIcon from './ExternalLinkIcon';
import DownloadIcon from './DownloadIcon';
import UploadIcon from './UploadIcon';

const icons = [
	ArrowLeftIcon,
	ArrowRight,
	ArrowUpIcon,
	ArrowDownIcon,
	TriangleIcon,
	CheckIcon,
	CloseIcon,
	MinusIcon,
	PlusIcon,
	SearchIcon,
	MoreIcon,
	HomeIcon,
	MenuIcon,
	SliderIcon,
	SettingsIcon,
	DashboardIcon,
	FilterIcon,
	EditIcon,
	DeleteIcon,
	CopyIcon,
	DocumentIcon,
	SaveIcon,
	PrinterIcon,
	MailIcon,
	PhoneIcon,
	InternetIcon,
	ShareIcon,
	ExternalLinkIcon,
	DownloadIcon,
	UploadIcon,
];

export default function ListIcons() {
	return (
		<>
			{icons.map(Icon => (
				<Icon key={`Icon ${Icon}`} />
			))}
		</>
	);
}
