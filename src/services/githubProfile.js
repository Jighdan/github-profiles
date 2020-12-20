const baseApi = "https://api.github.com/users/";

const fetchProfileData = async (profileName) => {
	const profileApiUrl = `${baseApi}${profileName}`;
	const profileRepositoriesApiUrl = `${profileApiUrl}/repos`;

	try {
		const profileResponse = await fetch(profileApiUrl);
		const profileRepositoriesResponse = await fetch(profileRepositoriesApiUrl);

		const profileData = await profileResponse.json();
		const profileRepositoriesData = await profileRepositoriesResponse.json();

		// Handling not found profiles
		if (profileData.message) {
			return false;
		}

		return { profileData, profileRepositoriesData };
	} catch (error) {
		return null;
	}
};

export default fetchProfileData;
