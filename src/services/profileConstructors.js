const repositoryFormatter = (repository) => ({
	id: repository?.id,
	archived: repository?.archived,
	createdAt: repository?.created_at,
	description: repository?.description,
	forks: repository?.forks,
	url: repository?.html_url,
	language: repository?.language,
	name: repository?.name,
	stars: repository?.stargazers_count,
	openIssues: repository?.open_issues,
	website: repository?.homepage
});

export const constructProfile = (profileData, numberOfProfileRepositories) => ({
	avatarUrl: profileData?.avatar_url,
	login: profileData?.login,
	name: profileData?.name,
	email: profileData?.email,
	location: profileData?.location,
	bio: profileData?.bio,
	website: profileData?.blog,
	followers: profileData?.followers,
	following: profileData?.following,
	repositories: numberOfProfileRepositories,
	githubUrl: profileData?.html_url,
	twitter: profileData?.twitter_username
});

export const constructRepositories = (profileRepositoriesData) => (
	// Filter by Repositories that are not forks
	profileRepositoriesData
		.filter(repository => !repository.fork)
		.map(repository => repositoryFormatter(repository))
);