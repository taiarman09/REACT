import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [obj, setobj] = useState({
    name: "",
    age: "",
    number: ""
  })

  const handleChange = (e) => {
    setobj({
      ...obj,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(obj)

    setobj({
      name: "",
      age: "",
      number: ""
    })
  }


  return (
    <>
      <form onSubmit={handleSubmit} className="w-[300px] mx-auto mt-10 flex flex-col gap-4 p-6 border rounded-lg shadow-md bg-white">

        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={obj.name}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="number"
          placeholder="Enter Age"
          name="age"
          value={obj.age}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="number"
          placeholder="Enter Number"
          name="number"
          value={obj.number}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
        >
          Submit
        </button>

      </form>
    </>
  )
}

export default App
