import Details from "./Details";

const CollectionList = ({
	getPokemonsFromType,
	catchOrRelease,
	collection,
}) => {
	return (
		<div className="list-container">
			<ul className="collection-list">
				{collection.map((pokemon, i) => (
					<li key={i} className="collection-item">
						<Details
							pokemon={pokemon}
							getPokemonsFromType={getPokemonsFromType}
							caught={true}
							catchOrRelease={catchOrRelease}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CollectionList;
