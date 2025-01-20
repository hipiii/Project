
import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Navigation/Header'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Pages1 from './Pages/Pages1'
import About from './Pages/About'
import Gallery from './Pages/Gallery'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/pages' element={<Pages1/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      
    </>
  )
}

export default App
