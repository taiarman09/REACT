import { useState } from 'react'
import './App.css'

function App() {

  const [name, setname] = useState("")
  const [password, setpassword] = useState("")
  const [city, setcity] = useState("")
  const [success, setSuccess] = useState(false)

  function handleSubmit(e) {
    e.preventDefault();

    let Data = {
      name: name,
      password: password,
      city: city
    }

    localStorage.setItem("student", JSON.stringify(Data))

    setSuccess(true)

    // reset fields
    setname("")
    setpassword("")
    setcity("")
  }

  return (
    <div className="container">
      <form className="form-card" onSubmit={handleSubmit}>

        <h2>Student Registration</h2>

        <input
          type="text"
          placeholder='Enter your Username'
          value={name}
          onChange={(e)=>setname(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder='Enter your Password'
          value={password}
          onChange={(e)=>setpassword(e.target.value)}
          required
        />

        <select
          value={city}
          onChange={(e)=>setcity(e.target.value)}
          required
        >
          <option value="">Select City</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Rajkot">Rajkot</option>
          <option value="Pune">Pune</option>
        </select>

        <button type='submit'>Submit</button>

        {success && <p className="success">Data Saved Successfully ✅</p>}

      </form>
    </div>
  )
}

export default App
