import React,{useState} from 'react'
// import RedSocial from '../components/RedSocial'
import "../styles/header.scss"
import Button from "../components/Button"


//import img
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
          <div className="content-profile">
            <img onMouseEnter={handleImgChangeEnter} onMouseOut={handleImgChangeOut} src={imgChange} className="profile-img-person" alt="andres" />
            <div className="content-title">
              <span className="textProfile">H</span>
              <span className="textProfile">i</span>
              <span className="textProfile">,</span>
              <br />
              <span className="textProfile">I</span>
              <span className="textProfile">`</span>
              <span className="textProfile">M</span>
              <span className="textProfile textMargen"></span>
              <span className="textProfile">A</span>
              <span className="textProfile">nd</span>
              <span className="textProfile">r</span>
              <span className="textProfile ">e</span>
              <span className="textProfile ">s</span>
              <span className="textProfile ">,</span>
              <br />
              <span className="textProfile">W</span>
              <span className="textProfile">e</span>
              <span className="textProfile">b</span>
              <span className="textProfile textMargen"></span>
              <span className="textProfile">D</span>
              <span className="textProfile">e</span>
              <span className="textProfile">v</span>
              <span className="textProfile">e</span>
              <span className="textProfile">l</span>
              <span className="textProfile">o</span>
              <span className="textProfile">p</span>
              <span className="textProfile">e</span>
              <span className="textProfile">r</span>
              <br />
              {Button("/about", "Contact Me!!")}
            </div>
          </div>
        </div>
        
    </header>
  )
}

export default Header