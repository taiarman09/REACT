import React from 'react'

function Footer() {
    return (
        <div id='footer.index' className='w-full h-[400px] absolute md:top-[1860px] sm:top-[2240px] top-[2530px] bg-gray-300 text-gray-800 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-20 py-10 scroll-mt-[100px]'>

            {/* Left Section */}
            <div className='flex gap-10 sm:gap-20 mb-8 sm:mb-0'>
                <ul className='flex flex-col gap-4'>
                    <li className='font-semibold text-lg mb-3 text-black'>Product</li>
                    <li className='text-gray-500 hover:text-black cursor-pointer transition'>Home</li>
                    <li className='text-gray-500 hover:text-black cursor-pointer transition'>Support</li>
                    <li className='text-gray-500 hover:text-black cursor-pointer transition'>Pricing</li>
                    <li className='text-gray-500 hover:text-black cursor-pointer transition'>Affiliate</li>
                </ul>

                <ul className='flex flex-col gap-4'>
                    <li className='font-semibold text-lg mb-3 text-black'>Resources</li>
                    <li className='text-gray-500 hover:text-black cursor-pointer transition'>Company</li>
                    <li className='text-gray-500 hover:text-black cursor-pointer transition'>Blogs</li>
                    <li className='flex items-center gap-2 text-gray-500 hover:text-black cursor-pointer transition'>
                        <span>Careers</span>
                        <button className='bg-purple-600 text-white text-xs px-2 py-1 rounded-md hover:bg-purple-700 transition'>
                            We're hiring!
                        </button>
                    </li>
                    <li className='text-gray-500 hover:text-black cursor-pointer transition'>About</li>
                </ul>

                <ul className='flex flex-col gap-4'>
                    <li className='font-semibold text-lg mb-3 text-black'>Legal</li>
                    <li className='text-gray-500 hover:text-black cursor-pointer transition'>Privacy</li>
                    <li className='text-gray-500 hover:text-black cursor-pointer transition'>Terms</li>
                </ul>
            </div>

            {/* Right Section */}
            <div className='text-center sm:text-right'>
                <p className='text-gray-500 max-w-[300px] mb-6'>
                    Making every customer feel valued — no matter the size of your audience.
                </p>

                <div className='flex justify-center sm:justify-end gap-5 text-gray-500 mb-4'>
                    <i className='hover:text-black cursor-pointer transition'>🌐</i>
                    <i className='hover:text-black cursor-pointer transition'>in</i>
                    <i className='hover:text-black cursor-pointer transition'>🐦</i>
                    <i className='hover:text-black cursor-pointer transition'>▶</i>
                </div>

                <p className='text-gray-400 text-sm'>
                    © 2025 ArmanUI
                </p>
            </div>

        </div>
    )
}

export default Footer