import { useState } from "react"

const Counter = () => {
  const [contador, setContador] = useState(0)

  const sumar = () => {
    setContador (contador + 1)
  }
  const restar = () => {
    setContador (contador - 1)
  }

  return(
    <div>
      <p>Contador: {contador} </p>  
      <button onClick={sumar}>+</button>
      <button onClick={restar}>-</button>
    </div>
  )
}       

export default Counter