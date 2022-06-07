import React from 'react'
import NewProyect from '../components/NewProyect'
import {ContainerNewProyect, TextProyect, DescProyect, LinkProyectText, TextProyectOculto} from "../style/ContainerProyecto.element"



function ContainerProyect() {
  return (
    <>
        <ContainerNewProyect>
            <TextProyectOculto>Proyectos</TextProyectOculto>
            <TextProyect>My Proyectos</TextProyect>
            <DescProyect>Galeria de algunos de mis proyectos de desarrollo web , Diseño web o Graficos, Fotografias entre muchos mas si quieres conocer mas de estos proyectos  <LinkProyectText href='#'>¡Haz click aqui!</LinkProyectText> </DescProyect>
            <NewProyect/>
        </ContainerNewProyect>
        
    </>
  )
}

export default ContainerProyect