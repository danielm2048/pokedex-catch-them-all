const axios = require("axios");
const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";

const getPokemon = async (name) => {
	try {
		const res = await axios.get(`${POKEAPI_BASE_URL}/pokemon/${name}`);

		if (!res.data) {
			throw new Error("Not found");
		}

		return res.data;
	} catch (err) {
		console.error(err);
		return false;
	}
};

const getType = async (name) => {
	try {
		const res = await axios.get(`${POKEAPI_BASE_URL}/type/${name}`);

		return res.data;
	} catch (err) {
		console.error(err);
		return false;
	}
};

module.exports = {
	getPokemon,
	getType,
};
