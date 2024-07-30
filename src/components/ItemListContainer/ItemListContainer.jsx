import obtenerProductos from "../../data/cartas.js";
import { useState, useEffect } from "react";
import ItemList from "./ItemList.jsx";
import useLoading from "../../hooks/useLoading.jsx";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {

  const [cartas, setCartas] = useState([])
  const { loading, loadingOn, loadingOff } = useLoading()
  const { idCategoria } = useParams()

  useEffect(() => {
    loadingOn()
    obtenerProductos()
      .then((respuesta) => {
        if (idCategoria) {
          const cardFilter = respuesta.filter ( (carta) => carta.categoria === idCategoria)
          setCartas(cardFilter)
        } else {
          setCartas(respuesta)
        }
      })
      .catch((error) => {
        error.log(error)
      })
      .finally(() => {
        loadingOff()
      })
  }, [idCategoria]);

  return (
    <div>
      <h1 className="text-center align-items-center justify-content-center">{greeting}</h1>
      {
        loading ? <div>Loading...</div> : <ItemList cartas={cartas} />
      }
    </div>
  )
}

export default ItemListContainer;