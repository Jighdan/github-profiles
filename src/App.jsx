import { useState } from "react";
import fetchProfileData from "./services/githubProfile";
import SearchBar from "./components/SearchBar";
import Profile from "./components/Profile/Profile";
import LoadingSpinner from "./components/LoadingSpinner";

const App = () => {
  // Remove default state on production
  const [query, setQuery] = useState("jighdan");
  const [isProfileLoading, setIsProfileLoading] = useState(false);
	const [profile, setProfile] = useState(false);
	const [errorFetching, setErrorFetching] = useState(false);

	const fetchProfile = () => {
		setIsProfileLoading(true);
		fetchProfileData(query).then(data => {
			if (data === null) {
				setErrorFetching(true);
			} else {
				setProfile(data);
			}

			setIsProfileLoading(false);
		});
	};

	const render = () => {
		if (isProfileLoading) { return (<LoadingSpinner />) }
		if (errorFetching) { return (<h1>There was an error loading the profile</h1>) }
		if (!profile) { return (<h1>Begin by searching a profile. Try "Jighdan" ;-)</h1>) }
		return (<Profile profile={ profile } />)
	}

  return (
    <section className="min-h-screen box-border py-4 px-6 bg-gray-200">
      <header className="py-2">
        <SearchBar setQuery={ setQuery } fetchProfile={ fetchProfile } />
      </header>
      <main className="min-h-full py-3">
				{ render() }
			</main>
    </section>
  );
};

export default App;
