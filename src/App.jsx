import { useState } from 'react'
import About from './components/About';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'

function App() {

  return (
    <div>
        <Hero />
        <About />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
