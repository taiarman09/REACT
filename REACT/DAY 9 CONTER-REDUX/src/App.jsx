import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DECREMENT, INCREMENT } from './actionType'
import { useDispatch, useSelector } from 'react-redux'

function App() {

  const data = useSelector((state) => state)
  const dispatch = useDispatch()

  return (
    <>
      <h1>count: {data.count}</h1>
      <button onClick={()=>dispatch({type:INCREMENT, payload:5})}>+</button>
      <button onClick={()=>dispatch({type:DECREMENT, payload:5})}>-</button>
    </>
  )

}

export default App
