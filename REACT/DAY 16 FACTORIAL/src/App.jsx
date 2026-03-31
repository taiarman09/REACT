import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseMemo from './UseMemo'
import UseCallback from './UseCallback'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UseMemo />
      <UseCallback />
    </>
  )
}

export default App
