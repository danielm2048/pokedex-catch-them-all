import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import Search from "./components/Search";
import Details from "./components/Details";
import TypeList from "./components/TypeList";
import CollectionList from "./components/CollectionList";
import Pagination from "./components/Pagination";
import Loader from "./components/Loader";

function App() {
	const [pokemon, setPokemon] = useState(null);
	const [pokemonsFromType, setPokemonsFromType] = useState([]);
	const [isCaught, setIsCaught] = useState(false);
	const [collection, setCollection] = useState([]);
	const [showCollection, setShowCollection] = useState(false);
	const [typesPerPage] = useState(15);
	const [currentPage, setCurrentPage] = useState(1);
	const [loading, setLoading] = useState(false);

	const getPokemon = async (name) => {
		try {
			setLoading(true);
			const res = await axios.get(`/api/pokemon/${name}`);
			setLoading(false);

			setPokemon(res.data);
			setPokemonsFromType([]);
		} catch (err) {
			alert(err.response.data);
		}
	};

	const getPokemonsFromType = async (type) => {
		setLoading(true);
		const res = await axios.get(`/api/type/${type}`);
		setLoading(false);

		setCurrentPage(1);
		setShowCollection(false);
		setPokemonsFromType(res.data);
	};

	const catchOrRelease = async (pokemon, shouldCatch) => {
		if (shouldCatch) {
			setLoading(true);
			await axios.post("/api/collection/catch", {
				pokemon,
			});
			setLoading(false);

			setIsCaught(true);
		} else {
			await axios.delete(`/api/collection/release/${pokemon.id}`);

			setIsCaught(false);
		}
	};

	useEffect(() => {
		const func = async () => {
			setLoading(true);
			const res = await axios.get("/api/collection/");
			setLoading(false);
			setCollection(res.data);

			if (res.data.length === 0) {
				setShowCollection(false);
			}

			if (pokemon && res.data.length > 0) {
				setIsCaught(
					res.data.findIndex((item) => item.id === pokemon.id) !== -1
				);
			}
		};
		func();
	}, [pokemon, isCaught]);

	const indexOfLastType = currentPage * typesPerPage;
	const indexOfFirstType = indexOfLastType - typesPerPage;
	const currentTypes = pokemonsFromType.slice(
		indexOfFirstType,
		indexOfLastType
	);

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
		window.scrollTo(0, 0);
	};

	return (
		<div className="App">
			<div className="App-header">
				<h1>Gotta Catch Them All!</h1>
				<Search getPokemon={getPokemon} />
				<button onClick={() => setShowCollection(!showCollection)}>
					{showCollection ? "Hide" : "Show"} Collection
				</button>
				{pokemonsFromType.length === 0 && showCollection && (
					<CollectionList
						pokemon={pokemon}
						getPokemonsFromType={getPokemonsFromType}
						catchOrRelease={catchOrRelease}
						collection={collection}
					/>
				)}
				{loading ? (
					<Loader />
				) : (
					pokemonsFromType.length === 0 &&
					!showCollection && (
						<Details
							pokemon={pokemon}
							getPokemonsFromType={getPokemonsFromType}
							caught={isCaught}
							catchOrRelease={catchOrRelease}
						/>
					)
				)}
				<TypeList pokemonsFromType={currentTypes} getPokemon={getPokemon} />
				{pokemonsFromType.length > 0 && (
					<Pagination
						perPage={typesPerPage}
						total={pokemonsFromType.length}
						paginate={paginate}
						curr={currentPage}
					/>
				)}
			</div>
		</div>
	);
}

export default App;
