import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Counter from "./components/Counter/Counter";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos a mi Store de Pokemon'} />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
