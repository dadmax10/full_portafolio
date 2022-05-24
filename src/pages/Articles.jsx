import React from 'react'
import NewArticle from '../components/NewArticle'

import { ContainerPostAll, HrTitlePost, TitlePostAll } from "../style/Article.element.js"

function Articles() {
  return (
    <>
        <TitlePostAll>TODOS LOS ARTICULOS</TitlePostAll>
        <HrTitlePost/>
        <ContainerPostAll>
          <NewArticle/>
        </ContainerPostAll>
    </>
    
  )
}

export default Articles