import { useState, useEffect } from "react";
import obtenerProductos from "../../data/cartas.js";
import ItemDetailView from "./ItemDetailView.jsx";
import useLoading from "../../hooks/useLoading.jsx";
import { useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";

const ItemDetailContainer = () => {
	const [carta, setCartas] = useState({})
	const { loading, loadingOn, loadingOff } = useLoading();
	const { idCarta } = useParams();

	useEffect( () => {
		loadingOn()
		obtenerProductos()
			.then((data)=> {
				const cartaEncontrada = data.find( (cartaData) => cartaData.id === idCarta)
				setCartas(cartaEncontrada)
			})
			.finally(() => {
				loadingOff()
			})
		}, [] )

	return (
		<div>	
			{loading ? <div><BeatLoader/></div> : <ItemDetailView carta={carta} />}
		</div>
	)
}

export default ItemDetailContainer;