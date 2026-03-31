import React, { useState } from 'react'

function Hero() {

    const [postvalue, setpostvalue] = useState(1841)
    const [followvalue, setfollowvalue] = useState(6688)
    const [isFollow, setIsFollow] = useState(false)


    const handleFollow=()=>{
        setIsFollow(!isFollow);

        if(!isFollow){
            setfollowvalue(followvalue+1)
        }else{
            setfollowvalue(followvalue-1)
        }
    }


    return (
        <main className='w-full h-[100vh] border border-black flex justify-center items-center'>
            <div className='border border-black w-[750px] h-[350px] flex'>
                <div className='w-[350px] h-full flex justify-center items-center'>
                    <div className='h-[80%] w-[80%] rounded-[50%] bg-cyan-600 flex justify-center items-center text-gray-300 text-[20px]'>200 X 200</div>
                </div>
                <div className='w-[400px] h-full pl-0 pt-10'>
                    <h1 className='text-[30px] font-semibold font-serif'>Chrisse</h1>
                    <p className='font-serif text-[20px] font-semibold pt-5'>4018 Sachs Trail</p>
                    <div className='flex justify-end px-5 py-5'><button className='border-2 border-black w-[100px] h-[40px] rounded-md  bg-slate-200' onClick={handleFollow}>{isFollow? "Following" : "Follow"}</button></div>

                    <div className='flex gap-10 px-5'>
                        <ul className='flex flex-col gap-5'>
                            <li className='font-bold font-serif text-[25px]'>Posts</li>
                            <li className='text-[20px]'>{postvalue}</li>
                        </ul>
                        <ul className='flex flex-col gap-5'>
                            <li className='font-bold font-serif text-[25px]'>Followers</li>
                            <li className='text-[20px]'>{followvalue}</li>
                        </ul>
                    </div>

                </div>
            </div>
        </main >
    )
}

export default Hero
