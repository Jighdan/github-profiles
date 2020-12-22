import { websiteUrlFormat, emailUrlFormat, twitterUrlFormat } from "../../../services/urlFormatter";
import ProfileCardBody from "./ProfileCardBody";
import ProfileCardLinks from "./ProfileCardLinks";

const ProfileCard = ({ profile }) => {
	const profileImageAltText = `${profile.login}'s profile.`;

	const profileIntro = {
		login: profile.login,
		name: profile.name,
		bio: profile.bio ? `"${profile.bio}"` : "",
	};
	const profileLinks = {
		github: profile.githubUrl,
		website: profile.website ? websiteUrlFormat(profile.website) : null,
		email: profile.email ? emailUrlFormat(profile.email) : null,
		twitter: profile.twitter ? twitterUrlFormat(profile.twitter) : null,
	};
	const profileInfo = {
		followers: profile.followers,
		following: profile.following,
		repositories: profile.repositories
	};

	return (
		<section>
			<article className="p-7 min-w-max flex flex-col flex-grow gap-4 justify-evenly md:gap-4 lg:gap-1 xl:justify-start md:flex-row xl:flex-col items-center xl:items-center">
				<header>
					<img
						className="block w-auto h-64 md:h-72 lg:h-80 rounded-full"
						src={profile.avatarUrl}
						alt={profileImageAltText}
					/>
				</header>

				<ProfileCardBody
					profileIntro={ profileIntro }
					profileInfo={ profileInfo }
				/>
			</article>

			<footer className="p-7 min-w-max flex justify-center gap-x-16 xl:gap-x-14">
				<ProfileCardLinks profileLinks={ profileLinks } />
			</footer>
		</section>
	);
};

export default ProfileCard;
