import CounterApp from "./CounterApp";
import Greeting from "./Greeting";
import Menu from "./Menu";

function App() {
  return (
    <div>
      <Greeting/>
      <CounterApp value={0}/>
      <h1>mi app</h1>
      <Menu/>
    </div>
  )
}

export default App;
