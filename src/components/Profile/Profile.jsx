import ProfileCard from "./ProfileCard";
import ProfileRepositories from "./ProfileRepositories";

const Profile = ({ profile }) => {
	const { profileData, profileRepositoriesData } = profile;

	const constructedProfileRepositories = profileRepositoriesData
		.filter(repository => !repository.fork)
		.map(repository => (
			{
				id: repository?.id,
				archived: repository?.archived,
				createdAt: repository?.created_at,
				description: repository?.description,
				forks: repository?.forks,
				url: repository?.html_url,
				language: repository?.language,
				name: repository?.name,
				stars: repository?.stargazers_count,
				openIssues: repository?.open_issues
			}
		));

	const constructedProfile = {
		avatarUrl: profileData?.avatar_url,
		login: profileData?.login,
		name: profileData?.name,
		followers: profileData?.followers,
		following: profileData?.following,
		repositories: constructedProfileRepositories.length
	};

	return (
		<article className="bg-gray-100">
			<ProfileCard profile={ constructedProfile } />
			<ProfileRepositories repositories={ constructedProfileRepositories } />
		</article>
	)
};

export default Profile;

/*
	{
		avatar_url: "https://avatars2.githubusercontent.com/u/55284053?v=4",
		bio: "Fun fun stuff",
		blog: "jighdan.github.io/",
		company: null,
		created_at: "2019-09-13T13:13:11Z",
		email: null,
		events_url: "https://api.github.com/users/Jighdan/events{/privacy}",
		followers: 17,
		followers_url: "https://api.github.com/users/Jighdan/followers",
		following: 59,
		following_url: "https://api.github.com/users/Jighdan/following{/other_user}",
		gists_url: "https://api.github.com/users/Jighdan/gists{/gist_id}",
		gravatar_id: "",
		hireable: true,
		html_url: "https://github.com/Jighdan",
		id: 55284053,
		location: "Dominican Republic",
		login: "Jighdan",
		name: "Reinny Almonte",
		node_id: "MDQ6VXNlcjU1Mjg0MDUz",
		organizations_url: "https://api.github.com/users/Jighdan/orgs",
		public_gists: 1,
		public_repos: 31,
		received_events_url: "https://api.github.com/users/Jighdan/received_events",
		repos_url: "https://api.github.com/users/Jighdan/repos",
		site_admin: false,
		starred_url: "https://api.github.com/users/Jighdan/starred{/owner}{/repo}",
		subscriptions_url: "https://api.github.com/users/Jighdan/subscriptions",
		twitter_username: "jighdan",
		type: "User",
		updated_at: "2020-12-11T22:21:47Z",
		url: "https://api.github.com/users/Jighdan"
	}
*/