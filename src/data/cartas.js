


const cartas = [
	{
		id: "1",
		nombre: "Blastoise",
		descripción: "Carta especial de Blastoise con habilidades acuáticas impresionantes.",
		precio: "24.99",
		categoria: "agua",
		stock: "8",
		imagen: "https://example.com/images/blastoise_ex.jpg"
	},
	{
		id: "2",
		nombre: "Gyarados",
		descripción: "Carta rara de Gyarados con poderosos ataques de agua.",
		precio: "27.99",
		categoria: "agua",
		stock: "6",
		imagen: "https://example.com/images/gyarados_gx.jpg"
	},
	{
		id: "3",
		nombre: "Lapras",
		descripción: "Carta holográfica de Lapras con movimientos acuáticos devastadores.",
		precio: "22.99",
		categoria: "agua",
		stock: "9",
		imagen: "https://example.com/images/lapras_v.jpg"
	},
	{
		id: "4",
		nombre: "Charizard",
		descripción: "Carta rara de Charizard con ataques de fuego devastadores.",
		precio: "29.99",
		categoria: "fuego",
		stock: "5",
		imagen: "https://example.com/images/charizard_gx.jpg"
	},
	{
		id: "5",
		nombre: "Moltres",
		descripción: "Carta especial de Moltres con habilidades de fuego poderosas.",
		precio: "25.99",
		categoria: "fuego",
		stock: "7",
		imagen: "https://example.com/images/moltres_ex.jpg"
	},
	{
		id: "6",
		nombre: "Flareon",
		descripción: "Carta holográfica de Flareon con ataques de fuego rápidos.",
		precio: "20.99",
		categoria: "fuego",
		stock: "10",
		imagen: "https://example.com/images/flareon_v.jpg"
	},
	{
		id: "7",
		nombre: "Venusaur",
		descripción: "Carta holográfica de Venusaur con ataques de planta masivos.",
		precio: "26.99",
		categoria: "planta",
		stock: "6",
		imagen: "https://example.com/images/venusaur_vmax.jpg"
	},
	{
		id: "8",
		nombre: "Leafeon",
		descripción: "Carta rara de Leafeon con habilidades de planta versátiles.",
		precio: "23.99",
		categoria: "planta",
		stock: "8",
		imagen: "https://example.com/images/leafeon_gx.jpg"
	},
	{
		id: "9",
		nombre: "Celebi",
		descripción: "Carta especial de Celebi con ataques de planta y poderes curativos.",
		precio: "21.99",
		categoria: "planta",
		stock: "7",
		imagen: "https://example.com/images/celebi_v.jpg"
	}
]

const obtenerProductos = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(cartas)
		}, 2000)
	})
}

export default obtenerProductos;