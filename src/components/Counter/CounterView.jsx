const CounterView = ({ contador, sumar, restar }) => {

  return (
    <div>
      <p>Contador: {contador} </p>
      <button onClick={sumar}>+</button>
      <button onClick={restar}>-</button>
    </div>
  )
}

export default CounterView