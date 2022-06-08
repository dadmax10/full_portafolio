import React from 'react';
import { ContainerBlogsItems, ContainerItemsNewBlogs, TextProyectBlogs, LinkAllBlogs } from '../style/ContainerHeaderBlogs.element'
import NewBlogsHome from "../components/NewBlogsHome"

function ContainerHeaderBlogs() {
  return (
    <>
        <ContainerBlogsItems>
          <TextProyectBlogs>New Blogs </TextProyectBlogs>
          <ContainerItemsNewBlogs>
            <NewBlogsHome/>
          </ContainerItemsNewBlogs>
          <LinkAllBlogs href={"/Blogs"}>Todos los Blogs...</LinkAllBlogs>
        </ContainerBlogsItems>
    </>
  )
}

export default ContainerHeaderBlogs