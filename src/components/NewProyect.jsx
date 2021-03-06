import React from 'react'
import { ContainerProyectItems, ImgProyect, ModalProyect, ModalVisible, ProyectCont } from "../style/NewProyect.element"


import useGetNewProyect from '../hook/useGetNewProyect.js'


function NewProyect() {
  const arrProyect = useGetNewProyect();
  return (
    <>
      <ContainerProyectItems>
        {
          arrProyect.map(itemProyect => (
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