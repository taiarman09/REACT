import React, { useState } from 'react'

function Home({ theme }) {


    return (
        <>
            {theme === true ? (
                <div className='w-full h-[500px] border border-black flex items-center justify-center bg-white text-black'>
                    <h1>Home</h1>
                </div>
            )
                : (
                    <div className='w-full h-[500px] border border-black flex items-center justify-center bg-black text-white'>
                        <h1>Home</h1>
                    </div>
                )}
        </>
    )
}

export default Home
