import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";



const Cart = () => {
	const { carrito, precioTotal, borrarProducto, vaciarCarrito } = useContext(CartContext)

	if(carrito.length ===0){
		return (
			<div className="d-flex justify-content-center">
				<h2>Carrito vacio</h2>
				<Link to="/" className="btn btn-dark">Inicio</Link>
			</div>
		)
	}
	
	return (
		<div className="container mt-4">
      <div className="row">
        {carrito.length === 0 ? (
          <div className="col text-center">
            <h2>Tu carrito está vacío</h2>
          </div>
        ) : (
          carrito.map((productoCarrito) => (
            <div className="col-md-4 mb-3" key={productoCarrito.id} style={{ maxWidth: '200px', padding: '10px' }}>
              <div className="card" >
                <img src={productoCarrito.imagen} className="card-img-top" alt={productoCarrito.nombre} />
                <div className="card-body bg-secondary">
                  <h5 className="card-title">{productoCarrito.nombre}</h5>
                  <p className="card-text">Cantidad: {productoCarrito.cantidad}</p>
                  <p className="card-text">Precio c/u: ${productoCarrito.precio}</p>
                  <p className="card-text">Precio: ${productoCarrito.precio * productoCarrito.cantidad}</p>
                  <button className="btn btn-danger" onClick={() => borrarProducto(productoCarrito.id)}>
                    Borrar
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="d-flex justify-content-between mt-4">
        <h2>Total: ${precioTotal()}</h2>
        <div>
          <button className="btn btn-dark me-2" onClick={vaciarCarrito}>Vaciar Carrito</button>
          <Link className="btn btn-dark" to="/checkout">Checkout</Link>
        </div>
      </div>
    </div>
	)
};

export default Cart;