import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Product() {

    const [page, setpage] = useState(1)
    const [product, setproduct] = useState([])
    const [totalPages, setTotalPages] = useState(1)
    const navigate = useNavigate()

    function showData() {
        fetch(`http://localhost:3000/product?_page=${page}&_limit=4`)
            .then((res) => {
                const total = res.headers.get("x-total-count")
                setTotalPages(Math.ceil(total / 4))
                return res.json()
            })
            .then((data) => setproduct(data))
            .catch((err) => console.log(err))
    }

    function handleDelete(id) {
        fetch(`http://localhost:3000/product/${id}`, {
            method: "DELETE"
        })
            .then(() => {
                alert("Product Deleted ✅")
                showData()
            })
    }

    useEffect(() => {
        showData()
    }, [page])

    return (
        <div className='min-h-[84vh] w-full flex flex-col justify-center items-center gap-16 pt-10 pb-10'>

            <div className='flex justify-center items-center gap-10 flex-wrap'>
                {product.map((el) => (
                    <div key={el.id} className='w-[250px] h-[400px] bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden'>
                        <div className='h-[60%] w-full overflow-hidden'>
                            <img className='h-full w-full object-fill' src={el.img} alt="" />
                        </div>

                        <div className='p-4 flex flex-col gap-2'>
                            <h1 className='font-bold text-lg text-gray-700'>{el.title}</h1>
                            <p className='text-gray-500 text-sm'>₹{el.price}</p>

                            <div className='flex gap-2 mt-2'>
                                <button
                                    onClick={() => navigate(`/edit/${el.id}`)}
                                    className='bg-blue-500 text-white px-3 py-1 rounded'>
                                    Update
                                </button>
                                <button
                                    onClick={() => handleDelete(el.id)}
                                    className='bg-red-500 text-white px-3 py-1 rounded'>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            <div className='flex items-center gap-6 bg-white px-8 py-4 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300'>


                <div>
                    <button
                        onClick={() => setpage(page - 1)}
                        disabled={page === 1}
                        className='px-6 py-2 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 hover:from-black hover:to-gray-800 hover:text-white transition-all duration-300 shadow hover:shadow-lg active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed'>
                        ← Prev
                    </button>
                </div>


                <div className='flex gap-3'>

                    <button
                        onClick={() => setpage(page)}
                        className='border border-gray-300 w-[45px] h-[45px] rounded-xl font-semibold bg-black text-white shadow hover:shadow-lg hover:scale-110 transition-all duration-300'>
                        {page}
                    </button>

                    <button
                        onClick={() => setpage(page + 1)}
                        className='border border-gray-300 w-[45px] h-[45px] rounded-xl font-semibold bg-white hover:bg-black hover:text-white shadow hover:shadow-lg hover:scale-110 transition-all duration-300'>
                        {page + 1}
                    </button>
                    

                    <button
                        onClick={() => setpage(page + 2)}
                        className='border border-gray-300 w-[45px] h-[45px] rounded-xl font-semibold bg-white hover:bg-black hover:text-white shadow hover:shadow-lg hover:scale-110 transition-all duration-300'>
                        {page + 2}
                    </button>

                </div>


                <div>
                    <button
                        onClick={() => setpage(page + 1)}
                        className='px-6 py-2 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 hover:from-black hover:to-gray-800 hover:text-white transition-all duration-300 shadow hover:shadow-lg active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed'>
                        Next →
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Product