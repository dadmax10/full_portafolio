import React,{useState} from 'react'

//import react-icons
import {FaHeart,FaHome,FaBars,FaTimes,FaBloggerB} from "react-icons/fa"
import {MdOutlineArticle,MdProductionQuantityLimits} from "react-icons/md"


//import styled
import { NavabarContainer, NavbarWrapper,IconLogo,MenuUl, MenuItem,MenuItemLink, IconLogoMobile,LinkUrl} from '../style/Menu.element'


function Menu() {

  const [modalMovil, setModalMovil] = useState(false)

  const handleModal = () =>{
    setModalMovil(!modalMovil)
  }

  return (
    <>
          <NavabarContainer>
              <NavbarWrapper>
              <LinkUrl href="/">
                <IconLogo>
                    <FaHeart size={"2em"}/> Andres Narvaez
                </IconLogo>
              </LinkUrl>
                <IconLogoMobile onClick={handleModal} >
                  {
                    modalMovil ?  <FaTimes/> : <FaBars/>
                  }
                </IconLogoMobile>

                <MenuUl modal={modalMovil}>
                  <MenuItem onClick={handleModal}>
                    <MenuItemLink href="/about"><FaHome/>Acerca</MenuItemLink>
                  </MenuItem>
                  <MenuItem onClick={handleModal}>
                    <MenuItemLink href="/proyect" ><MdOutlineArticle/>Proyectos</MenuItemLink>
                  </MenuItem>
                  <MenuItem onClick={handleModal}>
                    <MenuItemLink href="/Blogs" ><FaBloggerB/>Blogs</MenuItemLink>
                  </MenuItem>
                  <MenuItem onClick={handleModal}>
                    <MenuItemLink href="/Dis" ><FaBloggerB/>Diseño</MenuItemLink>
                  </MenuItem>
                  <MenuItem onClick={handleModal}>
                    <MenuItemLink href="/Productos" ><MdProductionQuantityLimits/>Productos</MenuItemLink>
                  </MenuItem>
                  
                </MenuUl>
              </NavbarWrapper>
            </NavabarContainer>
    </>
  )
}

export default Menu