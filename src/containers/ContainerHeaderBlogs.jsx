import React from 'react';
import { ContainerBlogsItems, ContainerItemsNewBlogs, TextProyectBlogs } from '../style/ContainerHeaderBlogs.element'
import NewBlogsHome from "../components/NewBlogsHome"

function ContainerHeaderBlogs() {
  return (
    <>
        <ContainerBlogsItems>
          <TextProyectBlogs>New Blogs </TextProyectBlogs>
          <ContainerItemsNewBlogs>
            <NewBlogsHome/>
          </ContainerItemsNewBlogs>
        </ContainerBlogsItems>
    </>
  )
}

export default ContainerHeaderBlogs