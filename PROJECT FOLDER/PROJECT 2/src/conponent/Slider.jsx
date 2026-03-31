import React, { useState } from 'react'

function Slider() {

    const slides = [
        {
            id: 1,
            title: "Build Your Dream Project",
            desc: "Create modern and responsive websites easily with powerful tools and clean design.",
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        },
        {
            id: 2,
            title: "Grow Your Business",
            desc: "Scale your audience and manage everything in one powerful platform.",
            img: "https://images.unsplash.com/photo-1551434678-e076c223a692"
        },
        {
            id: 3,
            title: "Design With Confidence",
            desc: "Simple solutions that make your workflow faster and more productive.",
            img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
        }
    ]

    const [current, setCurrent] = useState(0)

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
    }

    return (
        <div id='slider.index' className="w-full h-[650px] relative overflow-hidden bg-gradient-to-r from-gray-100 via-white to-gray-100">

            {/* Slides */}
            <div
                className="flex transition-transform duration-500 ease-out will-change-transform"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className="w-full h-[650px] flex items-center justify-between px-4 sm:px-20 flex-shrink-0"
                    >
                        {/* Left Text */}
                        <div className="max-w-[500px]">
                            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight text-gray-800">
                                {slide.title}
                            </h1>
                            <p className="text-gray-600 mb-8">
                                {slide.desc}
                            </p>
                            <button className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 hover:scale-105 active:scale-95 transition duration-300 shadow-md">
                                Get Started
                            </button>
                        </div>

                        {/* Right Image */}
                        <div className="w-[300px] sm:w-[500px] h-[250px] sm:h-[380px] overflow-hidden rounded-xl shadow-xl group">
                            <img
                                src={slide.img}
                                alt=""
                                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 bg-white shadow-md text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 transition"
            >
                ←
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 bg-white shadow-md text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 transition"
            >
                →
            </button>

            {/* Dots */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                            current === index
                                ? "bg-black scale-125"
                                : "bg-gray-400 hover:bg-gray-600"
                        }`}
                    ></div>
                ))}
            </div>

        </div>
    )
}

export default Slider