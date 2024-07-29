import Item from "./Item";

const ItemList = ({ cartas }) => {
	return (
		<div>
			{cartas.map((carta) => (
				<Item key={carta.id} carta={carta}/>
			))}
		</div>
	)
}

export default ItemList;