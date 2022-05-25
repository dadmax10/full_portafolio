// import axios from 'axios'
import {useEffect,useState} from 'react';



const useGetArticle = (API) =>{
    const [post, setPost] = useState([]);

    const dataApi= ()=>{
        try {
            fetch(API)
                .then(function(response){
                    return response.json();
                })
                .then(function(data){
                    setPost(data)
                })
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