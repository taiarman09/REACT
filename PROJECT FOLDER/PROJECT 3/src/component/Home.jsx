import React, { useState } from 'react'

function Home() {
  const [bg, setBg] = useState('bg-gradient-to-r from-purple-400 to-blue-500')
  const [font, setFont] = useState('font-sans')

  const changeStyle = () => {
    setBg(
      bg === 'bg-gradient-to-r from-purple-400 to-blue-500'
        ? 'bg-gradient-to-r from-pink-400 to-yellow-400'
        : 'bg-gradient-to-r from-purple-400 to-blue-500'
    )

    setFont(
      font === 'font-sans'
        ? 'font-serif'
        : 'font-sans'
    )
  }

  return (
    <div 
      onClick={changeStyle}
      className={`h-[84vh] w-full  flex items-center justify-center text-4xl text-white cursor-pointer transition-all duration-500 ${bg} ${font}`}
    >
      home
    </div>
  )
}

export default Home