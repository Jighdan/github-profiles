import ProfileCard from "./ProfileCard";
import ProfileRepositories from "./ProfileRepositories";

const Profile = ({ profile, repositories }) => {
	// Checks if no data was passed
	if (!profile || !repositories) {
		return (
			<h1>Start by searching your GitHub profile, or "Jighdan" for example ;-)</h1>
		)
	};

	return (
		<article className="bg-gray-100 flex flex-col xl:flex-row justify-center gap-4">
			<ProfileCard profile={ profile } />
			<ProfileRepositories repositories={ repositories } />
		</article>
	)
};

export default Profile;
