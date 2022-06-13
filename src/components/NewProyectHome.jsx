import React from 'react'
import { ContainerProyectItems, ImgProyect, ModalProyect, ModalVisible, ProyectCont } from "../style/NewProyect.element"

import useGetNewProyect from "../hook/useGetNewProyect"


function NewProyectHome() {
  const arrProyect = useGetNewProyect()
  let arrSlicer = arrProyect.slice(0,10)
      return (
        <>
          <ContainerProyectItems>
            {
              arrSlicer.map(items => (
                <ProyectCont key={items.id}>
                  <ImgProyect src={items.img} />
                  <ModalProyect>
                    <ModalVisible href={items.link}>
                      <h4>Visitar Proyectos</h4>
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