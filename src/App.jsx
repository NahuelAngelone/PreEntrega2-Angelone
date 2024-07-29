import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Counter from "./components/Counter/Counter";

function App() {

  const addToCart = (contador) => {
    console.log(contador)
  }

  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos a mi Store de Pokemon'} />
      <Counter stock={7} addToCart={addToCart}/>
    </div>
  );
}

export default App;
