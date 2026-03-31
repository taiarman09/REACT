import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './component/Nav'
import SellOffer from './component/SellOffer'
import { Route, Routes, useLocation } from 'react-router-dom'
import Hero from './component/Hero'
import Footer from './component/Footer'
import Buynow from './component/Buynow'
import Login from './component/Login'
import Signup from './component/Signup'
import Logout from './component/Logout'


function App() {


  const [buynow, setBuynow] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("users"))
  );
  const location = useLocation()
  const ref = useRef()


  const Buynowproduct = (product) => {
    const updateCart =[...buynow, product];
    setBuynow(updateCart);
      localStorage.setItem("cart" , JSON.stringify(updateCart))
    
  }




  useEffect(() => {
    ref.current.focus()
    const handlekeypress = () => {
      if (document.activeElement !== ref.current) {
        ref.current.focus()
      }
    }

    window.addEventListener("keydown", handlekeypress)

    return () => {
      window.removeEventListener("keydown", handlekeypress)
    }
  }, [])


  const hideNav = location.pathname === "/Login" || location.pathname === "/Signup" 
  const logout = location.pathname === "/Logout"

  return (
    <>

      {!hideNav && <Nav ref={ref} users={currentUser} />}
      <Routes >
        <Route path='/Shop' element={<h1>Shop</h1>} />
        <Route path='/Buynow' element={<Buynow buynow={buynow} />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Logout' element={<Logout />}/>
      </Routes>
      {location.pathname === "/" && <SellOffer />}
      {location.pathname === "/" && <Hero Buynowproduct={Buynowproduct} />}


      {!hideNav && !logout && <Footer />}
    </>
  )
}

export default App
