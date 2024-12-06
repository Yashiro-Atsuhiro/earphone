import { useState } from 'react'
import Header from'./component/header'
import Footer from './component/footer'
import SliderComponent from './component/swiper'
import Leftcate from './component/side'
import './App.css'

function App() {

  return (
    <>
    <Header />
    <SliderComponent />
    <Leftcate />
    <Footer />
    </>
  )
}

export default App
