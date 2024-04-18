
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <nav>
        <NavBar/>
      </nav>
      <div>
        <ItemListContainer greeting={'Bienvenidos a mi Store de Pokemon'}/>
      </div>
    </div>
  );
}

export default App;
