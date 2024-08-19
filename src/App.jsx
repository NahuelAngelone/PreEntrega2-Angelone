import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

function App() {

  return (
    <div className="bg-danger">
      <BrowserRouter>
        <CartProvider>
          <NavBar />

          <Routes>
            <Route path="/" element={<ItemListContainer greeting={'Bienvenidos a mi Store de Pokemon'} />} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer greeting={'Bienvenidos a mi Store de Pokemon'} />} />
            <Route path="/detalle/:idCarta" element={<ItemDetailContainer />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>

  );
}

export default App;
