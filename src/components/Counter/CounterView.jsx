

const CounterView = ({ contador, sumar, restar, addToCart }) => {

  return (
    <div>
      <p>Contador: {contador} </p>
      <button className="btn btn-dark" onClick={sumar}>+</button>
      <button className="btn btn-dark" onClick={restar}>-</button>
      <button className="btn btn-dark" onClick={ () => addToCart(contador) }>Agregar al carrito</button>
    </div>
  )
}

export default CounterView