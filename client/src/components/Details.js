import React, { useRef } from "react";
import GooButton from "./GooButton";

const Details = ({ pokemon, getPokemonsFromType, caught, catchOrRelease }) => {
	const imgRef = useRef(null);

	const typeColors = {
		bug: "#729f3f",
		dragon: "linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)",
		fairy: "#fdb9e9",
		fire: "#fd7d24",
		ghost: "#7b62a3",
		ground: "linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);",
		normal: "#a4acaf",
		psychic: "#f366b9",
		steel: "#9eb7b8",
		dark: "#707070",
		electric: "#eed535",
		fighting: "#d56723",
		flying: "linear-gradient(180deg,#3dc7ef 50%, #bdb9b8 50%)",
		grass: "#9bcc50",
		ice: "#51c4e7",
		poison: "#b97fc9",
		rock: "#a38c21",
		water: "#4592c4",
	};

	return (
		<div>
			{pokemon && (
				<div className="pokemon-container">
					<div
						className="pokemon-image"
						onMouseOver={() =>
							(imgRef.current.src = pokemon.sprites.back_default)
						}
						onMouseOut={() =>
							(imgRef.current.src = pokemon.sprites.front_default)
						}
					>
						<img
							ref={imgRef}
							src={pokemon.sprites.front_default}
							alt="pokemon"
						/>
					</div>
					<span className="pokemon-id">#{pokemon.id}</span>
					<h3>{pokemon.name}</h3>
					<div className="pokemon-info">
						<span>Height: {pokemon.height}</span>
						<span>Weight: {pokemon.weight}</span>
					</div>
					<div className="pokemon-types">
						{pokemon.types.map((item, i) => (
							<button
								key={i}
								onClick={() => getPokemonsFromType(item.type.name)}
								style={{ background: typeColors[item.type.name] }}
							>
								{item.type.name}
							</button>
						))}
					</div>
					<GooButton
						onClick={() => catchOrRelease(pokemon, !caught)}
						caught={caught}
					/>
				</div>
			)}
		</div>
	);
};

export default Details;
