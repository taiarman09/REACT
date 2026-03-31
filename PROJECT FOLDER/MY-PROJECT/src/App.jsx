import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './component/Nav'
import Login from "./component/login";
import Hero from "./component/Hero";
import Produce from "./component/Produce";

function App() {
  return (
    <BrowserRouter>

      <Nav />

      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Hero />
      <Produce />

    </BrowserRouter>
  )
}

export default App
