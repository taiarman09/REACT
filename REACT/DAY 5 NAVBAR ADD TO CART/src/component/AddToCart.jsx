import React from 'react'

function AddToCart({ cart, removeItem }) {
  return (
    <div className="p-5 min-h-[500px] flex gap-5 flex-wrap">
      <h2 className="text-xl font-bold w-full">Cart Items</h2>

      {
        cart.length === 0
          ? <p>Cart is Empty</p>
          :
          cart.map((item, index) => (
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

                <button
                  className="bg-red-500 text-white py-2 mt-3 w-full"
                  onClick={() => removeItem(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
      }
    </div>
  )
}

export default AddToCart
