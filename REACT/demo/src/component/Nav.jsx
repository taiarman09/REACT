import React from 'react'
import { RiMenu3Fill } from "react-icons/ri";
function Nav() {
  return (
    <div>
      <nav className='h-[70px] border border-black flex justify-between items-center px-5'>

        {/* logo */}

        <div className='text-3xl'>Logo</div>

        {/* ul list */}

        <ul className='hidden sm:flex md:gap-3 gap-2 '>
          <li>Home</li>
          <li>About US</li>
          <li>Contact Us</li>
          <li>Skill</li>
        </ul>


        {/* menubar - icone */}

        <div>
          <RiMenu3Fill />
        </div>


      </nav>
    </div>
  )
}

export default Nav
