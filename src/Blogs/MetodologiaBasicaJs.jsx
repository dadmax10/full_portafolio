import React from 'react'
import { LinkExt } from "../style/MetodologiaBasicaJs.element"
import GenericBlogs from '../hook/useBlogs'

const FuncionesAdd = () =>{
    return(
        <>
          
          <p>Si estas Leyendo este blogs es porque quieres iniciar tu etapa de aprendizaje en este bonito lenguaje de programacion llamado javaScript
          <br />
          <br />
          <p>
            Como apenas estas empezando con este lenguaje y no sabes en que editor de codigo vas a trabajar, te traigo esta opcion que a mi parecer es la mejor 
            <br />
            <br />
            * Visual Studio Code - este es un editor donde podemos trabajar multiples lenguajes de programacion , es muy optimo y si sabemos los atajos de teclado , su terminal integrada nos hace el trabajo mucho mas optimo, aparte tiene una biblioteca de plugins que le podemos instalar y mejorar la experiencia a la hora de programar codigo
            <br />
            Puedes descargar el programa por su pagina oficial
            <LinkExt href="https://code.visualstudio.com/">Visual Studio Code</LinkExt>
              <br /><br />
            Bien ya teniendo nuestro editor de texto ahora si damos paso a las practicas que debes estudiar importante de este lenguaje de programacion
            <br /><br />
            * Todo sobre las variables - hay muchos tipos de variables y forma de implementarlo asi que ten encuenta todos este proceso 
            <br /><br />
            * Operadores JavaScript (Basicos) - estos te ayudan a ser procesos matematicos por el momento estudia los mas basico y por el paso del tiempo ve mejorandolo y aprendiendo operadores mas avanzados
            <br /><br />
            * Condicionales - Ayudan a poder interpretar nuestro codigo si se esta cumpliendo la condicion se ejecuta una accion y si no se ejecuta otra opcion muy util
            <br /><br />
            * Array - Te serviran muchisimo ya que puedes hacer una lista de datos y recorrerlos agregar mas informacion quitar informacion entre muchas cosas mas que te serviran muchisimo 
            <br /><br />
            * Blucles e Iteradores - Ayudan a automatizar tus codigos , a recorrer array a ser procesos continuos entre muchos mas 
            <br /><br />
            * POO(programacion orientada a objetos) - Se basa en el concepto de crear un modelo del problema de destino en sus programas. La programación orientada a objetos disminuye los errores y promociona la reutilización del código.
            <br /><br />
            * El DOM  - la estructura de objetos que genera el navegador en memoria para cada uno de los elementos de la página. Cómo ha evolucionado el DOM a lo largo del tiempo y cómo trabajar con el DOM en Javascript.
          </p>
          </p>
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