import TypeItem from "./TypeItem";

const TypeList = ({ pokemonsFromType, getPokemon }) => {
	if (!pokemonsFromType) {
		return null;
	}

	return (
		<ul>
			{pokemonsFromType.map((item, i) => (
				<li key={i}>
					<TypeItem pokemonName={item.pokemon.name} getPokemon={getPokemon} />
				</li>
			))}
		</ul>
	);
};

export default TypeList;
