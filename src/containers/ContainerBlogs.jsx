import React from 'react'
import NewBlogs from '../components/NewBlogs'
import { ContainerNewBlogs, ContainerBlogsInfo, ContainerRegisterBlogs } from '../style/ContainerBlogs.element'

function ContainerBlogs() {
  return (
    <>
        <ContainerNewBlogs>
            <ContainerRegisterBlogs>
                <h1>Categorias</h1>
            </ContainerRegisterBlogs>
            <ContainerBlogsInfo>
                <NewBlogs/>
            </ContainerBlogsInfo>
        </ContainerNewBlogs>
    </>
  )
}

export default ContainerBlogs