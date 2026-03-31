import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

  const [isLogin, setIsLogin] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLogin")
    if (loginStatus) {
      setIsLogin(true)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("isLogin")
    setIsLogin(false)
    navigate("/login")
  }

  return (
    <header className='border border-black w-full h-[10vh] flex items-center justify-between px-5'>
      <h1 className='text-[40px]'>Logo</h1>

      <ul className='flex items-center gap-10'>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/about"}>About</Link></li>
        <li><Link to={"/dashboard"}>Dashboard</Link></li>

        {
          isLogin ? (
            <button 
              onClick={handleLogout}
              className='px-2 py-1 rounded-md bg-red-600 text-white hover:bg-red-400'
            >
              Logout
            </button>
          ) : (
            <button className='px-2 py-1 rounded-md bg-sky-700 text-white hover:bg-sky-400'>
              <Link to={"/login"}>Login</Link>
            </button>
          )
        }

      </ul>
    </header>
  )
}

export default Navbar