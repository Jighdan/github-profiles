const ProfileCard = ({ profile }) => {
	const profileImageAltText = `${profile.login}'s profile.`;

	return (
		<article className="container max-w-md p-7">
			<section>
				<section className="">
					<img className="block h-56 rounded-full" src={ profile.avatarUrl } alt={ profileImageAltText } />
					<section className="">				
						<h1 className="text-4xl font-bold">{ profile.login }</h1>
						<h2 className="text-lg font-semibold text-grey uppercase">{ profile.name }</h2>
					</section>
				</section>

				<section className="flex-row">
					<section>
						<h3>Followers</h3>
						<p>{ profile.followers }</p>
					</section>

					<section>
						<h3>Following</h3>
						<p>{ profile.following }</p>
					</section>

					<section>
						<h3>Repositories</h3>
						<p>{ profile.repositories }</p>
					</section>
				</section>
			</section>

			<section>

			</section>
		</article>
	);
};

export default ProfileCard;
