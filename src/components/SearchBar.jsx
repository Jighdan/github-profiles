import { useState } from "react";

const SearchBar = ({ setQuery, setIsProfileLoading }) => {
	const [currentQuery, setCurrentQuery] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		setQuery(currentQuery);
		setIsProfileLoading(true);
	};

	return (
		<form onSubmit={ handleSubmit }>
			<label className="invisible" htmlFor="searchbar">GitHub Profile to Lookup</label>
			<input
				value={ currentQuery }
				onChange={ (event) => setCurrentQuery(event.target.value) }
				name="searchBar"
				type="text"
				spellCheck="false"
				placeholder="Lookup a GitHub profile."
			/>

			<input type="submit" value="Search" />
		</form>
	)
};

export default SearchBar;