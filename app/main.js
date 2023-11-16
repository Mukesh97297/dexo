import React from 'react'
import Advantage from './pages/advantage/page'
import SlickCarousel from './pages/slider/page'
import Fully from './pages/fully/page'
import Dex from './pages/dex/page'
import Hero from './pages/hero/page'
import Navbar from './pages/header/page'
import Footer from './pages/footer/page'

function Main() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Dex />
      <Fully />
      <SlickCarousel />
      <Advantage />
      <Footer />

    </div>
  )
}

export default Main
