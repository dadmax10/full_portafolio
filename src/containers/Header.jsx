import React,{useState} from 'react'
import Menu from '../components/Menu'
import RedSocial from '../components/RedSocial'
import "../styles/header.scss"


//import img
import bg_profile from "../assets/image/tecnologia.jpg"
import profile from "../assets/image/andres.jpg"
import profile2 from "../assets/image/andres2.jpg"


function Header() {

  const [imgChange, setImgChange] = useState(profile)

  const handleImgChangeEnter = () =>{
    setImgChange(profile2)
  }

  const handleImgChangeOut = () =>{
    setImgChange(profile)
  }

  return (
    <header>
        <div className="content-info">
          <img className="img-profile"  src={bg_profile} alt="profile"/>
          <div className="content-profile">
            <img onMouseEnter={handleImgChangeEnter} onMouseOut={handleImgChangeOut} src={imgChange} className="profile-img-person" alt="andres" />
            <div className="content-title">
              <h1>Andres Narvaez</h1>
              <p>Programador y Diseñador Web - conocimiento en diseño grafico y produccion audiovisual #web #react #javaScript #next </p>
              <RedSocial/>
            </div>
            
          </div>
        </div>
        <hr />
        
    </header>
  )
}

export default Header