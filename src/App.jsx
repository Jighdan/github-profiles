import { useState, useEffect } from "react";

const App = () => {
  const baseApi = "https://api.github.com/users/";

  const [query, setQuery] = useState("jighdan");
  const [profileData, setProfileData] = useState({});

  const fetchProfileData = async (profileName) => {
    const response = await fetch(`${baseApi}${profileName}`);
    const data = await response.json();
    console.info(data)
    return data
  };

  useEffect(() => {
    fetchProfileData(query);
  }, [query]);

  return (
    <h1>App Mount</h1>
  );
};

export default App;
