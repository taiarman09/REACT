import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { withCounter } from './HOD.JSX'


function ClickCounter({increment, count}){
  return(
    <button onClick={increment}>Click this may {count} times</button>
  )
}


const EnhancedClickCounter = withCounter(ClickCounter)

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EnhancedClickCounter />
    </>
  )
}

export default App
