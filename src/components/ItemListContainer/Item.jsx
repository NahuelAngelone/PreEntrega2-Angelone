import { Link } from "react-router-dom";

const Item = ({ carta }) => {
	return (
		<Link to={`/detalle/${carta.id}`}>
			<div className="card bg-secondary text-center align-items-center justify-content-center" style={{ padding: '10px'}}>
					<img src={carta.imagen} alt="" style={{ maxWidth: '100px' }} className="card-img-top" />
			<div className="card-body">
					<p className="card-title">{carta.nombre}</p>
			</div>
			</div>
		</Link>

	)
}

export default Item;