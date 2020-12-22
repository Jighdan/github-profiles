import Icon from "../../Icon";

const ProfileCardLinks = ({ email, twitter, githubUrl, website }) => {
	const links = {
		email: `mailto:${email}`,
		twitter,
		github: githubUrl,
		website,
	};

	return (
		<nav className="flex justify-center wrap">
			{
				Object.keys(links).map(link => (
					links.link && (
						<a
							key={ link }
							className="space-x-2"
							href={ links[link] }
							target="_blank"
							rel="noopener noreferrer"
						>
							<Icon name={ link } />
						</a>
						)
					)
				)
			}
		</nav>
	)
};

export default ProfileCardLinks;