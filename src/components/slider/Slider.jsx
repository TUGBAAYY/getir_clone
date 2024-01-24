import './slider.css';
import React, { useState, useEffect } from 'react';
import backgroundImage1 from '../../media/getir-mainpage-1.jpg';
import backgroundImage2 from '../../media/getir-mainpage-2.jpg';
import backgroundImage3 from '../../media/getir-mainpage-3.jpg';
import backgroundImage4 from '../../media/getir-mainpage-4.jpg';
import image2 from '../../media/tr.svg';
import image1 from '../../media/bimutluluk.svg';

const Slider = () => {
  const backgrounds = [backgroundImage1, backgroundImage2, backgroundImage3, backgroundImage4];
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBackgroundIndex((prevIndex) =>
        prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentBackgroundIndex, backgrounds]);

  const currentBackgroundClass = `backgroundImage${currentBackgroundIndex + 1}`;

  return (
    <div className={`${currentBackgroundClass} backgroundStyle`}>
      <div className="styleSlider">
        <div className="style_container">
          <div className="style_flex_container">
            <div className="style_Left_Col">
              <img src={image1} alt="" />
              <br />
              <h1>Dakikalar içinde kapında</h1>
            </div>
            <div className="style_Right_Col">
              <div className="style_background">
                <h5>Giriş yap veya kayıt ol</h5>
                <form>
                  <div className="style_Border">
                    <div className="style_Border_left">
                      
                      <select>
                        <option value="TR"> <img src={image2} alt="" /> +90</option>
                        <option value="US">+1</option>
                        
                       
                      </select>
                    </div>
                    <div className="style_Border_right">
                      
                      <input className='inputStyle' type="text" placeholder="Telefon Numarası" />
                    </div>
                  </div>
                      <div className='buttonDiv'>

                      <button>Telefon numarası ile devam et</button>
                      </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
