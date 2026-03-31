import React, { useState } from 'react'

function UseCallback() {

    const [theme, setTheme] = useState("Light")
    const [count, setCount] = useState(1)

    const handleChange = () => {
        if (theme === "Light") {
            setTheme("dark")
        } else {
            setTheme("Light")
        }
    }

    const getItem = () => {
        return (
            <ul>
                <li>{count}</li>
                <li>{count + 1}</li>
                <li>{count + 2}</li>
            </ul>
        )
    }

    return (
        <div>
            <button className='border border-black px-3 py-1 mt-10' onClick={handleChange}>Theme</button>
            <p>Theme: {theme}</p>
            <button className='border border-black px-3 py-1 mt-10' onClick={() => setCount(count + 1)}>Increase</button>
            <p>Count: {count}</p>
            <p>{getItem()}</p>
        </div>
    )
}

export default UseCallback
