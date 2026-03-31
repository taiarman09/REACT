import React, { useState } from 'react'

function Nav() {

    const [search, setsearch] = useState("")

    const data = [
        {
            name: "Pizza",
            brand: "Dominose",
            img: "https://b.zmtcdn.com/data/dish_photos/acf/564a923f18d91e366c1eddaa4374aacf.jpg"
        },
        {
            name: "Burger",
            brand: "KFC",
            img: "https://b.zmtcdn.com/data/pictures/1/22267511/d11494bbc9e19eb148435a9ba20ee7ce_o2_featured_v2.jpg"
        },
        {
            name: "Dosa",
            brand: "Anna",
            img: "https://b.zmtcdn.com/data/pictures/5/21675405/8ce09a277bcdef4f3abacc945663dba2_o2_featured_v2.jpg?output-format=webp"
        },
        {
            name: "Biryani",
            brand: "haydrabadi",
            img: "https://b.zmtcdn.com/data/pictures/4/21625904/eb66a22f2c4537e2ea27179492eb8991_o2_featured_v2.jpg"
        },
        {
            name: "Panner",
            brand: "sahi",
            img: "https://b.zmtcdn.com/data/dish_photos/984/60ecd42a6840a2a2f1b81bfce3f5b984.jpg?output-format=webp"
        },
        {
            name: "Cake",
            brand: "softcake",
            img: "https://b.zmtcdn.com/data/dish_photos/5d1/47b2ec7080bbc9ae4274a80ce42f75d1.png"
        },
    ];


    const filterdata = data.filter((item) =>
        item.name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase())
    )

    return (
        <>
            <div className='flex h-[70px] border border-black justify-between items-center px-5'>
                <div>Logo</div>
                <input type="text" className='border border-black pl-2 py-2 w-[250px]' value={search} onChange={(e) => setsearch(e.target.value)} placeholder='Search' />
                <ul className='flex items-center gap-5'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Footer</li>
                </ul>
            </div>
            <div className='w-full min-h-[658px] border border-black flex  flex-wrap gap-5 justify-center py-3'>
                {
                    filterdata.map((item) => {
                        return (
                            <div
                                className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300 w-[300px] h-[350px]"
                            >
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-full h-48 object-cover"
                                />

                                <div className="p-4">
                                    <h1 className="text-lg font-bold text-gray-800">
                                        {item.name}
                                    </h1>

                                    <p className="text-gray-500 mb-4">
                                        {item.brand}
                                    </p>

                                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Nav
