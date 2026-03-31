import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/home'
import About from './component/About'
import Dashboard from './component/Dashboard'
import Login from './component/Login'
import ProtectedRoute from './component/ProtectedRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
