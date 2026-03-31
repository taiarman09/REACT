import React from 'react'

function Cart({ cart }) {
    return (
        <div className="p-5 h-[700px]">
            <h2 className="text-xl font-bold">Cart Items</h2>

            {
                cart.map((item, index) => (
                    <div className="flex flex-col bg-white shadow-md w-72">
                        <img className='w-72 h-48 object-cover'
                            src={item.img}
                            alt="image" />
                        <div className="p-4 text-sm">
                            <p className="text-slate-600">{item.price}</p>
                            <p className="text-slate-800 text-base font-medium my-1.5">{item.name}</p>
                            <p className="text-slate-500">{item.para}</p>
                            <div className="grid grid-cols-2 gap-2 mt-3">
                                <button className="bg-slate-100 text-slate-600 py-2" onClick={() => addToCart(item)}>
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
        </div>
    )
}

export default Cart
