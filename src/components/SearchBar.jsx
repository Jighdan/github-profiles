import { useState } from "react";

const SearchBar = ({ setQuery }) => {
	const [newQuery, setNewQuery] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		if (newQuery !== "") {
			setQuery(newQuery);
		}
	};

	return (
		<>
			<form onSubmit={ handleSubmit } className="max-w-full flex flex-row">
				<label className="hidden" htmlFor="searchbar">
					GitHub Profile to Lookup
				</label>
				<input
					value={newQuery}
					onChange={ (event) => setNewQuery(event.target.value) }
					className="flex-grow py-2 px-3 rounded-l-lg"
					name="searchBar"
					type="text"
					spellCheck="false"
					placeholder="Search User ..."
					required
					autoComplete="off"
				/>

				<input type="submit" className="py-2 px-4 rounded-r-lg" value="Search" />
			</form>
		</>
	);
};

export default SearchBar;
