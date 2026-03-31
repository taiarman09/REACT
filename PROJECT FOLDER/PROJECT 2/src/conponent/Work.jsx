import React from 'react'
import giva from '../../src/assets/giva.png'
import clovers from '../../src/assets/clovers.png'
import animation from '../../src/assets/3d.png'


function Work() {
    return (
        <div id='project.index' className='w-full absolute top-[650px] sm:top-[650px] md:top-[650px] h-auto py-10 bg-gray-50 flex flex-col items-center justify-center scroll-mt-[100px]'>
            <h1 className='text-3xl font-bold mb-12 relative group cursor-pointer text-center sm:text-left'>
                MY PROJECT WORK
                <span className='absolute left-1/2 -bottom-2 w-0 h-[3px] bg-blue-600 transition-all duration-500 group-hover:w-1/2 group-hover:left-1/4'></span>
            </h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-6 sm:gap-8 lg:gap-10 items-center'>

                <div className='border border-gray-200 w-full sm:w-[250px] h-[350px] bg-white rounded-xl overflow-hidden shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:scale-105 cursor-pointer group'>
                    <div className='w-full h-[70%] overflow-hidden'>
                        <img
                            src={giva}
                            alt=""
                            className='w-full h-full object-fill transition duration-500 group-hover:scale-110'
                        />
                    </div>
                    <div className='w-full h-[30%] p-3 flex flex-col justify-between'>
                        <h1 className='text-sm font-semibold group-hover:text-blue-600 transition duration-300'>
                            Giva: Golden Groove
                        </h1>
                        <div className='flex justify-between'>
                            <a
                                href="https://github.com/taiarman09/GIVA"
                                className='text-blue-600 text-sm font-medium relative w-fit'
                            >
                                GitHub Link
                                <span className='absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full'></span>
                            </a>
                            <a
                                href="https://giva-ochre.vercel.app/"
                                className='text-sm font-medium px-3 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 active:scale-95 transition duration-300 shadow-sm'
                            >
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>

                <div className='border border-gray-200 w-full sm:w-[250px] h-[350px] bg-white rounded-xl overflow-hidden shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:scale-105 cursor-pointer group'>
                    <div className='w-full h-[70%] overflow-hidden'>
                        <img
                            src={clovers}
                            alt=""
                            className='w-full h-full object-fill transition duration-500 group-hover:scale-110'
                        />
                    </div>
                    <div className='w-full h-[30%] p-3 flex flex-col justify-between'>
                        <h1 className='text-sm font-semibold group-hover:text-blue-600 transition duration-300'>
                            The Clover Collective — Crafted With Care
                        </h1>
                         <div className='flex justify-between'>
                            <a
                                href="https://github.com/taiarman09/CLOVERS"
                                className='text-blue-600 text-sm font-medium relative w-fit'
                            >
                                GitHub Link
                                <span className='absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full'></span>
                            </a>
                            <a
                                href="https://clovers-phi.vercel.app/"
                                className='text-sm font-medium px-3 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 active:scale-95 transition duration-300 shadow-sm'
                            >
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>

                <div className='border border-gray-200 w-full sm:w-[250px] h-[350px] bg-white rounded-xl overflow-hidden shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:scale-105 cursor-pointer group'>
                    <div className='w-full h-[70%] overflow-hidden'>
                        <img
                            src={animation}
                            alt=""
                            className='w-full h-full object-fill transition duration-500 group-hover:scale-110'
                        />
                    </div>
                    <div className='w-full h-[30%] p-3 flex flex-col justify-between'>
                        <h1 className='text-sm font-semibold group-hover:text-blue-600 transition duration-300'>
                            DimensionCraft — A 3D Experience
                        </h1>
                         <div className='flex justify-between'>
                            <a
                                href="https://github.com/taiarman09/3D-PROJECT"
                                className='text-blue-600 text-sm font-medium relative w-fit'
                            >
                                GitHub Link
                                <span className='absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full'></span>
                            </a>
                            <a
                                href="https://3-d-project-three.vercel.app/"
                                className='text-sm font-medium px-3 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 active:scale-95 transition duration-300 shadow-sm'
                            >
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>

               

                

                

            </div>
        </div>
    )
}

export default Work