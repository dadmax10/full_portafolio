import React from 'react'

import { ContainerInfoError, ContainerError, ContainerImgError, TextError, ImgError, LInkError } from "../style/Error404.element"

import ImgError404 from "../assets/image/E404.png"

function Error404() {
  return (
    <>
      <ContainerError>
        <ContainerInfoError>
          <TextError>OOPS!</TextError>
          <h2>Error 404</h2>
          <LInkError href="/">Volver al Inicio</LInkError>
        </ContainerInfoError>
        <ContainerImgError>
          <ImgError src={ImgError404}/>
        </ContainerImgError>
      </ContainerError>
    </>
  )
}

export default Error404