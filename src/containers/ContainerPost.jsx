import React from 'react'
import NewPost from '../components/NewPost'
import "../styles/post.scss"

//importando hooks
import useGetArticle from '../hook/useGetArticle';


function ContainerPost() {
  const API = "https://gnews.io/api/v4/search?q=example&token=d513813bffd4a3e0331c6836bfddbde5";

  const posts = useGetArticle(API);
  

  return (
    <div className="article">
        <h2 className="article-title">Noticias mas reciente del mundo</h2>
        <hr className="hr-article" />
        <div className="containerPosts">
          {
            posts.map(noticia =>(
              <NewPost post = {noticia} key={noticia.url}/>
            ))
          }
        </div>
    </div>
  )
}

export default ContainerPost