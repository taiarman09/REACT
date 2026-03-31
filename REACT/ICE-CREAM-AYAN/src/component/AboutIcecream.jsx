import React from 'react'

function AboutIcecream() {
    return (
        <main className='lg:h-[600px] sm:h-[400px] sm:mt-0 mt-5 h-[420px]  flex sm:flex-row flex-col-reverse  lg:w-[84%] w-full relative lg:top-[430px] md:top-[310px] sm:top-[230px] top-[330px] mx-auto'>
            <div className='sm:w-[50%] w-full sm:h-[100%] h-[50%]  flex justify-center items-center'>
                <img className='sm:w-[80%] sm:h-[90%] w-[60%] h-[90%]' src={`https://themewagon.github.io/Romyk/images/about-img.png`} alt="" />
            </div>
            <div className='sm:w-[50%] flex flex-col lg:pl-5 sm:pl-3 pl-2 justify-center w-full sm:h-[100%] h-[50%] '>
                <h1 className='font-bold lg:text-5xl md:text-4xl sm:text-3xl '>About Icecream</h1>
                <p className='lg:w-[80%] md:w-[100%]  text-start mt-5 font-semibold md:text-[14px] sm:text-[12px] text-[8px] pr-4'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore euconsectetur adipiscing esequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
                <button className='md:w-[130px] sm:w-[110px] w-[50%] mx-auto bg-pink-500 text-white py-1.5 mt-5 rounded-[30px]'>Read More</button>
            </div>
        </main>
    )
}

export default AboutIcecream
