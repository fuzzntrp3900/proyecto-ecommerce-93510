{/*definimos el array de productos */}
const products = [
  {
    id: "01",
    title: "Cartera Helix All Fold",
    price: 89.99,
    description: "Cartera de cuero de alta calidad con diseño elegante y funcional, perfecta para mantener tus tarjetas y efectivo organizados.",
    image: "https://res.cloudinary.com/dvdwxm4uv/image/upload/v1793925354/01_cartera_helix-removebg-preview_nqbzfq.png",
    category: "carteras"
  },
    {
    id: "02",
    title: "Bolsa de Viaje horizontal",
    price: 249.99,
    description: "La bolsa cuenta con cremallera extralarga que ofrece un acceso fácil y seguro a tus pertenencias, mientras que su diseño elegante y minimalista la convierte en un accesorio de moda imprescindible para cualquier ocasión.",
    image: "https://res.cloudinary.com/dvdwxm4uv/image/upload/v1793925356/02_bolsa_viaje_horizontal-removebg-preview_ycr1yr.png",
    category: "bolsos"
  },
    {
    id: "03",
    title: "Bolsa Weekender",
    price: 199.95,
    description: "Nuestra bolsa weekender, diseñada para viajes cortos y escapadas de fin de semana, combina estilo y funcionalidad en un solo accesorio.",
    image: "https://res.cloudinary.com/dvdwxm4uv/image/upload/v1793925343/03_bolsa_weekender-removebg-preview_oiuvbq.png",
    category: "bolsos"
  },
    {
    id: "04",
    title: "Cartera Billfold",
    price: 69.95,
    description: "Nuestra billetera billfold, diseñada para mantener tus tarjetas y efectivo organizados de manera elegante y funcional.",
    image: "https://res.cloudinary.com/dvdwxm4uv/image/upload/v1793925345/04_cartera_billfold-removebg-preview_siabzw.png",
    category: "carteras"
  },
     {
    id: "05",
    title: "Funda SlimLink para iPhone",
    price: 16.99,
    description: "Nuestra funda SlimLink para iPhone, diseñada para proteger tu dispositivo con estilo y funcionalidad, mientras mantiene un perfil delgado y elegante.",
    image: "https://res.cloudinary.com/dvdwxm4uv/image/upload/v1793925347/05_funda_slimlink_iphone-removebg-preview_ew42ir.png",
    category: "fundas"
  },
    {
    id: "06",
    title: "Bolso Cherokee de cuero",
    price: 354.99,
    description: "Nuestro bolso Cherokee de cuero, hecho a mano con materiales de alta calidad, combina estilo y funcionalidad para llevar tus pertenencias con elegancia y comodidad.",
    image: "https://res.cloudinary.com/dvdwxm4uv/image/upload/v1793925352/06_bolso_cherokee-removebg-preview_rh4w9l.png",
    category: "bolsos"
  },
    {
    id: "07",
    title: "Tarjetero Travel Folio",
    price: 149.25,
    description: "Funda para pasaporte y documentos de viaje, diseñada para mantener tus pertenencias organizadas y seguras durante tus aventuras",
    image: "https://res.cloudinary.com/dvdwxm4uv/image/upload/v1793924908/07_tarjetero_travel_l9pxlu.png",
    category: "carteras"
  },
    {
    id: "08",
    title: "Equipaje de mano compacto",
    price: 300.00,
    description: "Nuestro equipaje de mano compacto que se desliza con facilidad por los pasillos del aeropuerto y se adapta a los compartimentos superiores de la mayoría de las aerolíneas",
    image: "https://res.cloudinary.com/dvdwxm4uv/image/upload/v1793925349/08_equipaje_mano_compacto-removebg-preview_yjblke.png",
    category: "viaje"
  },
];

{/*promesa que invoca el array*/}
export const getProducts=()=>{
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(products);
		}, 2000)
	});
}
