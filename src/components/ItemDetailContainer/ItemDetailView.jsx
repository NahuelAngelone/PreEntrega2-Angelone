import Counter from "../Counter/Counter";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


const ItemDetailView = ({ carta }) => {
	const { agregarProducto } = useContext(CartContext);
	const [ contadorOff, setContadorOff ] = useState(true);

	const addToCart = (contador) => {
		const productoCarrito = { ...carta, cantidad: contador }
		agregarProducto(productoCarrito);
		setContadorOff(false)
	};

	return (
		<div className="card mb-3 bg-secondary" style={{ maxWidth: '540px', padding: '10px' }}>
			<div className="row g-0">
				<div className="col-md-4">
					<img src={carta.imagen} alt="" width={300} className="img-fluid rouned-start" />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h4 className="card-title">{carta.nombre}</h4>
						<p className="car-text">{carta.descripción}</p>
						<p className="car-text">${carta.precio}</p>
						{contadorOff ? (
							<Counter stock={carta.stock} addToCart={addToCart} />
						) : (
							<Link to="/cart">Ir al carrito</Link>
						)}
					</div>
				</div>
			</div>
		</div >

	)
}

export default ItemDetailView;

