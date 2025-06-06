import Navbar  from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
