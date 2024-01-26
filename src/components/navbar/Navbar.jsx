import './navbar.css'
import { Link } from 'react-router-dom'
import React, { useState } from 'react';

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
                            
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9.71002 19.6674C8.74743 17.6259 8.15732 15.3742 8.02731 13H4.06189C4.458 16.1765 6.71639 18.7747 9.71002 19.6674ZM10.0307 13C10.1811 15.4388 10.8778 17.7297 12 19.752C13.1222 17.7297 13.8189 15.4388 13.9693 13H10.0307ZM19.9381 13H15.9727C15.8427 15.3742 15.2526 17.6259 14.29 19.6674C17.2836 18.7747 19.542 16.1765 19.9381 13ZM4.06189 11H8.02731C8.15732 8.62577 8.74743 6.37407 9.71002 4.33256C6.71639 5.22533 4.458 7.8235 4.06189 11ZM10.0307 11H13.9693C13.8189 8.56122 13.1222 6.27025 12 4.24799C10.8778 6.27025 10.1811 8.56122 10.0307 11ZM14.29 4.33256C15.2526 6.37407 15.8427 8.62577 15.9727 11H19.9381C19.542 7.8235 17.2836 5.22533 14.29 4.33256Z"></path></svg>
                        <button> Türkçe (TR) </button>
                        
                       
                    </div>
                    <div className="style_log_in">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path></svg>
                        <button>Giriş</button>
                    </div>
                    <div className="style_register">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path><path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"></path></svg>

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