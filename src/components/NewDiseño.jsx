import React from 'react'
import { BgDiseño, ContainerDiseño, ContainerImgDiseño, ContainerTextDiseño, ImgDiseño, ParagraphDiseño, TitleDiseño } from  "../style/Diseño.element"
import Button from '../components/Button'

//imagenes de los blogs
import restauranteBRS from "../assets/image/ImgDiseño/RestauranteBRS.png"

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

//TODO : implementar los diseños con sus links
function NewDiseño() {
  return (
    <>
        <PlantillaDiseño
          titleDiseño = "BRS RESTAURANTE"
          paragraphDiseño = "Diseño de un restaurante con menus exquisitos y platillos muy expeciales miralo aqui!!"
          imgDiseño = {restauranteBRS}
          linkDiseño="https://www.figma.com/file/XlGIOFC8Ma993ktNkZ7Va3/Restaurante-BRS?node-id=0%3A1"
        />
        
    </>
  )
}

export default NewDiseño