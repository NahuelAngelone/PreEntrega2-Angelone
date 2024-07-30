import obtenerProductos from "../../data/cartas.js";
import { useState, useEffect } from "react";
import ItemList from "./ItemList.jsx";
import useLoading from "../../hooks/useLoading.jsx";

const ItemListContainer = ({ greeting }) => {

  const [cartas, setCartas] = useState([])
  const { loading, loadingOn, loadingOff } = useLoading()

  useEffect(() => {
    loadingOn()
    obtenerProductos()
      .then((respuesta) => {
        setCartas(respuesta)
      })
      .catch((error) => {
        error.log(error)
      })
      .finally(() => {
        loadingOff()
      })
  }, []);
  
  return (
    <div>
      <h1>{greeting}</h1>
      {
        loading ? <div>Loading...</div> : <ItemList cartas={cartas} />
      }
    </div>
  )
}

export default ItemListContainer;