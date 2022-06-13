import React from 'react';

import { ContentDataBlog, TextCategoriaBlogs, TextBlogs, DescBlogs, ImgBlogs } from '../style/NewBlogs.element'

import useGetNewBlogs from "../hook/useGetNewBlogs"

function NewBlogsHome() {
    const arrBlogsNew = useGetNewBlogs();
    const arrSlice = arrBlogsNew.slice(0,3)
    return (
        <>
            {
                arrSlice.map((itemsBlogs, idx) => (
                    <ContentDataBlog primary={itemsBlogs.color} key={idx}>
                        <TextCategoriaBlogs primary={itemsBlogs.color}>{itemsBlogs.categoria}</TextCategoriaBlogs>
                        <TextBlogs href={itemsBlogs.linkBlogs}>{itemsBlogs.title}</TextBlogs>
                        <DescBlogs>{itemsBlogs.descripBlogs}</DescBlogs>
                        <ImgBlogs src={itemsBlogs.imgBlogs} />
                    </ContentDataBlog>
                ))}
        </>
    )
}

export default NewBlogsHome