import React,{useState} from 'react'

import img_rfa from "../assets/image/imgProyectos/rfa-mp3.png"
import img_toky from "../assets/image/imgProyectos/toky tienda.png"
import img_Emisora from "../assets/image/imgProyectos/EmisoraWeb.png"

//TODO : cambiar el array por la base de datos
const proyectInfo = [
    {
      id: 1,
      img: img_rfa,
      link: "https://reproductor-mp3.netlify.app"
    },
    {
      id: 2,
      img: img_toky,
      link: "https://compra-carrito.netlify.app"
    },
    {
      id: 3,
      img: img_Emisora,
      link: "https://emisora-web.netlify.app"
    },
    

  ];




function useGetNewProyect() {
  const [proyectNew, setProyectNew] = useState(proyectInfo)
  return proyectNew
}

export default useGetNewProyect