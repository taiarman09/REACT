import React, { useEffect, useState } from 'react'

function Hero() {


    const [book, setbook] = useState([])
    const [type, settype] = useState("fiction")



    function showFinction() {
        settype("fiction")
    }

    function showNonFinction() {
        settype("nonfiction")
    }

    useEffect(() => {
        let url = "";


        if (type === "fiction") {
            url = "http://localhost:3000/fiction"
        } else {
            url = "http://localhost:3001/nonfiction"
        }

        fetch(url)
            .then((res) => res.json())
            .then((data) => setbook(data))


    }, [type])

    return (
        <main className='min-h-[100vh] w-full flex flex-col items-center pt-14 border border-black '>
            <h1 className='text-[25px] font-semibold italic'>Mini Book Store</h1>
            <button className='border border-black bg-black text-white rounded-md px-3 py-3 mt-5' onClick={() => settype(type === "fiction" ? "nonfiction" : "fiction")}>{type === "fiction" ? "Show Non-Fiction Books" : "Show Fiction Books"}</button>
            <h1 className='text-[30px] font-semibold mt-5'>{type === "fiction" ? "Fiction Books" : "Non-Fiction Books"}</h1>


            
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 px-6'>

                        {
                            book.length > 0 ? (

                                book.map((item) => (
                                    <div key={item.id} className='border p-4 rounded shadow-md'>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className='w-full h-40 object-cover rounded'
                                        />

                                        <h2 className='font-semibold mt-3'>
                                            {item.title}
                                        </h2>

                                        <p className='text-sm text-gray-600'>
                                            {item.author}
                                        </p>

                                        <p className='mt-2 font-bold'>
                                            ₹ {item.price}
                                        </p>
                                    </div>
                                ))

                            ) : (
                                <p className='mt-6 text-lg'>Loading...</p>
                                
                            )
                        }

                    </div>

                

        </main>

    )
}

export default Hero
