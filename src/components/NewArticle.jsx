import React from 'react'
import {ContainerData, ContainerFetch, ContainerNewArticle, DataArticle, LinkArticle} from "../style/NewArticles.element"
function NewArticle() {
    const ArticlesData = (fecha,title,ref, descrip) =>{
        return(
            <ContainerNewArticle>
            <ContainerData>
                <DataArticle>{fecha}</DataArticle>
            </ContainerData>
            <ContainerFetch>
                <LinkArticle href={ref}>{title.toUpperCase()}</LinkArticle>
                <p>
                    {descrip}
                </p>
            </ContainerFetch>
        </ContainerNewArticle>
        )
    }
  return (
    <>
        {ArticlesData("19/Mayo/2022", "Metodologia Basica para Aprender Js","/metodologia-basica-js" ,"Si estas Leyendo este blogs es porque quieres iniciar tu etapa de aprendizaje en este bonito lenguaje de programacion llamado javaScript..." )}
    </>
  )
}

export default NewArticle