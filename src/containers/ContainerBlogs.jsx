import React from 'react'
import NewBlogs from '../components/NewBlogs'
import { ContainerNewBlogs, ContainerBlogsInfo, ContainerRegisterBlogs, LinkCategoriaBlogs, TitleCategoriaBlogs } from '../style/ContainerBlogs.element'
import ContainerForm from '../containers/ContainerForm'
function ContainerBlogs() {
  return (
    <>
        <ContainerNewBlogs>
            <ContainerRegisterBlogs>
                <TitleCategoriaBlogs>BLOGS</TitleCategoriaBlogs>
                {/* <LinkCategoriaBlogs>JavaScript</LinkCategoriaBlogs>  */}
                {/* <ContainerForm/> */}
            </ContainerRegisterBlogs>
            <ContainerBlogsInfo>
                <NewBlogs/>
            </ContainerBlogsInfo>
        </ContainerNewBlogs>
    </>
  )
}

export default ContainerBlogs