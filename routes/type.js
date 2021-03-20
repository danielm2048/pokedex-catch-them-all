const router = require("express").Router();
const { getType } = require("../utils/pokeAPI");

router.get("/:name", async (req, res) => {
	const { name } = req.params;

	const typeData = await getType(name);
	res.json(typeData.pokemon);
});

module.exports = router;
