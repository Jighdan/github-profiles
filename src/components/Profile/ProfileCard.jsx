import { ReactComponent as OpenIcon } from "../../assets/icons/open.svg";

const ProfileCard = ({ profile }) => {
	const profileImageAltText = `${profile.login}'s profile.`;
	const profileBio = profile.bio ? `"${profile.bio}"` : "";

	return (
		<article className="p-7 min-w-max flex flex-col flex-grow gap-4 justify-evenly md:gap-4 lg:gap-1 xl:justify-start md:flex-row xl:flex-col items-center xl:items-center">
			<img className="block w-auto h-56 md:h-64 lg:h-72 rounded-full" src={ profile.avatarUrl } alt={ profileImageAltText } />

			<section className="flex flex-col justify-evenly items-center md:items-start">
				<header className="">
					<h1 className="text-4xl lg:text-5xl font-bold">{ profile.login }</h1>
					<h2 className="text-lg lg:text-xl font-semibold text-grey uppercase">{ profile.name }</h2>
				</header>

				<p className="my-2 lg:my-4 font-light">"{ profileBio }"</p>

				<aside className="flex flex-row justify-between">
					<section className="pr-2 flex flex-col items-center font-light tracking-tight">
						<h3>Followers</h3>
						<p>{ profile.followers }</p>
					</section>

					<section className="pr-2 flex flex-col items-center font-light tracking-tight">
						<h3>Following</h3>
						<p>{ profile.following }</p>
					</section>

					<section className="pr-2 flex flex-col items-center font-light tracking-tight">
						<h3>Repositories</h3>
						<p>{ profile.repositories }</p>
					</section>
				</aside>

				<a className="justify-self-center" href={ profile.url } target="_blank" rel="noopener noreferrer">
					<OpenIcon />
				</a>
			</section>
		</article>
	);
};

export default ProfileCard;
