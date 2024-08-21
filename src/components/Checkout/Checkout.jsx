import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import CheckoutView from "./CheckoutView";
import db from "../../db/db";



const Checkout = () => {
	const [datosForm, setDatosForm] = useState({
		nombre: "",
		telefono: "",
		email: "",
	});
	const [idOrden, setIdOrder] = useState(null)
	const { carrito, precioTotal } = useContext(CartContext)

	const handleChangeInput = (event) => {
		setDatosForm({ ...datosForm, [event.target.name]: event.target.value })
	};

	const handleSubmitForm = (event) => {
		event.preventDefault();
		const orden = {
			comprador: { ...datosForm },
			productos: [...carrito],
			fecha: Timestamp.fromDate(new Date()),
			total: precioTotal(),
		};

		sendOrder(orden);
	};

	const sendOrder = async (orden) => {
		try {
			const ordenesRef = collection(db, "ordenes")
			const ordenNumber = await addDoc(ordenesRef, orden);
			setIdOrder(ordenNumber.id)
		} catch (error) {
			console.log(error)
		}

	}

	return (
		<div>
			{
				idOrden ? (
					<div>
						<h2>Orden enviada</h2>
						<p>Numero de orden: {idOrden}</p>
					</div>
				) : (
					<CheckoutView
						datosForm={datosForm}
						handleChangeInput={handleChangeInput}
						handleSubmitForm={handleSubmitForm}
					/>
				)
			}
		</div>
	);
};
export default Checkout;

