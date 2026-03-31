import React from 'react'

function Footer({ theme }) {
    return (
        <>
            {
                theme === true ? (
                    <div className='w-full h-[500px] border border-black flex items-center justify-center bg-white text-black'>
                        <h1>Footer</h1>
                    </div>
                )
                    :
                    (
                        <div className='w-full h-[500px] border border-black flex items-center justify-center bg-black text-black'>
                            <h1>Footer</h1>
                        </div>
                    )
            }
        </>
    )
}

export default Footer
