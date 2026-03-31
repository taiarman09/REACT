import React, { useState, useEffect } from 'react'
import Product from "../Produce.json";

function Produce() {


    const [food, setFood] = useState([]);
    const [selected, setselected] = useState("all")

    useEffect(() => {
        setFood(Product.food);
    }, []);

    const filterData =
        selected === "all"
            ? food
            : food.filter((item) => item.category === selected)

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>


            {
                filterData.map((item) => (
                    <div className="flex flex-col bg-white shadow-md w-72">
                        <img className='w-72 h-48 object-cover'
                            src={item.img}
                            alt="image" />
                        <div className="p-4 text-sm">
                            <p className="text-slate-600">{item.price}</p>
                            <p className="text-slate-800 text-base font-medium my-1.5">{item.name}</p>
                            <p className="text-slate-500">{item.para}</p>
                            <div className="grid grid-cols-2 gap-2 mt-3">
                                <button className="bg-slate-100 text-slate-600 py-2">
                                    {item.add}
                                </button>
                                <button className="bg-slate-800 text-white py-2">
                                    {item.buy}
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }


        </>
    );
}

export default Produce
