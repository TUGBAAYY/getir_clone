import './navbar.css'
import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import { RiGlobalLine } from "react-icons/ri";
import { BsPersonFill } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";
import image1 from '../../media/indir.getir.svg'





const Navbar = () => {
    const [activeLink, setActiveLink] = useState(null)

    // linke tıklandığında çağrılacak fonksiyon
    const handleLinkClick = (link) =>{
        setActiveLink(link);
    }
  return (
    <div>
        <div className="style_navbar">
            <div className="style_container">
                <div className="style_flex_container"> 
                <div className="style_logo">
                    <div>
                    {/*Eğer activeLink'in değeri '/' ile eşleşiyorsa (yani, tıklanan Link '/' ise),
                    Bu durumda className özelliği 'active-link' sınıfını içerecek.
                    Eğer activeLink'in değeri '/' ile eşleşmiyorsa,
                    Bu durumda className özelliği boş bir string ('') olacaktır.*/}
                    <Link to="/"
                    onClick={() => handleLinkClick('/')}
                    className={activeLink === '/' ? 'active-link' : ''}
                    ><span  className={activeLink === '/' ? 'active-span' : ''}>getir</span></Link>
                    <Link to="/Yemek"
                    onClick={()=> handleLinkClick ('/yemek') }
                    className={activeLink === '/yemek' ? 'active-link' : ''}
                    ><span className={activeLink === '/yemek' ? 'active-span' : ''}>getir</span>yemek</Link>
                    <Link to="/buyuk"
                    onClick={() => handleLinkClick ('/buyuk')}
                    className={activeLink === '/buyuk' ? 'active-link' : ''}
                    ><span className={activeLink === '/buyuk' ? 'active-span' : ''}>getir</span>büyük</Link>
                    <Link to="/su"
                    onClick={() => handleLinkClick ('/su')}
                    className={activeLink === '/su' ? 'active-link' : ''}
                    ><span className={activeLink === '/su' ? 'active-span' : ''}>getir</span>su</Link>
                    <Link to="/carsi"
                    onClick={() => handleLinkClick ('/carsi')}
                    className={activeLink === '/carsi' ? 'active-link' : ''}
                    ><span className={activeLink === '/carsi' ? 'active-span' : ''} >getir</span>çarşı</Link>

                    </div>
                </div>
                <div className="style_login">
                    <div className="style_language">
                            
                    <RiGlobalLine />
                        <button> Türkçe (TR) </button>
                        
                       
                    </div>
                    <div className="style_log_in">
                    <BsPersonFill />
                        <button>Giriş</button>
                    </div>
                    <div className="style_register">
                        <BsFillPersonPlusFill />

                        <button>Kayıt ol</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="header_logo">
            <div className="header_img">
                
            <img src={image1} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Navbar