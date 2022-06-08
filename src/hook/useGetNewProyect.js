import React,{useState} from 'react'
import andres from "../assets/image/andres.jpg"


const proyectInfo = [
    {
      id: 1,
      img: andres,
      link: "#"
    },
    {
      id: 2,
      img: andres,
      link: "#"
    },
    {
      id: 3,
      img: andres,
      link: "#"
    },
  ];




function useGetNewProyect() {
  const [proyectNew, setProyectNew] = useState(proyectInfo)
  return proyectNew
}

export default useGetNewProyect