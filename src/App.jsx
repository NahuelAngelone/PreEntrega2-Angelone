import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos a mi Store de Pokemon'} />
      <Counter />
    </div>
  );
}

export default App;
