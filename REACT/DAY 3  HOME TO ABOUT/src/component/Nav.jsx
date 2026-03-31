import React from 'react'

function Nav() {
    return (
        <div className='fixed w-full'>
            <nav className='h-[70px] border border-black -mt-[70px] flex [scro] justify-between items-center px-10 bg-white'>
                <h1 className='text-[30px] italic font-bold'>logo</h1>
                <ul className='flex gap-4'>
                    <li className='text-indigo-500 cursor-pointer'><a href="#home">Home</a></li>
                    <li className='hover:text-indigo-500 cursor-pointer'><a href="#about">About Us</a></li>
                    <li className='hover:text-indigo-500 cursor-pointer'><a href="#contact">Contact Us</a></li>
                    <li className='hover:text-indigo-500 cursor-pointer'>Blog</li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
