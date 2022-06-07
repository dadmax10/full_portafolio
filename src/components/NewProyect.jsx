import React from 'react'
import { ContainerProyectItems, ImgProyect, ModalProyect, ModalVisible, ProyectCont } from "../style/NewProyect.element"
import andres from '../assets/image/andres.jpg'


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
  }
];

function NewProyect() {
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

export default NewProyect