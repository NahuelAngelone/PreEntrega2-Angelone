import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer greeting={'Bienvenidos a mi Store de Pokemon'} />} />
        <Route path="/categoria/:idCategoria" element={<ItemListContainer greeting={'Bienvenidos a mi Store de Pokemon'} />} />
        <Route path="/detalle/:idCarta" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
