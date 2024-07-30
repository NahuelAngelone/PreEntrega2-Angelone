import { useState } from "react"
import CounterView from "./CounterView"

const Counter = ({ stock, addToCart }) => {
  const [contador, setContador] = useState(0)

  const sumar = () => {
    if(contador < stock) {
    setContador(contador + 1)
    }
  }

  const restar = () => {
    if(contador > 1) {
    setContador(contador - 1)
    }
  }
  

  return (
    <CounterView contador={contador} sumar={sumar} restar={restar} addToCart={addToCart}/>
  )
}

export default Counter