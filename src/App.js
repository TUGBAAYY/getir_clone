import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Getir from './pages/Getir'
import GetirYemek from './pages/GetirYemek'
import GetirBuyuk from './pages/GetirBuyuk'
import GetirSu from './pages/GetirSu'
import GetirCarsi from './pages/GetirCarsi'
import Navbar from './components/navbar/Navbar'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Getir/>}/>
        <Route path='/yemek' element={<GetirYemek/>}/>
        <Route path='/buyuk' element={<GetirBuyuk/>}/>
        <Route path='/su' element={<GetirSu/>}/>
        <Route path='/carsi' element={<GetirCarsi/>}/>
      </Routes>
    </div>
  )
}

export default App