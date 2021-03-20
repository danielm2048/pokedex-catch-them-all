const router = require("express").Router();
const pokemon = require("./pokemon");
const type = require("./type");
const collection = require("./collection");

router.use("/pokemon", pokemon);
router.use("/type", type);
router.use("/collection", collection);

module.exports = router;
