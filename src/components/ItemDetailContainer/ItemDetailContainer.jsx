import { useState, useEffect } from "react";
import obtenerProductos from "../../data/cartas.js";
import ItemDetailView from "./ItemDetailView.jsx";
import useLoading from "../../hooks/useLoading.jsx";

const ItemDetailContainer = () => {
	const [carta, setCartas] = useState({})
	const { loading, loadingOn, loadingOff, loadingView} = useLoading();

	useEffect( () => {
		loadingOn()
		obtenerProductos()
			.then((data)=> {
				const cartaEncontrada = data.find( (cartaData) => cartaData.id === "1")
				setCartas(cartaEncontrada)
			})
			.finally(() => {
				loadingOff()
			})
		}, [] )

	return (
		<div>	
			{loading ? loadingView : <ItemDetailView carta={carta} />}
		</div>
	)
}

export default ItemDetailContainer;