import React from 'react'
import './App.css';
import Hero from './Component/Hero/Hero';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Hero/>
      <Footer/>
    </div>
  )
}

export default App
