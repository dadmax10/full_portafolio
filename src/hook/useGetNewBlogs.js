import react,{useState} from "react"

// imagenes
import programacion from "../assets/image/imgBlogs/programacion.jpg"

const newBlogsInfo = [
    {
        id:"0",
        categoria: "JavaScript",
        title: "ARRAY Y SUS METODOS",
        descripBlogs: `Los arrays son objetos similares a una lista cuyo prototipo proporciona métodos
        para efectuar operaciones de recorrido y de mutación...`,
        imgBlogs: programacion,
        color : "#FF8D29",
        linkBlogs : "/array_y_metodos"
    },
    
  ]

  function useGetNewBlogs(){
      const [blogsNew, setBlogsNew] = useState(newBlogsInfo);
      return blogsNew;
  }

  export default useGetNewBlogs

