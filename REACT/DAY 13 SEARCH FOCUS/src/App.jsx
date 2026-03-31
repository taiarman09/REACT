import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const ref = useRef()

  useEffect(() => {
    ref.current.focus()
  }, [])

  return (
    <>
      <input type="text" placeholder='Search...' ref={ref} />
    </>
  )
}

export default App
