const CounterView = ({ contador, sumar, restar, addToCart }) => {

  return (
    <div>
      <p>Contador: {contador} </p>
      <button onClick={sumar}>+</button>
      <button onClick={restar}>-</button>
      <button onClick={ () => addToCart(contador) }>Agregar al carrito</button>
    </div>
  )
}

export default CounterView