import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { data } from 'autoprefixer'

function App() {
  const [product, setProduct] = useState([])
  const [page, setpage] = useState(1)

  function showData() {
    fetch(`http://localhost:3000/product?_page=${page}&_limit=4`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err))
  }


  useEffect(() => {
    showData()
  }, [page])

  return (
    <>
      <div>
        {
          product.map((el) => {
            return (
              <div>
                  <h1>{el.id}</h1>
                  <p>{el.tille}</p>
                  <p>{el.price}</p>
                  <p>{el.description}</p>
                  <p>{el.category}</p>
              </div>
            )
          })
        }
        <button onClick={()=>setpage(page - 1 )}>Prev</button>
        {page}
        <button onClick={()=>setpage(page + 1 )}>Next</button>
      </div>
    </>
  )
}

export default App
