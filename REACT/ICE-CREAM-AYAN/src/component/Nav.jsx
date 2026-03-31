import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";

function Nav() {

  function menubar() {
    let menuList = document.getElementById("menuList")

    if (menuList.style.maxHeight === "300px") {
      menuList.style.maxHeight = "0px"
      menuList.style.display="hidden"
    } else {
      menuList.style.maxHeight = "300px"
      menuList.style.display="flex"
    }
  }


  return (
    <div className='relative z-10'>
      <nav className='h-[70px] lg:max-w-[84%] w-full mx-auto  flex items-center justify-between px-3'>
        <img className='cursor-not-allowed' src="https://themewagon.github.io/Romyk/images/logo.png" alt="" />
        <ul className='sm:flex hidden gap-3 md:text-[18px] text-[15px] font-semibold'>
          <li className='text-teal-300 cursor-pointer'>Home</li>
          <li className='hover:text-teal-300 cursor-pointer'>About</li>
          <li className='hover:text-teal-300 cursor-pointer'>Icecream</li>
          <li className='hover:text-teal-300 cursor-pointer'>Service</li>
          <li className='hover:text-teal-300 cursor-pointer'>Blog</li>
          <li className='hover:text-teal-300 cursor-pointer'>Contact Us</li>
        </ul>
        <ul className='sm:flex hidden items-center gap-3 md:text-[15px]'>
          <li className='flex items-center gap-[4px] cursor-pointer hover:border border-black p-1 rounded-md'>Login<FaUser /></li>
          <li className='hover:border cursor-pointer border-black p-2 rounded-md'><FaSearch /></li>
        </ul>
        <div className='flex sm:hidden border border-black p-2 text-xl rounded-md' onClick={menubar}>
          <RiMenu3Fill />
        </div>

        <ul className='sm:hidden hidden flex-col overflow-hidden  items-center bg-red-500 text-center w-full gap-3  md:text-[18px] text-[15px] font-semibold absolute top-[70px] left-0' id='menuList'>
          <li className='text-teal-300 cursor-pointer'>Home</li>
          <li className='hover:text-teal-300 cursor-pointer'>About</li>
          <li className='hover:text-teal-300 cursor-pointer'>Icecream</li>
          <li className='hover:text-teal-300 cursor-pointer'>Service</li>
          <li className='hover:text-teal-300 cursor-pointer'>Blog</li>
          <li className='hover:text-teal-300 cursor-pointer'>Contact Us</li>
          <li className='flex items-center gap-[4px] cursor-pointer '>Login<FaUser /></li>
          <li className='cursor-pointer p-2 rounded-md'><FaSearch /></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
