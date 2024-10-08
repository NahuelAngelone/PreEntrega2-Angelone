import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Checkout from "./components/Checkout/Checkout";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";


function App() {

  return (
    <div className="bg-danger">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <ToastContainer theme="dark" />

          <Routes>
            <Route path="/" element={<ItemListContainer greeting={'Pokemon Store - EurEk4ards'} />} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer greeting={'Bienvenidos a mi Store de Pokemon'} />} />
            <Route path="/detalle/:idCarta" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>

  );
}

export default App;
