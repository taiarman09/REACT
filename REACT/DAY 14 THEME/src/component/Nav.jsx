import React from 'react'
import { GoSun } from "react-icons/go";
import { Link } from 'react-router-dom';
import { LuSunMoon } from "react-icons/lu";



function Nav({ theme, showbg }) {
    return (
        <div className='flex items-center justify-between px-8 w-full h-[70px] border border-black'>
            <h1 className='text-[30px]'>Logo</h1>
            <ul className='flex items-center gap-5 '>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
                <li><Link to={"/footer"}>Footer</Link></li>
                <li className='flex items-center gap-1' onClick={showbg}> {theme === true ? (<LuSunMoon />) : (<GoSun />)} theme</li>
            </ul>
        </div>
    )
}

export default Nav
