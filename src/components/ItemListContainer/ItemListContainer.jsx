import obtenerProductos from "../../data/cartas.js";
import { useState, useEffect } from "react";
import ItemList from "./ItemList.jsx";

const ItemListContainer = ({ greeting }) => {

  const [cartas, setCartas] = useState([])

  useEffect(() => {
    obtenerProductos()
      .then((respuesta) => {
        setCartas(respuesta)
      })
      .catch((error) => {
        error.log(error)
      })
      .finally(() => {
        console.log("finalizo la promesa")
      })
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList cartas={cartas} />
    </div>
  )
}

export default ItemListContainer;