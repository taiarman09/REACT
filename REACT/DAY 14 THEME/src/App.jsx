import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './component/Nav'
import { useLocation } from 'react-router'
import Home from './component/Home'
import Contact from './component/contact'
import About from './component/about'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation()


  const [theme, settheme] = useState(true)

  function showbg() {
    if (theme === true) {
      settheme(false)
    }
    else {
      settheme(true)
    }
  }

  return (
    <>
      <Nav theme={theme} showbg={showbg} />

      {location.pathname === "/" && <Home theme={theme} />}
      {location.pathname === "/about" && <About theme={theme} />}
      {location.pathname === "/contact" && <Contact theme={theme} />}
      {location.pathname === "/footer" && <Footer theme={theme} />}
    </>
  )
}

export default App
