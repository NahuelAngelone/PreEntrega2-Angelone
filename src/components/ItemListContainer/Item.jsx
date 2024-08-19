import { useState } from "react";
import { Link } from "react-router-dom";

const Item = ({ carta }) => {
	const [remarcar, setRemarcar] = useState(false)

	const handleMouseOver = () => {
		setRemarcar(true)
	};

	const handleMouseLeave = () => {
		setRemarcar(false)
	};

	const estiloCard = {
		transform: remarcar ? 'scale(1.3)' : 'scale(1)',
		Transition: 'transform 0.3s ease-in-out',
		padding: '10px'
	}


	return (
		<Link to={`/detalle/${carta.id}`}>
			<div onMouseOver={handleMouseOver} 
			onMouseLeave={handleMouseLeave} 
			className="card bg-secondary text-center align-items-center justify-content-center" 
			style={estiloCard}>
				<img src={carta.imagen} alt="" style={{ maxWidth: '100px' }} className="card-img-top" />
				<div className="card-body">
					<p className="card-title">{carta.nombre}</p>
				</div>
			</div>
		</Link>

	)
}

export default Item;