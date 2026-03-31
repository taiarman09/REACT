import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import flowerimg from '../../src/assets/flowerimage.png'

function Home() {
    return (
        <main className='h-[100vh] w-full flex justify-center items-center' style={{
            backgroundImage: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)"
        }}
        >
            <div className=' w-[800px] h-[400px] bg-white'>
                <div className='w-full h-[50px]  px-5 flex justify-between items-center '>
                    <ul className='flex items-center h-full gap-2'>
                        <li><IoIosArrowBack /></li>
                        <li>BACK TO ALL PLANTS</li>
                    </ul>
                    <div><FaRegHeart /></div>
                </div>
                <div className='w-full  h-[350px] flex '>
                    <div className='border h-full w-[45%]'><img className='w-[100%] h-[100%]' src={flowerimg} alt="" /></div>
                    <div className='border h-full w-[55%] pt-6 px-5 pl-7'>
                        <h1 className='text-[30px]'>CLASSIC PEACE LILY </h1>
                        <h4>POPULAR HOUSE PLANT</h4>

                        <h1 className='text-[30px] font-serif pt-3'>$18</h1>

                        <p className='pr-5 pt-5'>Classic Peace Lily is a spathiphyllum floor plant amarged in a sama plantar with a blue & d riobem and butterfly pick</p>

                        <div className='flex gap-5 pt-8'>
                            <button className='w-[130px] h-[40px] border rounded-md border-black'>ADD TO CART</button>
                            <button className='w-[130px] h-[40px] border border-black rounded-md'>WISHLIST</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home
