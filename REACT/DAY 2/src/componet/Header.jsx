import React, { useEffect, useState } from 'react'
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
import { TbMenu3 } from "react-icons/tb";




const Header = () => {

  const [showMenu, setShowMenu] = useState(false)
  const [isscrolled, setscrolled] = useState(false)

  const toggleMenu = () => {

    setShowMenu(!showMenu);

  }


  useEffect(()=>{

    const handlescroll = ()=>{
      setscrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handlescroll)
    return ()=> window.removeEventListener('scroll', handlescroll)

  },[])


  return (
    <header className={`bg-white fixed top-0 right-0 left-0 z-50 ${isscrolled ? 'shadow-lg' : ''}`}  >
      <nav className='flex justify-between  max-w-[1400px] mx-auto md:h-[14vh] h-[12vh] items-center px-10'>

        {/* logo */}

        <a href="#" className='text-3xl font-bold'>
          Gr<span className='text-orange-500 uppercase'>o</span>cify
        </a>


        {/* Desktop Menu */}

        <ul className='md:flex items-center gap-x-14 hidden'>
          <li>
            <a href="#" className='font-semibold tracking-wider text-orange-500'>Home</a>
          </li>
          <li>
            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a>
          </li>
          <li>
            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a>
          </li>
          <li>
            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a>
          </li>
        </ul>


        {/* Nav action */}

        <div className='flex items-center gap-x-5'>

          {/* input field */}

          <div className='md:flex hidden p-1 border-2 border-orange-500 rounded-full'>
            <input type="text" className='flex-1 h-[5vh] focus:outline-none px-3 ml-2' name="text" id="text" placeholder='Search...' autoComplete='off' />
            <button className='bg-gradient-to-b from-red-400 to-orange-500 text-white w-10 h-10 rounded-full flex justify-center items-center text-xl'><IoSearch /></button>
          </div>

          <a href="#" className='text-zinc-800 text-2xl'><GoHeartFill /></a>
          <a href="#" className='text-zinc-800 text-2xl'><HiShoppingBag /></a>

          {/* hamburger */}

          <a href="#" className='text-zinc-800 text-3xl md:hidden' onClick={toggleMenu}>
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </a>

        </div>


        {/* mobile menu */}


        <ul className={`md:hidden items-center gap-x-14 flex flex-col gap-y-12 bg-orange-500/15 z backdrop-blur-xl shadow-lg rounded-xl p-10 absolute top-32 -left-full transform -translate-x-1/2 transition-all duration-500 ${showMenu ? 'left-1/2' : ""}`}>
          <li>
            <a href="#" className='font-semibold tracking-wider text-orange-500'>Home</a>
          </li>
          <li>
            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a>
          </li>
          <li>
            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a>
          </li>
          <li>
            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a>
          </li>
          <li className='md:hidden flex p-1 border-2 border-orange-500 rounded-full'>
            <input type="text" className='flex-1 h-[5vh] bg-transparent focus:outline-none px-3 ml-2' name="text" id="text" placeholder='Search...' autoComplete='off' />
            <button className='bg-gradient-to-b from-red-400 to-orange-500 text-white w-10 h-10 rounded-full flex justify-center items-center text-xl'><IoSearch /></button>
          </li>
        </ul>

      </nav>
    </header>
  )
}

export default Header
