import React from 'react';
import "../styles/redSocial.scss";

//import imagenes
import instagram from "../assets/icons/instagram.png";
import twitter from "../assets/icons/twitter.png";
import youtube from "../assets/icons/youtube.png";



function Redsocial() {
    return (
        <div className="content-red-social">
            <div className="red-social">
                <div className="content-img-red">
                    <img className='img-red-social' src={twitter} alt="red-twitter" />
                </div>
                <div className="content-info-red">
                    <a href="https://twitter.com/Andres_Tech3">Twitter</a>
                    <b>@ANDRES_TECH</b>
                </div>
            </div>

            <div className="red-social">
                <div className="content-img-red">
                    <img className='img-red-social' src={instagram} alt="red-instagram" />
                </div>
                <div className="content-info-red">
                    <a href="https://www.instagram.com/andres_tech3/?hl=es-la">Instagram</a>
                    <b>@ANDRESTECH</b>
                </div>
            </div>

            <div className="red-social">
                <div className="content-img-red">
                    <img className='img-red-social' src={youtube} alt="red-youtube" />
                </div>
                <div className="content-info-red">
                    <a href="https://www.youtube.com/channel/UCW3_5N56pOIbPbSAt71169g">Youtube</a>
                    <b>@PRODS_ART</b>
                </div>
            </div>
        </div>
    )
}

export default Redsocial