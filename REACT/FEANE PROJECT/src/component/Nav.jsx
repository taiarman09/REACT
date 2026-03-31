import React from 'react'
import { GiKnifeFork } from "react-icons/gi";
import { TbMenu2 } from "react-icons/tb";


function Nav() {
  return (
    <div>
      <nav className='w-full fixed z-30 mt-4  border-t-2 border-b-2 border-white h-[70px] flex items-center justify-between px-3 bg-black text-white italic'>
        <div className='flex items-center gap-2 text-[30px]'><GiKnifeFork /> Feane</div>
        <ul className='sm:flex hidden gap-5 items-center font-bold'>
          <li>HOME</li>
          <li>MENU</li>
          <li>ABOUT</li>
          <li>BOOK TABLE</li>
          <li><button className='bg-yellow-400 py-2 px-4 text-black rounded-[20px]'>Order Online</button></li>
        </ul>

        <div className='sm:hidden block text-[25px] border-x-2 border-y-2 border-white p-2 rounded-lg'>
          <TbMenu2 />
        </div>
      </nav>
    </div>
  )
}

export default Nav
