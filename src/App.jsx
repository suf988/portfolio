import './App.css'
import About from './components/about/About'
import ContactForm from './components/contactForm/ContactForm'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import Portfolio from './components/portfolio/Portfolio'
import Skills from './components/skills/Skills'
import Social from './components/social/Social'

function App() {

  return (
    <>
      <Navbar/>
       <Home/>
       <Social/>
       <About/>
       <Portfolio/>
       <Skills/>
       <ContactForm/>
    </>
  )
}

export default App
