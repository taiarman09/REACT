import React from 'react'
import { FaHeart } from "react-icons/fa";

function Nav({ openCart }) {
  return (
    <div className='h-[70px] w-full border border-black flex justify-between items-center px-5'>
      <div className='text-[35px] italic font-bold'>Logo</div>

      <ul className='flex gap-5 items-center'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>

        <li
          className='border border-black p-2 cursor-pointer'
          onClick={openCart}
        >
          <FaHeart />
        </li>
      </ul>
    </div>
  )
}

export default Nav
