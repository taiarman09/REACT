import React from 'react'
import Grocery from '../assets/grocery.png'
import Button from './Button'

function Hero() {
  return (
    <section>
        <div className='min-h-screen max-w-[1400px] mx-auto px-10 flex items-center md:pt-24 pt-32 md:flex-row flex-col'>

            {/* Hero Content */}

            <div className='flex-1'>
                <span className='bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full'>Export Best Quality...</span>
                <h1 className='md:text-7xl/tight text-5xl/tight font-bold mt-4'>
                    Tasty Organic <span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Veggies</span> <br /> In Your City
                </h1>
                <p className='text-zinc-600 md:text-lg text-md max-w-[]530px mt-5 mb-10'>Bred for a high content of beneficial substance. Our produce are all fresh and healthy.</p>
                <Button content="shop now" />
            </div>


            {/* Hero Image */}

            <div className='flex-1'>
                <img src={Grocery} alt="Hero Image" />
            </div>

        </div>
    </section>
  )
}

export default Hero
