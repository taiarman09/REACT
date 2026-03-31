import React, { useState } from 'react'

function Section() {


    const item = [
        {
            id: 1,
            name: "Aarav Mehta",
            email: "aarav.mehta92@gmail.com",
            age: "29"
        },
        {
            id: 2,
            name: "Priya Sharma",
            email: "priya.sharma.consult@gmail.com",
            age: "34"
        },
        {
            id: 3,
            name: "Neha Verma",
            email: "neha.verma.hr@gmail.com",
            age: "27"
        }
    ]


    const [data, setdata] = useState({
        name: "",
        email: "",
        age: ""
    })

    const [list, setlist] = useState(item)
    const [edit, setedit] = useState(null)

    const handleChange = (e) => {
        setdata({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleEdit = (index) => {
        setdata(list[index])
        setedit(index)
    }

    const handleDelete = (index) => {
        const confirmData = window.confirm("Are you sure you want to delete?")
        if (confirmData) {
            const newlist = list.filter((item, i) => i !== index)
            setlist(newlist)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (data.name === "" || data.email === "" || data.age === "") {
            alert("please Fill All details")
            return
        }

        if (edit !== null) {
            const updatelist = [...list]
            updatelist[edit] = data
            setlist(updatelist)
            setedit(null)
        } else {
            setlist([...list, data])
        }

        setdata({
            name: "",
            email: "",
            age: ""
        })
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 flex">




            <div className="w-[30%] flex justify-center items-center p-8">

                <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl hover:shadow-blue-300 transition duration-300">

                    <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
                        {edit !== null ? "Update User ✏️" : "Add User 💾"}
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        <input
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            placeholder="Enter Name"
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
                        />

                        <input
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            placeholder="Enter Email"
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none transition"
                        />

                        <input
                            type="number"
                            name="age"
                            value={data.age}
                            onChange={handleChange}
                            placeholder="Enter Age"
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none transition"
                        />

                        <button
                            type="submit"
                            className={`w-full p-3 text-white font-semibold rounded-lg shadow-md transition duration-300
                                ${edit !== null
                                    ? "bg-yellow-500 hover:bg-yellow-600"
                                    : "bg-blue-500 hover:bg-blue-600"
                                }`}
                        >
                            {edit !== null ? "Update User" : "Save User"}
                        </button>

                    </form>

                </div>

            </div>





            <div className="w-[70%] bg-white p-8 shadow-2xl">

                <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">
                    User List 📋
                </h2>



                <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-[80px_150px_1fr_80px_150px] lg:grid-cols-[100px_200px_1fr_80px_180px] bg-gray-200 p-3 rounded-lg font-semibold text-gray-700
">

                    <p>ID</p>

                    <p>Name</p>

                    <p className="hidden sm:block">
                        Email
                    </p>

                    <p className="hidden md:block">
                        Age
                    </p>

                    <p className="text-center hidden md:block">
                        Action
                    </p>

                </div>





                <div className="mt-3 space-y-2 max-h-[75vh] overflow-y-auto">

                    {
                        list.length === 0 ? (
                            <p className="text-center text-gray-400 mt-5">
                                No users found 😔
                            </p>
                        ) : (
                            list.map((item, i) => (
                                <div
                                    key={i}
                                    className="grid grid-cols-[100px_200px_1fr_80px_180px] items-center p-3 border rounded-lg hover:bg-gray-100 hover:shadow-md transition duration-300"
                                >

                                    <p className="font-medium">{i + 1}</p>
                                    <p className="font-medium">{item.name}</p>

                                    <p className="text-gray-600">{item.email}</p>

                                    <p className="text-gray-600">{item.age}</p>

                                    <div className="flex justify-center gap-2">

                                        <button
                                            onClick={() => handleEdit(i)}
                                            className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-lg text-sm transition"
                                        >
                                            Edit
                                        </button>

                                        <button
                                            onClick={() => handleDelete(i)}
                                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition"
                                        >
                                            Delete
                                        </button>

                                    </div>

                                </div>
                            ))
                        )
                    }

                </div>

            </div>

        </div>
    )
}

export default Section