import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Search = ({ getPokemon }) => {
	const [search, setSearch] = useState("");

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		getPokemon(search.toLowerCase());
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Enter ID or Name..."
				value={search}
				onChange={handleChange}
				required
			/>
			<SearchButton />
		</form>
	);
};

export default Search;
