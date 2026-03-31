import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { auth, provider } from '../firebase';  
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

function Login() {
  const [user, setUser] = useState(null);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);



  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("Google Login Successful ✅");

    } catch (error) {
      alert("Login Failed: " + error.message);
    }
  };


  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logout Successful ");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="h-[84vh] flex justify-center items-center ">
      <div className="bg-white rounded-xl shadow-xl p-10 w-[400px]">



        {user ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-6">
              Welcome {user.displayName} 👋
            </h2>

            <img
              src={user.photoURL}
              alt="profile"
              className="w-20 h-20 rounded-full mx-auto mb-3"
            />

            <p className="mb-4 font-semibold">{user.email}</p>

            <button
              onClick={handleLogout}
              className="w-full py-3 rounded-full bg-red-500 text-white font-semibold hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <>



            <h2 className="text-2xl font-semibold text-center mb-8">Welcome back</h2>

            <form className="flex flex-col gap-5">
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Enter your password"
                className="border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="text-right text-sm text-blue-600 cursor-pointer hover:underline">
                Forgot Password
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition"
              >
                Log in
              </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
              Don’t have an account?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Signup
              </a>
            </p>

            <div className="flex flex-col gap-4 mt-8">
              <button className="flex items-center justify-center gap-2 bg-black text-white py-3 rounded-full hover:bg-gray-800 transition">
                <FaApple size={20} />
                Log in with Apple
              </button>

              <button
                onClick={handleGoogleLogin}
                className="flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-full hover:bg-gray-100 transition"
              >
                <FcGoogle size={20} />
                Continue with Google
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;