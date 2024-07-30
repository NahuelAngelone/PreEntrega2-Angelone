import Counter from "../Counter/Counter";

const addToCart = (contador) => {
	console.log(contador)
}

const ItemDetailView = ({ carta }) => {
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
						<Counter stock={carta.stock} addToCart={addToCart} />
					</div>
				</div>
			</div>
		</div >

	)
}

export default ItemDetailView;

