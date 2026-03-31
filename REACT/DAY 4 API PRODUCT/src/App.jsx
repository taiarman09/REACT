import { useState } from 'react'
import './App.css'
import Hero from '../src/component/Hero'
import Cart from '../src/component/cart'


function App() {
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState([])


  const addToCart = (item) => {
    setCart([...cart, item])
  }

  return (
    <>
      <Hero addToCart={addToCart} />
      <Cart cart={cart} />
    </>
  )
}

export default App
