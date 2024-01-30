import React from 'react'
import './cards.css'
import img1 from '../../assets/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg'
import img2 from '../../assets/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg'
import img3 from '../../assets/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg'

const Data = [
    {
        id: 1,
        img: img1,
        title: "Her siparişine bir kampanya",
        text: "Getir’de vereceğin her siparişe uygun bir kampanya bulabilirsin."
    },
    {
        id: 2,
        img: img2,
        title: "Dakikalar içinde kapında",
        text: "Getir’le siparişin dakikalar içinde kapına gelir."
    },
    {
        id: 3,
        img: img3,
        title: "Binlerce çeşit mutluluk",
        text: "Getir’de binlerce çeşit arasından seçimini yapabilirsin."
    },
]

const GetirCards = () => {
    return (
        <div>
            <div className="style_container_cards">
                <div className="cards">
                {
                    Data.map(({ id, img, title, text }, index) => (
                            <div className="styles_cards">
                                <img src={img} alt="" />
                                
                                <span>{title}</span>
                                <p>{text}</p>
                            </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default GetirCards