import Icon from "../../Icon";

const ProfileCardLinks = ({ profileLinks }) => {
	return (
		<>
			{
				Object.keys(profileLinks).map(link => (
					profileLinks[link] && (
						<a
							key={ link }
							href={ profileLinks[link] }
							target="_blank"
							rel="noopener noreferrer"
						>
							<Icon className="h-10 w-auto lg:h-12 fill-current text-gray-400 hover:text-black" name={ link } />
						</a>
						)
					)
				)
			}
		</>
	)
};

export default ProfileCardLinks;