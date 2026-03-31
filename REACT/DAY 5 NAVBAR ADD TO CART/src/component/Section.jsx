import React, { useState, useEffect } from 'react'
import ProductData from '../product.json'

function Section({ addToCart }) {

  const [product, setproduct] = useState([])
  const [selected, setselected] = useState("all")

  useEffect(() => {
    setproduct(ProductData.product)
  }, [])

  const filterData =
    selected === "all"
      ? product
      : product.filter((item) => item.category === selected)

  return (
    <div className='h-[500px] w-full border border-black flex gap-5 flex-wrap p-5'>
      {
        filterData.map((item, index) => (
          <div key={index} className="flex flex-col bg-white shadow-md w-72">
            <img
              className='w-72 h-48 object-cover'
              src={item.img}
              alt="image"
            />
            <div className="p-4 text-sm">
              <p className="text-slate-600">{item.price}</p>
              <p className="text-slate-800 text-base font-medium my-1.5">{item.name}</p>
              <p className="text-slate-500">{item.para}</p>

              <div className="grid grid-cols-2 gap-2 mt-3">
                <button
                  className="bg-slate-100 text-slate-600 py-2"
                  onClick={() => addToCart(item)}
                >
                  Add
                </button>

                <button className="bg-slate-800 text-white py-2">
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Section
