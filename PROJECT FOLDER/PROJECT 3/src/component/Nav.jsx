import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { auth, provider } from '../firebase'
import { signOut } from "firebase/auth"

function Nav({ user, setUser }) {
    const navigate = useNavigate()


    const handleLogout = async () => {
        try {
            await signOut(auth)
            setUser(null)
            alert("Logout Successful ✅")
            navigate("/Login")
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div className='pt-6 pb-5 sticky top-0 z-50'>
            <header className='w-[40%] bg-white/70 backdrop-blur-lg rounded-[50px] mx-auto h-[70px] border border-gray-200 shadow-xl flex items-center justify-center transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:bg-white'>

                <ul className='flex items-center gap-12 font-semibold text-gray-600'>

                    <li className='relative cursor-pointer px-2 py-1 rounded-lg transition-all duration-300 hover:text-black hover:bg-gray-100 group'>
                        <Link to="/" className='flex items-center gap-1'>
                            Home
                        </Link>
                        <span className='absolute left-0 -bottom-1 w-0 h-[3px] bg-gradient-to-r from-black to-gray-500 transition-all duration-300 group-hover:w-full rounded-full'></span>
                    </li>

                    <li className='relative cursor-pointer px-2 py-1 rounded-lg transition-all duration-300 hover:text-black hover:bg-gray-100 group'>
                        <Link to="/Product">
                            Product
                        </Link>
                        <span className='absolute left-0 -bottom-1 w-0 h-[3px] bg-gradient-to-r from-black to-gray-500 transition-all duration-300 group-hover:w-full rounded-full'></span>
                    </li>

                    <li className='relative cursor-pointer px-2 py-1 rounded-lg transition-all duration-300 hover:text-black hover:bg-gray-100 group'>
                        <Link to="/AddProduct">
                            Add Product
                        </Link>
                        <span className='absolute left-0 -bottom-1 w-0 h-[3px] bg-gradient-to-r from-black to-gray-500 transition-all duration-300 group-hover:w-full rounded-full'></span>
                    </li>



                    {user ? (
                        <li className='relative cursor-pointer px-3 py-1 rounded-full bg-red-500 text-white transition-all duration-300 hover:bg-red-600 hover:scale-105 hover:shadow-lg active:scale-95'>
                            <Link to="/Login">
                                Log out
                            </Link>
                        </li>
                    ) : (
                        <li className='relative cursor-pointer px-3 py-1 rounded-full bg-black text-white transition-all duration-300 hover:bg-gray-800 hover:scale-105 hover:shadow-lg active:scale-95'>
                            <Link to="/Login">
                                Login
                            </Link>
                        </li>
                    )}

                </ul>

            </header>
        </div>
    )
}

export default Nav