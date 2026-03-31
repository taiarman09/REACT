import { useState } from 'react'
import './App.css'
import Nav from './component/Nav'
import Section from './component/Section'
import AddToCart from './component/AddToCart'

function App() {

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const handleAddToCart = (item) => {
    setCart([...cart, item])
  }

  const handleRemove = (index) => {
    const updated = cart.filter((_, i) => i !== index)
    setCart(updated)
  }

  return (
    <>
      <Nav openCart={() => setShowCart(true)} />

      {
        showCart
          ? <AddToCart cart={cart} removeItem={handleRemove} />
          : <Section addToCart={handleAddToCart} />
      }
    </>
  )
}

export default App
