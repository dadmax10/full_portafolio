import React from 'react'
import { ContentDataBlog, TextCategoriaBlogs, TextBlogs, DescBlogs, ImgBlogs } from '../style/NewBlogs.element'

import useGetNewBlogs from '../hook/useGetNewBlogs';

//TODO : implementar los blogs ya creados

function NewBlogs() {

  const arrBlogs =  useGetNewBlogs();
  
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