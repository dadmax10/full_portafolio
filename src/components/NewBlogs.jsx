import React from 'react'
import { ContentDataBlog, TextCategoriaBlogs, TextBlogs, DescBlogs, ImgBlogs } from '../style/NewBlogs.element'

import useGetBlogs from '../hook/useGetBlogs';

//TODO : implementar los blogs ya creados

function NewBlogs() {

  const arrBlogs =  useGetBlogs();
  
  return (
    <>
      {arrBlogs.map((itemsBlogs, idx) => (
        <ContentDataBlog primary = {itemsBlogs.color} key={idx}>
          <TextCategoriaBlogs primary = {itemsBlogs.color}>{itemsBlogs.categoria}</TextCategoriaBlogs>
          <TextBlogs href={itemsBlogs.linkBlogs}>{itemsBlogs.title}</TextBlogs>
          <DescBlogs>{itemsBlogs.descripBlogs}</DescBlogs>
          <ImgBlogs src={itemsBlogs.imgBlogs} />
        </ContentDataBlog>
      ))}
    </>
  )
}

export default NewBlogs ;