import { useContext } from "react";
import { CartContext } from "../../context/CartContext";



const Cart = () => {
	const { carrito, precioTotal, borrarProducto, vaciarCarrito } = useContext(CartContext)

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
						<button onClick={ () => borrarProducto (productoCarrito.id)}>borrar</button>
					</li>
				))
				}
			</ul>
			<h2>Precio Total: {precioTotal()} </h2>
			<button onClick={vaciarCarrito}>Vaciar Carrito</button>
		</div>
	)
};

export default Cart;