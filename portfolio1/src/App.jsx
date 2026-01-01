import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/projects' element={<Projects/>}/>

      
    </Routes>
      <Footer />
    </>
  )
}

export default App
