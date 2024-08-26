import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Footer from './pages/Contacts'
import AboutUs from './pages/AboutUs'
import Communities from './pages/communities'

function App() {
  

  return (
    
      <>
      <Routes>
        <Route path= "/about" element = {< AboutUs/>}/>
        <Route path ='/' element = {< Home/>}/>
        <Route path = "/community" element= {<Communities />}/>
      </Routes>
      <Footer />
      </>
  )
}

export default App
