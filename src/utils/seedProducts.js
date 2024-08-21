import { addDoc, collection } from "firebase/firestore"
import db from "../db/db.js"

const cartas = [
	{
		id: "1",
		nombre: "Blastoise",
		descripción: "Carta especial de Blastoise con habilidades acuáticas impresionantes.",
		precio: "24.99",
		categoria: "agua",
		stock: "8",
		imagen: "https://pkmncards.com/wp-content/uploads/clb_en_003-blastoise.jpg"
	},
	{
		id: "2",
		nombre: "Gyarados",
		descripción: "Carta rara de Gyarados con poderosos ataques de agua.",
		precio: "27.99",
		categoria: "agua",
		stock: "6",
		imagen: "https://www.pokemon.com/static-assets/content-assets/cms2/img/cards/web/XY12/XY12_EN_34.png"
	},
	{
		id: "3",
		nombre: "Lapras",
		descripción: "Carta holográfica de Lapras con movimientos acuáticos devastadores.",
		precio: "22.99",
		categoria: "agua",
		stock: "9",
		imagen: "https://www.pokemon.com/static-assets/content-assets/cms2/img/cards/web/XY1/XY1_EN_35.png"
	},
	{
		id: "4",
		nombre: "Charizard",
		descripción: "Carta rara de Charizard con ataques de fuego devastadores.",
		precio: "29.99",
		categoria: "fuego",
		stock: "5",
		imagen: "https://pkmncards.com/wp-content/uploads/clc_en_003-charizard.jpg"
	},
	{
		id: "5",
		nombre: "Moltres",
		descripción: "Carta especial de Moltres con habilidades de fuego poderosas.",
		precio: "25.99",
		categoria: "fuego",
		stock: "7",
		imagen: "https://pkmncards.com/wp-content/uploads/h20.jpg"
	},
	{
		id: "6",
		nombre: "Flareon",
		descripción: "Carta holográfica de Flareon con ataques de fuego rápidos.",
		precio: "20.99",
		categoria: "fuego",
		stock: "10",
		imagen: "https://pkmncards.com/wp-content/uploads/h07.jpg"
	},
	{
		id: "7",
		nombre: "Venusaur",
		descripción: "Carta holográfica de Venusaur con ataques de planta masivos.",
		precio: "26.99",
		categoria: "planta",
		stock: "6",
		imagen: "https://pkmncards.com/wp-content/uploads/clv_en_003-venusaur-1.jpg"
	},
	{
		id: "8",
		nombre: "Leafeon",
		descripción: "Carta rara de Leafeon con habilidades de planta versátiles.",
		precio: "23.99",
		categoria: "planta",
		stock: "8",
		imagen: "https://pkmncards.com/wp-content/uploads/en_US-Promo_SM-SM237-leafeon.jpg"
	},
	{
		id: "9",
		nombre: "Celebi",
		descripción: "Carta especial de Celebi con ataques de planta y poderes curativos.",
		precio: "21.99",
		categoria: "planta",
		stock: "7",
		imagen: "https://pkmncards.com/wp-content/uploads/celebi-skyridge-sk-145.jpg"
	}
]

const seedProducts = () => {
    cartas.map(({id, ...rest})=> {
        const productosRef = collection(db, "productos")
        addDoc(productosRef, rest)
    })
    console.log("exito")
}

seedProducts();