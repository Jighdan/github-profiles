import { useState, useEffect } from "react";
import fetchProfile from "./services/githubProfile";
import Profile from "./components/Profile/Profile";

const App = () => {
  // Remove default state on production
  const [query, setQuery] = useState("jighdan");
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
      {
        isProfileLoading ? <h1>Profile Loading</h1> : <Profile profile={ profile } />
      }
    </main>
  );
};

export default App;
