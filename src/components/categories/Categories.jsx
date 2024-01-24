import React from 'react'
import './categories.css'
import img1 from '../../assets/suicecek.png'
import img2 from '../../assets/meyvesebze.png'
import img3 from '../../assets/fırından.png'
import img4 from '../../assets/sütürünleri.png'
import img5 from '../../assets/atıştırmalık.png'
import img6 from '../../assets/dondurma.png'
import img7 from '../../assets/temelgıda.png'
import img8 from '../../assets/kahvaltılık.png'
import img9 from '../../assets/yiyecek.png'
import img10 from '../../assets/fitveform.png'
import img11 from '../../assets/kişiselsağlık.png'
import img12 from '../../assets/evbakım.png'
import img13 from '../../assets/evyaşam.png'
import img14 from '../../assets/teknoloji.png'
import img15 from '../../assets/evcilhayvan.png'
import img16 from '../../assets/bebek.png'
import img17 from '../../assets/cinselsağlık.png'
import { Link } from 'react-router-dom'


const Data =[
    {
        id:1,
        img: img1,
        title: "Su & İçecek",
        to: '/su-içecek'
    },
    {
        id:2,
        img: img2,
        title: "Meyve & Sebze",
        to: '/meyve-sebze'
    },
    {
        id:3,
        img: img3,
        title: "Fırından",
        to: '/fırından'
    },
    {
        id:4,
        img: img4,
        title: "Süt Ürünleri",
        to: '/süt-ürünleri'
    },
    {
        id:5,
        img: img5,
        title: "Atıştırmalık",
        to: '/atıştırmalık'
    },
    {
        id:6,
        img: img6,
        title: "Dondurma",
        to: '/dondurma'
    },
    {
        id:7,
        img: img7,
        title: "Temel Gıda",
        to: '/temel-gıda'
    },
    {
        id:8,
        img: img8,
        title: "Kahvaltılık",
        to: '/kahvaltılık'
    },
    {
        id:9,
        img: img9,
        title: "Yiyecek",
        to: '/yiyecek'
    },
    {
        id:10,
        img: img10,
        title: "Fit & Form",
        to: '/fit-form'
    },
    {
        id:11,
        img: img11,
        title: "Kişisel Bakım",
        to: '/kişisel-bakım'
    },
    {
        id:12,
        img: img12,
        title: "Ev Bakım",
        to: '/ev-bakım'
    },
    {
        id:13,
        img: img13,
        title: "Ev & Yaşam",
        to: '/ev-yaşam'
    },
    {
        id:14,
        img: img14,
        title: "Teknoloji",
        to: '/teknoloji'
    },
    {
        id:15,
        img: img15,
        title: "Evcil Hayvan",
        to: '/evcil-hayvan'
    },
    {
        id:16,
        img: img16,
        title: "Bebek",
        to: '/bebek'
    },
    {
        id:17,
        img: img17,
        title: "Cinsel Sağlık",
        to: '/cinsel-sağlık'
    },
]

const Categories = () => {
  return (
    <div>
        <div className="style_container">
                <h6 className='styles_style'>Kategoriler</h6>
            <div className="categories">
                {Data.map(({id,img,title,to}, index) =>(

                <div className="styles_category">
                    <Link to={to}>
                <div className="logo_img">
                  <img src={img} alt={title} />
                </div>
                <span>{title}</span>
              </Link>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Categories