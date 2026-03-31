import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [count2] = useState(0)

  const buttonref = useRef(null)
  const consolebtn = useRef(0)

  useEffect(() => {
    const button = buttonref.current
    const handleclick = () => {

      consolebtn.current += 1;
      console.log("Currect Value: ", consolebtn.current)


    }

    button.addEventListener("click", handleclick)

    return () => {
      button.removeEventListener("click", handleclick)
    }

  }, [])

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Currect value {count}</button>
      <button ref={buttonref}>Currect value {count2}</button>
    </>
  )
}

export default App
