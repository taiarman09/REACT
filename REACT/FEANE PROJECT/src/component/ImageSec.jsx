import React from 'react'
import ImageSecimg from '../assets/ImageSec.webp'

function ImageSec() {
    return (
        <div className='w-full border border-black relative'>
            <div className='md:h-[659px] w-full border border-black'><img className='w-full h-full shadow-lg ' src={ImageSecimg} alt="" /></div>
            <div className='absolute top-0 text-white flex flex-col items-center justify-center w-full h-full'>
                <h1 className='text-[50px] italic'>Fast Food Restaurant</h1>
                <div className='w-[30%] mt-2 border border-white'></div>
            </div>
        </div>
    )
}

export default ImageSec
