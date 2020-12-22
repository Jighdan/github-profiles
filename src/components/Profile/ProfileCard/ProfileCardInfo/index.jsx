import ProfileCardInfoItem from "./ProfileCardInfoItem";

const ProfileCardInfo = ({ profileInfo }) => {
	const { followers, following, repositories } = profileInfo;

	return (
		<section className="flex flex-row justify-between gap-3">
			<ProfileCardInfoItem title="Followers" content={ followers } />
			<ProfileCardInfoItem title="Following" content={ following } />
			<ProfileCardInfoItem title="Repositories" content={ repositories } />
		</section>
	)
};

export default ProfileCardInfo;