const TypeItem = ({ pokemonName, getPokemon }) => {
	return (
		<div style={{ width: 150 }}>
			<button
				style={{ width: "100%", height: 25 }}
				onClick={() => getPokemon(pokemonName)}
			>
				{pokemonName}
			</button>
		</div>
	);
};

export default TypeItem;
