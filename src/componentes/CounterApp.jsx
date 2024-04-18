import { useState } from "react"

const CounterApp = ({value}) => {

  const [ counter, setCounter] = useState (value);

  const handleAdd = () => setCounter(counter + 1);
  
  const handleSub = () => setCounter(counter - 1);

  const handleRes = () => setCounter(value);


    return (
        <div>
        <h1>Counter app</h1>
        <h2>{counter}</h2>
        <button onClick={handleAdd}> +1 </button>
        <button onClick={handleSub}> -1 </button>
        <button onClick={handleRes}> Reset </button>
        </div>
    )

}

export default CounterApp