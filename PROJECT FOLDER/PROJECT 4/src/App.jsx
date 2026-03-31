import { useState, useEffect } from 'react'
import './App.css'
import Nav from './component/Nav'
import { Routes, Route } from "react-router-dom";
import Product from "./component/Product";
import Home from './component/Home'
import AddProduct from './component/AddProduct'
import Login from './component/Login'
import { auth, provider } from './firebase'
import { onAuthStateChanged } from "firebase/auth";

function App() {
  
  
  const [user, setUser] = useState(null);

 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className='bg-gradient-to-br from-gray-100 via-white to-gray-200'>
        

        <Nav user={user} setUser={setUser} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/Login" element={<Login user={user} setUser={setUser} />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/edit/:id" element={<AddProduct />} />
        </Routes>
      </div>
    </>
  )
}

export default App