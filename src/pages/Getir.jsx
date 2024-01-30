import React from 'react'
import Slider from '../components/slider/Slider'
import Categories from '../components/categories/Categories'
import Getirdownload from '../components/getirdownload/Getirdownload'
import GetirCards from '../components/cards/GetirCards'
import Footer from '../components/footer/Footer'

const Getir = () => {
  return (
    <div>
       <Slider/>
       <Categories />
       <Getirdownload /> 
       <GetirCards />
       <Footer />
    </div>
  )
}

export default Getir