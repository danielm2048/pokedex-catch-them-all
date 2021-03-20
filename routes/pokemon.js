const router = require("express").Router();
const { getPokemon } = require("../utils/pokeAPI");

router.get("/:name", async (req, res) => {
	const { name } = req.params;
	const pokemon = await getPokemon(name);

	if (!pokemon) {
		return res.status(404).json("Pokemon not found");
	}

	const { front_default, back_default } = pokemon.sprites;
	const pokemonDetails = {
		id: pokemon.id,
		name: pokemon.name,
		height: pokemon.height,
		weight: pokemon.weight,
		sprites: { front_default, back_default },
		types: pokemon.types,
	};

	res.json(pokemonDetails);
});

module.exports = router;
