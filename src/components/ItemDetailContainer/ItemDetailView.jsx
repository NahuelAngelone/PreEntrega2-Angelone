import Counter from "../Counter/Counter";

const addToCart = (contador) => {
	console.log(contador)
}

const ItemDetailView = ({carta}) => {
	return (
		<div>
			<img src={carta.imagen} alt="" width={300} />
			<h2>{carta.nombre}</h2>
			<h3>{carta.descripción}</h3>
			<Counter stock={carta.stock} addToCart={addToCart}/>
		</div>
	)
}

export default ItemDetailView;

