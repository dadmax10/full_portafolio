// import axios from 'axios'
import React,{useEffect,useState} from 'react';



const useGetArticle = (API) =>{
    const [post, setPost] = useState([]);

    useEffect(()=>{
        fetchApi()
    },[]);

    const fetchApi= async ()=>{
        try {
            const response = await fetch(API);
            const noticia = await response.json()
            const dataNoticia = await noticia.articles
            setPost(dataNoticia)
        } catch (error) {
            console.log("no hubo conexion", error);
        }
        
    }

    return post;

}

export default useGetArticle;