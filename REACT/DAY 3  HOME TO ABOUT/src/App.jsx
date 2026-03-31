import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './component/Nav'
import Hero from './component/Hero'
import Contact from './component/Contact'
import About from './component/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Contact />
      
     
    </>
  )
}

export default App
