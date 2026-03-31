import React from 'react'
import { IoFastFood } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { LiaShoppingBagSolid } from "react-icons/lia";



function Nav() {
  return (
    <div className='w-full h-[100px] flex justify-between items-center px-8'>
        <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
                <IoFastFood className='w-[30px] h-[30px] text-green-500'/>
        </div>
        <form className='flex items-center w-[70%] h-[60px] bg-white px-5 gap-5 rounded-md shadow-md'>
            <IoSearch className='text-green-500 w-[20px] h-[20px]'/>
            <input type="text" placeholder='Search Items...' className='w-[100%] outline-none text-[20px]' name="" id="" />
        </form>
        <div className='w-[60px] relative h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
            <span className='absolute top-0 right-3 text-green-500 font-bold text-[18px]'>0</span>
                <LiaShoppingBagSolid  className='w-[30px] h-[30px] text-green-500'/>
        </div>
    </div>
  )
}

export default Nav
