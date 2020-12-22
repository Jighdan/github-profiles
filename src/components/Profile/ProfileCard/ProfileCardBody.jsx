import ProfileCardInfo from "./ProfileCardInfo/index";

const ProfileCardBody = ({ profileIntro, profileInfo }) => {

	return (
		<section>
			<section>
				<h1 className="text-5xl lg:text-6xl font-bold">{ profileIntro.login }</h1>
				<h2 className="text-xl lg:text-2xl font-semibold text-grey uppercase">{ profileIntro.name }</h2>
			</section>

			<p className="my-2 lg:my-4 font-light">{ profileIntro.bio }</p>

			<ProfileCardInfo profileInfo={ profileInfo } />
		</section>
	)
};

export default ProfileCardBody;