import React from 'react'
import { IoEarth } from "react-icons/io5";

function Header() {
    return (
        <header className='w-full fixed z-10 h-[100px] border-b border-gray-300 flex justify-between items-center px-4 sm:px-8 bg-white shadow-sm'>
            <h1 className='text-2xl font-bold cursor-pointer transition duration-300 hover:text-blue-600 hover:scale-105'>
                Arman
            </h1>

            <ul className='hidden md:flex items-center gap-6 lg:gap-8 text-gray-700 font-medium'>
                <li className='cursor-pointer relative group transition duration-300 hover:text-blue-600'>
                    <a href="#slider.index">HOME
                        <span className='absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full'></span>
                    </a>
                </li>
                <li className='cursor-pointer relative group transition duration-300 hover:text-blue-600'>
                    <a href="#project.index">PROJECT
                        <span className='absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full'></span>
                    </a>
                </li>
                <li className='cursor-pointer relative group transition duration-300 hover:text-blue-600'>
                    <a href="#contact.index">CONTACT US
                        <span className='absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full'></span>
                    </a>
                </li>
                <li className='cursor-pointer relative group transition duration-300 hover:text-blue-600'>
                    <a href="#footer.index">FOOTER
                        <span className='absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full'></span>
                    </a>
                </li>
            </ul>

            <button className='flex items-center gap-2 px-3 sm:px-4 py-2 border border-blue-600 text-blue-600 rounded-full transition duration-300 hover:bg-blue-600 hover:text-white hover:scale-105 active:scale-95'>
                ENG
                <IoEarth className='transition duration-300 group-hover:rotate-180' />
            </button>
        </header>
    )
}

export default Header