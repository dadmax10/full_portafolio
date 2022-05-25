// import axios from 'axios'
import {useEffect,useState} from 'react';



const useGetArticle = (API) =>{
    const [post, setPost] = useState([]);

    const dataApi=()=>{
        try {

            fetch(API)
                .then(function(response){
                    return response.json();
                })
                .then(function(data){
                    return data.articles
                })
                .then(function(dataNoticia){
                    setPost(dataNoticia)
                })

            // const response = await fetch(API);
            // const noticia = await response.json()
            // const dataNoticia = await noticia.articles
            // setPost(dataNoticia)
        } catch (error) {
            console.log("no hubo conexion", error);
        }
    }
    

    useEffect(()=>{
        dataApi()
    });

    

    return post;

}

export default useGetArticle;