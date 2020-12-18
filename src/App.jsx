import { useState, useEffect } from "react";
import fetchProfile from "./services/githubProfile";
import SearchBar from "./components/SearchBar";
import Profile from "./components/Profile/Profile";

const App = () => {
  // Remove default state on production
  const [query, setQuery] = useState("robertrm0");
  const [isProfileLoading, setIsProfileLoading] = useState(true);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    fetchProfile(query)
      .then(data => {
        setProfile(data);
        setIsProfileLoading(false);
      });
  }, [query]);

  return (
    <main className="min-h-screen box-border bg-gray-200">
      <header>
        <SearchBar setQuery={ setQuery } setIsProfileLoading={ setIsProfileLoading } />
      </header>
      {
        isProfileLoading && profile !== null ? <h1>Profile Loading</h1> : <Profile profile={ profile } />
      }
    </main>
  );
};

export default App;
