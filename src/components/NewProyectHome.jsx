import React from 'react'
import { ContainerProyectItems, ImgProyect, ModalProyect, ModalVisible, ProyectCont } from "../style/NewProyect.element"

import img_rfa from "../assets/image/imgProyectos/rfa-mp3.png"
import img_toky from "../assets/image/imgProyectos/toky tienda.png"
import img_Emisora from "../assets/image/imgProyectos/EmisoraWeb.png"


//TODO : cambiar el array por la base de datos y juntarlos con la del proyecto

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

function NewProyectHome() {
  return (
    <>
      <ContainerProyectItems>
        {
          proyectInfo.map(itemProyect => (
            <ProyectCont key={itemProyect.id}>
              <ImgProyect src={itemProyect.img} />
              <ModalProyect>
                <ModalVisible href={itemProyect.link}>
                  <h4>Visitar Proyecto</h4>
                </ModalVisible>
              </ModalProyect>
            </ProyectCont>
          ))
        }
      </ContainerProyectItems>
    </>
  )
}

export default NewProyectHome