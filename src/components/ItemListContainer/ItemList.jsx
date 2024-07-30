import Item from "./Item";

const ItemList = ({ cartas }) => {
	return (
		<div className="card-group row row-cols-1 row-cols-md-6 g-4" style={{ padding: '10px'}}>
			{cartas.map((carta) => (
				<Item key={carta.id} carta={carta}/>
			))}
		</div>
	)
}

export default ItemList;