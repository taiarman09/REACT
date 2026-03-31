import React from 'react'
import BackImg from '../../src/assets/bg-img.png'
import IceCream from '../../src/assets/ice-cream-img.png'

function ImageSec() {
    return (
        <div className="md:h-[380px] sm:h-[300px] lg:h-[500px] h-[400px]  w-full absolute top-0 pt-8 sm:flex block  justify-center" style={{ backgroundImage: `url(${BackImg})`, backgroundSize: `cover`}}>
            <div className='lg:w-[42%] sm:w-[50%] sm:h-auto h-[50%]  flex flex-col justify-center'>
                <h1 className='lg:text-6xl font-bold sm:w-10 sm:text-start text-center pl-5 sm:mt-10 py-6 sm:text-[30px] text-[20px] sm:pl-1'>Ice Cream</h1>
                <p className='px-12 sm:mt-2 lg:font-mono sm:w-[100%] w-[100%] md:text-[15px] sm:text-start text-center lg:text-[18px] sm:text-[13px] text-[10px] sm:pl-1 font-sans'>It is a long established fact that a reader will be
                    distracted by the readable content of a page when
                    looking at its layout. The point of using Lorem
                </p>
                <button className='lg:w-[130px] md:w-[100px] md:text-[12px] lg:text-[18px] mx-5 lg:mt-3 md:mt-4 rounded-[20px]  bg-pink-400 text-white py-2 sm:w-[80px] sm:text-[10px] sm:ml-1 sm:mt-3 mt-3'>
                    Order Now
                </button>
            </div>
            <div className='lg:w-[42%] sm:w-[50%] sm:h-auto h-[50%] pt-5  flex sm:items-end lg:items-end md:items-center lg:justify-start justify-center '>
                <img className='lg:w-[85%] md:w-[80%] lg:h-[70%] md:mt-40 md:h-[60%] sm:w-[80%] sm:h-[50%] w-[80%]' src={IceCream} alt="" />
            </div>
        </div>
    )
}

export default ImageSec