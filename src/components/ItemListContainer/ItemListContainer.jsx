
import { useState, useEffect } from "react";
import ItemList from "./ItemList.jsx";
import useLoading from "../../hooks/useLoading.jsx";
import { useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { getDocs, collection, query, where } from "firebase/firestore";
import db from "../../db/db.js";

const ItemListContainer = ({ greeting }) => {

  const [cartas, setCartas] = useState([])
  const { loading, loadingOn, loadingOff } = useLoading()
  const { idCategoria } = useParams()

  const getProducts = async () => {
    const productosRef = collection(db, "productos")
    const dataDb = await getDocs(productosRef)
    const data = dataDb.docs.map((productDb) => {
      return { id: productDb.id, ...productDb.data() };
    })
    setCartas(data)
  };

  const getProductsByCat = async () => {
    const productosRef = collection(db, "productos")
    const q = query(productosRef, where("categoria", "==", idCategoria))
    const dataDb = await getDocs(q)

    const data = dataDb.docs.map((productDb) => {
      return { id: productDb.id, ...productDb.data() };
    })

    setCartas(data);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        loadingOn();
        if (idCategoria) {
          await getProductsByCat();
        } else {
          await getProducts();
        }
      } finally {
        loadingOff();
      }
    };
    fetchData();
  }, [idCategoria]);

  return (
    <div>
      <h1 className="text-center align-items-center justify-content-center">{greeting}</h1>
      {
        loading ? <div><BeatLoader /></div> : <ItemList cartas={cartas} />
      }
    </div>
  )
}

export default ItemListContainer;