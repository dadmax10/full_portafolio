import React from 'react'
import Header from '../containers/Header';
import ContainerProyect from '../containers/ContainerProyect'
import ContainerPasionTech from '../containers/ContainerPasionTech';
import ContainerHeaderBlogs from '../containers/ContainerHeaderBlogs';
import ContainerForm from '../containers/ContainerForm';
// import ContainerPost from '../containers/ContainerPost';

function Home() {
  return (
    <div>
        <Header/>
        {/* <ContainerPost/> */}
        <ContainerProyect/>
        <ContainerPasionTech/>
        <ContainerHeaderBlogs/>
        <ContainerForm/>
    </div>
  )
}

export default Home