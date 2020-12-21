import { ReactComponent as IconWebsite } from "../assets/icons/website.svg";
import { ReactComponent as IconFork } from "../assets/icons/fork.svg";
import { ReactComponent as IconIssue } from "../assets/icons/issue.svg";
import { ReactComponent as IconStar } from "../assets/icons/star.svg";
import { ReactComponent as IconOpen } from "../assets/icons/open.svg";
import { ReactComponent as IconWarning } from "../assets/icons/warning.svg";

const availableIcons = {
	website: IconWebsite,
	fork: IconFork,
	issue: IconIssue,
	star: IconStar,
	open: IconOpen,
	warning: IconWarning
};

const Icon = ({ name }) => {
	const IconComponent = availableIcons[name];
	return <IconComponent />
};

export default Icon;