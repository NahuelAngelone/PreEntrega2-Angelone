import { Link } from "react-router-dom";

const Item = ({ carta }) => {
	return (
		<Link  to={`/detalle/${carta.id}`}>
			<img src={carta.imagen} alt="" width={100} />
			{carta.nombre}
		</Link>
		
	)
}

export default Item;