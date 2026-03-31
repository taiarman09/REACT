import React, { useState } from 'react'

function Hero() {


    const [value, setvalue] = useState(0)
    const [value1]= useState(0)

    return (
        <main className='h-[100vh]  flex justify-center items-center' style={{userSelect:'none'}}>

            <div className='h-[400px] w-[500px] flex flex-col justify-center items-center gap-5 rounded-[30px]'>
                <h1 className='italic font-bold text-[30px]'>COUNTER</h1>
                <div className='text-[100px] font-bold'>{value}</div>
                <div className='flex gap-5 text-white text-[20px]'>
                    <button className='border-2 border-black w-[120px] h-[38px] rounded-lg bg-yellow-400' onClick={() => { if (value > 0) { setvalue(value - 1) } }}> Decrement </button>
                    <button className='border-2 border-black w-[120px] h-[38px] rounded-lg bg-red-600' onClick={() => setvalue(0)}> Reset </button>
                    <button className='border-2 border-black w-[120px] h-[38px] rounded-lg bg-green-700' onClick={() => setvalue(value + 1)}> Increment </button>
                </div>
            </div>

        </main>
    )
}

export default Hero