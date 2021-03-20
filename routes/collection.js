const router = require("express").Router();

const collection = [];

router.get("/", (req, res) => {
	res.json(collection);
});

router.post("/catch", (req, res) => {
	const { pokemon } = req.body;

	collection.push(pokemon);

	res.json("Pokemon caught!!");
});

router.delete("/release/:id", (req, res) => {
	const { id } = req.params;

	const index = collection.findIndex((pokemon) => pokemon.id === parseInt(id));

	collection.splice(index, 1);

	res.json("Pokemon released!!");
});

module.exports = router;
