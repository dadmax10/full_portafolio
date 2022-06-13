import react,{useState} from "react"

import andres from "../assets/image/andres.jpg"

const newBlogsInfo = [
    {
        id:"0",
        categoria: "JavaScript",
        title: "Blogs 1",
        descripBlogs: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, animi?",
        imgBlogs: andres,
        color : "#FF8D29",
        linkBlogs : "#"
    },
    {
        id:"1",
        categoria: "Webpack",
        title: "Blogs 1",
        descripBlogs: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, animi?",
        imgBlogs: andres,
        color : "#00FFAB",
        linkBlogs : "#"
    },
    {
        id:"2",
        categoria: "React",
        title: "Blogs 1",
        descripBlogs: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, animi?",
        imgBlogs: andres,
        color : "#37E2D5",
        linkBlogs : "#"
    },
    {
        id:"2",
        categoria: "React",
        title: "Blogs 1",
        descripBlogs: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, animi?",
        imgBlogs: andres,
        color : "#37E2D5",
        linkBlogs : "#"
    },
  ]

  function useGetNewBlogs(){
      const [blogsNew, setBlogsNew] = useState(newBlogsInfo);
      return blogsNew;
  }

  export default useGetNewBlogs

