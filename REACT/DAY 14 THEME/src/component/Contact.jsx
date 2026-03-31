import React from 'react'

function Contact({ theme }) {
  return (
    <>
      {
        theme === true ? (
          <div className='w-full h-[500px] border border-black flex items-center justify-center bg-white text-black'>
            <h1>contact</h1>
          </div>
        ) : (
          <div className='w-full h-[500px] border border-black flex items-center justify-center bg-black text-white'>
            <h1>contact</h1>
          </div>
        )
      }
    </>
  )
}

export default Contact
