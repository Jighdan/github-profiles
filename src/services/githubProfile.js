import { constructProfile, constructRepositories } from "./profileConstructors";

const baseApi = "https://api.github.com/users/";

const fetchProfileData = async (profileName) => {
	const profileApiUrl = `${baseApi}${profileName}`;
	const repositoriesApiUrl = `${profileApiUrl}/repos`;

	try {
		const profileResponse = await fetch(profileApiUrl);
		const repositoriesResponse = await fetch(repositoriesApiUrl);

		const profileData = await profileResponse.json();
		const repositoriesData = await repositoriesResponse.json();

		// Handling not found GitHub profiles
		if (profileData.message) {
			return false;
		}

		// Constructing the data
		const repositories = constructRepositories(repositoriesData);
		const profile = constructProfile(profileData, repositories.length);

		return { profile, repositories };
	} catch (error) {
		return null;
	}
};

export default fetchProfileData;
