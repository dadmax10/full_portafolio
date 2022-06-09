import React from 'react'
import { LinkExt } from "../style/MetodologiaBasicaJs.element"
import GenericBlogs from '../hook/useBlogs'

const FuncionesAdd = () =>{
    return(
        <>
          <h2>ARRAY y sus Metodos</h2>
          <p>Los arrays son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar operaciones de recorrido y de mutación. Tanto la longitud como el
          tipo de los elementos de un array son variables.</p>
          <h3>CREACION DEL ARRAY</h3>
          
// Marta 0
// Sofia 1
        </>
    )
}

function MetodologiaBasicaJs() {
    
  return (
    <>
        {GenericBlogs('19/MAYO/2022', "Metodologia para aprender JavaScript Basica ", <FuncionesAdd/>)}
    </>
  )
}

export default MetodologiaBasicaJs