import { useState, useEffect } from "react";
import ItemDetailView from "./ItemDetailView.jsx";
import useLoading from "../../hooks/useLoading.jsx";
import { useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { getDoc, doc } from "firebase/firestore";
import db from "../../db/db.js";

const ItemDetailContainer = () => {
	const [carta, setCartas] = useState({})
	const { loading, loadingOn, loadingOff } = useLoading();
	const { idCarta } = useParams();

	const getProduct = async() => {
		const docRef = doc(db, "productos", idCarta)
		const dataDb = await getDoc(docRef)
		const data = { id: dataDb.id, ...dataDb.data() }

		setCartas(data)
	}

	useEffect( () => {
		const fetchProduct = async () => {
			loadingOn();
			await getProduct();
			loadingOff();
		};
		fetchProduct();
		}, [idCarta] )

	return (
		<div>	
			{loading ? <div><BeatLoader/></div> : <ItemDetailView carta={carta} />}
		</div>
	)
}

export default ItemDetailContainer;