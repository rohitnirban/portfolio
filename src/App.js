import React from 'react'
import Testimonial from './components/Testimonial'
import Portfolio from './components/Portfolio'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}

export default App