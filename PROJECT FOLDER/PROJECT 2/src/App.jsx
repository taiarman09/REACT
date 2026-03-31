import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../src/conponent/Header'
import Work from './conponent/Work'
import Contact from './conponent/Contact'
import Footer from './conponent/Footer'
import Slider from './conponent/Slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Slider />
      <Work />
      <Contact />
      <Footer />
    </>
  )
}

export default App
