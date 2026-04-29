import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/products")
        setProducts(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {
            products.map((item) => {
              return (
                <div

                  className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition"
                >
                  <img
                    src={item.img}
                    alt=""
                    className="h-40 w-full object-contain mb-4"
                  />

                  <h2 className="text-lg font-semibold line-clamp-2">
                    {item.title}
                  </h2>

                  <p className="text-green-600 font-bold mt-2">
                    ₹ {item.price}
                  </p>
                </div>
              )
            })
          }

        </div>
      </div>
    </>
  )
}

export default App
