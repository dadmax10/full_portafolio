import React from 'react'
import { BgDiseño, ContainerDiseño, ContainerImgDiseño, ContainerTextDiseño, ImgDiseño, ParagraphDiseño, TitleDiseño } from  "../style/Diseño.element"
import andres from "../assets/image/andres.jpg"
import Button from '../components/Button'

const PlantillaDiseño = ({titleDiseño, paragraphDiseño, imgDiseño,linkDiseño="/"}) =>{
  return(
    <ContainerDiseño>
    <BgDiseño/>
    <ContainerTextDiseño>
      <TitleDiseño>{titleDiseño}</TitleDiseño>
      <ParagraphDiseño>{paragraphDiseño}</ParagraphDiseño>
      {Button(linkDiseño, titleDiseño)}
    </ContainerTextDiseño>
    <ContainerImgDiseño> 
      <a href={linkDiseño}><ImgDiseño src={imgDiseño}/></a>
    </ContainerImgDiseño>
  </ContainerDiseño>
  )
}

function NewDiseño() {
  return (
    <>
        <PlantillaDiseño
          titleDiseño = "Diseño 1"
          paragraphDiseño = "habia una ves una arbol se callo de un puente muy triste lloro y se murio"
          imgDiseño = {andres}
          linkDiseño="/"
        />
        <PlantillaDiseño
          titleDiseño = "Diseño 2"
          paragraphDiseño = "habia una ves una arbol se callo de un puente muy triste lloro y se murio"
          imgDiseño = {andres}
          linkDiseño="/"
        />
    </>
  )
}

export default NewDiseño