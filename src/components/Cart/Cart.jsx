import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";



const Cart = () => {
	const { carrito, precioTotal, borrarProducto, vaciarCarrito } = useContext(CartContext)

	if(carrito.length ===0){
		return (
			<div>
				Carrito vacio
				<Link to="/">Inicio</Link>
			</div>
		)
	}
	
	return (
		<div>
			<ul>
				{carrito.map((productoCarrito) => (
					<li>
						<img src={productoCarrito.imagen} width={150} />
						<p>{productoCarrito.nombre}</p>
						<p>Cantidad: {productoCarrito.cantidad}</p>
						<p>Precio c/u: ${productoCarrito.precio}</p>
						<p>Precio: ${productoCarrito.precio * productoCarrito.cantidad}</p>
						<button className="btn btn-dark" onClick={ () => borrarProducto (productoCarrito.id)}>borrar</button>
					</li>
				))
				}
			</ul>
			<h2>Precio Total: {precioTotal()} </h2>
			<button className="btn btn-dark" onClick={vaciarCarrito}>Vaciar Carrito</button>
			<Link className="btn btn-dark" to="/checkout">Checkout</Link>
		</div>
	)
};

export default Cart;