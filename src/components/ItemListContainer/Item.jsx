const Item = ({ carta }) => {
	return (
		<div>
			<img src={carta.imagen} alt="" width={100} />
			{carta.nombre}
		</div>
	)
}

export default Item;