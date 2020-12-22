import { ReactComponent as IconWebsite } from "../assets/icons/website.svg";
import { ReactComponent as IconFork } from "../assets/icons/fork.svg";
import { ReactComponent as IconIssue } from "../assets/icons/issue.svg";
import { ReactComponent as IconStar } from "../assets/icons/star.svg";
import { ReactComponent as IconOpen } from "../assets/icons/open.svg";
import { ReactComponent as IconWarning } from "../assets/icons/warning.svg";
import { ReactComponent as IconGithub } from "../assets/icons/github.svg";
import { ReactComponent as IconEmail } from "../assets/icons/email.svg";
import { ReactComponent as IconTwitter } from "../assets/icons/twitter.svg";

const availableIcons = {
	website: IconWebsite,
	fork: IconFork,
	issue: IconIssue,
	star: IconStar,
	open: IconOpen,
	warning: IconWarning,
	github: IconGithub,
	email: IconEmail,
	twitter: IconTwitter
};

const Icon = ({ name, className }) => {
	// Has to pass a `className` prop in order to receive Tailwind styles
	const IconComponent = availableIcons[name];
	
	// Handling non-available icons
	if (IconComponent) {
		return <IconComponent className={ className } />
	}
	
	return null;
};

export default Icon;