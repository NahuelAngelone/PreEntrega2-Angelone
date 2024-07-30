import { useState, useEffect } from "react";
import obtenerProductos from "../../data/cartas.js";
import ItemDetailView from "./ItemDetailView.jsx";

const ItemDetailContainer = () => {
	const [carta, setCartas] = useState({})

	useEffect( () => {
		obtenerProductos()
			.then((data)=> {
				const cartaEncontrada = data.find( (cartaData) => cartaData.id === "1")
				setCartas(cartaEncontrada)
			})
		}, [] )

	return (
		<div>	
			<ItemDetailView carta={carta} />
		</div>
	)
}

export default ItemDetailContainer;