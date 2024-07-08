import { useState } from "react"
import CounterView from "./CounterView"

const Counter = () => {
  const [contador, setContador] = useState(0)

  const sumar = () => {
    setContador (contador + 1)
  }
  const restar = () => {
    setContador (contador - 1)
  }

  return (
    <CounterView contador={contador} sumar={sumar} restar={restar}/>
  )  
}       

export default Counter