import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function AddProduct() {

    const [title, settitle] = useState("")
    const [price, setprice] = useState("")
    const [img, setimg] = useState("")

    const { id } = useParams()
    const navigate = useNavigate()



    useEffect(() => {
        if (id) {
            fetch(`http://localhost:3000/product/${id}`)
                .then(res => res.json())
                .then(data => {
                    settitle(data.title)
                    setprice(data.price)
                    setimg(data.img)
                })
        }
    }, [id])

    function handleSubmit(e) {
        e.preventDefault()

        const newProduct = {
            title,
            price,
            img
        }


        if (id) {
            fetch(`http://localhost:3000/product/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newProduct)
            })
                .then(res => res.json())
                .then(() => {
                    alert("Product Updated Successfully ✅")
                    navigate("/")
                })
        }
        else {
            fetch("http://localhost:3000/product", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newProduct)
            })
                .then(res => res.json())
                .then(() => {
                    alert("Product Added Successfully ")
                    navigate("/")
                })
        }
    }

    return (
        <div className='h-[84vh] flex justify-center items-center '>

            <form
                onSubmit={handleSubmit}
                className='bg-white p-8 rounded-xl shadow-xl flex flex-col gap-4 w-[350px]'
            >

                <h1 className='text-2xl font-bold text-center'>
                    {id ? "Update Product" : "Add Product"}
                </h1>

                <input
                    type="text"
                    placeholder="Product Title"
                    value={title}
                    onChange={(e) => settitle(e.target.value)}
                    className='border p-2 rounded-lg'
                    required
                />

                <input
                    type="number"
                    placeholder="Product Price"
                    value={price}
                    onChange={(e) => setprice(e.target.value)}
                    className='border p-2 rounded-lg'
                    required
                />

                <input
                    type="text"
                    placeholder="Image URL"
                    value={img}
                    onChange={(e) => setimg(e.target.value)}
                    className='border p-2 rounded-lg'
                    required
                />

                <button
                    type="submit"
                    className='bg-black text-white py-2 rounded-lg'>
                    {id ? "Update Product" : "Add Product"}
                </button>

            </form>

        </div>
    )
}

export default AddProduct