import { useState, useEffect } from "react";
import fetchProfileData from "./services/githubProfile";

import SearchBar from "./components/SearchBar";
import Profile from "./components/Profile/index";
import LoadingSpinner from "./components/LoadingSpinner";
import Alert from "./components/Alert";

const App = () => {
  const [query, setQuery] = useState("");
  const [isProfileLoading, setIsProfileLoading] = useState(false);
  const [profile, setProfile] = useState(false);
  const [repositories, setRepositories] = useState(false);
  const [errorFetching, setErrorFetching] = useState(false);
  
  useEffect(() => {
    setErrorFetching(false);

    if (query) {
      setIsProfileLoading(true);
      fetchProfileData(query).then(data => {
        if (!data) {
          setErrorFetching(true);
        } else {
          setProfile(data?.profile);
          setRepositories(data?.repositories);
        }
  
        setIsProfileLoading(false);
      })
    }
  }, [query]);

  return (
    <section className="min-h-screen box-border py-4 px-6 bg-gray-200">
      <header className="py-2">
        <SearchBar setQuery={ setQuery } />
      </header>

      {
        errorFetching && (<Alert alertType={ "profileNotFound" } />)
      }

      <main className="min-h-full py-3">
				{
          isProfileLoading ? <LoadingSpinner /> : <Profile profile={ profile } repositories={ repositories } />
        }
			</main>
    </section>
  );
};

export default App;
