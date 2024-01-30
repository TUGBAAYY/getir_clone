import React from 'react'
import './getirdownload.css'
import img1 from '../../assets/appstore.svg'
import img2 from '../../assets/googleplay.svg'
import img3 from '../../assets/huawei.svg'
import img4 from '../../media/phoneLanding.png'

const Getirdownload = () => {
  return (
    <div>
        <div className="download_bacground">
        <div className="style_container_download">
            <div className="download_bg">
                <div className="download_left">
                    <div className="style_getir_left">
                        <h2>Getir'i indir!</h2>
                        <span>İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.</span>
                    </div>
                    <div className="style_getir_left_img">
                        <ul>
                            <li> <a href="https://apps.apple.com/us/app/getir-groceries-in-minutes/id995280265"><img src={img1} alt="" /></a> </li>
                            <li> <a href="https://play.google.com/store/apps/details?id=com.getir"><img src={img2} alt="" /></a></li>
                            <li> <a href="https://appgallery.huawei.com/#/app/C100954039"><img src={img3} alt="" /></a> </li>
                        </ul>
                    </div>
                </div>
                <div className="download_right">
                    <img src={img4} alt="" />
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Getirdownload