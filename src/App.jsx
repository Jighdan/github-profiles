import { useState } from "react";
import fetchProfileData from "./services/githubProfile";
import SearchBar from "./components/SearchBar";
import Profile from "./components/Profile/Profile";
import LoadingSpinner from "./components/LoadingSpinner";
import Alert from "./components/Alert";

const App = () => {
  // Remove default state on production
  const [query, setQuery] = useState("jighdan");
  const [isProfileLoading, setIsProfileLoading] = useState(true);
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

  return (
    <section className="min-h-screen box-border py-4 px-6 bg-gray-200">
      <header className="py-2">
        <SearchBar setQuery={ setQuery } fetchProfile={ fetchProfile } />
      </header>

      {
        errorFetching && (<Alert alertType={ "profileNotFound" } />)
      }

      <main className="min-h-full py-3">
				{
          isProfileLoading ? <LoadingSpinner /> : <Profile profile={ profile } />
        }
			</main>
    </section>
  );
};

export default App;
